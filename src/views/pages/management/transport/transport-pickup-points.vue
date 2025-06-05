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
              data-bs-target="#add_pickup"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Pickup Point</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <pickup-filter></pickup-filter>
        <!-- /Table Filter -->
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
                            data-bs-target="#edit_pickup"
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
  <pickup-modal></pickup-modal>
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
    title: "Pickup Point",
    dataIndex: "PickupPoint",
    sorter: {
      compare: (a, b) => {
        a = a.PickupPoint.toLowerCase();
        b = b.PickupPoint.toLowerCase();
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
    title: "AddedOn",
    dataIndex: "AddedOn",
    key: "AddedOn",
    sorter: {
      compare: (a, b) => {
        a = a.AddedOn.toLowerCase();
        b = b.AddedOn.toLowerCase();
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
    ID: "PP124556",
    PickupPoint: "2603 Wood Duck Drive Marquette, MI",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "15 May 2024",
  },
  {
    key: "2",
    ID: "PP124555",
    PickupPoint: "3521 Harvest Lane Kansas City, MO",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "14 May 2024",
  },
  {
    key: "3",
    ID: "PP124554",
    PickupPoint: "4025 Khale Street, Folly Beach, SC",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "13 May 2024",
  },
  {
    key: "4",
    ID: "PP124553",
    PickupPoint: "2261 Sweetwood Drive, Denver, CO",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "12 May 2024",
  },
  {
    key: "5",
    ID: "PP124552",
    PickupPoint: "3341 Palmer Road, Columbus, OH",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "11 May 2024",
  },
  {
    key: "6",
    ID: "PP124551",
    PickupPoint: "1609 Smith Street, Worcester, MA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "10 May 2024",
  },
  {
    key: "7",
    ID: "PP24550",
    PickupPoint: "3167 Stadium Drive, Worcester, MA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "09 May 2024",
  },
  {
    key: "8",
    ID: "PP24549",
    PickupPoint: "4650 Aviation Way, Los Angeles, CA",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
    AddedOn: "08 May 2024",
  },
  {
    key: "9",
    ID: "PP124548",
    PickupPoint: "2693 Parker Drive, Cleveland, OH",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "07 May 2024",
  },
  {
    key: "10",
    ID: "PP124547",
    PickupPoint: "2233 Wood Street, Slidell, LA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    AddedOn: "07 May 2024",
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
      title: "Pickup Points",
      text: "Dashboard",
      text1: "Management",
      text2: "Pickup Points",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
