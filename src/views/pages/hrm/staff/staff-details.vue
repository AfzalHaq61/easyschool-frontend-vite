<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <!-- Page Header -->
        <div class="col-md-12">
          <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <router-link
                to="/hrm/edit-staff"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Staff</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Page Header -->
        <staff-sidebar></staff-sidebar>

        <div class="col-xxl-9 col-lg-8">
          <staff-tabs></staff-tabs>
          <div class="row">
            <!-- Address -->
            <div class="col-xxl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5>Address</h5>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <span
                      class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
                      ><i class="ti ti-map-pin-up"></i
                    ></span>
                    <div>
                      <p class="mb-1">Current Address</p>
                      <p class="text-dark">3495 Red Hawk Road, Buffalo Lake, MN 55314</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <span
                      class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
                      ><i class="ti ti-map-pins"></i
                    ></span>
                    <div>
                      <p class="mb-1">Permanent Address</p>
                      <p class="text-dark">3495 Red Hawk Road, Buffalo Lake, MN 55314</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Address -->

            <!-- Documents -->
            <div class="col-xxl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5>Documents</h5>
                </div>
                <div class="card-body">
                  <div
                    class="bg-light-300 border rounded d-flex align-items-center justify-content-between mb-3 p-2"
                  >
                    <div class="d-flex align-items-center overflow-hidden">
                      <span
                        class="avatar avatar-md bg-white rounded flex-shrink-0 text-default"
                        ><i class="ti ti-pdf fs-15"></i
                      ></span>
                      <div class="ms-2">
                        <p class="text-truncate">Resume.pdf</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm"
                      ><i class="ti ti-download"></i
                    ></a>
                  </div>
                  <div
                    class="bg-light-300 border rounded d-flex align-items-center justify-content-between p-2"
                  >
                    <div class="d-flex align-items-center overflow-hidden">
                      <span
                        class="avatar avatar-md bg-white rounded flex-shrink-0 text-default"
                        ><i class="ti ti-pdf fs-15"></i
                      ></span>
                      <div class="ms-2">
                        <p class="text-truncate">Joining Letter.pdf</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm"
                      ><i class="ti ti-download"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Documents -->

            <!-- Bank Details -->
            <div class="col-xxl-12 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5>Bank Details</h5>
                </div>
                <div class="card-body pb-1">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Account Name</p>
                        <p class="text-dark">Bank of America</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Account Number</p>
                        <p class="text-dark">178849035684</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Bank Name</p>
                        <p class="text-dark">Bank of America</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Branch</p>
                        <p class="text-dark">Cincinnati</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">IFSC</p>
                        <p class="text-dark">BOA83209832</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Bank Details -->

            <!-- Other Info -->
            <div class="col-xxl-12">
              <div class="card">
                <div class="card-header">
                  <h5>Other Info</h5>
                </div>
                <div class="card-body">
                  <p>
                    Depending on the specific needs of your organization or system,
                    additional information may be collected or tracked. It's important to
                    ensure that any data collected complies with privacy regulations and
                    policies to protect students' sensitive information.
                  </p>
                </div>
              </div>
            </div>
            <!-- /Other Info -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Staff Details",
      text: "Dashboard",
      text1: "HRM",
      text2: "Staff Details",
    };
  },
};
</script>
