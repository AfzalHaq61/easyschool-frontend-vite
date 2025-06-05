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
        </ul>
      </div>
      <div class="card">
        <exam-attendance-filter></exam-attendance-filter>
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
                  <div><span :class="record.English"></span></div>
                </template>
                <template v-if="column.key === 'Spanish'">
                  <div><span :class="record.Spanish"></span></div>
                </template>
                <template v-if="column.key === 'Physics'">
                  <div><span :class="record.Physics"></span></div>
                </template>
                <template v-if="column.key === 'Chemistry'">
                  <div><span :class="record.Chemistry"></span></div>
                </template>
                <template v-if="column.key === 'Maths'">
                  <div><span :class="record.Maths"></span></div>
                </template>
                <template v-if="column.key === 'Computer'">
                  <div><span :class="record.Computer"></span></div>
                </template>
                <template v-if="column.key === 'EnvScience'">
                  <div><span :class="record.EnvScience"></span></div>
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
    key: "Physics",
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
    key: "Computer",
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
    key: "EnvScience",
    sorter: {
      compare: (a, b) => {
        a = a.EnvScience.toLowerCase();
        b = b.EnvScience.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    key: "1",
    ID: "EA123794",
    StudentName: "Janet",
    Image: "student-01.jpg",
    RollNo: "35013",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "2",
    ID: "EA123793",
    StudentName: "Joann",
    Image: "student-02.jpg",
    RollNo: "35012",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-danger",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "3",
    ID: "EA123792",
    StudentName: "Kathleen",
    Image: "student-03.jpg",
    RollNo: "35011",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-danger",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "4",
    ID: "EA123791",
    StudentName: "Gifford",
    Image: "student-04.jpg",
    RollNo: "35010",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "5",
    ID: "EA123790",
    StudentName: "Lisa",
    Image: "student-05.jpg",
    RollNo: "35009",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-pending",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "6",
    ID: "EA123789",
    StudentName: "Ralph",
    Image: "student-06.jpg",
    RollNo: "35008",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "7",
    ID: "EA123788",
    StudentName: "Julie",
    Image: "student-07.jpg",
    RollNo: "35007",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-pending",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "8",
    ID: "EA123787",
    StudentName: "Ryan",
    Image: "student-08.jpg",
    RollNo: "35006",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-danger",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "9",
    ID: "EA123786",
    StudentName: "Susan",
    Image: "student-09.jpg",
    RollNo: "35004",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-danger",
    EnvScience: "attendance-range bg-success",
  },
  {
    key: "10",
    ID: "EA123785",
    StudentName: "Richard",
    Image: "student-10.jpg",
    RollNo: "35003",
    English: "attendance-range bg-success",
    Spanish: "attendance-range bg-success",
    Physics: "attendance-range bg-success",
    Chemistry: "attendance-range bg-success",
    Maths: "attendance-range bg-success",
    Computer: "attendance-range bg-success",
    EnvScience: "attendance-range bg-success",
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
      title: "Exam Attendance",
      text: "Dashboard",
      text1: "Academic",
      text2: "Exam Attendance",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
