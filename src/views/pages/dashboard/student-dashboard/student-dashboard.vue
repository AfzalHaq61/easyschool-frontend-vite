<template>
  <index-loader></index-loader>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div class="my-auto mb-2">
          <h3 class="page-title mb-1">Student Dashboard</h3>
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/dashboard/">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Student Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- /Page Header -->

      <student-profile></student-profile>

      <student-performance></student-performance>

      <student-classes></student-classes>

      <student-leave></student-leave>

      <student-notice></student-notice>
    </div>
  </div>
  <student-dashboard-modal></student-dashboard-modal>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
