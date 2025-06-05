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
        <app-sidebar></app-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="flex-fill border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Custom Fields</h5>
                  <p>Custom Fields configuration</p>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white btn-icon me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#add_custom_field"
                    ><i class="ti ti-plus"></i
                  ></a>
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex d-block">
                <div class="flex-fill">
                  <div class="card">
                    <div
                      class="card-header d-flex align-items-center justify-content-between p-3"
                    >
                      <h5>Expense</h5>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-outline-light bg-white btn-icon me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_custom_field"
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
                    <div class="card-body p-3 pb-0">
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Label</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Type</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Default Value</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Required Value</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Status</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header d-flex align-items-center justify-content-between p-3"
                    >
                      <h5>Transaction</h5>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-outline-light bg-white btn-icon me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_custom_field"
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
                    <div class="card-body p-3 pb-0">
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Label</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Type</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Default Value</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Required Value</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Status</label>
                            <input type="text" class="form-control" />
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
  <custom-fields-modal></custom-fields-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "App Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "App Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/app-settings/custom-fields");
    },
  },
};
</script>
