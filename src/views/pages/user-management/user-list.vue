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

      <!-- Using the alert component -->
      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message" @update:message="notificationStore.clearNotification()" />

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
                <h2 class="table-avatar d-flex align-items-center">
                  <user-avatar :image="record.Image" size="avatar-lg" />
                  <div class="ms-2">
                    <a href="javascript:void(0);" class="text-dark fw-medium">{{ record.Name }}</a>
                    <a href="javascript:void(0);" class="fs-12" style="color: #999999;">{{ record.Email }}</a>
                  </div>
                </h2>
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
  <delete-confirm-modal @confirmed="confirmDelete" />
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useUsersStore } from '@/stores/users';
import { useRolesAndPermissionsStore } from '@/stores/roles-and-permissions';
import { useNotificationStore } from '@/stores/notification';

const usersStore = useUsersStore();
const rolesStore = useRolesAndPermissionsStore();
const notificationStore = useNotificationStore();

const title = "Users";
const text = "Dashboard";
const text1 = "User Management";
const text2 = "Users";

const today = new Date();
const dateRange = ref(null);
const rowsPerPage = ref(usersStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterRole = ref(null);
const filterStatus = ref('Select Status');
const statusOptions = ref(['Select Status', 'Active', 'Inactive']);
const roleOptions = ref([]);

// Load roles for filter
const loadRoles = async () => {
  await rolesStore.index();
  if (rolesStore.roles && rolesStore.roles.length > 0) {
    roleOptions.value = rolesStore.roles.map(r => ({
      id: r.id,
      text: r.attributes.name
    }));
  }
};

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    sorter: true,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: true,
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    sorter: true,
  },
  {
    title: "Class",
    dataIndex: "Class",
    key: "Class",
    sorter: true,
  },
  {
    title: "Section",
    dataIndex: "Section",
    key: "Section",
    sorter: true,
  },
  {
    title: "Date of Join",
    dataIndex: "DateofJoin",
    key: "DateofJoin",
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
    text: "center",
  },
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
  if (pagination) {
    usersStore.currentPage = pagination.current;
    if (usersStore.perPage !== pagination.pageSize) {
      usersStore.perPage = pagination.pageSize;
      rowsPerPage.value = pagination.pageSize;
      usersStore.currentPage = 1; // Reset to page 1 if page size changes
    }
  }

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
    currentSort.value = sortOrder;
    usersStore.sort = sortOrder;

    // Map column keys to backend sort fields
    const sortMap = {
      'Name': 'name',
      'Email': 'email',
      'Role': 'role',
      'Class': 'class',
      'Section': 'section',
      'DateofJoin': 'created_at',
      'Status': 'status'
    };
    usersStore.sortBy = sortMap[sorter.columnKey] || 'created_at';
  }

  fetchUsers();
};

const sortUsers = (sortType) => {
  currentSort.value = sortType;
  if (sortType === 'recent_added') {
    usersStore.sort = 'desc';
    usersStore.sortBy = 'created_at';
  } else {
    usersStore.sort = sortType;
    // Maintain current sortBy if it's already set from table headers, 
    // or default to created_at if not.
    if (!usersStore.sortBy) usersStore.sortBy = 'created_at';
  }
  usersStore.currentPage = 1;
  fetchUsers();
};

const exportData = async (type) => {
  usersStore.exportType = type;
  await usersStore.export();
};

const handleDelete = (id) => {
  usersStore.id = id;
};

const confirmDelete = async () => {
  const success = await usersStore.destroy();
  if (success) {
    // Modal is closed by standard BS data-bs-dismiss if implemented in child,
    // or we can manually close if needed. Standard pattern here is BS auto-handle.
  }
};

const applyFilter = () => {
  usersStore.roleId = filterRole.value || null;
  usersStore.status = filterStatus.value === 'Select Status' ? null : filterStatus.value.toLowerCase();
  usersStore.currentPage = 1;
  fetchUsers();
};

const resetFilter = () => {
  filterRole.value = null;
  filterStatus.value = 'Select Status';
  usersStore.roleId = null;
  usersStore.status = null;
  usersStore.currentPage = 1;
  fetchUsers();
};

watch(rowsPerPage, (newVal) => {
  const val = parseInt(newVal);
  if (usersStore.perPage !== val) {
    usersStore.perPage = val;
    usersStore.currentPage = 1;
    fetchUsers();
  }
});

watch(dateRange, (newRange) => {
  if (newRange && newRange.length === 2) {
    const [start, end] = newRange;
    usersStore.dateStart = moment(start).format('YYYY-MM-DD');
    usersStore.dateEnd = moment(end).format('YYYY-MM-DD');
  } else {
    usersStore.dateStart = null;
    usersStore.dateEnd = null;
  }
  usersStore.currentPage = 1;
  fetchUsers();
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

const users = computed(() => {
  const rawUsers = usersStore.users || [];
  if (!Array.isArray(rawUsers)) return [];

  return rawUsers.map((item, index) => {
    const attr = item?.attributes || {};
    const itemData = item || {};
    return {
      key: index + 1,
      id: itemData.id || itemData.ID,
      ID: attr.user_id || itemData.id || itemData.ID,
      Name: attr.name || itemData.name || 'N/A',
      Email: attr.email || itemData.email || 'N/A',
      Role: attr.roles?.[0] || itemData.role || 'User',
      Class: attr.class || itemData.class || 'N/A',
      Section: attr.section || itemData.section || 'N/A',
      DateofJoin: attr.date_of_joining ? moment(attr.date_of_joining).format("DD MMM YYYY") : (attr.created_at || itemData.created_at ? moment(attr.created_at || itemData.created_at).format("DD MMM YYYY") : 'N/A'),
      Status: attr.status ? (typeof attr.status === 'string' ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : attr.status) : (itemData.status ? (typeof itemData.status === 'string' ? itemData.status.charAt(0).toUpperCase() + itemData.status.slice(1) : itemData.status) : 'Active'),
      statusClass: (attr.status || itemData.status) === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
      Image: attr.profile_photo_url || itemData.profile_photo_url || itemData.avatar || null
    };
  });
});
</script>
