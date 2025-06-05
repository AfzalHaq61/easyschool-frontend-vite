<template>
  <!-- Add Ban Ip -->
  <div class="modal fade" id="add_ban_ip">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Ban IP Address</h4>
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
            s
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="col-form-label">IP Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter IP Address"
                  />
                </div>
                <div class="mb-0">
                  <label class="col-form-label">Reason</label>
                  <textarea
                    rows="4"
                    class="form-control"
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
              Add IP Address
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Ban Ip -->

  <!-- Edit Ban Ip -->
  <div class="modal fade" id="edit_ban_ip">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Ban IP Address</h4>
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
                  <label class="col-form-label">IP Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter IP Address"
                    value="198.120.16.01"
                  />
                </div>
                <div class="mb-0">
                  <label class="col-form-label">Reason</label>
                  <textarea rows="4" class="form-control" placeholder="Add Comment">
Temporarily block to protect user accounts from internet fraudsters.</textarea
                  >
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
  <!-- /Edit Ban Ip -->

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
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/others-settings/ban-ip-address");
    },
  },
};
</script>
