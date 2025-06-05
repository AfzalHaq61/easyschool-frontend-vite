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
              data-bs-target="#add_expenses"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Expense</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <expenses-filter></expenses-filter>
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
                <template v-if="column.key === 'InvoiceNo'">
                  <div>
                    <a href="javascript:void(0);" class="link-primary">{{
                      record.InvoiceNo
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
                            data-bs-target="#edit_expenses"
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
  <expenses-modal></expenses-modal>
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
    title: "Expense Name",
    dataIndex: "ExpenseName",
    sorter: {
      compare: (a, b) => {
        a = a.ExpenseName.toLowerCase();
        b = b.ExpenseName.toLowerCase();
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
    title: "Category",
    dataIndex: "Category",
    sorter: {
      compare: (a, b) => {
        a = a.Category.toLowerCase();
        b = b.Category.toLowerCase();
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
    title: "Invoice No",
    dataIndex: "InvoiceNo",
    key: "InvoiceNo",
    sorter: {
      compare: (a, b) => {
        a = a.InvoiceNo.toLowerCase();
        b = b.InvoiceNo.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    ID: "EX628148",
    ExpenseName: "Monthly Electricity",
    Description: "Electricity of April month",
    Category: "Utilities",
    Date: "25 Apr 2024",
    Amount: "$1000",
    InvoiceNo: "INV681537",
    PaymentMethod: "Cash",
  },
  {
    key: "2",
    ID: "EX628147",
    ExpenseName: "Teacher Salary",
    Description: "April payroll for teching staffs",
    Category: "Salaries",
    Date: "29 Apr 2024",
    Amount: "$20,000",
    InvoiceNo: "INV681536",
    PaymentMethod: "Credit",
  },
  {
    key: "3",
    ID: "EX628146",
    ExpenseName: "AC Repair",
    Description: "Air Conditioning repair",
    Category: "Maintenance",
    Date: "11 May 2024",
    Amount: "$400",
    InvoiceNo: "INV681535",
    PaymentMethod: "Cash",
  },
  {
    key: "4",
    ID: "EX628145",
    ExpenseName: "Fuel Expense",
    Description: "Fuel for school buses",
    Category: "Transportation",
    Date: "16 May 2024",
    Amount: "$1200",
    InvoiceNo: "INV681534",
    PaymentMethod: "Cash",
  },
  {
    key: "5",
    ID: "EX628144",
    ExpenseName: "Sports Uniform",
    Description: "New uniform for soccer team",
    Category: "Sports",
    Date: "21 May 2024",
    Amount: "$2000",
    InvoiceNo: "INV681533",
    PaymentMethod: "Cash",
  },
  {
    key: "6",
    ID: "EX628143",
    ExpenseName: "Water Bill",
    Description: "Monthly water usage bill",
    Category: "Utilities",
    Date: "14 Jun 2024",
    Amount: "$700",
    InvoiceNo: "INV681532",
    PaymentMethod: "Credit",
  },
  {
    key: "7",
    ID: "EX628142",
    ExpenseName: "Projector purchase",
    Description: "Projector for auditorium",
    Category: "Equipment",
    Date: "20 Jun 2024",
    Amount: "$600",
    InvoiceNo: "INV681531",
    PaymentMethod: "Cash",
  },
  {
    key: "8",
    ID: "EX628141",
    ExpenseName: "Vehicle Repair",
    Description: "Repairs for school buses",
    Category: "Transportation",
    Date: "24 Jun 2024",
    Amount: "$800",
    InvoiceNo: "INV681530",
    PaymentMethod: "Cash",
  },
  {
    key: "9",
    ID: "EX628140",
    ExpenseName: "Graduation Setup",
    Description: "Setup costs for graduation",
    Category: "Events",
    Date: "08 Jul 2024",
    Amount: "$5000",
    InvoiceNo: "INV681529",
    PaymentMethod: "Credit",
  },
  {
    key: "10",
    ID: "EX628139",
    ExpenseName: "Lab Equipments",
    Description: "New microscopes for labs",
    Category: "Equipment",
    Date: "13 Jul 2024",
    Amount: "$300",
    InvoiceNo: "INV681537",
    PaymentMethod: "Cash",
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
      title: "Expense",
      text: "Dashboard",
      text1: "Finance & Accounts",
      text2: "Expense",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
