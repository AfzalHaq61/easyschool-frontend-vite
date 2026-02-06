<template>
    <!-- Add Pickup Point -->
    <pickup-point-add-edit-modal id="add_pickup_point" mode="add" @submitted="storePickupPoint" />
    <!-- /Add Pickup Point -->

    <!-- Edit Pickup Point -->
    <pickup-point-add-edit-modal id="edit_pickup_point" mode="edit" :pickup-point-data="pickupPointData"
        @submitted="updatePickupPoint" />
    <!-- /Edit Pickup Point -->

    <!-- Delete Modal -->
    <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
        message="You want to delete this pickup point, this can't be undone once you delete."
        @confirmed="deletePickupPoint" />
    <!-- /Delete Modal -->
</template>

<script setup>
import { usePickupPointsStore } from "@/stores/pickup-points";
import { useNotificationStore } from "@/stores/notification";
import PickupPointAddEditModal from "@/components/shared/modals/pickup-point-add-edit-modal.vue";

const props = defineProps({
    pickupPointData: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(["refresh"]);

const pickupPointsStore = usePickupPointsStore();
const notificationStore = useNotificationStore();

const storePickupPoint = async (data) => {
    const success = await pickupPointsStore.store({
        name: data.name,
        status: data.status,
    });

    if (success) {
        notificationStore.setNotification({ status: "success", message: "Pickup point added successfully!" });
        emit("refresh");
    } else {
        notificationStore.setNotification({ status: "error", message: "Failed to add pickup point." });
    }
};

const updatePickupPoint = async (data) => {
    const success = await pickupPointsStore.update(props.pickupPointData.id, {
        name: data.name,
        status: data.status
    });

    if (success) {
        notificationStore.setNotification({ status: "success", message: "Pickup point updated successfully!" });
        emit("refresh");
    } else {
        notificationStore.setNotification({ status: "error", message: "Failed to update pickup point." });
    }
};

const deletePickupPoint = async () => {
    const success = await pickupPointsStore.destroy();

    if (success) {
        notificationStore.setNotification({ status: "success", message: "Pickup point deleted successfully!" });
        emit("refresh");
    } else {
        notificationStore.setNotification({ status: "error", message: "Failed to delete pickup point." });
    }
};
</script>
