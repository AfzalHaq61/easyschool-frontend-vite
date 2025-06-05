<template>
  <!-- Add Driver -->
  <div class="modal fade" id="add_driver">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Driver</h4>
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
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Driving License Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Driving License Number"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input type="text" class="form-control" placeholder="Enter Address" />
                </div>
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
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Driver</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Driver -->

  <!-- Edit Driver -->
  <div class="modal fade" id="edit_driver">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Driver</h4>
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
                    value="Thomas"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                    value="+1 64044 74890"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Driving License Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Driving License Number"
                    value="LC7899456689"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Address"
                    value="2233 Wood Street, Slidell, LA"
                  />
                </div>
              </div>
              <div
                class="modal-satus-toggle d-flex align-items-center justify-content-between"
              >
                <div class="status-title">
                  <h5>Status</h5>
                  <p>Change the Status by toggle</p>
                </div>
                <div class="status-toggle modal-status">
                  <input type="checkbox" id="user2" class="check" checked />
                  <label for="user2" class="checktoggle"> </label>
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
  <!-- Edit Driver -->

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
      this.$router.push("/transport/transport-vehicle-drivers");
    },
  },
};
</script>
