<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ label }}</label>
    <Field
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="form-control"
      :value="modelValue"
      :class="{ 'is-invalid': errors[name] }"
      @input="onInput"
      v-slot="{ field }"
    />
    <div class="invalid-feedback">
      {{ errors[name] }}
    </div>
  </div>
</template>

<script setup>
import { Field, useField } from 'vee-validate';
import { computed } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: [String, Number]
});

const emit = defineEmits(['update:modelValue']);

const { errorMessage } = useField(props.name);
const errors = computed(() => ({ [props.name]: errorMessage.value }));

const onInput = (e) => {
  emit('update:modelValue', e.target.value);
};
</script>
