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
            <router-link
              to="/hrm/add-staff"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Staff</router-link
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <staff-filter></staff-filter>
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
                    <router-link to="/hrm/staff-details" class="link-primary">{{
                      record.ID
                    }}</router-link>
                  </div>
                </template>
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <router-link to="/hrm/staff-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/hrm/staff-details">{{
                          record.Name
                        }}</router-link>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="dropdown table-action p-3">
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
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/hrm/staff-details"
                            ><i class="ti ti-menu"></i>View Staff</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/hrm/edit-staff"
                            ><i class="ti ti-edit-circle"></i>Edit</router-link
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
          <!-- /Student List -->
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
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Designation",
    dataIndex: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
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
    key: "1",
    ID: "8198",
    Name: "Kevin",
    Department: "Admin",
    Image: "profiles/avatar-27.jpg",
    Designation: "Technical Head",
    Phone: "+1 63423 72397",
    Email: "kevin@example.com",
    DateofJoin: "10 Mar 2024",
  },
  {
    key: "2",
    ID: "8197",
    Name: "Willie",
    Department: "Management",
    Image: "teachers/teacher-05.jpg",
    Designation: "Receptionist",
    Phone: "+1 82913 61371",
    Email: "willie@example.com",
    DateofJoin: "16 Mar 2024",
  },
  {
    key: "3",
    ID: "8196",
    Name: "Daniel",
    Department: "Management",
    Image: "teachers/teacher-02.jpg",
    Designation: "Admin",
    Phone: "+1 56752 86742",
    Email: "daniel@example.com",
    DateofJoin: "28 Mar 2024",
  },
  {
    key: "4",
    ID: "8195",
    Name: "Teresa",
    Department: "Management",
    Image: "teachers/teacher-01.jpg",
    Designation: "Admin",
    Phone: "+1 82392 37359",
    Email: "teresa@example.com",
    DateofJoin: "25 Mar 2024",
  },
  {
    key: "5",
    ID: "8194",
    Name: "Johnson",
    Department: "Finance",
    Image: "teachers/teacher-08.jpg",
    Designation: "Accountant",
    Phone: "+1 53619 54691",
    Email: "johnson@example.com",
    DateofJoin: "04 Apr 2024",
  },
  {
    key: "6",
    ID: "8193",
    Name: "Hellana",
    Department: "Management",
    Image: "teachers/teacher-03.jpg",
    Designation: "HR Manager",
    Phone: "+1 23566 52683",
    Email: "hellana@example.com",
    DateofJoin: "11 Apr 2024",
  },
  {
    key: "7",
    ID: "8192",
    Name: "James",
    Department: "Library",
    Image: "members/members-01.jpg",
    Designation: "Librarian",
    Phone: "+1 78429 82414",
    Email: "james@example.com",
    DateofJoin: "22 Apr 2024",
  },
  {
    key: "8",
    ID: "8191",
    Name: "Jacquelin",
    Department: "Transport",
    Image: "teachers/teacher-07.jpg",
    Designation: "Driver",
    Phone: "+1 77502 54845",
    Email: "jacquelin@example.com",
    DateofJoin: "20 May 2024",
  },
  {
    key: "9",
    ID: "8190",
    Name: "Edward",
    Department: "Finance",
    Image: "teachers/teacher-10.jpg",
    Designation: "Accounts Manager",
    Phone: "+1 56187 87489",
    Email: "edward@example.com",
    DateofJoin: "10 Jun 2024",
  },
  {
    key: "10",
    ID: "8189",
    Name: "Elizabeth",
    Department: "Management",
    Image: "teachers/teacher-09.jpg",
    Designation: "Receptionist",
    Phone: "+1 97846 84518",
    Email: "elizabeth@example.com",
    DateofJoin: "18 Jun 2024",
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
      title: "Staff",
      text: "Dashboard",
      text1: "HRM",
      text2: "Staff",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
