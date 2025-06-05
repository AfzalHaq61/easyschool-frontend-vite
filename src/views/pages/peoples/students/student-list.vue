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
                  ><i class="ti ti-file-type-pdf me-2"></i>Export as PDF</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-xls me-2"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <router-link
              to="/students/add-student"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Student</router-link
            >
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Students List -->
      <div class="card">
        <table-filter></table-filter>
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
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'AdmissionNo'">
                  <div>
                    <router-link to="/students/student-details" class="link-primary">{{
                      record.AdmissionNo
                    }}</router-link>
                  </div>
                </template>
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="text-dark mb-0">
                        <router-link to="/students/student-details">{{
                          record.Name
                        }}</router-link>
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
                <template v-if="column.key === 'action'">
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                      ><i class="ti ti-brand-hipchat"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                      ><i class="ti ti-phone"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                      ><i class="ti ti-mail"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#add_fees_collect"
                      class="btn btn-light fs-12 fw-semibold me-3"
                      >Collect Fees</a
                    >
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots-vertical fs-14"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right p-3">
                        <li>
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/students/student-details"
                            ><i class="ti ti-menu me-2"></i>View Student</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/students/edit-student"
                            ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#login_detail"
                            ><i class="ti ti-lock me-2"></i>Login Details</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item rounded-1" href="javascript:void(0);"
                            ><i class="ti ti-toggle-right me-2"></i>Disable</a
                          >
                        </li>
                        <li>
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/students/student-promotion"
                            ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                            Student</router-link
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            ><i class="ti ti-trash-x me-2"></i>Delete</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
          <!-- /Student List -->
        </div>
      </div>
      <!-- /Students List -->
    </div>
  </div>
  <students-list-modal></students-list-modal>
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
    title: "Gender",
    dataIndex: "Gender",
    sorter: {
      compare: (a, b) => {
        a = a.Gender.toLowerCase();
        b = b.Gender.toLowerCase();
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
    title: "Date of Join",
    dataIndex: "DateofJoin",
    sorter: {
      compare: (a, b) => {
        a = a.DateofJoin.toLowerCase();
        b = b.DateofJoin.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DOB",
    dataIndex: "DOB",
    sorter: {
      compare: (a, b) => {
        a = a.DOB.toLowerCase();
        b = b.DOB.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    text: "center",
  },
];
const data = [
  {
    key: "1",
    AdmissionNo: "AD9892434",
    Image: "student-01.jpg",
    RollNo: "35013",
    Name: "Janet",
    Class: "III",
    Section: "A",
    Gender: "Female",
    Status: "Today",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "25 Mar 2024",
    DOB: "10 Jan 2015",
  },
  {
    key: "2",
    AdmissionNo: "AD9892433",
    Image: "student-02.jpg",
    RollNo: "35013",
    Name: "Joann",
    Class: "IV",
    Section: "B",
    Gender: "Male",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "18 Mar 2024",
    DOB: "19 Aug 2014",
  },
  {
    key: "3",
    AdmissionNo: "AD9892432",
    Image: "student-03.jpg",
    RollNo: "35011",
    Name: "Kathleen",
    Class: "II",
    Section: "A",
    Gender: "Female",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "14 Mar 2024",
    DOB: "05 Dec 2017",
  },
  {
    key: "4",
    AdmissionNo: "AD9892431",
    Image: "student-04.jpg",
    RollNo: "35010",
    Name: "Gifford",
    Class: "I",
    Section: "B",
    Gender: "Male",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "27 Feb 2024",
    DOB: "22 Mar 2018",
  },
  {
    key: "5",
    AdmissionNo: "AD9892430",
    Image: "student-05.jpg",
    RollNo: "35009",
    Name: "Lisa",
    Class: "II",
    Section: "B",
    Gender: "Female",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
    DateofJoin: "13 Feb 2024",
    DOB: "13 May 2017",
  },
  {
    key: "6",
    AdmissionNo: "AD9892429",
    Image: "student-06.jpg",
    RollNo: "35008",
    Name: "Ralph",
    Class: "III",
    Section: "B",
    Gender: "Male",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "11 Feb 2024",
    DOB: "20 Jun 2015",
  },
  {
    key: "7",
    AdmissionNo: "AD9892428",
    Image: "student-07.jpg",
    RollNo: "35007",
    Name: "Julie",
    Class: "V",
    Section: "A",
    Gender: "Female",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "24 Jan 2024",
    DOB: "18 Sep 2013",
  },
  {
    key: "8",
    AdmissionNo: "AD9892427",
    Image: "student-06.jpg",
    RollNo: "35006",
    Name: "Ryan",
    Class: "VI",
    Section: "A",
    Gender: "Male",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "19 Jan 2024",
    DOB: "26 Nov 2012",
  },
  {
    key: "9",
    AdmissionNo: "AD9892426",
    Image: "student-09.jpg",
    RollNo: "35005",
    Name: "Susan",
    Class: "VIII",
    Section: "B",
    Gender: "Female",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
    DateofJoin: "08 Jan 2024",
    DOB: "26 May 2010",
  },
  {
    key: "10",
    AdmissionNo: "AD9892425",
    Image: "student-10.jpg",
    RollNo: "35004",
    Name: "Richard",
    Class: "VII",
    Section: "B",
    Gender: "Male",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "22 Dec 2024",
    DOB: "06 Oct 2011",
  },
  {
    key: "11",
    AdmissionNo: "AD9892424",
    Image: "student-01.jpg",
    RollNo: "35003",
    Name: "Veronica",
    Class: "IX",
    Section: "A",
    Gender: "Female",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    DateofJoin: "15 Dec 2024",
    DOB: "27 Dec 2009",
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
      title: "Students List",
      text: "Dashboard",
      text1: "Peoples",
      text2: "All Students",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
