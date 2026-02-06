<template>
  <!-- Add Assign Vehicle Modal -->
  <assign-vehicle-add-edit-modal :is-edit="false" modal-id="add_assign_vehicle" @success="handleSuccess" />

  <!-- Edit Assign Vehicle Modal -->
  <assign-vehicle-add-edit-modal :is-edit="true" :assign-vehicle-data="selectedAssignVehicle"
    modal-id="edit_assign_vehicle" @success="handleSuccess" />

  <!-- Delete Modal -->
  <delete-confirm-modal modal-id="delete-modal" @confirmed="deleteAssignVehicle" />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useAssignVehiclesStore } from "@/stores/assign-vehicles";
import { useNotificationStore } from "@/stores/notification";

const props = defineProps({
  selectedAssignVehicle: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["refresh"]);

const assignVehiclesStore = useAssignVehiclesStore();
const notificationStore = useNotificationStore();

const handleSuccess = () => {
  emit("refresh");
};

const deleteAssignVehicle = async () => {
  const success = await assignVehiclesStore.destroy();

  if (success) {
    notificationStore.setNotification({
      status: "success",
      message: "Assignment deleted successfully!",
    });
    emit("refresh");
  } else {
    notificationStore.setNotification({
      status: "error",
      message: "Failed to delete assignment.",
    });
  }
};
</script>
