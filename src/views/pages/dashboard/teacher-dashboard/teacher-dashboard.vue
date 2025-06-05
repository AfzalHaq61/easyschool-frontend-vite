<template>
  <index-loader></index-loader>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div class="my-auto mb-2">
          <h3 class="page-title mb-1">Teacher Dashboard</h3>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/dashboard/">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Teacher Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- Greeting Section -->
      <div class="row">
        <div class="col-md-12 d-flex">
          <div class="card flex-fill bg-info bg-03">
            <div class="card-body">
              <h1 class="text-white mb-1">Good Morning Ms.Teena</h1>
              <p class="text-white mb-3">Have a Good day at work</p>
              <p class="text-light">
                Notice : There is a staff meeting at 9AM today, Dont forget to Attend!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- /Greeting Section -->

      <!-- Teacher-Profile -->
      <teacher-profile></teacher-profile>
      <!-- Teacher-profile -->

      <!-- Syllabus -->
      <teacher-lesson></teacher-lesson>
      <!-- /Syllabus -->

      <teacher-table></teacher-table>
    </div>
  </div>
  <teacher-dashboard-modal></teacher-dashboard-modal>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
