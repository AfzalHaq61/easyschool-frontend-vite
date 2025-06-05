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
        <payroll-filter></payroll-filter>
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
                <template v-if="column.key === 'ID'">
                  <div>
                    <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Name }}</a>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Status'">
                  <span
                    :class="record.StatusClass"
                    class="d-inline-flex align-items-center"
                    ><i class="ti ti-circle-filled fs-5 me-1"></i
                    >{{ record.Status }}</span
                  >
                </template>
                <template v-if="column.key === 'View'">
                  <div>
                    <a href="javascript:void(0);" class="btn btn-light add-fee">{{
                      record.View
                    }}</a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
          <!-- /Student List -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    sorter: {
      compare: (a, b) => {
        a = a.ID.toLowerCase();
        b = b.ID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Designation",
    dataIndex: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    dataIndex: "View",
    key: "View",
    sorter: {
      compare: (a, b) => {
        a = a.View.toLowerCase();
        b = b.View.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    key: "1",
    ID: "P738197",
    Name: "Kevin",
    Image: "profiles/avatar-27.jpg",
    Department: "Admin",
    Designation: "Technical Head",
    Phone: "+1 63423 72397",
    Amount: "$15,000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
  },
  {
    key: "2",
    ID: "P738197",
    Name: "Willie",
    Image: "teachers/teacher-05.jpg",
    Department: "Management",
    Designation: "Receptionist",
    Phone: "+1 82913 61371",
    Amount: "$12,000",
    Status: "Generated",
    StatusClass: "badge badge-soft-warning",
    View: "View Details",
  },
  {
    key: "3",
    ID: "P738196",
    Name: "Daniel",
    Image: "teachers/teacher-02.jpg",
    Department: "Management",
    Designation: "Admin",
    Phone: "+1 56752 86742",
    Amount: "$13,000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
  },
  {
    key: "4",
    ID: "P738195",
    Name: "Teresa",
    Image: "teachers/teacher-01.jpg",
    Department: "Management",
    Designation: "Admin",
    Phone: "+1 82392 37359",
    Amount: "$13,000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
  },
  {
    key: "5",
    ID: "P738194",
    Name: "Johnson",
    Image: "teachers/teacher-08.jpg",
    Department: "Finance",
    Designation: "Accountant",
    Phone: "+1 53619 54691",
    Amount: "$18,000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
  },
  {
    key: "6",
    ID: "P738193",
    Name: "Hellana",
    Image: "teachers/teacher-03.jpg",
    Department: "Management",
    Designation: "HR Manager",
    Phone: "+1 23566 52683",
    Amount: "$12,000",
    Status: "Generated",
    StatusClass: "badge badge-soft-warning",
    View: "View Details",
  },
  {
    key: "7",
    ID: "P738192",
    Name: "James",
    Image: "members/members-01.jpg",
    Department: "Library",
    Designation: "Librarian",
    Phone: "+1 78429 82414",
    Amount: "$10,000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
  },
  {
    key: "8",
    ID: "P738191",
    Name: "Jacquelin",
    Image: "teachers/teacher-07.jpg",
    Department: "Transport",
    Designation: "Driver",
    Phone: "+1 77502 54845",
    Amount: "$8000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
  },
  {
    key: "9",
    ID: "P738190",
    Name: "Edward",
    Image: "teachers/teacher-10.jpg",
    Department: "Finance",
    Designation: "Accounts Manager",
    Phone: "+1 56187 87489",
    Amount: "$12,000",
    Status: "Generated",
    StatusClass: "badge badge-soft-warning",
    View: "View Details",
  },
  {
    key: "10",
    ID: "P738189",
    Name: "Elizabeth",
    Image: "teachers/teacher-09.jpg",
    Department: "Management",
    Designation: "Receptionist",
    Phone: "+1 97846 84518",
    Amount: "$10,000",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    View: "View Payslip",
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
      title: "Payroll",
      text: "Dashboard",
      text1: "HRM",
      text2: "Payroll",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
