<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
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
                  ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <staff-attendance-filter></staff-attendance-filter>
        <div class="card-body p-0 py-3">
          <!-- Student List -->
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
                <div id="DataTables_Table_0_filter" class="dataTables_filter text-end">
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
                  <th class="no-sort">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" id="select-all" />
                    </div>
                  </th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Attendance</th>
                  <th style="min-width: 200px">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738198</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/profiles/avatar-27.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Kevin</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Admin</td>
                  <td>Technical Head</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff1" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff1" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff1" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff1" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff1" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738197</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-05.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Willie</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Management</td>
                  <td>Receptionist</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff2" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff2" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff2" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff2" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff2" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738196</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-02.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Daniel</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Management</td>
                  <td>Admin</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff3" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff3" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff3" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff3" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff3" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738195</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-01.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Teresa</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Management</td>
                  <td>Admin</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff4" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff4" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff4" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff4" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff4" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738194</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-08.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Johnson</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Finance</td>
                  <td>Accountant</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff5" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff5" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff5" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff5" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff5" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738193</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-03.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Hellana</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Management</td>
                  <td>HR Manager</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff6" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff6" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff6" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff6" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff6" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738192</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/members/members-01.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">James</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Library</td>
                  <td>Librarian</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff7" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff7" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff7" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff7" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff7" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738191</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-07.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Jacquelin</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Transport</td>
                  <td>Driver</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff8" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff8" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff8" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff8" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff8" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738190</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-10.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Edward</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Finance</td>
                  <td>Accounts Manager</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff9" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff9" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff9" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff9" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff9" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td><a href="javascript:void(0);" class="link-primary">ST738189</a></td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-09.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Elizabeth</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Management</td>
                  <td>Receptionist</td>
                  <td>
                    <div class="d-flex align-items-center check-radio-group flex-nowrap">
                      <label class="custom-radio">
                        <input type="radio" name="staff10" checked="" />
                        <span class="checkmark"></span>
                        Present
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff10" />
                        <span class="checkmark"></span>
                        Late
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff10" />
                        <span class="checkmark"></span>
                        Absent
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff10" />
                        <span class="checkmark"></span>
                        Holiday
                      </label>
                      <label class="custom-radio">
                        <input type="radio" name="staff10" />
                        <span class="checkmark"></span>
                        Halfday
                      </label>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </td>
                </tr>
              </tbody>
            </table>
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
      title: "Staff Attendance",
      text: "Dashboard",
      text1: "Report",
      text2: "Staff Attendance",
    };
  },
};
</script>
