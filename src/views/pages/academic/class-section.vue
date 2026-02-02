<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Section" id="add_class_section" @print="() => exportData('print')"
          @export="exportData" @add="openAddSectionModal" />
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Class Sections" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortSections" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
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
          <a-table class="table datatable thead-light" :columns="columns" :data-source="sections"
            :row-selection="rowSelection" :pagination="{
              current: sectionsStore.currentPage,
              pageSize: sectionsStore.perPage,
              total: sectionsStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'ID'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
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
                          data-bs-target="#edit_class_section" @click="selectedSection = { ...record }"><i
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
  <class-section-modal :section-data="selectedSection" @refresh="fetchSections" />
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useSectionsStore } from '@/stores/sections';
import { useNotificationStore } from "@/stores/notification";

const sectionsStore = useSectionsStore();
const notificationStore = useNotificationStore();

const title = "Sections";
const text = "Dashboard";
const text1 = "Academic";
const text2 = "Sections";

const selectedSection = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(sectionsStore.perPage);
let currentSort = ref('asc')
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);

const columns = [
  {
    sorter: false,
  },
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    sorter: true,
  },
  {
    title: "Section Name",
    dataIndex: "SectionName",
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
    sorter: false,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const fetchSections = async () => {
  await sectionsStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  sectionsStore.currentPage = pagination.current;
  sectionsStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    sectionsStore.sort = sortOrder;
  }

  fetchSections();
};

const sortSections = (sortType) => {
  currentSort.value = sortType;
  sectionsStore.sort = sortType;
  fetchSections();
};

const exportData = async (type) => {
  sectionsStore.exportType = type;
  await sectionsStore.export();
};

const handleDelete = (id) => {
  sectionsStore.id = id;
};

const openAddSectionModal = () => {
  selectedSection.value = {};
};

const applyFilter = () => {
  sectionsStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
  sectionsStore.currentPage = 1;
  fetchSections();
};

const resetFilter = () => {
  filterStatus.value = 'Select';
  sectionsStore.status = null;
  sectionsStore.currentPage = 1;
  fetchSections();
};

watch(rowsPerPage, (newVal) => {
  sectionsStore.perPage = parseInt(newVal);
  sectionsStore.currentPage = 1;
  fetchSections();
});

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  const [start, end] = newRange;
  sectionsStore.dateStart = m(start).format('YYYY-MM-DD');
  sectionsStore.dateEnd = m(end).format('YYYY-MM-DD');
  sectionsStore.currentPage = 1;
  fetchSections();
});

watch(searchQuery, (newVal) => {
  sectionsStore.search = newVal;
  sectionsStore.currentPage = 1;
  fetchSections();
});

onMounted(() => {
  fetchSections();
});

const sections = computed(() => (sectionsStore.sections || []).map((item, index) => {
  const attr = item.attributes || {};
  return {
    key: index + 1,
    id: item.id,
    ID: attr.section_id || `SE-${item.id}`,
    SectionName: attr.name,
    Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
    statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    status: attr.status || 'active'
  };
}));
</script>
