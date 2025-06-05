<template>
  <!-- Add Exam -->
  <div class="modal fade" id="add_exam">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Exam</h4>
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
                  <label class="form-label">Exam Name</label>
                  <input type="text" class="form-control" placeholder="Enter Exam Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Exam Date</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdate"
                      placeholder=""
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <vue-select :options="ExamStart" id="examstart" placeholder="Select" />
                </div>
                <div class="mb-0">
                  <label class="form-label">End Time</label>
                  <vue-select :options="ExamEnd" id="examend" placeholder="Select" />
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
              Add Exam
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Exam -->

  <!-- Edit Exam -->
  <div class="modal fade" id="edit_exam">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Exam</h4>
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
                  <label class="form-label">Exam Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Exam Name"
                    value="Week Test"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Exam Date</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdateOne"
                      placeholder=""
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <vue-select
                    :options="EditExamStart"
                    id="editexamstart"
                    placeholder="09:30 AM"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">End Time</label>
                  <vue-select
                    :options="EditExamEnd"
                    id="editexamend"
                    placeholder="10:45 AM"
                  />
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
  <!-- Edit Exam -->

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
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      ExamStart: ["Select", "09:30 AM", "10:30 AM", "11:00 AM", "12:30 PM"],
      ExamEnd: ["Select", "10:45 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
      EditExamStart: ["Select", "09:30 AM", "10:30 AM", "11:00 AM", "12:30 PM"],
      EditExamEnd: ["Select", "10:45 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/examinations/exam-list");
    },
  },
};
</script>
