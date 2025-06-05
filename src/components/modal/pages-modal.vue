<template>
  <!-- Add State -->
  <div class="modal fade" id="add_pages">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Add pages</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="col-form-label">Page</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Page Name"
                    />
                  </div>
                  <div class="mb-0">
                    <label class="col-form-label">Page Slug</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Page Slug"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Pages</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add State -->

  <!-- Edit State -->
  <div class="modal fade" id="edit_pages">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Edit pages</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="col-form-label">Page</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Page Name"
                    />
                  </div>
                  <div class="mb-0">
                    <label class="col-form-label">Page Slug</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Page Slug"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit State -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered custom-modal promote-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <form @submit.prevent="submitForm">
            <div class="promote-modal-body text-center">
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
                <button
                  type="submit"
                  class="btn btn-danger"
                  id="toprightToastBtn"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </form>
        </div>
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
      this.$router.push("/content/pages-list");
    },
  },
};
</script>
