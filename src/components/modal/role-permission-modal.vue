<template>
  <!-- Add Role -->
  <role-add-and-edit-modal id="add_role" mode="add" @submitted="storeRole" />
  <!-- /Add Role -->

  <!-- Edit Role -->
  <role-add-and-edit-modal id="edit_role" mode="edit" :model-value="editName" @submitted="updateRole" />
  <!-- /Edit Role -->

  <!-- Delete Modal -->
  <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
    message="You want to delete this role. This action cannot be undone." @confirmed="deleteRole" />
  <!-- /Delete Modal -->
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRolesAndPermissionsStore } from '@/stores/roles-and-permissions';
import { useNotificationStore } from '@/stores/notification';

const props = defineProps({
  role: {
    type: Object,
    default: () => ({})
  }
});

// State variables
const rolesAndPermissionsStore = useRolesAndPermissionsStore();
const notificationStore = useNotificationStore();

const editName = ref(props.role.RoleName || '');
const roleId = ref(props.role.id || '');

watch(
  () => props.role,
  (newRole) => {
    editName.value = newRole?.RoleName || '';
    roleId.value = newRole?.id || '';
  },
  { immediate: true, deep: true }
);

const storeRole = async (data) => {
  const success = await rolesAndPermissionsStore.store(data.name);

  // ✅ Reset form fields and errors
  resetForm();

  if (success) {
    notificationStore.setNotification({ status: 'success', message: 'Role created successfully!' });
  } else {
    notificationStore.setNotification({ status: 'error', message: 'Failed to create role.' });
  }
}

const updateRole = async (data) => {
  const success = await rolesAndPermissionsStore.update(roleId.value, data.name);

  if (success) {
    notificationStore.setNotification({ status: 'success', message: 'Role updated successfully!' });
  } else {
    notificationStore.setNotification({ status: 'error', message: 'Failed to update role.' });
  }
};

const deleteRole = async () => {
  const success = await rolesAndPermissionsStore.destroy();

  if (success) {
    notificationStore.setNotification({ status: 'success', message: 'Role deleted successfully!' });
  } else {
    notificationStore.setNotification({ status: 'error', message: 'Failed to delete role.' });
  }
};
</script>
