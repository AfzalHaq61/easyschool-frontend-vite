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
              data-bs-target="#add_exam"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Exam</a
            >
          </div>
        </div>
      </div>
      <div class="card">
        <exam-filter></exam-filter>
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
                            data-bs-target="#edit_exam"
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
        </div>
      </div>
    </div>
  </div>
  <exam-list-modal></exam-list-modal>
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
    title: "Exam Name",
    dataIndex: "ExamName",
    sorter: {
      compare: (a, b) => {
        a = a.ExamName.toLowerCase();
        b = b.ExamName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Exam Date",
    dataIndex: "ExamDate",
    sorter: {
      compare: (a, b) => {
        a = a.ExamDate.toLowerCase();
        b = b.ExamDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Start Time",
    dataIndex: "StartTime",
    sorter: {
      compare: (a, b) => {
        a = a.StartTime.toLowerCase();
        b = b.StartTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "End Time",
    dataIndex: "EndTime",
    sorter: {
      compare: (a, b) => {
        a = a.EndTime.toLowerCase();
        b = b.EndTime.toLowerCase();
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
    ID: "E140523",
    ExamName: "Week Test",
    ExamDate: "13 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
  },
  {
    key: "2",
    ID: "E140522",
    ExamName: "Mothly Test",
    ExamDate: "27 May 2024",
    StartTime: "09:30 AM",
    EndTime: "11:00 AM",
  },
  {
    key: "3",
    ID: "E140521",
    ExamName: "Chapter Wise Test",
    ExamDate: "05 Jun 2024",
    StartTime: "09:30 AM",
    EndTime: "10:30 AM",
  },
  {
    key: "4",
    ID: "E140520",
    ExamName: "Unit Test",
    ExamDate: "15 Jun 2024",
    StartTime: "10:30 AM",
    EndTime: "11:30 AM",
  },
  {
    key: "5",
    ID: "E140519",
    ExamName: "Progress Test",
    ExamDate: "20 Jun 2024",
    StartTime: "11:00 AM",
    EndTime: "12:00 PM",
  },
  {
    key: "6",
    ID: "E140518",
    ExamName: "Oral Test",
    ExamDate: "03 Jul 2024",
    StartTime: "12:30 PM",
    EndTime: "01:30 PM",
  },
  {
    key: "7",
    ID: "E140517",
    ExamName: "Semester Exam",
    ExamDate: "18 Jul 2024",
    StartTime: "10:30 AM",
    EndTime: "12:30 PM",
  },
  {
    key: "8",
    ID: "E140516",
    ExamName: "Quaterly Exam",
    ExamDate: "26 Aug 2024",
    StartTime: "09:00 AM",
    EndTime: "12:00 PM",
  },
  {
    key: "9",
    ID: "E140515",
    ExamName: "Half Yearly Exam",
    ExamDate: "15 Nov 2024",
    StartTime: "09:30 AM",
    EndTime: "12:30 PM",
  },
  {
    key: "10",
    ID: "E140514",
    ExamName: "Annual Exam",
    ExamDate: "10 Mar 2025",
    StartTime: "10:00 AM",
    EndTime: "01:00 PM",
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
      title: "Exam",
      text: "Dashboard",
      text1: "Academic",
      text2: "Exam",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
