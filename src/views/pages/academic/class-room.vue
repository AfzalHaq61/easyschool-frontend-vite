<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Class Room" id="add_class_room" @print="() => exportData('print')"
          @export="exportData" @add="openAddRoomModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Class Rooms" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortRooms" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
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
          <a-table class="table datatable thead-light" :columns="columns" :data-source="rooms"
            :row-selection="rowSelection" :pagination="{
              current: roomsStore.currentPage,
              pageSize: roomsStore.perPage,
              total: roomsStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'room_id'">
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
                          data-bs-target="#edit_class_room"
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
  <class-room-modal :room-data="selectedRoom" @refresh="fetchRooms"></class-room-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useRoomsStore } from '@/stores/rooms';
import { useNotificationStore } from "@/stores/notification";

const roomsStore = useRoomsStore();
const notificationStore = useNotificationStore();

const title = "Class Room";
const text = "Dashboard";
const text1 = "Academic";
const text2 = "Class Room";

const selectedRoom = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(roomsStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);

const columns = [
  {
    title: "ID",
    dataIndex: "room_id",
    key: "room_id",
    sorter: true,
  },
  {
    title: "Room No / Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
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

const fetchRooms = async () => {
  await roomsStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  roomsStore.currentPage = pagination.current;
  roomsStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    roomsStore.sort = sortOrder;
  }

  fetchRooms();
};

const sortRooms = (sortType) => {
  currentSort.value = sortType;
  roomsStore.sort = sortType;
  fetchRooms();
};

const exportData = async (type) => {
  roomsStore.exportType = type;
  await roomsStore.export();
};

const handleDelete = (id) => {
  roomsStore.id = id;
};

const openAddRoomModal = () => {
  selectedRoom.value = {};
};

const applyFilter = () => {
  roomsStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  roomsStore.currentPage = 1;
  fetchRooms();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  roomsStore.status = null;
  roomsStore.currentPage = 1;
  fetchRooms();
};

watch(rowsPerPage, (newVal) => {
  roomsStore.perPage = parseInt(newVal);
  roomsStore.currentPage = 1;
  fetchRooms();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  const [start, end] = newRange;
  roomsStore.dateStart = m(start).format('YYYY-MM-DD');
  roomsStore.dateEnd = m(end).format('YYYY-MM-DD');
  roomsStore.currentPage = 1;
  fetchRooms();
});

watch(searchQuery, (newVal) => {
  roomsStore.search = newVal;
  roomsStore.currentPage = 1;
  fetchRooms();
});

onMounted(() => {
  fetchRooms();
});

const rooms = computed(() => (roomsStore.rooms || []).map((item, index) => {
  const attr = item.attributes || {};
  return {
    key: index + 1,
    id: item.id,
    RoomID: attr.room_id || `RM-${item.id}`,
    name: attr.name,
    capacity: attr.capacity,
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    status: attr.status || 'active',
    originalAttributes: attr
  };
}));
</script>
