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
              data-bs-target="#add_library_book"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Book</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <library-books-filter></library-books-filter>
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
                            data-bs-target="#edit_library_book"
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
      <!-- /Student List -->
    </div>
  </div>
  <library-books-modal></library-books-modal>
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
    title: "BookName",
    dataIndex: "BookName",
    sorter: {
      compare: (a, b) => {
        a = a.BookName.toLowerCase();
        b = b.BookName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Book No",
    dataIndex: "BookNo",
    sorter: {
      compare: (a, b) => {
        a = a.BookNo.toLowerCase();
        b = b.BookNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Publisher",
    dataIndex: "Publisher",
    sorter: {
      compare: (a, b) => {
        a = a.Publisher.toLowerCase();
        b = b.Publisher.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Author",
    dataIndex: "Author",
    sorter: {
      compare: (a, b) => {
        a = a.Author.toLowerCase();
        b = b.Author.toLowerCase();
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
    title: "Rack No",
    dataIndex: "RackNo",
    sorter: {
      compare: (a, b) => {
        a = a.RackNo.toLowerCase();
        b = b.RackNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Qty",
    dataIndex: "Qty",
    sorter: {
      compare: (a, b) => {
        a = a.Qty.toLowerCase();
        b = b.Qty.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Available",
    dataIndex: "Available",
    sorter: {
      compare: (a, b) => {
        a = a.Available.toLowerCase();
        b = b.Available.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Price",
    dataIndex: "Price",
    sorter: {
      compare: (a, b) => {
        a = a.Price.toLowerCase();
        b = b.Price.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Post Date",
    dataIndex: "PostDate",
    sorter: {
      compare: (a, b) => {
        a = a.PostDate.toLowerCase();
        b = b.PostDate.toLowerCase();
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
    ID: "LB864723",
    BookName: "Echoes of Eternity",
    BookNo: "501",
    Publisher: "Aurora Press",
    Author: "Isabella Rivers",
    Subject: "History",
    RackNo: "6550",
    Qty: "150",
    Available: "120",
    Price: "$300",
    PostDate: "25 Apr 2024",
  },
  {
    key: "2",
    ID: "LB864722",
    BookName: "The Stars of Eldorado",
    BookNo: "502",
    Publisher: "Nebula Press",
    Author: "Amanda Grayson",
    Subject: "Science",
    RackNo: "6551",
    Qty: "200",
    Available: "180",
    Price: "$280",
    PostDate: "28 Apr 2024",
  },
  {
    key: "3",
    ID: "LB864722",
    BookName: "The Glass Painter",
    BookNo: "503",
    Publisher: "Artisan Reads",
    Author: "Isabel Marquez",
    Subject: "Literary",
    RackNo: "6552",
    Qty: "180",
    Available: "160",
    Price: "$320",
    PostDate: "04 May 2024",
  },
  {
    key: "4",
    ID: "LB864720",
    BookName: "Beyond the Edge",
    BookNo: "504",
    Publisher: "Explorer's Press",
    Author: "Leo Finnegan",
    Subject: "Adventure",
    RackNo: "6553",
    Qty: "120",
    Available: "100",
    Price: "$350",
    PostDate: "18 May 2024",
  },
  {
    key: "5",
    ID: "LB864719",
    BookName: "Shadow Symphony",
    BookNo: "505",
    Publisher: "Harmony House",
    Author: "Claire Vincent",
    Subject: "Gothic",
    RackNo: "6554",
    Qty: "220",
    Available: "160",
    Price: "$280",
    PostDate: "20 May 2024",
  },
  {
    key: "6",
    ID: "LB864718",
    BookName: "The Last Library",
    BookNo: "506",
    Publisher: "Archive Publishing",
    Author: "Marcus Brewster",
    Subject: "Dystopian",
    RackNo: "6555",
    Qty: "170",
    Available: "150",
    Price: "$250",
    PostDate: "16 Jun 2024",
  },
  {
    key: "7",
    ID: "LB864717",
    BookName: "The Saffron Tide",
    BookNo: "507",
    Publisher: "Indus Books",
    Author: "Rajiv Anand",
    Subject: "History",
    RackNo: "6556",
    Qty: "140",
    Available: "100",
    Price: "$200",
    PostDate: "20 Jun 2024",
  },
  {
    key: "8",
    ID: "LB864716",
    BookName: "Windswept",
    BookNo: "508",
    Publisher: "Coastal Press",
    Author: "Lydia Ramsey",
    Subject: "Romance",
    RackNo: "6557",
    Qty: "300",
    Available: "270",
    Price: "$300",
    PostDate: "24 Jun 2024",
  },
  {
    key: "9",
    ID: "LB864715",
    BookName: "Frostbound Throne",
    BookNo: "509",
    Publisher: "Frozen Realms",
    Author: "Viktor Korneev",
    Subject: "Fantasy",
    RackNo: "6558",
    Qty: "320",
    Available: "200",
    Price: "$350",
    PostDate: "$10 Jul 2024",
  },
  {
    key: "10",
    ID: "LB864714",
    BookName: "The Last Alchemist",
    BookNo: "510",
    Publisher: "Alchemy Arts",
    Author: "Philip Dubois",
    Subject: "Mystery",
    RackNo: "6559",
    Qty: "190",
    Available: "170",
    Price: "$400",
    PostDate: "12 Jul 2024",
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
      title: "Books",
      text: "Dashboard",
      text1: "Management",
      text2: "Books",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
