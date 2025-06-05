<!-- components/shared/forms/ConfirmDelete.vue -->
<template>
    <Form @submit="onSubmit">
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
  
  <script setup>
  const props = defineProps({
    message: {
      type: String,
      default: 'You want to delete this item. This action cannot be undone.'
    },
    onSubmit: Function
  });
  </script>
  