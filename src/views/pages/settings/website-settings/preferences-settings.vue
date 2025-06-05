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
        <website-sidebar></website-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Preferences</h5>
                  <p>Personalize your path and settings of your website</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex d-block">
                <div class="flex-fill">
                  <div class="card">
                    <div class="card-body p-3 pb-0">
                      <div class="row">
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Students</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user1" class="check" />
                              <label for="user1" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Teachers</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user2" class="check" />
                              <label for="user2" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Guardians</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user3" class="check" />
                              <label for="user3" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Parents</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user4" class="check" />
                              <label for="user4" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Classes</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user5" class="check" />
                              <label for="user5" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Examinations</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user6" class="check" />
                              <label for="user6" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Fees Collection</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user7" class="check" />
                              <label for="user7" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Library</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user8" class="check" />
                              <label for="user8" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Sports</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user9" class="check" />
                              <label for="user9" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Hostel</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user10" class="check" />
                              <label for="user10" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Transport</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user11" class="check" />
                              <label for="user11" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Reports</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user12" class="check" />
                              <label for="user12" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Departent</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user13" class="check" />
                              <label for="user13" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Designation</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user14" class="check" />
                              <label for="user14" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Staffs</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user15" class="check" />
                              <label for="user15" class="checktoggle"> </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div
                            class="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3"
                          >
                            <h5 class="fw-normal fs-15">Accounts</h5>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user16" class="check" />
                              <label for="user16" class="checktoggle"> </label>
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
</template>
<script>
export default {
  data() {
    return {
      title: "Website Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Website Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/webiste-settings/preferences");
    },
  },
};
</script>
