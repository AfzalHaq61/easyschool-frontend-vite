<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Hostel Room" id="add_hostel_rooms" @print="() => exportData('print')"
          @export="exportData" @add="openAddModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message" @update:message="notificationStore.clearNotification()" />

      <card title="Hostel Rooms" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortData" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Hostel</label>
                <vue-select v-model="filterHostel" :options="hostelOptions" placeholder="Select Hostel" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Room Type</label>
                <vue-select v-model="filterRoomType" :options="roomTypeOptions" placeholder="Select Type" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">No of Beds</label>
                <vue-select v-model="filterBeds" :options="bedOptions" placeholder="Select Number" />
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
            current: hostelRoomsStore.currentPage,
            pageSize: hostelRoomsStore.perPage,
            total: hostelRoomsStore.total,
            showSizeChanger: true,
            showQuickJumper: true
          }" :data-source="rooms" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'hostel_room_id'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.RoomID }}</a>
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
                          data-bs-target="#edit_hostel_rooms"
                          @click="selectedRoom = { id: record.id, ...record.originalAttributes }"><i
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
  <hostel-room-modal modal-id="add_hostel_rooms" :room-data="selectedRoom" @success="fetchData"></hostel-room-modal>
  <hostel-room-modal modal-id="edit_hostel_rooms" :is-edit="true" :room-data="selectedRoom"
    @success="fetchData"></hostel-room-modal>
  <delete-confirm-modal modal-id="delete-modal" @confirmed="confirmDelete"></delete-confirm-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useAuthStore } from '@/stores/auth';
import { useHostelRoomsStore } from '@/stores/hostel-rooms';
import { useHostelsStore } from '@/stores/hostels';
import { useHostelRoomTypesStore } from '@/stores/hostel-room-types';
import { useNotificationStore } from "@/stores/notification";

const authStore = useAuthStore();
const hostelRoomsStore = useHostelRoomsStore();
const hostelsStore = useHostelsStore();
const hostelRoomTypesStore = useHostelRoomTypesStore();
const notificationStore = useNotificationStore();

const title = "Hostel Rooms";
const text = "Dashboard";
const text1 = "Management";
const text2 = "Hostel Rooms";

const selectedRoom = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(hostelRoomsStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');

const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);

const filterHostel = ref('Select');
const hostelOptions = ref(['Select']);

const filterRoomType = ref('Select');
const roomTypeOptions = ref(['Select']);

const filterBeds = ref('Select');
const bedOptions = ref(['Select', '1', '2', '3', '4', '5']);

const columns = [
  {
    title: "ID",
    dataIndex: "hostel_room_id",
    key: "hostel_room_id",
    sorter: true,
  },
  {
    title: "Room No",
    dataIndex: "room_number",
    key: "room_number",
    sorter: true,
  },
  {
    title: "Hostel Name",
    dataIndex: "hostel_name",
    key: "hostel_name",
    sorter: true,
  },
  {
    title: "Room Type",
    dataIndex: "room_type_name",
    key: "room_type_name",
    sorter: true,
  },
  {
    title: "No of Bed",
    dataIndex: "number_of_beds",
    key: "number_of_beds",
    sorter: true,
  },
  {
    title: computed(() => `Cost Per Bed (${authStore.currency})`),
    dataIndex: "cost_per_bed",
    key: "cost_per_bed",
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
  await hostelRoomsStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  hostelRoomsStore.currentPage = pagination.current;
  hostelRoomsStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    hostelRoomsStore.sort = sortOrder;
  }

  fetchData();
};

const sortData = (sortType) => {
  currentSort.value = sortType;
  hostelRoomsStore.sort = sortType;
  fetchData();
};

const exportData = async (type) => {
  hostelRoomsStore.exportType = type;
  await hostelRoomsStore.export();
};

const handleDelete = (id) => {
  hostelRoomsStore.id = id;
};

const confirmDelete = async () => {
  if (hostelRoomsStore.id) {
    const success = await hostelRoomsStore.destroy(hostelRoomsStore.id);
    if (success) {
      fetchData();
    }
  }
};

const openAddModal = () => {
  selectedRoom.value = {};
};

const applyFilter = () => {
  hostelRoomsStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  hostelRoomsStore.hostelId = filterHostel.value === 'Select' ? null : filterHostel.value;
  hostelRoomsStore.roomTypeId = filterRoomType.value === 'Select' ? null : filterRoomType.value;
  hostelRoomsStore.numberOfBeds = filterBeds.value === 'Select' ? null : filterBeds.value;
  hostelRoomsStore.currentPage = 1;
  fetchData();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  filterHostel.value = 'Select';
  filterRoomType.value = 'Select';
  filterBeds.value = 'Select';

  hostelRoomsStore.status = null;
  hostelRoomsStore.hostelId = null;
  hostelRoomsStore.roomTypeId = null;
  hostelRoomsStore.numberOfBeds = null;
  hostelRoomsStore.currentPage = 1;
  fetchData();
};

watch(rowsPerPage, (newVal) => {
  hostelRoomsStore.perPage = parseInt(newVal);
  hostelRoomsStore.currentPage = 1;
  fetchData();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  if (Array.isArray(newRange) && newRange.length === 2) {
    const [start, end] = newRange;
    hostelRoomsStore.dateStart = m(start).format('YYYY-MM-DD');
    hostelRoomsStore.dateEnd = m(end).format('YYYY-MM-DD');
    hostelRoomsStore.currentPage = 1;
    fetchData();
  }
});

watch(searchQuery, (newVal) => {
  hostelRoomsStore.search = newVal;
  hostelRoomsStore.currentPage = 1;
  fetchData();
});

onMounted(async () => {
  fetchData();

  // Load filter options
  if (hostelsStore.hostels.length === 0) await hostelsStore.index();
  if (hostelRoomTypesStore.roomTypes.length === 0) await hostelRoomTypesStore.index();

  hostelOptions.value = ['Select', ...hostelsStore.hostels.map(h => ({
    id: h.id,
    text: h.attributes?.name || h.name
  }))];

  roomTypeOptions.value = ['Select', ...hostelRoomTypesStore.roomTypes.map(t => ({
    id: t.id,
    text: t.attributes?.name || t.name
  }))];
});

const rooms = computed(() => (hostelRoomsStore.rooms || []).map((item, index) => {
  const attr = item.attributes || {};
  return {
    key: index + 1,
    id: item.id,
    RoomID: attr.hostel_room_id,
    room_number: attr.room_number,
    hostel_name: attr.hostel_name,
    room_type_name: attr.room_type_name,
    number_of_beds: attr.number_of_beds,
    cost_per_bed: `${authStore.currency}${attr.cost_per_bed}`,
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    originalAttributes: attr
  };
}));
</script>
