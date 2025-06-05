<template>
  <div class="row">
    <!-- Student Marks -->
    <div class="col-xxl-8 col-xl-7 d-flex">
      <div class="card flex-fill">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap"
        >
          <h4 class="card-title">Student Marks</h4>
          <div class="d-flex align-items-center">
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                ><i class="ti ti-calendar me-2"></i>All Classes
              </a>
              <ul class="dropdown-menu mt-2 p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"> I </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"> II </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"> III </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                ><i class="ti ti-calendar me-2"></i>All Sections
              </a>
              <ul class="dropdown-menu mt-2 p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"> A </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"> B </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"> C </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body px-0">
          <div class="custom-datatable-filter table-responsive">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Marks %</th>
                  <th>CGPA</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="record in Teacher_Dashboard" :key="record.id">
                  <td>35013</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/students/student-details" class="avatar avatar-md"
                        ><img
                          :src="require(`@/assets/img/students/${record.Image}`)"
                          class="img-fluid rounded-circle"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/students/student-details">{{
                            record.Name
                          }}</router-link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{{ record.Class }}</td>
                  <td>{{ record.Section }}</td>
                  <td>{{ record.Marks }}</td>
                  <td>{{ record.CGPA }}</td>
                  <td>
                    <span :class="record.StatusClass">{{ record.Status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- /Student Marks -->

    <!-- Leave Status -->
    <div class="col-xxl-4 col-xl-5 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Leave Status</h4>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-calendar me-2"></i>This Month
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  This Month
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  This Year
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                <i class="ti ti-brand-socket-io"></i>
              </div>
              <div>
                <h6 class="mb-1">Emergency Leave</h6>
                <p>Date : 15 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-skyblue d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span
            >
          </div>
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                <i class="ti ti-medical-cross"></i>
              </div>
              <div>
                <h6 class="mb-1">Medical Leave</h6>
                <p>Date : 15 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-success d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
            >
          </div>
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                <i class="ti ti-medical-cross"></i>
              </div>
              <div>
                <h6 class="mb-1">Medical Leave</h6>
                <p>Date : 16 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-danger d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Declined</span
            >
          </div>
          <div
            class="bg-light-300 d-sm-flex align-items-center justify-content-between p-3"
          >
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <div class="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                <i class="ti ti-brand-socket-io"></i>
              </div>
              <div>
                <h6 class="mb-1">Not Well</h6>
                <p>Date : 16 Jun 2024</p>
              </div>
            </div>
            <span class="badge bg-success d-inline-flex align-items-center"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- /Leave Status -->
  </div>
</template>
<script>
import Teacher_Dashboard from "@/assets/json/teacher-dashboard.json";
export default {
  data() {
    return {
      Teacher_Dashboard: Teacher_Dashboard,
    };
  },
};
</script>
