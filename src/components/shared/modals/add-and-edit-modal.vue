<template>
    <base-modal :id="id" :title="mode === 'edit' ? 'Edit Role' : 'Add Role'">
      <template #body>
        <Form
          ref="formRef"
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors }"
        >
          <div class="mb-3">
            <label class="form-label">Role Name</label>
            <Field
              name="roleName"
              type="text"
              v-model="name"
              placeholder="Enter Role Name"
              class="form-control"
              :class="{ 'is-invalid': errors.roleName }"
            />
            <div class="invalid-feedback">
              {{ errors.roleName }}
            </div>
          </div>
  
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">
              {{ mode === 'edit' ? 'Save Changes' : 'Add Role' }}
            </button>
          </div>
        </Form>
      </template>
    </base-modal>
</template>
  
<script setup>
  import { ref, watch } from 'vue'
  import { Form, Field } from 'vee-validate'
  import * as yup from 'yup'
  import { Modal } from 'bootstrap'
  
  const emit = defineEmits(['submitted'])
  
  const props = defineProps({
    id: { type: String, required: true },
    mode: { type: String, default: 'add' }, // 'add' or 'edit'
    modelValue: { type: String, default: '' }, // for v-model
  })
  
  const formRef = ref(null)
  const name = ref(props.modelValue)
  
  watch(() => props.modelValue, (newVal) => {
    name.value = newVal
  })
  
  const schema = yup.object({
    roleName: yup.string().required('Role name is required'),
  })
  
  function onSubmit() {
    emit('submitted', { name: name.value })
  
    // Hide modal
    const modalEl = document.getElementById(props.id)
    const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl)
    modalInstance.hide()
  
    // Reset form only if adding
    if (props.mode === 'add') {
      name.value = ''
      formRef.value?.resetForm()
    }
  }
</script>
  