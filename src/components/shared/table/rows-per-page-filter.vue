<template>
    <div class="dataTables_length" id="DataTables_Table_0_length">
      <label>
        Rows Per Page
        <select
          v-model="internalValue"
          name="DataTables_Table_0_length"
          aria-controls="DataTables_Table_0"
          class="form-select form-select-sm"
        >
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
        Entries
      </label>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: 10
    },
    options: {
      type: Array,
      default: () => [10, 25, 50, 100]
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const internalValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  })
  </script>
  