<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content bg-white">
      <div
        class="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3"
      >
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <academic-sidebar></academic-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">School Settings</h5>
                  <p>School Settings Configuration</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex">
                <div class="row flex-fill">
                  <div class="col-xl-10">
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                    >
                      <div class="row align-items-center flex-fill">
                        <div class="col-xxl-8 col-lg-6">
                          <div class="mb-3">
                            <h6>School Name</h6>
                            <p>Shows name of your school</p>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter School Name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                    >
                      <div class="row align-items-center flex-fill">
                        <div class="col-xxl-8 col-lg-6">
                          <div class="mb-3">
                            <h6>Phone Number</h6>
                            <p>Shows phone number of your school</p>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                    >
                      <div class="row align-items-center flex-fill">
                        <div class="col-xxl-8 col-lg-6">
                          <div class="mb-3">
                            <h6>Email</h6>
                            <p>Shows email of your school</p>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6">
                          <div class="mb-3">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                    >
                      <div class="row align-items-center flex-fill">
                        <div class="col-xxl-8 col-lg-6">
                          <div class="mb-3">
                            <h6>Fax</h6>
                            <p>Shows fax of your school</p>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Fax"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                    >
                      <div class="row align-items-center flex-fill">
                        <div class="col-xxl-8 col-lg-6">
                          <div class="mb-3">
                            <h6>Address</h6>
                            <p>Shows address of your school</p>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6">
                          <div class="mb-3">
                            <textarea
                              rows="4"
                              class="form-control"
                              placeholder="Add Comment"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
      title: "Academic Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Academic Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/academic-settings/school-settings");
    },
  },
};
</script>
