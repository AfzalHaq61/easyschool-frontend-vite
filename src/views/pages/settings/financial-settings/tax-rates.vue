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
        <financial-sidebar></financial-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Tax Rates</h5>
                  <p>Tax Rates Configuration</p>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white btn-icon me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#add_tax_rate"
                    ><i class="ti ti-plus"></i
                  ></a>
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex">
                <div class="flex-fill">
                  <div class="row">
                    <div class="col-xxl-4 col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">VAT</label>
                        <div class="position-relative">
                          <input type="text" class="form-control pe-5" value="16%" />
                          <div
                            class="d-flex align-items-center position-absolute end-0 top-0 me-2 mt-2"
                          >
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_tax_rate"
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
                    <div class="col-xxl-4 col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">GST</label>
                        <div class="position-relative">
                          <input type="text" class="form-control" value="14%" />
                          <div
                            class="d-flex align-items-center position-absolute end-0 top-0 me-2 mt-2"
                          >
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_tax_rate"
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
                    <div class="col-xxl-4 col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">HST</label>
                        <div class="position-relative">
                          <input type="text" class="form-control" value="12%" />
                          <div
                            class="d-flex align-items-center position-absolute end-0 top-0 me-2 mt-2"
                          >
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_tax_rate"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <tax-rates-modal></tax-rates-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Financial Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Financial Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/financial-settings/tax-rates");
    },
  },
};
</script>
