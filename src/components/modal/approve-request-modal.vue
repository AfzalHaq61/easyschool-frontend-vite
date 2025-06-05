<template>
  <!-- Leave Request -->
  <div class="modal fade" id="leave_request">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Leave Request</h4>
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
            <div class="student-leave-info">
              <ul>
                <li>
                  <span>Submitted By</span>
                  <h6>James Deckar</h6>
                </li>
                <li>
                  <span>ID / Roll No</span>
                  <h6>9004</h6>
                </li>
                <li>
                  <span>Role</span>
                  <h6>Student</h6>
                </li>
                <li>
                  <span>Leave Type</span>
                  <h6>Medical Leave</h6>
                </li>
                <li>
                  <span>No of Days</span>
                  <h6>2</h6>
                </li>
                <li>
                  <span>Applied On</span>
                  <h6>04 May 2024</h6>
                </li>
                <li>
                  <span>Authoity</span>
                  <h6>Jacquelin</h6>
                </li>
                <li>
                  <span>Leave</span>
                  <h6>05 May 2024 - 07 may 2024</h6>
                </li>
              </ul>
            </div>
            <div class="mb-3 leave-reason">
              <h6 class="mb-1">Reason</h6>
              <span>Headache & fever</span>
            </div>
            <div class="mb-3">
              <label class="form-label">Approval Status</label>
              <div class="d-flex align-items-center check-radio-group">
                <label class="custom-radio">
                  <input type="radio" name="radio" checked="" />
                  <span class="checkmark"></span>
                  Pending
                </label>
                <label class="custom-radio">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                  Approved
                </label>
                <label class="custom-radio">
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                  Disapproved
                </label>
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label">Note</label>
              <textarea
                class="form-control"
                placeholder="Add Comment"
                rows="4"
              ></textarea>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Leave Request -->

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
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/leaves/approve-request");
    },
  },
};
</script>
