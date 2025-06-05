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
            <a
              href="javascript:void(0);"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_class"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Class</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <classes-filter></classes-filter>
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
                            data-bs-target="#edit_class"
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
  <classes-list-modal></classes-list-modal>
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
    title: "No of Students",
    dataIndex: "NoofStudents",
    sorter: {
      compare: (a, b) => {
        a = a.NoofStudents.toLowerCase();
        b = b.NoofStudents.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No of Subjects",
    dataIndex: "NoofSubjects",
    sorter: {
      compare: (a, b) => {
        a = a.NoofSubjects.toLowerCase();
        b = b.NoofSubjects.toLowerCase();
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
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    ID: "C138038",
    Class: "I",
    Section: "A",
    NoofStudents: "30",
    NoofSubjects: "3",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "2",
    ID: "C138037",
    Class: "I",
    Section: "B",
    NoofStudents: "25",
    NoofSubjects: "3",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "3",
    ID: "C138036",
    Class: "II",
    Section: "A",
    NoofStudents: "40",
    NoofSubjects: "3",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "4",
    ID: "C138035",
    Class: "II",
    Section: "B",
    NoofStudents: "35",
    NoofSubjects: "3",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "5",
    ID: "C138034",
    Class: "II",
    Section: "C",
    NoofStudents: "25",
    NoofSubjects: "3",
    StatusClass: "badge badge-soft-danger",
    Status: "Inactive",
  },
  {
    key: "6",
    ID: "C138033",
    Class: "III",
    Section: "A",
    NoofStudents: "30",
    NoofSubjects: "3",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "7",
    ID: "C138032",
    Class: "III",
    Section: "B",
    NoofStudents: "25",
    NoofSubjects: "5",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "8",
    ID: "C138031",
    Class: "IV",
    Section: "A",
    NoofStudents: "20",
    NoofSubjects: "5",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
  },
  {
    key: "9",
    ID: "C138030",
    Class: "IV",
    Section: "B",
    NoofStudents: "30",
    NoofSubjects: "5",
    StatusClass: "badge badge-soft-danger",
    Status: "Inactive",
  },
  {
    key: "10",
    ID: "C138029",
    Class: "V",
    Section: "A",
    NoofStudents: "35",
    NoofSubjects: "5",
    StatusClass: "badge badge-soft-success",
    Status: "Active",
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
      title: "Classes List",
      text: "Dashboard",
      text1: "Classes",
      text2: "All Classes",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
