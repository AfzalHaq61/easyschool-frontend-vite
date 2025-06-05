<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
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
        <general-sidebar></general-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="flex-fill border-start ps-3">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3 pt-3"
            >
              <div class="mb-3">
                <h5>Notifications</h5>
                <p>
                  Get notification what happening right now, you can turn off at any time
                </p>
              </div>
            </div>
            <div class="d-block">
              <div class="card border-0 p-3 pb-0 mb-3 rounded">
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3"
                >
                  <div class="mb-3">
                    <h6>Email Notifications</h6>
                    <p>
                      Substance can send you email notifications for any new direct
                      messages
                    </p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3"
                >
                  <div class="mb-3">
                    <h6>News and Update Settings</h6>
                    <p>
                      The latest news about latest features and softaware update settings
                    </p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3"
                >
                  <div class="mb-3">
                    <h6>Tips & Tutorials</h6>
                    <p>Tips & Tricks in order to improve your performance efficiency</p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap mb-0"
                >
                  <div class="mb-3">
                    <h6>Offers & Promotions</h6>
                    <p>Promotion about package prices and its latest discouts</p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border-0 p-3 pb-0 mb-3 rounded">
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3"
                >
                  <div class="mb-3">
                    <h6>More Activity</h6>
                    <p>
                      Substance can send you email notifications for any new direct
                      messages
                    </p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switch-sm"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3"
                >
                  <div class="mb-3">
                    <h6>All Remainders & Activity</h6>
                    <p>
                      Notify all system activats and remainders that have been created
                    </p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3"
                >
                  <div class="mb-3">
                    <h6>Activity Only</h6>
                    <p>
                      Ony notify latest activity updates about increasing or decreasing
                      data
                    </p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap mb-0"
                >
                  <div class="mb-3">
                    <h6>Important Remainders Only</h6>
                    <p>Only notify all the remainders that have been made</p>
                  </div>
                  <div class="mb-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      title: "General Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "General Settings",
    };
  },
};
</script>
