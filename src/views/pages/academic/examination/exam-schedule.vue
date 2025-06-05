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
              data-bs-target="#add_exam_schedule"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Exam Schedule</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <exam-schedule-filter></exam-schedule-filter>
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
                <template v-if="column.key === 'Subject'">
                  <div>
                    <a href="javascript:void(0);" class="link-primary">{{
                      record.Subject
                    }}</a>
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
                            data-bs-target="#edit_exam_schedule"
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
  <exam-schedule-modal></exam-schedule-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Subject",
    dataIndex: "Subject",
    key: "Subject",
    sorter: {
      compare: (a, b) => {
        a = a.Subject.toLowerCase();
        b = b.Subject.toLowerCase();
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
    title: "Duration",
    dataIndex: "Duration",
    sorter: {
      compare: (a, b) => {
        a = a.Duration.toLowerCase();
        b = b.Duration.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Room No",
    dataIndex: "RoomNo",
    sorter: {
      compare: (a, b) => {
        a = a.RoomNo.toLowerCase();
        b = b.RoomNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Max Marks",
    dataIndex: "MaxMarks",
    sorter: {
      compare: (a, b) => {
        a = a.MaxMarks.toLowerCase();
        b = b.MaxMarks.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Min Marks",
    dataIndex: "MinMarks",
    sorter: {
      compare: (a, b) => {
        a = a.MinMarks.toLowerCase();
        b = b.MinMarks.toLowerCase();
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
    Subject: "English",
    ExamDate: "13 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "101",
    MaxMarks: "100",
    MinMarks: "35",
  },
  {
    key: "2",
    Subject: "Spanish",
    ExamDate: "14 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "104",
    MaxMarks: "100",
    MinMarks: "35",
  },
  {
    key: "3",
    Subject: "Physics",
    ExamDate: "15 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "103",
    MaxMarks: "100",
    MinMarks: "35",
  },
  {
    key: "4",
    Subject: "Chemistry",
    ExamDate: "16 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "105",
    MaxMarks: "100",
    MinMarks: "35",
  },
  {
    key: "5",
    Subject: "Maths",
    ExamDate: "17 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "106",
    MaxMarks: "100",
    MinMarks: "35",
  },
  {
    key: "6",
    Subject: "Computer",
    ExamDate: "18 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "102",
    MaxMarks: "100",
    MinMarks: "35",
  },
  {
    key: "7",
    Subject: "Env Science",
    ExamDate: "19 May 2024",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    Duration: "3 hrs",
    RoomNo: "107",
    MaxMarks: "100",
    MinMarks: "35",
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
      title: "Exam Schedule",
      text: "Dashboard",
      text1: "Academic",
      text2: "Exam Schedule",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
