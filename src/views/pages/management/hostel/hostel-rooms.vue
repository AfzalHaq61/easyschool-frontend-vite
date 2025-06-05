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
              data-bs-target="#add_hostel_rooms"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Hostel Room</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <hostel-rooms-filter></hostel-rooms-filter>
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
                            data-bs-target="#edit_hostel_rooms"
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
  <hostel-room-modal></hostel-room-modal>
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
    title: "Room No",
    dataIndex: "RoomNo",
    sorter: {
      compare: (a, b) => {
        a = a.RoomNo.toLowerCase();
        b = b.RoomNo.toLowerCase();
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
    title: "Room Type",
    dataIndex: "RoomType",
    sorter: {
      compare: (a, b) => {
        a = a.RoomType.toLowerCase();
        b = b.RoomType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No of Bed",
    dataIndex: "NoofBed",
    sorter: {
      compare: (a, b) => {
        a = a.NoofBed.toLowerCase();
        b = b.NoofBed.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Cost Per Bed",
    dataIndex: "CostperBed",
    sorter: {
      compare: (a, b) => {
        a = a.CostperBed.toLowerCase();
        b = b.CostperBed.toLowerCase();
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
    ID: "HR819382",
    RoomNo: "A1",
    HostelName: "Phoenix Residence",
    RoomType: "One Bed",
    NoofBed: "1",
    CostperBed: "$200",
  },
  {
    key: "2",
    ID: "HR819381",
    RoomNo: "A2",
    HostelName: "Tranquil Haven",
    RoomType: "One Bed AC",
    NoofBed: "1",
    CostperBed: "$300",
  },
  {
    key: "3",
    ID: "HR819380",
    RoomNo: "A3",
    HostelName: "Radiant Towers",
    RoomType: "Two Bed",
    NoofBed: "2",
    CostperBed: "$400",
  },
  {
    key: "4",
    ID: "HR819379",
    RoomNo: "A4",
    HostelName: "Nova Nest",
    RoomType: "One Bed",
    NoofBed: "1",
    CostperBed: "$200",
  },
  {
    key: "5",
    ID: "HR819378",
    RoomNo: "B1",
    HostelName: "Vista Villa",
    RoomType: "One Bed AC",
    NoofBed: "1",
    CostperBed: "$300",
  },
  {
    key: "6",
    ID: "HR819377",
    RoomNo: "B2",
    HostelName: "Zenith Zone",
    RoomType: "Two Bed",
    NoofBed: "2",
    CostperBed: "$400",
  },
  {
    key: "7",
    ID: "HR819376",
    RoomNo: "B3",
    HostelName: "Summit Springs",
    RoomType: "One Bed",
    NoofBed: "1",
    CostperBed: "$200e",
  },
  {
    key: "8",
    ID: "HR819375",
    RoomNo: "B4",
    HostelName: "Beacon Breeze",
    RoomType: "Two Bed AC",
    NoofBed: "2",
    CostperBed: "$600",
  },
  {
    key: "9",
    ID: "HR819374",
    RoomNo: "C1",
    HostelName: "Empyrean Estate",
    RoomType: "One Bed",
    NoofBed: "1",
    CostperBed: "$200",
  },
  {
    key: "10",
    ID: "HR819373",
    RoomNo: "C2",
    HostelName: "Nexus Nook",
    RoomType: "Two Bed AC",
    NoofBed: "2",
    CostperBed: "$600",
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
      title: "Hostel Rooms",
      text: "Dashboard",
      text1: "Management",
      text2: "Hostel Rooms",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
