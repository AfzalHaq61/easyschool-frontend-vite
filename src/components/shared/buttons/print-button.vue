<template>
  <button
    class="btn btn-outline-light bg-white btn-icon me-1"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    aria-label="Print"
    data-bs-original-title="Print"
    @click.prevent="$emit('print')"
  >
    <i class="ti ti-printer"></i> 
  </button>
</template>