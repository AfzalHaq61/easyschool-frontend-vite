<template>
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
                      :options="ClasSele"
                      id="classele"
                      placeholder="All Classes"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sections</label>
                    <vue-select
                      :options="SectiSel"
                      id="sectisel"
                      placeholder="All Sections"
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
                      :options="TeacheSelec"
                      id="teacheselec"
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
                <vue-select :options="TrainSel" id="teainsel" placeholder="Select" />
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
                      laceholder="12:50 PM"
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

  <!-- Event Details -->
  <div class="modal fade" id="eventModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border shadow-lg">
        <div class="modal-header justify-content-between">
          <span class="d-inline-flex align-items-center"
            ><i class="ti ti-circle-filled fs-8 me-1 text-info"></i>Meeting</span
          >
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="me-1 fs-18"
              ><i class="ti ti-edit-circle"></i
            ></a>
            <a href="javascript:void(0);" class="me-1 fs-18"
              ><i class="ti ti-trash-x"></i
            ></a>
            <a href="javascript:void(0);" class="fs-18" data-bs-dismiss="modal"
              ><i class="ti ti-x"></i
            ></a>
          </div>
        </div>
        <div class="modal-body pb-0">
          <div class="d-flex align-items-center mb-3">
            <span class="avatar avatar-xl bg-primary-transparent me-3 flex-shrink-0">
              <i class="ti ti-users-group fs-30"></i>
            </span>
            <div>
              <h3 id="eventTitle" class="mb-1"></h3>
              <div class="d-flex align-items-center flex-wrap">
                <p class="me-3 mb-0"><i class="ti ti-calendar me-1"></i>10 July 2024</p>
                <p><i class="ti ti-calendar me-1"></i>09:10AM - 10:50PM</p>
              </div>
            </div>
          </div>
          <div class="bg-light-400 p-3 rounded mb-3">
            <p>
              Meeting with Staffs on the Quality Improvement s and completion of syllabus
              before the August, enhance the students health issue
            </p>
          </div>
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <div class="avatar-list-stacked avatar-group-sm d-flex mb-3">
              <span class="avatar">
                <img src="@/assets/img/teachers/teacher-01.jpg" alt="img" />
              </span>
              <span class="avatar">
                <img src="@/assets/img/teachers/teacher-02.jpg" alt="img" />
              </span>
              <span class="avatar">
                <img src="@/assets/img/teachers/teacher-03.jpg" alt="img" />
              </span>
              <a class="avatar bg-white text-default" href="javascript:void(0);"> +67 </a>
            </div>
            <div class="mb-3">
              <p class="mb-1">Event For</p>
              <h6>All Classes, All Sections</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Event Details -->
</template>
<script>
import { ref } from "vue";
const value = ref();
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      value,
      isActive: "",
      ClasSele: ["All Classes", "I", "II", "III", "IV"],
      SectiSel: ["All Sections", "A", "B"],
      TeacheSelec: ["Select", "I", "II", "III", "IV"],
      TrainSel: ["Select", "Celebration", "Training", "Meeting", "Holidays"],
    };
  },
  methods: {
    setActive(isActive) {
      this.isActive = isActive;
    },
    submitForm() {
      this.$router.push("/announcements/event-list");
    },
  },
  setup() {
    const value = ref();
    return { value };
  },
};
</script>
