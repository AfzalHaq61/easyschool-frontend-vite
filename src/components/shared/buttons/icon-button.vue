<template>
  <button
    class="btn btn-outline-light bg-white btn-icon me-1"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    :aria-label="tooltip"
    :data-bs-original-title="tooltip"
    @click.prevent="handleClick"
  >
    <i :class="icon"></i>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
    default: '',
  },
  reload: {
    type: Boolean,
    default: false,
  },
})

function handleClick() {
  if (props.reload) {
    window.location.reload()
  } else {
    emit('click')
  }
}
</script>
