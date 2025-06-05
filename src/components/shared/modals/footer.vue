<!-- components/shared/forms/FormButtons.vue -->
<template>
    <div class="modal-footer">
        <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
        <button type="submit" class="btn btn-primary">{{ submitLabel }}</button>
    </div>
</template>

<script setup>
    defineProps({
        submitLabel: {
            type: String,
            default: 'Submit'
        }
    });
</script>
  