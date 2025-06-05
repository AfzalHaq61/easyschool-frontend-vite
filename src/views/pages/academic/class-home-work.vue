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
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_home_work"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Home Work</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <class-work-filter></class-work-filter>
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
                <template v-if="column.key === 'CreatedBy'">
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
                          record.CreatedBy
                        }}</router-link>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="d-flex align-items-center">
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
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_home_work"
                            ><i class="ti ti-edit-circle me-2"></i>Edit</a
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
    </div>
  </div>
  <class-work-modal></class-work-modal>
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
    title: "Homework Date",
    dataIndex: "HomeworkDate",
    sorter: {
      compare: (a, b) => {
        a = a.HomeworkDate.toLowerCase();
        b = b.HomeworkDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Submission Date",
    dataIndex: "SubmissionDate",
    sorter: {
      compare: (a, b) => {
        a = a.SubmissionDate.toLowerCase();
        b = b.SubmissionDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created By",
    dataIndex: "CreatedBy",
    key: "CreatedBy",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedBy.toLowerCase();
        b = b.CreatedBy.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    ID: "HW1783929",
    Class: "I",
    Section: "A",
    Subject: "English",
    HomeworkDate: "10 May 2024",
    SubmissionDate: "12 May 2024",
    Image: "student-01.jpg",
    CreatedBy: "Janet",
  },
  {
    key: "2",
    ID: "HW1783928",
    Class: "I",
    Section: "B",
    Subject: "Math",
    HomeworkDate: "11 May 2024",
    SubmissionDate: "13 May 2024",
    Image: "student-02.jpg",
    CreatedBy: "Joann",
  },
  {
    key: "3",
    ID: "HW1783927",
    Class: "II",
    Section: "A",
    Subject: "Physics",
    HomeworkDate: "12 May 2024",
    SubmissionDate: "14 May 2024",
    Image: "student-03.jpg",
    CreatedBy: "Kathleen",
  },
  {
    key: "4",
    ID: "HW1783926",
    Class: "II",
    Section: "B",
    Subject: "Chemsitry",
    HomeworkDate: "13 May 2024",
    SubmissionDate: "15 May 2024",
    Image: "student-04.jpg",
    CreatedBy: "Gifford",
  },
  {
    key: "5",
    ID: "HW1783925",
    Class: "II",
    Section: "C",
    Subject: "Biology",
    HomeworkDate: "14 May 2024",
    SubmissionDate: "16 May 2024",
    Image: "student-05.jpg",
    CreatedBy: "Lisa",
  },
  {
    key: "6",
    ID: "HW1783924",
    Class: "III",
    Section: "A",
    Subject: "Higher Math",
    HomeworkDate: "15 May 2024",
    SubmissionDate: "17 May 2024",
    Image: "student-06.jpg",
    CreatedBy: "Ralph",
  },
  {
    key: "7",
    ID: "HW1783923",
    Class: "III",
    Section: "B",
    Subject: "Information Technology",
    HomeworkDate: "16 May 2024",
    SubmissionDate: "18 May 2024",
    Image: "student-07.jpg",
    CreatedBy: "Julie",
  },
  {
    key: "8",
    ID: "HW1783922",
    Class: "IV",
    Section: "A",
    Subject: "Moral Education",
    HomeworkDate: "17 May 2024",
    SubmissionDate: "19 May 2024",
    Image: "student-08.jpg",
    CreatedBy: "Ryan",
  },
  {
    key: "9",
    ID: "HW1783921",
    Class: "IV",
    Section: "B",
    Subject: "Finance",
    HomeworkDate: "18 May 2024",
    SubmissionDate: "20 May 2024",
    Image: "student-09.jpg",
    CreatedBy: "Susan",
  },
  {
    key: "10",
    ID: "HW1783920",
    Class: "V",
    Section: "A",
    Subject: "Economics",
    HomeworkDate: "19 May 2024",
    SubmissionDate: "21 May 2024",
    Image: "student-10.jpg",
    CreatedBy: "Richard",
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
      title: "Class Work",
      text: "Dashboard",
      text1: "Academic",
      text2: "Class Work",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
