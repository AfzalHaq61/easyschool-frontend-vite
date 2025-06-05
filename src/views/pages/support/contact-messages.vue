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
              data-bs-target="#add_messages"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Message</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <contact-filter></contact-filter>
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
                <template v-if="column.key === 'Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <a href="javascript:void(0);">{{ record.Name }}</a>
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
                            data-bs-target="#edit_messages"
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
  <contact-messages-modal></contact-messages-modal>
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
    title: "Message",
    dataIndex: "Message",
    sorter: {
      compare: (a, b) => {
        a = a.Message.toLowerCase();
        b = b.Message.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
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
    ID: "CM482902",
    Name: "Teresa",
    Image: "teachers/teacher-01.jpg",
    Phone: "+1 82392 37359",
    Email: "teresa@example.com",
    Message: "Reminder: Staff meeting tomorrow.",
    Date: "25 Mar 2024",
  },
  {
    key: "2",
    ID: "CM482901",
    Name: "Hellana",
    Image: "teachers/teacher-03.jpg",
    Phone: "+1 23566 52683",
    Email: "hellena@example.com",
    Message: "Sure, let's discuss it in class.",
    Date: "14 Apr 2024",
  },
  {
    key: "3",
    ID: "CM482900",
    Name: "William",
    Image: "users/user-27.jpg",
    Phone: "+1 63792 50310",
    Email: "william@example.com",
    Message: "Requesting a meeting for next week.",
    Date: "28 Apr 2024",
  },
  {
    key: "4",
    ID: "CM482899",
    Name: "Daniel",
    Image: "teachers/teacher-02.jpg",
    Phone: "+1 56752 86742",
    Email: "daniel@example.com",
    Message: "Meeting scheduled for June 10th.",
    Date: "04 May 2024",
  },
  {
    key: "5",
    ID: "CM482898",
    Name: "Galina",
    Image: "members/members-02.jpg",
    Phone: "+1 91304 34834",
    Email: "galina@example.com",
    Message: "Reminder: Staff meeting tomorrow.",
    Date: "17 May 2024",
  },
  {
    key: "6",
    ID: "CM482897",
    Name: "Edward",
    Image: "teachers/teacher-10.jpg",
    Phone: "+1 56187 87489",
    Email: "edward@example.com",
    Message: "Don't forget to submit the slip.",
    Date: "20 May 2024",
  },
  {
    key: "7",
    ID: "CM482896",
    Name: "Jacquelin",
    Image: "members/members-07.jpg",
    Phone: "+1 77502 54845",
    Email: "jacquelin@example.com",
    Message: "Can we review the test tomorrow?",
    Date: "03 Jun 2024",
  },
  {
    key: "8",
    ID: "CM482895",
    Name: "Gary",
    Image: "users/user-09.jpg",
    Phone: "+1 82239 42492",
    Email: "gary@example.com",
    Message: "Is there a summer camp program?",
    Date: "15 Jun 2024",
  },
  {
    key: "9",
    ID: "CM482894",
    Name: "Morgan",
    Image: "teachers/teacher-05.jpg",
    Phone: "+1 63204 35730",
    Email: "morgan@example.com",
    Message: "Yes, registration starts next week.",
    Date: "27 Jun 2024",
  },
  {
    key: "10",
    ID: "CM482893",
    Name: "Aaron",
    Image: "teachers/teacher-06.jpg",
    Phone: "+1 26267 80542",
    Email: "aaron@example.com",
    Message: "You have a missing assignment.",
    Date: "10 Jul 2024",
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
      title: "Contact Messages",
      text: "Dashboard",
      text1: "Support",
      text2: "Contact Messages",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
