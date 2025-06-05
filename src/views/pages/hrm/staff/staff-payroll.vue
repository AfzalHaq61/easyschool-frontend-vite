<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <!-- Page Header -->
        <div class="col-md-12">
          <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <router-link
                to="/hrm/edit-staff"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Staff</router-link
              >
            </div>
          </div>
        </div>
        <staff-sidebar></staff-sidebar>
        <div class="col-xxl-9 col-lg-8">
          <staff-tabs></staff-tabs>
          <div class="students-leaves-tab">
            <div class="row">
              <div class="col-md-6 col-xxl-3 d-flex">
                <div
                  class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill"
                >
                  <div class="ms-2">
                    <p class="mb-1">Total Net Salary</p>
                    <h5>$5,55,410</h5>
                  </div>
                  <span
                    class="avatar avatar-lg bg-secondary-transparent rounded me-2 flex-shrink-0 text-secondary"
                    ><i class="ti ti-user-dollar fs-24"></i
                  ></span>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3 d-flex">
                <div
                  class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill"
                >
                  <div class="ms-2">
                    <p class="mb-1">Total Gross Salary</p>
                    <h5>$5,58,380</h5>
                  </div>
                  <span
                    class="avatar avatar-lg bg-warning-transparent rounded me-2 flex-shrink-0 text-warning"
                    ><i class="ti ti-map-dollar fs-24"></i
                  ></span>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3 d-flex">
                <div
                  class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill"
                >
                  <div class="ms-2">
                    <p class="mb-1">Total Earning</p>
                    <h5>$2,500</h5>
                  </div>
                  <span
                    class="avatar avatar-lg bg-success-transparent rounded me-2 flex-shrink-0 text-success"
                    ><i class="ti ti-arrow-big-up-lines fs-24"></i
                  ></span>
                </div>
              </div>

              <div class="col-md-6 col-xxl-3 d-flex">
                <div
                  class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill"
                >
                  <div class="ms-2">
                    <p class="mb-1">Total Deduction</p>
                    <h5>$2,500</h5>
                  </div>
                  <span
                    class="avatar avatar-lg bg-danger-transparent rounded me-2 flex-shrink-0 text-danger"
                    ><i class="ti ti-arrow-big-down-lines fs-24"></i
                  ></span>
                </div>
              </div>
            </div>

            <div class="card">
              <div
                class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
              >
                <h4 class="mb-3">Payroll</h4>
                <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center mb-3"
                  ><i class="ti ti-calendar-event me-2"></i>Apply Payroll</a
                >
              </div>
              <div class="card-body p-0 py-3">
                <!-- Payroll List -->
                <div class="custom-datatable-filter table-responsive">
                  <a-table
                    class="table datatable thead-light"
                    :columns="columns"
                    :data-source="data"
                    :row-selection="rowSelection"
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'ID'">
                        <div>
                          <a href="javascript:void(0);" class="link-primary">8198</a>
                        </div>
                      </template>
                      <template v-if="column.key === 'view'">
                        <a href="javascript:void(0);" class="btn btn-light add-fee">{{
                          record.View
                        }}</a>
                      </template>
                    </template>
                  </a-table>
                </div>
                <!-- /Payroll List -->
              </div>
            </div>
          </div>
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
    title: "Salary For",
    dataIndex: "SalaryFor",
    sorter: {
      compare: (a, b) => {
        a = a.SalaryFor.toLowerCase();
        b = b.SalaryFor.toLowerCase();
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
    title: "PaymentMethod",
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
    title: "Net Salary",
    dataIndex: "NetSalary",
    sorter: {
      compare: (a, b) => {
        a = a.NetSalary.toLowerCase();
        b = b.NetSalary.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "view",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    ID: "8198",
    SalaryFor: "Apr - 2024",
    Date: "04 May 2024",
    PaymentMethod: "Cash",
    NetSalary: "$20,000",
    View: "View Payslip",
  },
  {
    key: "2",
    ID: "8197",
    SalaryFor: "Mar - 2024",
    Date: "05 Apr 2024",
    PaymentMethod: "Cheque",
    NetSalary: "$19,000",
    View: "View Payslip",
  },
  {
    key: "3",
    ID: "8196",
    SalaryFor: "Feb - 2024",
    Date: "05 Mar 2024",
    PaymentMethod: "Cash",
    NetSalary: "$19,500",
    View: "View Payslip",
  },
  {
    key: "4",
    ID: "8198",
    SalaryFor: "Jan - 2024",
    Date: "06 Feb 2024",
    PaymentMethod: "Cash",
    NetSalary: "$20,000",
    View: "View Payslip",
  },
  {
    key: "5",
    ID: "8194",
    SalaryFor: "Dec - 2023",
    Date: "03 Jan 2024",
    PaymentMethod: "Cheque",
    NetSalary: "$19,480",
    View: "View Payslip",
  },
  {
    key: "6",
    ID: "8193",
    SalaryFor: "Nov - 2023",
    Date: "05 Dec 2023",
    PaymentMethod: "Cheque",
    NetSalary: "$19,480",
    View: "View Payslip",
  },
  {
    key: "7",
    ID: "8192",
    SalaryFor: "Oct - 2023",
    Date: "03 Nov 2023",
    PaymentMethod: "Cheque",
    NetSalary: "$19,480",
    View: "View Payslip",
  },
  {
    key: "8",
    ID: "8191",
    SalaryFor: "Sep - 2023",
    Date: "04 Oct 2023",
    PaymentMethod: "Cheque",
    NetSalary: "$18,000",
    View: "View Payslip",
  },
  {
    key: "9",
    ID: "8190",
    SalaryFor: "Aug - 2023",
    Date: "06 Sep 2023",
    PaymentMethod: "Cheque",
    NetSalary: "$20,000",
    View: "View Payslip",
  },
  {
    key: "10",
    ID: "8189",
    SalaryFor: "Jul - 2023",
    Date: "05 Aug 2023",
    PaymentMethod: "Cheque",
    NetSalary: "$20,000",
    View: "View Payslip",
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
      title: "Staff Details",
      text: "Dashboard",
      text1: "HRM",
      text2: "Staff Details",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
