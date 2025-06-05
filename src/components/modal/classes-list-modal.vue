<template>
  <!-- Add Class -->
  <div class="modal fade" id="add_class">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Class</h4>
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
                  <label class="form-label">Class Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Class Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select :options="SecClass" id="secclass" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Students</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter no of Students"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Subjects</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter no of Subjects"
                  />
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
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Class -->

  <!-- Edit Class -->
  <div class="modal fade" id="edit_class">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Class</h4>
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
                  <label class="form-label">Class Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Class Name"
                    value="I"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select :options="EditSecClass" id="editsecclass" placeholder="A" />
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Students</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter no of Students"
                    value="30"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Subjects</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter no of Subjects"
                    value="03"
                  />
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
  <!-- /Edit Class -->

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

  <!-- View Classes -->
  <div class="modal fade" id="view_class">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center modal-pop-head">
            <h4 class="modal-title">Class Details</h4>
            <span class="badge badge-soft-success ms-2"
              ><i class="ti ti-circle-filled"></i>Active</span
            >
          </div>
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
              <div class="col-md-6">
                <div class="class-detail-info">
                  <p>Class Name</p>
                  <span>III</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="class-detail-info">
                  <p>Section</p>
                  <span>A</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="class-detail-info">
                  <p>No of Subjects</p>
                  <span>05</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="class-detail-info">
                  <p>No of Students</p>
                  <span>25</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /View Classes -->
</template>
<script>
export default {
  data() {
    return {
      SecClass: ["Select", "A", "B", "C", "D"],
      EditSecClass: ["Select", "A", "B", "C", "D"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/classes/classes-list");
    },
  },
};
</script>
