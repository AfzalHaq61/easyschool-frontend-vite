<template>
    <base-modal :id="id" :title="mode === 'edit' ? 'Edit Schedule' : 'Add Schedule'">
        <template #body>
            <Form ref="formRef" @submit="onSubmit" :validation-schema="schema" :initial-values="initialValues"
                v-slot="{ errors }">

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Class</label>
                        <Field name="class_id" v-slot="{ field }">
                            <vue-select v-bind="field" v-model="class_id" :options="classOptions"
                                placeholder="Select Class" :class="{ 'is-invalid': errors.class_id }" />
                        </Field>
                        <div class="invalid-feedback d-block" v-if="errors.class_id">
                            {{ errors.class_id }}
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Subject</label>
                        <Field name="subject_id" v-slot="{ field }">
                            <vue-select v-bind="field" v-model="subject_id" :options="subjectOptions"
                                placeholder="Select Subject" :class="{ 'is-invalid': errors.subject_id }" />
                        </Field>
                        <div class="invalid-feedback d-block" v-if="errors.subject_id">
                            {{ errors.subject_id }}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Teacher</label>
                        <Field name="teacher_id" v-slot="{ field }">
                            <vue-select v-bind="field" v-model="teacher_id" :options="teacherOptions"
                                placeholder="Select Teacher" :class="{ 'is-invalid': errors.teacher_id }" />
                        </Field>
                        <div class="invalid-feedback d-block" v-if="errors.teacher_id">
                            {{ errors.teacher_id }}
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Room</label>
                        <Field name="room_id" v-slot="{ field }">
                            <vue-select v-bind="field" v-model="room_id" :options="roomOptions"
                                placeholder="Select Room" :class="{ 'is-invalid': errors.room_id }" />
                        </Field>
                        <div class="invalid-feedback d-block" v-if="errors.room_id">
                            {{ errors.room_id }}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label class="form-label">Day</label>
                        <Field name="day" v-slot="{ field }">
                            <vue-select v-bind="field" v-model="day" :options="dayOptions" placeholder="Select Day"
                                :class="{ 'is-invalid': errors.day }" />
                        </Field>
                        <div class="invalid-feedback d-block" v-if="errors.day">
                            {{ errors.day }}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Start Time</label>
                        <Field name="start_time" type="time" v-model="start_time" class="form-control"
                            :class="{ 'is-invalid': errors.start_time }" />
                        <div class="invalid-feedback" v-if="errors.start_time">
                            {{ errors.start_time }}
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">End Time</label>
                        <Field name="end_time" type="time" v-model="end_time" class="form-control"
                            :class="{ 'is-invalid': errors.end_time }" />
                        <div class="invalid-feedback" v-if="errors.end_time">
                            {{ errors.end_time }}
                        </div>
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
                        {{ mode === 'edit' ? 'Save Changes' : 'Add Schedule' }}
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
import { useClassesStore } from '@/stores/classes'
import { useSubjectsStore } from '@/stores/subjects'
import { useTeachersStore } from '@/stores/teachers'
import { useRoomsStore } from '@/stores/rooms'

const emit = defineEmits(['submitted'])

const props = defineProps({
    id: { type: String, required: true },
    mode: { type: String, default: 'add' }, // 'add' or 'edit'
    scheduleData: { type: Object, default: () => ({}) },
})

const classesStore = useClassesStore()
const subjectsStore = useSubjectsStore()
const teachersStore = useTeachersStore()
const roomsStore = useRoomsStore()

const formRef = ref(null)
const class_id = ref(props.scheduleData.class_id || '')
const subject_id = ref(props.scheduleData.subject_id || '')
const teacher_id = ref(props.scheduleData.teacher_id || '')
const room_id = ref(props.scheduleData.room_id || '')
const day = ref(props.scheduleData.day || '')
const start_time = ref(props.scheduleData.start_time?.substring(0, 5) || '')
const end_time = ref(props.scheduleData.end_time?.substring(0, 5) || '')
const status = ref(props.scheduleData.status?.toLowerCase() || 'active')

