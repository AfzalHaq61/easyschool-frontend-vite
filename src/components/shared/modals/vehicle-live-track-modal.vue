<template>
    <div class="modal fade" id="live_track">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header align-items-center">
                    <div class="d-flex align-items-center">
                        <h4 class="modal-title">Live Tracking Vehicle</h4>
                        <span class="badge badge-soft-primary ms-2">
                            GPS Tracking ID : {{ vehicleData?.gps_device_id || 'GPS7899456689' }}
                        </span>
                    </div>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>
                <div class="modal-body mb-4">
                    <ul class="book-taker-info live-track-info justify-content-between p-0 d-flex list-unstyled mb-4">
                        <li>
                            <span class="d-block text-muted fs-12">Vehicle No</span>
                            <h6 class="mb-0">{{ vehicleData?.vehicle_number || '8930' }}</h6>
                        </li>
                        <li class="ms-3">
                            <span class="d-block text-muted fs-12">Vehicle Model</span>
                            <h6 class="mb-0">{{ vehicleData?.vehicle_model || 'Scania' }}</h6>
                        </li>
                        <li class="ms-3 table-avatar d-flex align-items-center">
                            <user-avatar :image="driverDetail?.image" size="avatar-lg" />
                            <div class="ms-2 d-flex flex-column">
                                <a href="javascript:void(0);" class="text-dark fw-medium">
                                    {{ driverDetail?.name || vehicleData?.driver_name || 'Thomas' }}
                                </a>
                                <a href="javascript:void(0);" class="fs-12" style="color: #999999;">
                                    {{ driverDetail?.phone || 'Contact Info N/A' }}
                                </a>
                            </div>
                        </li>
                        <li class="ms-3 text-end">
                            <span class="d-block text-muted fs-12">Status</span>
                            <h6 class="mb-0 text-success">Active</h6>
                        </li>
                    </ul>
                    <div class="live-track-map w-100"
                        style="height: 450px; background: #f8f9fa; border-radius: 8px; overflow: hidden; position: relative;">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.6088932774796!2d-117.8132203247921!3d33.64138153931407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcddf599c1986f%3A0x6826f6868b4f8e35!2sHillcrest%2C%20Irvine%2C%20CA%2092603%2C%20USA!5e0!3m2!1sen!2sin!4v1706772657955!5m2!1sen!2sin"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            style="border: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Close</a>
                    <button class="btn btn-primary" @click="refreshLocation">Refresh Location</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDriversStore } from '@/stores/drivers';

const props = defineProps({
    vehicleData: {
        type: Object,
        default: () => ({})
    }
});

const driversStore = useDriversStore();

const driverDetail = computed(() => {
    if (!props.vehicleData?.driver_id) return null;
    const driver = driversStore.drivers.find(d => d.id == props.vehicleData.driver_id);
    return driver?.attributes || null;
});

const refreshLocation = () => {
    // Logic for refreshing location goes here
    console.log("Refreshing location for vehicle:", props.vehicleData?.id);
};
</script>

<style scoped>
.badge-soft-primary {
    background-color: rgba(62, 121, 247, 0.1);
    color: #3e79f7;
}

.table-avatar img {
    border-radius: 50%;
}

.book-taker-info li {
    flex: 1;
}

.live-track-info li:not(:last-child) {
    margin-right: 20px;
}
</style>
