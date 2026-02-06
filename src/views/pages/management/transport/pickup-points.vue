<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Pickup Point" id="add_pickup_point" @print="() => exportData('print')"
          @export="exportData" @add="openAddModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Pickup Points" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortPickupPoints" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" id="seleus" placeholder="Select" />
              </div>
            </div>
          </div>
        </template>
        <div class="custom-datatable-filter table-responsive">
          <a-table class="table datatable thead-light" :columns="columns" :data-source="pickupPoints"
            :row-selection="rowSelection" :pagination="{
              current: pickupPointsStore.currentPage,
              pageSize: pickupPointsStore.perPage,
              total: pickupPointsStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'pickup_id'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.PickupID }}</a>
                </div>
              </template>
              <template v-if="column.key === 'Status'">
                <span :class="record.statusClass" class="badge d-inline-flex align-items-center">
                  <i class="ti ti-circle-filled fs-5 me-1"></i>{{ record.Status }}
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
                          data-bs-target="#edit_pickup_point"
                          @click="selectedPickupPoint = { id: record.id, ...record.originalAttributes }"><i
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
  <pickup-point-modal :pickup-point-data="selectedPickupPoint" @refresh="fetchPickupPoints"></pickup-point-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { usePickupPointsStore } from '@/stores/pickup-points';
import { useNotificationStore } from "@/stores/notification";

const pickupPointsStore = usePickupPointsStore();
const notificationStore = useNotificationStore();

const title = "Pickup Points";
const text = "Dashboard";
const text1 = "Management";
const text2 = "Pickup Points";

const selectedPickupPoint = ref({});
const today = new Date();
const dateRange = ref([
  moment(new Date(today.getFullYear(), today.getMonth(), 1)).format('DD-MM-YYYY'),
  moment(new Date(today.getFullYear(), today.getMonth() + 1, 0)).format('DD-MM-YYYY')
]);
const currentSort = ref('asc');
const rowsPerPage = ref(10);
const searchQuery = ref('');
const filterStatus = ref('Select');

const statusOptions = ['Select', 'Active', 'Inactive'];

const columns = [
  { sorter: false },
  {
    title: "ID",
    dataIndex: "PickupID",
    key: "pickup_id",
    sorter: (a, b) => a.PickupID.localeCompare(b.PickupID),
  },
  {
    title: "Pickup Point",
    dataIndex: "Name",
    sorter: (a, b) => a.Name.localeCompare(b.Name),
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: (a, b) => a.Status.localeCompare(b.Status),
  },
  {
    title: "Added On",
    dataIndex: "AddedOn",
    sorter: (a, b) => new Date(a.AddedOn) - new Date(b.AddedOn),
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const pickupPoints = computed(() => {
  return (pickupPointsStore.pickupPoints || []).map((item) => {
    const attr = item.attributes || {};
    return {
      id: item.id,
      PickupID: attr.pickup_id || '',
      Name: attr.name || '',
      Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
      statusClass: attr.status === 'active' ? 'badge-soft-success' : 'badge-soft-danger',
      AddedOn: attr.created_at ? moment(attr.created_at).format('DD MMM YYYY') : '',
      originalAttributes: attr
    };
  });
});

watch(searchQuery, (newVal) => {
  pickupPointsStore.search = newVal;
  fetchPickupPoints();
});

watch(rowsPerPage, (newVal) => {
  pickupPointsStore.perPage = newVal;
  fetchPickupPoints();
});

watch(dateRange, (newVal) => {
  if (newVal && newVal.length === 2) {
    pickupPointsStore.dateStart = moment(newVal[0], 'DD-MM-YYYY').format('YYYY-MM-DD');
    pickupPointsStore.dateEnd = moment(newVal[1], 'DD-MM-YYYY').format('YYYY-MM-DD');
    fetchPickupPoints();
  }
});

function sortPickupPoints(sort) {
  pickupPointsStore.sort = sort;
  fetchPickupPoints();
}

function handleTableChange(pagination) {
  pickupPointsStore.currentPage = pagination.current;
  pickupPointsStore.perPage = pagination.pageSize;
  fetchPickupPoints();
}

function applyFilter() {
  pickupPointsStore.status = filterStatus.value !== 'Select' ? filterStatus.value : null;
  fetchPickupPoints();
}

function resetFilter() {
  filterStatus.value = 'Select';
  pickupPointsStore.status = null;
  fetchPickupPoints();
}

async function fetchPickupPoints() {
  await pickupPointsStore.index();
}

function openAddModal() {
  selectedPickupPoint.value = {};
}

async function exportData(type) {
  pickupPointsStore.exportType = type;
  await pickupPointsStore.export();
}

function handleDelete(id) {
  pickupPointsStore.id = id;
}

onMounted(() => {
  pickupPointsStore.dateStart = moment(dateRange.value[0], 'DD-MM-YYYY').format('YYYY-MM-DD');
  pickupPointsStore.dateEnd = moment(dateRange.value[1], 'DD-MM-YYYY').format('YYYY-MM-DD');
  fetchPickupPoints();
});
</script>
