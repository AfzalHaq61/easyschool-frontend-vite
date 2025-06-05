<template>
  <!-- Add Class -->
  <div class="modal fade" id="add_time_table">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Time Table</h4>
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
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Class</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select :options="SecASel" id="secasel" placeholder="A" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Subject Group</label>
                  <vue-select :options="GroupSel" id="groupsel" placeholder="Class I" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Period Start Time</label>
                  <vue-select :options="PeriodSel" id="periodsel" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Duration(min)</label>
                  <vue-select :options="SelectDur" id="selectdur" placeholder="Select" />
                </div>
              </div>
            </div>
            <div class="add-more-timetable">
              <ul class="tab-links nav nav-pills" id="pills-tab2" role="tablist">
                <li
                  class="nav-link active"
                  id="pills-monday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-monday"
                  role="tab"
                  aria-controls="pills-monday"
                  aria-selected="true"
                >
                  <a href="javascript:void(0);">Monday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-tuesday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-tuesday"
                  role="tab"
                  aria-controls="pills-tuesday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Tuesday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-wednesday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-wednesday"
                  role="tab"
                  aria-controls="pills-wednesday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Wednesday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-thursday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-thursday"
                  role="tab"
                  aria-controls="pills-thursday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Thursday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-friday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-friday"
                  role="tab"
                  aria-controls="pills-friday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Friday</a>
                </li>
              </ul>
              <div class="tab-content pt-0 dashboard-tab">
                <div
                  class="tab-pane fade show active"
                  id="pills-monday"
                  role="tabpanel"
                  aria-labelledby="pills-monday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select :options="SubjectSelect" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select :options="SelTeach" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select :options="FromSel" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select :options="SelectTime" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeSchedule(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(schedule, index) in schedule"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select
                            :options="SubjectSelect"
                            v-model="schedule.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select
                            :options="SelTeach"
                            v-model="schedule.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select
                            :options="FromSel"
                            v-model="schedule.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select
                              :options="SelectTime"
                              v-model="schedule.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash" @click="removeSchedule(index)"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addSchedule"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-tuesday"
                  role="tabpanel"
                  aria-labelledby="pills-tuesday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select :options="OneSubjectSelect" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select :options="OneSelTeach" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select :options="OneFromSel" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select :options="OneSelectTime" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleOne(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleOne, index) in scheduleOne"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select
                            :options="OneSubjectSelect"
                            v-model="scheduleOne.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select
                            :options="OneSelTeach"
                            v-model="scheduleOne.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select
                            :options="OneFromSel"
                            v-model="scheduleOne.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select
                              :options="OneSelectTime"
                              v-model="scheduleOne.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleOne(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleOne"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-wednesday"
                  role="tabpanel"
                  aria-labelledby="pills-wednesday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select :options="TwoSubjectSelect" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select :options="TwoSelTeach" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select :options="TwoFromSel" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select :options="TwoSelectTime" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleTwo, index) in scheduleTwo"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select
                            :options="TwoSubjectSelect"
                            v-model="scheduleTwo.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select
                            :options="TwoSelTeach"
                            v-model="scheduleTwo.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select
                            :options="TwoFromSel"
                            v-model="scheduleTwo.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select
                              :options="TwoSelectTime"
                              v-model="scheduleTwo.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i
                                class="ti ti-trash"
                                @click="removeScheduleTwo(index)"
                              ></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleTwo"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-thursday"
                  role="tabpanel"
                  aria-labelledby="pills-thursday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select
                            :options="ThreeSubjectSelect"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select :options="ThreeSelTeach" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select :options="ThreeFromSel" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select :options="ThreeSelectTime" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleThree, index) in scheduleThree"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select
                            :options="ThreeSubjectSelect"
                            v-model="scheduleThree.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select
                            :options="ThreeSelTeach"
                            v-model="scheduleThree.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select
                            :options="ThreeFromSel"
                            v-model="scheduleThree.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select
                              :options="ThreeSelectTime"
                              v-model="scheduleThree.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleThree(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleThree"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-friday"
                  role="tabpanel"
                  aria-labelledby="pills-friday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select :options="FourSubjectSelect" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select :options="FourSelTeach" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select :options="FourFromSel" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select :options="FourSelectTime" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleFour, index) in scheduleFour"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue-select
                            :options="FourSubjectSelect"
                            v-model="scheduleFour.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue-select
                            :options="FourSelTeach"
                            v-model="scheduleFour.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue-select
                            :options="FourFromSel"
                            v-model="scheduleFour.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue-select
                              :options="FourSelectTime"
                              v-model="scheduleFour.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleFour(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleFour"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Add Time Table</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Class -->
