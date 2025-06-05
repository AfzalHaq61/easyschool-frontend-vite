<template>
  <!-- Add Syllabus -->
  <div class="modal fade" id="add_syllabus">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Subject Group</h4>
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
                  <vue-select
                    :options="ClassSylla"
                    id="classsylla"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select
                    :options="SectionSelc"
                    id="sectionselc"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Subject Group</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Subject Group"
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
              Add Subject Group
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Syllabus -->

  <!-- Edit Syllabus -->
  <div class="modal fade" id="edit_syllabus">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Subject Group</h4>
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
                  <vue-select
                    :options="EditClassSylla"
                    id="editclasssylla"
                    placeholder="I"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue-select
                    :options="EditectionSelc"
                    id="editsectionselc"
                    placeholder="A"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Save Changes</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Subject Group"
                    value="I, C English"
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
  <!-- /Edit Syllabus	-->

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
      ClassSylla: ["Select", "I", "II", "III"],
      SectionSelc: ["Select", "A", "B", "C"],
      EditClassSylla: ["Select", "I", "II", "III"],
      EditectionSelc: ["Select", "A", "B", "C"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/peoples/class-syllabus");
    },
  },
};
</script>
