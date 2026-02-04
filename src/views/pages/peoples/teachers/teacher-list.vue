<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons :name="title" id="add_teacher" @print="printTable"
          @add="$router.push('/teachers/add-teacher')" />
      </div>

      <card :title="title" v-model:searchQuery="searchQuery" :show-filter="true" v-model:rowsPerPage="rowsPerPage"
        @filter-apply="applyFilter" @filter-reset="resetFilter" :pagination="{
          current: teachersStore.currentPage,
          pageSize: teachersStore.perPage,
          total: teachersStore.total,
          showSizeChanger: true,
          showQuickJumper: true
        }" @change="handleTableChange">

        <template #filter-body>
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Class</label>
                <vue-select v-model="filterClass" :options="classOptions" placeholder="Select Class" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Subject</label>
                <vue-select v-model="filterSubject" :options="subjectOptions" placeholder="Select Subject" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="['Select Status', 'Active', 'Inactive']"
                  placeholder="Select Status" />
              </div>
            </div>
          </div>
        </template>

        <div class="custom-datatable-filter table-responsive">
          <a-table class="table datatable" :columns="columns" :data-source="teachers" :pagination="false"
            :row-selection="rowSelection">

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'ID'">
                <div>
                  <router-link to="/teachers/teacher-details" class="link-primary">{{ record.ID }}</router-link>
                </div>
              </template>
              <template v-if="column.key === 'Name'">
                <div class="d-flex align-items-center">
                  <!-- <router-link to="/teachers/teacher-details" class="avatar avatar-md">
                    <img :src="record.Image" class="img-fluid rounded-circle" alt="img" />
                  </router-link> -->
                  <div class="ms-2">
                    <p class="mb-0 text-dark">
                      <router-link to="/teachers/teacher-details">{{ record.Name }}</router-link>
                    </p>
                  </div>
                </div>
              </template>
              <template v-if="column.key === 'Status'">
                <span :class="record.StatusClass" class="d-inline-flex align-items-center">
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
                        <router-link class="dropdown-item rounded-1" to="/teachers/teacher-details"><i
                            class="ti ti-menu me-2"></i>View Teacher</router-link>
                      </li>
                      <li>
                        <router-link class="dropdown-item rounded-1" to="/teachers/edit-teacher"><i
                            class="ti ti-edit-circle me-2"></i>Edit</router-link>
                      </li>
                      <li>
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" data-bs-toggle="modal"
                          data-bs-target="#delete-modal"><i class="ti ti-trash-x me-2"></i>Delete</a>
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
  <teachers-modal></teachers-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useTeachersStore } from '@/stores/teachers';
import VueSelect from 'vue3-select2-component';

const teachersStore = useTeachersStore();

const title = "Teacher List";
const text = "Dashboard";
const text1 = "Peoples";
const text2 = "Teacher List";

const rowsPerPage = ref(teachersStore.perPage);
const searchQuery = ref('');
const filterClass = ref('Select Class');
const filterSubject = ref('Select Subject');
const filterStatus = ref('Select Status');

// Dummy options for now - would fetch from stores
const classOptions = ref(['Select Class', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']);
const subjectOptions = ref(['Select Subject', 'Maths', 'English', 'Physics', 'Chemistry', 'Biology']);

const columns = [
  { title: "ID", dataIndex: "id", key: "ID", sorter: true },
  { title: "Name", dataIndex: "name", key: "Name", sorter: true },
  { title: "Class", dataIndex: "class_name", key: "Class", sorter: true },
  { title: "Subject", dataIndex: "subject_name", key: "Subject", sorter: true },
  { title: "Email", dataIndex: "email", key: "Email", sorter: true },
  { title: "Phone", dataIndex: "phone", key: "Phone", sorter: true },
  { title: "Date of Join", dataIndex: "date_of_join", key: "DateofJoin", sorter: true },
  { title: "Status", dataIndex: "status", key: "Status", sorter: true },
  { title: "Action", key: "action", sorter: false },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const fetchTeachers = async () => {
  await teachersStore.index();
};

const applyFilter = () => {
  teachersStore.classId = filterClass.value === 'Select Class' ? null : filterClass.value; // In real app, map name to ID
  teachersStore.subjectId = filterSubject.value === 'Select Subject' ? null : filterSubject.value;
  teachersStore.status = filterStatus.value === 'Select Status' ? null : filterStatus.value.toLowerCase();
  teachersStore.currentPage = 1;
  fetchTeachers();
};

const resetFilter = () => {
  filterClass.value = 'Select Class';
  filterSubject.value = 'Select Subject';
  filterStatus.value = 'Select Status';
  teachersStore.classId = null;
  teachersStore.subjectId = null;
  teachersStore.status = null;
  teachersStore.currentPage = 1;
  fetchTeachers();
};

const handleTableChange = (pagination) => {
  teachersStore.currentPage = pagination.current;
  teachersStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;
  fetchTeachers();
};

watch(searchQuery, (newVal) => {
  teachersStore.search = newVal;
  teachersStore.currentPage = 1;
  fetchTeachers();
});

watch(rowsPerPage, (newVal) => {
  teachersStore.perPage = parseInt(newVal);
  teachersStore.currentPage = 1;
  fetchTeachers();
});

onMounted(() => {
  fetchTeachers();
});

const teachers = computed(() => (teachersStore.teachers || []).map((t, index) => {
  const attr = t.attributes || {};
  const profile = attr.profile || {};
  return {
    key: index + 1,
    ID: profile.teacher_id || t.id, // Use teacher_id if available, else primary ID
    Name: attr.name,
    class_name: profile.class || 'N/A',
    subject_name: profile.subject || 'N/A',
    email: attr.email,
    phone: profile.phone || 'N/A',
    date_of_join: profile.joining_date || 'N/A',
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    StatusClass: attr.status === 'inactive' ? 'badge badge-soft-danger' : 'badge badge-soft-success',
    Image: attr.image || null,
  };
}));

const printTable = () => {
  window.print();
};
</script>
