<template>
    <base-modal :id="id" :title="title">
      <template #body>
        <Form @submit.prevent="onConfirm">
          <div class="text-center">
            <span class="delete-icon"><i class="ti ti-trash-x"></i></span>
            <h4>Are you sure?</h4>
            <p>{{ message }}</p>
            <div class="d-flex justify-content-center">
              <a class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" class="btn btn-danger">Yes, Delete</button>
            </div>
          </div>
        </Form>
      </template>
    </base-modal>
</template>
  
<script setup>
  import { Modal } from 'bootstrap'
  
  const emit = defineEmits(['confirmed'])
  
  const props = defineProps({
    id: {
      type: String,
      default: 'delete-modal',
    },
    title: {
      type: String,
      default: 'Confirm Deletion',
    },
    message: {
      type: String,
      default: 'This action cannot be undone.',
    },
  })
  
  const onConfirm = () => {
    emit('confirmed')
  
    const modalEl = document.getElementById(props.id)
    const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl)
    modalInstance.hide()
  }
</script>
  