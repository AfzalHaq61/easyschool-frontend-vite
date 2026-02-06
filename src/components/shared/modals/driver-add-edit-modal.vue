<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ mode === 'edit' ? 'Edit Driver' : 'Add New Driver' }}</h4>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Name" v-model="form.name"
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Email"
                                        v-model="form.email" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Phone Number</label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number"
                                        v-model="form.phone" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Driving License Number</label>
                                    <input type="text" class="form-control" placeholder="Enter Driving License Number"
                                        v-model="form.driver_license" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Address</label>
                                    <textarea class="form-control" placeholder="Enter Address"
                                        v-model="form.address"></textarea>
                                </div>
                                <div class="row" v-if="mode === 'add' || changePassword">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" placeholder="Enter Password"
                                            v-model="form.password" :required="mode === 'add'" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" placeholder="Confirm Password"
                                            v-model="form.password_confirmation" :required="mode === 'add'" />
                                    </div>
                                </div>
                                <div class="mb-3" v-if="mode === 'edit'">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="changePassword"
                                            v-model="changePassword">
                                        <label class="form-check-label" for="changePassword">
                                            Change Password
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-satus-toggle d-flex align-items-center justify-content-between">
                                <div class="status-title">
                                    <h5>Status</h5>
                                    <p>Change the Status by toggle</p>
                                </div>
                                <div class="status-toggle modal-status">
                                    <input type="checkbox" :id="'status_' + mode" class="check" v-model="form.status"
                                        :true-value="'active'" :false-value="'inactive'" />
                                    <label :for="'status_' + mode" class="checktoggle"> </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ submitBtnText
                        }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
    id: String,
    mode: {
        type: String,
        default: 'add'
    },
    driverData: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(['submitted']);

const form = ref({
    name: '',
    email: '',
    phone: '',
    driver_license: '',
    address: '',
    password: '',
    password_confirmation: '',
    status: 'active'
});

const changePassword = ref(false);

const submitBtnText = computed(() => {
    return props.mode === 'edit' ? 'Save Changes' : 'Add Driver';
});

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        phone: '',
        driver_license: '',
        address: '',
        password: '',
        password_confirmation: '',
        status: 'active'
    };
    changePassword.value = false;
};

watch(() => props.driverData, (newVal) => {
    if (props.mode === 'edit' && newVal.id) {
        form.value = {
            name: newVal.name || '',
            email: newVal.email || '',
            phone: newVal.phone || '',
            driver_license: newVal.driver_license || '',
            address: (newVal.address || '').replace(/\r?\n|\r/g, ' ').trim(),
            status: newVal.status || 'active',
            password: '',
            password_confirmation: ''
        };
        changePassword.value = false;
    } else {
        resetForm();
    }
}, { immediate: true });

const submit = () => {
    emit('submitted', form.value);
};
</script>
