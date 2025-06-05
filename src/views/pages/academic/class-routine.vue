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
              data-bs-target="#add_class_routine"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Class Routine</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <class-routine-filter></class-routine-filter>
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
                            data-bs-target="#edit_class_routine"
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
        <!-- /Student List -->
      </div>
    </div>
  </div>
  <class-routine-modal></class-routine-modal>
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
    title: "Day",
    dataIndex: "Day",
    sorter: {
      compare: (a, b) => {
        a = a.Day.toLowerCase();
        b = b.Day.toLowerCase();
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
    title: "Class Room",
    dataIndex: "ClassRoom",
    sorter: {
      compare: (a, b) => {
        a = a.ClassRoom.toLowerCase();
        b = b.ClassRoom.toLowerCase();
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
    ID: "RT167648",
    Class: "I",
    Section: "A",
    Teacher: "Erickson",
    Subject: "English",
    Day: "Monday",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    ClassRoom: "101",
  },
  {
    key: "2",
    ID: "RT167647",
    Class: "I",
    Section: "B",
    Teacher: "Mori",
    Subject: "Math",
    Day: "Tuesday",
    StartTime: "10:45 AM",
    EndTime: "12:00 PM",
    ClassRoom: "102",
  },
  {
    key: "3",
    ID: "RT167646",
    Class: "II",
    Section: "A",
    Teacher: "Joseph",
    Subject: "Physics",
    Day: "Wednesday",
    StartTime: "12:00 PM",
    EndTime: "01:15 PM",
    ClassRoom: "103",
  },
  {
    key: "4",
    ID: "RT167645",
    Class: "II",
    Section: "B",
    Teacher: "James",
    Subject: "Chemsitry",
    Day: "Thursday",
    StartTime: "01:15 PM",
    EndTime: "02:30 PM",
    ClassRoom: "104",
  },
  {
    key: "5",
    ID: "RT167644",
    Class: "II",
    Section: "C",
    Teacher: "Biology",
    Subject: "Biology",
    Day: "Friday",
    StartTime: "02:30 PM",
    EndTime: "03:45 PM",
    ClassRoom: "105",
  },
  {
    key: "6",
    ID: "RT167643",
    Class: "III",
    Section: "A",
    Teacher: "Teresa",
    Subject: "Higher Math",
    Day: "Saturday",
    StartTime: "03:45 PM",
    EndTime: "05:00 PM",
    ClassRoom: "106",
  },
  {
    key: "7",
    ID: "RT167642",
    Class: "III",
    Section: "B",
    Teacher: "James",
    Subject: "Information Technology",
    Day: "Monday",
    StartTime: "09:30 AM",
    EndTime: "10:45 AM",
    ClassRoom: "107",
  },
  {
    key: "8",
    ID: "RT167641",
    Class: "IV",
    Section: "A",
    Teacher: "Hendrita",
    Subject: "Moral Education",
    Day: "Tuesday",
    StartTime: "10:45 AM",
    EndTime: "12:00 PM",
    ClassRoom: "108",
  },
  {
    key: "9",
    ID: "RT167640",
    Class: "IV",
    Section: "B",
    Teacher: "Morgan",
    Subject: "Finance",
    Day: "Wednesday",
    StartTime: "12:00 PM",
    EndTime: "01:15 PM",
    ClassRoom: "109",
  },
  {
    key: "10",
    ID: "RT167639",
    Class: "V",
    Section: "A",
    Teacher: "Ramsey",
    Subject: "Economics",
    Day: "Thursday",
    StartTime: "01:15 PM",
    EndTime: "02:30 PM",
    ClassRoom: "110",
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
      title: "Class Routine",
      text: "Dashboard",
      text1: "Academic",
      text2: "Class Routine",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
