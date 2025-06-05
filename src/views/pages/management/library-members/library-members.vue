<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
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
              data-bs-target="#add_library_members"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add member</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <library-members-filter></library-members-filter>
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
                    <a href="javascript:void(0);" class="admission-no">{{ record.ID }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'Member'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/members/${record.MemberImage}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />{{ record.Member }}</a
                    >
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
                            data-bs-target="#edit_library_members"
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
        <!-- /Student List -->
      </div>
    </div>
  </div>
  <library-members-modal></library-members-modal>
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
    title: "Member",
    dataIndex: "Member",
    key: "Member",
    sorter: {
      compare: (a, b) => {
        a = a.Member.toLowerCase();
        b = b.Member.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Card No",
    dataIndex: "CardNo",
    sorter: {
      compare: (a, b) => {
        a = a.CardNo.toLowerCase();
        b = b.CardNo.toLowerCase();
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
    title: "Mobile",
    dataIndex: "Mobile",
    sorter: {
      compare: (a, b) => {
        a = a.Mobile.toLowerCase();
        b = b.Mobile.toLowerCase();
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
    ID: "LM823748",
    Member: "James",
    MemberImage: "members-01.jpg",
    CardNo: "501",
    Email: '"james@example.com',
    DateofJoin: "22 Apr 2024",
    Mobile: "+1 78429 82414",
  },
  {
    key: "2",
    ID: "LM823747",
    Member: "Garcia",
    MemberImage: "members-02.jpg",
    CardNo: "502",
    Email: "garcia@example.com",
    DateofJoin: "30 Apr 2024",
    Mobile: "+1 37489 46485",
  },
  {
    key: "3",
    ID: "LM823746",
    Member: "Frank",
    MemberImage: "members-03.jpg",
    CardNo: "503",
    Email: "frank@example.com",
    DateofJoin: "05 May 2024",
    Mobile: "+1 87651 64816",
  },
  {
    key: "4",
    ID: "LM823745",
    Member: "Jennie",
    MemberImage: "members-04.jpg",
    CardNo: "504",
    Email: "jennie@example.com",
    DateofJoin: "16 May 2024",
    Mobile: "+1 49879 86498",
  },
  {
    key: "5",
    ID: "LM823744",
    Member: "Paul",
    MemberImage: "members-05.jpg",
    CardNo: "505",
    Email: "paul@example.com",
    DateofJoin: "28 May 2024",
    Mobile: "+1 69787 87984",
  },
  {
    key: "6",
    ID: "LM823743",
    Member: "Elaine",
    MemberImage: "members-06.jpg",
    CardNo: "506",
    Email: "elaine@example.com",
    DateofJoin: "06 Jun 2024",
    Mobile: "+1 98764 84984",
  },
  {
    key: "7",
    ID: "LM823742",
    Member: "Jackson",
    MemberImage: "members-07.jpg",
    CardNo: "507",
    Email: "jackson@example.com",
    DateofJoin: "10 Jun 2024",
    Mobile: "+1 46876 55498",
  },
  {
    key: "8",
    ID: "LM823741",
    Member: "Kerry",
    MemberImage: "members-08.jpg",
    CardNo: "508",
    Email: "kerry@example.com",
    DateofJoin: "18 Jun 2024",
    Mobile: "+1 79468 87467",
  },
  {
    key: "9",
    ID: "LM823740",
    Member: "Roger",
    MemberImage: "members-09.jpg",
    CardNo: "509",
    Email: "roger@example.com",
    DateofJoin: "20 Jul 2024",
    Mobile: "+1 65598 64658",
  },
  {
    key: "10",
    ID: "LM823739",
    Member: "Denise",
    MemberImage: "members-10.jpg",
    CardNo: "510",
    Email: "denise@example.com",
    DateofJoin: "26 Jul 2024",
    Mobile: "+1 57866 68746",
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
      title: "Library Members",
      text: "Dashboard",
      text1: "Management",
      text2: "Library Members",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
