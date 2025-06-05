<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content content-two">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
          <div class="pe-1 mb-2">
            <button
              type="button"
              class="btn btn-outline-light bg-white btn-icon me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Print"
              data-bs-original-title="Print"
            >
              <i class="ti ti-printer"></i>
            </button>
          </div>
          <div class="dropdown me-2 mb-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-light fw-medium d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-file-export me-2"></i>Export
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-pdf me-2"></i>Export as PDF</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-xls me-2"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_message"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Message</a
            >
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="d-flex align-items-center justify-content-end flex-wrap mb-2">
        <div class="form-check me-2 mb-3">
          <input class="form-check-input" type="checkbox" />
          <span class="checkmarks">Mark & Delete All</span>
        </div>
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
          <div class="dropdown mb-3">
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
                <div class="p-3 border-bottom pb-0">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Message to</label>
                        <vue-select
                          :options="MessSelec"
                          id="messselect"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Added Date</label>
                        <vue-select
                          :options="AddeSelec"
                          id="addeselect"
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
        </div>
      </div>

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Classes Preparation</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 24 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Fees Reminder</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 12 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Parents Teacher Meeting</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 10 May 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >New Academic Session For Admission (2024-25)</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 28 Apr 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Staff Meeting</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 23 Apr 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >World Environment Day Program.....!!!</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 21 Apr 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >New Syllabus Instructions</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 11 Mar 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Exam Preparation Notification!</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 18 Mar 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Gandhi Jayanti Programmed</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 16 Feb 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <!-- Notice Board List -->
      <div class="card board-hover mb-3">
        <div class="card-body d-md-flex align-items-center justify-content-between pb-1">
          <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md me-2">
              <input class="form-check-input" type="checkbox" />
            </div>
            <span
              class="bg-soft-primary text-primary avatar avatar-md me-2 br-5 flex-shrink-0"
            >
              <i class="ti ti-notification fs-16"></i>
            </span>
            <div>
              <h6 class="mb-1 fw-semibold">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#view_details"
                  >Republic Day Celebration</a
                >
              </h6>
              <p><i class="ti ti-calendar me-1"></i>Added on : 24 Jan 2024</p>
            </div>
          </div>
          <div class="d-flex align-items-center board-action mb-3">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#edit_message"
              class="text-primary border rounded p-1 badge me-1 primary-btn-hover"
            >
              <i class="ti ti-edit-circle fs-16"></i>
            </a>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="text-danger border rounded p-1 badge danger-btn-hover"
            >
              <i class="ti ti-trash-x fs-16"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Notice Board List -->

      <div class="text-center">
        <a href="javascript:void(0);" class="btn btn-primary"
          ><i class="ti ti-loader-3 me-2"></i>Load More</a
        >
      </div>
    </div>
  </div>
  <notice-modal></notice-modal>
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
      title: "Notice Board",
      text: "Dashboard",
      text1: "Announcement",
      text2: "Notice Board",
      MessSelec: ["Select", "Staff", "Student", "Teacher", "Parent"],
      AddeSelec: ["Select", "15 May 2024", "16 May 2024", "17 may 2024"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/announcements/notice-board");
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
