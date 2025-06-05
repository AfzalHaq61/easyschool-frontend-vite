<template>
    <div class="dropdown mb-3">
      <a class="btn btn-outline-light bg-white dropdown-toggle" data-bs-toggle="dropdown">
        <i class="ti ti-sort-ascending-2 me-2"></i>
        Sort by {{ currentLabel }}
      </a>
      <ul class="dropdown-menu p-3">
        <li>
          <a @click="handleSort('asc')" class="dropdown-item rounded-1">Ascending</a>
        </li>
        <li>
          <a @click="handleSort('desc')" class="dropdown-item rounded-1">Descending</a>
        </li>
        <li>
          <a @click="handleSort('recent_added')" class="dropdown-item rounded-1">Recently Added</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const handleSort = (value) => {
    emit('update:modelValue', value)
  }
  
  const currentLabel = computed(() => {
    switch (props.modelValue) {
      case 'asc':
        return 'Ascending'
      case 'desc':
        return 'Descending'
      case 'recent_added':
        return 'Recently Added'
      default:
        return 'None'
    }
  })
  </script>
  