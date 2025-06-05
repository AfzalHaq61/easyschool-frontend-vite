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
      <div class="card">
        <!-- Table Filter -->
        <student-report-filter></student-report-filter>
        <!-- /Table Filter -->
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
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Student_Img}`)"
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
                <template v-if="column.key === 'Parent'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/${record.Parent_Img}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Parent }}</a>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Status'">
                  <span
                    :class="record.Status_Class"
                    class="d-inline-flex align-items-center"
                    ><i class="ti ti-circle-filled fs-5 me-1"></i
                    >{{ record.Status }}</span
                  >
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
    title: "Roll No",
    dataIndex: "Roll_No",
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
    title: "Date Join",
    dataIndex: "Date_Join",
    key: "Date_Join",
    sorter: {
      compare: (a, b) => {
        a = a.Date_Join.toLowerCase();
        b = b.Date_Join.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DOB",
    dataIndex: "DOB",
    key: "DOB",
    sorter: {
      compare: (a, b) => {
        a = a.DOB.toLowerCase();
        b = b.DOB.toLowerCase();
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
];

const data = [
  {
    Admission_No: "AD9892434",
    Roll_No: "35013",
    Name: "Janet",
    Student_Img: "student-01.jpg",
    Class: "I",
    Section: "A",
    Gender: "Female",
    Parent: "Thomas",
    Parent_Img: "profiles/avatar-02.jpg",
    Date_Join: "25 Mar 2024",
    DOB: "10 Jan 2015",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892433",
    Roll_No: "35012",
    Name: "Joann",
    Student_Img: "student-02.jpg",
    Class: "I",
    Section: "A",
    Gender: "Male",
    Parent: "Marquita",
    Parent_Img: "profiles/avatar-01.jpg",
    Date_Join: "18 Mar 2024",
    DOB: "19 Aug 2014",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892432",
    Roll_No: "35011",
    Name: "Kathleen",
    Student_Img: "student-03.jpg",
    Class: "I",
    Section: "A",
    Gender: "Female",
    Parent: "Johnson",
    Parent_Img: "parents/parent-03.jpg",
    Date_Join: "14 Mar 2024",
    DOB: "05 Dec 2017",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892431",
    Roll_No: "35010",
    Name: "Gifford",
    Student_Img: "student-04.jpg",
    Class: "I",
    Section: "A",
    Gender: "Male",
    Parent: "Claudia",
    Parent_Img: "parents/parent-04.jpg",
    Date_Join: "27 Feb 2024",
    DOB: "22 Mar 2018",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892430",
    Roll_No: "35009",
    Name: "Lisa",
    Student_Img: "student-05.jpg",
    Class: "I",
    Section: "A",
    Gender: "Female",
    Parent: "Arthur",
    Parent_Img: "parents/parent-05.jpg",
    Date_Join: "13 Feb 2024",
    DOB: "13 May 2017",
    Status: "Inactive",
    Status_Class: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892429",
    Roll_No: "35008",
    Name: "Ralph",
    Student_Img: "student-06.jpg",
    Class: "I",
    Section: "A",
    Gender: "Male",
    Parent: "Colleen",
    Parent_Img: "parents/parent-06.jpg",
    Date_Join: "11 Feb 2024",
    DOB: "20 Jun 2015",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892428",
    Roll_No: "35007",
    Name: "Julie",
    Student_Img: "student-07.jpg",
    Class: "I",
    Section: "A",
    Gender: "Female",
    Parent: "Robert",
    Parent_Img: "parents/parent-07.jpg",
    Date_Join: "24 Jan 2024",
    DOB: "18 Sep 2013",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892427",
    Roll_No: "35006",
    Name: "Ryan",
    Student_Img: "student-08.jpg",
    Class: "I",
    Section: "A",
    Gender: "Male",
    Parent: "Jessie",
    Parent_Img: "parents/parent-08.jpg",
    Date_Join: "19 Jan 2024",
    DOB: "26 Nov 2012",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892426",
    Roll_No: "35005",
    Name: "Susan",
    Student_Img: "student-09.jpg",
    Class: "I",
    Section: "A",
    Gender: "Female",
    Parent: "Michael",
    Parent_Img: "parents/parent-09.jpg",
    Date_Join: "08 Jan 2024",
    DOB: "26 May 2010",
    Status: "Inactive",
    Status_Class: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892425",
    Roll_No: "35004",
    Name: "Richard",
    Student_Img: "student-10.jpg",
    Class: "I",
    Section: "A",
    Gender: "Male",
    Parent: "Mary",
    Parent_Img: "parents/parent-10.jpg",
    Date_Join: "22 Dec 2024",
    DOB: "06 Oct 2011",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
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
      title: "Student Report",
      text: "Dashboard",
      text1: "Report",
      text2: "Student Report",
      columns,
      data,
      rowSelection,
    };
  },
};
</script>
