<template>
    <base-modal :id="id" title="Change Password">
        <template #body>
            <Form @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
                <div class="mb-3">
                    <label class="form-label">Current Password <span class="text-danger">*</span></label>
                    <Field name="current_password" type="password" class="form-control"
                        placeholder="Enter Current Password" :class="{ 'is-invalid': errors.current_password }" />
                    <div class="invalid-feedback">{{ errors.current_password }}</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">New Password <span class="text-danger">*</span></label>
                    <Field name="new_password" type="password" class="form-control" placeholder="Enter New Password"
                        :class="{ 'is-invalid': errors.new_password }" />
                    <div class="invalid-feedback">{{ errors.new_password }}</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Confirm New Password <span class="text-danger">*</span></label>
                    <Field name="new_password_confirmation" type="password" class="form-control"
                        placeholder="Confirm New Password"
                        :class="{ 'is-invalid': errors.new_password_confirmation }" />
                    <div class="invalid-feedback">{{ errors.new_password_confirmation }}</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" :disabled="profileStore.loading">Change
                        Password</button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { Modal } from 'bootstrap';
import { useProfileStore } from '@/stores/profile';

const props = defineProps({
    id: { type: String, default: 'change_password' }
});

const profileStore = useProfileStore();

const schema = yup.object({
    current_password: yup.string().required('Current password is required'),
    new_password: yup.string().required('New password is required').min(8, 'Password must be at least 8 characters'),
    new_password_confirmation: yup.string()
        .required('Please confirm your password')
        .oneOf([yup.ref('new_password')], 'Passwords must match')
});

const emit = defineEmits(['success']);

const submitForm = async (values) => {
    const success = await profileStore.changePassword(values);
    if (success) {
        const modalElement = document.getElementById(props.id);
        const modal = Modal.getInstance(modalElement);
        if (modal) modal.hide();
        emit('success');
    }
};
</script>
