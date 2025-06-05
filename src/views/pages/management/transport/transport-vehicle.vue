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
              data-bs-target="#add_vehicle"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Vehicle</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <vehicle-filter></vehicle-filter>
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
                <template v-if="column.key === 'ChassisNo'">
                  <div>
                    <span class="badge bg-soft-light">{{ record.ChassisNo }}</span>
                  </div>
                </template>
                <template v-if="column.key === 'Live'">
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-light live track"
                      data-bs-toggle="modal"
                      data-bs-target="#live_track"
                      >{{ record.Live }}</a
                    >
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
                            data-bs-target="#edit_vehicle"
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
  <vehicle-modal></vehicle-modal>
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
    title: "Vehicle No",
    dataIndex: "VehicleNo",
    sorter: {
      compare: (a, b) => {
        a = a.VehicleNo.toLowerCase();
        b = b.VehicleNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Vehicle Model",
    dataIndex: "VehicleModel",
    key: "VehicleModel",
    sorter: {
      compare: (a, b) => {
        a = a.VehicleModel.toLowerCase();
        b = b.VehicleModel.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Made of Year",
    dataIndex: "MadeofYear",
    sorter: {
      compare: (a, b) => {
        a = a.MadeofYear.toLowerCase();
        b = b.MadeofYear.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Registration No",
    dataIndex: "RegistrationNo",
    sorter: {
      compare: (a, b) => {
        a = a.RegistrationNo.toLowerCase();
        b = b.RegistrationNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Chassis No",
    dataIndex: "ChassisNo",
    key: "ChassisNo",
    sorter: {
      compare: (a, b) => {
        a = a.ChassisNo.toLowerCase();
        b = b.ChassisNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "GPS Device ID",
    dataIndex: "GPSDeviceID",
    key: "GPSDeviceID",
    sorter: {
      compare: (a, b) => {
        a = a.GPSDeviceID.toLowerCase();
        b = b.GPSDeviceID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    dataIndex: "Live",
    key: "Live",
    sorter: {
      compare: (a, b) => {
        a = a.Live.toLowerCase();
        b = b.Live.toLowerCase();
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
    VehicleNo: "8930",
    VehicleModel: "Scania",
    Image: "parent-01.jpg",
    MadeofYear: "2021",
    RegistrationNo: "US1A3545",
    ChassisNo: "32546665456",
    GPSDeviceID: "GPS7899456689",
    Live: "Live Track",
    Driver: "Thomas",
    Phone: "+1 64044 748904",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    ID: "B80481",
    VehicleNo: "1235",
    VehicleModel: "Mini Bus",
    Image: "parent-10.jpg",
    MadeofYear: "2024",
    RegistrationNo: "US2B5465",
    ChassisNo: "12345678901",
    GPSDeviceID: "GPS4579454785",
    Live: "Live Track",
    Driver: "Mary",
    Phone: "+1 14541 55665",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    ID: "B80482",
    VehicleNo: "6465",
    VehicleModel: "Mini Bus",
    Image: "parent-09.jpg",
    MadeofYear: "2017",
    RegistrationNo: "US3C4547",
    ChassisNo: "22124413454",
    GPSDeviceID: "GPS3254789541",
    Live: "Live Track",
    Driver: "Michael",
    Phone: "+1 78954 85461",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "4",
    ID: "B80481",
    VehicleNo: "7895",
    VehicleModel: "Kinsmart",
    Image: "parent-08.jpg",
    MadeofYear: "2022",
    RegistrationNo: "US4D1234",
    ChassisNo: "12516665456",
    GPSDeviceID: "GPS1478545214",
    Live: "Live Track",
    Driver: "Jessie",
    Phone: "+1 12345 68891",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "5",
    ID: "B80482",
    VehicleNo: "4625",
    VehicleModel: "Kinsmart",
    Image: "parent-07.jpg",
    MadeofYear: "2019",
    RegistrationNo: "US1A6547",
    ChassisNo: "22746675177",
    GPSDeviceID: "GPS6985478541",
    Live: "Live Track",
    Driver: "Robert",
    Phone: "+1 78454 78841",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "6",
    ID: "B80481",
    VehicleNo: "7854",
    VehicleModel: "Single deck",
    Image: "parent-06.jpg",
    MadeofYear: "2015",
    RegistrationNo: "US2B5977",
    ChassisNo: "32546665456",
    GPSDeviceID: "GPS3254145874",
    Live: "Live Track",
    Driver: "Colleen",
    Phone: "+1 78546 97894",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "7",
    ID: "B80482",
    VehicleNo: "9789",
    VehicleModel: "Kinsmart",
    Image: "parent-05.jpg",
    MadeofYear: "2024",
    RegistrationNo: "US1A3147",
    ChassisNo: "16546647421",
    GPSDeviceID: "GPS4854651254",
    Live: "Live Track",
    Driver: "Arthur",
    Phone: "+1 97878 87854",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    ID: "B80481",
    VehicleNo: "4569",
    VehicleModel: "Mini Bus",
    Image: "parent-04.jpg",
    MadeofYear: "2016",
    RegistrationNo: "US2B5789",
    ChassisNo: "75546785147",
    GPSDeviceID: "GPS9658745214",
    Live: "Live Track",
    Driver: "Claudia",
    Phone: "+1 64599 78542",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "9",
    ID: "B80482",
    VehicleNo: "7857",
    VehicleModel: "Mini Bus",
    Image: "parent-03.jpg",
    MadeofYear: "2018",
    RegistrationNo: "US1A3147",
    ChassisNo: "32546647992",
    GPSDeviceID: "GPS7854652145",
    Live: "Live Track",
    Driver: "Johnson",
    Phone: "+1 45781 45145",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "10",
    ID: "B80481",
    VehicleNo: "6879",
    VehicleModel: "Single deck",
    Image: "parent-02.jpg",
    MadeofYear: "2023",
    RegistrationNo: "US2B5244",
    ChassisNo: "14578665456",
    GPSDeviceID: "GPS9985231258",
    Live: "Live Track",
    Driver: "Marquita",
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
      title: "Transport",
      text: "Dashboard",
      text1: "Management",
      text2: "Vehicles List",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
