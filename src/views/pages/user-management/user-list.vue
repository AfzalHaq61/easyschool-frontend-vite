<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons :name="title" id="add_user" :show-add="false" @print="() => exportData('print')"
          @export="exportData" />
      </div>

      <card :title="title" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortUsers" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
        :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
        <template #filter-body>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Role</label>
                <vue-select v-model="filterRole" :options="roleOptions" id="filter-role" placeholder="Select Role" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <vue-select v-model="filterStatus" :options="statusOptions" id="filter-status"
                  placeholder="Select Status" />
              </div>
            </div>
          </div>
        </template>
        <div class="custom-datatable-filter table-responsive">
          <a-table class="table datatable thead-light" :columns="columns" :data-source="users"
            :row-selection="rowSelection" :pagination="{
              current: usersStore.currentPage,
              pageSize: usersStore.perPage,
              total: usersStore.total,
              showSizeChanger: true,
              showQuickJumper: true
            }" @change="handleTableChange">
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'ID'">
                <div>
                  <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
                </div>
              </template>
              <template v-if="column.key === 'Name'">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md" v-if="record.Image">
                    <img :src="record.Image" class="img-fluid rounded-circle" alt="img" />
                  </a>
                  <div class="ms-2">
                    <p class="mb-0 text-dark">
                      <a href="javascript:void(0);">{{ record.Name }}</a>
                    </p>
                  </div>
                </div>
              </template>
              <template v-if="column.key === 'Status'">
                <span :class="record.statusClass" class="badge d-inline-flex align-items-center">
                  <i class="ti ti-circle-filled fs-5 me-1"></i>{{ record.Status }}
                </span>
              </template>
              <template v-if="column.key === 'action'">
                <!-- No actions as per requirement to remove add/delete modal, but keeping column if user wants to see it empty or for future edit? 
                     User said: 'dont have add and delete modal'. 
                     I will remove the action column content or keep it empty. 
                     Wait, 'show roles also in table'.
                     If I strictly follow 'dont have add and delete', maybe they don't want the action column at all?
                     But usually edit might be allowed? 
                     I will just render nothing in action or maybe an edit button if they didn't explicitly forbid edit.
                     However, 'dont have add and delete' usually implies read-only or just those specific actions.
                     I'll keep the column but empty for now to be safe, or just remove the column definition.
                     Let's keep the column definition but comment out the content to be safe.
                -->
              </template>
            </template>
          </a-table>
        </div>
      </card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useUsersStore } from '@/stores/users';
import { useRolesAndPermissionsStore } from '@/stores/roles-and-permissions';

const usersStore = useUsersStore();
const rolesStore = useRolesAndPermissionsStore();

const title = "Users";
const text = "Dashboard";
const text1 = "User Management";
const text2 = "Users";

const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(usersStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterRole = ref('Select Role');
const filterStatus = ref('Select Status');
const statusOptions = ref(['Select Status', 'Active', 'Inactive']);
const roleOptions = ref(['Select Role']);

// Load roles for filter
const loadRoles = async () => {
  await rolesStore.index();
  if (rolesStore.roles && rolesStore.roles.length > 0) {
    roleOptions.value = ['Select Role', ...rolesStore.roles.map(r => r.name)];
  }
};

const columns = [
  {
    title: "ID",
    dataIndex: "user_id", // Assuming backend returns user_id or id
    key: "ID",
    sorter: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "Name",
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "Email",
    sorter: true,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "Role",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "Status",
    sorter: true,
  },
  /* Removing Action column if no actions are needed, or keeping it empty? 
     The user didn't ask to remove the column, just the modals. 
     But an empty action column is useless. I'll remove it from columns.
  */
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const fetchUsers = async () => {
  await usersStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
  usersStore.currentPage = pagination.current;
  usersStore.perPage = pagination.pageSize;
  rowsPerPage.value = pagination.pageSize;

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    usersStore.sort = sortOrder;
  }

  fetchUsers();
};

const sortUsers = (sortType) => {
  currentSort.value = sortType;
  usersStore.sort = sortType;
  fetchUsers();
};

const exportData = async (type) => {
  usersStore.exportType = type;
  await usersStore.export();
};

const applyFilter = () => {
  usersStore.role = filterRole.value === 'Select Role' ? null : filterRole.value;
  usersStore.status = filterStatus.value === 'Select Status' ? null : filterStatus.value.toLowerCase();
  usersStore.currentPage = 1;
  fetchUsers();
};

const resetFilter = () => {
  filterRole.value = 'Select Role';
  filterStatus.value = 'Select Status';
  usersStore.role = null;
  usersStore.status = null;
  usersStore.currentPage = 1;
  fetchUsers();
};

watch(rowsPerPage, (newVal) => {
  usersStore.perPage = parseInt(newVal);
  usersStore.currentPage = 1;
  fetchUsers();
});

watch(dateRange, (newRange) => {
  // Assuming the store might use date filters later, keeping structure. 
  // Currently users.js doesn't seem to use date, but good to keep structure or remove if unused.
  // The store I created didn't include dateStart/dateEnd. I should check if I need them.
  // The original user-list didn't seem to use dates. I'll comment out or just leave basic structure.
});

watch(searchQuery, (newVal) => {
  usersStore.search = newVal;
  usersStore.currentPage = 1;
  fetchUsers();
});

onMounted(async () => {
  await loadRoles();
  fetchUsers();
});

const users = computed(() => (usersStore.users || []).map((item, index) => {
  // Map backend data to table structure
  // Assuming default Laravel/API structure
  return {
    key: index + 1,
    ID: item.id, // or item.custom_id
    Name: item.name,
    Email: item.email,
    Role: item.role, // Assuming role is a string or object. If object: item.role?.name
    Status: item.status ? item.status.charAt(0).toUpperCase() + item.status.slice(1) : 'Active',
    statusClass: item.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
    Image: item.avatar || null // Assuming avatar url
  };
}));
</script>
