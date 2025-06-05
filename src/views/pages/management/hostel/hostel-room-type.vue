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
              data-bs-target="#add_hostel_room_type"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Room Type</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <hostel-room-type-filter></hostel-room-type-filter>
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
                            data-bs-target="#edit_hostel_room_type"
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
  <hostel-room-type-modal></hostel-room-type-modal>
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
    ID: "RT846235",
    RoomType: "One Bed",
    Description:
      "Enjoy serene solitude in our one-bed room, your tranquil retreat for                 focused studying",
  },
  {
    key: "2",
    ID: "RT846234",
    RoomType: "One Bed AC",
    Description: "Stay cool and focused in our one-bed AC room, your serene study haven",
  },
  {
    key: "3",
    ID: "RT846233",
    RoomType: "Two Bed",
    Description: "Study together in comfort and camaraderie in our two-bed room",
  },
  {
    key: "4",
    ID: "RT846232",
    RoomType: "Two Bed AC",
    Description: "Stay cool and study together in comfort in our two-bed AC room",
  },
  {
    key: "5",
    ID: "RT846231",
    RoomType: "Three Bed",
    Description:
      "Study comfortably in our spacious three-bed room, share learning and                 camaraderie",
  },
  {
    key: "6",
    ID: "RT846230",
    RoomType: "Three Bed AC",
    Description:
      "Experience collaborative studying in comfort with our three-bed AC room",
  },
  {
    key: "7",
    ID: "RT846229",
    RoomType: "Four Bed",
    Description:
      "Engage in group study sessions and foster camaraderie in our spacious                 four-bed room",
  },
  {
    key: "8",
    ID: "RT846228",
    RoomType: "Four Bed AC",
    Description:
      "Experience collaborative study sessions in comfort with our spacious                 four-bed AC room",
  },
  {
    key: "9",
    ID: "RT846227",
    RoomType: "Five Bed",
    Description: "Foster teamwork and academic synergy, ideal for group study sessions",
  },
  {
    key: "10",
    ID: "RT846226",
    RoomType: "Five Bed AC",
    Description:
      "Optimal comfort meets collaborative studying, perfect for academic synergy                 among residents.",
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
      title: "Room Type",
      text: "Dashboard",
      text1: "Management",
      text2: "Room Type",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
