<template>
  <!-- Add Hostel Rooms -->
  <div class="modal fade" id="add_hostel_rooms">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Hostel Room</h4>
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
                  <label class="form-label">Room No</label>
                  <input type="text" class="form-control" placeholder="Enter Room No" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Hostel Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hostel Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Room Type</label>
                  <vue-select :options="AcBedSel" id="acbedsel" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Bed</label>
                  <vue-select :options="BedNumber" id="bednumber" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Cost per Bed</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Cost per Bed"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Hostel Room</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Hostel Rooms -->

  <!-- Edit Hostel Room -->
  <div class="modal fade" id="edit_hostel_rooms">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Hostel Room</h4>
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
                  <label class="form-label">Room No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Room No"
                    value="A1"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Hostel Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hostel Name"
                    value="Phoenix Residence"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Room Type</label>
                  <vue-select
                    :options="EditAcBedSel"
                    id="editacbedsel"
                    placeholder="One Bed"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Bed</label>
                  <vue-select
                    :options="EditBedNumber"
                    id="editbednumber"
                    placeholder="1"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Cost per Bed</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Cost per Bed"
                    value="$200"
                  />
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
  <!-- Edit Hostel Room -->

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
      AcBedSel: ["Select", "One Bed", "One Bed AC", "Two Bed", "Two Bed AC"],
      BedNumber: ["Select", "1", "2"],
      EditAcBedSel: ["Select", "One Bed", "One Bed AC", "Two Bed", "Two Bed AC"],
      EditBedNumber: ["Select", "1", "2"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/hostel/hostel-room");
    },
  },
};
</script>
