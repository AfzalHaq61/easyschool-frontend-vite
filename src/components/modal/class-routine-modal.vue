<template>
  <!-- Add Class Routine -->
  <div class="modal fade" id="add_class_routine">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Class Routine</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Teacher</label>
                  <vue-select
                    :options="TeacherEri"
                    id="teachereri"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Class</label>
                  <vue-select :options="ClassRoun" id="classroun" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select
                    :options="SetSection"
                    id="setsection"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Day</label>
                  <vue-select :options="ThurDay" id="thurday" placeholder="Select" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Class Room</label>
                  <vue-select :options="ClassRom" id="clasrom" placeholder="Select" />
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Class Routine
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Class Routine -->

  <!-- Edit Class Routine -->
  <div class="modal fade" id="edit_class_routine">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Class Routine</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Teacher</label>
                  <vue-select
                    :options="EditTeacherEri"
                    id="editteachereri"
                    placeholder="Erickson"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Class</label>
                  <vue-select
                    :options="EditClassRoun"
                    id="editclassroun"
                    placeholder="I"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select
                    :options="EditSetSection"
                    id="editsetsection"
                    placeholder="A"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Day</label>
                  <vue-select
                    :options="EditThurDay"
                    id="editthurday"
                    placeholder="Monday"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Class Room</label>
                  <vue-select
                    :options="EditClassRom"
                    id="editclasrom"
                    placeholder="101"
                  />
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Class Routine -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-body text-center">
            <span class="delete-icon">
              <i class="ti ti-trash-x"></i>
            </span>
            <h4>Confirm Deletion</h4>
            <p>
              You want to delete all the marked items, this cant be undone once you
              delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">
                Yes, Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import { ref } from "vue";
const value = ref();

export default {
  data() {
    return {
      value,
      TeacherEri: ["Select", "Erickson", "Mori", "Joseph", "James"],
      ClassRoun: ["Select", "I", "II", "III", "IV"],
      SetSection: ["Select", "A", "B", "C"],
      ThurDay: ["Select", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      ClassRom: ["Select", "101", "102", "103", "104", "105"],
      EditTeacherEri: ["Select", "Erickson", "Mori", "Joseph", "James"],
      EditClassRoun: ["Select", "I", "II", "III", "IV"],
      EditSetSection: ["Select", "A", "B", "C"],
      EditThurDay: ["Select", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      EditClassRom: ["Select", "101", "102", "103", "104", "105"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/peoples/class-routine");
    },
  },
  setup() {
    const value = ref();
    return { value };
  },
};
</script>
