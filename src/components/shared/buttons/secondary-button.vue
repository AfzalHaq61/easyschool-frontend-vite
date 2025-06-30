<template>
  <button
    class="btn btn-primary d-flex align-items-center"
    v-bind="$attrs"
  >
    <i v-if="icon" :class="`${icon} me-2`"></i>
    <slot>Secondary Button</slot>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: null
  }
});

defineOptions({
  inheritAttrs: false
});
</script>
