<!-- components/FilterHeader.vue -->
<template>
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
    <h4 class="mb-3">{{ title }}</h4>
    <div class="d-flex align-items-center flex-wrap">
      <div class="input-icon-start mb-3 me-2 position-relative">
        <Datepicker
          v-model="dateRangeProxy"
          :enable-time-picker="false"
          :range="true"
          placeholder="Select date range"
        />
      </div>
      <div class="dropdown mb-3">
        <a
          class="btn btn-outline-light bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <i class="ti ti-sort-ascending-2 me-2"></i>Sort by {{ currentSortLabel }}
        </a>
        <ul class="dropdown-menu p-3">
          <li>
            <a @click="$emit('sort', 'asc')" class="dropdown-item rounded-1">Ascending</a>
          </li>
          <li>
            <a @click="$emit('sort', 'desc')" class="dropdown-item rounded-1">Descending</a>
          </li>
          <li>
            <a @click="$emit('sort', 'recent_added')" class="dropdown-item rounded-1">Recently Added</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'List'
  },
  modelValue: {
    type: [Array, Object, String, null],
    default: null
  },
  currentSortLabel: {
    type: String,
    default: 'None'
  }
})

const emit = defineEmits(['update:modelValue', 'sort'])

const dateRangeProxy = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
