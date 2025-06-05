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
              data-bs-target="#add_players"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Player</a
            >
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="card">
        <player-filter></player-filter>
        <div class="card-body p-0 py-3">
          <!-- Players List -->
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
              class="table datanew"
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
                <template v-if="column.key === 'PlayerName'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/players/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="text-dark mb-0">
                        <a href="javascript:void(0);">{{ record.PlayerName }}</a>
                      </p>
                    </div>
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
                            data-bs-target="#edit_players"
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
          <!-- /Players List -->
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
    title: "Player Name",
    dataIndex: "PlayerName",
    key: "PlayerName",
    sorter: {
      compare: (a, b) => {
        a = a.PlayerName.toLowerCase();
        b = b.PlayerName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Sports",
    dataIndex: "Sports",
    key: "Sports",
    sorter: {
      compare: (a, b) => {
        a = a.Sports.toLowerCase();
        b = b.Sports.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date of Join",
    dataIndex: "DateofJoin",
    sorter: {
      compare: (a, b) => {
        a = a.DateofJoin.toLowerCase();
        b = b.DateofJoin.toLowerCase();
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
    id: "1",
    ID: "SP826329",
    PlayerName: "Francis",
    Image: "player-01.jpg",
    Sports: "Cricket",
    DateofJoin: "25 Apr 2024",
  },
  {
    id: "2",
    ID: "SP826328",
    PlayerName: "Cheryl",
    Image: "player-02.jpg",
    Sports: "Throwball",
    DateofJoin: "28 Apr 2024",
  },
  {
    id: "3",
    ID: "SP826327",
    PlayerName: "Daniel",
    Image: "player-03.jpg",
    Sports: "Football",
    DateofJoin: "04 May 2024",
  },
  {
    id: "4",
    ID: "SP826326",
    PlayerName: "Irene",
    Image: "player-04.jpg",
    Sports: "Tennis",
    DateofJoin: "16 May 2024",
  },
  {
    id: "5",
    ID: "SP826325",
    PlayerName: "Keith",
    Image: "player-05.jpg",
    Sports: "Basketball",
    DateofJoin: "20 May 2024",
  },
  {
    id: "6",
    ID: "SP826324",
    PlayerName: "Dina",
    Image: "player-06.jpg",
    Sports: "Badminton",
    DateofJoin: "12 Jun 2024",
  },
  {
    id: "7",
    ID: "SP826323",
    PlayerName: "Michael",
    Image: "player-07.jpg",
    Sports: "Carrom",
    DateofJoin: "17 Jun 2024",
  },
  {
    id: "8",
    ID: "SP826322",
    PlayerName: "Julia",
    Image: "player-08.jpg",
    Sports: "Chess",
    DateofJoin: "27 Jun 2024",
  },
  {
    id: "9",
    ID: "SP826321",
    PlayerName: "Ray",
    Image: "player-09.jpg",
    Sports: "Hockey",
    DateofJoin: "10 Jul 2024",
  },
  {
    id: "10",
    ID: "SP826320",
    PlayerName: "Lois",
    Image: "player-10.jpg",
    Sports: "Volleyball",
    DateofJoin: "20 Jul 2024",
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
      title: "Players",
      text: "Dashboard",
      text1: "Management",
      text2: "Players",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
