<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
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
        <!-- Table Filter -->
        <leave-report-filter></leave-report-filter>

        <!-- /Table Filter -->
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
                <tr class="report-first-head">
                  <th></th>
                  <th></th>
                  <th colspan="2">Medical Leave(10)</th>
                  <th colspan="2">Casual Leave(12)</th>
                  <th colspan="2">Maternity Leave(10)</th>
                  <th colspan="2">Paternity Leave(10)</th>
                  <th colspan="2">Special Leave(10)</th>
                </tr>
                <tr>
                  <th>Admission No</th>
                  <th>Student Name</th>
                  <th>Used</th>
                  <th>Available</th>
                  <th>Used</th>
                  <th>Available</th>
                  <th>Used</th>
                  <th>Available</th>
                  <th>Used</th>
                  <th>Available</th>
                  <th>Used</th>
                  <th>Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892434</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-01.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Janet</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35013</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892433</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-02.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Joann</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35012</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892432</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-03.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details"
                            >Kathleen</router-link
                          >
                        </p>
                        <span class="fs-12">Roll No : 35011</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892431</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-04.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details"
                            >Gifford</router-link
                          >
                        </p>
                        <span class="fs-12">Roll No : 35010</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892430</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-05.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Lisa</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35009</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892429</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-06.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Ralph</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35008</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892428</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-07.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Julie</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35007</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892427</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-08.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Ryan</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35006</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892426</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-09.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">Susan</router-link>
                        </p>
                        <span class="fs-12">Roll No : 35004</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <a href="javascript:void(0);" class="link-primary">AD9892425</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/students/student-10.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details"
                            >Richard</router-link
                          >
                        </p>
                        <span class="fs-12">Roll No : 35003</span>
                      </div>
                    </div>
                  </td>
                  <td>02</td>
                  <td>08</td>
                  <td>04</td>
                  <td>08</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>

<script>
export default {
  data() {
    return {
      title: "Leave Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Leave Report",
    };
  },
};
</script>
