<template>
  <!-- Add Hostel -->
  <div class="modal fade" id="add_hostel">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Hostel</h4>
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
                  <label class="form-label">Hostel Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hostel Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Hostel Type</label>
                  <vue-select
                    :options="HostelType"
                    id="hosteltype"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Intake</label>
                  <input type="text" class="form-control" placeholder="Enter Intake" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input type="text" class="form-control" placeholder="Enter Address" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea placeholder="text" class="form-control" rows="4"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Hostel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Hostel -->

  <!-- Edit Hostel -->
  <div class="modal fade" id="edit_hostel">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Hostel</h4>
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
                  <label class="form-label">Hostel Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hostel Name"
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label">Hostel Type</label>
                  <vue-select
                    :options="EditHostelType"
                    id="edithosteltype"
                    placeholder="Boys"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Intake</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Intake"
                    value="150"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Address"
                    value="25 Crowfield Road, Phoenix	1"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea placeholder="text" class="form-control" rows="4">
Rising to nurture young minds</textarea
                  >
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
  <!-- Edit Hostel -->

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
      HostelType: ["Select", "Boys", "Girls"],
      EditHostelType: ["Select", "Boys", "Girls"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/hostel/hostel-list");
    },
  },
};
</script>
