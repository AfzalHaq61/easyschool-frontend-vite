<template>
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
        <h4 class="mb-3">{{ title }}</h4>
        <div class="d-flex align-items-center flex-wrap">
          <slot name="filters-start" />
          <DateRangePicker v-model="internalDateRange" />
          <SortDropdown v-model="internalSort" />
        </div>
      </div>
  
      <div class="card-body p-0 py-3">
        <div class="custom-datatable-filter table-responsive">
          <div class="row mb-2">
            <div class="col-sm-12 col-md-6">
              <RowsPerPageFilter v-model="internalRowsPerPage" />
            </div>
            <div class="col-sm-12 col-md-6">
              <SearchFilter v-model="internalSearchQuery" />
            </div>
          </div>
  
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import DateRangePicker from '@/components/shared/table/date-range-picker.vue';
  import SortDropdown from '@/components/shared/table/sort-dropdown.vue';
  import SearchFilter from '@/components/shared/table/search-filter.vue';
  import RowsPerPageFilter from '@/components/shared/table/rows-per-page-filter.vue';
  import { computed } from 'vue'
  
  const props = defineProps({
    title: { type: String, default: 'Table' },
    dateRange: Array,
    currentSort: String,
    rowsPerPage: [String, Number],
    searchQuery: String,
  })
  
  const emit = defineEmits([
    'update:dateRange',
    'update:currentSort',
    'update:rowsPerPage',
    'update:searchQuery',
  ])
  
  const internalDateRange = computed({
    get: () => props.dateRange,
    set: (val) => emit('update:dateRange', val),
  })
  
  const internalSort = computed({
    get: () => props.currentSort,
    set: (val) => emit('update:currentSort', val),
  })
  
  const internalRowsPerPage = computed({
    get: () => props.rowsPerPage,
    set: (val) => emit('update:rowsPerPage', val),
  })
  
  const internalSearchQuery = computed({
    get: () => props.searchQuery,
    set: (val) => emit('update:searchQuery', val),
  })
  </script>
  