<template>
  <div class="row">
    <div class="col-xxl-8 d-flex">
      <div class="row flex-fill">
        <!-- Profile -->
        <div class="col-xl-6 d-flex">
          <div class="flex-fill">
            <div class="card bg-dark position-relative">
              <div class="card-body">
                <div class="d-flex align-items-center row-gap-3 mb-3">
                  <div class="avatar avatar-xxl rounded flex-shrink-0 me-3">
                    <img src="@/assets/img/students/student-13.jpg" alt="Img" />
                  </div>
                  <div class="d-block">
                    <span class="badge bg-transparent-primary text-primary mb-1"
                      >#ST1234546</span
                    >
                    <h3 class="text-truncate text-white mb-1">Angelo Riana</h3>
                    <div
                      class="d-flex align-items-center flex-wrap row-gap-2 text-gray-2"
                    >
                      <span class="border-end me-2 pe-2">Class : III, C</span>
                      <span>Roll No : 36545</span>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between profile-footer flex-wrap row-gap-3 pt-4"
                >
                  <div class="d-flex align-items-center">
                    <h6 class="text-white">1st Quarterly</h6>
                    <span class="badge bg-success d-inline-flex align-items-center ms-2"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Pass</span
                    >
                  </div>
                  <router-link to="/students/edit-student" class="btn btn-primary"
                    >Edit Profile</router-link
                  >
                </div>
                <div class="student-card-bg">
                  <img src="@/assets/img/bg/circle-shape.png" alt="Bg" />
                  <img src="@/assets/img/bg/shape-02.png" alt="Bg" />
                  <img src="@/assets/img/bg/shape-04.png" alt="Bg" />
                  <img src="@/assets/img/bg/blue-polygon.png" alt="Bg" />
                </div>
              </div>
            </div>
            <div class="card flex-fill">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h4 class="card-title">Today’s Class</h4>
                <div class="d-inline-flex align-items-center class-datepick">
                  <span class="icon"><i class="ti ti-chevron-left me-2"></i></span>
                  <date-picker
                    v-model="startdate"
                    placeholder=""
                    class="datetimepicker form-control"
                    :editable="true"
                    :clearable="false"
                    :input-format="dateFormat"
                  />
                  <span class="icon"><i class="ti ti-chevron-right"></i></span>
                </div>
              </div>
              <div class="card-body">
                <div class="card mb-3">
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1"
                  >
                    <div class="d-flex align-items-center flex-wrap mb-2">
                      <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                        <img src="@/assets/img/parents/parent-07.jpg" alt="Profile" />
                      </span>
                      <div>
                        <h6 class="mb-1 text-decoration-line-through">English</h6>
                        <span><i class="ti ti-clock me-2"></i>09:00 - 09:45 AM</span>
                      </div>
                    </div>
                    <span class="badge badge-soft-success shadow-none mb-2"
                      ><i class="ti ti-circle-filled fs-8 me-1"></i>Completed</span
                    >
                  </div>
                </div>
                <div class="card mb-3">
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1"
                  >
                    <div class="d-flex align-items-center flex-wrap mb-2">
                      <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                        <img src="@/assets/img/parents/parent-02.jpg" alt="Profile" />
                      </span>
                      <div>
                        <h6 class="mb-1 text-decoration-line-through">Chemistry</h6>
                        <span><i class="ti ti-clock me-2"></i>10:45 - 11:30 AM</span>
                      </div>
                    </div>
                    <span class="badge badge-soft-success shadow-none mb-2"
                      ><i class="ti ti-circle-filled fs-8 me-1"></i>Completed</span
                    >
                  </div>
                </div>
                <div class="card mb-0">
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1"
                  >
                    <div class="d-flex align-items-center flex-wrap mb-2">
                      <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                        <img src="@/assets/img/profiles/avatar-17.jpg" alt="Profile" />
                      </span>
                      <div>
                        <h6 class="mb-1">Physics</h6>
                        <span><i class="ti ti-clock me-2"></i>11:30 - 12:15 AM</span>
                      </div>
                    </div>
                    <span class="badge badge-soft-warning shadow-none mb-2"
                      ><i class="ti ti-circle-filled fs-8 me-1"></i>Inprogress</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Profile -->

        <!-- Attendance -->
        <div class="col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Attendance</h4>
              <div class="card-dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle p-2"
                  data-bs-toggle="dropdown"
                >
                  <span><i class="ti ti-calendar-due"></i></span>
                  This Week
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <ul>
                    <li>
                      <a href="javascript:void(0);">This Week</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Last Week</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Last Month</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="attendance-chart">
                <p class="mb-3">
                  <i class="ti ti-calendar-heart text-primary me-2"></i>No of total
                  working days <span class="fw-medium text-dark"> 28 Days</span>
                </p>
                <div class="border rounded p-3">
                  <div class="row">
                    <div class="col text-center border-end">
                      <p class="mb-1">Present</p>
                      <h5>25</h5>
                    </div>
                    <div class="col text-center border-end">
                      <p class="mb-1">Absent</p>
                      <h5>2</h5>
                    </div>
                    <div class="col text-center">
                      <p class="mb-1">Halfday</p>
                      <h5>0</h5>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div id="attendance_chart">
                    <apexchart
                      type="donut"
                      height="255"
                      :options="attendCharts.Attend"
                      :series="attendCharts.series"
                    ></apexchart>
                  </div>
                </div>
                <div class="bg-light-300 rounded border p-3 mb-0">
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap mb-1"
                  >
                    <h6 class="mb-2">Last 7 Days</h6>
                    <p class="fs-12 mb-2">14 May 2024 - 21 May 2024</p>
                  </div>
                  <div class="d-flex align-items-center rounded gap-1 flex-wrap">
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-success text-white"
                      >M</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-success text-white"
                      >T</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-success text-white"
                      >W</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-success text-white"
                      >T</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-danger text-white"
                      >F</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-white border text-default"
                      >S</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="badge badge-lg bg-white border text-gray-1"
                      >S</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Attendance -->

        <!-- Fees -->
        <div class="col-xl-12 d-flex">
          <div class="row flex-fill">
            <div class="col-sm-6 col-xl-3 d-flex">
              <router-link
                to="/students/student-fees"
                class="card border-0 border-bottom border-primary border-2 flex-fill animate-card"
              >
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-md rounded bg-primary me-2"
                      ><i class="ti ti-report-money fs-16"></i
                    ></span>
                    <h6>Pay Fees</h6>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-sm-6 col-xl-3 d-flex">
              <router-link
                to="/students/student-result"
                class="card border-0 border-bottom border-success flex-fill animate-card"
              >
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-md rounded bg-success me-2"
                      ><i class="ti ti-hexagonal-prism-plus fs-16"></i
                    ></span>
                    <h6>Exam Result</h6>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-sm-6 col-xl-3 d-flex">
              <router-link
                to="/students/student-time-table"
                class="card border-0 border-bottom border-warning flex-fill animate-card"
              >
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-md rounded bg-warning me-2"
                      ><i class="ti ti-calendar fs-16"></i
                    ></span>
                    <h6>Calendar</h6>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-sm-6 col-xl-3 d-flex">
              <router-link
                to="/students/student-leaves"
                class="card border-0 border-bottom border-dark border-2 flex-fill animate-card"
              >
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-md rounded bg-dark me-2"
                      ><i class="ti ti-calendar-share fs-16"></i
                    ></span>
                    <h6>Attendance</h6>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- /Fees -->
      </div>
    </div>

    <!-- Schedules -->
    <div class="col-xxl-4 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Schedules</h4>
          <a
            href="javascript:void(0);"
            class="link-primary fw-medium me-2"
            data-bs-toggle="modal"
            data-bs-target="#add_exam_schedule"
            ><i class="ti ti-square-plus me-1"></i>Add New</a
          >
        </div>
        <div class="card-body pb-0">
          <div class="datepic mb-2">
            <v-calendar is-expanded :attributes="attributes" />
          </div>
          <h5 class="mb-3">Exams</h5>
          <div class="p-3 pb-0 mb-3 border rounded">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-3">1st Quarterly</h5>
              <span class="badge badge-soft-danger d-inline-flex align-items-center mb-3"
                ><i class="ti ti-clock me-1"></i>19 Days More</span
              >
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="mb-3">
                <h6 class="mb-1">Mathematics</h6>
                <p><i class="ti ti-clock me-1"></i>01:30 - 02:15 PM</p>
              </div>
              <div class="mb-3 text-end">
                <p class="mb-1"><i class="ti ti-calendar-bolt me-1"></i>06 May 2024</p>
                <p class="text-primary">Room No : 15</p>
              </div>
            </div>
          </div>
          <div class="p-3 pb-0 mb-3 border rounded">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-3">2nd Quarterly</h5>
              <span class="badge badge-soft-danger d-inline-flex align-items-center mb-3"
                ><i class="ti ti-clock me-1"></i>20 Days More</span
              >
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="mb-3">
                <h6 class="mb-1">Physics</h6>
                <p><i class="ti ti-clock me-1"></i>01:30 - 02:15 PM</p>
              </div>
              <div class="mb-3 text-end">
                <p class="mb-1"><i class="ti ti-calendar-bolt me-1"></i>07 May 2024</p>
                <p class="text-primary">Room No : 15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Schedules -->
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
import { attendCharts } from "./data";
export default {
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      attendCharts: attendCharts,
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
