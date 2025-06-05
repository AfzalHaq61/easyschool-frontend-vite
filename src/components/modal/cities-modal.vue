<template>
  <!-- Add Cities -->
  <div class="modal fade" id="add_cities">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add City</h4>
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
                  <label class="form-label">City Name</label>
                  <input type="text" class="form-control" placeholder="Enter City Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">State Name</label>
                  <vue-select :options="CalifoSel" id="califosel" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Country Name</label>
                  <vue-select :options="StatesGer" id="statesger" placeholder="Select" />
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
              Add City
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Cities -->

  <!-- Edit Cities -->
  <div class="modal fade" id="edit_city">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit City</h4>
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
                  <label class="form-label">City Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter State Name"
                    value="Los Angeles"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">State Name</label>
                  <vue-select
                    :options="EditCalifoSel"
                    id="editcalifosel"
                    placeholder="Los Angeles"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Country Name</label>
                  <vue-select
                    :options="EditStatesGer"
                    id="editstatesger"
                    placeholder="United States"
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
  <!-- /Edit Cities -->

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
      CalifoSel: ["Select", "California", "New York", "Texas", "Bavaria"],
      StatesGer: ["Select", "United States", "Germany", "Canada", "Australia"],
      EditCalifoSel: ["Select", "California", "New York", "Texas", "Bavaria"],
      EditStatesGer: ["Select", "United States", "Germany", "Canada", "Australia"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/location/cities-list");
    },
  },
};
</script>
