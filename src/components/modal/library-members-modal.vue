<template>
  <!-- Add Member -->
  <div class="modal fade" id="add_library_members">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Member</h4>
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
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" placeholder="Enter Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Card No</label>
                  <input type="text" class="form-control" placeholder="Enter Card No" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="text" class="form-control" placeholder="Enter Email" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date of Join</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Date of Join"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Member</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Member -->

  <!-- Edit Member -->
  <div class="modal fade" id="edit_library_members">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Member</h4>
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
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                    value="James"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Card No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Card No"
                    value="501"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                    value="james@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date of Join</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Date of Join"
                    value="22 Apr 2024"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                    value="+1 78429 82414"
                  />
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
  <!-- Edit Member -->

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
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/library/library-members");
    },
  },
};
</script>
