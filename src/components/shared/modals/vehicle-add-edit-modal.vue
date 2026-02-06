<template>
    <base-modal :id="modalId" :title="isEdit ? 'Edit Vehicle' : 'Add New Vehicle'">
        <template #body>
            <Form ref="formRef" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Vehicle No <span class="text-danger">*</span></label>
                            <Field name="vehicle_number" type="text" v-model="form.vehicle_number" class="form-control"
                                :class="{ 'is-invalid': errors.vehicle_number }" placeholder="Enter Vehicle No" />
                            <div class="invalid-feedback">
                                {{ errors.vehicle_number }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Vehicle Model <span class="text-danger">*</span></label>
                            <Field name="vehicle_model" type="text" v-model="form.vehicle_model" class="form-control"
                                :class="{ 'is-invalid': errors.vehicle_model }" placeholder="Enter Vehicle Model" />
                            <div class="invalid-feedback">
                                {{ errors.vehicle_model }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Made of Year</label>
                            <div class="date-pic">
                                <datepicker v-model="form.made_year" year-picker placeholder="Select Year"
                                    :clearable="true" class="datetimepicker" />
                                <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Registration No <span class="text-danger">*</span></label>
                            <Field name="registration_number" type="text" v-model="form.registration_number"
                                class="form-control" :class="{ 'is-invalid': errors.registration_number }"
                                placeholder="Enter Registration No" />
                            <div class="invalid-feedback">
                                {{ errors.registration_number }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Chassis No</label>
                            <Field name="chassis_number" type="text" v-model="form.chassis_number" class="form-control"
                                placeholder="Enter Chassis No" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Seat Capacity <span class="text-danger">*</span></label>
                            <Field name="seat_capacity" type="text" v-model="form.seat_capacity" class="form-control"
                                :class="{ 'is-invalid': errors.seat_capacity }" placeholder="Enter Seat Capacity" />
                            <div class="invalid-feedback">
                                {{ errors.seat_capacity }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">GPS Tracking ID</label>
                            <Field name="gps_device_id" type="text" v-model="form.gps_device_id" class="form-control"
                                placeholder="Enter GPS Tracking ID" />
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <h4>Driver details</h4>
                </div>
                <div class="mb-3">
                    <label class="form-label">Select Driver <span class="text-danger">*</span></label>
                    <Field name="driver_id" v-slot="{ field }">
                        <vue-select v-bind="field" v-model="form.driver_id" :options="driverOptions"
                            placeholder="Select Driver" :class="{ 'is-invalid': errors.driver_id }" />
                    </Field>
                    <div class="invalid-feedback">
                        {{ errors.driver_id }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Driver License</label>
                            <input type="text" class="form-control"
                                :value="selectedDriver?.attributes?.driver_license || ''"
                                placeholder="Enter Driver License" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Driver Contact No</label>
                            <input type="text" class="form-control" :value="selectedDriver?.attributes?.phone || ''"
                                placeholder="Enter Driver Contact No" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-0">
                            <label class="form-label">Driver Address</label>
                            <input type="text" class="form-control" :value="selectedDriver?.attributes?.address || ''"
                                placeholder="Enter Driver Address" />
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
                    <button type="submit" class="btn btn-primary" :disabled="vehiclesStore.loading">
                        {{ isEdit ? 'Update Vehicle' : 'Add New Vehicle' }}
                    </button>
                </div>
            </Form>
        </template>
    </base-modal>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { Modal } from 'bootstrap';
import VueSelect from 'vue3-select2-component';
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useVehiclesStore } from '@/stores/vehicles';
import { useDriversStore } from '@/stores/drivers';

const props = defineProps({
    isEdit: { type: Boolean, default: false },
    vehicleData: { type: Object, default: () => ({}) },
    modalId: { type: String, default: 'add_vehicle' }
});

const vehiclesStore = useVehiclesStore();
const driversStore = useDriversStore();

const formRef = ref(null);
const form = ref({
    vehicle_number: '',
    vehicle_model: '',
    made_year: '',
    registration_number: '',
    chassis_number: '',
    seat_capacity: '',
    gps_device_id: '',
    driver_id: '',
    status: 'active'
});

const schema = yup.object({
    vehicle_number: yup.string().required('Vehicle number is required'),
    vehicle_model: yup.string().required('Vehicle model is required'),
    registration_number: yup.string().required('Registration number is required'),
    seat_capacity: yup.number().typeError('Seat capacity must be a number').required('Seat capacity is required').min(1, 'Capacity must be at least 1'),
    driver_id: yup.string().required('Driver selection is required'),
    made_year: yup.mixed().test('is-year', 'Must be a 4-digit year', val => {
        if (!val) return true;
        return /^\d{4}$/.test(val.toString());
    }).nullable(),
});

const driverOptions = computed(() => {
    return [
        { id: '', text: 'Select Driver' },
        ...driversStore.drivers.map(d => ({
            id: d.id.toString(),
            text: d.attributes.name
        }))
    ];
});

const selectedDriver = computed(() => {
    if (!form.value.driver_id || form.value.driver_id === '') return null;
    return driversStore.drivers.find(d => d.id == form.value.driver_id);
});

watch(() => props.vehicleData, (newVal) => {
    if (props.isEdit && newVal && Object.keys(newVal).length) {
        form.value = {
            vehicle_number: newVal.vehicle_number || '',
            vehicle_model: newVal.vehicle_model || '',
            made_year: newVal.made_year ? parseInt(newVal.made_year) : '',
            registration_number: newVal.registration_number || '',
            chassis_number: newVal.chassis_number || '',
            seat_capacity: newVal.seat_capacity || '',
            gps_device_id: newVal.gps_device_id || '',
            driver_id: newVal.driver_id ? newVal.driver_id.toString() : '',
            status: newVal.status || 'active'
        };

        // Sync vee-validate form values
        if (formRef.value) {
            formRef.value.setValues({
                ...form.value
            });
        }
    } else {
        resetForm();
    }
}, { immediate: true });

watch(() => form.value.made_year, (newVal) => {
    if (newVal && typeof newVal === 'number') {
        const yearStr = newVal.toString();
        form.value.made_year = yearStr;
        // Sync to vee-validate immediately if formRef exists
        if (formRef.value) {
            formRef.value.setFieldValue('made_year', yearStr);
        }
    }
});

function resetForm() {
    form.value = {
        vehicle_number: '',
        vehicle_model: '',
        made_year: '',
        registration_number: '',
        chassis_number: '',
        seat_capacity: '',
        gps_device_id: '',
        driver_id: '',
        status: 'active'
    };
    if (formRef.value) {
        formRef.value.resetForm();
    }
}

async function submitForm() {
    let success = false;
    const submissionData = { ...form.value };
    if (submissionData.made_year) {
        submissionData.made_year = submissionData.made_year.toString();
    }

    if (props.isEdit) {
        success = await vehiclesStore.update(props.vehicleData.id, submissionData);
    } else {
        success = await vehiclesStore.store(submissionData);
    }

    if (success) {
        const modalElement = document.getElementById(props.modalId);
        if (modalElement) {
            const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
            modal.hide();
        }
        resetForm();
    }
}

onMounted(() => {
    if (driversStore.drivers.length === 0) {
        driversStore.index();
    }
});
</script>
