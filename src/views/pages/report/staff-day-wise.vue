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
        <!-- List Tab -->
        <attendance-report-tabset></attendance-report-tabset>
        <!-- /List Tab -->
      </div>
      <div class="card">
        <!-- Table Filter -->
        <staff-day-wise-filter></staff-day-wise-filter>
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
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'ID'">
                  <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
                </template>
                <template v-else-if="column.key === 'Name'">
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
                <template v-else-if="column.key === 'Attendance'">
                  <span :class="record.Class" class="d-inline-flex align-items-center"
                    ><i class="ti ti-circle-filled fs-5 me-1"></i
                    >{{ record.Attendance }}</span
                  >
                </template>
              </template>
            </a-table>
          </div>
          <!-- /Attendance List -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>

<script>
const columns = [
  {
    title: "S.No",
    dataIndex: "S_No",
    sorter: {
      compare: (a, b) => {
        a = a.S_No.toLowerCase();
        b = b.S_No.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Attendance",
    dataIndex: "Attendance",
    key: "Attendance",
    sorter: {
      compare: (a, b) => {
        a = a.Attendance.toLowerCase();
        b = b.Attendance.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];

const data = [
  {
    S_No: "1",
    ID: "8483",
    Name: "Hellana",
    Image: "teachers/teacher-03.jpg",
    Department: "Management",
    Role: "Receptionist",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
  {
    S_No: "2",
    ID: "8482",
    Name: "Daniel",
    Image: "teachers/teacher-02.jpg",
    Department: "Finance",
    Role: "Accounts Manager",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
  {
    S_No: "3",
    ID: "8481",
    Name: "Kevin",
    Image: "profiles/avatar-27.jpg",
    Department: "Management",
    Role: "Driver",
    Class: "badge badge-soft-danger",
    Attendance: "Absent",
  },
  {
    S_No: "4",
    ID: "8480",
    Name: "Teresa",
    Image: "teachers/teacher-01.jpg",
    Department: "Finance",
    Role: "Librarian",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
  {
    S_No: "5",
    ID: "8479",
    Name: "James",
    Image: "members/members-01.jpg",
    Department: "Management",
    Role: "HR Manager",
    Class: "badge text-dark bg-transparent-dark",
    Attendance: "Half Day",
  },
  {
    S_No: "6",
    ID: "8478",
    Name: "Johnson",
    Image: "teachers/teacher-08.jpg",
    Department: "Admin",
    Role: "Accountant",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
  {
    S_No: "7",
    ID: "8477",
    Name: "Edward",
    Image: "teachers/teacher-10.jpg",
    Department: "Transport",
    Role: "Admin",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
  {
    S_No: "8",
    ID: "8476",
    Name: "Jacquelin",
    Image: "teachers/teacher-07.jpg",
    Department: "Library",
    Role: "Admin",
    Class: "badge badge-soft-pending",
    Attendance: "Late",
  },
  {
    S_No: "9",
    ID: "8475",
    Name: "Elizabeth",
    Image: "teachers/teacher-09.jpg",
    Department: "Management",
    Role: "Receptionist",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
  {
    S_No: "10",
    ID: "8474",
    Name: "Willie",
    Image: "teachers/teacher-05.jpg",
    Department: "Management",
    Role: "Technical Head",
    Class: "badge badge-soft-success",
    Attendance: "Present",
  },
];
export default {
  data() {
    return {
      title: "Staff Day Wise Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Staff Day Wise Report",
      columns,
      data,
    };
  },
};
</script>
