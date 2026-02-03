<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Schedule" id="add_schedule" @print="() => exportData('print')" @export="exportData"
          @add="openAddScheduleModal" />
      </div>

      <!-- Using the alert component -->
      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Schedule List" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortSchedules" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" id="seleus" placeholder="Select Status" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Class</label>
                <vue-select v-model="filterClass" :options="classOptions" id="class-select"
                  placeholder="Select Class" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Subject</label>
                <vue-select v-model="filterSubject" :options="subjectOptions" id="subject-select"
                  placeholder="Select Subject" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Teacher</label>
                <vue-select v-model="filterTeacher" :options="teacherOptions" id="teacher-select"
                  placeholder="Select Teacher" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Room</label>
                <vue-select v-model="filterRoom" :options="roomOptions" id="room-select" placeholder="Select Room" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Day</label>
                <vue-select v-model="filterDay" :options="dayOptions" id="day-select" placeholder="Select Day" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Start Time</label>
                <input type="time" v-model="filterStartTime" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">End Time</label>
                <input type="time" v-model="filterEndTime" class="form-control" />
              </div>
            </div>
          </div>
        </template>
        <!-- Table injected through slot -->
        <a-table id="printable-table" class="table datatable thead-light" :columns="columns" :data-source="schedules"
          :row-selection="rowSelection" :pagination="{
            current: scheduleStore.currentPage,
            pageSize: scheduleStore.perPage,
            total: scheduleStore.total,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '25', '50', '100'],
            showQuickJumper: true
          }" @change="handleTableChange">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'ID'">
              <div href="javascript:void(0);" class="link-primary">{{ record.schedule_id }}</div>
            </template>
            <template v-if="column.key === 'status'">
              <span :class="record.statusClass" class="d-inline-flex align-items-center"><i
                  class="ti ti-circle-filled fs-5 me-1"></i>{{ record.status }}</span>
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
                        data-bs-target="#edit_Schedule"
                        @click="selectedSchedule = { id: record.id, ...record.originalAttributes }"><i
                          class="ti ti-edit-circle me-2"></i>Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                        data-bs-target="#delete-modal" @click="handleDelete(record.id)"><i
                          class="ti ti-trash-x me-2"></i>Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </template>
        </a-table>
      </card>
    </div>
  </div>
  <schedule-list-modal :schedule-data="selectedSchedule" @refresh="fetchSchedules"></schedule-list-modal>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from 'moment';
import { useScheduleStore } from '@/stores/schedule';
import { useClassesStore } from '@/stores/classes';
import { useSubjectsStore } from '@/stores/subjects';
import { useTeachersStore } from '@/stores/teachers';
import { useRoomsStore } from '@/stores/rooms';
import { useNotificationStore } from "@/stores/notification";

const scheduleStore = useScheduleStore();
const classesStore = useClassesStore();
const subjectsStore = useSubjectsStore();
const teachersStore = useTeachersStore();
const roomsStore = useRoomsStore();
const notificationStore = useNotificationStore();

const title = "Schedule";
const text = "Dashboard";
const text1 = "Classes";
const text2 = "Schedule";

const selectedSchedule = ref({});
const dateRange = ref([new Date(), new Date()]);
const currentSort = ref('asc');
const rowsPerPage = ref(scheduleStore.perPage);
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);
const filterClass = ref('');
const filterSubject = ref('');
const filterTeacher = ref('');
const filterRoom = ref('');
const filterDay = ref('Select');
const filterStartTime = ref('');
const filterEndTime = ref('');

