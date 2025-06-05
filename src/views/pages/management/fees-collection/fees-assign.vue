<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
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
              data-bs-target="#add_fees_assign"
              ><i class="ti ti-square-rounded-plus me-2"></i>Assign New</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <fees-assign-filter></fees-assign-filter>
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
                <template v-if="column.key === 'SNO'">
                  <div>{{ record.SNo }}</div>
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
                            data-bs-target="#edit_fees_assign"
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
        <!-- /Student List -->
      </div>
    </div>
  </div>
  <fees-assign-modal></fees-assign-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "S.NO",
    dataIndex: "SNo",
    key: "SNo",
    sorter: {
      compare: (a, b) => {
        a = a.SNo.toLowerCase();
        b = b.SNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Fees Group",
    dataIndex: "FeesGroup",
    sorter: {
      compare: (a, b) => {
        a = a.FeesGroup.toLowerCase();
        b = b.FeesGroup.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Fees Type",
    dataIndex: "FeesType",
    sorter: {
      compare: (a, b) => {
        a = a.FeesType.toLowerCase();
        b = b.FeesType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Class",
    dataIndex: "Class",
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
    title: "Amount($)",
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
    title: "Gender",
    dataIndex: "Gender",
    sorter: {
      compare: (a, b) => {
        a = a.Gender.toLowerCase();
        b = b.Gender.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    SNo: "1",
    FeesGroup: "Admission-Fees",
    FeesType: "Tuition Fees",
    Class: "I",
    Section: "B",
    Amount: "1250",
    Gender: "Male",
    Category: "BC",
  },
  {
    key: "2",
    SNo: "2",
    FeesGroup: "Class 1 General",
    FeesType: "Monthly Fees",
    Class: "III",
    Section: "C",
    Amount: "250",
    Gender: "Both",
    Category: "MBC",
  },
  {
    key: "3",
    SNo: "3",
    FeesGroup: "Monthly Fees",
    FeesType: "Admission Fees",
    Class: "IX",
    Section: "F",
    Amount: "656",
    Gender: "Female",
    Category: "FC",
  },
  {
    key: "4",
    SNo: "4",
    FeesGroup: "Class 1 Lump Sum",
    FeesType: "Bus Fees",
    Class: "X",
    Section: "R",
    Amount: "6225",
    Gender: "Male",
    Category: "BC",
  },
  {
    key: "5",
    SNo: "5",
    FeesGroup: "Class 1- I Installment",
    FeesType: "Monthly Fees",
    Class: "III",
    Section: "E",
    Amount: "454",
    Gender: "Both",
    Category: "MBC",
  },
  {
    key: "6",
    SNo: "6",
    FeesGroup: "Class 1-II Installment",
    FeesType: "Monthly Fees",
    Class: "IV",
    Section: "A",
    Amount: "214",
    Gender: "Male",
    Category: "All",
  },
  {
    key: "7",
    SNo: "7",
    FeesGroup: "Discount",
    FeesType: "Topper Discount",
    Class: "V",
    Section: "B",
    Amount: "145",
    Gender: "Both",
    Category: "FC",
  },
  {
    key: "8",
    SNo: "8",
    FeesGroup: "Class 3- I Installment",
    FeesType: "3rd-Installment-Fees",
    Class: "X",
    Section: "B",
    Amount: "147",
    Gender: "Male",
    Category: "FC",
  },
  {
    key: "9",
    SNo: "9",
    FeesGroup: "Class 2- I Installment",
    FeesType: "3rd-Installment-Fees",
    Class: "VI",
    Section: "A",
    Amount: "457",
    Gender: "Female",
    Category: "FC",
  },
  {
    key: "10",
    SNo: "10",
    FeesGroup: "Class 4- I Installment",
    FeesType: "3rd Installment Fees",
    Class: "V",
    Section: "A",
    Amount: "654",
    Gender: "Female",
    Category: "All",
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
      title: "Fees Collection",
      text: "Dashboard",
      text1: "Fees Collection",
      text2: "Fees Assign",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
