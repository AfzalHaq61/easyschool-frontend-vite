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
        <membership-filter></membership-filter>
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
        </div>
      </div>
    </div>
  </div>
  <membership-modal></membership-modal>
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
    title: "Provider Name",
    dataIndex: "ProviderName",
    sorter: {
      compare: (a, b) => {
        a = a.ProviderName.toLowerCase();
        b = b.ProviderName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan Type",
    dataIndex: "PlanType",
    sorter: {
      compare: (a, b) => {
        a = a.PlanType.toLowerCase();
        b = b.PlanType.toLowerCase();
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
    title: "Start Date",
    dataIndex: "StartDate",
    sorter: {
      compare: (a, b) => {
        a = a.StartDate.toLowerCase();
        b = b.StartDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "End Date",
    dataIndex: "EndDate",
    sorter: {
      compare: (a, b) => {
        a = a.EndDate.toLowerCase();
        b = b.EndDate.toLowerCase();
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
    ID: "MT156328",
    ProviderName: "Green Valley High School",
    PlanType: "Starter",
    TransactionDate: "25 Apr 2024",
    Amount: "$99",
    PaymentMethod: "Cash",
    StartDate: "25 Apr 2024",
    EndDate: "24 May 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    ID: "MT156327",
    ProviderName: "Riverside Academy",
    PlanType: "Enterprise",
    TransactionDate: "29 Apr 2024",
    Amount: "$149",
    PaymentMethod: "Credit",
    StartDate: "29 Apr 2024",
    EndDate: "28 May 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    ID: "MT156326",
    ProviderName: "Sunshine School",
    PlanType: "Starter",
    TransactionDate: "03 May 2024",
    Amount: "$99",
    PaymentMethod: "Cash",
    StartDate: "03 May 2024",
    EndDate: "02 Jun 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "4",
    ID: "MT156325",
    ProviderName: "Maplewood High School",
    PlanType: "Premium",
    TransactionDate: "15 May 2024",
    Amount: "$199",
    PaymentMethod: "Cash",
    StartDate: "15 May 2024",
    EndDate: "14 Jun 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "5",
    ID: "MT156324",
    ProviderName: "Mountain High School",
    PlanType: "Enterprise",
    TransactionDate: "15 May 2024",
    Amount: "$149",
    PaymentMethod: "Cash",
    StartDate: "25 May 2024",
    EndDate: "24 Jun 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "6",
    ID: "MT156323",
    ProviderName: "Hillside Elementary School",
    PlanType: "Starter",
    TransactionDate: "12 Jun 2024",
    Amount: "$99",
    PaymentMethod: "Credit",
    StartDate: "12 Jun 2024",
    EndDate: "11 Jul 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-warning",
  },
  {
    key: "7",
    ID: "MT156322",
    ProviderName: "Willow Creek High School",
    PlanType: "Starter",
    TransactionDate: "17 Jun 2024",
    Amount: "$99",
    PaymentMethod: "Cash",
    StartDate: "17 Jun 2024",
    EndDate: "16 Jul 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    ID: "MT156321",
    ProviderName: "Brookside High School",
    PlanType: "Premium",
    TransactionDate: "26 Jun 2024",
    Amount: "$199",
    PaymentMethod: "Cash",
    StartDate: "26 Jun 2024",
    EndDate: "25 Jul 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-warning",
  },
  {
    key: "9",
    ID: "MT156320",
    ProviderName: "Cedar Grove Academy",
    PlanType: "Enterprise",
    TransactionDate: "03 Jul 2024",
    Amount: "$149",
    PaymentMethod: "Credit",
    StartDate: "03 Jul 2024",
    EndDate: "02 Aug 2024",
    Status: "Completed",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "10",
    ID: "MT156319",
    ProviderName: "Westfield Elementary School",
    PlanType: "Starter",
    TransactionDate: "12 Jul 2024",
    Amount: "$99",
    PaymentMethod: "Cash",
    StartDate: "12 Jul 2024",
    EndDate: "11 Aug 2024",
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
      text1: "Membership",
      text2: "Transactions",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
