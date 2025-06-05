<template>
  <!-- Add Role -->
  <BaseModal id="add_role" title="Add Role">
    <template #body>
      <Form
        ref="addRoleFormRef"
        @submit="storeRole"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
        <div class="mb-3">
          <label class="form-label">Role Name</label>
          <Field
            name="name"
            type="text"
            v-model="name"
            placeholder="Enter Role Name"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
          />
          <div class="invalid-feedback">
            {{ errors.name }}
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
          <button type="submit" class="btn btn-primary">Add Role</button>
        </div>
      </Form>
    </template>
  </BaseModal>
  <!-- /Add Role -->

  <!-- Edit Role -->
  <BaseModal id="edit_role" title="Edit Role">
    <template #body>
      <Form
        ref="editRoleFormRef"
        @submit="updateRole"
        :validation-schema="editRoleNameschema"
        v-slot="{ errors }"
      >
        <div class="mb-3">
          <label class="form-label">Role Name</label>
          <Field
            name="editName"
            type="text"
            v-model="editName"
            placeholder="Enter Role Name"
            class="form-control"
            :class="{ 'is-invalid': errors.editName }"
          />
          <div class="invalid-feedback">
            {{ errors.editName }}
          </div>
        </div>

        <!-- Footer buttons inside form so submit works -->
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </Form>
    </template>
  </BaseModal>
  <!-- /Edit Role -->

  <!-- Delete Modal -->
  <BaseModal id="delete-modal" title="Confirm Deletion">
    <template #body>
      <Form @submit="deleteRole">
        <div class="text-center">
          <span class="delete-icon"><i class="ti ti-trash-x"></i></span>
          <h4>Are you sure?</h4>
          <p>You want to delete this role. This action cannot be undone.</p>
          <div class="d-flex justify-content-center">
            <a class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-danger">Yes, Delete</button>
          </div>
        </div>
      </Form>
    </template>
  </BaseModal>
  <!-- /Delete Modal -->
</template>

<script setup>
  import router from "@/router";
  import { Form, Field, useForm} from "vee-validate";
  import * as Yup from "yup";
  import { ref, watch } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import Alert from "@/components/shared/alert.vue";
  import { useRolesAndPermissionsStore } from '@/stores/roles-and-permissions';
  import { useNotificationStore } from '@/stores/notification';
  import { Modal } from 'bootstrap';
  import BaseModal from '@/components/base/BaseModal.vue';

  const props = defineProps({
    role: {
      type: Object,
      default: () => ({})
    }
  });

  // State variables
  const rolesAndPermissionsStore = useRolesAndPermissionsStore();
  const notificationStore = useNotificationStore();

  const addRoleFormRef = ref(null);
  const name = ref('');
  const editRoleFormRef = ref(null);
  const editName = ref(props.role.RoleName || '');
  const roleId = ref(props.role.id || '');

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required")
  });

  const editRoleNameschema = Yup.object().shape({
    editName: Yup.string().required("Name is required")
  });

  // Form state
  const { resetForm } = useForm({
    validationSchema: schema,
  });

  watch(
    () => props.role,
    (newRole) => {
      editName.value = newRole?.RoleName || '';
      roleId.value = newRole?.id || '';
    },
    { immediate: true, deep: true }
  );

  const storeRole = async () => {

    const success = await rolesAndPermissionsStore.store(name.value);

    // ✅ Reset form fields and errors
    resetForm();

    // ✅ Hide the modal using Bootstrap 5 JS
    const modalEl = document.getElementById('add_role');
    const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
    modalInstance.hide();

    addRoleFormRef.value?.resetForm();
    name.value = '';

    if (success) {
      notificationStore.setNotification({ status: 'success', message: 'Role created successfully!' });
    } else {
      notificationStore.setNotification({ status: 'error', message: 'Failed to create role.' });
    }
  }

  const updateRole = async () => {
    const success = await rolesAndPermissionsStore.update(roleId.value, editName.value);

    // Hide the modal
    const modalEl = document.getElementById("edit_role");
    const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
    modalInstance.hide();

    editRoleFormRef.value?.resetForm();
    editName.value = '';

    if (success) {
      notificationStore.setNotification({ status: 'success', message: 'Role updated successfully!' });
    } else {
      notificationStore.setNotification({ status: 'error', message: 'Failed to update role.' });
    }
  };

  const deleteRole = async () => {
    const success = await rolesAndPermissionsStore.destroy();

    // Hide modal
    const modalEl = document.getElementById("delete-modal");
    const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
    modalInstance.hide();

    if (success) {
      notificationStore.setNotification({ status: 'success', message: 'Role deleted successfully!' });
    } else {
      notificationStore.setNotification({ status: 'error', message: 'Failed to delete role.' });
    }
  };
</script>
