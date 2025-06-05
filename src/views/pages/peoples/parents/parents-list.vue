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
              data-bs-toggle="modal"
              data-bs-target="#add_parent"
              class="btn btn-primary"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Parent</a
            >
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Parents List -->
      <div class="card">
        <parents-filter></parents-filter>
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
                <template v-if="column.key === 'ParentName'">
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                      class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/parents/${record.ParentImage}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#view_details"
                          >{{ record.ParentName }}</a
                        >
                      </p>
                      <span class="fs-12">{{ record.Addedon }}4</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Child'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.ChildImage}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/students/student-details">{{
                          record.Child
                        }}</router-link>
                      </p>
                      <span class="fs-12">{{ record.Class }}</span>
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
                            data-bs-target="#view_details"
                            ><i class="ti ti-menu me-2"></i>View Parent</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item rounded-1"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_parent"
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
          <!-- /Student List -->
        </div>
      </div>
      <!-- /Parents List -->
    </div>
  </div>
  <parents-list-modal></parents-list-modal>
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
    title: "Parent Name",
    dataIndex: "ParentName",
    key: "ParentName",
    sorter: {
      compare: (a, b) => {
        a = a.ParentName.toLowerCase();
        b = b.ParentName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Child",
    dataIndex: "Child",
    key: "Child",
    sorter: {
      compare: (a, b) => {
        a = a.Child.toLowerCase();
        b = b.Child.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    ParentImage: "parent-01.jpg",
    ChildImage: "student-01.jpg",
    ID: "P124556",
    ParentName: "Thomas",
    Addedon: "Added on 25 Mar 2024",
    Child: "Janet",
    Class: "III, A",
    Phone: "+1 65738 58937",
    Email: "thomas@example.com",
  },
  {
    key: "2",
    ParentImage: "parent-02.jpg",
    ChildImage: "student-02.jpg",
    ID: "P124555",
    ParentName: "Marquita",
    Addedon: "Added on 18 Mar 2024",
    Child: "Joann",
    Class: "IV, B",
    Phone: "+1 47958 41398",
    Email: "marquita@example.com",
  },
  {
    key: "3",
    ParentImage: "parent-03.jpg",
    ChildImage: "student-03.jpg",
    ID: "P124554",
    ParentName: "Johnson",
    Addedon: "Added on 14 Mar 2024",
    Child: "Kathleen",
    Class: "III, A",
    Phone: "+1 78688 17496",
    Email: "johnson@example.com",
  },
  {
    key: "4",
    ParentImage: "parent-04.jpg",
    ChildImage: "student-04.jpg",
    ID: "P124553",
    ParentName: "Claudia",
    Addedon: "Added on 27 Feb 2024",
    Child: "Gifford",
    Class: "I, B",
    Phone: "+1 72323 05904",
    Email: "claudia@example.com",
  },
  {
    key: "5",
    ParentImage: "parent-05.jpg",
    ChildImage: "student-05.jpg",
    ID: "P124552",
    ParentName: "Arthur",
    Addedon: "Added on 11 Feb 2024",
    Child: "Lisa",
    Class: "II, B",
    Phone: "+1 74820 48201",
    Email: "arthur@example.com",
  },
  {
    key: "6",
    ParentImage: "parent-06.jpg",
    ChildImage: "student-06.jpg",
    ID: "P124551",
    ParentName: "Colleen",
    Addedon: "Added on 24 Jan 2024",
    Child: "Ralph",
    Class: "III, B",
    Phone: "+1 46169 47202",
    Email: "colleen@example.com",
  },
  {
    key: "7",
    ParentImage: "parent-07.jpg",
    ChildImage: "student-07.jpg",
    ID: "P124550",
    ParentName: "Robert",
    Addedon: "Added on 19 Jan 2024",
    Child: "Julie",
    Class: "V, A",
    Phone: "+1 44990 27830",
    Email: "robert@example.com",
  },
  {
    key: "8",
    ParentImage: "parent-08.jpg",
    ChildImage: "student-08.jpg",
    ID: "P124549",
    ParentName: "Jessie",
    Addedon: "Added on 08 Jan 2024",
    Child: "Janet",
    Class: "III, A",
    Phone: "+1 84634 04823",
    Email: "jessie@example.com",
  },
  {
    key: "9",
    ParentImage: "parent-09.jpg",
    ChildImage: "student-09.jpg",
    ID: "P124548",
    ParentName: "Michael",
    Addedon: "Added on 22 Dec 2023",
    Child: "Susan",
    Class: "VIII, B",
    Phone: "+1 91038 68460",
    Email: "michael@example.com",
  },
  {
    key: "10",
    ParentImage: "parent-10.jpg",
    ChildImage: "student-10.jpg",
    ID: "P124547",
    ParentName: "Mary",
    Addedon: "Added on 15 Dec 2024",
    Child: "Richard",
    Class: "VII, B",
    Phone: "+1 35835 71839",
    Email: "mary@example.com",
  },
  {
    key: "11",
    ParentImage: "parent-11.jpg",
    ChildImage: "student-11.jpg",
    ID: "P124546",
    ParentName: "Edwin",
    Addedon: "Added on 10 Dec 2023",
    Child: "Veronica",
    Class: "IX, A",
    Phone: "+1 65738 58940",
    Email: "edw@example.com",
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
      title: "Parents",
      text: "Dashboard",
      text1: "People",
      text2: "Parents",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
