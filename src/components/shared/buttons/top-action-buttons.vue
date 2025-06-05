<template>
  <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
    <!-- Refresh Button -->
    <div class="pe-1 mb-2">
      <refresh-button />
    </div>

    <!-- Print Button -->
    <div class="pe-1 mb-2">
      <button
        type="button"
        class="btn btn-outline-light bg-white btn-icon me-1"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        aria-label="Print"
        data-bs-original-title="Print"
        @click.prevent="$emit('print')"
      >
        <i class="ti ti-printer"></i>
      </button>
    </div>

    <!-- Export Dropdown -->
    <div class="dropdown me-2 mb-2">
      <dropdown-button
        icon="ti ti-file-export"
        label="Export"
        :items="[
          { text: 'Export as PDF', value: 'pdf', icon: 'ti ti-file-type-pdf' },
          { text: 'Export as Excel', value: 'excel', icon: 'ti ti-file-type-xls' }
        ]"
        @action="handleExport"
      >
      </dropdown-button>
    </div>

    <!-- Add Role Button -->
    <div class="mb-2">
      <primary-button icon="ti ti-square-rounded-plus" data-bs-toggle="modal" :data-bs-target="`#${id}`">
        Add Role
      </primary-button>
    </div>
  </div>
</template>
  
<script setup>
  defineEmits(['print', 'export', 'addRole'])
  defineProps({
      id: {
          type: String,
          default: null
      }
    })
</script>
  