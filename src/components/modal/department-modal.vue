<template>
  <!-- Add Department -->
  <div class="modal fade" id="add_department">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Department</h4>
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
                  <label class="form-label">Department Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Department Name"
                  />
                </div>
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

          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Department -->

  <!-- Edit Department -->
  <div class="modal fade" id="edit_department">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Department</h4>
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
                  <label class="form-label">Department Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Department Name"
                    value="Admin"
                  />
                </div>
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
  <!-- Edit Department -->

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
      this.$router.push("/hrm/departments-list");
    },
  },
};
</script>
