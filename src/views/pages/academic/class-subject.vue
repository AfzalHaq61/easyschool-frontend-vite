<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Class Subject" id="add_subject" @print="() => exportData('print')"
          @export="exportData" @add="openAddSubjectModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Class Subjects" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortSubjects" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" id="seleus" placeholder="Select Status" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Type</label>
                <vue-select v-model="filterType" :options="typeOptions" id="type-select" placeholder="Select Type" />
              </div>
            </div>
          </div>
        </template>
        <a-table class="table thead-light" :columns="columns" :data-source="subjects" :row-selection="rowSelection"
          :pagination="{
            current: subjectsStore.currentPage,
            pageSize: subjectsStore.perPage,
            total: subjectsStore.total,
            showSizeChanger: true,
            showQuickJumper: true
          }" @change="handleTableChange">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'subject_id'">
              <div>
                <a href="javascript:void(0);" class="link-primary">{{ record.SubjectID }}</a>
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
                        data-bs-target="#edit_subject"
                        @click="selectedSubject = { id: record.id, ...record.originalAttributes }"><i
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
      </card>
    </div>
  </div>
  <class-subject-modal :subject-data="selectedSubject" @refresh="fetchSubjects"></class-subject-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useSubjectsStore } from '@/stores/subjects';
import { useNotificationStore } from "@/stores/notification";

const subjectsStore = useSubjectsStore();
const notificationStore = useNotificationStore();

const title = "Subjects";
const text = "Dashboard";
const text1 = "Academic";
const text2 = "Subjects";

const selectedSubject = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(subjectsStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);
const filterType = ref('');

const typeOptions = computed(() => {
  const types = Array.isArray(subjectsStore.types) ? subjectsStore.types : [];
  const options = types.map(t => {
    const id = typeof t === 'object' ? (t.id || t.name || t) : t;
    const text = typeof t === 'object' ? (t.text || t.name || t.id || t) : String(t);
    return { id: String(id), text: text.charAt(0).toUpperCase() + text.slice(1) };
  });
  return [{ id: '', text: 'Select Type' }, ...options];
});

const columns = [
  {
    title: "ID",
    dataIndex: "subject_id",
    key: "subject_id",
    sorter: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    sorter: true,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
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

const fetchSubjects = async () => {
  await subjectsStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  subjectsStore.currentPage = pagination.current;
  subjectsStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    subjectsStore.sort = sortOrder;
  }

  fetchSubjects();
};

const sortSubjects = (sortType) => {
  currentSort.value = sortType;
  subjectsStore.sort = sortType;
  fetchSubjects();
};

const exportData = async (type) => {
  subjectsStore.exportType = type;
  await subjectsStore.export();
};

const handleDelete = (id) => {
  subjectsStore.id = id;
};

const openAddSubjectModal = () => {
  selectedSubject.value = {};
};

const applyFilter = () => {
  console.log('Applying filters:', { status: filterStatus.value, type: filterType.value });
  subjectsStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  subjectsStore.type = filterType.value || null;
  subjectsStore.currentPage = 1;
  fetchSubjects();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  filterType.value = '';
  subjectsStore.status = null;
  subjectsStore.type = null;
  subjectsStore.currentPage = 1;
  fetchSubjects();
};

watch(rowsPerPage, (newVal) => {
  subjectsStore.perPage = parseInt(newVal);
  subjectsStore.currentPage = 1;
  fetchSubjects();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  const [start, end] = newRange;
  subjectsStore.dateStart = m(start).format('YYYY-MM-DD');
  subjectsStore.dateEnd = m(end).format('YYYY-MM-DD');
  subjectsStore.currentPage = 1;
  fetchSubjects();
});

watch(searchQuery, (newVal) => {
  subjectsStore.search = newVal;
  subjectsStore.currentPage = 1;
  fetchSubjects();
});

onMounted(() => {
  fetchSubjects();
  if (subjectsStore.types.length === 0) {
    subjectsStore.fetchTypes();
  }
});

const subjects = computed(() => (subjectsStore.subjects || []).map((item, index) => {
  const attr = item.attributes || item || {};
  return {
    key: index + 1,
    id: item.id,
    SubjectID: attr.subject_id || `SUB-${item.id}`,
    name: attr.name,
    code: attr.code,
    type: attr.type ? attr.type.charAt(0).toUpperCase() + attr.type.slice(1) : '',
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: ['inactive', 'archived'].includes(attr.status) ? 'badge-soft-danger' : 'badge-soft-success',
    status: attr.status || 'active',
    originalAttributes: attr
  };
}));
</script>
