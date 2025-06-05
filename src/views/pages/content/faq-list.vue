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
              data-bs-target="#add_faq"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add FAQ</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <faq-filter></faq-filter>
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
                            data-bs-target="#edit_faq"
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
  <faq-modal></faq-modal>
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
    title: "Questions",
    dataIndex: "Questions",
    sorter: {
      compare: (a, b) => {
        a = a.Questions.toLowerCase();
        b = b.Questions.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Answers",
    dataIndex: "Answers",
    sorter: {
      compare: (a, b) => {
        a = a.Answers.toLowerCase();
        b = b.Answers.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category",
    dataIndex: "Category",
    sorter: {
      compare: (a, b) => {
        a = a.Category.toLowerCase();
        b = b.Category.toLowerCase();
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
    ID: "T374832",
    Questions: "How do I reset my password?",
    Answers: "You can reset your password from the login page.",
    Category: "Account",
  },
  {
    key: "2",
    ID: "T374831",
    Questions: "How do I update my contact information?",
    Answers: 'You can update your contact information in the "My Account"',
    Category: "Account",
  },
  {
    key: "3",
    ID: "T374830",
    Questions: "How can I contact the IT support team?",
    Answers: "Contact support via email at support@example.com",
    Category: "Support",
  },
  {
    key: "4",
    ID: "T374829",
    Questions: "Where can I find information about school events?",
    Answers: "Information is available on the website's Events page",
    Category: "Events",
  },
  {
    key: "5",
    ID: "T374828",
    Questions: "How do I access online learning resources?",
    Answers: "Access resources through the school's LMS",
    Category: "Academic",
  },
  {
    key: "6",
    ID: "T374827",
    Questions: "Where can I find information about school fees?",
    Answers: "Information is available on the Fees & Payments page",
    Category: "Finance",
  },
  {
    key: "7",
    ID: "T374826",
    Questions: "How do I register for extracurricular activities?",
    Answers: "Register through the school portal's Extracurriculars section.",
    Category: "Academic",
  },
  {
    key: "8",
    ID: "T374825",
    Questions: "Can I volunteer at the school?",
    Answers: "Yes, volunteering opportunities are available at the school.",
    Category: "General",
  },
  {
    key: "9",
    ID: "T374824",
    Questions: "What are the school's hours of operation?",
    Answers: "School hours vary by department and are typically posted",
    Category: "Academic",
  },
  {
    key: "10",
    ID: "T346285",
    Questions: "How can I request a tour of the school campus?",
    Answers: "Contact the admissions office to schedule a tour with a staff",
    Category: "General",
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
      title: "FAQ",
      text: "Dashboard",
      text1: "Content",
      text2: "FAQ",
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
