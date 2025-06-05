<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">

        <!-- Page Header -->
        <div class="col-md-12">
          <div
            class="d-md-flex d-block align-items-center justify-content-between mb-3"
          >
            <breadcrumb-index
              :title="title"
              :text="text"
              :text1="text1"
              :text2="text2"
            />
            <div
              class="d-flex my-xl-auto right-content align-items-center flex-wrap"
            >
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#login_detail"
                ><i class="ti ti-lock me-2"></i>Login Details</a
              >
              <router-link
                to="/teachers/edit-teacher"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Teacher</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Page Header -->
      </div>

      <div class="row">
        <!-- Teacher Information -->
        <div class="col-xxl-3 col-lg-4 theiaStickySidebar">
          <teachers-sidebar></teachers-sidebar>
        </div>
        <!-- /Teacher Information -->

        <div class="col-xxl-9 col-xl-8">
          <div class="row">
            <div class="col-md-12">
              <!-- List -->
              <teacher-details-tabs></teacher-details-tabs>
              <!-- /List -->
              <div class="card">
                <div
                  class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
                >
                  <h4 class="mb-3">Time Table</h4>
                  <div class="d-flex align-items-center flex-wrap">
                    <div class="dropdown mb-3">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-light border-white bg-white dropdown-toggle shadow-md"
                        data-bs-toggle="dropdown"
                        ><i class="ti ti-calendar-due me-2"></i>This Year</a
                      >
                      <ul class="dropdown-menu p-3">
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item rounded-1"
                          >
                            This Year
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item rounded-1"
                          >
                            This Month
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item rounded-1"
                          >
                            This Week
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <teacher-monday></teacher-monday>
                </div>
                <div class="card-footer border-0 pb-0">
                  <div class="row">
                    <div class="col-lg-4 col-xxl-4 col-xl-4 d-flex">
                      <div class="card flex-fill">
                        <div class="card-body bg-transparent-primary">
                          <span class="bg-primary badge badge-sm mb-2"
                            >Morning Break</span
                          >
                          <p class="text-dark">
                            <i class="ti ti-clock me-1"></i>10:30 to 10 :45 AM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-xxl-3 d-flex">
                      <div class="card flex-fill">
                        <div class="card-body bg-transparent-warning">
                          <span class="bg-warning badge badge-sm mb-2"
                            >Lunch</span
                          >
                          <p class="text-dark">
                            <i class="ti ti-clock me-1"></i>10:30 to 10 :45 AM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-xxl-3 d-flex">
                      <div class="card flex-fill">
                        <div class="card-body bg-transparent-info">
                          <span class="bg-info badge badge-sm mb-2"
                            >Evening Break</span
                          >
                          <p class="text-dark">
                            <i class="ti ti-clock me-1"></i>03:30 PM to 03:45 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <teacher-details-modal></teacher-details-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Teacher Details",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Teacher Details",
    };
  },
};
</script>
