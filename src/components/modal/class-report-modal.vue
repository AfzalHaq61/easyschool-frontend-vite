<template>
  <!-- Add Expenses Category -->
  <div class="modal fade" id="view_class_report">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-body">
            <!-- Table Search  -->
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
            <!-- Table Search  -->

            <!-- Student List -->
            <div class="custom-datatable-filter table-responsive">
              <a-table
                class="table datanew"
                :columns="columns"
                :data-source="data"
                :row-selection="rowSelection"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Admission_No'">
                    <a href="javascript:void(0);" class="link-primary">{{
                      record.Admission_No
                    }}</a>
                  </template>
                  <template v-if="column.key === 'Name'">
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          :src="require(`@/assets/img/students/${record.Student_Img}`)"
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
                  <template v-else-if="column.key === 'Parent_Name'">
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md"
                        ><img
                          :src="require(`@/assets/img/parents/${record.Parent_Img}`)"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></a>
                      <div class="ms-2">
                        <p class="mb-0 text-dark">
                          <a href="javascript:void(0);">{{ record.Parent_Name }}</a>
                        </p>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <span
                      :class="record.Status_Class"
                      class="d-inline-flex align-items-center"
                      ><i class="ti ti-circle-filled fs-5 me-1"></i
                      >{{ record?.Status }}</span
                    >
                  </template>
                </template>
              </a-table>
            </div>
            <!-- /Student List -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Expenses Category -->
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
    title: "Gender",
    dataIndex: "Gender",
    sorter: {
      compare: (a, b) => {
        a = a.Gender.toLowerCase();
        b = b.Gender.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Parent Name",
    dataIndex: "Parent_Name",
    key: "Parent_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Parent_Name.toLowerCase();
        b = b.Parent_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DOB",
    dataIndex: "DOB",
    key: "DOB",
    sorter: {
      compare: (a, b) => {
        a = a.DOB.toLowerCase();
        b = b.DOB.toLowerCase();
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
];

const data = [
  {
    Admission_No: "AD9892434",
    Roll_No: "35013",
    Name: "Janet",
    Student_Img: "student-01.jpg",
    Class: "III",
    Section: "A",
    Gender: "Female",
    Parent_Name: "Thomas",
    Parent_Img: "parent-01.jpg",
    DOB: "10 Jan 2015",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892433",
    Roll_No: "35013",
    Name: "Joann",
    Student_Img: "student-02.jpg",
    Class: "IV",
    Section: "B",
    Gender: "Male",
    Parent_Name: "Marquita",
    Parent_Img: "parent-02.jpg",
    DOB: "19 Aug 2014",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892432",
    Roll_No: "35011",
    Name: "Kathleen",
    Student_Img: "student-03.jpg",
    Class: "II",
    Section: "A",
    Gender: "Female",
    Parent_Name: "Johnson",
    Parent_Img: "parent-03.jpg",
    DOB: "05 Dec 2017",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892431",
    Roll_No: "35010",
    Name: "Gifford",
    Student_Img: "student-04.jpg",
    Class: "I",
    Section: "B",
    Gender: "Male",
    Parent_Name: "Claudia",
    Parent_Img: "parent-04.jpg",
    DOB: "22 Mar 2018",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892430",
    Roll_No: "35009",
    Name: "Lisa",
    Student_Img: "student-05.jpg",
    Class: "II",
    Section: "B",
    Gender: "Female",
    Parent_Name: "Arthur",
    Parent_Img: "parent-05.jpg",
    DOB: "13 May 2017",
    Status: "Inactive",
    Status_Class: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892429",
    Roll_No: "35008",
    Name: "Ralph",
    Student_Img: "student-06.jpg",
    Class: "III",
    Section: "B",
    Gender: "Male",
    Parent_Name: "Colleen",
    Parent_Img: "parent-06.jpg",
    DOB: "20 Jun 2015",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892428",
    Roll_No: "35007",
    Name: "Julie",
    Student_Img: "student-07.jpg",
    Class: "V",
    Section: "A",
    Gender: "Female",
    Parent_Name: "Robert",
    Parent_Img: "parent-07.jpg",
    DOB: "18 Sep 2013",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892427",
    Roll_No: "35006",
    Name: "Ryan",
    Student_Img: "student-08.jpg",
    Class: "VI",
    Section: "A",
    Gender: "Male",
    Parent_Name: "Jessie",
    Parent_Img: "parent-08.jpg",
    DOB: "26 Nov 2012",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
  },
  {
    Admission_No: "AD9892426",
    Roll_No: "35005",
    Name: "Susan",
    Student_Img: "student-09.jpg",
    Class: "VIII",
    Section: "B",
    Gender: "Female",
    Parent_Name: "Michael",
    Parent_Img: "parent-09.jpg",
    DOB: "26 May 2010",
    Status: "Inactive",
    Status_Class: "badge badge-soft-danger",
  },
  {
    Admission_No: "AD9892425",
    Roll_No: "35004",
    Name: "Richard",
    Student_Img: "student-10.jpg",
    Class: "VII",
    Section: "B",
    Gender: "Male",
    Parent_Name: "Mary",
    Parent_Img: "parent-10.jpg",
    DOB: "06 Oct 2011",
    Status: "Active",
    Status_Class: "badge badge-soft-success",
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
      columns,
      data,
      rowSelection,
    };
  },
};
</script>