</template>
<script>
export default {
  data() {
    return {
      schedule: [],
      scheduleOne: [],
      scheduleTwo: [],
      scheduleThree: [],
      scheduleFour: [],
      SecASel: ["A", "B", "C", "D"],
      GroupSel: ["Class I", "Class II", "Class III", "Class IV"],
      PeriodSel: ["Select", "09:00 AM", "09:45 AM", "10:45 AM"],
      SelectTime: ["Select", "09:45", "10:45", "11:30", "12:15"],
      SelectDur: ["Select", "45 Mins", "1 Hour"],
      SubjectSelect: ["Select", "English", "Spanish", "Physics", "Maths"],
      SelTeach: ["Select", "Hellana", "Erickson", "Teresa", "Aaron"],
      FromSel: ["Select", "09:00", "09:45", "10:45", "11:30"],
      OneSelectTime: ["Select", "09:45", "10:45", "11:30", "12:15"],
      OneSelectDur: ["Select", "45 Mins", "1 Hour"],
      OneSubjectSelect: ["Select", "English", "Spanish", "Physics", "Maths"],
      OneSelTeach: ["Select", "Hellana", "Erickson", "Teresa", "Aaron"],
      OneFromSel: ["Select", "09:00", "09:45", "10:45", "11:30"],
      TwoSelectTime: ["Select", "09:45", "10:45", "11:30", "12:15"],
      TwoSelectDur: ["Select", "45 Mins", "1 Hour"],
      TwoSubjectSelect: ["Select", "English", "Spanish", "Physics", "Maths"],
      TwoSelTeach: ["Select", "Hellana", "Erickson", "Teresa", "Aaron"],
      TwoFromSel: ["Select", "09:00", "09:45", "10:45", "11:30"],
      ThreeSelectTime: ["Select", "09:45", "10:45", "11:30", "12:15"],
      ThreeSelectDur: ["Select", "45 Mins", "1 Hour"],
      ThreeSubjectSelect: ["Select", "English", "Spanish", "Physics", "Maths"],
      ThreeSelTeach: ["Select", "Hellana", "Erickson", "Teresa", "Aaron"],
      ThreeFromSel: ["Select", "09:00", "09:45", "10:45", "11:30"],
      FourSelectTime: ["Select", "09:45", "10:45", "11:30", "12:15"],
      FourSelectDur: ["Select", "45 Mins", "1 Hour"],
      FourSubjectSelect: ["Select", "English", "Spanish", "Physics", "Maths"],
      FourSelTeach: ["Select", "Hellana", "Erickson", "Teresa", "Aaron"],
      FourFromSel: ["Select", "09:00", "09:45", "10:45", "11:30"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/peoples/class-time-table");
    },
    addSchedule() {
      this.schedule.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleOne() {
      this.scheduleOne.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleTwo() {
      this.scheduleTwo.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleThree() {
      this.scheduleThree.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleFour() {
      this.scheduleFour.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    removeSchedule(index) {
      this.schedule.splice(index, 1);
    },
    removeScheduleOne(index) {
      this.scheduleOne.splice(index, 1);
    },
    removeScheduleTwo(index) {
      this.scheduleTwo.splice(index, 1);
    },
    removeScheduleThree(index) {
      this.scheduleThree.splice(index, 1);
    },
    removeScheduleFour(index) {
      this.scheduleFour.splice(index, 1);
    },
  },
};
</script>
