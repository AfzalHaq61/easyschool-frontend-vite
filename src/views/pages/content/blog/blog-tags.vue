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
              data-bs-target="#add_tags"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Tag</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <blog-tags-filter></blog-tags-filter>
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
                            data-bs-target="#edit_tags"
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
  <blog-tags-modal></blog-tags-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Tags",
    dataIndex: "Tags",
    sorter: {
      compare: (a, b) => {
        a = a.Tags.toLowerCase();
        b = b.Tags.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Added on",
    dataIndex: "Addedon",
    sorter: {
      compare: (a, b) => {
        a = a.Addedon.toLowerCase();
        b = b.Addedon.toLowerCase();
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
    Tags: "Guide",
    Addedon: "25 May 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    Tags: "Development",
    Addedon: "24 May 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    Tags: "Education",
    Addedon: "15 Mar 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "4",
    Tags: "Chances",
    Addedon: "21 Feb 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "5",
    Tags: "Management",
    Addedon: "15 Feb 2024",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "6",
    Tags: "Sports",
    Addedon: "12 Feb 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "7",
    Tags: "Guidance",
    Addedon: "14 Jan 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    Tags: "Location",
    Addedon: "12 Jan 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "9",
    Tags: "Hostel",
    Addedon: "16 Dec 2023",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "10",
    Tags: "Academic",
    Addedon: "12 Dec 2023",
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
      title: "Tags",
      text: "Dashboard",
      text1: "Pages",
      text2: "Tags",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
