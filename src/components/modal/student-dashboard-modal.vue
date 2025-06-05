<template>
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
                        :options="SectStuden"
                        id="sectstuden"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Exam Name</label>
                      <vue-select
                        :options="ExamNameTes"
                        id="examnametes"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <vue-select
                        :options="StartSelec"
                        id="sattsselcet"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <vue-select
                        :options="EndTimeSelec"
                        id="endtimeselec"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Duration(min)</label>
                      <vue-select
                        :options="DurationDahsb"
                        id="durationdash"
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
                    <vue-select :options="ExamDateMay" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <vue-select :options="SubjectSelecSpa" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue-select :options="DashboardRoomNo" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue-select :options="MaxMarkDsah" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue-select :options="MinMarkDashb" placeholder="Select" />
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
                      :options="ExamDateMay"
                      v-model="schedule.examDate"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Teacher</label>
                    <vue-select
                      :options="SubjectSelecSpa"
                      v-model="schedule.subject"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue-select
                      :options="DashboardRoomNo"
                      v-model="schedule.roomNo"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue-select
                      :options="MaxMarkDsah"
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
                        :options="MinMarkDashb"
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
</template>
<script>
export default {
  data() {
    return {
      SectStuden: ["Select", "A", "B", "C"],
      StartSelec: ["Select", "09:30 AM", "10:30 AM", "11:00 AM", "12:30 PM"],
      EndTimeSelec: ["Select", "10:45 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
      DurationDahsb: ["Select", "3 hrs"],
      schedules: [],
      ExamDateMay: ["Select", "13 May 2024", "14 May 2024", "15 May 2024"],
      SubjectSelecSpa: ["Select", "English", "Spanish", "Physics"],
      DashboardRoomNo: ["Select", "101", "102", "103", "104"],
      MaxMarkDsah: ["Select", "100"],
      MinMarkDashb: ["Select", "35"],
      ExamNameTes: [
        "Select",
        "Week Text",
        "Monthly Test",
        "Chapter Wise Test",
        "Unit Test",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/dashboard/student-dashboard");
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
