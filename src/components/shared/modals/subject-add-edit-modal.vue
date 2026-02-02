<template>
    <base-modal :id="id" :title="mode === 'edit' ? 'Edit Subject' : 'Add Subject'">
        <template #body>
            <Form ref="formRef" @submit="onSubmit" :validation-schema="schema" :initial-values="initialValues"
                v-slot="{ errors }">
                <div class="mb-3">
                    <label class="form-label">Subject Name</label>
                    <Field name="name" type="text" v-model="name" placeholder="Enter Subject Name" class="form-control"
                        :class="{ 'is-invalid': errors.name }" />
                    <div class="invalid-feedback">
                        {{ errors.name }}
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Subject Code</label>
                    <Field name="code" v-slot="{ field }">
                        <vue-select v-bind="field" v-model="code" :options="codeOptions" placeholder="Select Code"
                            :class="{ 'is-invalid': errors.code }" />
                    </Field>
                    <div class="invalid-feedback">
                        {{ errors.code }}
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Subject Type</label>
                    <Field name="type" v-slot="{ field }">
                        <vue-select v-bind="field" v-model="type" :options="typeOptions" placeholder="Select Type"
                            :class="{ 'is-invalid': errors.type }" />
                    </Field>
                    <div v-if="errors.type" class="text-danger fs-12 mt-1">
                        {{ errors.type }}
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
                        {{ mode === 'edit' ? 'Save Changes' : 'Add Subject' }}
                    </button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { Modal } from 'bootstrap'
import VueSelect from 'vue3-select2-component'
import { useSubjectsStore } from '@/stores/subjects'

const subjectsStore = useSubjectsStore()
const emit = defineEmits(['submitted'])

const props = defineProps({
    id: { type: String, required: true },
    mode: { type: String, default: 'add' }, // 'add' or 'edit'
    subjectData: { type: Object, default: () => ({}) },
})

const formRef = ref(null)
const name = ref(props.subjectData.name || '')
const code = ref(props.subjectData.code || '')
const type = ref(props.subjectData.type || '')
const status = ref(props.subjectData.status?.toLowerCase() || 'active')

const initialValues = computed(() => ({
    name: props.subjectData.name || '',
    code: props.subjectData.code || '',
    type: props.subjectData.type || '',
    status: props.subjectData.status?.toLowerCase() || 'active'
}))

const codeOptions = computed(() => {
    const codes = Array.isArray(subjectsStore.codes) ? subjectsStore.codes : [];
    return codes.map(t => {
        const val = typeof t === 'object' ? (t.id || t.name || t) : t;
        const text = typeof t === 'object' ? (t.text || t.name || t) : String(t);
        return { id: val, text: text.charAt(0).toUpperCase() + text.slice(1) };
    });
})

const typeOptions = computed(() => {
    const types = Array.isArray(subjectsStore.types) ? subjectsStore.types : [];
    return types.map(t => {
        const val = typeof t === 'object' ? (t.id || t.name || t) : t;
        const text = typeof t === 'object' ? (t.text || t.name || t) : String(t);
        return { id: val, text: text.charAt(0).toUpperCase() + text.slice(1) };
    });
})

watch(() => props.subjectData, (newVal) => {
    name.value = newVal?.name || ''
    code.value = newVal?.code || ''
    type.value = newVal?.type || ''
    status.value = newVal?.status?.toLowerCase() || 'active'

    // Sync vee-validate form values
    if (formRef.value) {
        formRef.value.setValues({
            name: name.value,
            code: code.value,
            type: type.value,
            status: status.value
        })
    }
}, { deep: true })

const schema = yup.object({
    name: yup.string().required('Subject name is required').max(255),
    code: yup.string().required('Subject code is required').max(100),
    type: yup.string().required('Subject type is required'),
})

function onSubmit() {
    emit('submitted', { name: name.value, code: code.value, type: type.value, status: status.value })

    // Hide modal
    const modalEl = document.getElementById(props.id)
    if (modalEl) {
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl)
        modalInstance.hide()
    }

    // Reset form only if adding
    if (props.mode === 'add') {
        name.value = ''
        code.value = ''
        type.value = ''
        status.value = 'active'
        formRef.value?.resetForm()
    }
}

onMounted(() => {
    if (subjectsStore.codes.length === 0) {
        subjectsStore.fetchCodes()
    }
    if (subjectsStore.types.length === 0) {
        subjectsStore.fetchTypes()
    }
})
</script>
