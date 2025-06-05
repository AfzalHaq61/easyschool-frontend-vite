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
      <div class="card">
        <!-- Table Filter -->
        <teacher-day-wise-filter></teacher-day-wise-filter>
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
                        :src="require(`@/assets/img/teachers/${record.Image}`)"
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
    title: "Subject",
    dataIndex: "Subject",
    sorter: {
      compare: (a, b) => {
        a = a.Subject.toLowerCase();
        b = b.Subject.toLowerCase();
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
    ID: "T849127",
    Name: "Teresa",
    Image: "teacher-01.jpg",
    Subject: "Physics",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "2",
    ID: "T849126",
    Name: "Daniel",
    Image: "teacher-02.jpg",
    Subject: "Computer",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "3",
    ID: "T849125",
    Name: "Hellana",
    Image: "teacher-03.jpg",
    Subject: "English",
    Attendance: "Absent",
    Class: "badge badge-soft-danger",
  },
  {
    S_No: "4",
    ID: "T849124",
    Name: "Erickson",
    Image: "teacher-04.jpg",
    Subject: "Spanish",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "5",
    ID: "T849123",
    Name: "Morgan",
    Image: "teacher-05.jpg",
    Subject: "Env Science",
    Attendance: "Half Day",
    Class: "badge text-dark bg-transparent-dark",
  },
  {
    S_No: "6",
    ID: "T849122",
    Name: "Aaron",
    Image: "teacher-06.jpg",
    Subject: "Chemistry",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "7",
    ID: "T849121",
    Name: "Jacquelin",
    Image: "teacher-07.jpg",
    Subject: "Maths",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "8",
    ID: "T849120",
    Name: "Raul",
    Image: "teacher-08.jpg",
    Subject: "Biology",
    Attendance: "Late",
    Class: "badge badge-soft-pending",
  },
  {
    S_No: "9",
    ID: "T849119",
    Name: "Elizabeth",
    Image: "teacher-09.jpg",
    Subject: "Economics",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
  {
    S_No: "10",
    ID: "T849118",
    Name: "Edward",
    Image: "teacher-10.jpg",
    Subject: "Finance",
    Attendance: "Present",
    Class: "badge badge-soft-success",
  },
];
export default {
  data() {
    return {
      title: "Teacher Day Wise Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Teacher Day Wise Report",
      columns,
      data,
    };
  },
};
</script>
