<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content bg-white">
      <div
        class="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3"
      >
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <website-sidebar></website-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
            >
              <div class="mb-3">
                <h5 class="mb-1">Language</h5>
                <p>Personalize your Language settings of your website</p>
              </div>
              <div class="mb-3">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#import_file"
                  ><i class="ti ti-download me-2"></i>Import</a
                >
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add_language"
                  ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add Language</a
                >
              </div>
            </div>
            <div class="card">
              <language-filter></language-filter>
              <!-- /Table Filter -->

              <div class="card-body p-0 py-3">
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
                      <div
                        id="DataTables_Table_0_filter"
                        class="dataTables_filter text-end"
                      >
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
                      <template v-if="column.key === 'RTL'">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            :id="record.RTL"
                          />
                        </div>
                      </template>
                      <template v-if="column.key === 'Status'">
                        <span
                          class="badge badge-soft-success d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                          >{{ record.Status }}</span
                        >
                      </template>
                      <template v-if="column.key === 'action'">
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
                              <a class="dropdown-item rounded-1" href="javascript:void(0);"
                                ><i class="ti ti-language me-2"></i>Make as Default</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_language"
                                ><i class="ti ti-edit-circle me-2"></i>Edit</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item rounded-1"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#language_setup"
                                ><i class="ti ti-settings me-2"></i>Set up</a
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
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <language-modal></language-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Language",
    dataIndex: "Language",
    sorter: {
      compare: (a, b) => {
        a = a.Language.toLowerCase();
        b = b.Language.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    sorter: {
      compare: (a, b) => {
        a = a.Code.toLowerCase();
        b = b.Code.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "RTL",
    dataIndex: "RTL",
    key: "RTL",
    sorter: {
      compare: (a, b) => {
        a = a.RTL.toLowerCase();
        b = b.RTL.toLowerCase();
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
    Language: "English",
    Code: "en",
    RTL: "switch-sm",
    For: "user1",
    Status: "Active",
  },
  {
    key: "2",
    Language: "Arabic",
    Code: "ar",
    RTL: "switch-sm2",
    For: "user2",
    Status: "Active",
  },
  {
    key: "3",
    Language: "Chinese",
    Code: "zh",
    RTL: "switch-sm3",
    For: "user3",
    Status: "Active",
  },
  {
    key: "4",
    Language: "Hindi",
    Code: "hi",
    RTL: "switch-sm4",
    For: "user4",
    Status: "Active",
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
      title: "Website Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Website Settings",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
