<template>
    <base-modal :id="id" :title="mode === 'edit' ? 'Edit Class' : 'Add Class'">
        <template #body>
            <Form ref="formRef" @submit="onSubmit" :validation-schema="schema" :initial-values="initialValues"
                v-slot="{ errors }">
                <div class="mb-3">
                    <label class="form-label">Class Name</label>
                    <Field name="name" type="text" v-model="name" placeholder="Enter Class Name" class="form-control"
                        :class="{ 'is-invalid': errors.name }" />
                    <div class="invalid-feedback">
                        {{ errors.name }}
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Section</label>
                    <Field name="section_id" v-slot="{ field }">
                        <vue-select v-bind="field" v-model="section_id" :options="sectionOptions"
                            placeholder="Select Section" :class="{ 'is-invalid': errors.section_id }" />
                    </Field>
                    <div class="invalid-feedback">
                        {{ errors.section_id }}
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">No of Students</label>
                    <Field name="no_of_students" type="text" v-model="no_of_students" placeholder="Enter no of Students"
                        class="form-control" :class="{ 'is-invalid': errors.no_of_students }" />
                    <div class="invalid-feedback">
                        {{ errors.no_of_students }}
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label">No of Subjects</label>
                    <Field name="no_of_subjects" type="text" v-model="no_of_subjects" placeholder="Enter no of Subjects"
                        class="form-control" :class="{ 'is-invalid': errors.no_of_subjects }" />
                    <div class="invalid-feedback">
                        {{ errors.no_of_subjects }}
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
                        {{ mode === 'edit' ? 'Save Changes' : 'Add Class' }}
                    </button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { Modal } from 'bootstrap'
import VueSelect from 'vue3-select2-component'
import { useSectionsStore } from '@/stores/sections'

const emit = defineEmits(['submitted'])

const props = defineProps({
    id: { type: String, required: true },
    mode: { type: String, default: 'add' }, // 'add' or 'edit'
    classData: { type: Object, default: () => ({}) },
})

const sectionsStore = useSectionsStore()

const formRef = ref(null)
const name = ref(props.classData.name || '')
const section_id = ref(props.classData.section_id || '')
const no_of_students = ref(props.classData.no_of_students || '')
const no_of_subjects = ref(props.classData.no_of_subjects || '')
const status = ref(props.classData.status?.toLowerCase() || 'active')

const initialValues = computed(() => ({
    name: props.classData.name || '',
    section_id: props.classData.section_id || '',
    no_of_students: props.classData.no_of_students || '',
    no_of_subjects: props.classData.no_of_subjects || '',
    status: props.classData.status?.toLowerCase() || 'active'
}))

const sectionOptions = computed(() => {
    return [{ id: '', text: 'Select Section' }, ...sectionsStore.sections.map(s => ({
        id: s.id,
        text: s.attributes?.name || s.name || s.id
    }))]
})

onMounted(async () => {
    if (sectionsStore.sections.length === 0) {
        await sectionsStore.index()
    }
})

watch(() => props.classData, (newVal) => {
    name.value = newVal?.name || ''
    section_id.value = newVal?.section_id || ''
    no_of_students.value = newVal?.no_of_students || ''
    no_of_subjects.value = newVal?.no_of_subjects || ''
    status.value = newVal?.status?.toLowerCase() || 'active'

    // Sync vee-validate form values
    if (formRef.value) {
        formRef.value.setValues({
            name: name.value,
            section_id: section_id.value,
            no_of_students: no_of_students.value,
            no_of_subjects: no_of_subjects.value,
            status: status.value
        })
    }
}, { deep: true })

const schema = yup.object({
    name: yup.string().required('Class name is required'),
    section_id: yup.string().required('Section is required'),
    no_of_students: yup.number().typeError('Number of students must be a number').required('Number of students is required').min(0, 'Cannot be negative'),
    no_of_subjects: yup.number().typeError('Number of subjects must be a number').required('Number of subjects is required').min(0, 'Cannot be negative'),
})

function onSubmit() {
    emit('submitted', {
        name: name.value,
        section_id: section_id.value,
        no_of_students: no_of_students.value,
        no_of_subjects: no_of_subjects.value,
        status: status.value
    })

    // Hide modal
    const modalEl = document.getElementById(props.id)
    if (modalEl) {
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl)
        modalInstance.hide()
    }

    // Reset form only if adding
    if (props.mode === 'add') {
        name.value = ''
        section_id.value = ''
        no_of_students.value = ''
        no_of_subjects.value = ''
        status.value = 'active'
        formRef.value?.resetForm()
    }
}
</script>
