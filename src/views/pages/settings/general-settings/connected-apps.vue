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
        <general-sidebar></general-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="flex-fill border-start ps-3">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3 pt-3"
            >
              <div class="mb-3">
                <h5>Connected Apps</h5>
                <p>Upload your photo & personal details here</p>
              </div>
            </div>
            <div class="d-block">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded bg-white"
              >
                <div class="">
                  <div class="d-flex align-items-center">
                    <span
                      class="flex-shrink-0 mb-3 me-2 border rounded p-2 d-flex align-items-center justify-content-center"
                      ><img src="@/assets/img/icons/connected-app-01.svg" alt="Img"
                    /></span>
                    <div class="mb-3">
                      <h6>Slack</h6>
                      <p>
                        Team communication platform with channels for group discussions
                        and direct messaging.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#connect_app"
                    >Connect</a
                  >
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded bg-white"
              >
                <div class="">
                  <div class="d-flex align-items-center">
                    <span
                      class="flex-shrink-0 mb-3 me-2 border rounded p-2 d-flex align-items-center justify-content-center"
                      ><img src="@/assets/img/icons/connected-app-02.svg" alt="Img"
                    /></span>
                    <div class="mb-3">
                      <h6>Google Calendar</h6>
                      <p>
                        Google Calendar is a web-based scheduling tool that allows users
                        to create, manage, and share events.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#connect_app_two"
                    >Connect</a
                  >
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded bg-white"
              >
                <div class="">
                  <div class="d-flex align-items-center">
                    <span
                      class="flex-shrink-0 mb-3 me-2 border rounded p-2 d-flex align-items-center justify-content-center"
                      ><img src="@/assets/img/icons/connected-app-03.svg" alt="Img"
                    /></span>
                    <div class="mb-3">
                      <h6>Gmail</h6>
                      <p>
                        Gmail is a free email service by Google that offers robust spam
                        protection & 15GB of storage.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#connect_app_three"
                    >Connect</a
                  >
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border mb-0 p-3 pb-0 rounded bg-white"
              >
                <div class="">
                  <div class="d-flex align-items-center">
                    <span
                      class="flex-shrink-0 mb-3 me-2 border rounded p-2 d-flex align-items-center justify-content-center"
                      ><img src="@/assets/img/icons/connected-app-04.svg" alt="Img"
                    /></span>
                    <div class="mb-3">
                      <h6>Github</h6>
                      <p>
                        GitHub is a web-based platform for version control and
                        collaboration, allowing developers to host and review code
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#connect_app_four"
                    >Connect</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <connected-modal></connected-modal>
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
