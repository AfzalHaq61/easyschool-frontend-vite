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
        <grade-report-filter></grade-report-filter>
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
                      <span class="fs-12">Roll No :{{ record.Roll_No }}</span>
                    </div>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
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
    title: "English",
    dataIndex: "English",
    sorter: {
      compare: (a, b) => {
        a = a.English.toLowerCase();
        b = b.English.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Spanish",
    dataIndex: "Spanish",
    sorter: {
      compare: (a, b) => {
        a = a.Spanish.toLowerCase();
        b = b.Spanish.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Physics",
    dataIndex: "Physics",
    sorter: {
      compare: (a, b) => {
        a = a.Physics.toLowerCase();
        b = b.Physics.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Chemistry",
    dataIndex: "Chemistry",
    sorter: {
      compare: (a, b) => {
        a = a.Chemistry.toLowerCase();
        b = b.Chemistry.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Maths",
    dataIndex: "Maths",
    sorter: {
      compare: (a, b) => {
        a = a.Maths.toLowerCase();
        b = b.Maths.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Computer",
    dataIndex: "Computer",
    sorter: {
      compare: (a, b) => {
        a = a.Computer.toLowerCase();
        b = b.Computer.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Env Science",
    dataIndex: "Env_Science",
    sorter: {
      compare: (a, b) => {
        a = a.Env_Science.toLowerCase();
        b = b.Env_Science.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total",
    dataIndex: "Total",
    sorter: {
      compare: (a, b) => {
        a = a.Total.toLowerCase();
        b = b.Total.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Percent (%)",
    dataIndex: "Percent",
    sorter: {
      compare: (a, b) => {
        a = a.Percent.toLowerCase();
        b = b.Percent.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Grade",
    dataIndex: "Grade",
    sorter: {
      compare: (a, b) => {
        a = a.Grade.toLowerCase();
        b = b.Grade.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];

const data = [
  {
    Admission_No: "AD9892434",
    Student_Name: "Janet",
    Student_Img: "student-01.jpg",
    Roll_No: "35013",
    English: "95",
    Spanish: "93",
    Physics: "88",
    Chemistry: "90",
    Maths: "85",
    Computer: "98",
    Env_Science: "95",
    Total: "644",
    Percent: "92",
    Grade: "O",
  },
  {
    Admission_No: "AD9892433",
    Student_Name: "Joann",
    Student_Img: "student-02.jpg",
    Roll_No: "35012",
    English: "30",
    Spanish: "35",
    Physics: "36",
    Chemistry: "28",
    Maths: "38",
    Computer: "40",
    Env_Science: "37",
    Total: "244",
    Percent: "34",
    Grade: "F",
  },
  {
    Admission_No: "AD9892432",
    Student_Name: "Kathleen",
    Student_Img: "student-03.jpg",
    Roll_No: "35011",
    English: "70",
    Spanish: "80",
    Physics: "85",
    Chemistry: "78",
    Maths: "82",
    Computer: "83",
    Env_Science: "80",
    Total: "558",
    Percent: "79",
    Grade: "A",
  },
  {
    Admission_No: "AD9892431",
    Student_Name: "Gifford",
    Student_Img: "student-04.jpg",
    Roll_No: "35010",
    English: "60",
    Spanish: "68",
    Physics: "65",
    Chemistry: "70",
    Maths: "67",
    Computer: "72",
    Env_Science: "75",
    Total: "477",
    Percent: "68",
    Grade: "B+",
  },
  {
    Admission_No: "AD9892430",
    Student_Name: "Lisa",
    Student_Img: "student-05.jpg",
    Roll_No: "35009",
    English: "36",
    Spanish: "30",
    Physics: "40",
    Chemistry: "38",
    Maths: "50",
    Computer: "48",
    Env_Science: "43",
    Total: "285",
    Percent: "40",
    Grade: "F",
  },
  {
    Admission_No: "AD9892429",
    Student_Name: "Ralph",
    Student_Img: "student-06.jpg",
    Roll_No: "35008",
    English: "43",
    Spanish: "50",
    Physics: "62",
    Chemistry: "70",
    Maths: "65",
    Computer: "58",
    Env_Science: "60",
    Total: "408",
    Percent: "58",
    Grade: "B",
  },
  {
    Admission_No: "AD9892428",
    Student_Name: "Julie",
    Student_Img: "student-07.jpg",
    Roll_No: "35007",
    English: "72",
    Spanish: "80",
    Physics: "75",
    Chemistry: "78",
    Maths: "84",
    Computer: "87",
    Env_Science: "76",
    Total: "552",
    Percent: "78",
    Grade: "A",
  },
  {
    Admission_No: "AD9892427",
    Student_Name: "Ryan",
    Student_Img: "student-08.jpg",
    Roll_No: "35006",
    English: "40",
    Spanish: "48",
    Physics: "42",
    Chemistry: "47",
    Maths: "32",
    Computer: "58",
    Env_Science: "50",
    Total: "317",
    Percent: "45",
    Grade: "F",
  },
  {
    Admission_No: "AD9892426",
    Student_Name: "Susan",
    Student_Img: "student-09.jpg",
    Roll_No: "35004",
    English: "60",
    Spanish: "62",
    Physics: "65",
    Chemistry: "70",
    Maths: "72",
    Computer: "63",
    Env_Science: "78",
    Total: "470",
    Percent: "67",
    Grade: "B+",
  },
  {
    Admission_No: "AD9892425",
    Student_Name: "Richard",
    Student_Img: "student-10.jpg",
    Roll_No: "35003",
    English: "72",
    Spanish: "78",
    Physics: "85",
    Chemistry: "83",
    Maths: "86",
    Computer: "90",
    Env_Science: "92",
    Total: "586",
    Percent: "83",
    Grade: "A+",
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
      title: "Grade Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Grade Report",
      columns,
      data,
      rowSelection,
    };
  },
};
</script>
