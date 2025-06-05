<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div class="my-auto mb-2">
          <h3 class="page-title mb-1">Admin Dashboard</h3>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Admin Dashboard</li>
            </ol>
          </nav>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <router-link
              to="/students/add-student"
              class="btn btn-primary d-flex align-items-center me-3"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add New Student</router-link
            >
          </div>
          <div class="mb-2">
            <router-link
              to="/fees/collect-fees"
              class="btn btn-light d-flex align-items-center"
              >Fees Details</router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <admin-banner></admin-banner>
      </div>

      <div class="row">
        <admin-student></admin-student>
      </div>

      <div class="row">
        <admin-schedules></admin-schedules>
      </div>

      <div class="row">
        <!-- Fees Collection -->
        <div class="col-xxl-8 col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Fees Collection</h4>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  ><i class="ti ti-calendar me-2"></i>Last 8 Quater
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
                      Last 12 Quater
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                      Last 16 Quater
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body pb-0">
              <div id="fees-chart">
                <apexchart
                  type="bar"
                  height="275"
                  :options="feesCharts.AdminFees"
                  :series="feesCharts.series"
                >
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <!-- /Fees Collection -->

        <!-- Leave Requests -->
        <div class="col-xxl-4 col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Leave Requests</h4>
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
              <div class="card mb-2">
                <div class="card-body p-3">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center overflow-hidden me-2">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-lg flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/profiles/avatar-14.jpg" alt="student" />
                      </a>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">
                          <a href="javascript:void(0);">James</a
                          ><span class="badge badge-soft-danger ms-1">Emergency</span>
                        </h6>
                        <p class="text-truncate">Physics Teacher</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-success me-1"
                        ><i class="ti ti-checks"></i
                      ></a>
                      <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                        ><i class="ti ti-x"></i
                      ></a>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between border-top pt-3"
                  >
                    <p class="mb-0">
                      Leave : <span class="fw-semibold">12 -13 May</span>
                    </p>
                    <p>Apply on : <span class="fw-semibold">12 May</span></p>
                  </div>
                </div>
              </div>
              <div class="card mb-0">
                <div class="card-body p-3">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center overflow-hidden me-2">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-lg flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/profiles/avatar-19.jpg" alt="student" />
                      </a>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">
                          <a href="javascript:void(0);">Ramien</a
                          ><span class="badge badge-soft-warning ms-1">Casual</span>
                        </h6>
                        <p class="text-truncate">Accountant</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-success me-1"
                        ><i class="ti ti-checks"></i
                      ></a>
                      <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                        ><i class="ti ti-x"></i
                      ></a>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between border-top pt-3"
                  >
                    <p class="mb-0">
                      Leave : <span class="fw-semibold">12 -13 May</span>
                    </p>
                    <p>Apply on : <span class="fw-semibold">11 May</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Leave Requests -->
      </div>

      <div class="row">
        <!-- Links -->
        <div class="col-xl-3 col-md-6 d-flex">
          <router-link
            to="/attendance/student-attendance"
            class="card bg-warning-transparent border border-5 border-white animate-card flex-fill"
          >
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-lg bg-warning rounded flex-shrink-0 me-2"
                    ><i class="ti ti-calendar-share fs-24"></i
                  ></span>
                  <div class="overflow-hidden">
                    <h6 class="fw-semibold text-default">View Attendance</h6>
                  </div>
                </div>
                <span
                  class="btn btn-white warning-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle"
                  ><i class="ti ti-chevron-right fs-14"></i
                ></span>
              </div>
            </div>
          </router-link>
        </div>
        <!-- /Links -->

        <!-- Links -->
        <div class="col-xl-3 col-md-6 d-flex">
          <router-link
            to="/announcements/event-list"
            class="card bg-success-transparent border border-5 border-white animate-card flex-fill"
          >
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-lg bg-success rounded flex-shrink-0 me-2"
                    ><i class="ti ti-speakerphone fs-24"></i
                  ></span>
                  <div class="overflow-hidden">
                    <h6 class="fw-semibold text-default">New Events</h6>
                  </div>
                </div>
                <span
                  class="btn btn-white success-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle"
                  ><i class="ti ti-chevron-right fs-14"></i
                ></span>
              </div>
            </div>
          </router-link>
        </div>
        <!-- /Links -->

        <!-- Links -->
        <div class="col-xl-3 col-md-6 d-flex">
          <router-link
            to="/membership/membership-plans"
            class="card bg-danger-transparent border border-5 border-white animate-card flex-fill"
          >
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-lg bg-danger rounded flex-shrink-0 me-2"
                    ><i class="ti ti-sphere fs-24"></i
                  ></span>
                  <div class="overflow-hidden">
                    <h6 class="fw-semibold text-default">Membership Plans</h6>
                  </div>
                </div>
                <span
                  class="btn btn-white avatar avatar-sm p-0 flex-shrink-0 rounded-circle danger-btn-hover"
                  ><i class="ti ti-chevron-right fs-14"></i
                ></span>
              </div>
            </div>
          </router-link>
        </div>
        <!-- /Links -->

        <!-- Links -->
        <div class="col-xl-3 col-md-6 d-flex">
          <router-link
            to="/attendance/student-attendance"
            class="card bg-secondary-transparent border border-5 border-white animate-card flex-fill"
          >
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-lg bg-secondary rounded flex-shrink-0 me-2"
                    ><i class="ti ti-moneybag fs-24"></i
                  ></span>
                  <div class="overflow-hidden">
                    <h6 class="fw-semibold text-default">Finance & Accounts</h6>
                  </div>
                </div>
                <span
                  class="btn btn-white secondary-btn-hover avatar avatar-sm p-0 flex-shrink-0 rounded-circle"
                  ><i class="ti ti-chevron-right fs-14"></i
                ></span>
              </div>
            </div>
          </router-link>
        </div>
        <!-- /Links -->
      </div>

      <div class="row">
        <!-- Total Earnings -->
        <div class="col-xxl-4 col-xl-6 d-flex flex-column">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h6 class="mb-1">Total Earnings</h6>
                  <h2>$64,522,24</h2>
                </div>
                <span class="avatar avatar-lg bg-primary">
                  <i class="ti ti-user-dollar"></i>
                </span>
              </div>
            </div>
            <div id="total-earning">
              <apexchart
                type="area"
                height="90"
                :options="earningCharts.TotalCharts"
                :series="earningCharts.series"
              >
              </apexchart>
            </div>
          </div>
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h6 class="mb-1">Total Expenses</h6>
                  <h2>$60,522,24</h2>
                </div>
                <span class="avatar avatar-lg bg-danger">
                  <i class="ti ti-user-dollar"></i>
                </span>
              </div>
            </div>
            <div id="total-expenses">
              <apexchart
                type="area"
                height="90"
                :options="expensesCharts.Total"
                :series="expensesCharts.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <!-- /Total Earnings -->

        <!-- Notice Board -->
        <div class="col-xxl-5 col-xl-12 order-3 order-xxl-2 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Notice Board</h4>
              <router-link to="/announcements/notice-board" class="fw-medium">View All</router-link>
            </div>
            <div class="card-body">
              <div class="notice-widget">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <div
                    class="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0"
                  >
                    <span
                      class="bg-primary-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                    >
                      <i class="ti ti-books fs-16"></i>
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="text-truncate mb-1">New Syllabus Instructions</h6>
                      <p><i class="ti ti-calendar me-2"></i>Added on : 11 Mar 2024</p>
                    </div>
                  </div>
                  <span class="badge bg-light text-dark"
                    ><i class="ti ti-clck me-1"></i>20 Days</span
                  >
                </div>
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <div
                    class="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0"
                  >
                    <span
                      class="bg-success-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                    >
                      <i class="ti ti-note fs-16"></i>
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="text-truncate mb-1">
                        World Environment Day Program.....!!!
                      </h6>
                      <p><i class="ti ti-calendar me-2"></i>Added on : 21 Apr 2024</p>
                    </div>
                  </div>
                  <span class="badge bg-light text-dark"
                    ><i class="ti ti-clck me-1"></i>15 Days</span
                  >
                </div>
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <div
                    class="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0"
                  >
                    <span
                      class="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                    >
                      <i class="ti ti-bell-check fs-16"></i>
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="text-truncate mb-1">Exam Preparation Notification!</h6>
                      <p><i class="ti ti-calendar me-2"></i>Added on : 13 Mar 2024</p>
                    </div>
                  </div>
                  <span class="badge bg-light text-dark"
                    ><i class="ti ti-clck me-1"></i>12 Days</span
                  >
                </div>
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <div
                    class="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0"
                  >
                    <span
                      class="bg-skyblue-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                    >
                      <i class="ti ti-notes fs-16"></i>
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="text-truncate mb-1">Online Classes Preparation</h6>
                      <p><i class="ti ti-calendar me-2"></i>Added on : 24 May 2024</p>
                    </div>
                  </div>
                  <span class="badge bg-light text-dark"
                    ><i class="ti ti-clck me-1"></i>02 Days</span
                  >
                </div>
                <div class="d-sm-flex align-items-center justify-content-between mb-0">
                  <div
                    class="d-flex align-items-center overflow-hidden me-2 mb-2 mb-sm-0"
                  >
                    <span
                      class="bg-warning-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                    >
                      <i class="ti ti-package fs-16"></i>
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="text-truncate mb-1">Exam Time Table Release</h6>
                      <p><i class="ti ti-calendar me-2"></i>Added on : 24 May 2024</p>
                    </div>
                  </div>
                  <span class="badge bg-light text-dark"
                    ><i class="ti ti-clck me-1"></i>06 Days</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Notice Board -->

        <!-- Fees Collection -->
        <div class="col-xxl-3 col-xl-6 order-2 order-xxl-3 d-flex flex-column">
          <div class="card flex-fill mb-2">
            <div class="card-body">
              <p class="mb-2">Total Fees Collected</p>
              <div class="d-flex align-items-end justify-content-between">
                <h4>$25,000,02</h4>
                <span class="badge badge-soft-success"
                  ><i class="ti ti-chart-line me-1"></i>1.2%</span
                >
              </div>
            </div>
          </div>
          <div class="card flex-fill mb-2">
            <div class="card-body">
              <p class="mb-2">Fine Collected till date</p>
              <div class="d-flex align-items-end justify-content-between">
                <h4>$4,56,64</h4>
                <span class="badge badge-soft-danger"
                  ><i class="ti ti-chart-line me-1"></i>1.2%</span
                >
              </div>
            </div>
          </div>
          <div class="card flex-fill mb-2">
            <div class="card-body">
              <p class="mb-2">Student Not Paid</p>
              <div class="d-flex align-items-end justify-content-between">
                <h4>$545</h4>
                <span class="badge badge-soft-info"
                  ><i class="ti ti-chart-line me-1"></i>1.2%</span
                >
              </div>
            </div>
          </div>
          <div class="card flex-fill mb-4">
            <div class="card-body">
              <p class="mb-2">Total Outstanding</p>
              <div class="d-flex align-items-end justify-content-between">
                <h4>$4,56,64</h4>
                <span class="badge badge-soft-danger"
                  ><i class="ti ti-chart-line me-1"></i>1.2%</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- /Fees Collection -->
      </div>

      <div class="row">
        <!-- Top Subjects -->
        <div class="col-xxl-4 col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Top Subjects</h4>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  ><i class="ti ti-school-bell me-2"></i>Class II
                </a>
                <ul class="dropdown-menu mt-2 p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                      Class I
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                      Class II
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                      Class III
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">
                      Class IV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div
                class="alert alert-success d-flex align-items-center mb-24"
                role="alert"
              >
                <i class="ti ti-info-square-rounded me-2 fs-14"></i>
                <div class="fs-14">
                  These Result are obtained from the syllabus completion on the respective
                  Class
                </div>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">Maths</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-primary rounded"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">Physics</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-secondary rounded"
                          role="progressbar"
                          style="width: 30%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">Chemistry</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-info rounded"
                          role="progressbar"
                          style="width: 40%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">Botany</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-success rounded"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">English</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-warning rounded"
                          role="progressbar"
                          style="width: 70%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">Spanish</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-danger rounded"
                          role="progressbar"
                          style="width: 80%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col-sm-4">
                      <p class="text-dark">Japanese</p>
                    </div>
                    <div class="col-sm-8">
                      <div class="progress progress-xs flex-grow-1">
                        <div
                          class="progress-bar bg-primary rounded"
                          role="progressbar"
                          style="width: 85%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Top Subjects -->

        <!-- Student Activity -->
        <div class="col-xxl-4 col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Student Activity</h4>
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
                class="d-flex align-items-center overflow-hidden p-3 mb-3 border rounded"
              >
                <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                  <img src="@/assets/img/students/student-09.jpg" alt="student" />
                </span>
                <div class="overflow-hidden">
                  <h6 class="mb-1 text-truncate">1st place in "Chess”</h6>
                  <p>This event took place in Our School</p>
                </div>
              </div>
              <div
                class="d-flex align-items-center overflow-hidden p-3 mb-3 border rounded"
              >
                <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                  <img src="@/assets/img/students/student-12.jpg" alt="student" />
                </span>
                <div class="overflow-hidden">
                  <h6 class="mb-1 text-truncate">Participated in "Carrom"</h6>
                  <p>Justin Lee participated in "Carrom"</p>
                </div>
              </div>
              <div
                class="d-flex align-items-center overflow-hidden p-3 mb-3 border rounded"
              >
                <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                  <img src="@/assets/img/students/student-11.jpg" alt="student" />
                </span>
                <div class="overflow-hidden">
                  <h6 class="mb-1 text-truncate">1st place in "100M”</h6>
                  <p>This event took place in Our School</p>
                </div>
              </div>
              <div
                class="d-flex align-items-center overflow-hidden p-3 mb-0 border rounded"
              >
                <span class="avatar avatar-lg flex-shrink-0 rounded me-2">
                  <img src="@/assets/img/students/student-10.jpg" alt="student" />
                </span>
                <div class="overflow-hidden">
                  <h6 class="mb-1 text-truncate">International conference</h6>
                  <p class="text-truncate">We attended international conference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Student Activity -->

        <!-- Todo -->
        <div class="col-xxl-4 col-xl-12 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <h4 class="card-title">Todo</h4>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  ><i class="ti ti-calendar me-2"></i>Today
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
              <ul class="list-group list-group-flush todo-list">
                <li class="list-group-item py-3 px-0 pt-0">
                  <div class="d-sm-flex align-items-center justify-content-between">
                    <div
                      class="d-flex align-items-center overflow-hidden me-2"
                      :class="{ 'todo-strike-content': isClick }"
                      @click="toggleClick"
                    >
                      <div class="form-check form-check-md me-2">
                        <input class="form-check-input" type="checkbox" checked />
                      </div>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">Send Reminder to Students</h6>
                        <p>01:00 PM</p>
                      </div>
                    </div>
                    <span class="badge badge-soft-success mt-2 mt-sm-0">Compeleted</span>
                  </div>
                </li>
                <li class="list-group-item py-3 px-0">
                  <div class="d-sm-flex align-items-center justify-content-between">
                    <div
                      class="d-flex align-items-center overflow-hidden me-2"
                      :class="{ 'todo-strike-content': isClicked }"
                      @click="toggleClicked"
                    >
                      <div class="form-check form-check-md me-2">
                        <input class="form-check-input" type="checkbox" />
                      </div>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">Create Routine to new staff</h6>
                        <p>04:50 PM</p>
                      </div>
                    </div>
                    <span class="badge badge-soft-skyblue mt-2 mt-sm-0">Inprogress</span>
                  </div>
                </li>
                <li class="list-group-item py-3 px-0">
                  <div class="d-sm-flex align-items-center justify-content-between">
                    <div
                      class="d-flex align-items-center overflow-hidden me-2"
                      :class="{ 'todo-strike-content': isClickedOne }"
                      @click="toggleClickedOne"
                    >
                      <div class="form-check form-check-md me-2">
                        <input class="form-check-input" type="checkbox" />
                      </div>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">Extra Class Info to Students</h6>
                        <p>04:55 PM</p>
                      </div>
                    </div>
                    <span class="badge badge-soft-warning mt-2 mt-sm-0"
                      >Yet to Start</span
                    >
                  </div>
                </li>
                <li class="list-group-item py-3 px-0">
                  <div class="d-sm-flex align-items-center justify-content-between">
                    <div
                      class="d-flex align-items-center overflow-hidden me-2"
                      :class="{ 'todo-strike-content': isClickedTwo }"
                      @click="toggleClickedTwo"
                    >
                      <div class="form-check form-check-md me-2">
                        <input class="form-check-input" type="checkbox" />
                      </div>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">Fees for Upcoming Academics</h6>
                        <p>04:55 PM</p>
                      </div>
                    </div>
                    <span class="badge badge-soft-warning mt-2 mt-sm-0"
                      >Yet to Start</span
                    >
                  </div>
                </li>
                <li class="list-group-item py-3 px-0 pb-0">
                  <div class="d-sm-flex align-items-center justify-content-between">
                    <div
                      class="d-flex align-items-center overflow-hidden me-2"
                      :class="{ 'todo-strike-content': isClickedThree }"
                      @click="toggleClickedThree"
                    >
                      <div class="form-check form-check-md me-2">
                        <input class="form-check-input" type="checkbox" />
                      </div>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">English - Essay on Visit</h6>
                        <p>05:55 PM</p>
                      </div>
                    </div>
                    <span class="badge badge-soft-warning mt-2 mt-sm-0"
                      >Yet to Start</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Todo -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <admin-dashboard-modal></admin-dashboard-modal>
</template>

<script>
import { feesCharts, expensesCharts, earningCharts } from "./dataone";
export default {
  data() {
    return {
      feesCharts: feesCharts,
      expensesCharts: expensesCharts,
      earningCharts: earningCharts,
      isClick: true,
      isClicked: false,
      isClickedOne: false,
      isClickedTwo: false,
      isClickedThree: false,
    };
  },
  methods: {
    toggleClick() {
      this.isClick = !this.isClick;
    },
    toggleClicked() {
      this.isClicked = !this.isClicked;
    },
    toggleClickedOne() {
      this.isClickedOne = !this.isClickedOne;
    },
    toggleClickedTwo() {
      this.isClickedTwo = !this.isClickedTwo;
    },
    toggleClickedThree() {
      this.isClickedThree = !this.isClickedThree;
    },
  },
};
</script>
