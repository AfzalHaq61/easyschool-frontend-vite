<template>
  <!-- Apply Leave -->
  <div class="modal fade" id="apply_leave">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Apply Leave</h4>
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
                  <label class="form-label">Leave Date</label>
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
                <div class="mb-3">
                  <label class="form-label">Leave Type</label>
                  <vue-select :options="LeaveSel" id="leavesel" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Leave From date</label>
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
                <div class="mb-3">
                  <label class="form-label">Leave to Date</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdateTwo"
                      placeholder=""
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Leave Days</label>
                  <div class="d-flex align-items-center check-radio-group">
                    <label class="custom-radio">
                      <input type="radio" name="radio" checked="" />
                      <span class="checkmark"></span>
                      Full day
                    </label>
                    <label class="custom-radio">
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                      First Half
                    </label>
                    <label class="custom-radio">
                      <input type="radio" name="radio" />
                      <span class="checkmark"></span>
                      Second Half
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">No of Days</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Reason</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply Leave</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Apply Leave -->

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
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      dateFormat: "dd-MM-yyyy",
      LeaveSel: [
        "Select",
        "Medical Leave",
        "Casual Leave",
        "Special Leave",
        "Maternity Leave",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/teachers/teacher-leaves");
    },
  },
};
</script>
