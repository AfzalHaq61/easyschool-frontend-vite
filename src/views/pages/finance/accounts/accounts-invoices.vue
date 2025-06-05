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
            <router-link
              to="/accounts/add-invoice"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Invoices</router-link
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <accounts-invoices-filter></accounts-invoices-filter>
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
                <template v-if="column.key === 'InvoiceNumber'">
                  <div>
                    <a href="javascript:void(0);" class="link-primary">{{
                      record.InvoiceNumber
                    }}</a>
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
                            data-bs-target="#view_invoice"
                            ><i class="ti ti-menu me-2"></i>View Invoice</a
                          >
                        </li>
                        <li>
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/accounts/edit-invoice"
                            ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
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
  <accounts-invoices-modal></accounts-invoices-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Invoice Number",
    dataIndex: "InvoiceNumber",
    key: "InvoiceNumber",
    sorter: {
      compare: (a, b) => {
        a = a.InvoiceNumber.toLowerCase();
        b = b.InvoiceNumber.toLowerCase();
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
    title: "Payment Method",
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
    title: "Due Date",
    dataIndex: "DueDate",
    sorter: {
      compare: (a, b) => {
        a = a.DueDate.toLowerCase();
        b = b.DueDate.toLowerCase();
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
    InvoiceNumber: "INV681537",
    Date: "25 Apr 2024",
    Description: "April Month Fees",
    Amount: "$15,000",
    PaymentMethod: "Cash",
    DueDate: "30 Apr 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    InvoiceNumber: "INV681536",
    Date: "29 Apr 2024",
    Description: "STEM Program Grant",
    Amount: "$20,000",
    PaymentMethod: "Credit",
    DueDate: "05 May 2024",
    Status: "Overdue",
    StatusClass: "badge badge-soft-warning",
  },
  {
    key: "3",
    InvoiceNumber: "INV681535",
    Date: "11 May 2024",
    Description: "Alumni Scholarship",
    Amount: "$1000",
    PaymentMethod: "Cash",
    DueDate: "16 May 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "4",
    InvoiceNumber: "INV681534",
    Date: "16 May 2024",
    Description: "Uniform Sales",
    Amount: "$10,500",
    PaymentMethod: "Cash",
    DueDate: "21 May 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
  },
  {
    key: "5",
    InvoiceNumber: "INV681533",
    Date: "21 May 2024",
    Description: "Event Parking Fees",
    Amount: "$8000",
    PaymentMethod: "Cash",
    DueDate: "26 May 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "6",
    InvoiceNumber: "INV681532",
    Date: "14 Jun 2024",
    Description: "Football Season Pass",
    Amount: "$7000",
    PaymentMethod: "Credit",
    DueDate: "19 Jun 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "7",
    InvoiceNumber: "INV681531",
    Date: "20 Jun 2024",
    Description: "Summer Reading Sale",
    Amount: "$3000",
    PaymentMethod: "Cash",
    DueDate: "25 Jun 2024",
    Status: "Overdue",
    StatusClass: "badge badge-soft-warning",
  },
  {
    key: "8",
    InvoiceNumber: "INV681530",
    Date: "24 Jun 2024",
    Description: "Library Donation",
    Amount: "$2000",
    PaymentMethod: "Cash",
    DueDate: "29 Jun 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "9",
    InvoiceNumber: "INV681529",
    Date: "08 Jul 2024",
    Description: "Cafeteria Income",
    Amount: "$15,000",
    PaymentMethod: "Credit",
    DueDate: "13 Jul 2024",
    Status: "Paid",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "10",
    InvoiceNumber: "INV681537",
    Date: "13 Jul 2024",
    Description: "Daily Visitor Parking",
    Amount: "$4000",
    PaymentMethod: "Cash",
    DueDate: "18 Jul 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
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
      title: "Invoices",
      text: "Dashboard",
      text1: "Finance & Accounts",
      text2: "Invoices",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
