<template>
  <div
    class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
  >
    <h4 class="mb-3">Transport</h4>
    <div class="d-flex align-items-center flex-wrap">
      <div class="input-icon-start mb-3 me-2 position-relative">
        <span class="icon-addon">
          <i class="ti ti-calendar"></i>
        </span>
        <input
          type="text"
          class="form-control date-range bookingrange"
          placeholder="Select"
          value="Academic Year : 2024 / 2025"
          ref="dateRangeInput"
        />
      </div>
      <div class="dropdown mb-3 me-2">
        <a
          href="javascript:void(0);"
          class="btn btn-outline-light bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          ><i class="ti ti-filter me-2"></i>Filter</a
        >
        <div class="dropdown-menu drop-width">
          <form @submit.prevent="submitForm">
            <div class="d-flex align-items-center border-bottom p-3">
              <h4>Filter</h4>
            </div>
            <div class="p-3 border-bottom">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Vehicle Number</label>
                    <vue-select
                      :options="VchiSelec"
                      id="vchiselec"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Model</label>
                    <vue-select :options="ModeSele" id="modesele" placeholder="Select" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <vue-select
                      :options="NamJanSelec"
                      id="namjanselec"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">GPS Device</label>
                    <vue-select :options="GpsSelec" id="gpsselec" placeholder="Select" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Driver</label>
                    <vue-select
                      :options="DrivSelect"
                      id="driveselect"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-0">
                    <label class="form-label">Status</label>
                    <vue-select
                      :options="StatActivSel"
                      id="statactselec"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-0">
                    <label class="form-label">More Filter</label>
                    <vue-select
                      :options="MadeMoreSel"
                      id="mademoresel"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 d-flex align-items-center justify-content-end">
              <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
            </div>
          </form>
        </div>
      </div>

      <div class="dropdown mb-3">
        <a
          href="javascript:void(0);"
          class="btn btn-outline-light bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
          ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
        </a>
        <ul class="dropdown-menu p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"> Ascending </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"> Descending </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">
              Recently Viewed
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">
              Recently Added
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      VchiSelec: ["Select", "8930", "1235", "6465", "7895", "4625"],
      ModeSele: ["Select", "Scania", "Mini Bus", "Kinsmart", "Single deck"],
      NamJanSelec: ["Select", "Janet", "Joann", "Kathleen"],
      GpsSelec: [
        "Select",
        "GPS7899456689",
        "GPS4579454785",
        "GPS1478545214",
        "GPS3254789541",
      ],
      DrivSelect: ["Select", "Thomas", "Michael", "Jessie"],
      StatActivSel: ["Select", "Active", "Inactive"],
      MadeMoreSel: [
        "Select",
        "ID",
        "Vehicle No",
        "Vehicle Model",
        "Made of Year",
        "Registration No",
        "Status",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/transport/transport-vehicle");
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
