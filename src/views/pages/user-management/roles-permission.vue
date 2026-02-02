<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" :text2="text2" />
        <top-action-buttons name="Role" id="add_role" @print="() => exportData('print')" @export="exportData"
          @add="openAddRoleModal" />
      </div>

      <!-- Using the alert component -->
      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message"
        @update:message="notificationStore.notification.message = $event" />

      <card title="Roles & Permissions List" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
        @update:currentSort="sortRoles" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery">
        <!-- Table injected through slot -->
        <a-table id="printable-table" class="table datatable thead-light" :columns="columns" :data-source="roles"
          :row-selection="rowSelection" :pagination="{
            current: rolesAndPermissionsStore.currentPage,
            pageSize: rolesAndPermissionsStore.perPage,
            total: rolesAndPermissionsStore.total,
            showSizeChanger: true,
            showQuickJumper: true
          }" @change="handleTableChange">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'RoleName'">
              <div>{{ record.RoleName }}</div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  data-bs-toggle="modal" data-bs-target="#edit_role" @click="selectedRole = { ...record }"><i
                    class="ti ti-edit-circle text-primary"></i></a>
                <router-link to="/user/permission"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"><i
                    class="ti ti-shield text-skyblue"></i></router-link>
                <a href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  @click="handleDelete(record.id)" data-bs-toggle="modal" data-bs-target="#delete-modal"><i
                    class="ti ti-trash-x text-danger"></i></a>
              </div>
            </template>
          </template>
        </a-table>
      </card>
    </div>
  </div>
  <role-permission-modal :role="selectedRole" />
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import moment from "moment";
import { useRolesAndPermissionsStore } from '@/stores/roles-and-permissions';
import { useNotificationStore } from "@/stores/notification";

const rolesAndPermissionsStore = useRolesAndPermissionsStore();
const notificationStore = useNotificationStore();

const title = "Roles & Permissions";
const text = "Dashboard";
const text1 = "User Management";
const text2 = "Roles & Permissions";

const selectedRole = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(rolesAndPermissionsStore.perPage);
let currentSort = ref('asc')
const searchQuery = ref('');
const notification = ref([]);

const currentSortLabel = computed(() => {
  switch (currentSort.value) {
    case 'asc': return 'A-Z';
    case 'desc': return 'Z-A';
    case 'recent_added': return 'Recently Added';
    default: return 'A-Z';
  }
});

const columns = [
  {
    sorter: false,
  },
  {
    title: "Role Name",
    dataIndex: "RoleName",
    key: "RoleName",
    sorter: {
      compare: (a, b) => {
        a = a.RoleName.toLowerCase();
        b = b.RoleName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedOn.toLowerCase();
        b = b.CreatedOn.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];

const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};

const fetchRoles = async () => {
  await rolesAndPermissionsStore.index()
  roles.value = rolesAndPermissionsStore.roles
}

function openAddRoleModal() {
  const modal = new bootstrap.Modal(document.getElementById('add_role'))
  modal.show()
}

const handleTableChange = (pagination, filters, sorter) => {
  rolesAndPermissionsStore.currentPage = pagination.current
  rolesAndPermissionsStore.perPage = pagination.pageSize

  if (sorter && sorter.order) {
    const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc'
    currentSort.value = sortOrder
    rolesAndPermissionsStore.sort = sortOrder
  }

  fetchRoles()
}

const sortRoles = (sortType) => {
  currentSort.value = sortType;
  rolesAndPermissionsStore.sort = sortType;
  fetchRoles()
}

const exportData = async (type) => {
  console.log('Exporting:', type)
  rolesAndPermissionsStore.exportType = type;
  await rolesAndPermissionsStore.export()
}

const handleDelete = (id) => {
  rolesAndPermissionsStore.id = id;
};

watch(rowsPerPage, (newVal) => {
  rolesAndPermissionsStore.perPage = parseInt(newVal);
  rolesAndPermissionsStore.currentPage = 1;
  fetchRoles();
})

watch(dateRange, (newRange) => {
  const m = moment.default || moment;
  const [start, end] = newRange;
  const formattedStart = m(start).format('YYYY-MM-DD')
  const formattedEnd = m(end).format('YYYY-MM-DD')

  rolesAndPermissionsStore.dateStart = formattedStart
  rolesAndPermissionsStore.dateEnd = formattedEnd
  rolesAndPermissionsStore.currentPage = 1

  fetchRoles();
});

watch(searchQuery, (newVal) => {
  rolesAndPermissionsStore.search = newVal
  rolesAndPermissionsStore.currentPage = 1
  fetchRoles()
})

onMounted(() => {
  fetchRoles()
})

const roles = computed(() => (rolesAndPermissionsStore.roles || []).map((role, index) => {
  const m = moment.default || moment;
  return {
    key: index + 1,
    id: role.id,
    RoleName: role.attributes.name.charAt(0).toUpperCase() + role.attributes.name.slice(1),
    CreatedOn: m(role.attributes.created_at).format("DD MMM YYYY")
  };
}));
</script>
