<template>
  <!-- Add Room -->
  <room-add-edit-modal id="add_class_room" mode="add" @submitted="storeRoom" />
  <!-- /Add Room -->

  <!-- Edit Room -->
  <room-add-edit-modal id="edit_class_room" mode="edit" :room-data="roomData" @submitted="updateRoom" />
  <!-- /Edit Room -->

  <!-- Delete Modal -->
  <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
    message="You want to delete this room, this can't be undone once you delete." @confirmed="deleteRoom" />
  <!-- /Delete Modal -->
</template>

<script setup>
import { useRoomsStore } from "@/stores/rooms";
import { useNotificationStore } from "@/stores/notification";
import RoomAddEditModal from "@/components/shared/modals/room-add-edit-modal.vue";

const props = defineProps({
  roomData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(["refresh"]);

const roomsStore = useRoomsStore();
const notificationStore = useNotificationStore();

const storeRoom = async (data) => {
  const success = await roomsStore.store({
    name: data.name,
    capacity: data.capacity,
    status: data.status,
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Room added successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to add room." });
  }
};

const updateRoom = async (data) => {
  const success = await roomsStore.update(props.roomData.id, {
    name: data.name,
    capacity: data.capacity,
    status: data.status
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Room updated successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to update room." });
  }
};

const deleteRoom = async () => {
  const success = await roomsStore.destroy();

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Room deleted successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to delete room." });
  }
};
</script>
