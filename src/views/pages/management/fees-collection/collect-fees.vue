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
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_fees_collect"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Fees</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <collect-filter></collect-filter>
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
                <template v-if="column.key === 'AdmNo'">
                  <div>
                    <a href="javascript:void(0);" class="text-primary">{{
                      record.AdmNo
                    }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'Student'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.StudentImage}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/students/student-details">{{
                          record.Student
                        }}</router-link>
                      </p>
                      <span class="fs-12">{{ record.StudentClass }}</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Parent'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/parents/${record.ParentImage}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/students/student-details">{{
                          record.Parent
                        }}</router-link>
                      </p>
                      <span class="fs-12">{{ record.ParentClass }}</span>
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
                <template v-if="column.key === 'Action'">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#add_fees_collect"
                    >{{ record.View }}</a
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
  <collect-fees-modal></collect-fees-modal>
</template>
<script>
const columns = [
  {
    title: "Adm No",
    dataIndex: "AdmNo",
    key: "AdmNo",
    sorter: {
      compare: (a, b) => {
        a = a.AdmNo.toLowerCase();
        b = b.AdmNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Roll No",
    dataIndex: "RollNo",
    sorter: {
      compare: (a, b) => {
        a = a.RollNo.toLowerCase();
        b = b.RollNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Student",
    dataIndex: "Student",
    key: "Student",
    sorter: {
      compare: (a, b) => {
        a = a.Student.toLowerCase();
        b = b.Student.toLowerCase();
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
    title: "Section",
    dataIndex: "Section",
    sorter: {
      compare: (a, b) => {
        a = a.Section.toLowerCase();
        b = b.Section.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Parent",
    dataIndex: "Parent",
    key: "Parent",
    sorter: {
      compare: (a, b) => {
        a = a.Parent.toLowerCase();
        b = b.Parent.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount($)",
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
    title: "Last Date",
    dataIndex: "LastDate",
    sorter: {
      compare: (a, b) => {
        a = a.LastDate.toLowerCase();
        b = b.LastDate.toLowerCase();
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
    title: "Action",
    dataIndex: "view",
    key: "Action",
    sorter: {
      compare: (a, b) => {
        a = a.Action.toLowerCase();
        b = b.Action.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    key: "1",
    AdmNo: "AD124556",
    RollNo: "55365",
    Student: "Janet",
    StudentClass: "III, A",
    Class: "III",
    Section: "A",
    StudentImage: "student-01.jpg",
    ParentImage: "parent-01.jpg",
    Parent: "Thomas",
    ParentClass: "Added on 25 Mar 2024",
    Email: "thomas@example.com",
    Amount: "2000",
    LastDate: "15 May 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    Action: "",
    ActionClass: "",
    View: "View Details",
  },
  {
    key: "2",
    AdmNo: "AD124555",
    RollNo: "12454",
    Student: "Joann",
    StudentClass: "IV, B",
    Class: "IV",
    Section: "B",
    StudentImage: "student-02.jpg",
    ParentImage: "parent-02.jpg",
    Parent: "Marquita",
    ParentClass: "Added on 18 Mar 2024",
    Email: "marquita@example.com",
    Amount: "156",
    LastDate: "15 May 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    Action: "",
    ActionClass: "",
    View: "View Details",
  },
  {
    key: "3",
    AdmNo: "AD124554",
    RollNo: "65454",
    Student: "Kathleen",
    StudentClass: "III, A",
    Class: "III",
    Section: "A",
    StudentImage: "student-03.jpg",
    ParentImage: "parent-03.jpg",
    Parent: "Johnson",
    ParentClass: "Added on 14 Mar 2024",
    Email: "johnson@example.com",
    Amount: "645",
    LastDate: "15 May 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
    Action: "",
    ActionClass: "",
    View: "View Details",
  },
  {
    key: "4",
    AdmNo: "AD124553",
    RollNo: "78787",
    Student: "Gifford",
    StudentClass: "I, B",
    Class: "I",
    Section: "B",
    StudentImage: "student-04.jpg",
    ParentImage: "parent-04.jpg",
    Parent: "Claudia",
    ParentClass: "Added on 27 Feb 2024",
    Email: "claudia@example.com",
    Amount: "456",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
  },
  {
    key: "5",
    AdmNo: "AD124552",
    RollNo: "31564",
    Student: "Lisa",
    StudentClass: "II, B",
    Class: "II",
    Section: "B",
    StudentImage: "student-05.jpg",
    ParentImage: "parent-05.jpg",
    Parent: "Arthur",
    ParentClass: "Added on 11 Feb 2024",
    Email: "arthur@example.com",
    Amount: "645",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
  },
  {
    key: "6",
    AdmNo: "AD124551",
    RollNo: "78456",
    Student: "Ralph",
    StudentClass: "III, B",
    Class: "III",
    Section: "B",
    StudentImage: "student-06.jpg",
    ParentImage: "parent-06.jpg",
    Parent: "Colleen",
    ParentClass: "Added on 24 Jan 2024",
    Email: "colleen@example.com",
    Amount: "156",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
  },
  {
    key: "7",
    AdmNo: "AD124550",
    RollNo: "67897",
    Student: "Julie",
    StudentClass: "V, A",
    Class: "III",
    Section: "B",
    StudentImage: "student-07.jpg",
    ParentImage: "parent-07.jpg",
    Parent: "Robert",
    ParentClass: "Added on 19 Jan 2024",
    Email: "colleen@example.com",
    Amount: "156",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
  },
  {
    key: "8",
    AdmNo: "P124549",
    RollNo: "47895",
    Student: "Ryan",
    StudentClass: "VI, A",
    Class: "VI",
    Section: "A",
    StudentImage: "student-08.jpg",
    ParentImage: "parent-08.jpg",
    Parent: "Jessie",
    ParentClass: "Added on 08 Jan 2024",
    Email: "jessie@example.com",
    Amount: "645",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
  },
  {
    key: "9",
    AdmNo: "AD124548",
    RollNo: "65547",
    Student: "Susan",
    StudentClass: "VIII, B",
    Class: "VIII",
    Section: "B",
    StudentImage: "student-09.jpg",
    ParentImage: "parent-09.jpg",
    Parent: "Michael",
    ParentClass: "Added on 22 Dec 2023",
    Email: "michael@example.com",
    Amount: "456",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "View Details",
  },
  {
    key: "10",
    AdmNo: "AD124548",
    RollNo: "65547",
    Student: "Richard",
    StudentClass: "Richard",
    Class: "VII",
    Section: "B",
    StudentImage: "student-10.jpg",
    ParentImage: "parent-10.jpg",
    Parent: "Mary",
    ParentClass: "Added on 15 Dec 2024",
    Email: "mary@example.com",
    Amount: "456",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
  },
  {
    key: "11",
    AdmNo: "AD124548",
    RollNo: "65547",
    Student: "Susan",
    StudentClass: "VIII, B",
    Class: "VIII",
    Section: "B",
    StudentImage: "student-09.jpg",
    ParentImage: "parent-09.jpg",
    Parent: "Michael",
    ParentClass: "Added on 22 Dec 2023",
    Email: "michael@example.com",
    Amount: "456",
    LastDate: "15 May 2024",
    Status: "Unpaid",
    StatusClass: "badge badge-soft-danger",
    Action: "table-cal-icon",
    ActionClass: "ti ti-calendar-time",
    View: "Collect Fees",
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
      title: "Collect Fees",
      text: "Dashboard",
      text1: "Management",
      text2: "Collect Fees",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
