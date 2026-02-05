<template>
    <base-modal :id="id" :title="mode === 'edit' ? 'Edit Route' : 'Add Route'">
        <template #body>
            <Form ref="formRef" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="mb-3">
                    <label class="form-label">Route Name</label>
                    <Field name="name" type="text" v-model="name" placeholder="Enter Route Name" class="form-control"
                        :class="{ 'is-invalid': errors.name }" />
                    <div class="invalid-feedback">
                        {{ errors.name }}
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="status-title">
                        <h5>Status</h5>
                        <p>Change the Status by toggle</p>
                    </div>
                    <div class="form-check form-switch">
                        <input v-model="status" class="form-check-input" type="checkbox" role="switch"
                            :id="id + '-switch'" true-value="active" false-value="inactive" />
                    </div>
                </div>

                <div class="modal-footer">
                    <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
                    <button type="submit" class="btn btn-primary">
                        {{ mode === 'edit' ? 'Save Changes' : 'Add Route' }}
                    </button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { Modal } from 'bootstrap'

const emit = defineEmits(['submitted'])

const props = defineProps({
    id: { type: String, required: true },
    mode: { type: String, default: 'add' }, // 'add' or 'edit'
    routeData: { type: Object, default: () => ({}) },
})

const formRef = ref(null)
const name = ref(props.routeData.name || '')
const status = ref(props.routeData.status?.toLowerCase() || 'active')

watch(() => props.routeData, (newVal) => {
    name.value = newVal?.name || ''
    status.value = newVal?.status?.toLowerCase() || 'active'
}, { deep: true })

const schema = yup.object({
    name: yup.string().required('Route name is required'),
})

function onSubmit() {
    emit('submitted', { name: name.value, status: status.value })

    // Hide modal
    const modalEl = document.getElementById(props.id)
    if (modalEl) {
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl)
        modalInstance.hide()
    }

    // Reset form only if adding
    if (props.mode === 'add') {
        name.value = ''
        status.value = 'active'
        formRef.value?.resetForm()
    }
}
</script>
