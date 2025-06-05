<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
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
        <exam-result-filter></exam-result-filter>
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
                <template v-if="column.key === 'AdmissionNo'">
                  <div>
                    <a href="javascript:void(0);" class="link-primary">{{
                      record.AdmissionNo
                    }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'StudentName'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/students/student-details">{{
                          record.StudentName
                        }}</router-link>
                      </p>
                      <span class="fs-12">Roll No : {{ record.RollNo }}</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'English'">
                  <td>
                    <span :class="record.TextClass1">{{ record.English }}</span>
                  </td>
                </template>
                <template v-if="column.key === 'Spanish'">
                  <td>
                    <span :class="record.TextClass2">{{ record.Spanish }}</span>
                  </td>
                </template>
                <template v-if="column.key === 'Chemistry'">
                  <td>
                    <span :class="record.TextClass3">{{ record.Chemistry }}</span>
                  </td>
                </template>
                <template v-if="column.key === 'Maths'">
                  <td>
                    <span :class="record.TextClass4">{{ record.Maths }}</span>
                  </td>
                </template>
                <template v-if="column.key === 'Result'">
                  <span
                    :class="record.StatusClass"
                    class="d-inline-flex align-items-center"
                    ><i class="ti ti-circle-filled fs-5 me-1"></i
                    >{{ record.Status }}</span
                  >
                </template>
              </template>
            </a-table>
          </div>
        </div>
        <!-- /Student List -->
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
    title: "Admission No",
    dataIndex: "AdmissionNo",
    key: "AdmissionNo",
    sorter: {
      compare: (a, b) => {
        a = a.AdmissionNo.toLowerCase();
        b = b.AdmissionNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Student Name",
    dataIndex: "StudentName",
    key: "StudentName",
    sorter: {
      compare: (a, b) => {
        a = a.StudentName.toLowerCase();
        b = b.StudentName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "English",
    dataIndex: "English",
    key: "English",
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
    key: "Spanish",
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
    key: "Chemistry",
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
    key: "Maths",
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
    dataIndex: "EnvScience",
    sorter: {
      compare: (a, b) => {
        a = a.EnvScience.toLowerCase();
        b = b.EnvScience.toLowerCase();
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
    title: "Percent(%)",
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
  {
    title: "Result",
    dataIndex: "Result",
    key: "Result",
    sorter: {
      compare: (a, b) => {
        a = a.Result.toLowerCase();
        b = b.Result.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    key: "1",
    AdmissionNo: "AD9892434",
    StudentName: "Janet",
    Image: "student-01.jpg",
    RollNo: "35013",
    English: "95",
    Spanish: "93",
    Physics: "88",
    Chemistry: "90",
    Maths: "85",
    Computer: "98",
    EnvScience: "95",
    Total: "644",
    Percent: "92",
    Grade: "O",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "2",
    AdmissionNo: "AD9892433",
    StudentName: "Joann",
    Image: "student-02.jpg",
    RollNo: "35012",
    English: "30",
    Spanish: "35",
    Physics: "36",
    Chemistry: "28",
    Maths: "38",
    Computer: "40",
    EnvScience: "37",
    Total: "244",
    Percent: "34",
    Grade: "F",
    Result: "Fail",
    StatusClass: "badge badge-soft-danger",
    TextClass1: "text-danger",
    TextClass2: "",
    TextClass3: "text-danger",
    TextClass4: "",
  },
  {
    key: "3",
    AdmissionNo: "AD9892432",
    StudentName: "Kathleen",
    Image: "student-03.jpg",
    RollNo: "35011",
    English: "70",
    Spanish: "80",
    Physics: "85",
    Chemistry: "78",
    Maths: "82",
    Computer: "83",
    EnvScience: "80",
    Total: "558",
    Percent: "79",
    Grade: "A",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "4",
    AdmissionNo: "AD9892431",
    StudentName: "Gifford",
    Image: "student-04.jpg",
    RollNo: "35010",
    English: "60",
    Spanish: "68",
    Physics: "65",
    Chemistry: "70",
    Maths: "67",
    Computer: "72",
    EnvScience: "75",
    Total: "477",
    Percent: "68",
    Grade: "B+",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "5",
    AdmissionNo: "AD9892430",
    StudentName: "Lisa",
    Image: "student-05.jpg",
    RollNo: "35009",
    English: "36",
    Spanish: "30",
    Physics: "40",
    Chemistry: "38",
    Maths: "50",
    Computer: "48",
    EnvScience: "43",
    Total: "285",
    Percent: "40",
    Grade: "F",
    Result: "Fail",
    StatusClass: "badge badge-soft-danger",
    TextClass1: "",
    TextClass2: "text-danger",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "6",
    AdmissionNo: "AD9892429",
    StudentName: "Ralph",
    Image: "student-06.jpg",
    RollNo: "35008",
    English: "43",
    Spanish: "50",
    Physics: "62",
    Chemistry: "70",
    Maths: "65",
    Computer: "58",
    EnvScience: "60",
    Total: "408",
    Percent: "58",
    Grade: "B",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "7",
    AdmissionNo: "AD9892428",
    StudentName: "JulieRoll No : 35007",
    Image: "student-07.jpg",
    English: "72",
    Spanish: "80",
    Physics: "75",
    Chemistry: "78",
    Maths: "84",
    Computer: "87",
    EnvScience: "76",
    Total: "552",
    Percent: "78",
    Grade: "A",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "8",
    AdmissionNo: "AD9892427",
    StudentName: "Ryan",
    Image: "student-08.jpg",
    RollNo: "35006",
    English: "40",
    Spanish: "48",
    Physics: "42",
    Chemistry: "47",
    Maths: "32",
    Computer: "58",
    EnvScience: "50",
    Total: "317",
    Percent: "45",
    Grade: "F",
    Result: "Fail",
    StatusClass: "badge badge-soft-danger",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "text-danger",
  },
  {
    key: "9",
    AdmissionNo: "AD9892426",
    StudentName: "Susan",
    Image: "student-09.jpg",
    RollNo: "35004",
    English: "60",
    Spanish: "62",
    Physics: "65",
    Chemistry: "70",
    Maths: "72",
    Computer: "63",
    EnvScience: "78",
    Total: "470",
    Percent: "67",
    Grade: "B+",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
  },
  {
    key: "10",
    AdmissionNo: "AD9892425",
    StudentName: "Richard",
    Image: "student-10.jpg",
    RollNo: "35003",
    English: "72",
    Spanish: "78",
    Physics: "85",
    Chemistry: "83",
    Maths: "86",
    Computer: "90",
    EnvScience: "92",
    Total: "586",
    Percent: "83",
    Grade: "A+",
    Result: "Pass",
    StatusClass: "badge badge-soft-success",
    TextClass1: "",
    TextClass2: "",
    TextClass3: "",
    TextClass4: "",
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
      title: "Exam Result",
      text: "Dashboard",
      text1: "Academic",
      text2: "Exam Result",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
