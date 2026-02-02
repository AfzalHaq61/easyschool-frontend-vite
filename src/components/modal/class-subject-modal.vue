<template>
  <!-- Add Subject -->
  <subject-add-edit-modal id="add_subject" mode="add" @submitted="storeSubject" />
  <!-- /Add Subject -->

  <!-- Edit Subject -->
  <subject-add-edit-modal id="edit_subject" mode="edit" :subject-data="subjectData" @submitted="updateSubject" />
  <!-- /Edit Subject -->

  <!-- Delete Modal -->
  <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
    message="You want to delete this subject, this can't be undone once you delete." @confirmed="deleteSubject" />
  <!-- /Delete Modal -->
</template>

<script setup>
import { useSubjectsStore } from "@/stores/subjects";
import { useNotificationStore } from "@/stores/notification";
import SubjectAddEditModal from "@/components/shared/modals/subject-add-edit-modal.vue";

const props = defineProps({
  subjectData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(["refresh"]);

const subjectsStore = useSubjectsStore();
const notificationStore = useNotificationStore();

const storeSubject = async (data) => {
  const success = await subjectsStore.store({
    name: data.name,
    code: data.code,
    type: data.type,
    status: data.status,
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Subject added successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to add subject." });
  }
};

const updateSubject = async (data) => {
  const success = await subjectsStore.update(props.subjectData.id, {
    name: data.name,
    code: data.code,
    type: data.type,
    status: data.status
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Subject updated successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to update subject." });
  }
};

const deleteSubject = async () => {
  const success = await subjectsStore.destroy();

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Subject deleted successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to delete subject." });
  }
};
</script>
