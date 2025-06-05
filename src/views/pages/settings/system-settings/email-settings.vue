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
                  <h5 class="mb-1">Email Settings</h5>
                  <p>Email Settings Configuration</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex">
                <div class="flex-fill">
                  <div class="row">
                    <div class="col-xxl-4 col-xl-6">
                      <div class="card">
                        <div
                          class="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0"
                        >
                          <div class="d-flex align-items-center">
                            <span
                              class="avatar avatar-lg p-2 rounded bg-gray flex-shrink-0 me-2"
                              ><img src="@/assets/img/icons/php-icon.svg" alt="Img"
                            /></span>
                            <h6>PHP Mailer</h6>
                          </div>
                          <span class="badge bg-transparent-success text-success"
                            >Connected</span
                          >
                        </div>
                        <div class="card-body pt-0">
                          <p>
                            Used to send emails safely and easily via PHP code from a web
                            server.
                          </p>
                        </div>
                        <div
                          class="card-footer d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-light"
                              data-bs-toggle="modal"
                              data-bs-target="#connect_php"
                              ><i class="ti ti-tool me-2"></i>View Integration</a
                            >
                          </div>
                          <div class="status-toggle modal-status">
                            <input type="checkbox" id="user1" class="check" />
                            <label for="user1" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6">
                      <div class="card">
                        <div
                          class="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0"
                        >
                          <div class="d-flex align-items-center">
                            <span
                              class="avatar avatar-lg p-2 rounded bg-gray flex-shrink-0 me-2"
                              ><img src="@/assets/img/icons/smtp-icon.svg" alt="Img"
                            /></span>
                            <h6>SMTP</h6>
                          </div>
                          <span class="badge bg-transparent-dark text-dark"
                            >Not Connected</span
                          >
                        </div>
                        <div class="card-body pt-0">
                          <p>
                            SMTP is used to send, relay or forward messages from a mail
                            client.
                          </p>
                        </div>
                        <div
                          class="card-footer d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-light"
                              data-bs-toggle="modal"
                              data-bs-target="#connect_smtp"
                              ><i class="ti ti-tool me-2"></i>View Integration</a
                            >
                          </div>
                          <div class="status-toggle modal-status">
                            <input type="checkbox" id="user2" class="check" />
                            <label for="user2" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6">
                      <div class="card">
                        <div
                          class="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0"
                        >
                          <div class="d-flex align-items-center">
                            <span
                              class="avatar avatar-lg p-2 rounded bg-gray flex-shrink-0 me-2"
                              ><img src="@/assets/img/icons/google-icon-02.svg" alt="Img"
                            /></span>
                            <h6>Google</h6>
                          </div>
                          <span class="badge bg-transparent-dark text-dark"
                            >Not Connected</span
                          >
                        </div>
                        <div class="card-body pt-0">
                          <p>
                            Cloud-based email marketing tool that assists marketers and
                            developers .
                          </p>
                        </div>
                        <div
                          class="card-footer d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-light"
                              data-bs-toggle="modal"
                              data-bs-target="#connect_test_mail"
                              ><i class="ti ti-tool me-2"></i>View Integration</a
                            >
                          </div>
                          <div class="status-toggle modal-status">
                            <input type="checkbox" id="user3" class="check" />
                            <label for="user3" class="checktoggle"> </label>
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
  <email-settings-modal></email-settings-modal>
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
      this.$router.push("/system-settings/email-settings");
    },
  },
};
</script>
