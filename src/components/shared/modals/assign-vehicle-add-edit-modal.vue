<template>
    <base-modal :id="modalId" :title="isEdit ? 'Edit Assign Vehicle' : 'Assign New Vehicle'">
        <template #body>
            <Form ref="formRef" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Route <span class="text-danger">*</span></label>
                            <Field name="route_id" v-slot="{ field }">
                                <vue-select v-bind="field" v-model="form.route_id" :options="routeOptions"
                                    placeholder="Select Route" :class="{ 'is-invalid': errors.route_id }" />
                            </Field>
                            <div class="invalid-feedback">
                                {{ errors.route_id }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Pickup Point <span class="text-danger">*</span></label>
                            <Field name="pickup_point_id" v-slot="{ field }">
                                <vue-select v-bind="field" v-model="form.pickup_point_id" :options="pickupPointOptions"
                                    placeholder="Select Pickup Point"
                                    :class="{ 'is-invalid': errors.pickup_point_id }" />
                            </Field>
                            <div class="invalid-feedback">
                                {{ errors.pickup_point_id }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Vehicle <span class="text-danger">*</span></label>
                            <Field name="vehicle_id" v-slot="{ field }">
                                <vue-select v-bind="field" v-model="form.vehicle_id" :options="vehicleOptions"
                                    placeholder="Select Vehicle" :class="{ 'is-invalid': errors.vehicle_id }" />
                            </Field>
                            <div class="invalid-feedback">
                                {{ errors.vehicle_id }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12" v-if="selectedVehicleDriver">
                        <div class="mb-3">
                            <label class="form-label">Driver</label>
                            <input type="text" class="form-control" :value="selectedVehicleDriver" readonly disabled />
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
                    <button type="submit" class="btn btn-primary" :disabled="assignVehiclesStore.loading">
                        {{ isEdit ? 'Update Assignment' : 'Assign Vehicle' }}
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
import { useAssignVehiclesStore } from '@/stores/assign-vehicles';
import axios from 'axios';

const props = defineProps({
    isEdit: { type: Boolean, default: false },
    assignVehicleData: { type: Object, default: () => ({}) },
    modalId: { type: String, default: 'add_assign_vehicle' }
});

const assignVehiclesStore = useAssignVehiclesStore();
const formRef = ref(null);

const form = ref({
    route_id: null,
    pickup_point_id: null,
    vehicle_id: null,
    status: 'active'
});

const routeOptions = ref([]);
const pickupPointOptions = ref([]);
const vehicleOptions = ref([]);
const rawVehicles = ref([]);

const schema = yup.object({
    route_id: yup.number().required('Route is required'),
    pickup_point_id: yup.number().required('Pickup point is required'),
    vehicle_id: yup.number().required('Vehicle is required'),
});

const selectedVehicleDriver = computed(() => {
    if (!form.value.vehicle_id) return null;
    const vehicle = rawVehicles.value.find(v => v.id === parseInt(form.value.vehicle_id) || v.id === form.value.vehicle_id);
    return vehicle ? vehicle.attributes.driver_name : null;
});

const emit = defineEmits(['success']);

watch(() => props.assignVehicleData, (newData) => {
    if (newData && Object.keys(newData).length > 0) {
        const values = {
            route_id: newData.attributes?.route_id || null,
            pickup_point_id: newData.attributes?.pickup_point_id || null,
            vehicle_id: newData.attributes?.vehicle_id || null,
            status: newData.attributes?.status || 'active'
        };
        form.value = { ...values };
        if (formRef.value) {
            formRef.value.setValues(values);
        }
    }
}, { immediate: true, deep: true });

const loadDropdownData = async () => {
    try {
        // Load routes
        const routesResponse = await axios.get('/routes', { params: { per_page: 1000 } });
        routeOptions.value = routesResponse.data.data.map(route => ({
            id: route.id,
            text: route.attributes.name
        }));

        // Load pickup points
        const pickupPointsResponse = await axios.get('/pickup-points', { params: { per_page: 1000 } });
        pickupPointOptions.value = pickupPointsResponse.data.data.map(point => ({
            id: point.id,
            text: point.attributes.name
        }));

        // Load vehicles
        const vehiclesResponse = await axios.get('/vehicles', { params: { per_page: 1000 } });
        rawVehicles.value = vehiclesResponse.data.data;
        vehicleOptions.value = vehiclesResponse.data.data.map(vehicle => ({
            id: vehicle.id,
            text: `${vehicle.attributes.vehicle_number} - ${vehicle.attributes.vehicle_model}`
        }));

    } catch (error) {
        console.error('Error loading dropdown data:', error);
    }
};

const submitForm = async () => {
    const formData = {
        route_id: form.value.route_id,
        pickup_point_id: form.value.pickup_point_id,
        vehicle_id: form.value.vehicle_id,
        status: form.value.status
    };

    let success = false;
    if (props.isEdit) {
        success = await assignVehiclesStore.update(props.assignVehicleData.id, formData);
    } else {
        success = await assignVehiclesStore.store(formData);
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

const resetForm = () => {
    form.value = {
        route_id: null,
        pickup_point_id: null,
        vehicle_id: null,
        status: 'active'
    };
    if (formRef.value) {
        formRef.value.resetForm();
    }
};

onMounted(() => {
    loadDropdownData();

    const modalElement = document.getElementById(props.modalId);
    if (modalElement) {
        modalElement.addEventListener('hidden.bs.modal', resetForm);
    }
});
</script>
