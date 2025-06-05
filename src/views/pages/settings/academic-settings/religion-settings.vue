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
                  <h5 class="mb-1">Religion</h5>
                  <p>Religion Settings Configuration</p>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white btn-icon me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#add_religion"
                    ><i class="ti ti-plus"></i
                  ></a>
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex">
                <div class="row flex-fill">
                  <div class="col-xxl-4 col-md-6">
                    <div
                      class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                    >
                      <h5 class="fs-15 fw-normal">Hindu</h5>
                      <div class="d-flex align-items-center">
                        <div class="status-toggle modal-status">
                          <input type="checkbox" id="user1" class="check" />
                          <label for="user1" class="checktoggle"> </label>
                        </div>
                        <div class="d-flex align-items-center ms-3">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_religion"
                            ><i class="ti ti-edit me-2"></i
                          ></a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <div
                      class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                    >
                      <h5 class="fs-15 fw-normal">Christian</h5>
                      <div class="d-flex align-items-center">
                        <div class="status-toggle modal-status">
                          <input type="checkbox" id="user2" class="check" />
                          <label for="user2" class="checktoggle"> </label>
                        </div>
                        <div class="d-flex align-items-center ms-3">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_religion"
                            ><i class="ti ti-edit me-2"></i
                          ></a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-md-6">
                    <div
                      class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                    >
                      <h5 class="fs-15 fw-normal">Islam</h5>
                      <div class="d-flex align-items-center">
                        <div class="status-toggle modal-status">
                          <input type="checkbox" id="user3" class="check" />
                          <label for="user3" class="checktoggle"> </label>
                        </div>
                        <div class="d-flex align-items-center ms-3">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_religion"
                            ><i class="ti ti-edit me-2"></i
                          ></a>
                          <a
                            href="javascript:void(0);"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <religion-modal></religion-modal>
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
      this.$router.push("/academic-settings/religion");
    },
  },
};
</script>
