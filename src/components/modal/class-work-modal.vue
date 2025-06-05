<template>
  <!-- Add Home Work -->
  <div class="modal fade" id="add_home_work">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Home Work</h4>
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
                  <label class="form-label">Class</label>
                  <input type="text" class="form-control" placeholder="Enter Class" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue-select :options="SecAb" id="secab" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <vue-select :options="PhySubj" id="physubj" placeholder="Select" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Homework Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Homework Date"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Submission Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Submission Date"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <input type="text" class="form-control" placeholder="Placeholders" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <textarea
                    class="form-control"
                    placeholder="Add Comment"
                    rows="4"
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
              Add Homework
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Home Work -->

  <!-- Edit Home Work -->
  <div class="modal fade" id="edit_home_work">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Home Work</h4>
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
                  <label class="form-label">Class</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Class"
                    value="I"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue-select :options="EditSecAb" id="editsecab" placeholder="A" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <vue-select
                        :options="EditPhySubj"
                        id="editphysubj"
                        placeholder="English"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Homework Date</label>
                      <input type="text" class="form-control" placeholder="10 May 2024" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Submission Date</label>
                      <input type="text" class="form-control" placeholder="12 May 2024" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <input type="text" class="form-control" placeholder="Placeholders" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <textarea
                    class="form-control"
                    placeholder="Add Comment"
                    rows="4"
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
  <!-- /Edit Home Work -->

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
    return {
      SecAb: ["Select", "A", "B", "C"],
      PhySubj: ["Select", "English", "Physics", "Chemsitry", "Biology"],
      EditSecAb: ["Select", "A", "B", "C"],
      EditPhySubj: ["Select", "English", "Physics", "Chemsitry", "Biology"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/peoples/class-home-work");
    },
  },
};
</script>
