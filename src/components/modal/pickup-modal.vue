<template>
  <!-- Add Pickup -->
  <div class="modal fade" id="add_pickup">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Pickup Point</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Pickup Point</label>
                  <input type="text" class="form-control" placeholder="Enter Pickup Point" />
                </div>
              </div>
              <div class="modal-satus-toggle d-flex align-items-center justify-content-between">
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
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Pickup Point</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Pickup -->

  <!-- Edit Pickup -->
  <div class="modal fade" id="edit_pickup">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Pickup Point</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Pickup Point</label>
                  <input type="text" class="form-control" placeholder="Enter Pickup Point"
                    value="2603 Wood Duck Drive Marquette, MI" />
                </div>
              </div>
              <div class="modal-satus-toggle d-flex align-items-center justify-content-between">
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
  <!-- Edit Pickup -->

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
              <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
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
      this.$router.push("/transport/pickup-points");
    },
  },
};
</script>
