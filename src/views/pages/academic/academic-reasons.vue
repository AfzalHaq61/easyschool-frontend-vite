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
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_reason"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Reasons</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <reasons-filter></reasons-filter>
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
            <a-table
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Role'">
                  <div>{{ record.Role }}</div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="action-icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <ul>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_reason"
                            ><i class="ti ti-edit-circle"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            ><i class="ti ti-trash-x"></i> Delete</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
        <!-- /Student List -->
      </div>
    </div>
  </div>
  <academic-reasons-modal></academic-reasons-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Reason",
    dataIndex: "Reason",
    sorter: {
      compare: (a, b) => {
        a = a.Reason.toLowerCase();
        b = b.Reason.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedDate.toLowerCase();
        b = b.CreatedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    Role: "Teacher",
    Reason: "Pregnancy",
    CreatedDate: "24 May 2024",
  },
  {
    key: "2",
    Role: "Student",
    Reason: "Fees Unpaid",
    CreatedDate: "21 May 2024",
  },
  {
    key: "3",
    Role: "Staff",
    Reason: "Complaint",
    CreatedDate: "16 May 2024",
  },
  {
    key: "4",
    Role: "Student",
    Reason: "Complaint",
    CreatedDate: "15 May 2024",
  },
  {
    key: "5",
    Role: "Staff",
    Reason: "Complaint",
    CreatedDate: "28 Apr 2024",
  },
  {
    key: "6",
    Role: "Student",
    Reason: "Fail in all Subject",
    CreatedDate: "26 Apr 2024",
  },
  {
    key: "7",
    Role: "Staff",
    Reason: "Engage",
    CreatedDate: "22 May 2024",
  },
  {
    key: "8",
    Role: "Student",
    Reason: "Experience",
    CreatedDate: "16 Apr 2024",
  },
  {
    key: "9",
    Role: "Staff",
    Reason: "No Improvement",
    CreatedDate: "14 Apr 2024",
  },
  {
    key: "10",
    Role: "Staff",
    Reason: "Issue in family",
    CreatedDate: "12 May 2024",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
export default {
  data() {
    return {
      title: "Reason",
      text: "Dashboard",
      text1: "Academic",
      text2: "Reason",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
