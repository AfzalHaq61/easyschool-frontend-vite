<template>
    <div class="dataTables_filter text-end">
    <label>
        <input
        v-model="inputValue"
        type="search"
        class="form-control form-control-sm"
        placeholder="Search"
        aria-controls="DataTables_Table_0"
        />
    </label>
    </div>
</template>
  
<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const inputValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  })
</script>
  