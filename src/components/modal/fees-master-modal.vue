<template>
  <!-- Add Fees Master -->
  <div class="modal fade" id="add_fees_master">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Add Fees Master</h4>
            <span class="badge bg-soft-info ms-2">2024 - 2025</span>
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
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue-select
                    :options="AdminMaster"
                    id="adminmaster"
                    placholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue-select :options="FeesTuit" id="feeTiti" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Due Date</label>
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
                      <label class="form-label">Amount</label>
                      <input type="text" class="form-control" placeholder="Enter Amout" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Fine Type</label>
                  <div class="d-flex align-items-center check-radio-group">
                    <label class="custom-radio none-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="none"
                        v-model="selectedOption"
                      />
                      <span class="checkmark"></span>
                      None
                    </label>
                    <label class="custom-radio percentage-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="percentage"
                        v-model="selectedOption"
                      />
                      <span class="checkmark"></span>
                      Percentage
                    </label>
                    <label class="custom-radio fixed-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="fixed"
                        v-model="selectedOption"
                      />
                      <span class="checkmark"></span>
                      Fixed
                    </label>
                  </div>
                </div>
                <div
                  class="percentage-field"
                  :class="{ 'percentage-field-show': selectedOption === 'percentage' }"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Percentage</label>
                        <input type="text" class="form-control" placeholder="%" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="fixed-field"
                  :class="{ 'fixed-field-show': selectedOption === 'fixed' }"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-if="selectedOption === 'none'"
                  class="d-flex align-items-center justify-content-between"
                >
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
            <div class="modal-footer">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Add Fees Master
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Fees Master-->

  <!-- Edit Fees Master -->
  <div class="modal fade" id="edit_fees_master">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Edit Fees Master</h4>
            <span class="badge bg-soft-info ms-2">2024 - 2025</span>
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
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue-select
                    :options="EditAdminMaster"
                    id="editadminmaster"
                    placholder="Admission-Fees"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue-select
                    :options="EditFeesTuit"
                    id="editfeeTiti"
                    placeholder="Tuition Fees"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Due Date</label>
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
                      <label class="form-label">Amount</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Amout"
                        value="$500"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Fine Type</label>
                  <div class="d-flex align-items-center check-radio-group">
                    <label class="custom-radio">
                      <input type="radio" name="radio2" checked="" />
                      <span class="checkmark"></span>
                      None
                    </label>
                    <label class="custom-radio percentage-radio">
                      <input type="radio" name="radio2" />
                      <span class="checkmark"></span>
                      Percentage
                    </label>
                    <label class="custom-radio fixed-radio">
                      <input type="radio" name="radio2" />
                      <span class="checkmark"></span>
                      Fixed
                    </label>
                  </div>
                </div>
                <div class="percentage-field">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Percentage</label>
                        <input type="text" class="form-control" placeholder="%" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fixed-field">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>
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
  <!-- Edit Fees Master-->

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
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      selectedOption: "none",
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      AdminMaster: [
        "Admission-Fees",
        "Class 1 Genral",
        "Monthly Fees",
        "Clasa 1 Lump Sum",
      ],
      FeesTuit: ["Tuition Fees", "Monthly Fees", "Admission Fees", "Bus Fees"],
      EditAdminMaster: [
        "Admission-Fees",
        "Class 1 Genral",
        "Monthly Fees",
        "Clasa 1 Lump Sum",
      ],
      EditFeesTuit: ["Tuition Fees", "Monthly Fees", "Admission Fees", "Bus Fees"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/fees/fees-master");
    },
  },
};
</script>
