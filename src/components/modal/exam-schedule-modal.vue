<template>
  <!-- Add Exam Schedule -->
  <div class="modal fade" id="add_exam_schedule">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Exam Schedule</h4>
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
                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Class</label>
                      <input type="text" class="form-control" placeholder="Enter Class" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue-select
                        :options="Selection"
                        id="selection"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Exam Name</label>
                      <vue-select :options="WeeSel" id="weesel" placeholder="Week text" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <vue-select
                        :options="StartSelect"
                        id="startselect"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <vue-select
                        :options="EndTimeSelect"
                        id="endtimeselect"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Duration(min)</label>
                      <vue-select
                        :options="SelectDura"
                        id="selectdura"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="exam-schedule-add">
              <div
                class="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3"
              >
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Exam Date</label>
                    <vue-select
                      :options="SeleExams"
                      id="seleexams"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <vue-select
                      :options="SubjSelect"
                      id="subjectselects"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue-select
                      :options="ExaScheRoom"
                      id="exscheroom"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue-select
                      :options="MarksSelec"
                      id="marksselec"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue-select
                        :options="MinMarkSelec"
                        id="minmarkselec"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3 ms-2">
                      <a
                        href="javascript:void(0);"
                        class="delete-schedule-table"
                        @click="removeSchedule(index)"
                        ><i class="ti ti-trash"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-for="(schedule, index) in schedules"
                :key="index"
                class="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3"
              >
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Exam Date</label>
                    <vue-select
                      :options="EditSeleExams"
                      v-model="schedule.examDate"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Teacher</label>
                    <vue-select
                      :options="EditSubjSelect"
                      v-model="schedule.subject"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue-select
                      :options="EditExaScheRoom"
                      v-model="schedule.roomNo"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue-select
                      :options="EditMarksSelec"
                      v-model="schedule.maxMarks"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue-select
                        :options="EditMinMarkSelec"
                        v-model="schedule.minMarks"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3 ms-2">
                      <a
                        href="javascript:void(0);"
                        @click="removeSchedule(index)"
                        class="delete-schedule-table"
                      >
                        <i class="ti ti-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="javascript:void(0);"
                class="btn btn-primary add-new-schedule"
                @click="addSchedule"
                ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
              >
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Exam Schedule</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Exam Schedule -->

  <!-- Edit Exam Schedule -->
  <div class="modal fade" id="edit_exam_schedule">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Exam Schedule</h4>
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
                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Class</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Class"
                        value="I"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue-select
                        :options="EditSelection"
                        id="editselection"
                        placeholder="A"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Exam Name</label>
                      <vue-select
                        :options="EditWeeSel"
                        id="editweesel"
                        placeholder="Week Test"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <vue-select
                        :options="EditStartSelect"
                        id="editstartselect"
                        placeholder="09:30 AM"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <vue-select
                        :options="EditEndTimeSelect"
                        id="editendtimeselect"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Duration(min)</label>
                      <vue-select
                        :options="EditSelectDura"
                        id="editselectdura"
                        placeholder="3 hrs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="exam-schedule-add">
              <div
                class="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3"
              >
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Exam Date</label>
                    <vue-select :options="EditSeleExams" placeholder="13 May 2024" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <vue-select :options="EditSubjSelect" placeholder="English" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue-select :options="EditExaScheRoom" placeholder="101" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue-select :options="EditMarksSelec" placeholder="100" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue-select :options="EditMinMarkSelec" placeholder="35" />
                    </div>
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
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Exam Schedule -->

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
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      Selection: ["Select", "A", "B", "C"],
      WeeSel: ["Select", "Week Test", "Chapter Wise Test", "Unit Test"],
      EndTimeSelect: ["Select", "10:45 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
      StartSelect: ["Select", "09:30 AM", "10:30", "11:00 AM", "12:30 PM"],
      SelectDura: ["Select", "3 hrs"],
      SeleExams: ["Select", "13 May 2024", "14 May 2024", "15 May 2024"],
      SubjSelect: ["Select", "English", "Spanish", "Physics"],
      ExaScheRoom: ["Select", "101", "102", "103"],
      MarksSelec: ["Select", "100"],
      MinMarkSelec: ["Select", "35"],
      EditSelection: ["Select", "A", "B", "C"],
      EditWeeSel: ["Select", "Week Test", "Chapter Wise Test", "Unit Test"],
      EditEndTimeSelect: ["Select", "10:45 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
      EditStartSelect: ["Select", "09:30 AM", "10:30", "11:00 AM", "12:30 PM"],
      EditSelectDura: ["Select", "3 hrs"],
      EditSeleExams: ["Select", "13 May 2024", "14 May 2024", "15 May 2024"],
      EditSubjSelect: ["Select", "English", "Spanish", "Physics"],
      EditExaScheRoom: ["Select", "101", "102", "103"],
      EditMarksSelec: ["Select", "100"],
      EditMinMarkSelec: ["Select", "35"],
      schedules: [],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/examinations/exam-schedule");
    },
    addSchedule() {
      this.schedules.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
        minMarks: "",
      });
    },
    removeSchedule(index) {
      this.schedules.splice(index, 1);
    },
  },
};
</script>
