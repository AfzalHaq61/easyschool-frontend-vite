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
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_holiday"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Holiday</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <hostel-filter></hostel-filter>
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
                  <span class="badge badge-soft-success d-inline-flex align-items-center"
                    ><i class="ti ti-circle-filled fs-5 me-1"></i
                    >{{ record.Status }}</span
                  >
                </template>
                <template v-if="column.key === 'action'">
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="action-icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <ul>
                        <li>
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_holiday"
                            ><i class="ti ti-edit-circle"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            ><i class="ti ti-trash-x"></i> Delete</a
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
  <holiday-modal></holiday-modal>
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
    title: "Holiday Title",
    dataIndex: "HolidayTitle",
    sorter: {
      compare: (a, b) => {
        a = a.HolidayTitle.toLowerCase();
        b = b.HolidayTitle.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
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
    ID: "H752762",
    HolidayTitle: "New Year",
    Date: "01 Jan 2024",
    Description: "First day of the new year",
    Status: "Active",
  },
  {
    key: "2",
    ID: "H752761",
    HolidayTitle: "Martin Luther King Jr. Day",
    Date: "15 Jan 2024",
    Description: "Celebrating the civil rights leader",
    Status: "Active",
  },
  {
    key: "3",
    ID: "H752760",
    HolidayTitle: "Presidents' Day",
    Date: "19 Feb 2024",
    Description: "Honoring past US Presidents",
    Status: "Active",
  },
  {
    key: "4",
    ID: "H752759",
    HolidayTitle: "Good Friday",
    Date: "29 Mar 2024",
    Description: "Holiday before Easter",
    Status: "Active",
  },
  {
    key: "5",
    ID: "H752758",
    HolidayTitle: "Easter Monday",
    Date: "01 Apr 2024",
    Description: "Holiday after Easter",
    Status: "Active",
  },
  {
    key: "6",
    ID: "H752757",
    HolidayTitle: "Memorial Day",
    Date: "27 May 2024",
    Description: "Honors military personnel",
    Status: "Active",
  },
  {
    key: "7",
    ID: "H752756",
    HolidayTitle: "Independence Day",
    Date: "04 Jul 2024",
    Description: "Celebrates Independence",
    Status: "Active",
  },
  {
    key: "8",
    ID: "H752755",
    HolidayTitle: "Labor Day",
    Date: "02 Sep 2024",
    Description: "Honors working people",
    Status: "Active",
  },
  {
    key: "9",
    ID: "H752754",
    HolidayTitle: "Veterans Day",
    Date: "11 Nov 2024",
    Description: "Honors military veterans",
    Status: "Active",
  },
  {
    key: "10",
    ID: "H752753",
    HolidayTitle: "Christmas Day",
    Date: "25 Dec 2024",
    Description: "Celebration of Christmas",
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
      title: "Holidays",
      text: "Dashboard",
      text1: "HRM",
      text2: "Holidays",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
