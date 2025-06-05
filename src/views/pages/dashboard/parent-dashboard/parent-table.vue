<template>
  <div class="col-xxl-8 col-xl-7 d-flex">
    <div class="card flex-fill">
      <div
        class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
      >
        <h4 class="card-title mb-3">Exam Result</h4>
        <div class="d-flex align-items-center">
          <div class="dropdown me-3 mb-3">
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
          <div class="dropdown mb-3">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-calendar me-2"></i>All Exams
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Quartely
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Practical
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  1st Term
                </a>
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
                <th>Exams</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="record in Parent_Dashboard" :key="record.id">
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
                <td>{{ record.Exams }}</td>
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
</template>
<script>
import Parent_Dashboard from "@/assets/json/parent-dashboard.json";
export default {
  data() {
    return {
      Parent_Dashboard: Parent_Dashboard,
    };
  },
};
</script>
