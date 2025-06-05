<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <!-- Page Header -->
        <div class="col-md-12">
          <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <router-link
                to="/hrm/edit-staff"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Staff</router-link
              >
            </div>
          </div>
        </div>
        <staff-sidebar></staff-sidebar>
        <div class="col-xxl-9 col-lg-8">
          <staff-tabs></staff-tabs>
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap pb-1"
            >
              <h4 class="mb-3">Attendance</h4>
              <div class="d-flex align-items-center flex-wrap">
                <div class="d-flex align-items-center flex-wrap me-3">
                  <p class="text-dark mb-3 me-2">Last Updated on : 25 May 2024</p>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary btn-icon btn-sm rounded-circle d-inline-flex align-items-center justify-content-center p-0 mb-3"
                    ><i class="ti ti-refresh-dot"></i
                  ></a>
                </div>
                <div class="dropdown mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    ><i class="ti ti-calendar-due me-2"></i>Year : 2024 / 2025</a
                  >
                  <ul class="dropdown-menu p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Year : 2024 / 2025
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Year : 2023 / 2024
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Year : 2022 / 2023
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card-body pb-1">
              <div class="row">
                <!-- Total Present -->
                <div class="col-md-6 col-xxl-3 d-flex">
                  <div
                    class="d-flex align-items-center rounded border p-3 mb-3 flex-fill"
                  >
                    <span
                      class="avatar avatar-lg bg-primary-transparent rounded me-2 flex-shrink-0 text-primary"
                      ><i class="ti ti-user-check fs-24"></i
                    ></span>
                    <div class="ms-2">
                      <p class="mb-1">Present</p>
                      <h5>265</h5>
                    </div>
                  </div>
                </div>
                <!-- /Total Present -->

                <!-- Total Absent -->
                <div class="col-md-6 col-xxl-3 d-flex">
                  <div
                    class="d-flex align-items-center rounded border p-3 mb-3 flex-fill"
                  >
                    <span
                      class="avatar avatar-lg bg-danger-transparent rounded me-2 flex-shrink-0 text-danger"
                      ><i class="ti ti-user-check fs-24"></i
                    ></span>
                    <div class="ms-2">
                      <p class="mb-1">Absent</p>
                      <h5>05</h5>
                    </div>
                  </div>
                </div>
                <!-- /Total Absent -->

                <!-- Half Day -->
                <div class="col-md-6 col-xxl-3 d-flex">
                  <div
                    class="d-flex align-items-center rounded border p-3 mb-3 flex-fill"
                  >
                    <span
                      class="avatar avatar-lg bg-info-transparent rounded me-2 flex-shrink-0 text-info"
                      ><i class="ti ti-user-check fs-24"></i
                    ></span>
                    <div class="ms-2">
                      <p class="mb-1">Half Day</p>
                      <h5>01</h5>
                    </div>
                  </div>
                </div>
                <!-- /Half Day -->

                <!-- Late to School-->
                <div class="col-md-6 col-xxl-3 d-flex">
                  <div
                    class="d-flex align-items-center rounded border p-3 mb-3 flex-fill"
                  >
                    <span
                      class="avatar avatar-lg bg-warning-transparent rounded me-2 flex-shrink-0 text-warning"
                      ><i class="ti ti-user-check fs-24"></i
                    ></span>
                    <div class="ms-2">
                      <p class="mb-1">Late</p>
                      <h5>12</h5>
                    </div>
                  </div>
                </div>
                <!-- /Late to School-->
              </div>
            </div>
          </div>
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap pb-1"
            >
              <h4 class="mb-3">Attendance</h4>
              <div class="d-flex align-items-center flex-wrap">
                <div class="dropdown mb-3 me-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light border-white bg-white dropdown-toggle shadow-md"
                    data-bs-toggle="dropdown"
                    ><i class="ti ti-calendar-due me-2"></i>This Year</a
                  >
                  <ul class="dropdown-menu p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        This Year
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        This Week
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown mb-3">
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
              </div>
            </div>
            <div class="card-body p-0 py-3">
              <div class="px-3">
                <div class="d-flex align-items-center flex-wrap">
                  <div
                    class="d-flex align-items-center bg-white border rounded p-2 me-3 mb-3"
                  >
                    <span class="avatar avatar-sm bg-success rounded me-2 flex-shrink-0"
                      ><i class="ti ti-checks"></i
                    ></span>
                    <p class="text-dark">Present</p>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white border rounded p-2 me-3 mb-3"
                  >
                    <span class="avatar avatar-sm bg-danger rounded me-2 flex-shrink-0"
                      ><i class="ti ti-x"></i
                    ></span>
                    <p class="text-dark">Absent</p>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white border rounded p-2 me-3 mb-3"
                  >
                    <span class="avatar avatar-sm bg-pending rounded me-2 flex-shrink-0"
                      ><i class="ti ti-clock-x"></i
                    ></span>
                    <p class="text-dark">Late</p>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white border rounded p-2 me-3 mb-3"
                  >
                    <span class="avatar avatar-sm bg-dark rounded me-2 flex-shrink-0"
                      ><i class="ti ti-calendar-event"></i
                    ></span>
                    <p class="text-dark">Halfday</p>
                  </div>
                  <div
                    class="d-flex align-items-center bg-white border rounded p-2 me-3 mb-3"
                  >
                    <span class="avatar avatar-sm bg-info rounded me-2 flex-shrink-0"
                      ><i class="ti ti-calendar-event"></i
                    ></span>
                    <p class="text-dark">Holiday</p>
                  </div>
                </div>
              </div>

              <!-- Attendance List -->
              <div class="custom-datatable-filter table-responsive">
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="dataTables_length" id="DataTables_Table_0_length">
                      <label
                        >Row Per Page
                        <select
                          name="DataTables_Table_0_length"
                          aria-controls="DataTables_Table_0"
                          class="form-select form-select-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        Entries</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div
                      id="DataTables_Table_0_filter"
                      class="dataTables_filter text-end"
                    >
                      <label>
                        <input
                          type="search"
                          class="form-control form-control-sm"
                          placeholder="Search"
                          aria-controls="DataTables_Table_0"
                      /></label>
                    </div>
                  </div>
                </div>
                <table class="table datatable">
                  <thead class="thead-light">
                    <tr>
                      <th>Date <span class="divide-bar"> | </span> Month</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sep</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-danger"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-danger"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-danger"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-pending"></span></td>
                      <td><span class="attendance-range bg-danger"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-dark"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-pending"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-dark"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span class="attendance-range bg-success"></span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /Attendance List -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Staff Details",
      text: "Dashboard",
      text1: "HRM",
      text2: "Staff Details",
    };
  },
};
</script>
