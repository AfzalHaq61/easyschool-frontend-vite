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

      <div class="filter-wrapper">
        <attendance-report-tabset></attendance-report-tabset>
      </div>

      <div class="attendance-types page-header justify-content-end">
        <ul class="attendance-type-list">
          <li>
            <span class="attendance-icon bg-success"><i class="ti ti-checks"></i></span>
            Present
          </li>
          <li>
            <span class="attendance-icon bg-danger"><i class="ti ti-x"></i></span>
            Absent
          </li>
          <li>
            <span class="attendance-icon bg-pending"><i class="ti ti-clock-x"></i></span>
            Late
          </li>
          <li>
            <span class="attendance-icon bg-dark"
              ><i class="ti ti-calendar-event"></i
            ></span>
            Halfday
          </li>
          <li>
            <span class="attendance-icon bg-info"><i class="ti ti-clock-up"></i></span>
            Holiday
          </li>
        </ul>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <staff-report-filter></staff-report-filter>
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
                  <th>Student / Date</th>
                  <th>%</th>
                  <th class="no-sort">P</th>
                  <th class="no-sort">L</th>
                  <th class="no-sort">A</th>
                  <th class="no-sort">H</th>
                  <th class="no-sort">F</th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">01</span><span>M</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">02</span><span>T</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">03</span><span>W</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">04</span><span>T</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">05</span><span>F</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">06</span><span>S</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">07</span><span>S</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">08</span><span>M</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">09</span><span>T</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">10</span><span>W</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">11</span><span>T</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">12</span><span>F</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">13</span><span>S</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">14</span><span>S</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">15</span><span>M</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">16</span><span>T</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">17</span><span>W</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">18</span><span>T</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">19</span><span>F</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">20</span><span>S</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">21</span><span>S</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">22</span><span>M</span>
                    </div>
                  </th>
                  <th class="no-sort">
                    <div class="text-center">
                      <span class="day-num d-block">23</span><span>T</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                          <a href="javascript:void(0);">Janet</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-info">87</span></td>
                  <td>22</td>
                  <td>1</td>
                  <td>1</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                  <td><span class="badge badge-soft-info">95</span></td>
                  <td>23</td>
                  <td>1</td>
                  <td>2</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                  <td><span class="badge badge-soft-info">94</span></td>
                  <td>23</td>
                  <td>1</td>
                  <td>3</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-04.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Erickson</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-danger">45</span></td>
                  <td>16</td>
                  <td>2</td>
                  <td>1</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/teachers/teacher-06.jpg"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <a href="javascript:void(0);">Morgan</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-success">100</span></td>
                  <td>16</td>
                  <td>2</td>
                  <td>1</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                          <a href="javascript:void(0);">Aaron</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-info">95</span></td>
                  <td>21</td>
                  <td>2</td>
                  <td>1</td>
                  <td>6</td>
                  <td>2</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                          <a href="javascript:void(0);">Jacquelin</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-info">99</span></td>
                  <td>22</td>
                  <td>0</td>
                  <td>4</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                          <a href="javascript:void(0);">Raul</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-info">98</span></td>
                  <td>23</td>
                  <td>0</td>
                  <td>2</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                          <a href="javascript:void(0);">Elizabeth</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-danger">32</span></td>
                  <td>20</td>
                  <td>3</td>
                  <td>1</td>
                  <td>6</td>
                  <td>4</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                </tr>
                <tr>
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
                          <a href="javascript:void(0);">Edward</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span class="badge badge-soft-info">97</span></td>
                  <td>15</td>
                  <td>1</td>
                  <td>1</td>
                  <td>6</td>
                  <td>1</td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-dark"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-danger"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-pending"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-info"></span></td>
                  <td><span class="attendance-range bg-success"></span></td>
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
      title: "Staff Attendance Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Staff Attendance Report",
    };
  },
};
</script>
