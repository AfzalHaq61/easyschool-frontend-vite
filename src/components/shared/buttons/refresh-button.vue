<template>
  <a
    href="javascript:void(0);"
    class="btn btn-outline-light bg-white btn-icon me-1"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    aria-label="Refresh"
    data-bs-original-title="Refresh"
    @click="handleClick"
  >
    <i class="ti ti-refresh"></i>
  </a>
</template>

<script setup>
  const handleClick = () => {
    window.location.reload();
  };
</script>
