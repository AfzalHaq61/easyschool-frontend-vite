<template>
  <!-- Add Section -->
  <section-add-edit-modal id="add_class_section" mode="add" @submitted="storeSection" />
  <!-- /Add Section -->

  <!-- Edit Section -->
  <section-add-edit-modal id="edit_class_section" mode="edit" :section-data="sectionData" @submitted="updateSection" />
  <!-- /Edit Section -->

  <!-- Delete Modal -->
  <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
    message="You want to delete this section, this can't be undone once you delete." @confirmed="deleteSection" />
  <!-- /Delete Modal -->
</template>

<script setup>
import { useSectionsStore } from "@/stores/sections";
import { useNotificationStore } from "@/stores/notification";

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(["refresh"]);

const sectionsStore = useSectionsStore();
const notificationStore = useNotificationStore();

const storeSection = async (data) => {
  const success = await sectionsStore.store({
    name: data.name,
    status: data.status,
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Section added successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to add section." });
  }
};

const updateSection = async (data) => {
  const success = await sectionsStore.update(props.sectionData.id, {
    name: data.name,
    status: data.status
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Section updated successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to update section." });
  }
};

const deleteSection = async () => {
  const success = await sectionsStore.destroy();

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Section deleted successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to delete section." });
  }
};
</script>
