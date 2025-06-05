<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-md-12">
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
            </div>
          </div>
          <!-- /Page Header -->

          <div
            class="alert alert-outline-primary bg-primary-transparent p-2 d-flex align-items-center flex-wrap row-gap-2 mb-4"
          >
            <i class="ti ti-info-circle me-1"></i><strong>Note :</strong> Prompting
            Student from the Present class to the Next Class will Create an enrollment of
            the student to the next Session
          </div>

          <div class="card">
            <div class="card-header border-0 pb-0">
              <div class="bg-light-gray p-3 rounded">
                <h4>Promotion</h4>
                <p>Select a Class to Promote next session and new class</p>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="d-md-flex align-items-center justify-content-between">
                  <div class="card flex-fill w-100">
                    <div class="card-body">
                      <div class="mb-3">
                        <label class="form-label"
                          >Current Session <span class="text-danger"> *</span></label
                        >
                        <div class="form-control-plaintext p-0">2024 - 2025</div>
                      </div>
                      <div>
                        <label class="form-label mb-2"
                          >Promotion from Class<span class="text-danger"> *</span></label
                        >
                        <div class="d-block d-md-flex">
                          <div class="mb-3 flex-fill me-md-3 me-0">
                            <label class="form-label">Class</label>
                            <vue-select
                              :options="SelClass"
                              id="selclass"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Section</label>
                            <vue-select
                              :options="SelSection"
                              id="selsection"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="badge bg-primary badge-xl exchange-link text-white d-flex align-items-center justify-content-center mx-md-4 mx-auto my-md-0 my-4 flex-shrink-0"
                  >
                    <span><i class="ti ti-arrows-exchange fs-16"></i></span>
                  </a>
                  <div class="card flex-fill w-100">
                    <div class="card-body">
                      <div class="mb-3">
                        <label class="form-label"
                          >Promote to Session <span class="text-danger"> *</span></label
                        >
                        <vue-select
                          :options="SeleYear"
                          id="seleyear"
                          placeholder="2025 - 2026"
                        />
                      </div>
                      <div>
                        <label class="form-label mb-2"
                          >Promotion from Class<span class="text-danger"> *</span></label
                        >
                        <div class="d-block d-md-flex">
                          <div class="mb-3 flex-fill me-md-3 me-0">
                            <label class="form-label">Class</label>
                            <vue-select
                              :options="SelClassOne"
                              id="selclassone"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Section</label>
                            <vue-select
                              :options="SelSectionOne"
                              id="selsectionone"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div
                    class="manage-promote-btn d-flex justify-content-center flex-wrap row-gap-2"
                  >
                    <button type="reset" class="btn btn-light reset-promote me-3">
                      Reset Promotion
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary promote-students-btn"
                      @click="togglePromotion"
                    >
                      Manage Promotion
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            :class="[
              'promote-card-main',
              { 'promote-card-main-show': isPromotionActive },
            ]"
          >
            <div class="card">
              <div class="card-header border-0 pb-0">
                <div class="bg-light-gray p-3 rounded">
                  <h4>Map Class Sections</h4>
                  <p>Select section mapping of old class to new class</p>
                </div>
              </div>
              <div class="card-body pb-2">
                <form @submit.prevent="submitForm">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="card w-100">
                      <div class="card-body pb-1">
                        <div class="mb-3">
                          <label class="form-label"
                            >From Class<span class="text-danger"> *</span></label
                          >
                          <div class="form-control-plaintext p-0">III</div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label d-block mb-3"
                            >Promotion from Section<span class="text-danger">
                              *</span
                            ></label
                          >
                          <label class="form-label d-block mb-2"
                            >Student From Section
                            <span class="text-danger"> *</span></label
                          >
                          <div class="form-control-plaintext p-0">A</div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="badge bg-primary badge-xl exchange-link text-white d-flex align-items-center justify-content-center mx-md-4 mx-auto my-md-0 my-4 flex-shrink-0"
                    >
                      <span><i class="ti ti-arrows-exchange fs-16"></i></span>
                    </a>
                    <div class="card w-100">
                      <div class="card-body pb-1">
                        <div class="mb-3">
                          <label class="form-label"
                            >Promote to Session <span class="text-danger"> *</span></label
                          >
                          <div class="form-control-plaintext p-0">IV</div>
                        </div>
                        <div>
                          <label class="form-label mb-2"
                            >Assign to Section<span class="text-danger"> *</span></label
                          >
                          <div class="d-block d-md-flex">
                            <div class="mb-3 flex-fill me-0">
                              <label class="form-label">Class</label>
                              <vue-select
                                :options="SelClassTwo"
                                id="selclasstwo"
                                placeholder="A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Students List -->
            <div class="card">
              <div
                class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
              >
                <h4 class="mb-3">Students List</h4>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="input-icon-start mb-3 me-2 position-relative">
                    <span class="icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control date-range bookingrange"
                      placeholder="Select"
                      value="Academic Year : 2024 / 2025"
                      ref="dateRangeInput"
                    />
                  </div>
                  <div class="dropdown mb-3">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-light bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                      ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
                    </a>
                    <ul class="dropdown-menu p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">
                          Ascending
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">
                          Descending
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">
                          Recently Viewed
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">
                          Recently Added
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body p-0 py-3">
                <!-- Student List -->
                <div class="table-responsive">
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
                    class="table datanew"
                    :columns="columns"
                    :data-source="data"
                    :row-selection="rowSelection"
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'Admission_No'">
                        <router-link
                          to="/students/student-details"
                          class="link-primary"
                          >{{ record.Admission_No }}</router-link
                        >
                      </template>
                      <template v-else-if="column.key === 'Name'">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/students/student-details"
                            class="avatar avatar-md"
                            ><img
                              :src="require(`@/assets/img/students/${record.Image}`)"
                              class="img-fluid rounded-circle"
                              alt="img"
                          /></router-link>
                          <div class="ms-2">
                            <p class="mb-0 text-dark">
                              <router-link to="/students/student-details">{{
                                record.Name
                              }}</router-link>
                            </p>
                          </div>
                        </div>
                      </template>
                      <template v-else-if="column.key === 'Exam_Result'">
                        <span
                          :class="record.StatusClass"
                          class="d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                          >{{ record.Exam_Result }}</span
                        >
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="table-select mb-0">
                          <vue-select :options="Promote" placeholder="Promote to IV" />
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
                <!-- /Student List -->
              </div>
            </div>
            <!-- /Students List -->
            <div class="promoted-year text-center">
              <p>Selected Students will be prormoted to 2025 - 2026 Academic Session</p>
              <a
                href="javascript:void(0);"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#student_promote"
                >Promote Students</a
              >
            </div>
            <div class="toast-container success-msg-toast position-fixed">
              <div
                id="topright-Toast"
                class="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="toast-header">
                  <p class="me-auto">
                    <span><i class="ti ti-square-check-filled text-success"></i></span
                    >Successfully Promoted
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="toast-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    ><span><i class="ti ti-x"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="student_promote">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <h4>Confirm Promotion</h4>
          <p>
            Are you Sure, want to promote all 57 selected students to the next academic
            session
          </p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger"
              id="toprightToastBtn"
              data-bs-dismiss="modal"
              >Promote</a
            >
          </div>
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
    title: "Admission No",
    dataIndex: "Admission_No",
    key: "Admission_No",
    sorter: {
      compare: (a, b) => {
        a = a.Admission_No.toLowerCase();
        b = b.Admission_No.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Roll No",
    dataIndex: "Roll_No",
    sorter: {
      compare: (a, b) => {
        a = a.Roll_No.toLowerCase();
        b = b.Roll_No.toLowerCase();
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
    sorter: {
      compare: (a, b) => {
        a = a.Class.toLowerCase();
        b = b.Class.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Section",
    dataIndex: "Section",
    sorter: {
      compare: (a, b) => {
        a = a.Section.toLowerCase();
        b = b.Section.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Exam Result",
    dataIndex: "Exam_Result",
    key: "Exam_Result",
    sorter: {
      compare: (a, b) => {
        a = a.Exam_Result.toLowerCase();
        b = b.Exam_Result.toLowerCase();
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
    Admission_No: "AD9892434",
    Image: "student-01.jpg",
    Roll_No: "35013",
    Name: "Janet",
    Class: "III",
    Section: "A",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892433",
    Image: "student-02.jpg",
    Roll_No: "35013",
    Name: "Joann",
    Class: "IV",
    Section: "B",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892432",
    Image: "student-03.jpg",
    Roll_No: "35011",
    Name: "Kathleen",
    Class: "II",
    Section: "A",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892431",
    Image: "student-04.jpg",
    Roll_No: "35010",
    Name: "Gifford",
    Class: "I",
    Section: "B",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892430",
    Image: "student-05.jpg",
    Roll_No: "35009",
    Name: "Lisa",
    Class: "II",
    Section: "B",
    Exam_Result: "Fail",
    StatusClass: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892429",
    Image: "student-06.jpg",
    Roll_No: "35008",
    Name: "Ralph",
    Class: "III",
    Section: "B",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892428",
    Image: "student-07.jpg",
    Roll_No: "35007",
    Name: "Julie",
    Class: "V",
    Section: "A",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892427",
    Image: "student-08.jpg",
    Roll_No: "35006",
    Name: "Ryan",
    Class: "VI",
    Section: "A",
    Exam_Result: "Fail",
    StatusClass: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892426",
    Image: "student-09.jpg",
    Roll_No: "35005",
    Name: "Susan",
    Class: "VIII",
    Section: "B",
    Exam_Result: "Fail",
    StatusClass: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892425",
    Image: "student-10.jpg",
    Roll_No: "35004",
    Name: "Richard",
    Class: "VII",
    Section: "B",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892424",
    Image: "student-11.jpg",
    Roll_No: "35003",
    Name: "Veronica",
    Class: "IX",
    Section: "A",
    Exam_Result: "Pass",
    StatusClass: "badge badge-soft-success",
  },
];

const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      isPromotionActive: false,
      SelClass: ["Select", "II", "III", "IV"],
      SelSection: ["Select", "A", "B", "C"],
      SelClassOne: ["Select", "II", "III", "IV"],
      SelSectionOne: ["Select", "A", "B", "C"],
      SeleYear: ["Select", "2025 - 2026"],
      SelClassTwo: ["Select", "A", "B", "C"],
      title: "Student Promotion",
      text: "Dashboard",
      text1: "Students",
      text2: "Student Promotion",
      columns,
      data,
      rowSelection,
      Promote: ["Promote to IV", "No Promotion"],
    };
  },
  methods: {
    togglePromotion() {
      this.isPromotionActive = !this.isPromotionActive;
    },
    submitForm() {
      this.$router.push("/students/student-promotion");
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
