<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Vehicle" id="add_vehicle" @print="() => exportData('print')" @export="exportData"
          @add="openAddVehicleModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Vehicles List" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortVehicles" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Vehicle Model</label>
                <vue-select v-model="filterModel" :options="modelOptions" id="filterModel" placeholder="Select" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Made of Year</label>
                <vue-select v-model="filterYear" :options="yearOptions" id="filterYear" placeholder="Select" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">GPS Device</label>
                <vue-select v-model="filterGps" :options="gpsOptions" id="filterGps" placeholder="Select" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Driver</label>
                <vue-select v-model="filterDriver" :options="driverOptions" id="filterDriver" placeholder="Select" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-0">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" id="filterStatus" placeholder="Select" />
              </div>
            </div>
          </div>
        </template>
        <div class="custom-datatable-filter">
          <a-table class="table datatable thead-light" :columns="columns" :data-source="vehicles"
            :row-selection="rowSelection" :scroll="{ x: 'max-content' }" :pagination="{
              current: vehiclesStore.currentPage,
              pageSize: vehiclesStore.perPage,
              total: vehiclesStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'vehicle_id'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.DisplayID }}</a>
                </div>
              </template>
              <template v-if="column.key === 'vehicle_number'">
                <a href="javascript:void(0);">{{ record.vehicle_number }}</a>
              </template>
              <template v-if="column.key === 'made_year'">
                <span class="fs-12">{{ record.made_year }}</span>
              </template>
              <template v-if="column.key === 'tracking'">
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#live_track"
                  @click="selectedVehicle = record" class="btn btn-light btn-sm d-inline-flex align-items-center">
                  <i class="ti ti-map-pin-share me-1"></i>Live Track
                </a>
              </template>
              <template v-if="column.key === 'driver_name'">
                <h2 class="table-avatar d-flex align-items-center">
                  <user-avatar :image="record.driver_image" size="avatar-sm" />
                  <div class="ms-2">
                    <a href="javascript:void(0);">{{ record.driver_name }}</a>
                    <a href="javascript:void(0);" style="color: #999999;">{{
                      record.driver_phone }}</a>
                  </div>
                </h2>
              </template>
              <template v-if="column.key === 'status'">
                <span :class="record.statusClass" class="badge d-inline-flex align-items-center">
                  <i class="ti ti-circle-filled fs-5 me-1"></i>{{ record.StatusLabel }}
                </span>
              </template>
              <template v-if="column.key === 'action'">
                <div class="d-flex align-items-center">
                  <div class="dropdown">
                    <a href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                          data-bs-target="#edit_vehicle"
                          @click="selectedVehicle = { id: record.id, ...record.originalAttributes }"><i
                            class="ti ti-edit-circle me-2"></i>Edit</a>
                      </li>
                      <li>
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" @click="handleDelete(record.id)"
                          data-bs-toggle="modal" data-bs-target="#delete-modal"><i
                            class="ti ti-trash-x me-2"></i>Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </template>
          </a-table>
        </div>
      </card>
    </div>
  </div>
  <vehicle-add-edit-modal :vehicle-data="selectedVehicle" modal-id="add_vehicle"
    @refresh="fetchVehicles"></vehicle-add-edit-modal>
  <vehicle-add-edit-modal :is-edit="true" :vehicle-data="selectedVehicle" modal-id="edit_vehicle"
    @refresh="fetchVehicles"></vehicle-add-edit-modal>
  <delete-confirm-modal title="Delete Vehicle" message="Are you sure you want to delete this vehicle?"
    @confirmed="confirmDelete" />
  <vehicle-live-track-modal :vehicle-data="selectedVehicle"></vehicle-live-track-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useVehiclesStore } from '@/stores/vehicles';
import { useDriversStore } from '@/stores/drivers';
import { useNotificationStore } from "@/stores/notification";

const vehiclesStore = useVehiclesStore();
const driversStore = useDriversStore();
const notificationStore = useNotificationStore();

const title = "Vehicles";
const text = "Dashboard";
const text1 = "Management";
const text2 = "Vehicles";

