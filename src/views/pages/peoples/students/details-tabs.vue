<template>
  <ul class="nav nav-tabs nav-tabs-bottom mb-4">
    <li>
      <router-link to="/students/student-details" class="nav-link"
        ><i class="ti ti-school me-2"></i>Student Details</router-link
      >
    </li>
    <li>
      <router-link to="/students/student-time-table" class="nav-link"
        ><i class="ti ti-table-options me-2"></i>Time Table</router-link
      >
    </li>
    <li>
      <router-link to="/students/student-leaves" class="nav-link"
        ><i class="ti ti-calendar-due me-2"></i>Leave & Attendance</router-link
      >
    </li>
    <li>
      <router-link to="/students/student-fees" class="nav-link"
        ><i class="ti ti-report-money me-2"></i>Fees</router-link
      >
    </li>
    <li>
      <router-link to="/students/student-result" class="nav-link"
        ><i class="ti ti-bookmark-edit me-2"></i>Exam & Results</router-link
      >
    </li>
    <li>
      <router-link to="/students/student-library" class="nav-link"
        ><i class="ti ti-books me-2"></i>Library</router-link
      >
    </li>
  </ul>
</template>
