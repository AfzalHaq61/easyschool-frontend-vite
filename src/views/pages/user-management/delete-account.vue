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
                <template v-if="column.key === 'ID'">
                  <div>
                    <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Image}`)"
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
                <template v-if="column.key === 'Status'">
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    ><span
                      class="badge badge-soft-success d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i
                      >{{ record.Status }}</span
                    ></a
                  >
                </template>
              </template>
            </a-table>
          </div>
          <!-- /Student List -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
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
    title: "Requisition Date",
    dataIndex: "RequisitionDate",
    sorter: {
      compare: (a, b) => {
        a = a.RequisitionDate.toLowerCase();
        b = b.RequisitionDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Delete Request Date",
    dataIndex: "DeleteRequestDate",
    sorter: {
      compare: (a, b) => {
        a = a.DeleteRequestDate.toLowerCase();
        b = b.DeleteRequestDate.toLowerCase();
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
    ID: "U461893",
    Name: "Janet",
    RequisitionDate: "25 Mar 2024",
    DeleteRequestDate: "27 Mar 2024",
    Status: "Active",
    Image: "student-01.jpg",
  },
  {
    ID: "U461892",
    Name: "Joann",
    RequisitionDate: "18 Mar 2024",
    DeleteRequestDate: "20 Mar 2024",
    Status: "Active",
    Image: "student-02.jpg",
  },
  {
    ID: "U461891",
    Name: "Kathleen",
    RequisitionDate: "14 Mar 2024",
    DeleteRequestDate: "16 Mar 2024",
    Status: "Active",
    Image: "student-03.jpg",
  },
  {
    ID: "U461890",
    Name: "Gifford",
    RequisitionDate: "27 Feb 2024",
    DeleteRequestDate: "26 Feb 2024",
    Status: "Active",
    Image: "student-04.jpg",
  },
  {
    ID: "U461889",
    Name: "Lisa",
    RequisitionDate: "13 Feb 2024",
    DeleteRequestDate: "15 Feb 2024",
    Status: "Active",
    Image: "student-05.jpg",
  },
  {
    ID: "U461888",
    Name: "Ralph",
    RequisitionDate: "11 Feb 2024",
    DeleteRequestDate: "13 Feb 2024",
    Status: "Active",
    Image: "student-06.jpg",
  },
  {
    ID: "U461887",
    Name: "Julie",
    RequisitionDate: "26 Jan 2024",
    DeleteRequestDate: "28 Jan 2024",
    Status: "Active",
    Image: "student-07.jpg",
  },
  {
    ID: "U461886",
    Name: "Ryan",
    RequisitionDate: "19 Jan 2024",
    DeleteRequestDate: "21 Jan 2024",
    Status: "Active",
    Image: "student-08.jpg",
  },
  {
    ID: "U461885",
    Name: "Susan",
    RequisitionDate: "08 Jan 2024",
    DeleteRequestDate: "10 Jan 2024",
    Status: "Active",
    Image: "student-09.jpg",
  },
  {
    ID: "U461884",
    Name: "Susan",
    RequisitionDate: "22 Dec 2024",
    DeleteRequestDate: "24 Dec 2024",
    Status: "Active",
    Image: "student-09.jpg",
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
      title: "Delete Account Request",
      text: "Dashboard",
      text1: "User Management",
      text2: "Delete Account Request",
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
