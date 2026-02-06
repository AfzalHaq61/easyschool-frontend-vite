<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Room Type" id="add_hostel_room_type" @print="() => exportData('print')"
          @export="exportData" @add="openAddModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message" @update:message="notificationStore.clearNotification()" />

      <card title="Hostel Room Types" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortData" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
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
          <a-table class="table datatable thead-light" :columns="columns" :data-source="roomTypes"
            :row-selection="rowSelection" :pagination="{
              current: hostelRoomTypesStore.currentPage,
              pageSize: hostelRoomTypesStore.perPage,
              total: hostelRoomTypesStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'hostel_room_type_id'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.RoomTypeID }}</a>
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
                          data-bs-target="#edit_hostel_room_type"
                          @click="selectedRoomType = { id: record.id, ...record.originalAttributes }"><i
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
  <hostel-room-type-modal :room-type-data="selectedRoomType" @success="fetchData"
    modal-id="add_hostel_room_type"></hostel-room-type-modal>
  <hostel-room-type-modal :is-edit="true" :room-type-data="selectedRoomType" @success="fetchData"
    modal-id="edit_hostel_room_type"></hostel-room-type-modal>
  <delete-confirm-modal modal-id="delete-modal" @confirmed="confirmDelete"></delete-confirm-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useHostelRoomTypesStore } from '@/stores/hostel-room-types';
import { useNotificationStore } from "@/stores/notification";

const hostelRoomTypesStore = useHostelRoomTypesStore();
const notificationStore = useNotificationStore();

const title = "Hostel Room Type";
const text = "Dashboard";
const text1 = "Hostel";
const text2 = "Room Type";

const selectedRoomType = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(hostelRoomTypesStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);

const columns = [
  {
    title: "ID",
    dataIndex: "hostel_room_type_id",
    key: "hostel_room_type_id",
    sorter: true,
  },
  {
    title: "Room Type",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
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
  await hostelRoomTypesStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  hostelRoomTypesStore.currentPage = pagination.current;
  hostelRoomTypesStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    hostelRoomTypesStore.sort = sortOrder;
  }

  fetchData();
};

const sortData = (sortType) => {
  currentSort.value = sortType;
  hostelRoomTypesStore.sort = sortType;
  fetchData();
};

const exportData = async (type) => {
  hostelRoomTypesStore.exportType = type;
  await hostelRoomTypesStore.export();
};

const handleDelete = (id) => {
  hostelRoomTypesStore.id = id;
};

const confirmDelete = async () => {
  if (hostelRoomTypesStore.id) {
    const success = await hostelRoomTypesStore.destroy(hostelRoomTypesStore.id);
    if (success) {
      fetchData();
    }
  }
};

const openAddModal = () => {
  selectedRoomType.value = {};
};

const applyFilter = () => {
  hostelRoomTypesStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  hostelRoomTypesStore.currentPage = 1;
  fetchData();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  hostelRoomTypesStore.status = null;
  hostelRoomTypesStore.currentPage = 1;
  fetchData();
};

watch(rowsPerPage, (newVal) => {
  hostelRoomTypesStore.perPage = parseInt(newVal);
  hostelRoomTypesStore.currentPage = 1;
  fetchData();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  if (Array.isArray(newRange) && newRange.length === 2) {
    const [start, end] = newRange;
    hostelRoomTypesStore.dateStart = m(start).format('YYYY-MM-DD');
    hostelRoomTypesStore.dateEnd = m(end).format('YYYY-MM-DD');
    hostelRoomTypesStore.currentPage = 1;
    fetchData();
  }
});

watch(searchQuery, (newVal) => {
  hostelRoomTypesStore.search = newVal;
  hostelRoomTypesStore.currentPage = 1;
  fetchData();
});

onMounted(() => {
  fetchData();
});

const roomTypes = computed(() => (hostelRoomTypesStore.roomTypes || []).map((item, index) => {
  const attr = item.attributes || {};
  return {
    key: index + 1,
    id: item.id,
    RoomTypeID: attr.hostel_room_type_id || `HRT-${item.id}`,
    name: attr.name,
    description: attr.description,
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    status: attr.status || 'active',
    originalAttributes: attr
  };
}));
</script>
