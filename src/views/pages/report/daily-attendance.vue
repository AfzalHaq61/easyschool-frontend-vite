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

      <div class="filter-wrapper">
        <attendance-report-tabset></attendance-report-tabset>
      </div>
      <div class="card">
        <!-- Table Filter -->
        <daily-attendance-filter></daily-attendance-filter>
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
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Class'">
                  <div>{{ record.Class }}</div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /Attendance List -->
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
    title: "Class",
    dataIndex: "Class",
    key: "Class",
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
    title: "Total Present",
    dataIndex: "Total_Present",
    key: "Total_Present",
    sorter: {
      compare: (a, b) => {
        a = a.Total_Present.toLowerCase();
        b = b.Total_Present.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Absent",
    dataIndex: "Total_Absent",
    sorter: {
      compare: (a, b) => {
        a = a.Total_Absent.toLowerCase();
        b = b.Total_Absent.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Present %",
    dataIndex: "Present",
    sorter: {
      compare: (a, b) => {
        a = a.Present.toLowerCase();
        b = b.Present.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Absent %",
    dataIndex: "Absent",
    sorter: {
      compare: (a, b) => {
        a = a.Absent.toLowerCase();
        b = b.Absent.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];

const data = [
  {
    Class: "III",
    Section: "A",
    Total_Present: "69",
    Total_Absent: "2",
    Present: "98%",
    Absent: "2%",
  },
  {
    Class: "IV",
    Section: "A",
    Total_Present: "45",
    Total_Absent: "7",
    Present: "78%",
    Absent: "22%",
  },
  {
    Class: "II",
    Section: "B",
    Total_Present: "69",
    Total_Absent: "8",
    Present: "89%",
    Absent: "11%",
  },
  {
    Class: "I",
    Section: "C",
    Total_Present: "54",
    Total_Absent: "7",
    Present: "98%",
    Absent: "1%",
  },
  {
    Class: "II",
    Section: "A",
    Total_Present: "65",
    Total_Absent: "1",
    Present: "98%",
    Absent: "2%",
  },
  {
    Class: "III",
    Section: "B",
    Total_Present: "78",
    Total_Absent: "2",
    Present: "72%",
    Absent: "28%",
  },
  {
    Class: "V",
    Section: "C",
    Total_Present: "65",
    Total_Absent: "0",
    Present: "100%",
    Absent: "0%",
  },
  {
    Class: "VI",
    Section: "A",
    Total_Present: "45",
    Total_Absent: "2",
    Present: "98%",
    Absent: "1%",
  },
  {
    Class: "VIII",
    Section: "B",
    Total_Present: "47",
    Total_Absent: "2",
    Present: "98%",
    Absent: "2%",
  },
  {
    Class: "VII",
    Section: "C",
    Total_Present: "45",
    Total_Absent: "7",
    Present: "89%",
    Absent: "11%",
  },
  {
    Class: "IX",
    Section: "A",
    Total_Present: "45",
    Total_Absent: "1",
    Present: "98%",
    Absent: "2%",
  },
];
export default {
  data() {
    return {
      title: "Daily Attendance",
      text: "Dashboard",
      text1: "Report",
      text2: "Daily Attendance",
      columns,
      data,
    };
  },
};
</script>
