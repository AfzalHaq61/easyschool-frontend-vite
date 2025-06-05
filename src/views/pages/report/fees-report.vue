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

      <!-- Filter Section -->
      <div class="card">
        <!-- Table Filter -->
        <fees-report-filter></fees-report-filter>
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
            <!-- Student List -->
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th>Fees Group</th>
                  <th>Fees Code</th>
                  <th>Due Date</th>
                  <th>Amount $</th>
                  <th>Status</th>
                  <th>Ref ID</th>
                  <th>Mode</th>
                  <th>Date Paid</th>
                  <th>Discount ($)</th>
                  <th>Fine ($)</th>
                  <th>Balance ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Admission Fees)</span>
                    </p>
                  </td>
                  <td>admission-fees</td>
                  <td>25 Mar 2024</td>
                  <td>2000</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435454</td>
                  <td>Cash</td>
                  <td>25 Jan 2024</td>
                  <td>10%</td>
                  <td>200</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Mar month fees)</span>
                    </p>
                  </td>
                  <td>mar-month-fees</td>
                  <td>10 Apr 2024</td>
                  <td>2500</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435453</td>
                  <td>Cash</td>
                  <td>03 Apr 2024</td>
                  <td>10%</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Apr month Fees)</span>
                    </p>
                  </td>
                  <td>apr-month-fees</td>
                  <td>10 May 2024</td>
                  <td>2500</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435453</td>
                  <td>Cash</td>
                  <td>03 Apr 2024</td>
                  <td>10%</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (May month Fees)</span>
                    </p>
                  </td>
                  <td>may-month-fees</td>
                  <td>10 Jun 2024</td>
                  <td>2500</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435451</td>
                  <td>Cash</td>
                  <td>02 Jun 2024</td>
                  <td>10%</td>
                  <td>200</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Jun month Fees)</span>
                    </p>
                  </td>
                  <td>jun-month-fees</td>
                  <td>10 Jul 2024</td>
                  <td>2500</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435450</td>
                  <td>Cash</td>
                  <td>05 Jul 2024</td>
                  <td>10%</td>
                  <td>200</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Jul month Fees)</span>
                    </p>
                  </td>
                  <td>jul-month-fees</td>
                  <td>10 Aug 2024</td>
                  <td>2500</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435449</td>
                  <td>Cash</td>
                  <td>01 Aug 2024</td>
                  <td>10%</td>
                  <td>200</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Dec month Fees)</span>
                    </p>
                  </td>
                  <td>dec-month-fees</td>
                  <td>10 Jan 2024</td>
                  <td>2500</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435443</td>
                  <td>Cash</td>
                  <td>05 Jan 2024</td>
                  <td>10%</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <p class="link-primary">
                      Class 1 General <span class="d-block"> (Jan month Fees)</span>
                    </p>
                  </td>
                  <td>jan-month-fees</td>
                  <td>10 Feb 2024</td>
                  <td>2000</td>
                  <td>
                    <span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                    >
                  </td>
                  <td>#435443</td>
                  <td>Cash</td>
                  <td>01 Feb 2024</td>
                  <td>10%</td>
                  <td>200</td>
                  <td>0</td>
                </tr>
                <tr class="bg-dark">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>2000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>200</td>
                  <td>200</td>
                  <td>0</td>
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
      title: "Fees Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Fees Report",
    };
  },
};
</script>
