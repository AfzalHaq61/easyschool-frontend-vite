<template>
  <!-- Add Grade -->
  <div class="modal fade" id="add_grade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Grade</h4>
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
                  <label class="form-label">Grade</label>
                  <input type="text" class="form-control" placeholder="Enter Grade" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks From(%)</label>
                  <vue-select
                    :options="MarkSelect"
                    id="markselect"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks Upto(%)</label>
                  <vue-select :options="MarkUpSel" id="markupsel" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Grade Points</label>
                  <vue-select :options="GradeP" id="gradep" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="StatSele" id="statselec" placeholder="Select" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Add Comment"
                  ></textarea>
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
              Add Grade
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Grade -->

  <!-- Edit Grade -->
  <div class="modal fade" id="edit_grade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Grade</h4>
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
                  <label class="form-label">Grade</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Grade"
                    value="O"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks From(%)</label>
                  <vue-select
                    :options="EditMarkSelect"
                    id="editmarkselect"
                    placeholder="90"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks Upto(%)</label>
                  <vue-select
                    :options="EditMarkUpSel"
                    id="editmarkupsel"
                    placeholder="100"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Grade Points</label>
                  <vue-select :options="EditGradeP" id="editgradep" placeholder="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select
                    :options="EditStatSele"
                    id="editstatselec"
                    placeholder="Active"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Add Comment"
                  ></textarea>
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
  <!-- Edit Grade -->

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
      MarkSelect: ["Select", "90"],
      MarkUpSel: ["Select", "100"],
      GradeP: ["Select", "0", "1", "2", "3", "4", "5", "6", "7"],
      StatSele: ["Select", "Active", "Inactive"],
      EditMarkSelect: ["Select", "90"],
      EditMarkUpSel: ["Select", "100"],
      EditGradeP: ["Select", "0", "1", "2", "3", "4", "5", "6", "7"],
      EditStatSele: ["Select", "Active", "Inactive"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/examinations/grade-list");
    },
  },
};
</script>