const dayOptions = [
  'Select',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const classOptions = computed(() => {
  const options = classesStore.classes.map(c => ({
    id: String(c.id),
    text: c.attributes?.name || c.name || String(c.id)
  }));
  return [{ id: '', text: 'Select Class' }, ...options];
});

const subjectOptions = computed(() => {
  const options = subjectsStore.subjects.map(s => ({
    id: String(s.id),
    text: s.attributes?.name || s.name || String(s.id)
  }));
  return [{ id: '', text: 'Select Subject' }, ...options];
});

const teacherOptions = computed(() => {
  const options = teachersStore.teachers.map(t => ({
    id: String(t.id),
    text: t.attributes?.name || t.name || String(t.id)
  }));
  return [{ id: '', text: 'Select Teacher' }, ...options];
});

const roomOptions = computed(() => {
  const options = roomsStore.rooms.map(r => ({
    id: String(r.id),
    text: r.attributes?.name || r.name || String(r.id)
  }));
  return [{ id: '', text: 'Select Room' }, ...options];
});

const columns = [
  {
    sorter: false,
  },
  {
    title: "ID",
    dataIndex: "schedule_id",
    key: "ID",
    sorter: true
  },
  {
    title: "Class",
    dataIndex: "Class",
    key: "Class",
    sorter: true
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    sorter: true
  },
  {
    title: "Teacher",
    dataIndex: "teacher",
    key: "teacher",
    sorter: true
  },
  {
    title: "Room",
    dataIndex: "room",
    key: "room",
    sorter: true
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
    sorter: true
  },
  {
    title: "Start Time",
    dataIndex: "start_time",
    key: "start_time",
    sorter: true
  },
  {
    title: "End Time",
    dataIndex: "end_time",
    key: "end_time",
    sorter: true
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: true
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

const fetchSchedules = async () => {
  await scheduleStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  scheduleStore.currentPage = pagination.current;
  scheduleStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    scheduleStore.sort = sortOrder;
  }

  fetchSchedules();
};

const exportData = async (type) => {
  scheduleStore.exportType = type;
  await scheduleStore.export();
};

const handleDelete = (id) => {
  scheduleStore.id = id;
};

const openAddScheduleModal = () => {
  selectedSchedule.value = {};
};

const applyFilter = () => {
  scheduleStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  scheduleStore.class_id = filterClass.value || null;
  scheduleStore.subject_id = filterSubject.value || null;
  scheduleStore.teacher_id = filterTeacher.value || null;
  scheduleStore.room_id = filterRoom.value || null;
  scheduleStore.day = filterDay.value === 'Select' ? null : filterDay.value;
  scheduleStore.start_time = filterStartTime.value || null;
  scheduleStore.end_time = filterEndTime.value || null;
  scheduleStore.currentPage = 1;
  fetchSchedules();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  filterClass.value = '';
  filterSubject.value = '';
  filterTeacher.value = '';
  filterRoom.value = '';
  filterDay.value = 'Select';
  filterStartTime.value = '';
  filterEndTime.value = '';

  scheduleStore.status = null;
  scheduleStore.class_id = null;
  scheduleStore.subject_id = null;
  scheduleStore.teacher_id = null;
  scheduleStore.room_id = null;
  scheduleStore.day = null;
  scheduleStore.start_time = null;
  scheduleStore.end_time = null;
  scheduleStore.currentPage = 1;
  fetchSchedules();
};

const sortSchedules = (sortType) => {
  currentSort.value = sortType;
  scheduleStore.sort = sortType;
  fetchSchedules();
};

watch(rowsPerPage, (newVal) => {
  scheduleStore.perPage = parseInt(newVal);
  scheduleStore.currentPage = 1;
  fetchSchedules();
});

watch(searchQuery, (newVal) => {
  scheduleStore.search = newVal;
  scheduleStore.currentPage = 1;
  fetchSchedules();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  const [start, end] = newRange;
  scheduleStore.dateStart = m(start).format('YYYY-MM-DD');
  scheduleStore.dateEnd = m(end).format('YYYY-MM-DD');
  scheduleStore.currentPage = 1;
  fetchSchedules();
});

onMounted(async () => {
  if (classesStore.classes.length === 0) await classesStore.index();
  if (subjectsStore.subjects.length === 0) await subjectsStore.index();
  if (teachersStore.teachers.length === 0) await teachersStore.index();
  if (roomsStore.rooms.length === 0) await roomsStore.index();

  fetchSchedules();
});

const schedules = computed(() => (scheduleStore.schedules || []).map((item, index) => {
  const attrs = item.attributes || item || {};
  return {
    key: index + 1,
    id: item.id,
    schedule_id: attrs.schedule_id || `S-${148230 + item.id}`,
    Class: attrs.class?.attributes?.name || attrs.class?.name || attrs.class_id || 'N/A',
    subject: attrs.subject?.attributes?.name || attrs.subject?.name || attrs.subject_id || 'N/A',
    teacher: attrs.teacher?.attributes?.user?.attributes?.name || 'N/A',
    room: attrs.room?.attributes?.name || attrs.room?.name || 'N/A',
    day: attrs.day || 'N/A',
    start_time: attrs.start_time ? moment(attrs.start_time, 'HH:mm:ss').format('hh:mm A') : 'N/A',
    end_time: attrs.end_time ? moment(attrs.end_time, 'HH:mm:ss').format('hh:mm A') : 'N/A',
    status: (attrs.status || 'active').charAt(0).toUpperCase() + (attrs.status || 'active').slice(1),
    statusClass: attrs.status === 'inactive' ? 'badge badge-soft-danger' : 'badge badge-soft-success',
    originalAttributes: attrs
  };
}));
</script>
