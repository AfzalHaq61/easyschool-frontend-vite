<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <!-- Top actions: maybe just refresh/print. No Add/Delete for permission list matrix usually? -->
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <!-- Keeping existing buttons or using top-action-buttons if appropriate. 
                  The original had Refresh, Print, Export, Add Role.
                  "Add Role" belongs to roles page? 
                  The user said "not have add and delete modal" for USER list. 
                  For Permission list, "similer to class-room.vue". 
                  Class room has top-action-buttons.
             -->
          <top-action-buttons :name="title" :show-add="false" @print="printTable" />
        </div>
      </div>

      <card :title="title" v-model:searchQuery="searchQuery" :show-filter="false" v-model:rowsPerPage="rowsPerPage"
        :pagination="{
          current: permissionsStore.currentPage,
          pageSize: permissionsStore.perPage,
          total: permissionsStore.total
        }">
        <!-- Filter Slot: If we wanted a Role Selector here it could go in filter-body, but user said 'not filters'. -->

        <div class="custom-datatable-filter table-responsive">
          <a-table class="table datatable thead-light" :columns="columns" :data-source="permissions" :pagination="false"
            :row-selection="null">
            <!-- Pagination handled by card/store, set table pagination to false or passed props -->

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'Modules'">
                <div>{{ record.Modules }}</div>
              </template>

              <!-- Checkboxes for permissions -->
              <template v-if="['View', 'Edit', 'Delete', 'AllowAll'].includes(column.key)">
                <label class="checkboxs">
                  <input type="checkbox" :checked="record[column.key]"
                    @change="e => togglePermission(record, column.key, e.target.checked)" />
                  <span class="checkmarks"></span>
                </label>
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
import { usePermissionsStore } from '@/stores/permissions';
import { useRoute } from 'vue-router';

const permissionsStore = usePermissionsStore();
const route = useRoute();

const title = "Permission"; // Or "Roles & Permissions" -> "Permission"
const text = "Dashboard";
const text1 = "User Management";
const text2 = "Permission";

const rowsPerPage = ref(permissionsStore.perPage);
const searchQuery = ref('');

const columns = [
  {
    title: "Modules",
    dataIndex: "name",
    key: "Modules",
    sorter: true,
  },
  {
    title: "View",
    key: "View",
    align: 'center'
  },
  {
    title: "Edit",
    key: "Edit",
    align: 'center'
  },
  {
    title: "Delete",
    key: "Delete",
    align: 'center'
  },
  {
    title: "Allow All",
    key: "AllowAll",
    align: 'center'
  },
];

const fetchPermissions = async () => {
  if (route.query.role_id) {
    permissionsStore.roleId = route.query.role_id;
  }
  await permissionsStore.index();
};

const togglePermission = async (record, type, checked) => {
  // Optimistic update
  // record[type] = checked; // Might need to update store state deep

  // Call API
  await permissionsStore.updatePermission(record.Modules, type.toLowerCase(), checked);
};

// Search Watcher
watch(searchQuery, (newVal) => {
  permissionsStore.search = newVal;
  permissionsStore.currentPage = 1;
  fetchPermissions();
});

watch(rowsPerPage, (newVal) => {
  permissionsStore.perPage = parseInt(newVal);
  permissionsStore.currentPage = 1;
  fetchPermissions();
});

onMounted(() => {
  fetchPermissions();
});

// Computed Data
const permissions = computed(() => (permissionsStore.permissions || []).map((item, index) => {
  return {
    key: index + 1,
    Modules: item.name,
    View: item.permissions?.view || false,
    Edit: item.permissions?.edit || false,
    Delete: item.permissions?.delete || false,
    AllowAll: item.permissions?.allow_all || false,
    original: item
  };
}));

const printTable = () => {
  window.print();
};
</script>
