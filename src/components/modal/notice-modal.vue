<template>
  <!-- Add Messase -->
  <div class="modal fade" id="add_message">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">New Message</h4>
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
                  <label class="form-label">Title</label>
                  <input type="text" class="form-control" placeholder="Enter Title" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Notice Date</label>
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
                  <label class="form-label">Publish On</label>
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
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Message</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Add Comment"
                  ></textarea>
                </div>
                <div class="mb-0">
                  <label class="form-label">Message To</label>
                  <div class="row">
                    <div class="col-md-6">
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Student
                      </label>
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Parent
                      </label>
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Admin
                      </label>
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Teacher
                      </label>
                    </div>
                    <div class="col-md-6">
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Accountant
                      </label>
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Librarian
                      </label>
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Receptionist
                      </label>
                      <label class="checkboxs mb-1">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                        Super Admin
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New Mesaage</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Messase -->

  <!-- Edit Messase -->
  <div class="modal fade" id="edit_message">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Message</h4>
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
                  <label class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Title"
                    value="Fees Reminder"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Notice Date</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdateTwo"
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
                  <label class="form-label">Publish On</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdateThree"
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
                <div class="mb-3">
                  <label class="form-label">Message</label>
                  <textarea class="form-control" rows="4" placeholder="Add Comment">
Please clear the outstanding dues for the school fees on the urgent basis.</textarea
                  >
                </div>
                <div class="mb-0">
                  <label class="form-label">Message To</label>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-check form-check-md mb-1">
                        <input class="form-check-input" type="checkbox" />
                        <span>Student</span>
                      </div>
                      <div class="form-check form-check-md mb-1">
                        <input class="form-check-input" type="checkbox" />
                        <span>Parent</span>
                      </div>
                      <div class="form-check form-check-md mb-1">
                        <input class="form-check-input" type="checkbox" />
                        <span>Admin</span>
                      </div>
                      <div class="form-check form-check-md">
                        <input class="form-check-input" type="checkbox" />
                        <span>Teacher</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-check form-check-md mb-1">
                        <input class="form-check-input" type="checkbox" />
                        <span>Accountant</span>
                      </div>
                      <div class="form-check form-check-md mb-1">
                        <input class="form-check-input" type="checkbox" />
                        <span>Librarian</span>
                      </div>
                      <div class="form-check form-check-md mb-1">
                        <input class="form-check-input" type="checkbox" />
                        <span>Receptionist</span>
                      </div>
                      <div class="form-check form-check-md">
                        <input class="form-check-input" type="checkbox" />
                        <span>Super Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Messase -->

  <!-- View Details -->
  <div class="modal fade" id="view_details">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Fees Reminder</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body pb-0">
          <div class="mb-3">
            <p class="mb-1">Dear parents,</p>
            <p>
              Please clear the outstanding dues for the school fees on the urgent basis.
            </p>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Notice Date</label>
                <p class="d-flex align-items-center">
                  <i class="ti ti-calendar me-1"></i>15 May 2024
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Publish On</label>
                <p class="d-flex align-items-center">
                  <i class="ti ti-calendar me-1"></i>21 May 2024
                </p>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="bg-light p-3 pb-2 rounded">
              <div class="mb-0">
                <label class="form-label">Attachment</label>
                <p class="text-primary">Fees_Structure.pdf</p>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label d-block">Message To</label>
            <span class="badge badge-soft-primary me-2">Student</span>
            <span class="badge badge-soft-primary">Parent</span>
          </div>
          <div class="border-top pt-3">
            <div class="d-flex align-items-center flex-wrap">
              <div class="d-flex align-items-center me-4 mb-3">
                <span class="avatar avatar-sm bg-light me-1"
                  ><i class="ti ti-calendar text-default fs-14"></i></span
                >Added on: 28 Apr 2024
              </div>
              <div class="d-flex align-items-center mb-3">
                <span class="avatar avatar-sm bg-light me-1"
                  ><i class="ti ti-user-edit text-default fs-14"></i></span
                >Added By : Daniel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /View Details -->

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
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/announcements/notice-board");
    },
  },
};
</script>
