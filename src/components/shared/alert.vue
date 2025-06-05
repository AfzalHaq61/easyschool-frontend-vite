<template>
    <div
      v-if="message"
      :class="`alert alert-${type} d-flex align-items-center`"
      role="alert"
    >
      <i :class="`feather-${icon} flex-shrink-0 me-2`"></i>
      <div>{{ message }}</div>
      <!-- Close button -->
      <button
        type="button"
        class="btn-close ms-auto"
        aria-label="Close"
        @click="closeAlert"
      >
        <i class="fas fa-xmark"></i>
      </button>
    </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';

  // Define props for alert type, icon, and message
  const props = defineProps({
    type: {
      type: String,
      default: 'danger', // Default alert type
    },
    icon: {
      type: String,
      default: 'alert-octagon', // Default alert icon
    },
    message: {
      type: String,
      required: true, // Alert message is required
    },
  });
  
  // Emit events to notify parent components
  const emit = defineEmits(['update:message']);
  
  // Method to close the alert manually
  const closeAlert = () => {
    emit('update:message', null); // Notify parent to clear the message
  };
</script>

<style scoped>
  /* Optional custom styles for the close button */
  .btn-close {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0 !important;
  }
</style>
  