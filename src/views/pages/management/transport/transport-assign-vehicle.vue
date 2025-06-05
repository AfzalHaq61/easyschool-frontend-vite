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
              data-bs-target="#add_assign_vehicle"
              ><i class="ti ti-square-rounded-plus-filled me-2"></i>Assign New Vehicle</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <assign-vehicle-filter></assign-vehicle-filter>
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
                      <p class="text-dark mb-0">
                        <a href="javascript:void(0);">{{ record.Driver }}</a>
                      </p>
                      <span class="fs-12">{{ record.Phone }}</span>
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
                            data-bs-target="#edit_assign_vehicle"
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
  <assign-vehicle-modal></assign-vehicle-modal>
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
    title: "Route",
    dataIndex: "Route",
    sorter: {
      compare: (a, b) => {
        a = a.Route.toLowerCase();
        b = b.Route.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Pickup Point",
    dataIndex: "PickupPoint",
    key: "PickupPoint",
    sorter: {
      compare: (a, b) => {
        a = a.PickupPoint.toLowerCase();
        b = b.PickupPoint.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Vehicle",
    dataIndex: "Vehicle",
    sorter: {
      compare: (a, b) => {
        a = a.Vehicle.toLowerCase();
        b = b.Vehicle.toLowerCase();
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
    ID: "B80482",
    Route: "Seattle",
    PickupPoint: "2233 Wood Street, Slidell, LA",
    Vehicle: "8930",
    Driver: "Thomas",
    Image: "parent-01.jpg",
    Phone: "+1 64044 748904",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    ID: "B80481",
    Route: "Camden",
    PickupPoint: "2693 Parker Drive, Cleveland, OH",
    Vehicle: "1235",
    Driver: "Mary",
    Image: "parent-10.jpg",
    Phone: "+1 14541 55665",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    ID: "B80482",
    Route: "Detroit",
    PickupPoint: "4650 Aviation Way, Los Angeles, CA",
    Vehicle: "6465",
    Driver: "Michael",
    Image: "parent-09.jpg",
    Phone: "+1 78954 85461",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "4",
    ID: "B80481",
    Route: "Nashville",
    PickupPoint: "3167 Stadium Drive, Worcester, MA",
    Vehicle: "7895",
    Driver: "Jessie",
    Image: "parent-08.jpg",
    Phone: "+1 12345 68891",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "5",
    ID: "B80482",
    Route: "Port Graham",
    PickupPoint: "1609 Smith Street, Worcester, MA",
    Vehicle: "4625",
    Driver: "Robert",
    Image: "parent-07.jpg",
    Phone: "+1 78454 78841",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "6",
    ID: "B80481",
    Route: "Brooklyn North",
    PickupPoint: "3341 Palmer Road, Columbus, OH",
    Vehicle: "7854",
    Driver: "Colleen",
    Image: "parent-06.jpg",
    Phone: "+1 78546 97894",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "7",
    ID: "B80482",
    Route: "Kansas City",
    PickupPoint: "2261 Sweetwood Drive, Denver, CO",
    Vehicle: "9789",
    Driver: "Arthur",
    Image: "parent-05.jpg",
    Phone: "+1 97878 87854",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    ID: "B80481",
    Route: "Rochester",
    PickupPoint: "4025 Khale Street, Folly Beach, SC",
    Vehicle: "4569",
    Driver: "Claudia",
    Image: "parent-04.jpg",
    Phone: "+1 64599 78542",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "9",
    ID: "B80482",
    Route: "Brooklyn Central",
    PickupPoint: "3521 Harvest Lane Kansas City, MO",
    Vehicle: "7857",
    Driver: "Johnson",
    Image: "parent-03.jpg",
    Phone: "+1 45781 45145",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "10",
    ID: "B80481",
    Route: "Seattle",
    PickupPoint: "2603 Wood Duck Drive Marquette, MI",
    Vehicle: "6879",
    Driver: "Marquita",
    Image: "parent-02.jpg",
    Phone: "+1 45112 48879",
    Status: "Active",
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
      title: "Assign Vehicle",
      text: "Dashboard",
      text1: "Management",
      text2: "Assign Vehicle",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
