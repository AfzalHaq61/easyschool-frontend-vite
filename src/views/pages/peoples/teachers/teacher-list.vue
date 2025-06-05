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
              to="/teachers/add-teacher"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Teacher</router-link
            >
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Teachers List -->
      <div class="card">
        <teachers-filter></teachers-filter>
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
              class="table datatable"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'ID'">
                  <div>
                    <router-link to="/teachers/teacher-details" class="link-primary">{{
                      record.ID
                    }}</router-link>
                  </div>
                </template>
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <router-link to="/teachers/teacher-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/teachers/teacher-details">{{
                          record.Name
                        }}</router-link>
                      </p>
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
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/teachers/teacher-details"
                            ><i class="ti ti-menu me-2"></i>View Teacher</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            class="dropdown-item rounded-1"
                            to="/teachers/edit-teacher"
                            ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#login_detail"
                            ><i class="ti ti-lock me-2"></i>Login Details</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item rounded-1" href="javascript:void(0);"
                            ><i class="ti ti-toggle-right me-2"></i>Disable</a
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
          <!-- /Student List -->
        </div>
      </div>
      <!-- /Teachers List -->
    </div>
  </div>
  <teachers-modal></teachers-modal>
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
    title: "Class",
    dataIndex: "Class",
    key: "Class",
    sorter: {
      compare: (a, b) => {
        a = a.Class.toLowerCase();
        b = b.Class.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Subject",
    dataIndex: "Subject",
    sorter: {
      compare: (a, b) => {
        a = a.Subject.toLowerCase();
        b = b.Subject.toLowerCase();
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
    title: "DateofJoin",
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
    Image: "teachers/teacher-01.jpg",
    ID: "T849127",
    Name: "Teresa",
    Class: "III A",
    Subject: "Physics",
    Email: "teresa@example.com",
    Phone: "+1 82392 37359",
    DateofJoin: "25 Mar 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "2",
    Image: "teachers/teacher-02.jpg",
    ID: "T849126",
    Name: "Daniel",
    Class: "II (A)",
    Subject: "Computer",
    Email: "daniel@example.com",
    Phone: "+1 56752 86742",
    DateofJoin: "28 Mar 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "3",
    Image: "teachers/teacher-05.jpg",
    ID: "T849125",
    Name: "Hellana",
    Class: "VI (A)",
    Subject: "English",
    Email: "hellana@example.com",
    Phone: "+1 23566 52683",
    DateofJoin: "11 Apr 2024",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "4",
    Image: "teachers/teacher-06.jpg",
    ID: "T849124",
    Name: "Erickson",
    Class: "VI (B) , V (A)",
    Subject: "Spanish",
    Email: "erickson@example.com",
    Phone: "+1 14259 85573",
    DateofJoin: "16 Apr 2024",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "5",
    Image: "teachers/teacher-07.jpg",
    ID: "T849123",
    Name: "Morgan",
    Class: "VIII",
    Subject: "Env Science",
    Email: "morgan@example.com",
    Phone: "+1 63204 35730",
    DateofJoin: "20 Apr 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "6",
    Image: "teachers/teacher-06.jpg",
    ID: "T849122",
    Name: "Aaron",
    Class: "I (A)",
    Subject: "Chemistry",
    Email: "aaron@example.com",
    Phone: "+1 26267 80542",
    DateofJoin: "12 May 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "7",
    Image: "teachers/teacher-09.jpg",
    ID: "T849121",
    Name: "Jacquelin",
    Class: "IV",
    Subject: "Maths",
    Email: "jacquelin@example.com",
    Phone: "+1 77502 54845",
    DateofJoin: "20 May 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "8",
    Image: "students/student-10.jpg",
    ID: "T849120",
    Name: "Raul",
    Class: "IX",
    Subject: "Biology",
    Email: "raul@example.com",
    Phone: "+1 67845 78784",
    DateofJoin: "27 May 2024",
    Status: "Inactive",
    StatusClass: "badge badge-soft-danger",
  },
  {
    key: "9",
    Image: "students/student-11.jpg",
    ID: "T849119",
    Name: "Elizabeth",
    Class: "VII",
    Subject: "Economics",
    Email: "elizabeth@example.com",
    Phone: "+1 97846 84518",
    DateofJoin: "10 Jun 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "10",
    Image: "teachers/teacher-03.jpg",
    ID: "T849118",
    Name: "Edward",
    Class: "IX (C) , X (C)",
    Subject: "Finance",
    Email: "edward@example.com",
    Phone: "+1 56187 87489",
    DateofJoin: "18 Jun 2024",
    Status: "Active",
    StatusClass: "badge badge-soft-success",
  },
  {
    key: "11",
    Image: "teachers/teacher-04.jpg",
    ID: "T849117",
    Name: "Maria",
    Class: "I (A)",
    Subject: "English",
    Email: "maria@example.com",
    Phone: "+1 97846 84518",
    DateofJoin: "22 Mar 2018",
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
      title: "Teacher List",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Teacher List",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
