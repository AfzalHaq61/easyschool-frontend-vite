<template>
    <base-modal :id="modalId" :title="isEdit ? 'Edit Hostel' : 'Add New Hostel'">
        <template #body>
            <Form ref="formRef" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Hostel Name <span class="text-danger">*</span></label>
                            <Field name="name" v-model="form.name" type="text" class="form-control"
                                placeholder="Enter Hostel Name" :class="{ 'is-invalid': errors.name }" />
                            <div class="invalid-feedback">
                                {{ errors.name }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Hostel Type <span class="text-danger">*</span></label>
                            <Field name="type" v-model="form.type" v-slot="{ field }">
                                <vue-select v-bind="field" v-model="form.type" :options="typeOptions"
                                    placeholder="Select Type" :class="{ 'is-invalid': errors.type }" />
                            </Field>
                            <div class="invalid-feedback" v-if="errors.type">
                                {{ errors.type }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Intake <span class="text-danger">*</span></label>
                            <Field name="intake" v-model="form.intake" type="number" class="form-control"
                                placeholder="Enter Intake" :class="{ 'is-invalid': errors.intake }" />
                            <div class="invalid-feedback">
                                {{ errors.intake }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address</label>
                            <Field name="address" v-model="form.address" as="textarea" class="form-control"
                                placeholder="Enter Address" :class="{ 'is-invalid': errors.address }" />
                            <div class="invalid-feedback">
                                {{ errors.address }}
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
                    <button type="submit" class="btn btn-primary" :disabled="hostelsStore.loading">
                        {{ isEdit ? 'Update Hostel' : 'Add Hostel' }}
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
import { useHostelsStore } from '@/stores/hostels';
import VueSelect from 'vue3-select2-component';

const props = defineProps({
    isEdit: { type: Boolean, default: false },
    hostelData: { type: Object, default: () => ({}) },
    modalId: { type: String, default: 'add_hostel' }
});

const hostelsStore = useHostelsStore();
const formRef = ref(null);

const form = ref({
    name: '',
    type: 'Mixed',
    address: '',
    intake: 0,
    description: '',
    status: 'active'
});

const typeOptions = ['Boys', 'Girls', 'Mixed'];

const schema = yup.object({
    name: yup.string().required('Hostel Name is required'),
    type: yup.string().required('Type is required'),
    intake: yup.number().required('Intake is required').min(0, 'Intake cannot be negative'),
    address: yup.string().nullable(),
    description: yup.string().nullable(),
});

const emit = defineEmits(['success']);

const resetForm = () => {
    form.value = {
        name: '',
        type: 'Mixed',
        address: '',
        intake: 0,
        description: '',
        status: 'active'
    };
    if (formRef.value) {
        formRef.value.resetForm();
    }
};

watch(() => props.hostelData, (newData) => {
    if (newData && Object.keys(newData).length > 0) {
        const attr = newData.attributes || newData;
        const values = {
            name: attr.name || '',
            type: attr.type || 'Mixed',
            address: attr.address || '',
            intake: attr.intake || 0,
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
        success = await hostelsStore.update(props.hostelData.id, form.value);
    } else {
        success = await hostelsStore.store(form.value);
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
