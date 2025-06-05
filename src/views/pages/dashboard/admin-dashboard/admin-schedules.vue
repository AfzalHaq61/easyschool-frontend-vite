<template>
  <!-- Schedules -->
  <div class="col-xxl-4 col-xl-6 col-md-12 d-flex">
    <div class="card flex-fill">
      <div class="card-header d-flex align-items-center justify-content-between">
        <div>
          <h4 class="card-title">Schedules</h4>
        </div>
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
        <h5 class="mb-3">Upcoming Events</h5>
        <div class="event-wrapper event-scroll">
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
                <i class="ti ti-user-edit fs-20"></i>
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
        </div>
      </div>
    </div>
  </div>
  <!-- /Schedules -->

  <div class="col-xxl-4 col-xl-6 col-md-12 d-flex flex-column">
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h4 class="card-title">Attendance</h4>
        <div class="dropdown">
          <a
            href="javascript:void(0);"
            class="bg-white dropdown-toggle"
            data-bs-toggle="dropdown"
            ><i class="ti ti-calendar-due me-1"></i>Today
          </a>
          <ul class="dropdown-menu mt-2 p-3">
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">
                This Week
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">
                Last Week
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
        <div class="list-tab mb-4">
          <ul class="nav">
            <li>
              <a href="javascript:void(0);" class="active" data-bs-toggle="tab" data-bs-target="#students"
                >Students</a
              >
            </li>
            <li>
              <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#teachers">Teachers</a>
            </li>
            <li>
              <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#staff">Staff</a>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade active show" id="students">
            <div class="row gx-3">
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>28</h5>
                    <p class="fs-12">Emergency</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>01</h5>
                    <p class="fs-12">Absent</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>01</h5>
                    <p class="fs-12">Late</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div id="student-chart" class="mb-4">
                <apexchart
                  type="donut"
                  height="260"
                  :options="studentChart.sline"
                  :series="studentChart.series"
                >
                </apexchart>
              </div>
              <router-link to="/attendance/student-attendance" class="btn btn-light"
                ><i class="ti ti-calendar-share me-1"></i>View All
              </router-link>
            </div>
          </div>
          <div class="tab-pane fade" id="teachers">
            <div class="row gx-3">
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>30</h5>
                    <p class="fs-12">Emergency</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>03</h5>
                    <p class="fs-12">Absent</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>03</h5>
                    <p class="fs-12">Late</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div id="teacher-chart" class="mb-4">
                <apexchart
                  type="donut"
                  height="260"
                  :options="teacherChart.sline"
                  :series="teacherChart.series"
                >
                </apexchart>
              </div>
              <router-link to="/attendance/teacher-attendance" class="btn btn-light"
                ><i class="ti ti-calendar-share me-1"></i>View All</router-link
              >
            </div>
          </div>
          <div class="tab-pane fade" id="staff">
            <div class="row gx-3">
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>45</h5>
                    <p class="fs-12">Emergency</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>01</h5>
                    <p class="fs-12">Absent</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card bg-light-300 shadow-none border-0">
                  <div class="card-body p-3 text-center">
                    <h5>10</h5>
                    <p class="fs-12">Late</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div id="staff-chart" class="mb-4">
                <apexchart
                  type="donut"
                  height="260"
                  :options="staffChart.sline"
                  :series="staffChart.series"
                >
                </apexchart>
              </div>
              <router-link to="/attendance/staff-attendance" class="btn btn-light"
                ><i class="ti ti-calendar-share me-1"></i>View All</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row flex-fill">
      <!-- Best Performer -->
      <div class="col-sm-6 d-flex flex-column">
        <div
          class="bg-success-800 p-3 br-5 text-center flex-fill mb-4 pb-0 owl-height bg-01"
        >
          <admin-best-performer></admin-best-performer>
        </div>
      </div>
      <!-- /Best Performer -->

      <!-- Star Students -->
      <div class="col-sm-6 d-flex flex-column">
        <div class="bg-info p-3 br-5 text-center flex-fill mb-4 pb-0 owl-height bg-02">
          <admin-star-students></admin-star-students>
        </div>
      </div>
      <!-- /Star Students -->
    </div>
  </div>

  <div class="col-xxl-4 col-md-12 d-flex flex-column">
    <!-- Quick Links -->
    <admin-quicklinks></admin-quicklinks>
    <!-- /Quick Links -->

    <!-- Class Routine -->
    <div class="card flex-fill">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h4 class="card-title">Class Routine</h4>
        <a
          href="javascript:void(0);"
          class="link-primary fw-medium"
          data-bs-toggle="modal"
          data-bs-target="#add_class_routine"
          ><i class="ti ti-square-plus me-1"></i>Add New</a
        >
      </div>
      <div class="card-body">
        <div class="d-flex align-items-center rounded border p-3 mb-3">
          <span class="avatar avatar-md flex-shrink-0 border rounded me-2">
            <img
              src="@/assets/img/teachers/teacher-01.jpg"
              class="rounded"
              alt="Profile"
            />
          </span>
          <div class="w-100">
            <p class="mb-1">Oct 2024</p>
            <div class="progress progress-xs flex-grow-1 mb-1">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-primary rounded"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center rounded border p-3 mb-3">
          <span class="avatar avatar-md flex-shrink-0 border rounded me-2">
            <img
              src="@/assets/img/teachers/teacher-02.jpg"
              class="rounded"
              alt="Profile"
            />
          </span>
          <div class="w-100">
            <p class="mb-1">Nov 2024</p>
            <div class="progress progress-xs flex-grow-1 mb-1">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center rounded border p-3 mb-0">
          <span class="avatar avatar-md flex-shrink-0 border rounded me-2">
            <img
              src="@/assets/img/teachers/teacher-03.jpg"
              class="rounded"
              alt="Profile"
            />
          </span>
          <div class="w-100">
            <p class="mb-1">Oct 2024</p>
            <div class="progress progress-xs flex-grow-1 mb-1">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Class Routine -->

    <!-- Class Wise Performance -->
    <div class="card flex-fill">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h4 class="card-title">Performance</h4>
        <div class="dropdown">
          <a
            href="javascript:void(0);"
            class="bg-white dropdown-toggle"
            data-bs-toggle="dropdown"
            ><i class="ti ti-school-bell me-2"></i>Class II
          </a>
          <ul class="dropdown-menu mt-2 p-3">
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1"> Class I </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1"> Class II </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">
                Class III
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1"> Class IV </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <div class="d-md-flex align-items-center justify-content-between">
          <div class="me-md-3 mb-3 mb-md-0 w-100">
            <div
              class="border border-dashed p-3 rounded d-flex align-items-center justify-content-between mb-1"
            >
              <p class="mb-0 me-2">
                <i class="ti ti-arrow-badge-down-filled me-2 text-primary"></i>Top
              </p>
              <h5>45</h5>
            </div>
            <div
              class="border border-dashed p-3 rounde d-flex align-items-center justify-content-between mb-1"
            >
              <p class="mb-0 me-2">
                <i class="ti ti-arrow-badge-down-filled me-2 text-warning"></i>Average
              </p>
              <h5>11</h5>
            </div>
            <div
              class="border border-dashed p-3 rounded d-flex align-items-center justify-content-between mb-0"
            >
              <p class="mb-0 me-2">
                <i class="ti ti-arrow-badge-down-filled me-2 text-danger"></i>Below Avg
              </p>
              <h5>02</h5>
            </div>
          </div>
          <div id="class-chart" class="text-center text-md-left">
            <apexchart
              type="donut"
              height="130"
              :options="classChart.CloseCharts"
              :series="classChart.series"
            >
            </apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- /Class Wise Performance -->
  </div>
</template>

<script>
import { studentChart, teacherChart, staffChart, classChart } from "./data";

export default {
  data() {
    return {
      studentChart: studentChart,
      teacherChart: teacherChart,
      staffChart: staffChart,
      classChart: classChart,
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
