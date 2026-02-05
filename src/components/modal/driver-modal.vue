<template>
    <!-- Add Driver -->
    <driver-add-edit-modal id="add_driver" mode="add" @submitted="storeDriver" />
    <!-- /Add Driver -->

    <!-- Edit Driver -->
    <driver-add-edit-modal id="edit_driver" mode="edit" :driver-data="driverData" @submitted="updateDriver" />
    <!-- /Edit Driver -->

    <!-- Delete Modal -->
    <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
        message="You want to delete this driver, this can't be undone once you delete." @confirmed="deleteDriver" />
    <!-- /Delete Modal -->
</template>

<script setup>
import { useDriversStore } from "@/stores/drivers";
import { useNotificationStore } from "@/stores/notification";
import DriverAddEditModal from "@/components/shared/modals/driver-add-edit-modal.vue";

const props = defineProps({
    driverData: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(["refresh"]);

const driversStore = useDriversStore();
const notificationStore = useNotificationStore();

const storeDriver = async (data) => {
    const success = await driversStore.store(data);

    if (success) {
        emit("refresh");
    }
};

const updateDriver = async (data) => {
    const success = await driversStore.update(props.driverData.id, data);

    if (success) {
        emit("refresh");
    }
};

const deleteDriver = async () => {
    await driversStore.destroy();
    emit("refresh");
};
</script>
