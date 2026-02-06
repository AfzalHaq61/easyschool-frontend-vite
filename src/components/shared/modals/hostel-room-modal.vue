<template>
    <base-modal :id="modalId" :title="isEdit ? 'Edit Hostel Room' : 'Add New Hostel Room'">
        <template #body>
            <Form ref="formRef" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Room Number <span class="text-danger">*</span></label>
                            <Field name="room_number" v-model="form.room_number" type="text" class="form-control"
                                placeholder="Enter Room Number" :class="{ 'is-invalid': errors.room_number }" />
                            <div class="invalid-feedback">
                                {{ errors.room_number }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Hostel <span class="text-danger">*</span></label>
                            <Field name="hostel_id" v-model="form.hostel_id" v-slot="{ field }">
                                <vue-select v-bind="field" v-model="form.hostel_id" :options="hostelOptions"
                                    placeholder="Select Hostel" :class="{ 'is-invalid': errors.hostel_id }" />
                            </Field>
                            <div class="invalid-feedback" v-if="errors.hostel_id">
                                {{ errors.hostel_id }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Room Type <span class="text-danger">*</span></label>
                            <Field name="hostel_room_type_id" v-model="form.hostel_room_type_id" v-slot="{ field }">
                                <vue-select v-bind="field" v-model="form.hostel_room_type_id" :options="typeOptions"
                                    placeholder="Select Type" :class="{ 'is-invalid': errors.hostel_room_type_id }" />
                            </Field>
                            <div class="invalid-feedback" v-if="errors.hostel_room_type_id">
                                {{ errors.hostel_room_type_id }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Number of Beds <span class="text-danger">*</span></label>
                            <Field name="number_of_beds" v-model="form.number_of_beds" type="number"
                                class="form-control" placeholder="Enter Number"
                                :class="{ 'is-invalid': errors.number_of_beds }" />
                            <div class="invalid-feedback">
                                {{ errors.number_of_beds }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Cost Per Bed <span class="text-danger">*</span></label>
                            <Field name="cost_per_bed" v-model="form.cost_per_bed" type="number" step="0.01"
                                class="form-control" placeholder="Enter Cost"
                                :class="{ 'is-invalid': errors.cost_per_bed }" />
                            <div class="invalid-feedback">
                                {{ errors.cost_per_bed }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <Field name="description" v-model="form.description" as="textarea" class="form-control"
                                placeholder="Enter Description" :class="{ 'is-invalid': errors.description }" />
                            <div class="invalid-feedback">
                                {{ errors.description }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-between mt-3 mb-3">
                    <div class="status-title">
                        <h5>Status</h5>
                        <p>Change the Status by toggle</p>
                    </div>
                    <div class="form-check form-switch">
                        <input v-model="form.status" class="form-check-input" type="checkbox" role="switch"
                            :id="modalId + '-switch'" true-value="active" false-value="inactive" />
                    </div>
                </div>

                <div class="modal-footer">
                    <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
                    <button type="submit" class="btn btn-primary" :disabled="hostelRoomsStore.loading">
                        {{ isEdit ? 'Update Room' : 'Add Room' }}
                    </button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { Modal } from 'bootstrap';
import { useHostelRoomsStore } from '@/stores/hostel-rooms';
import { useHostelsStore } from '@/stores/hostels';
import { useHostelRoomTypesStore } from '@/stores/hostel-room-types';
import VueSelect from 'vue3-select2-component';

const props = defineProps({
    isEdit: { type: Boolean, default: false },
    roomData: { type: Object, default: () => ({}) },
    modalId: { type: String, default: 'add_hostel_rooms' }
});

const hostelRoomsStore = useHostelRoomsStore();
const hostelsStore = useHostelsStore();
const hostelRoomTypesStore = useHostelRoomTypesStore();
const formRef = ref(null);

const form = ref({
    room_number: '',
    hostel_id: '',
    hostel_room_type_id: '',
    number_of_beds: 1,
    cost_per_bed: 0,
    description: '',
    status: 'active'
});

const hostelOptions = ref([]);
const typeOptions = ref([]);

onMounted(async () => {
    // We need to fetch hostels and room types for the dropdowns
    // Assuming they have index actions in their stores
    if (hostelsStore.hostels.length === 0) await hostelsStore.index();
    if (hostelRoomTypesStore.roomTypes.length === 0) await hostelRoomTypesStore.index();

    hostelOptions.value = hostelsStore.hostels.map(h => ({
        id: h.id,
        text: h.attributes?.name || h.name
    }));

    typeOptions.value = hostelRoomTypesStore.roomTypes.map(t => ({
        id: t.id,
        text: t.attributes?.name || t.name
    }));
});

const schema = yup.object({
    room_number: yup.string().required('Room Number is required'),
    hostel_id: yup.string().required('Hostel is required'),
    hostel_room_type_id: yup.string().required('Room Type is required'),
    number_of_beds: yup.number().required('Number of beds is required').min(1, 'At least 1 bed is required'),
    cost_per_bed: yup.number().required('Cost is required').min(0, 'Cost cannot be negative'),
    description: yup.string().nullable(),
});

const emit = defineEmits(['success']);

const resetForm = () => {
    form.value = {
        room_number: '',
        hostel_id: '',
        hostel_room_type_id: '',
        number_of_beds: 1,
        cost_per_bed: 0,
        description: '',
        status: 'active'
    };
    if (formRef.value) {
        formRef.value.resetForm();
    }
};

watch(() => props.roomData, (newData) => {
    if (newData && Object.keys(newData).length > 0) {
        const attr = newData.attributes || newData;
        const values = {
            room_number: attr.room_number || '',
            hostel_id: attr.hostel_id || '',
            hostel_room_type_id: attr.hostel_room_type_id || '',
            number_of_beds: attr.number_of_beds || 1,
            cost_per_bed: attr.cost_per_bed || 0,
            description: attr.description || '',
            status: attr.status || 'active'
        };
        form.value = { ...values };
        if (formRef.value) {
            formRef.value.setValues(values);
        }
    } else {
        resetForm();
    }
}, { immediate: true, deep: true });

const submitForm = async () => {
    let success = false;
    if (props.isEdit) {
        success = await hostelRoomsStore.update(props.roomData.id, form.value);
    } else {
        success = await hostelRoomsStore.store(form.value);
    }

    if (success) {
        const modalElement = document.getElementById(props.modalId);
        const modal = Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
        resetForm();
        emit('success');
    }
};
</script>
