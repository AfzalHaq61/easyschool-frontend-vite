<template>
    <div class="input-icon-start mb-3 me-2 position-relative">
      <Datepicker
        v-model="internalValue"
        :enable-time-picker="false"
        :range="true"
        placeholder="Select date range"
      />
    </div>
  </template>
  
  <script setup>
    import Datepicker from "@vuepic/vue-datepicker";
    import "@vuepic/vue-datepicker/dist/main.css";
    import { computed } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: [String, Array, Object],
      default: null
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const internalValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  })
  </script>
  