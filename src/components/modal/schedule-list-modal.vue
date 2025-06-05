<template>
  <!-- Add Schedule -->
  <div class="modal fade" id="add_Schedule">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Schedule</h4>
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
                  <label class="form-label">Type</label>
                  <vue-select :options="TypeClass" id="typeclass" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Start Time </label>
                  <vue-select :options="StartTime" id="starttime" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">End Time </label>
                  <vue-select :options="EndTime" id="endtime" placeholder="Select" />
                </div>
                <div
                  class="modal-satus-toggle d-flex align-items-center justify-content-between"
                >
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
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Schedule</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Schedule -->

  <!-- Edit Schedule -->
  <div class="modal fade" id="edit_Schedule">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Schedule</h4>
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
                  <label class="form-label">Type</label>
                  <vue-select
                    :options="EditTypeClass"
                    id="edittypeclass"
                    placeholder="Class"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Start Time </label>
                  <vue-select
                    :options="EditStartTime"
                    id="editstarttime"
                    placeholder="09:30 AM"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">End Time </label>
                  <vue-select
                    :options="EditEndTime"
                    id="editendtime"
                    placeholder="10:30 AM"
                  />
                </div>
                <div
                  class="modal-satus-toggle d-flex align-items-center justify-content-between"
                >
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="status-toggle modal-status">
                    <input type="checkbox" id="user2" class="check" checked="" />
                    <label for="user2" class="checktoggle"> </label>
                  </div>
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
  <!-- /Edit Schedule -->

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
    return {
      TypeClass: ["Select", "Class"],
      StartTime: ["Select", "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"],
      EndTime: ["Select", "10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM"],
      EditTypeClass: ["Select", "Class"],
      EditStartTime: ["Select", "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"],
      EditEndTime: ["Select", "10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/classes/schedule-classes");
    },
  },
};
</script>
