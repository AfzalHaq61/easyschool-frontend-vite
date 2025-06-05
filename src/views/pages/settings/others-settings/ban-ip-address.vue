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
        <others-sidebar></others-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Ban IP Address</h5>
                  <p>Ban IP Address Configuration</p>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white btn-icon me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#add_ban_ip"
                    ><i class="ti ti-plus"></i
                  ></a>
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-4 col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div
                      class="card-header p-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <span
                          class="avatar avatar-sm rounded p-1 text-danger bg-soft-danger me-2"
                          ><i class="ti ti-ban"></i
                        ></span>
                        <h6>198.120.16.01</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_ban_ip"
                          ><i class="ti ti-edit"></i
                        ></a>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex align-items-center">
                        <span class="flex-shrink-0 d-block me-2"
                          ><i class="ti ti-info-square-rounded"></i
                        ></span>
                        <p>
                          Temporarily block to protect user accounts from internet
                          fraudsters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div
                      class="card-header p-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <span
                          class="avatar avatar-sm rounded p-1 text-danger bg-soft-danger me-2"
                          ><i class="ti ti-ban"></i
                        ></span>
                        <h6>198.160.11.20</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_ban_ip"
                          ><i class="ti ti-edit"></i
                        ></a>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex align-items-center">
                        <span class="flex-shrink-0 d-block me-2"
                          ><i class="ti ti-info-square-rounded"></i
                        ></span>
                        <p>
                          Unauthorized access attempts, or other signs of a potential
                          security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div
                      class="card-header p-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <span
                          class="avatar avatar-sm rounded p-1 text-danger bg-soft-danger me-2"
                          ><i class="ti ti-ban"></i
                        ></span>
                        <h6>198.123.10.2</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_ban_ip"
                          ><i class="ti ti-edit"></i
                        ></a>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex align-items-center">
                        <span class="flex-shrink-0 d-block me-2"
                          ><i class="ti ti-info-square-rounded"></i
                        ></span>
                        <p>Trying to access restricted areas of the admin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-md-6 d-flex">
                  <div class="card flex-fill">
                    <div
                      class="card-header p-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <span
                          class="avatar avatar-sm rounded p-1 text-danger bg-soft-danger me-2"
                          ><i class="ti ti-ban"></i
                        ></span>
                        <h6>198.110.01.05</h6>
                      </div>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_ban_ip"
                          ><i class="ti ti-edit"></i
                        ></a>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal"
                          ><i class="ti ti-trash"></i
                        ></a>
                      </div>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex align-items-center">
                        <span class="flex-shrink-0 d-block me-2"
                          ><i class="ti ti-info-square-rounded"></i
                        ></span>
                        <p>Found downloading or uploading inappropriate content</p>
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
  <ban-modal></ban-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Other Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Other Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/others-settings/ban-ip-address");
    },
  },
};
</script>
