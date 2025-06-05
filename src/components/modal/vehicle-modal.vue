<template>
  <!-- Add New Vehicle -->
  <div class="modal fade" id="add_vehicle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Vehicle</h4>
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
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Vehicle No"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle Model</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Vehicle Model"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Made of Year</label>
                      <div class="date-pic">
                        <date-picker
                          v-model="startdate"
                          placeholder=""
                          class="datetimepicker form-control"
                          :editable="true"
                          :clearable="false"
                          :input-format="dateFormat"
                        />
                        <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Registration No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Registration No"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Chassis No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Chassis No"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Seat Capacity</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Seat Capacity"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">GPS Tracking ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter GPS Tracking ID"
                  />
                </div>
                <hr />
                <div class="mb-3">
                  <h4>Driver details</h4>
                </div>
                <div class="mb-3">
                  <label class="form-label">Select Driver</label>
                  <vue-select :options="DriveThos" id="drivethos" placeholder="Select" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Driver License</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Driver License"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Driver Contact No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Driver Contact No"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-0">
                <label class="form-label">Driver Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Driver Address"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New Vehicle</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add New Vehicle -->

  <!-- Edit New Vehicle -->
  <div class="modal fade" id="edit_vehicle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header align-items-center">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Edit Vehicle</h4>
            <span class="badge badge-soft-primary ms-2">ID : BB0482</span>
          </div>
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
          <div class="modal-card">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Vehicle No"
                        value="8930"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle Model</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Vehicle Model"
                        value="Scania"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Made of Year</label>
                      <div class="date-pic">
                        <date-picker
                          v-model="startdateOne"
                          placeholder=""
                          class="datetimepicker form-control"
                          :editable="true"
                          :clearable="false"
                          :input-format="dateFormat"
                        />
                        <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Registration No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Registration No"
                        value="US1A3545"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Chassis No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Chassis No"
                        value="32546665456"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Seat Capacity</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Seat Capacity"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">GPS Tracking ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter GPS Tracking ID"
                    value="GPS7899456689"
                  />
                </div>
                <hr />
                <div class="mb-3">
                  <h4>Driver details</h4>
                </div>
                <div class="mb-3">
                  <label class="form-label">Select Driver</label>
                  <vue-select
                    :options="EditDriveThos"
                    id="editdrivethos"
                    placeholder="Thomas"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Driver License</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Driver License"
                        value="LC7899456689"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Driver Contact No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Driver Contact No"
                        value="+1 64044 74890"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-0">
                <label class="form-label">Driver Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Driver Address"
                  value="2233 Wood Street, Slidell, LA"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New Vehicle</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit New Vehicle -->

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

  <!-- Live Track -->
  <div class="modal fade" id="live_track">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header align-items-center">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Live Tracking Vehicle</h4>
            <span class="badge badge-soft-primary ms-2"
              >GPS Tracking ID : GPS7899456689</span
            >
          </div>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body mb-4">
          <ul class="book-taker-info live-track-info justify-content-between">
            <li>
              <span>Vehicle No</span>
              <h6>8930</h6>
            </li>
            <li>
              <span>Vehicle Model</span>
              <h6>Scania</h6>
            </li>
            <li>
              <span>Driver</span>
              <h6>Thomas</h6>
            </li>
            <li>
              <span>Driver Contact No</span>
              <h6>+1 45644 54784</h6>
            </li>
          </ul>
          <div class="live-track-map w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.6088932774796!2d-117.8132203247921!3d33.64138153931407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcddf599c1986f%3A0x6826f6868b4f8e35!2sHillcrest%2C%20Irvine%2C%20CA%2092603%2C%20USA!5e0!3m2!1sen!2sin!4v1706772657955!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
          <router-link to="/transport/transport-vehicle" class="btn btn-primary"
            >Reset to Live Location</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Live Track -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      DriveThos: ["Select", "Thomas", "Mary", "Arthur"],
      EditDriveThos: ["Select", "Thomas", "Mary", "Arthur"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/transport/transport-vehicle");
    },
  },
};
</script>
