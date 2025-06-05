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
              data-bs-target="#add_role"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Role</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
        >
          <h4 class="mb-3">Roles & Permissions List</h4>
          <div class="d-flex align-items-center flex-wrap">
            <div class="input-icon-start mb-3 me-2 position-relative">
              <span class="icon-addon">
                <i class="ti ti-calendar"></i>
              </span>
              <input
                type="text"
                class="form-control date-range bookingrange"
                placeholder="Select"
                value="Academic Year : 2024 / 2025"
                ref="dateRangeInput"
              />
            </div>
            <div class="dropdown mb-3">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
              </a>
              <ul class="dropdown-menu p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Ascending
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Descending
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Recently Viewed
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Recently Added
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                <template v-if="column.key === 'Modules'">
                  <div>{{ record.Modules }}</div>
                </template>
                <template v-if="column.key === 'Created'">
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                </template>
                <template v-if="column.key === 'View'">
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                </template>
                <template v-if="column.key === 'Edit'">
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                </template>
                <template v-if="column.key === 'Delete'">
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                </template>
                <template v-if="column.key === 'AllowAll'">
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                </template>
              </template>
            </a-table>
          </div>
          <!-- /Student List -->
        </div>
      </div>
    </div>
  </div>
  <role-permission-modal></role-permission-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Modules",
    dataIndex: "Modules",
    key: "Modules",
    sorter: {
      compare: (a, b) => {
        a = a.Modules.toLowerCase();
        b = b.Modules.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created",
    dataIndex: "Created",
    key: "Created",
    sorter: {
      compare: (a, b) => {
        a = a.Created.toLowerCase();
        b = b.Created.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "View",
    dataIndex: "View",
    key: "View",
    sorter: {
      compare: (a, b) => {
        a = a.View.toLowerCase();
        b = b.View.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Edit",
    dataIndex: "Edit",
    key: "Edit",
    sorter: {
      compare: (a, b) => {
        a = a.Edit.toLowerCase();
        b = b.Edit.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Delete",
    dataIndex: "Delete",
    key: "Delete",
    sorter: {
      compare: (a, b) => {
        a = a.Delete.toLowerCase();
        b = b.Delete.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Allow All",
    dataIndex: "AllowAll",
    key: "AllowAll",
    sorter: {
      compare: (a, b) => {
        a = a.AllowAll.toLowerCase();
        b = b.AllowAll.toLowerCase();
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
    Modules: "Classes",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "2",
    Modules: "Class Routine",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "3",
    Modules: "Sections",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "4",
    Modules: "Subjects",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "5",
    Modules: "Sylabus",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "6",
    Modules: "Time Table",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "7",
    Modules: "Home Work",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "8",
    Modules: "Library",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "9",
    Modules: "Sports",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
  {
    key: "10",
    Modules: "Transport",
    Created: "",
    View: "",
    Edit: "",
    Delete: "",
    AllowAll: "",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      title: "Roles & Permissions",
      text: "Dashboard",
      text1: "User Management",
      text2: "Roles & Permissions",
      data,
      columns,
      rowSelection,
    };
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