const selectedVehicle = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(vehiclesStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');

// Filters
const filterStatus = ref('Select');
const filterModel = ref('Select');
const filterYear = ref('Select');
const filterGps = ref('Select');
const filterDriver = ref('Select');

const statusOptions = ref(['Select', 'Active', 'Inactive']);

const modelOptions = computed(() => {
  const models = [...new Set(vehiclesStore.vehicles.map(v => v.attributes.vehicle_model).filter(Boolean))];
  return ['Select', ...models];
});

const yearOptions = computed(() => {
  const years = [...new Set(vehiclesStore.vehicles.map(v => v.attributes.made_year).filter(Boolean))];
  return ['Select', ...years];
});

const gpsOptions = computed(() => {
  const gpsIds = [...new Set(vehiclesStore.vehicles.map(v => v.attributes.gps_device_id).filter(Boolean))];
  return ['Select', ...gpsIds];
});

const driverOptions = computed(() => {
  return [
    { id: 'Select', text: 'Select Driver' },
    ...driversStore.drivers.map(d => ({
      id: d.id,
      text: d.attributes.name
    }))
  ];
});

const columns = [
  {
    title: "ID",
    dataIndex: "vehicle_id",
    key: "vehicle_id",
    sorter: true,
  },
  {
    title: "Vehicle No",
    dataIndex: "vehicle_number",
    key: "vehicle_number",
    sorter: true,
  },
  {
    title: "Model",
    dataIndex: "vehicle_model",
    key: "vehicle_model",
    sorter: true,
  },
  {
    title: "Year",
    dataIndex: "made_year",
    key: "made_year",
    sorter: true,
  },
  {
    title: "Registration No",
    dataIndex: "registration_number",
    key: "registration_number",
    sorter: true,
  },
  {
    title: "Chassis No",
    dataIndex: "chassis_number",
    key: "chassis_number",
    sorter: true,
  },
  {
    title: "GPS Tracking ID",
    dataIndex: "gps_device_id",
    key: "gps_device_id",
    sorter: true,
  },
  {
    title: "Tracking",
    key: "tracking",
  },
  {
    title: "Driver",
    dataIndex: "driver_name",
    key: "driver_name",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: true,
  },
  {
    title: "Action",
    key: "action",
    width: 80,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const fetchVehicles = async () => {
  await vehiclesStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  vehiclesStore.currentPage = pagination.current;
  vehiclesStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    vehiclesStore.sort = sortOrder;
  }

  fetchVehicles();
};

const sortVehicles = (sortType) => {
  currentSort.value = sortType;
  vehiclesStore.sort = sortType;
  fetchVehicles();
};

const exportData = async (type) => {
  vehiclesStore.exportType = type;
  await vehiclesStore.export();
};

const handleDelete = (id) => {
  vehiclesStore.id = id;
};

const confirmDelete = async () => {
  await vehiclesStore.destroy();
};

const openAddVehicleModal = () => {
  selectedVehicle.value = {};
};

const applyFilter = () => {
  vehiclesStore.status = filterStatus.value;
  vehiclesStore.vehicle_model = filterModel.value;
  vehiclesStore.made_year = filterYear.value;
  vehiclesStore.gps_device_id = filterGps.value;
  vehiclesStore.driver_id = filterDriver.value;
  vehiclesStore.currentPage = 1;
  fetchVehicles();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  filterModel.value = 'Select';
  filterYear.value = 'Select';
  filterGps.value = 'Select';
  filterDriver.value = 'Select';

  vehiclesStore.status = null;
  vehiclesStore.vehicle_model = null;
  vehiclesStore.made_year = null;
  vehiclesStore.gps_device_id = null;
  vehiclesStore.driver_id = null;

  vehiclesStore.currentPage = 1;
  fetchVehicles();
};

watch(rowsPerPage, (newVal) => {
  vehiclesStore.perPage = parseInt(newVal);
  vehiclesStore.currentPage = 1;
  fetchVehicles();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  if (newRange && newRange.length === 2) {
    vehiclesStore.dateStart = m(newRange[0]).format('YYYY-MM-DD');
    vehiclesStore.dateEnd = m(newRange[1]).format('YYYY-MM-DD');
  } else {
    vehiclesStore.dateStart = '';
    vehiclesStore.dateEnd = '';
  }
  vehiclesStore.currentPage = 1;
  fetchVehicles();
});

watch(searchQuery, (newVal) => {
  vehiclesStore.search = newVal;
  vehiclesStore.currentPage = 1;
  fetchVehicles();
});

onMounted(() => {
  fetchVehicles();
  if (driversStore.drivers.length === 0) {
    driversStore.index();
  }
});

const vehicles = computed(() => (vehiclesStore.vehicles || []).map((item) => {
  const attr = item.attributes || {};
  const driver = driversStore.drivers.find(d => d.id == attr.driver_id);
  const driverAttr = driver?.attributes || {};
  return {
    id: item.id,
    vehicle_id: attr.vehicle_id,
    DisplayID: attr.vehicle_id,
    vehicle_number: attr.vehicle_number,
    vehicle_model: attr.vehicle_model,
    made_year: attr.made_year,
    registration_number: attr.registration_number,
    chassis_number: attr.chassis_number,
    gps_device_id: attr.gps_device_id,
    driver_id: attr.driver_id,
    driver_name: attr.driver_name || 'Unassigned',
    driver_image: driverAttr.image,
    driver_phone: driverAttr.phone,
    status: attr.status || 'active',
    StatusLabel: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    originalAttributes: attr
  };
}));
</script>
