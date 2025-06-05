<template>
  <!-- Add Custom Field -->
  <div class="modal fade" id="add_custom_field">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Custom Field</h4>
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
                  <label class="form-label">Choose Fields For</label>
                  <vue-select :options="ExpeSel" id="expesel" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Label</label>
                  <input type="text" class="form-control" placeholder="Enter Label" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Type</label>
                  <input type="text" class="form-control" placeholder="Enter Type" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Default Value</label>
                  <input type="text" class="form-control" placeholder="Enter Value" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Required</label>
                  <input type="text" class="form-control" />
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
              Add Field
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Custom Field -->

  <!-- Edit Custom Field -->
  <div class="modal fade" id="edit_custom_field">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Custom Field</h4>
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
                  <label class="form-label">Choose Fields For</label>
                  <vue-select
                    :options="EditExpeSel"
                    id="editexpesel"
                    placeholder="Expense"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Label</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Label"
                    value="Text"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Type</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Type"
                    value="Text"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Default Value</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Value"
                    value="Text"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Required</label>
                  <input type="text" class="form-control" value="Text" />
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
  <!-- /Edit Custom Field -->

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
                class="btn btn-light me-2"
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
      ExpeSel: ["Select", "Expense", "Inventory"],
      EditExpeSel: ["Select", "Expense", "Inventory"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/app-settings/custom-fields");
    },
  },
};
</script>
