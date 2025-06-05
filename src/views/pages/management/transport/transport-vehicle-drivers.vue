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
              data-bs-target="#add_driver"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Vehicle</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <vehicle-drivers-filter></vehicle-drivers-filter>
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
                <template v-if="column.key === 'Driver'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/parents/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Driver }}</a>
                      </p>
                    </div>
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
                            data-bs-target="#edit_driver"
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
  <vehicle-drivers-modal></vehicle-drivers-modal>
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
    title: "Driver",
    dataIndex: "Driver",
    key: "Driver",
    sorter: {
      compare: (a, b) => {
        a = a.Driver.toLowerCase();
        b = b.Driver.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone Number",
    dataIndex: "PhoneNumber",
    sorter: {
      compare: (a, b) => {
        a = a.PhoneNumber.toLowerCase();
        b = b.PhoneNumber.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Driver License No",
    dataIndex: "DriverLicenseNo",
    sorter: {
      compare: (a, b) => {
        a = a.DriverLicenseNo.toLowerCase();
        b = b.DriverLicenseNo.toLowerCase();
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
    ID: "D0482",
    Driver: "Thomas",
    PhoneNumber: "+1 64044 74890",
    DriverLicenseNo: "LC7899456689",
    Address: "2233 Wood Street, Slidell, LA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-01.jpg",
  },
  {
    key: "2",
    ID: "D0481",
    Driver: "Mary",
    PhoneNumber: "+1 14541 55665",
    DriverLicenseNo: "LCS4579454785",
    Address: "2693 Parker Drive, Cleveland, OH",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-02.jpg",
  },
  {
    key: "3",
    ID: "D0480",
    Driver: "Michael",
    PhoneNumber: "+1 78954 85461",
    DriverLicenseNo: "LCS3254789541",
    Address: "4650 Aviation Way, Los Angeles, CA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-03.jpg",
  },
  {
    key: "4",
    ID: "D0479",
    Driver: "Jessie",
    PhoneNumber: "+1 12345 68891",
    DriverLicenseNo: "LCS1478545214",
    Address: "3167 Stadium Drive, Worcester, MA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-04.jpg",
  },
  {
    key: "5",
    ID: "D0478",
    Driver: "Robert",
    PhoneNumber: "+1 78454 7884",
    DriverLicenseNo: "LCS6985478541",
    Address: "1609 Smith Street, Worcester, MA",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-05.jpg",
  },
  {
    key: "6",
    ID: "D0477",
    Driver: "Colleen",
    PhoneNumber: "+1 78546 97894",
    DriverLicenseNo: "LCS3254145874",
    Address: "3341 Palmer Road, Columbus, OH",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-06.jpg",
  },
  {
    key: "7",
    ID: "D0476",
    Driver: "Arthur",
    PhoneNumber: "+1 97878 87854",
    DriverLicenseNo: "LCS4854651254",
    Address: "2261 Sweetwood Drive, Denver, CO",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-07.jpg",
  },
  {
    key: "8",
    ID: "D0475",
    Driver: "Claudia",
    PhoneNumber: "+1 64599 78542",
    DriverLicenseNo: "LCS9658745214",
    Address: "4025 Khale Street, Folly Beach, SC",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
    Image: "parent-08.jpg",
  },
  {
    key: "9",
    ID: "D0474",
    Driver: "Johnson",
    PhoneNumber: "+1 45781 45145",
    DriverLicenseNo: "LCS7854652145",
    Address: "3521 Harvest Lane Kansas City, MO",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-09.jpg",
  },
  {
    key: "10",
    ID: "D0473",
    Driver: "Marquita",
    PhoneNumber: "+1 45112 48879",
    DriverLicenseNo: "LCS9985231258",
    Address: "2603 Wood Duck Drive Marquette, MI",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
    Image: "parent-10.jpg",
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
      title: "Drivers",
      text: "Dashboard",
      text1: "Management",
      text2: "Drivers",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
