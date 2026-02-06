<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Hostel" id="add_hostel" @print="() => exportData('print')" @export="exportData"
          @add="openAddModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message" @update:message="notificationStore.clearNotification()" />

      <card title="Hostels" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortData" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Type</label>
                <vue-select v-model="filterType" :options="typeOptions" placeholder="Select Type" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" placeholder="Select Status" />
              </div>
            </div>
          </div>
        </template>
        <div class="custom-datatable-filter table-responsive">
          <a-table class="table datatable thead-light" :columns="columns" :row-selection="rowSelection" :pagination="{
            current: hostelsStore.currentPage,
            pageSize: hostelsStore.perPage,
            total: hostelsStore.total,
            showSizeChanger: true,
            showQuickJumper: true
          }" :data-source="hostels" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'hostel_id'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.HostelID }}</a>
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
                          data-bs-target="#edit_hostel"
                          @click="selectedHostel = { id: record.id, ...record.originalAttributes }"><i
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
  <hostel-modal modal-id="add_hostel" :hostel-data="selectedHostel" @success="fetchData"></hostel-modal>
  <hostel-modal modal-id="edit_hostel" :is-edit="true" :hostel-data="selectedHostel"
    @success="fetchData"></hostel-modal>
  <delete-confirm-modal modal-id="delete-modal" @confirmed="confirmDelete"></delete-confirm-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useHostelsStore } from '@/stores/hostels';
import { useNotificationStore } from "@/stores/notification";

const hostelsStore = useHostelsStore();
const notificationStore = useNotificationStore();

const title = "Hostels";
const text = "Dashboard";
const text1 = "Management";
const text2 = "Hostel List";

const selectedHostel = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(hostelsStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);
const filterType = ref('Select');
const typeOptions = ref(['Select', 'Boys', 'Girls', 'Mixed']);

const columns = [
  {
    title: "ID",
    dataIndex: "hostel_id",
    key: "hostel_id",
    sorter: true,
  },
  {
    title: "Hostel Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Hostel Type",
    dataIndex: "type",
    key: "type",
    sorter: true,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: true,
  },
  {
    title: "Intake",
    dataIndex: "intake",
    key: "intake",
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
    width: 80,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const fetchData = async () => {
  await hostelsStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  hostelsStore.currentPage = pagination.current;
  hostelsStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    hostelsStore.sort = sortOrder;
  }

  fetchData();
};

const sortData = (sortType) => {
  currentSort.value = sortType;
  hostelsStore.sort = sortType;
  fetchData();
};

const exportData = async (type) => {
  hostelsStore.exportType = type;
  await hostelsStore.export();
};

const handleDelete = (id) => {
  hostelsStore.id = id;
};

const confirmDelete = async () => {
  if (hostelsStore.id) {
    const success = await hostelsStore.destroy(hostelsStore.id);
    if (success) {
      fetchData();
    }
  }
};

const openAddModal = () => {
  selectedHostel.value = {};
};

const applyFilter = () => {
  hostelsStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  hostelsStore.type = filterType.value === 'Select' ? null : filterType.value;
  hostelsStore.currentPage = 1;
  fetchData();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  filterType.value = 'Select';
  hostelsStore.status = null;
  hostelsStore.type = null;
  hostelsStore.currentPage = 1;
  fetchData();
};

watch(rowsPerPage, (newVal) => {
  hostelsStore.perPage = parseInt(newVal);
  hostelsStore.currentPage = 1;
  fetchData();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  if (Array.isArray(newRange) && newRange.length === 2) {
    const [start, end] = newRange;
    hostelsStore.dateStart = m(start).format('YYYY-MM-DD');
    hostelsStore.dateEnd = m(end).format('YYYY-MM-DD');
    hostelsStore.currentPage = 1;
    fetchData();
  }
});

watch(searchQuery, (newVal) => {
  hostelsStore.search = newVal;
  hostelsStore.currentPage = 1;
  fetchData();
});

onMounted(() => {
  fetchData();
});

const hostels = computed(() => (hostelsStore.hostels || []).map((item, index) => {
  const attr = item.attributes || {};
  return {
    key: index + 1,
    id: item.id,
    HostelID: attr.hostel_id || `HST-${item.id}`,
    name: attr.name,
    type: attr.type,
    address: attr.address,
    intake: attr.intake,
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    originalAttributes: attr
  };
}));
</script>
