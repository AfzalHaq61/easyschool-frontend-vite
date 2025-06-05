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
        </div>
      </div>

      <div class="card">
        <!-- Table Filter -->
        <library-issue-filter></library-issue-filter>
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
                <template v-if="column.key === 'IssueTo'">
                  <div class="d-flex align-items-center">
                    <router-link to="/students/student-details" class="avatar avatar-md"
                      ><img
                        :src="require(`@/assets/img/students/${record.Image}`)"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></router-link>
                    <div class="ms-2">
                      <p class="mb-0 text-dark">
                        <router-link to="/students/student-details">{{
                          record.IssueTo
                        }}</router-link>
                      </p>
                      <span class="fs-12">{{ record.Class }}</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light add-fee"
                    data-bs-toggle="modal"
                    data-bs-target="#book_details"
                    >{{ record.Action }}</a
                  >
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /Student List -->
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
    title: "Date of Issue",
    dataIndex: "DateofIssue",
    sorter: {
      compare: (a, b) => {
        a = a.DateofIssue.toLowerCase();
        b = b.DateofIssue.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Due Date",
    dataIndex: "DueDate",
    sorter: {
      compare: (a, b) => {
        a = a.DueDate.toLowerCase();
        b = b.DueDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Issue To",
    dataIndex: "IssueTo",
    key: "IssueTo",
    sorter: {
      compare: (a, b) => {
        a = a.IssueTo.toLowerCase();
        b = b.IssueTo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Books Issued",
    dataIndex: "BooksIssued",
    sorter: {
      compare: (a, b) => {
        a = a.BooksIssued.toLowerCase();
        b = b.BooksIssued.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Book Returned",
    dataIndex: "BookReturned",
    sorter: {
      compare: (a, b) => {
        a = a.BookReturned.toLowerCase();
        b = b.BookReturned.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Issue Remarks",
    dataIndex: "IssueRemarks",
    sorter: {
      compare: (a, b) => {
        a = a.IssueRemarks.toLowerCase();
        b = b.IssueRemarks.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    key: "1",
    ID: "IB853629",
    DateofIssue: "20 Apr 2024",
    DueDate: "19 May 2024",
    IssueTo: "Janet",
    Class: "III, A",
    BooksIssued: "1",
    BookReturned: "0",
    Image: "student-01.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "2",
    ID: "IB853628",
    DateofIssue: "24 Apr 2024",
    DueDate: "20 May 2024",
    IssueTo: "Joann",
    Class: "IV, B",
    BooksIssued: "5",
    BookReturned: "3",
    Image: "student-02.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "3",
    ID: "IB853627",
    DateofIssue: "02 May 2024",
    DueDate: "01 Jun 2024",
    IssueTo: "Kathleen",
    "Class ": "III, A",
    BooksIssued: "4",
    BookReturned: "2",
    Image: "student-03.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "4",
    ID: "IB853626",
    DateofIssue: "16 May 2024",
    DueDate: "15 Jun 2024",
    IssueTo: "Gifford",
    Class: "I, B",
    BooksIssued: "3",
    BookReturned: "2",
    Image: "student-04.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "5",
    ID: "IB853625",
    DateofIssue: "22 May 2024",
    DueDate: "20 Jun 2024",
    IssueTo: "Lisa",
    Class: "II, B",
    BooksIssued: "6",
    BookReturned: "4",
    Image: "student-05.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "6",
    ID: "IB853624",
    DateofIssue: "10 Jun 2024",
    DueDate: "08 Jul 2024",
    IssueTo: "Ralph",
    Class: "III, B",
    BooksIssued: "4",
    BookReturned: "2",
    Image: "student-06.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "7",
    ID: "IB853623",
    DateofIssue: "15 Jun 2024",
    DueDate: "14 Jul 2024",
    IssueTo: "Julie",
    Class: "V, A",
    BooksIssued: "5",
    BookReturned: "3",
    Image: "student-07.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "8",
    ID: "IB853622",
    DateofIssue: "26 Jun 2024",
    DueDate: "25 Jul 2024",
    IssueTo: "Ryan",
    Class: "VI, A",
    BooksIssued: "3",
    BookReturned: "1",
    Image: "student-08.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "9",
    ID: "IB853621",
    DateofIssue: "06 Jul 2024",
    DueDate: "05 Aug 2024",
    IssueTo: "Susan",
    Class: "VIII, B",
    BooksIssued: "6",
    BookReturned: "4",
    Image: "student-09.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
  },
  {
    key: "10",
    ID: "IB853620",
    DateofIssue: "18 Jul 2024",
    DueDate: "16 Aug 2024",
    IssueTo: "Richard",
    Class: "VII, B",
    BooksIssued: "2",
    BookReturned: "1",
    Image: "student-10.jpg",
    IssueRemarks: "Book Issued",
    Action: "View Details",
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
      title: "Issue Book",
      text: "Dashboard",
      text1: "Management",
      text2: "Issue Book",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
