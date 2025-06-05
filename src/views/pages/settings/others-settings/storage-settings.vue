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
                  <h5 class="mb-1">Storage</h5>
                  <p>Storage Settings Configuration</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="card">
                <div class="card-body p-3 pb-0">
                  <div class="row">
                    <div class="col-xxl-4 col-md-6">
                      <div
                        class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                      >
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-md rounded bg-light p-2 me-2"
                            ><img src="@/assets/img/icons/storage-icon-01.svg" alt="Img"
                          /></span>
                          <h6>Local Storage</h6>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="status-toggle modal-status">
                            <input type="checkbox" id="user1" class="check" />
                            <label for="user1" class="checktoggle"> </label>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-outline-light bg-white btn-icon ms-2"
                            data-bs-toggle="modal"
                            data-bs-target="#connect_sms"
                            ><i class="ti ti-settings-cog"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-md-6">
                      <div
                        class="d-flex align-items-center justify-content-between bg-white p-3 border rounded mb-3"
                      >
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-md rounded bg-light p-2 me-2"
                            ><img src="@/assets/img/icons/storage-icon-02.svg" alt="Img"
                          /></span>
                          <h6>AWS</h6>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="status-toggle modal-status">
                            <input type="checkbox" id="user2" class="check" />
                            <label for="user2" class="checktoggle"> </label>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-outline-light bg-white btn-icon ms-2"
                            data-bs-toggle="modal"
                            data-bs-target="#connect_sms"
                            ><i class="ti ti-settings-cog"></i
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
  <div class="modal fade" id="connect_sms">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">AWS Settings</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">AWS Access Key</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter AWS Access Key"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Secret Key</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Secret Key"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Bucket Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Bucket Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Region</label>
                  <input type="text" class="form-control" placeholder="Enter Region" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Base URL</label>
                  <input type="text" class="form-control" placeholder="Enter Base URL" />
                </div>
                <div
                  class="modal-satus-toggle d-flex align-items-center justify-content-between"
                >
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="status-toggle modal-status">
                    <input type="checkbox" id="user4" class="check" checked="" />
                    <label for="user4" class="checktoggle"> </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
      this.$router.push("/others-settings/storage");
    },
  },
};
</script>
