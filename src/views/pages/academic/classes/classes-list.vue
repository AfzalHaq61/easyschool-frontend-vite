<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Class" id="add_class" @print="() => exportData('print')" @export="exportData"
          @add="openAddClassModal" />
      </div>

      <!-- Using the alert component -->
      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Classes List" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortClasses" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
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
                <label class="form-label">Section</label>
                <vue-select v-model="filterSection" :options="sectionOptions" id="section-select"
                  placeholder="Select Section" />
              </div>
            </div>
          </div>
        </template>
        <!-- Table injected through slot -->
        <a-table id="printable-table" class="table datatable thead-light" :columns="columns" :data-source="classes"
          :row-selection="rowSelection" :pagination="{
            current: classesStore.currentPage,
            pageSize: classesStore.perPage,
            total: classesStore.total,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '25', '50', '100'],
            showQuickJumper: true
          }" @change="handleTableChange">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'ID'">
              <div href="javascript:void(0);" class="link-primary">{{ record.class_id }}</div>
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
                        data-bs-target="#edit_class"
                        @click="selectedClass = { id: record.id, ...record.originalAttributes }"><i
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
  <classes-list-modal :class-data="selectedClass" @refresh="fetchClasses"></classes-list-modal>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from 'moment';
import { useClassesStore } from '@/stores/classes';
import { useSectionsStore } from '@/stores/sections';
import { useNotificationStore } from "@/stores/notification";
const classesStore = useClassesStore();
const sectionsStore = useSectionsStore();
const notificationStore = useNotificationStore();

const title = "Classes List";
const text = "Dashboard";
const text1 = "Classes";
const text2 = "All Classes";

const selectedClass = ref({});
const dateRange = ref([new Date(), new Date()]);
const currentSort = ref('asc');
const rowsPerPage = ref(classesStore.perPage);
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);
const filterSection = ref('');

const sectionOptions = computed(() => {
  const options = sectionsStore.sections.map(s => {
    return {
      id: String(s.id),
      text: s.attributes?.name || s.name || String(s.id)
    }
  });
  return [{ id: '', text: 'Select Section' }, ...options];
});

const columns = [
  {
    sorter: false,
  },
  {
    title: "ID",
    dataIndex: "class_id",
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
    title: "Section",
    dataIndex: "section",
    key: "section",
    sorter: true
  },
  {
    title: "No of Students",
    dataIndex: "no_of_students",
    key: "no_of_students",
    sorter: true
  },
  {
    title: "No of Subjects",
    dataIndex: "no_of_subjects",
    key: "no_of_subjects",
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

const fetchClasses = async () => {
  await classesStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  classesStore.currentPage = pagination.current;
  classesStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    classesStore.sort = sortOrder;
  }

  fetchClasses();
};

const exportData = async (type) => {
  classesStore.exportType = type;
  await classesStore.export();
};

const handleDelete = (id) => {
  classesStore.id = id;
};

const openAddClassModal = () => {
  selectedClass.value = {};
};

const applyFilter = () => {
  classesStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  classesStore.section_id = filterSection.value || null;
  classesStore.currentPage = 1;
  fetchClasses();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  filterSection.value = '';
  classesStore.status = null;
  classesStore.section_id = null;
  classesStore.currentPage = 1;
  fetchClasses();
};

const sortClasses = (sortType) => {
  currentSort.value = sortType;
  classesStore.sort = sortType;
  fetchClasses();
};

watch(rowsPerPage, (newVal) => {
  classesStore.perPage = parseInt(newVal);
  classesStore.currentPage = 1;
  fetchClasses();
});

watch(searchQuery, (newVal) => {
  classesStore.search = newVal;
  classesStore.currentPage = 1;
  fetchClasses();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  const [start, end] = newRange;
  classesStore.dateStart = m(start).format('YYYY-MM-DD');
  classesStore.dateEnd = m(end).format('YYYY-MM-DD');
  classesStore.currentPage = 1;
  fetchClasses();
});

onMounted(async () => {
  if (sectionsStore.sections.length === 0) {
    await sectionsStore.index();
  }
  fetchClasses();
});

const classes = computed(() => (classesStore.classes || []).map((item, index) => {
  const attrs = item.attributes || item || {};
  return {
    key: index + 1,
    id: item.id,
    class_id: attrs.class_id || `C-${138000 + item.id}`,
    Class: attrs.name || '',
    section: attrs.section?.attributes?.name || attrs.section?.name || attrs.section_id || 'N/A',
    no_of_students: attrs.no_of_students || 0,
    no_of_subjects: attrs.no_of_subjects || 0,
    status: (attrs.status || 'active').charAt(0).toUpperCase() + (attrs.status || 'active').slice(1),
    statusClass: attrs.status === 'inactive' ? 'badge badge-soft-danger' : 'badge badge-soft-success',
    originalAttributes: attrs
  };
}));
</script>
