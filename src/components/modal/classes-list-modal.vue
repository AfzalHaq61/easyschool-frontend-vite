<template>
  <!-- Add Class -->
  <class-add-edit-modal id="add_class" mode="add" @submitted="storeClass" />
  <!-- /Add Class -->

  <!-- Edit Class -->
  <class-add-edit-modal id="edit_class" mode="edit" :class-data="classData" @submitted="updateClass" />
  <!-- /Edit Class -->

  <!-- Delete Modal -->
  <delete-confirm-modal id="delete-modal" title="Confirm Deletion"
    message="You want to delete this class, this can't be undone once you delete." @confirmed="deleteClass" />
  <!-- /Delete Modal -->

  <!-- View Class -->
  <div class="modal fade" id="view_class">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center modal-pop-head">
            <h4 class="modal-title">Class Details</h4>
            <span :class="classData.statusClass" class="ms-2"><i class="ti ti-circle-filled"></i>{{ classData.status
            }}</span>
          </div>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="class-detail-info">
                <p>Class Name</p>
                <span>{{ classData.Class }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Class -->
</template>

<script setup>
import { useClassesStore } from "@/stores/classes";
import { useNotificationStore } from "@/stores/notification";

const props = defineProps({
  classData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(["refresh"]);

const classesStore = useClassesStore();
const notificationStore = useNotificationStore();

const storeClass = async (data) => {
  const success = await classesStore.store({
    name: data.name,
    section_id: data.section_id,
    no_of_students: data.no_of_students,
    no_of_subjects: data.no_of_subjects,
    status: data.status,
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Class added successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to add class." });
  }
};

const updateClass = async (data) => {
  const success = await classesStore.update(props.classData.id, {
    name: data.name,
    section_id: data.section_id,
    no_of_students: data.no_of_students,
    no_of_subjects: data.no_of_subjects,
    status: data.status
  });

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Class updated successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to update class." });
  }
};

const deleteClass = async () => {
  const success = await classesStore.destroy();

  if (success) {
    notificationStore.setNotification({ status: "success", message: "Class deleted successfully!" });
    emit("refresh");
  } else {
    notificationStore.setNotification({ status: "error", message: "Failed to delete class." });
  }
};
</script>
