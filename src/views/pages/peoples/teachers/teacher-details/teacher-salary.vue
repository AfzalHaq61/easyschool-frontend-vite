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
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#login_detail"
                ><i class="ti ti-lock me-2"></i>Login Details</a
              >
              <router-link
                to="/teachers/edit-teacher"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Teacher</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Page Header -->
      </div>
      <div class="students-leaves-tab">
        <div class="row">
          <!-- Teacher Information -->
          <div class="col-xxl-3 col-lg-4 theiaStickySidebar">
            <teachers-sidebar></teachers-sidebar>
          </div>
          <!-- /Teacher Information -->

          <div class="col-xxl-9 col-xl-8">
            <div class="row">
              <div class="col-md-12">
                <!-- List -->
                <teacher-details-tabs></teacher-details-tabs>
                <!-- /List -->
                <div class="students-leaves-tab">
                  <div class="row">
                    <div class="col-md-6 col-xxl-3 d-flex">
                      <div
                        class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill bg-white"
                      >
                        <div class="ms-2">
                          <p class="mb-1">Total Net Salary</p>
                          <h5>$5,55,410</h5>
                        </div>
                        <span
                          class="avatar avatar-lg bg-secondary-transparent rounded flex-shrink-0 text-secondary"
                          ><i class="ti ti-user-dollar fs-24"></i
                        ></span>
                      </div>
                    </div>

                    <div class="col-md-6 col-xxl-3 d-flex">
                      <div
                        class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill bg-white"
                      >
                        <div class="ms-2">
                          <p class="mb-1">Total Gross Salary</p>
                          <h5>$5,58,380</h5>
                        </div>
                        <span
                          class="avatar avatar-lg bg-success-transparent rounded flex-shrink-0 text-success"
                          ><i class="ti ti-moneybag fs-24"></i
                        ></span>
                      </div>
                    </div>

                    <div class="col-md-6 col-xxl-3 d-flex">
                      <div
                        class="d-flex align-items-center justify-content-between rounded border p-3 mb-3 flex-fill bg-white"
                      >
                        <div class="ms-2">
                          <p class="mb-1">Total Deduction</p>
                          <h5>$2,500</h5>
                        </div>
                        <span
                          class="avatar avatar-lg bg-warning-transparent rounded flex-shrink-0 text-warning"
                          ><i class="ti ti-arrow-big-down-lines fs-24"></i
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div
                      class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
                    >
                      <h4 class="mb-3">Salary</h4>
                    </div>
                    <div class="card-body p-0 py-3">
                      <!-- Payroll List -->
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
                            <div
                              id="DataTables_Table_0_filter"
                              class="dataTables_filter text-end"
                            >
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
                          class="table datatable"
                          :columns="columns"
                          :data-source="data"
                          :row-selection="rowSelection"
                        >
                          <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'ID'">
                              <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
                            </template>
                            <template v-if="column.key === 'action'">
                              <a href="javascript:void(0);" class="btn btn-light add-fee">View Payslip</a>
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
      </div>
    </div>
  </div>
  <teacher-details-modal></teacher-details-modal>
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
    dataIndex: "Salary_For",
    sorter: {
      compare: (a, b) => {
        a = a.Salary_For.toLowerCase();
        b = b.Salary_For.toLowerCase();
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
    title: "Payment Method",
    dataIndex: "Payment_Method",
    sorter: {
      compare: (a, b) => {
        a = a.Payment_Method.toLowerCase();
        b = b.Payment_Method.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Net Salary",
    dataIndex: "Net_Salary",
    sorter: {
      compare: (a, b) => {
        a = a.Net_Salary.toLowerCase();
        b = b.Net_Salary.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true,
  },
];

const data = [
  {
    ID: "8198",
    Salary_For: "Apr - 2024",
    Date: "04 May 2024",
    Payment_Method: "Cash",
    Net_Salary: "$20,000",
  },
  {
    ID: "8197",
    Salary_For: "Mar - 2024",
    Date: "05 Apr 2024",
    Payment_Method: "Cheque",
    Net_Salary: "$19,000",
  },
  {
    ID: "8196",
    Salary_For: "Feb - 2024",
    Date: "05 Mar 2024",
    Payment_Method: "Cash",
    Net_Salary: "$19,500",
  },
  {
    ID: "8198",
    Salary_For: "Jan - 2024",
    Date: "06 Feb 2024",
    Payment_Method: "Cash",
    Net_Salary: "$20,000",
  },
  {
    ID: "8194",
    Salary_For: "Dec - 2023",
    Date: "03 Jan 2024",
    Payment_Method: "Cheque",
    Net_Salary: "$19,480",
  },
  {
    ID: "8193",
    Salary_For: "Nov - 2023",
    Date: "05 Dec 2023",
    Payment_Method: "Cheque",
    Net_Salary: "$19,480",
  },
  {
    ID: "8192",
    Salary_For: "Oct - 2023",
    Date: "03 Nov 2023",
    Payment_Method: "Cheque",
    Net_Salary: "$19,480",
  },
  {
    ID: "8191",
    Salary_For: "Sep - 2023",
    Date: "04 Oct 2023",
    Payment_Method: "Cheque",
    Net_Salary: "$18,000",
  },
  {
    ID: "8190",
    Salary_For: "Aug - 2023",
    Date: "06 Sep 2023",
    Payment_Method: "Cheque",
    Net_Salary: "$20,000",
  },
  {
    ID: "8189",
    Salary_For: "Jul - 2023",
    Date: "05 Aug 2023",
    Payment_Method: "Cheque",
    Net_Salary: "$20,000",
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
      title: "Teacher Details",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Teacher Details",
      columns,
      data,
      rowSelection,
    };
  },
};
</script>
