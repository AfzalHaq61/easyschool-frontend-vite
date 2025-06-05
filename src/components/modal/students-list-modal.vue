<template>
  <!-- Login Details -->
  <div class="modal fade" id="login_detail">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Login Details</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="student-detail-info">
            <span class="student-img"
              ><img src="@/assets/img/students/student-01.jpg" alt="Img"
            /></span>
            <div class="name-info">
              <h6>Janet <span>III, A</span></h6>
            </div>
          </div>
          <div class="table-responsive custom-table no-datatable_length">
            <table class="table datanew">
              <thead class="thead-light">
                <tr>
                  <th>User Type</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Parent</td>
                  <td>parent53</td>
                  <td>parent@53</td>
                </tr>
                <tr>
                  <td>Student</td>
                  <td>student20</td>
                  <td>stdt@53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Login Details -->

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

  <!-- Add Fees Collect -->
  <div class="modal fade" id="add_fees_collect">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Collect Fees</h4>
            <span class="badge badge-sm bg-primary ms-2">AD124556</span>
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
            <div class="bg-light-300 p-3 pb-0 rounded mb-4">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <router-link
                      to="/students/student-details"
                      class="avatar avatar-md me-2"
                    >
                      <img src="@/assets/img/students/student-01.jpg" alt="img" />
                    </router-link>
                    <router-link to="/students/student-details" class="d-flex flex-column"
                      ><span class="text-dark">Janet</span>III, A</router-link
                    >
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="fs-12 mb-1">Total Outstanding</span>
                    <p class="text-dark">2000</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="fs-12 mb-1">Last Date</span>
                    <p class="text-dark">25 May 2024</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="badge badge-soft-danger"
                      ><i class="ti ti-circle-filled me-2"></i>Unpaid</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue-select
                    :options="InstallGrid"
                    id="installgrid"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue-select :options="FeesGrid" id="feesgrid" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Amount</label>
                  <input type="text" class="form-control" placeholder="Enter Amout" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Collection Date</label>
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
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Payment Type</label>
                  <vue-select
                    :options="PaymentGrid"
                    id="paymentgrid"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Payment Reference No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Payment Reference No"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div
                  class="modal-satus-toggle d-flex align-items-center justify-content-between mb-3"
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
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label">Notes</label>
                  <textarea
                    rows="4"
                    class="form-control"
                    placeholder="Add Notes"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Pay Fees</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Fees Collect -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      PaymentGrid: ["Select", "Paytm", "Cash On Delivery"],
      FeesGrid: ["Select", "Tuition Fees", "Monthly", "Admission Fees", "Bus Fees"],
      InstallGrid: [
        "Select",
        "Class 1 General",
        "Monthly Fees",
        "Admission-Fees",
        "Class 1-I Installment",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-list");
    },
  },
};
</script>
