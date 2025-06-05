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
        <system-sidebar></system-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="flex-fill border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Email Templates</h5>
                  <p>Email Templates Configuration</p>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white btn-icon me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#add_email_template"
                    ><i class="ti ti-plus"></i
                  ></a>
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex">
                <div class="flex-fill">
                  <div class="card">
                    <div class="card-body p-3 pb-0">
                      <div class="row">
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Email Verification</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Welcome Email</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Feature Announcement</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Plan Announcement</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">User Remainder</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Feedback Request</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Plan Removal Remainder</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Plan Expired</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-md-6">
                          <div
                            class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                          >
                            <h5 class="fs-15 fw-normal">Policy Update Notice</h5>
                            <div class="d-flex align-items-center">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_email_template"
                                ><i class="ti ti-edit"></i
                              ></a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-outline-light bg-white btn-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                                ><i class="ti ti-trash"></i
                              ></a>
                            </div>
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
  <email-templates-modal></email-templates-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "System Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "System Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/system-settings/email-templates");
    },
  },
};
</script>
