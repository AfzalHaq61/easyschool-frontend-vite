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
              data-bs-target="#add_hostel"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Hostel</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <hostel-filter></hostel-filter>
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
                            data-bs-target="#edit_hostel"
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
      <!-- /Student List -->
    </div>
  </div>
  <hostel-list-modal></hostel-list-modal>
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
    title: "Hostel Name",
    dataIndex: "HostelName",
    sorter: {
      compare: (a, b) => {
        a = a.HostelName.toLowerCase();
        b = b.HostelName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Hostel Type",
    dataIndex: "HostelType",
    sorter: {
      compare: (a, b) => {
        a = a.HostelType.toLowerCase();
        b = b.HostelType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Address",
    dataIndex: "Address",
    sorter: {
      compare: (a, b) => {
        a = a.Address.toLowerCase();
        b = b.Address.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "InTake",
    dataIndex: "InTake",
    sorter: {
      compare: (a, b) => {
        a = a.InTake.toLowerCase();
        b = b.InTake.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    ID: "H823828",
    HostelName: "Phoenix Residence",
    HostelType: "Boys",
    Address: "25 Crowfield Road, Phoenix",
    InTake: "150",
    Description: "Rising to nurture young minds",
  },
  {
    key: "2",
    ID: "H823827",
    HostelName: "Tranquil Haven",
    HostelType: "Girls",
    Address: "81 Hartland Avenue, Milwaukee",
    InTake: "200",
    Description: "Rising to nurture young minds",
  },
  {
    key: "3",
    ID: "H823826",
    HostelName: "Radiant Towers",
    HostelType: "Boys",
    Address: "School Campus",
    InTake: "180",
    Description: "Illuminating minds with knowledge and warmth",
  },
  {
    key: "4",
    ID: "H823825",
    HostelName: "Nova Nest",
    HostelType: "Girls",
    Address: "School Campus",
    InTake: "180",
    Description: "A nestling ground for budding intellectuals to thrive",
  },
  {
    key: "5",
    ID: "H823824",
    HostelName: "Vista Villat",
    HostelType: "Boys",
    Address: "65 Braxton Street, Sheffield",
    InTake: "250",
    Description: "Overlooking the vast landscape of knowledge",
  },
  {
    key: "6",
    ID: "H823823",
    HostelName: "Zenith Zone",
    HostelType: "Girls",
    Address: "School Campus",
    InTake: "150",
    Description: "Living at the peak of academic achievement",
  },
  {
    key: "7",
    ID: "H823822",
    HostelName: "Summit Springs",
    HostelType: "Boys",
    Address: "55 Upton Avenue, Monson",
    InTake: "300",
    Description: "Drawing from the wellspring of knowledge",
  },
  {
    key: "8",
    ID: "H823821",
    HostelName: "Beacon Breeze",
    HostelType: "Girls",
    Address: "School Campus",
    InTake: "280",
    Description: "Riding the winds of educational inspiration",
  },
  {
    key: "9",
    ID: "H823820",
    HostelName: "Empyrean Estate",
    HostelType: "Boys",
    Address: "45 Cinnamon Lane, San Antonio",
    InTake: "200",
    Description: "Infusing energy into scholarly endeavors",
  },
  {
    key: "10",
    ID: "H823819",
    HostelName: "Nexus Nook",
    HostelType: "Girls",
    Address: "School Campus",
    InTake: "350",
    Description: "A communal hub for academic excellence",
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
      title: "Hostel",
      text: "Dashboard",
      text1: "Management",
      text2: "Hostel",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
