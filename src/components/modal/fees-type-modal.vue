<template>
  <!-- Add Fees Type -->
  <div class="modal fade" id="add_fees_Type">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Fees Type</h4>
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
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="form-label">Fees Group</label>
                    <a
                      href="javascript:void(0);"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add_new_fees_group"
                      ><span><i class="ti ti-square-rounded-plus-filled"></i></span> Add
                      New</a
                    >
                  </div>
                  <vue-select :options="TuitSel" id="tuitsel" placeholder="Select" />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea class="form-control" rows="4"></textarea>
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
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Add Fees Type</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Fees Type -->

  <!-- Edit Fees Type -->
  <div class="modal fade" id="edit_fees_Type">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Fees Type</h4>
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
                    value=""
                  />
                </div>
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="form-label">Fees Group</label>
                    <a
                      href="javascript:void(0);"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add_new_fees_group"
                      ><span><i class="ti ti-square-rounded-plus-filled"></i></span> Add
                      New</a
                    >
                  </div>
                  <vue-select
                    :options="EditTuitSel"
                    id="edittuitsel"
                    placeholder="Tuition Fees"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Add Comment"
                ></textarea>
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
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Fees Type -->

  <!-- Add New Fees Type -->
  <div class="modal fade" id="add_new_fees_group">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Fees Group</h4>
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
                    value=""
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Add Comment"
                ></textarea>
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
                    id="switch-sm3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Add Fees Type</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add New Fees Type -->

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
              <button type="submit" class="btn btn-danger">Yes, Delete</button>
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
      TuitSel: [
        "Select",
        "Tuiton Fees",
        "Monthly Fees",
        "Monthly Fees",
        "Class 1 General",
      ],
      EditTuitSel: [
        "Select",
        "Tuiton Fees",
        "Monthly Fees",
        "Monthly Fees",
        "Class 1 General",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/fees/fees-type");
    },
  },
};
</script>
