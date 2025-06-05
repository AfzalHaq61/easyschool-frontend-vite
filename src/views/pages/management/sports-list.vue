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
              data-bs-target="#add_sports"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Sport</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <sports-filter></sports-filter>
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
                <template v-if="column.key === 'Coach'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/coach/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Coach }}</a>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="action-icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <ul>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_sports"
                            ><i class="ti ti-edit-circle"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            ><i class="ti ti-trash-x"></i> Delete</a
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
  <sports-modal></sports-modal>
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
    title: "Name",
    dataIndex: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Coach",
    dataIndex: "Coach",
    key: "Coach",
    sorter: {
      compare: (a, b) => {
        a = a.Coach.toLowerCase();
        b = b.Coach.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Started Year",
    dataIndex: "StartedYear",
    key: "StartedYear",
    sorter: {
      compare: (a, b) => {
        a = a.StartedYear.toLowerCase();
        b = b.StartedYear.toLowerCase();
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
    ID: "SP826329",
    Name: "Cricket",
    Coach: "Thomas",
    Image: "coach-01.jpg",
    StartedYear: "2004",
  },
  {
    key: "2",
    ID: "SP826328",
    Name: "Throwball",
    Coach: "Georgia",
    Image: "coach-02.jpg",
    StartedYear: "2005",
  },
  {
    key: "3",
    ID: "SP826327",
    Name: "Football",
    Coach: "Nicholas",
    Image: "coach-03.jpg",
    StartedYear: "2006",
  },
  {
    key: "4",
    ID: "SP826326",
    Name: "Tennis",
    Coach: "Sandra",
    Image: "coach-04.jpg",
    StartedYear: "2007",
  },
  {
    key: "5",
    ID: "SP826325",
    Name: "Basketball",
    Coach: "Jon",
    Image: "coach-05.jpg",
    StartedYear: "2008",
  },
  {
    key: "6",
    ID: "SP826324",
    Name: "Badminton",
    Coach: "Shannon",
    Image: "coach-06.jpg",
    StartedYear: "2009",
  },
  {
    key: "7",
    ID: "SP826323",
    Name: "Carrom",
    Coach: "Wilson",
    Image: "coach-07.jpg",
    StartedYear: "2010",
  },
  {
    key: "8",
    ID: "SP826322",
    Name: "Chess",
    Coach: "Sonia",
    Image: "coach-08.jpg",
    StartedYear: "2011",
  },
  {
    key: "9",
    ID: "SP826321",
    Name: "Volleyball",
    Coach: "Adams",
    Image: "coach-09.jpg",
    StartedYear: "2012",
  },
  {
    key: "10",
    ID: "SP826320",
    Name: "Hockey",
    Coach: "Lydia",
    Image: "coach-10.jpg",
    StartedYear: "2013",
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
      title: "Sports",
      text: "Dashboard",
      text1: "Management",
      text2: "Sports",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
