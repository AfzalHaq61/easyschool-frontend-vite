<template>
    <div class="modal fade" :id="id" tabindex="-1">
        <div class="modal-dialog" :class="dialogClass">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">{{ title }}</h5>
                <CloseButton />
                </div>

                <div class="modal-body">
                    <slot name="body" />
                </div>

                <div class="modal-footer" v-if="$slots.footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CloseButton from '@/components/shared/buttons/close-button.vue';

    defineProps({
        id: { type: String, required: true },
        title: { type: String, required: true },
        dialogClass: { type: String, default: "modal-dialog-centered" }
    });
</script>
  