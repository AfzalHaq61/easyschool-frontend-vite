<template>
  <div class="row">
    <div class="col-xxl-8 col-xl-12">
      <div class="row">
        <div class="col-xxl-7 col-xl-8 d-flex">
          <div class="card bg-dark position-relative flex-fill">
            <div class="card-body pb-1">
              <div class="d-sm-flex align-items-center justify-content-between row-gap-3">
                <div class="d-flex align-items-center overflow-hidden mb-3">
                  <div
                    class="avatar avatar-xxl rounded flex-shrink-0 border border-2 border-white me-3"
                  >
                    <img src="@/assets/img/teachers/teacher-05.jpg" alt="Img" />
                  </div>
                  <div class="overflow-hidden">
                    <span class="badge bg-transparent-primary text-primary mb-1"
                      >#T594651</span
                    >
                    <h3 class="text-white mb-1 text-truncate">Henriques Morgan</h3>
                    <div class="d-flex align-items-center flex-wrap text-light row-gap-2">
                      <span class="me-2">Classes : I-A, V-B</span>
                      <span class="d-flex align-items-center"
                        ><i class="ti ti-circle-filled text-warning fs-7 me-1"></i
                        >Physics</span
                      >
                    </div>
                  </div>
                </div>
                <router-link
                  to="/teachers/edit-teacher"
                  class="btn btn-primary flex-shrink-0 mb-3"
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
        </div>
        <div class="col-xxl-5 col-xl-4 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="row align-items-center justify-content-between">
                <div class="col-sm-5">
                  <div id="plan_chart" class="mb-3 mb-sm-0 text-center text-sm-start">
                    <apexchart
                      type="donut"
                      height="90px"
                      :options="planCharts.PlanTeach"
                      :series="planCharts.series"
                    ></apexchart>
                  </div>
                </div>
                <div class="col-sm-7">
                  <div class="text-center text-sm-start">
                    <h4 class="mb-3">Syllabus</h4>
                    <p class="mb-2">
                      <i class="ti ti-circle-filled text-success me-1"></i>Completed :
                      <span class="fw-semibold">95%</span>
                    </p>
                    <p>
                      <i class="ti ti-circle-filled text-danger me-1"></i>Pending :
                      <span class="fw-semibold">5%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Today's Class -->
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <h4 class="me-2">Today's Class</h4>
            <div class="owl-nav slide-nav2 text-end nav-control"></div>
          </div>
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
        <teacher-classes></teacher-classes>
      </div>
      <!-- /Today's Class -->

      <div class="row">
        <!-- Attendance -->
        <div class="col-xxl-6 col-xl-6 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Attendance</h4>
              <div class="card-dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle p-2"
                  data-bs-toggle="dropdown"
                >
                  <i class="ti ti-calendar-due"></i>This Week
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
            <div class="card-body pb-0">
              <div class="bg-light-300 rounde border p-3 mb-3">
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <h6 class="mb-2">Last 7 Days</h6>
                  <p class="mb-2">14 May 2024 - 21 May 2024</p>
                </div>
                <div class="d-flex align-items-center gap-1 flex-wrap">
                  <a href="javascript:void(0);" class="badge badge-lg bg-success">M</a>
                  <a href="javascript:void(0);" class="badge badge-lg bg-success">T</a>
                  <a href="javascript:void(0);" class="badge badge-lg bg-success">W</a>
                  <a href="javascript:void(0);" class="badge badge-lg bg-success">T</a>
                  <a href="javascript:void(0);" class="badge badge-lg bg-danger">F</a>
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
              <p class="mb-3">
                <i class="ti ti-calendar-heart text-primary me-2"></i>No of total working
                days <span class="fw-medium text-dark"> 28 Days</span>
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
                  <div class="col text-center border-end">
                    <p class="mb-1">Halfday</p>
                    <h5>0</h5>
                  </div>
                  <div class="col text-center">
                    <p class="mb-1">Late</p>
                    <h5>1</h5>
                  </div>
                </div>
              </div>
              <div class="attendance-chart text-center">
                <div id="attendance_chart">
                  <apexchart
                    type="donut"
                    height="255"
                    :options="attendChartsOne.AttendOne"
                    :series="attendChartsOne.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Attendance -->

        <!-- Best Performers -->
        <div class="col-xxl-6 col-xl-6 col-md-6 d-flex flex-column">
          <div class="card">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Best Performers</h4>
              <router-link to="/students/student-list" class="link-primary fw-medium"
                >View All</router-link
              >
            </div>
            <div class="card-body pb-1">
              <div class="d-sm-flex align-items-center mb-1">
                <div class="w-50 mb-2">
                  <h6>Class IV, C</h6>
                </div>
                <div class="class-progress w-100 ms-sm-3 mb-3">
                  <div
                    class="progress justify-content-between"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-primary" style="width: 80%">
                      <div class="avatar-list-stacked avatar-group-xs d-flex">
                        <span class="avatar avatar-rounded">
                          <img
                            class="border border-white"
                            src="@/assets/img/students/student-01.jpg"
                            alt="img"
                          />
                        </span>
                        <span class="avatar avatar-rounded">
                          <img
                            class="border border-white"
                            src="@/assets/img/students/student-02.jpg"
                            alt="img"
                          />
                        </span>
                        <span class="avatar avatar-rounded">
                          <img src="@/assets/img/students/student-03.jpg" alt="img" />
                        </span>
                      </div>
                    </div>
                    <span class="badge">80%</span>
                  </div>
                </div>
              </div>
              <div class="d-sm-flex align-items-center">
                <div class="w-50 mb-2">
                  <h6>Class III, B</h6>
                </div>
                <div class="class-progress w-100 ms-sm-3 mb-3">
                  <div
                    class="progress justify-content-between"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-warning" style="width: 54%">
                      <div class="avatar-list-stacked avatar-group-xs d-flex">
                        <span class="avatar avatar-rounded">
                          <img
                            class="border border-white"
                            src="@/assets/img/profiles/avatar-27.jpg"
                            alt="img"
                          />
                        </span>
                        <span class="avatar avatar-rounded">
                          <img
                            class="border border-white"
                            src="@/assets/img/students/student-05.jpg"
                            alt="img"
                          />
                        </span>
                        <span class="avatar avatar-rounded">
                          <img src="@/assets/img/students/student-06.jpg" alt="img" />
                        </span>
                      </div>
                    </div>
                    <span class="badge">54%</span>
                  </div>
                </div>
              </div>
              <div class="d-sm-flex align-items-center mb-1">
                <div class="w-50 mb-2">
                  <h6>Class V, A</h6>
                </div>
                <div class="class-progress w-100 ms-sm-3 mb-3">
                  <div
                    class="progress justify-content-between"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-skyblue" style="width: 76%">
                      <div class="avatar-list-stacked avatar-group-xs d-flex">
                        <span class="avatar avatar-rounded">
                          <img
                            class="border border-white"
                            src="@/assets/img/profiles/avatar-27.jpg"
                            alt="img"
                          />
                        </span>
                        <span class="avatar avatar-rounded">
                          <img
                            class="border border-white"
                            src="@/assets/img/students/student-05.jpg"
                            alt="img"
                          />
                        </span>
                        <span class="avatar avatar-rounded">
                          <img src="@/assets/img/students/student-06.jpg" alt="img" />
                        </span>
                      </div>
                    </div>
                    <span class="badge">7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Student Progress</h4>
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
                class="d-flex align-items-center justify-content-between p-3 mb-2 border br-5"
              >
                <div class="d-flex align-items-center overflow-hidden me-2">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-lg flex-shrink-0 br-6 me-2"
                  >
                    <img src="@/assets/img/students/student-09.jpg" alt="student" />
                  </a>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">
                      <a href="javascript:void(0);">Susan Boswell</a>
                    </h6>
                    <p>III, B</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <img src="@/assets/img/icons/medal.svg" alt="icon" />
                  <span class="badge badge-success ms-2">98%</span>
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between p-3 mb-2 border br-5"
              >
                <div class="d-flex align-items-center overflow-hidden me-2">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-lg flex-shrink-0 br-6 me-2"
                  >
                    <img src="@/assets/img/students/student-12.jpg" alt="student" />
                  </a>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">
                      <a href="javascript:void(0);">Richard Mayes</a>
                    </h6>
                    <p>V, A</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <img src="@/assets/img/icons/medal-2.svg" alt="icon" />
                  <span class="badge badge-success ms-2">98%</span>
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between p-3 mb-0 border rounded"
              >
                <div class="d-flex align-items-center overflow-hidden me-2">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-lg flex-shrink-0 br-6 me-2"
                  >
                    <img src="@/assets/img/students/student-11.jpg" alt="student" />
                  </a>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">
                      <a href="javascript:void(0);">Veronica Randle</a>
                    </h6>
                    <p>V, B</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <span class="badge bg-info">78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Best Performers -->
      </div>
    </div>

    <!-- Schedules -->
    <div class="col-xxl-4 col-xl-12 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Schedules</h4>
          <a
            href="javascript:void(0);"
            class="link-primary fw-medium me-2"
            data-bs-toggle="modal"
            data-bs-target="#add_event"
            ><i class="ti ti-square-plus me-1"></i>Add New</a
          >
        </div>
        <div class="card-body">
          <div class="datepic mb-4">
            <v-calendar is-expanded :attributes="attributes" />
          </div>
          <h4 class="mb-3">Upcoming Events</h4>

          <div class="event-scroll">
            <!-- Event Item -->
            <div class="border-start border-danger border-3 shadow-sm p-3 mb-3">
              <div class="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span class="avatar p-1 me-2 bg-danger-transparent flex-shrink-0">
                  <i class="ti ti-vacuum-cleaner fs-24"></i>
                </span>
                <div class="flex-fill">
                  <h6 class="mb-1">Vacation Meeting</h6>
                  <p class="d-flex align-items-center">
                    <i class="ti ti-calendar me-1"></i>07 July 2024 - 07 July 2024
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0"><i class="ti ti-clock me-1"></i>09:10 AM - 10:50 PM</p>
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-11.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-13.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <!-- /Event Item -->

            <!-- Event Item -->
            <div class="border-start border-skyblue border-3 shadow-sm p-3 mb-3">
              <div class="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span class="avatar p-1 me-2 bg-teal-transparent flex-shrink-0">
                  <i class="ti ti-user-edit text-info fs-20"></i>
                </span>
                <div class="flex-fill">
                  <h6 class="mb-1">Parents, Teacher Meet</h6>
                  <p class="d-flex align-items-center">
                    <i class="ti ti-calendar me-1"></i>15 July 2024
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0"><i class="ti ti-clock me-1"></i>09:10AM - 10:50PM</p>
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-01.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-07.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-02.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <!-- /Event Item -->

            <!-- Event Item -->
            <div class="border-start border-info border-3 shadow-sm p-3 mb-3">
              <div class="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span class="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                  <i class="ti ti-users-group fs-20"></i>
                </span>
                <div class="flex-fill">
                  <h6 class="mb-1">Staff Meeting</h6>
                  <p class="d-flex align-items-center">
                    <i class="ti ti-calendar me-1"></i>10 July 2024
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0"><i class="ti ti-clock me-1"></i>09:10AM - 10:50PM</p>
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-05.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-06.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-07.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <!-- /Event Item -->

            <!-- Event Item -->
            <div class="border-start border-secondary border-3 shadow-sm p-3 mb-0">
              <div class="d-flex align-items-center mb-3 pb-3 border-bottom">
                <span class="avatar p-1 me-2 bg-secondary-transparent flex-shrink-0">
                  <i class="ti ti-campfire fs-24"></i>
                </span>
                <div class="flex-fill">
                  <h6 class="mb-1">Admission Camp</h6>
                  <p class="d-flex align-items-center">
                    <i class="ti ti-calendar me-1"></i>12 July 2024
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0"><i class="ti ti-clock me-1"></i>09:10 AM - 10:50 PM</p>
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-11.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                  <span class="avatar border-0">
                    <img
                      src="@/assets/img/parents/parent-13.jpg"
                      class="rounded-circle"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
            <!-- /Event Item -->
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
import { planCharts, attendChartsOne } from "./data";
export default {
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      planCharts: planCharts,
      attendChartsOne: attendChartsOne,
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
