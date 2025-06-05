<template>
  <!-- Add Class Routine -->
  <div class="modal fade" id="add_class_routine">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-wrapper">
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
                      :options="TeachAdminDash"
                      id="teachadmindash"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Class</label>
                    <vue-select
                      :options="ClassSelecDash"
                      id="classselecdash"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Section</label>
                    <vue-select
                      :options="SecSelecDashboard"
                      id="secselecdashboard"
                      placeholder="Select "
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Day</label>
                    <vue-select
                      :options="DaySelecDashboard"
                      id="dayselecdashboard"
                      placeholder="Select"
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
                      :options="ClassRoomDashboard"
                      id="classroomdashboard"
                      placeholder="Select"
                    />
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between"
                  >
                    <div class="status-title">
                      <h5>Status</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user1" class="check" />
                      <label for="user1" class="checktoggle"> </label>
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
  </div>
  <!-- /Add Class Routine -->

  <!-- Add Event -->
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">New Event</h4>
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
                <div>
                  <label class="form-label">Event For</label>
                  <div class="d-flex align-items-center flex-wrap">
                    <div class="form-check me-3 mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="event"
                        id="all"
                        checked=""
                        @click="setActive('All')"
                      />
                      <label class="form-check-label" for="all"> All </label>
                    </div>
                    <div class="form-check me-3 mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="event"
                        id="students"
                        @click="setActive('student')"
                      />
                      <label class="form-check-label" for="students"> Students </label>
                    </div>
                    <div class="form-check me-3 mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="event"
                        id="staffs"
                        @click="setActive('staffs')"
                      />
                      <label class="form-check-label" for="staffs"> Staffs </label>
                    </div>
                  </div>
                </div>
                <div
                  class="all-content"
                  id="all-student"
                  :class="{ active: isActive === 'student' }"
                >
                  <div class="mb-3">
                    <label class="form-label">Classes</label>
                    <vue-select
                      :options="ClassesDashboardAd"
                      id="classesdashboardad"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sections</label>
                    <vue-select
                      :options="SectionAdminDash"
                      id="sectionadmindash"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div
                  class="all-content"
                  id="all-staffs"
                  :class="{ active: isActive === 'staffs' }"
                >
                  <div class="mb-3">
                    <div class="bg-light-500 p-3 pb-2 rounded">
                      <label class="form-label">Role</label>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Admin
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />Teacher
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Driver
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Accountant
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Librarian
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Receptionist
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">All Teachers</label>
                    <vue-select
                      :options="AddTeacherDashboard"
                      id="addteacherdashboard"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3" :class="{ active: isActive === 'all' }">
                <label class="form-label">Event Title</label>
                <input type="text" class="form-control" placeholder="Enter Title" />
              </div>
              <div class="mb-3">
                <label class="form-label">Event Category</label>
                <vue-select :options="SeleEvent" id="seleevent" placeholder="Select" />
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Date</label>
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
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Date</label>
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
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <div class="date-pic">
                    <a-time-picker
                      class="form-control timepicker"
                      placeholder="09:10 AM"
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
                      placeholder="12:50 PM"
                      use12-hours
                      format="h:mm a"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="bg-light p-3 pb-2 rounded">
                    <div class="mb-3">
                      <label class="form-label">Attachment</label>
                      <p>Upload size of 4MB, Accepted Format PDF</p>
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="btn btn-primary drag-upload-btn mb-2 me-2">
                        <i class="ti ti-file-upload me-1"></i>Upload
                        <input type="file" class="form-control image_sign" multiple="" />
                      </div>
                      <p class="mb-2">Fees_Structure.pdf</p>
                    </div>
                  </div>
                </div>
                <div class="mb-0">
                  <label class="form-label">Message</label>
                  <textarea class="form-control" rows="4">
Meeting with Staffs on the Quality Improvement s and completion of syllabus before the August,  enhance the students health issue</textarea
                  >
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
  <!-- /Add Event -->
</template>
<script>
import { ref } from "vue";
const value = ref();
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      isActive: "",
      value,
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      SeleEvent: ["Select", "Celebration", "Training", "Meeting", "Holidays"],
      AddTeacherDashboard: ["Select", "I", "II", "III"],
      SectionAdminDash: ["All Section", "A", "B"],
      ClassesDashboardAd: ["All Classes", "I", "II", "III", "IV"],
      ClassRoomDashboard: ["Select", "101", "102", "103", "104", "105"],
      DaySelecDashboard: [
        "Select",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      SecSelecDashboard: ["Select", "A", "B", "C"],
      ClassSelecDash: ["Select", "I", "II", "III"],
      TeachAdminDash: ["Select", "Erickson", "Mori", "Joseph", "James"],
    };
  },
  setup() {
    const value = ref();
    return { value };
  },
  methods: {
    submitForm() {
      this.$router.push("/dashboard/");
    },
    setActive(isActive) {
      this.isActive = isActive;
    },
  },
};
</script>
