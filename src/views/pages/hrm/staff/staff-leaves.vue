<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <!-- Page Header -->
        <div class="col-md-12">
          <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <router-link
                to="/hrm/edit-staff"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Staff</router-link
              >
            </div>
          </div>
        </div>
        <staff-sidebar></staff-sidebar>
        <div class="col-xxl-9 col-lg-8">
          <staff-tabs></staff-tabs>
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-leave"
              role="tabpanel"
              aria-labelledby="pills-leave"
            >
              <div class="row gx-3">
                <div class="col-lg-6 col-xxl-3 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <h5 class="mb-2">Medical Leave (10)</h5>
                      <div class="d-flex align-items-center flex-wrap">
                        <p class="border-end pe-2 me-2 mb-0">Used : 5</p>
                        <p class="mb-0">Available : 5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-3 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <h5 class="mb-2">Casual Leave (12)</h5>
                      <div class="d-flex align-items-center flex-wrap">
                        <p class="border-end pe-2 me-2 mb-0">Used : 1</p>
                        <p class="mb-0">Available : 11</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-3 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <h5 class="mb-2">Maternity Leave (10)</h5>
                      <div class="d-flex align-items-center flex-wrap">
                        <p class="border-end pe-2 me-2 mb-0">Used : 0</p>
                        <p class="mb-0">Available : 10</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-3 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <h5 class="mb-2">Paternity Leave (0)</h5>
                      <div class="d-flex align-items-center flex-wrap">
                        <p class="border-end pe-2 me-2 mb-0">Used : 0</p>
                        <p class="mb-0">Available : 0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <!-- Leaves List -->
                <div
                  class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
                >
                  <h4 class="mb-3">Leaves</h4>
                  <a
                    href="javascript:void(0);"
                    data-bs-target="#apply_leave"
                    data-bs-toggle="modal"
                    class="btn btn-primary d-inline-flex align-items-center mb-3"
                    ><i class="ti ti-calendar-event me-2"></i>Apply Leave</a
                  >
                </div>
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
                    <table class="table datatable">
                      <thead class="thead-light">
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs"
                              ><input type="checkbox" id="select-all" /><span
                                class="checkmarks"
                              ></span
                            ></label>
                          </th>
                          <th class="no-sort">Leave Type</th>
                          <th class="no-sort">Leave Date</th>
                          <th class="no-sort">No of Days</th>
                          <th class="no-sort">Applied On</th>
                          <th class="no-sort">Status</th>
                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Medical Leave</td>
                          <td>05 May 2024 - 09 may 2024</td>
                          <td>5</td>
                          <td>05 May 2024</td>
                          <td>
                            <span
                              class="badge badge-soft-success d-inline-flex align-items-center"
                              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
                            >
                          </td>
                          <td>
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
                                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Casual Leave</td>
                          <td>07 May 2024 - 07 may 2024</td>
                          <td>1</td>
                          <td>07 May 2024</td>
                          <td>
                            <span
                              class="badge badge-soft-success d-inline-flex align-items-center"
                              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
                            >
                          </td>
                          <td>
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
                                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Special Leave</td>
                          <td>09 May 2024 - 09 may 2024</td>
                          <td>1</td>
                          <td>09 May 2024</td>
                          <td>
                            <span
                              class="badge badge-soft-pending d-inline-flex align-items-center"
                              ><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span
                            >
                          </td>
                          <td>
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
                                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Casual Leave</td>
                          <td>08 May 2024 - 08 may 2024</td>
                          <td>1</td>
                          <td>04 May 2024</td>
                          <td>
                            <span
                              class="badge badge-soft-success d-inline-flex align-items-center"
                              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
                            >
                          </td>
                          <td>
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
                                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Medical Leave</td>
                          <td>08 May 2024 - 11 may 2024</td>
                          <td>4</td>
                          <td>08 May 2024</td>
                          <td>
                            <span
                              class="badge badge-soft-pending d-inline-flex align-items-center"
                              ><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span
                            >
                          </td>
                          <td>
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
                                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
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
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>Casual Leave</td>
                          <td>20 May 2024 - 20 may 2024</td>
                          <td>1</td>
                          <td>19 May 2024</td>
                          <td>
                            <span
                              class="badge badge-soft-pending d-inline-flex align-items-center"
                              ><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span
                            >
                          </td>
                          <td>
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
                                    <a class="dropdown-item rounded-1" href="javascript:void(0);"
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- /Leaves List -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <staff-leaves-modal></staff-leaves-modal>
</template>
<script>
const columns = [
  {
    sorter: false,
  },
  {
    title: "Leave Type",
    dataIndex: "LeaveType",
    sorter: {
      compare: (a, b) => {
        a = a.LeaveType.toLowerCase();
        b = b.LeaveType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leave Date",
    dataIndex: "LeaveDate",
    sorter: {
      compare: (a, b) => {
        a = a.LeaveDate.toLowerCase();
        b = b.LeaveDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No of Days",
    dataIndex: "NoofDays",
    sorter: {
      compare: (a, b) => {
        a = a.NoofDays.toLowerCase();
        b = b.NoofDays.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Applied On",
    dataIndex: "AppliedOn",
    sorter: {
      compare: (a, b) => {
        a = a.AppliedOn.toLowerCase();
        b = b.AppliedOn.toLowerCase();
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
    title: "",
    key: "view",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    LeaveType: "Medical Leave",
    LeaveDate: "05 May 2024 - 07 may 2024",
    NoofDays: "2",
    AppliedOn: "05 May 2024",
    Status: "Approved",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    LeaveType: "Casual Leave",
    LeaveDate: "07 May 2024 - 07 may 2024",
    NoofDays: "1",
    AppliedOn: "07 May 2024",
    Status: "Approved",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    LeaveType: "Maternity Leave",
    LeaveDate: "08 May 2024 - 19 may 2024",
    NoofDays: "10",
    AppliedOn: "02 May 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
  },
  {
    key: "4",
    LeaveType: "Paternity Leave",
    LeaveDate: "07 May 2024 - 07 may 2024",
    NoofDays: "1",
    AppliedOn: "06 May 2024",
    Status: "Dispproved",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "5",
    LeaveType: "Special Leave",
    LeaveDate: "08 May 2024 - 19 may 2024",
    NoofDays: "4",
    AppliedOn: "12 May 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
  },
  {
    key: "6",
    LeaveType: "Medical Leave",
    LeaveDate: "07 May 2024 - 07 may 2024",
    NoofDays: "1",
    AppliedOn: "04 May 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
  },
  {
    key: "7",
    LeaveType: "Casual Leave",
    LeaveDate: "05 May 2024 - 07 may 2024",
    NoofDays: "1",
    AppliedOn: "04 May 2024",
    Status: "Approved",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    LeaveType: "Medical Leave",
    LeaveDate: "08 May 2024 - 19 may 2024",
    NoofDays: "1",
    AppliedOn: "04 May 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
  },
  {
    key: "9",
    LeaveType: "Casual Leave",
    LeaveDate: "07 May 2024 - 07 may 2024",
    NoofDays: "1",
    AppliedOn: "04 May 2024",
    Status: "Pending",
    StatusClass: "badge badge-soft-pending",
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
      title: "Staff Details",
      text: "Dashboard",
      text1: "HRM",
      text2: "Staff Details",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
