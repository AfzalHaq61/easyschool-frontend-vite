<template>
    <!-- Add Route -->
    <route-add-edit-modal id="add_route" mode="add" @submitted="storeRoute" />
    <!-- /Add Route -->

    <!-- Edit Route -->
    <route-add-edit-modal id="edit_route" mode="edit" :route-data="routeData" @submitted="updateRoute" />
    <!-- /Edit Route -->

    <!-- Delete Modal -->
    <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
        message="You want to delete this route, this can't be undone once you delete." @confirmed="deleteRoute" />
    <!-- /Delete Modal -->
</template>

<script setup>
import { useRoutesStore } from "@/stores/routes";
import { useNotificationStore } from "@/stores/notification";
import RouteAddEditModal from "@/components/shared/modals/route-add-edit-modal.vue";

const props = defineProps({
    routeData: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(["refresh"]);

const routesStore = useRoutesStore();
const notificationStore = useNotificationStore();

const storeRoute = async (data) => {
    const success = await routesStore.store({
        name: data.name,
        status: data.status,
    });

    if (success) {
        notificationStore.setNotification({ status: "success", message: "Route added successfully!" });
        emit("refresh");
    } else {
        notificationStore.setNotification({ status: "error", message: "Failed to add route." });
    }
};

const updateRoute = async (data) => {
    const success = await routesStore.update(props.routeData.id, {
        name: data.name,
        status: data.status
    });

    if (success) {
        notificationStore.setNotification({ status: "success", message: "Route updated successfully!" });
        emit("refresh");
    } else {
        notificationStore.setNotification({ status: "error", message: "Failed to update route." });
    }
};

const deleteRoute = async () => {
    const success = await routesStore.destroy();

    if (success) {
        notificationStore.setNotification({ status: "success", message: "Route deleted successfully!" });
        emit("refresh");
    } else {
        notificationStore.setNotification({ status: "error", message: "Failed to delete route." });
    }
};
</script>
