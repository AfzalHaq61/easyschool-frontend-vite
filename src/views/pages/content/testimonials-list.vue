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
              data-bs-target="#add_testimonials"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Testimonials</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <testimonials-filter></testimonials-filter>
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
                <template v-if="column.key === 'Author'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Author }}</a>
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
                            data-bs-target="#edit_testimonials"
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
  <testimonials-modal></testimonials-modal>
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
    title: "Author",
    dataIndex: "Author",
    key: "Author",
    sorter: {
      compare: (a, b) => {
        a = a.Author.toLowerCase();
        b = b.Author.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Content",
    dataIndex: "Content",
    sorter: {
      compare: (a, b) => {
        a = a.Content.toLowerCase();
        b = b.Content.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date Added",
    dataIndex: "DateAdded",
    sorter: {
      compare: (a, b) => {
        a = a.DateAdded.toLowerCase();
        b = b.DateAdded.toLowerCase();
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
    ID: "T346285",
    Author: "Thomas",
    Role: "Parent",
    Content:
      "I'm impressed with how easy it is to track my child's progress using this system.",
    DateAdded: "25 Apr 2024",
    Image: "parents/parent-01.jpg",
  },
  {
    key: "2",
    ID: "T346284",
    Author: "Teresa",
    Role: "Teacher",
    Content: "The gradebook feature has streamlined my grading process”",
    DateAdded: "28 Apr 2024",
    Image: "teachers/teacher-01.jpg",
  },
  {
    key: "3",
    ID: "T346283",
    Author: "Veronica",
    Role: "Student",
    Content:
      "I find the timetable feature very helpful in keeping track of my classes and assignments.",
    DateAdded: "02 May 2024",
    Image: "students/student-11.jpg",
  },
  {
    key: "4",
    ID: "T346282",
    Author: "Kevin",
    Role: "Admin",
    Content:
      "Our school has seen a significant improvement in efficiency since implementing this system.",
    DateAdded: "14 May 2024",
    Image: "profiles/avatar-27.jpg",
  },
  {
    key: "5",
    ID: "T346281",
    Author: "Claudia",
    Role: "Parent",
    Content:
      "The communication tools have made it much easier to stay informed about school events”",
    DateAdded: "20 May 2024",
    Image: "parents/parent-04.jpg",
  },
  {
    key: "6",
    ID: "T346280",
    Author: "Hellana",
    Role: "Teacher",
    Content:
      "I appreciate the support provided by the technical team in customizing the system”",
    DateAdded: "05 Jun 2024",
    Image: "teachers/teacher-03.jpg",
  },
  {
    key: "7",
    ID: "T346279",
    Author: "Robert",
    Role: "Parent",
    Content:
      "The online payment system has made fee payments hassle-free.Great addition to the system!",
    DateAdded: "16 Jun 2024",
    Image: "parents/parent-07.jpg",
  },
  {
    key: "8",
    ID: "T346278",
    Author: "Kevin",
    Role: "Admin",
    Content:
      "The system's user interface is intuitive and easy to navigate,even for non-technical users.",
    DateAdded: "21 Jun 2024",
    Image: "profiles/avatar-27.jpg",
  },
  {
    key: "9",
    ID: "T346277",
    Author: "Michael",
    Role: "Parent",
    Content:
      "The parent-teacher communication portal has facilitated open dialogue and collaboration”",
    DateAdded: "10 Jul 2024",
    Image: "parents/parent-09.jpg",
  },
  {
    key: "10 q",
    ID: "T346276",
    Author: "Aaron",
    Role: "Teacher",
    Content:
      "The system's lesson planning tools have helped me organize and deliver more effective lessons.",
    DateAdded: "12 Jul 2024",
    Image: "teachers/teacher-06.jpg",
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
      title: "Testimonials",
      text: "Dashboard",
      text1: "Content",
      text2: "Testimonials",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
