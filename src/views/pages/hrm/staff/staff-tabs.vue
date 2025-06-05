<template>
  <div class="row">
    <div class="col-md-12">
      <ul class="nav nav-tabs nav-tabs-bottom mb-4">
        <li>
          <router-link to="/hrm/staff-details" class="nav-link"
            ><i class="ti ti-info-square-rounded me-2"></i>Basic Details</router-link
          >
        </li>
        <li>
          <router-link to="/hrm/staff-payroll" class="nav-link"
            ><i class="ti ti-file-dollar me-2"></i>Payroll</router-link
          >
        </li>
        <li>
          <router-link to="/hrm/staff-leaves" class="nav-link"
            ><i class="ti ti-calendar-due me-2"></i>Leaves</router-link
          >
        </li>
        <li>
          <router-link to="/hrm/staffs-attendance" class="nav-link"
            ><i class="ti ti-calendar-due me-2"></i>Attendance</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
