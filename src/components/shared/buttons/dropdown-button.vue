<template>
  <div class="dropdown">
    <button
      class="dropdown-toggle btn d-inline-flex align-items-center"
      :class="buttonClass"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i v-if="icon" :class="`${icon} me-2`"></i>
      {{ label }}
    </button>

    <!-- Dropdown menu -->
    <ul class="dropdown-menu">
      <li
        v-for="item in items"
        :key="item.value"
        @click="$emit('action', item.value)"
        class="dropdown-item d-flex align-items-center"
        style="cursor: pointer;"
      >
        <i v-if="item.icon" :class="`${item.icon} me-2`"></i>
        {{ item.text }}
      </li>
    </ul>

    <slot></slot>
  </div>
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
  }
});

defineEmits(['action']);
</script>
