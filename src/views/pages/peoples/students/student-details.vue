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
                to="/students/edit-student"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Student</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Page Header -->
      </div>

      <div class="row">
        <!-- Student Information -->
        <students-sidebar></students-sidebar>
        <!-- /Student Information -->

        <div class="col-xxl-9 col-xl-8">
          <div class="row">
            <div class="col-md-12">
              <!-- List -->
              <details-tabs></details-tabs>
              <!-- /List -->

              <!-- Parents Information -->
              <div class="card">
                <div class="card-header">
                  <h5>Parents Information</h5>
                </div>
                <div class="card-body">
                  <div class="border rounded p-3 pb-0 mb-3">
                    <div class="row">
                      <div class="col-sm-6 col-lg-4">
                        <div class="d-flex align-items-center mb-3">
                          <span class="avatar avatar-lg flex-shrink-0">
                            <img
                              src="@/assets/img/parents/parent-13.jpg"
                              class="img-fluid rounded"
                              alt="img"
                            />
                          </span>
                          <div class="ms-2 overflow-hidden">
                            <h6 class="text-truncate">Jerald Vicinius</h6>
                            <p class="text-primary">Father</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Phone</p>
                          <p>+1 45545 46464</p>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="mb-3 overflow-hidden me-3">
                            <p class="text-dark fw-medium mb-1">Email</p>
                            <p class="text-truncate">jera@example.com</p>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Print"
                            data-bs-original-title="Reset Password"
                            class="btn btn-dark btn-icon btn-sm mb-3"
                            ><i class="ti ti-lock-x"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border rounded p-3 pb-0 mb-3">
                    <div class="row">
                      <div class="col-lg-4 col-sm-6">
                        <div class="d-flex align-items-center mb-3">
                          <span class="avatar avatar-lg flex-shrink-0">
                            <img
                              src="@/assets/img/parents/parent-14.jpg"
                              class="img-fluid rounded"
                              alt="img"
                            />
                          </span>
                          <div class="ms-2 overflow-hidden">
                            <h6 class="text-truncate">Roberta Webber</h6>
                            <p class="text-primary">Mother</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Phone</p>
                          <p>+1 46499 24357</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="mb-3 overflow-hidden me-3">
                            <p class="text-dark fw-medium mb-1">Email</p>
                            <p class="text-truncate">robe@example.com</p>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Print"
                            data-bs-original-title="Reset Password"
                            class="btn btn-dark btn-icon btn-sm mb-3"
                            ><i class="ti ti-lock-x"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border rounded p-3 pb-0">
                    <div class="row">
                      <div class="col-lg-4 col-sm-6">
                        <div class="d-flex align-items-center mb-3">
                          <span class="avatar avatar-lg flex-shrink-0">
                            <img
                              src="@/assets/img/parents/parent-13.jpg"
                              class="img-fluid rounded"
                              alt="img"
                            />
                          </span>
                          <div class="ms-2 overflow-hidden">
                            <h6 class="text-truncate">Jerald Vicinius</h6>
                            <p class="text-primary">Gaurdian (Father)</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="mb-3">
                          <p class="text-dark fw-medium mb-1">Phone</p>
                          <p>+1 45545 46464</p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="mb-3 overflow-hidden me-3">
                            <p class="text-dark fw-medium mb-1">Email</p>
                            <p class="text-truncate">jera@example.com</p>
                          </div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Print"
                            data-bs-original-title="Reset Password"
                            class="btn btn-dark btn-icon btn-sm mb-3"
                            ><i class="ti ti-lock-x"></i
                          ></a>
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
                        <p class="text-truncate fw-medium text-dark">
                          BirthCertificate.pdf
                        </p>
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
                        <p class="text-truncate fw-medium text-dark">
                          Transfer Certificate.pdf
                        </p>
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
                      <p class="text-dark fw-medium mb-1">Current Address</p>
                      <p>3495 Red Hawk Road, Buffalo Lake, MN 55314</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <span
                      class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
                      ><i class="ti ti-map-pins"></i
                    ></span>
                    <div>
                      <p class="text-dark fw-medium mb-1">Permanent Address</p>
                      <p>3495 Red Hawk Road, Buffalo Lake, MN 55314</p>
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
                    <div class="col-md-6">
                      <div class="mb-3">
                        <p class="text-dark fw-medium mb-1">Previous School Name</p>
                        <p>Oxford Matriculation, USA</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <p class="text-dark fw-medium mb-1">School Address</p>
                        <p>1852 Barnes Avenue, Cincinnati, OH 45202</p>
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
                        <p class="text-dark fw-medium mb-1">Bank Name</p>
                        <p>Bank of America</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="text-dark fw-medium mb-1">Branch</p>
                        <p>Cincinnati</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <p class="text-dark fw-medium mb-1">IFSC</p>
                        <p>BOA83209832</p>
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
                  <h5>Medical History</h5>
                </div>
                <div class="card-body pb-1">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <p class="text-dark fw-medium mb-1">Known Allergies</p>
                        <span class="badge bg-light text-dark">Rashes</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <p class="text-dark fw-medium mb-1">Medications</p>
                        <p>-</p>
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
  <student-details-modal></student-details-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Student Details",
      text: "Dashboard",
      text1: "Student",
      text2: "Student Details",
    };
  },
};
</script>
