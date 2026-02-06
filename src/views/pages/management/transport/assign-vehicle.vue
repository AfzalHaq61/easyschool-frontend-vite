<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Assign Vehicle" id="add_assign_vehicle" @print="() => exportData('print')"
          @export="exportData" @add="openAddModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Assign Vehicle List" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortAssignVehicles" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Pickup Point</label>
                <vue-select v-model="filterPickupPoint" :options="pickupPointOptions" id="filterPickupPoint"
                  placeholder="Select Pickup Point" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Vehicle Number</label>
                <vue-select v-model="filterVehicleNumber" :options="vehicleOptions" id="filterVehicleNumber"
                  placeholder="Select Vehicle Number" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Route</label>
                <vue-select v-model="filterRoute" :options="routeOptions" id="filterRoute" placeholder="Select Route" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" id="filterStatus"
                  placeholder="Select Status" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Driver</label>
                <vue-select v-model="filterDriver" :options="driverOptions" id="filterDriver"
                  placeholder="Select Driver" />
              </div>
            </div>
          </div>
        </template>
        <div class="custom-datatable-filter">
          <a-table class="table datatable thead-light" :columns="columns" :data-source="assignVehicles"
            :row-selection="rowSelection" :scroll="{ x: 'max-content' }" :pagination="{
              current: assignVehiclesStore.currentPage,
              pageSize: assignVehiclesStore.perPage,
              total: assignVehiclesStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'ID'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.attributes.assign_id }}</a>
                </div>
              </template>
              <template v-if="column.key === 'Route'">
                <a href="javascript:void(0);">{{ record.attributes.route_name }}</a>
              </template>
              <template v-if="column.key === 'PickupPoint'">
                <a href="javascript:void(0);">{{ record.attributes.pickup_point_name }}</a>
              </template>
              <template v-if="column.key === 'Vehicle'">
                <a href="javascript:void(0);">{{ record.attributes.vehicle_number }}</a>
              </template>
              <template v-if="column.key === 'Driver'">
                <h2 class="table-avatar d-flex align-items-center">
                  <user-avatar :image="record.attributes.driver_image" size="avatar-sm" />
                  <div class="ms-2">
                    <a href="javascript:void(0);">{{ record.attributes.driver_name }}</a>
                    <a href="javascript:void(0);" style="color: #999999;">{{ record.attributes.driver_phone }}</a>
                  </div>
                </h2>
              </template>
              <template v-if="column.key === 'Status'">
                <span
                  :class="record.attributes.status === 'active' ? 'badge badge-soft-success' : 'badge badge-soft-danger'"
                  class="d-inline-flex align-items-center">
                  <i class="ti ti-circle-filled fs-5 me-1"></i>{{ record.attributes.status === 'active' ? 'Active' :
                    'Inactive' }}
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
                          data-bs-target="#edit_assign_vehicle" @click="selectedAssignVehicle = record">
                          <i class="ti ti-edit-circle me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                          data-bs-target="#delete-modal" @click="handleDelete(record.id)">
                          <i class="ti ti-trash-x me-2"></i>Delete
                        </a>
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
  <assign-vehicle-modal :selected-assign-vehicle="selectedAssignVehicle" @refresh="fetchAssignVehicles" />
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useAssignVehiclesStore } from "@/stores/assign-vehicles";
import { useNotificationStore } from "@/stores/notification";
import moment from "moment";
import axios from "axios";
import VueSelect from "vue3-select2-component";

const title = ref("Assign Vehicle");
const text = ref("Dashboard");
const text1 = ref("Management");
const text2 = ref("Assign Vehicle");

const assignVehiclesStore = useAssignVehiclesStore();
const notificationStore = useNotificationStore();

const assignVehicles = computed(() => assignVehiclesStore.assignVehicles);
const selectedAssignVehicle = ref({});

// Filters
const dateRange = ref(null);
const currentSort = ref("asc");
const rowsPerPage = ref(10);
const searchQuery = ref("");
const filterPickupPoint = ref(null);
const filterVehicleNumber = ref(null);
const filterRoute = ref(null);
const filterStatus = ref(null);
const filterDriver = ref(null);

