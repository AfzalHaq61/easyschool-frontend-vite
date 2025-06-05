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
      <div class="filter-wrapper">
        <!-- List Tab -->
        <attendance-report-tabset></attendance-report-tabset>
      </div>

      <div class="card">
        <student-attendance-type-filter></student-attendance-type-filter>
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
                <template v-if="column.key === 'Admission_No'">
                  <a href="javascript:void(0);" class="link-primary">{{
                    record.Admission_No
                  }}</a>
                </template>
                <template v-else-if="column.key === 'Student_Name'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Student_Img}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/students/student-details">{{
                          record.Student_Name
                        }}</router-link>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-else-if="column.key === 'Father_Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/parents/${record.Parents_Img}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Father_Name }}</a>
                      </p>
                    </div>
                  </div>
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
    sorter: false,
  },
  {
    title: "Admission No",
    dataIndex: "Admission_No",
    key: "Admission_No",
    sorter: {
      compare: (a, b) => {
        a = a.Admission_No.toLowerCase();
        b = b.Admission_No.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date Admission",
    dataIndex: "Date_Admission",
    sorter: {
      compare: (a, b) => {
        a = a.Date_Admission.toLowerCase();
        b = b.Date_Admission.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Student Name",
    dataIndex: "Student_Name",
    key: "Student_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Student_Name.toLowerCase();
        b = b.Student_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Class",
    dataIndex: "Class",
    sorter: {
      compare: (a, b) => {
        a = a.Class.toLowerCase();
        b = b.Class.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date Of Birth",
    dataIndex: "Date_Birth",
    sorter: {
      compare: (a, b) => {
        a = a.Date_Birth.toLowerCase();
        b = b.Date_Birth.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Father Name",
    dataIndex: "Father_Name",
    key: "Father_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Father_Name.toLowerCase();
        b = b.Father_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Count",
    dataIndex: "Count",
    sorter: {
      compare: (a, b) => {
        a = a.Count.toLowerCase();
        b = b.Count.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    Admission_No: "AD9892434",
    Date_Admission: "25 Mar 2024",
    Student_Name: "Janet",
    Student_Img: "student-01.jpg",
    Class: "III",
    Date_Birth: "10 Jan 2015",
    Father_Name: "Mary",
    Parents_Img: "parent-10.jpg",
    Count: "22",
  },
  {
    Admission_No: "AD9892433",
    Date_Admission: "18 Mar 2024",
    Student_Name: "Joann",
    Student_Img: "student-02.jpg",
    Class: "IV",
    Date_Birth: "19 Aug 2014",
    Father_Name: "Michael",
    Parents_Img: "parent-09.jpg",
    Count: "15",
  },
  {
    Admission_No: "AD9892432",
    Date_Admission: "14 Mar 2024",
    Student_Name: "Kathleen",
    Student_Img: "student-03.jpg",
    Class: "II",
    Date_Birth: "05 Dec 2017",
    Father_Name: "Jessie",
    Parents_Img: "parent-08.jpg",
    Count: "24",
  },
  {
    Admission_No: "AD9892431",
    Date_Admission: "27 Feb 2024",
    Student_Name: "Gifford",
    Student_Img: "student-04.jpg",
    Class: "I",
    Date_Birth: "22 Mar 2018",
    Father_Name: "Robert",
    Parents_Img: "parent-07.jpg",
    Count: "22",
  },
  {
    Admission_No: "AD9892430",
    Date_Admission: "13 Feb 2024",
    Student_Name: "Gifford",
    Student_Img: "student-05.jpg",
    Class: "II",
    Date_Birth: "13 May 2017",
    Father_Name: "Colleen",
    Parents_Img: "parent-06.jpg",
    Count: "22",
  },
  {
    Admission_No: "AD9892429",
    Date_Admission: "11 Feb 2024",
    Student_Name: "Ralph",
    Student_Img: "student-06.jpg",
    Class: "III",
    Date_Birth: "20 Jun 2015",
    Father_Name: "Arthur",
    Parents_Img: "parent-05.jpg",
    Count: "24",
  },
  {
    Admission_No: "AD9892428",
    Date_Admission: "24 Jan 2024",
    Student_Name: "Julie",
    Student_Img: "student-07.jpg",
    Class: "V",
    Date_Birth: "18 Sep 2013",
    Father_Name: "Claudia",
    Parents_Img: "parent-04.jpg",
    Count: "24",
  },
  {
    Admission_No: "AD9892427",
    Date_Admission: "19 Jan 2024",
    Student_Name: "Ryan",
    Student_Img: "student-08.jpg",
    Class: "VI",
    Date_Birth: "26 Nov 2012",
    Father_Name: "Johnson",
    Parents_Img: "parent-03.jpg",
    Count: "21",
  },
  {
    Admission_No: "AD9892426",
    Date_Admission: "08 Jan 2024",
    Student_Name: "Susan",
    Student_Img: "student-09.jpg",
    Class: "VIII",
    Date_Birth: "26 May 2010",
    Father_Name: "Marquita",
    Parents_Img: "parent-02.jpg",
    Count: "24",
  },
  {
    Admission_No: "AD9892425",
    Date_Admission: "22 Dec 2024",
    Student_Name: "Richard",
    Student_Img: "student-10.jpg",
    Class: "VII",
    Date_Birth: "06 Oct 2011",
    Father_Name: "Thomas",
    Parents_Img: "parent-01.jpg",
    Count: "24",
  },
  {
    Admission_No: "AD9892424",
    Date_Admission: "15 Dec 2024",
    Student_Name: "Veronica",
    Student_Img: "student-11.jpg",
    Class: "IX",
    Date_Birth: "27 Dec 2009",
    Father_Name: "Jessie",
    Parents_Img: "parent-14.jpg",
    Count: "24",
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
      title: "Students Attendance Type",
      text: "Dashboard",
      text1: "Report",
      text2: "Students Attendance Type",
      columns,
      data,
      rowSelection,
    };
  },
};
</script>
