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
        <!-- Table Filter -->
        <accounts-transactions-filter></accounts-transactions-filter>
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
    title: "Transaction Date",
    dataIndex: "TransactionDate",
    sorter: {
      compare: (a, b) => {
        a = a.TransactionDate.toLowerCase();
        b = b.TransactionDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Transcation Type",
    dataIndex: "TranscationType",
    sorter: {
      compare: (a, b) => {
        a = a.TranscationType.toLowerCase();
        b = b.TranscationType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "payment Method",
    dataIndex: "PaymentMethod",
    sorter: {
      compare: (a, b) => {
        a = a.PaymentMethod.toLowerCase();
        b = b.PaymentMethod.toLowerCase();
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
    key: "1",
    ID: "FT624893",
    Description: "April Month Fees",
    TransactionDate: "25 Apr 2024",
    Amount: "$15,000",
    TranscationType: "Income",
    PaymentMethod: "Cash",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    ID: "FT624892",
    Description: "Monthly Electricity",
    TransactionDate: "27 Apr 2024",
    Amount: "$1000",
    TranscationType: "Expense",
    PaymentMethod: "Credit",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    ID: "FT624891",
    Description: "Alumni Scholarship",
    TransactionDate: "03 May 2024",
    Amount: "$1000",
    TranscationType: "Income",
    PaymentMethod: "Cash",
    Status: "Pending",
    StatusClass: "badge badge-soft-warning",
  },
  {
    key: "4",
    ID: "FT624890",
    Description: "AC Repair",
    TransactionDate: "15 May 2024",
    Amount: "$400",
    TranscationType: "Expense",
    PaymentMethod: "Cash",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "5",
    ID: "FT624889",
    Description: "Uniform Sales",
    TransactionDate: "20 May 2024",
    Amount: "$10,500",
    TranscationType: "Income",
    PaymentMethod: "Credit",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "6",
    ID: "FT624888",
    Description: "Water Bill",
    TransactionDate: "06 Jun 2024",
    Amount: "$700",
    TranscationType: "Expense",
    PaymentMethod: "Cash",
    Status: "Pending",
    StatusClass: "badge badge-soft-warning",
  },
  {
    key: "7",
    ID: "FT624887",
    Description: "Library Donation",
    TransactionDate: "18 Jun 2024",
    Amount: "$2,000",
    TranscationType: "Income",
    PaymentMethod: "Cash",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    ID: "FT624886",
    Description: "Vehicle Repair",
    TransactionDate: "26 Jun 2024",
    Amount: "$800",
    TranscationType: "Expense",
    PaymentMethod: "Cash",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "9",
    ID: "FT624885",
    Description: "Cafeteria Income",
    TransactionDate: "08 Jul 2024",
    Amount: "$15,000",
    TranscationType: "Income",
    PaymentMethod: "Credit",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "10",
    ID: "FT624884",
    Description: "Lab Equipments",
    TransactionDate: "10 Jul 2024",
    Amount: "$300",
    TranscationType: "Expense",
    PaymentMethod: "Cash",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
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
      title: "Transactions",
      text: "Dashboard",
      text1: "Finance & Accounts",
      text2: "Transactions",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
