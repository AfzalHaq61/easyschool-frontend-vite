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
                <div class="mb-4">
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
                <div class="mb-4">
                  <label class="form-label">Leave Type</label>
                  <vue-select
                    :options="LeaveModalSel"
                    id="leavemodalsel"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label">Leave From date</label>
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
                <div class="mb-4">
                  <label class="form-label">Leave to Date</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdateThree"
                      placeholder=""
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                  </div>
                </div>
                <div class="mb-4">
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
                <div class="mb-4">
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
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply Leave</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Apply Leave -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
      LeaveModalSel: [
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
      this.$router.push("/hrm/staff-leaves");
    },
  },
};
</script>
