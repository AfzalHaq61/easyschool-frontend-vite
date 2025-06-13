<template>
  <div class="d-flex my-xl-auto right-content align-items-center">
    <!-- Refresh Button -->
    <div class="pe-1 mb-2">
      <icon-button icon="ti ti-refresh" tooltip="Refresh" :reload="true" />
    </div>

    <!-- Print Button -->
    <div class="pe-1 mb-2">
      <icon-button icon="ti ti-printer" tooltip="Print" @click="$emit('print')" />
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
      />
    </div>

    <!-- Add Role Button -->
    <div class="mb-2">
      <primary-button icon="ti ti-square-rounded-plus" data-bs-toggle="modal" :data-bs-target="`#${id}`">
        Add {{ name }}
      </primary-button>
    </div>
  </div>
</template>
  
<script setup>
  const emit = defineEmits(['print', 'export', 'addRole'])
  defineProps({
      id: {
          type: String,
          default: null
      },
      name: {
          type: String,
          default: null
      }
    })

  function handleExport(type) {
    emit('export', type)
  }
</script>
  