const initialValues = computed(() => ({
    class_id: props.scheduleData.class_id || '',
    subject_id: props.scheduleData.subject_id || '',
    teacher_id: props.scheduleData.teacher_id || '',
    room_id: props.scheduleData.room_id || '',
    day: props.scheduleData.day || '',
    start_time: props.scheduleData.start_time?.substring(0, 5) || '',
    end_time: props.scheduleData.end_time?.substring(0, 5) || '',
    status: props.scheduleData.status?.toLowerCase() || 'active'
}))

const classOptions = computed(() => {
    return [{ id: '', text: 'Select Class' }, ...classesStore.classes.map(c => ({
        id: c.id,
        text: c.attributes?.name || c.name || c.id
    }))]
})

const subjectOptions = computed(() => {
    return [{ id: '', text: 'Select Subject' }, ...subjectsStore.subjects.map(s => ({
        id: s.id,
        text: s.attributes?.name || s.name || s.id
    }))]
})

const teacherOptions = computed(() => {
    return [{ id: '', text: 'Select Teacher' }, ...teachersStore.teachers.map(t => ({
        id: t.id,
        text: t.attributes?.name || t.name || t.id
    }))]
})

const roomOptions = computed(() => {
    return [{ id: '', text: 'Select Room' }, ...roomsStore.rooms.map(r => ({
        id: r.id,
        text: r.attributes?.name || r.name || r.id
    }))]
})

const dayOptions = [
    { id: '', text: 'Select Day' },
    { id: 'Monday', text: 'Monday' },
    { id: 'Tuesday', text: 'Tuesday' },
    { id: 'Wednesday', text: 'Wednesday' },
    { id: 'Thursday', text: 'Thursday' },
    { id: 'Friday', text: 'Friday' },
    { id: 'Saturday', text: 'Saturday' },
    { id: 'Sunday', text: 'Sunday' },
]

onMounted(async () => {
    if (classesStore.classes.length === 0) await classesStore.index()
    if (subjectsStore.subjects.length === 0) await subjectsStore.index()
    if (teachersStore.teachers.length === 0) await teachersStore.index()
    if (roomsStore.rooms.length === 0) await roomsStore.index()
})

watch(() => props.scheduleData, (newVal) => {
    class_id.value = newVal?.class_id || ''
    subject_id.value = newVal?.subject_id || ''
    teacher_id.value = newVal?.teacher_id || ''
    room_id.value = newVal?.room_id || ''
    day.value = newVal?.day || ''
    start_time.value = newVal?.start_time?.substring(0, 5) || ''
    end_time.value = newVal?.end_time?.substring(0, 5) || ''
    status.value = newVal?.status?.toLowerCase() || 'active'

    if (formRef.value) {
        formRef.value.setValues({
            class_id: class_id.value,
            subject_id: subject_id.value,
            teacher_id: teacher_id.value,
            room_id: room_id.value,
            day: day.value,
            start_time: start_time.value,
            end_time: end_time.value,
            status: status.value
        })
    }
}, { deep: true })

const schema = yup.object({
    class_id: yup.string().required('Class is required'),
    subject_id: yup.string().required('Subject is required'),
    teacher_id: yup.string().required('Teacher is required'),
    room_id: yup.string().required('Room is required'),
    day: yup.string().required('Day is required'),
    start_time: yup.string().required('Start time is required'),
    end_time: yup.string().required('End time is required'),
})

function onSubmit() {
    emit('submitted', {
        class_id: class_id.value,
        subject_id: subject_id.value,
        teacher_id: teacher_id.value,
        room_id: room_id.value,
        day: day.value,
        start_time: start_time.value,
        end_time: end_time.value,
        status: status.value
    })

    const modalEl = document.getElementById(props.id)
    if (modalEl) {
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl)
        modalInstance.hide()
    }

    if (props.mode === 'add') {
        class_id.value = ''
        subject_id.value = ''
        teacher_id.value = ''
        room_id.value = ''
        day.value = ''
        start_time.value = ''
        end_time.value = ''
        status.value = 'active'
        formRef.value?.resetForm()
    }
}
</script>
