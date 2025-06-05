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
      </div>
      <div class="card">
        <student-day-wise-filter></student-day-wise-filter>
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
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Image}`)"
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
    title: "Admission No",
    dataIndex: "Admission_No",
    sorter: {
      compare: (a, b) => {
        a = a.Admission_No.toLowerCase();
        b = b.Admission_No.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Roll No",
    dataIndex: "Roll_No",
    key: "Roll_No",
    sorter: {
      compare: (a, b) => {
        a = a.Roll_No.toLowerCase();
        b = b.Roll_No.toLowerCase();
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
    Admission_No: "AD9892434",
    Roll_No: "35013",
    Name: "Janet",
    Image: "student-01.jpg",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "2",
    Admission_No: "AD9892433",
    Roll_No: "35012",
    Name: "Joann",
    Image: "student-02.jpg",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "3",
    Admission_No: "AD9892432",
    Roll_No: "35011",
    Name: "Kathleen",
    Image: "student-03.jpg",
    Attendance: "Half Day",
    Class: "badge text-dark bg-transparent-dark",
  },
  {
    S_No: "4",
    Admission_No: "AD9892431",
    Roll_No: "35010",
    Name: "Gifford",
    Image: "student-04.jpg",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "5",
    Admission_No: "AD9892430",
    Roll_No: "35009",
    Name: "Lisa",
    Image: "student-05.jpg",
    Attendance: "Absent",
    Class: "badge badge-soft-danger",
  },
  {
    S_No: "6",
    Admission_No: "AD9892429",
    Roll_No: "35008",
    Name: "Ralph",
    Image: "student-06.jpg",
    Attendance: "Late",
    Class: "badge badge-soft-pending",
  },
  {
    S_No: "7",
    Admission_No: "AD9892428",
    Roll_No: "35007",
    Name: "Julie",
    Image: "student-07.jpg",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "8",
    Admission_No: "AD9892427",
    Roll_No: "35006",
    Name: "Ryan",
    Image: "student-08.jpg",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "9",
    Admission_No: "AD9892426",
    Roll_No: "35005",
    Name: "Susan",
    Image: "student-09.jpg",
    Attendance: "Absent",
    Class: "badge badge-soft-danger",
  },
  {
    S_No: "10",
    Admission_No: "AD9892425",
    Roll_No: "35004",
    Name: "Richard",
    Image: "student-10.jpg",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
];
export default {
  data() {
    return {
      title: "Student Day Wise Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Student Day Wise Report",
      columns,
      data,
    };
  },
};
</script>
