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

        <!-- Student Information -->
        <div class="col-xxl-3 col-lg-4 theiaStickySidebar">
          <teachers-sidebar></teachers-sidebar>
        </div>
        <!-- /Student Information -->

        <div class="col-xxl-9 col-lg-8">
          <div class="row">
            <div class="col-md-12">
              <!-- List -->
              <teacher-details-tabs></teacher-details-tabs>
              <!-- /List -->

              <!-- Parents Information -->
              <div class="card">
                <div class="card-header">
                  <h5>Profile Details</h5>
                </div>
                <div class="card-body">
                  <div class="border rounded p-3 pb-0">
                    <div class="row">
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Father’s Name</p>
                          <p>Francis Saviour</p>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Mother Name</p>
                          <p>Stella Bruce</p>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">DOB</p>
                          <p>25 Jan 1992</p>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Martial Status</p>
                          <p>Single</p>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Qualification</p>
                          <p>MBA</p>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Experience</p>
                          <p>2 Years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Parents Information -->
            </div>

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

            <!-- Previous School Details -->
            <div class="col-xxl-12">
              <div class="card">
                <div class="card-header">
                  <h5>Previous School Details</h5>
                </div>
                <div class="card-body pb-1">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Previous School Name</p>
                        <p class="text-dark">Oxford Matriculation, USA</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">School Address</p>
                        <p class="text-dark">1852 Barnes Avenue, Cincinnati, OH 45202</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Phone Number</p>
                        <p class="text-dark">+1 35676 45556</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Previous School Details -->

            <!-- Bank Details -->
            <div class="col-xxl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5>Bank Details</h5>
                </div>
                <div class="card-body pb-1">
                  <div class="row">
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

            <!-- Medical History -->
            <div class="col-xxl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5>Work Details</h5>
                </div>
                <div class="card-body pb-1">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Contract Type</p>
                        <p class="text-dark">Permanent</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Shift</p>
                        <p class="text-dark">Morning</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="mb-1">Work Location</p>
                        <p class="text-dark">2nd Floor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Medical History -->

            <!-- Medical History -->
            <div class="col-xxl-12 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5>Social Media</h5>
                </div>
                <div class="card-body pb-1">
                  <div class="row row-cols-xxl-5 row-cols-xl-3">
                    <div class="col">
                      <div class="mb-3">
                        <p class="mb-1">Facebook</p>
                        <p class="text-dark">www.facebook.com</p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <p class="mb-1">Twitter</p>
                        <p class="text-dark">www.twitter.com</p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <p class="mb-1">Linkedin</p>
                        <p class="text-dark">www.linkedin.com</p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <p class="mb-1">Youtube</p>
                        <p class="text-dark">www.youtube.com</p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                        <p class="mb-1">Instagram</p>
                        <p class="text-dark">www.instagram.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Medical History -->

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
  <teacher-details-modal></teacher-details-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Teacher Details",
      text: "Dashboard",
      text1: "Teachers",
      text2: "Teacher Details",
    };
  },
};
</script>
