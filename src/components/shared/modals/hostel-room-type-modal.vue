<template>
    <base-modal :id="modalId" :title="isEdit ? 'Edit Room Type' : 'Add New Room Type'">
        <template #body>
            <Form ref="formRef" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Room Type <span class="text-danger">*</span></label>
                            <Field name="name" v-model="form.name" type="text" class="form-control"
                                placeholder="Enter Room Type" :class="{ 'is-invalid': errors.name }" />
                            <div class="invalid-feedback">
                                {{ errors.name }}
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
                    <button type="submit" class="btn btn-primary" :disabled="hostelRoomTypesStore.loading">
                        {{ isEdit ? 'Update Room Type' : 'Add Room Type' }}
                    </button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { Modal } from 'bootstrap';
import { useHostelRoomTypesStore } from '@/stores/hostel-room-types';

const props = defineProps({
    isEdit: { type: Boolean, default: false },
    roomTypeData: { type: Object, default: () => ({}) },
    modalId: { type: String, default: 'add_hostel_room_type' }
});

const hostelRoomTypesStore = useHostelRoomTypesStore();
const formRef = ref(null);

const form = ref({
    name: '',
    description: '',
    status: 'active'
});

const schema = yup.object({
    name: yup.string().required('Room Type is required'),
    description: yup.string().nullable(),
});

const emit = defineEmits(['success']);

const resetForm = () => {
    form.value = {
        name: '',
        description: '',
        status: 'active'
    };
    if (formRef.value) {
        formRef.value.resetForm();
    }
};

watch(() => props.roomTypeData, (newData) => {
    if (newData && Object.keys(newData).length > 0) {
        // Handle both nested attributes (JSON:API style) and flattened objects
        const attr = newData.attributes || newData;
        const values = {
            name: attr.name || '',
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
        success = await hostelRoomTypesStore.update(props.roomTypeData.id, form.value);
    } else {
        success = await hostelRoomTypesStore.store(form.value);
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
