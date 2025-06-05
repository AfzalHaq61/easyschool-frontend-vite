<template>
  <div class="row">
    <!-- Leave Status -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Leave Status</h4>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-calendar me-2"></i>This Month
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  This Month
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  This Year
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                <i class="ti ti-brand-socket-io"></i>
              </div>
              <div>
                <h6 class="mb-1">Emergency Leave</h6>
                <p>Date : 15 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-skyblue d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span
            >
          </div>
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                <i class="ti ti-medical-cross"></i>
              </div>
              <div>
                <h6 class="mb-1">Medical Leave</h6>
                <p>Date : 15 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-success d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
            >
          </div>
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                <i class="ti ti-medical-cross"></i>
              </div>
              <div>
                <h6 class="mb-1">Medical Leave</h6>
                <p>Date : 16 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-danger d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Declined</span
            >
          </div>
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-0"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                <i class="ti ti-brand-socket-io"></i>
              </div>
              <div>
                <h6 class="mb-1">Fever</h6>
                <p>Date : 16 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-success d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- /Leave Status -->

    <!-- Exam Result -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Exam Result</h4>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-calendar me-2"></i>1st Quarter
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  1st Quarter
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  2nd Quarter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="d-flex align-items-center flex-wrap">
            <span class="badge badge-soft-primary badge-md me-1 mb-3">Mat : 100 </span>
            <span class="badge badge-soft-success badge-md me-1 mb-3">Phy: 92</span>
            <span class="badge badge-soft-warning badge-md me-1 mb-3">Che : 90</span>
            <span class="badge badge-soft-danger badge-md mb-3">Eng : 80</span>
          </div>
          <div id="exam-result-chart">
            <apexchart
              type="bar"
              height="310"
              :options="examResultCharts.ExamResult"
              :series="examResultCharts.series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- /Exam Result -->

    <!-- Fees Reminder -->
    <div class="col-xxl-4 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-titile">Fees Reminder</h4>
          <router-link to="/fees/fees-assign" class="link-primary fw-medium"
            >View All</router-link
          >
        </div>
        <div class="card-body py-1">
          <div class="d-flex align-items-center justify-content-between py-3">
            <div class="d-flex align-items-center overflow-hidden me-2">
              <span
                class="bg-info-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0"
              >
                <i class="ti ti-bus-stop fs-16"></i>
              </span>
              <div class="overflow-hidden">
                <h6 class="text-truncate mb-1">Transport Fees</h6>
                <p>$2500</p>
              </div>
            </div>
            <div class="text-end">
              <h6 class="mb-1">Last Date</h6>
              <p>25 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3">
            <div class="d-flex align-items-center overflow-hidden me-2">
              <span
                class="bg-success-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0"
              >
                <i class="ti ti-books fs-16"></i>
              </span>
              <div class="overflow-hidden">
                <h6 class="text-truncate mb-1">Book Fees</h6>
                <p>$2500</p>
              </div>
            </div>
            <div class="text-end">
              <h6 class="mb-1">Last Date</h6>
              <p>25 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3">
            <div class="d-flex align-items-center overflow-hidden me-2">
              <span
                class="bg-info-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0"
              >
                <i class="ti ti-report-money fs-16"></i>
              </span>
              <div class="overflow-hidden">
                <h6 class="text-truncate mb-1">Exam Fees</h6>
                <p>$2500</p>
              </div>
            </div>
            <div class="text-end">
              <h6 class="mb-1">Last Date</h6>
              <p>25 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3">
            <div class="d-flex align-items-center overflow-hidden me-2">
              <span
                class="bg-skyblue-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0"
              >
                <i class="ti ti-meat fs-16"></i>
              </span>
              <div class="overflow-hidden">
                <h6 class="text-truncate mb-1">
                  Mess Fees
                  <span class="d-inline-flex align-items-center badge badge-soft-danger"
                    ><i class="ti ti-circle-filled me-1 fs-5"></i>Due</span
                  >
                </h6>
                <p class="text-danger">$2500 + $150</p>
              </div>
            </div>
            <div class="text-end">
              <h6 class="mb-1">Last Date</h6>
              <p>27 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3">
            <div class="d-flex align-items-center overflow-hidden me-2">
              <span
                class="bg-danger-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0"
              >
                <i class="ti ti-report-money fs-16"></i>
              </span>
              <div class="overflow-hidden">
                <h6 class="text-truncate mb-1">Hostel</h6>
                <p>$2500</p>
              </div>
            </div>
            <div class="text-end">
              <h6 class="mb-1">Last Date</h6>
              <p>25 May 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fees Reminder -->
  </div>
</template>
<script>
import { examResultCharts } from "./data";
export default {
  data() {
    return {
      examResultCharts: examResultCharts,
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
};
</script>
