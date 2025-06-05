<template>
  <div
    class="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4 pb-0"
  >
    <h4 class="mb-3">Teachers Grid</h4>
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
            <div class="p-3 pb-0 border-bottom">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <vue-select
                      :options="NameWilliamSel"
                      id="namewilliamsel"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Class</label>
                    <vue-select
                      :options="ClassTecherFilter"
                      id="classtecherfilter"
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
      <div class="d-flex align-items-center bg-white border rounded-2 p-1 mb-3 me-2">
        <router-link to="teacher-list" class="btn btn-icon btn-sm me-1 primary-hover"
          ><i class="ti ti-list-tree"></i
        ></router-link>
        <router-link to="/teachers/teacher-grid" class="btn btn-icon btn-sm primary-hover"
          ><i class="ti ti-grid-dots"></i
        ></router-link>
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
            <a href="javascript:void(0);" class="dropdown-item rounded-1 active">
              Ascending
            </a>
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
      NameWilliamSel: ["Select", "William", "Stacey", "George"],
      ClassTecherFilter: ["Select", "III A", "II(A)", "VI(A)"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/teachers/teacher-grid");
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