// Options for filters
const pickupPointOptions = ref([]);
const vehicleOptions = ref([]);
const routeOptions = ref([]);
const driverOptions = ref([]);
const statusOptions = ref([
  { id: "active", text: "Active" },
  { id: "inactive", text: "Inactive" },
]);

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    sorter: true,
  },
  {
    title: "Route",
    dataIndex: "Route",
    key: "Route",
    sorter: true,
  },
  {
    title: "Pickup Point",
    dataIndex: "PickupPoint",
    key: "PickupPoint",
    sorter: true,
  },
  {
    title: "Vehicle",
    dataIndex: "Vehicle",
    key: "Vehicle",
    sorter: true,
  },
  {
    title: "Driver",
    dataIndex: "Driver",
    key: "Driver",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: true,
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

onMounted(async () => {
  assignVehiclesStore.dateStart = moment()
    .startOf("month")
    .format("YYYY-MM-DD");
  assignVehiclesStore.dateEnd = moment().endOf("month").format("YYYY-MM-DD");
  dateRange.value = [
    moment().startOf("month").format("DD-MM-YYYY"),
    moment().endOf("month").format("DD-MM-YYYY"),
  ];

  await loadFilterOptions();
  fetchAssignVehicles();
});

async function loadFilterOptions() {
  try {
    const pickupResponse = await axios.get("/pickup-points", { params: { per_page: 1000 } });
    pickupPointOptions.value = pickupResponse.data.data.map(p => ({ id: p.id, text: p.attributes.name }));

    const vehicleResponse = await axios.get("/vehicles", { params: { per_page: 1000 } });
    vehicleOptions.value = vehicleResponse.data.data.map(v => ({ id: v.attributes.vehicle_number, text: v.attributes.vehicle_number }));

    const routeResponse = await axios.get("/routes", { params: { per_page: 1000 } });
    routeOptions.value = routeResponse.data.data.map(r => ({ id: r.id, text: r.attributes.name }));

    const driverResponse = await axios.get("/drivers", { params: { per_page: 1000 } });
    driverOptions.value = driverResponse.data.data.map(d => ({ id: d.id, text: d.attributes.name }));
  } catch (error) {
    console.error("Error loading filter options:", error);
  }
}

async function fetchAssignVehicles() {
  await assignVehiclesStore.index();
}

function handleTableChange(pagination, filters, sorter) {
  assignVehiclesStore.currentPage = pagination.current;
  assignVehiclesStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    assignVehiclesStore.sort = sorter.order === 'ascend' ? 'asc' : 'desc';
  } else {
    assignVehiclesStore.sort = 'asc';
  }

  fetchAssignVehicles();
}

watch(rowsPerPage, (newVal) => {
  assignVehiclesStore.perPage = newVal;
  assignVehiclesStore.currentPage = 1;
  fetchAssignVehicles();
});

watch(searchQuery, (newVal) => {
  assignVehiclesStore.search = newVal;
  assignVehiclesStore.currentPage = 1;
  fetchAssignVehicles();
});

function sortAssignVehicles(sortOrder) {
  assignVehiclesStore.sort = sortOrder;
  fetchAssignVehicles();
}

function applyFilter() {
  assignVehiclesStore.pickup_point_id = filterPickupPoint.value;
  assignVehiclesStore.vehicle_number = filterVehicleNumber.value;
  assignVehiclesStore.route_id = filterRoute.value;
  assignVehiclesStore.status = filterStatus.value;
  assignVehiclesStore.driver_id = filterDriver.value;
  fetchAssignVehicles();
}

function resetFilter() {
  filterPickupPoint.value = null;
  filterVehicleNumber.value = null;
  filterRoute.value = null;
  filterStatus.value = null;
  filterDriver.value = null;
  assignVehiclesStore.pickup_point_id = null;
  assignVehiclesStore.vehicle_number = null;
  assignVehiclesStore.route_id = null;
  assignVehiclesStore.status = null;
  assignVehiclesStore.driver_id = null;
  fetchAssignVehicles();
}

watch(dateRange, (newVal) => {
  if (newVal && newVal.length === 2) {
    assignVehiclesStore.dateStart = moment(newVal[0], "DD-MM-YYYY").format(
      "YYYY-MM-DD"
    );
    assignVehiclesStore.dateEnd = moment(newVal[1], "DD-MM-YYYY").format(
      "YYYY-MM-DD"
    );
    fetchAssignVehicles();
  }
});

function openAddModal() {
  selectedAssignVehicle.value = {};
}

async function exportData(type) {
  assignVehiclesStore.exportType = type;
  await assignVehiclesStore.export();
}

function handleDelete(id) {
  assignVehiclesStore.id = id;
}
</script>
