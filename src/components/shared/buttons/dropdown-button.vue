<template>
    <button
        class="dropdown-toggle btn d-inline-flex align-items-center"
        :class="buttonClass"
        data-bs-toggle="dropdown"
      >
        <i v-if="icon" :class="`${icon} me-2`"></i>
        {{ label }}
    </button>
    <slot></slot>
</template>
  
<script setup>
  defineProps({
    icon: String,
    label: {
      type: String,
      default: 'Menu'
    },
    buttonClass: {
      type: String,
      default: 'btn-light fw-medium'
    },
    items: {
      type: Array,
      default: () => []
      /*
        Example:
        [
          { text: 'Export as PDF', value: 'pdf', icon: 'ti ti-file-type-pdf' },
          { text: 'Export as Excel', value: 'excel', icon: 'ti ti-file-type-xls' }
        ]
      */
    }
  });
  
  defineEmits(['action']);
</script>
  