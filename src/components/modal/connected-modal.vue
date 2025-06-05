<template>
  <!-- Connect App -->
  <div class="modal fade" id="connect_app">
    <div class="modal-dialog modal-dialog-centered connected-app-modal">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <span class="modal-logo-small me-3"
              ><img src="@/assets/img/icons/modal-small-logo.svg" alt="Img"
            /></span>
            <div class="connected-design">
              <span></span>
              <span></span>
            </div>
            <span><img src="@/assets/img/icons/connected-app-01.svg" alt="Img" /></span>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <h5 class="mb-2">Connect with Slack</h5>
            <p>Confirm requirements to connect with Slack</p>
          </div>
          <div>
            <h5 class="mb-2">Slack requires :</h5>
            <ul>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                New Slack Workspace for communication
              </li>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Slack API to interact with Slack
              </li>
              <li class="d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Implement OAuth 2.0 for authorization
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <form @submit.prevent="submitForm" class="w-100">
            <div class="d-flex align-items-center mb-3">
              <input type="text" class="form-control flex-fill" />
              <a
                class="border rounded d-flex align-items-center justify-content-center p-2 ms-3"
                ><i class="ti ti-copy"></i
              ></a>
            </div>
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-light me-3 flex-fill">Cancel</button>
              <button
                type="submit"
                class="btn btn-primary flex-fill"
                data-bs-dismiss="modal"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect App -->

  <!-- Connect App -->
  <div class="modal fade" id="connect_app_two">
    <div class="modal-dialog modal-dialog-centered connected-app-modal">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <span class="modal-logo-small me-3"
              ><img src="@/assets/img/icons/modal-small-logo.svg" alt="Img"
            /></span>
            <div class="connected-design">
              <span></span>
              <span></span>
            </div>
            <span><img src="@/assets/img/icons/connected-app-02.svg" alt="Img" /></span>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <h5 class="mb-2">Connect with Google Calendar</h5>
            <p>Confirm requirements to connect with Google Calendar</p>
          </div>
          <div>
            <h5 class="mb-2">Slack requires :</h5>
            <ul>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-16"></i
                ></span>
                New Slack Workspace for communication
              </li>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Slack API to interact with Slack
              </li>
              <li class="d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Implement OAuth 2.0 for authorization
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <form @submit.prevent="submitForm" class="w-100">
            <div class="d-flex align-items-center mb-3">
              <input type="text" class="form-control flex-fill" />
              <a
                class="border rounded d-flex align-items-center justify-content-center p-2 ms-3"
                ><i class="ti ti-copy"></i
              ></a>
            </div>
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-light me-3 flex-fill">Cancel</button>
              <button
                type="submit"
                class="btn btn-primary flex-fill"
                data-bs-dismiss="modal"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect App -->

  <!-- Connect App -->
  <div class="modal fade" id="connect_app_three">
    <div class="modal-dialog modal-dialog-centered connected-app-modal">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <span class="modal-logo-small me-3"
              ><img src="@/assets/img/icons/modal-small-logo.svg" alt="Img"
            /></span>
            <div class="connected-design">
              <span></span>
              <span></span>
            </div>
            <span><img src="@/assets/img/icons/connected-app-03.svg" alt="Img" /></span>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <h5 class="mb-2">Connect with Email</h5>
            <p>Confirm requirements to connect with email</p>
          </div>
          <div>
            <h5 class="mb-2">Slack requires :</h5>
            <ul>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-16"></i
                ></span>
                New Slack Workspace for communication
              </li>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Slack API to interact with Slack
              </li>
              <li class="d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Implement OAuth 2.0 for authorization
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <form @submit.prevent="submitForm" class="w-100">
            <div class="d-flex align-items-center mb-3">
              <input type="text" class="form-control flex-fill" />
              <a
                class="border rounded d-flex align-items-center justify-content-center p-2 ms-3"
                ><i class="ti ti-copy"></i
              ></a>
            </div>
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-light me-3 flex-fill">Cancel</button>
              <button
                type="submit"
                class="btn btn-primary flex-fill"
                data-bs-dismiss="modal"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect App -->

  <!-- Connect App -->
  <div class="modal fade" id="connect_app_four">
    <div class="modal-dialog modal-dialog-centered connected-app-modal">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <span class="modal-logo-small me-3"
              ><img src="@/assets/img/icons/modal-small-logo.svg" alt="Img"
            /></span>
            <div class="connected-design">
              <span></span>
              <span></span>
            </div>
            <span><img src="@/assets/img/icons/connected-app-04.svg" alt="Img" /></span>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <h5 class="mb-2">Connect with Github</h5>
            <p>Confirm requirements to connect with Github</p>
          </div>
          <div>
            <h5 class="mb-2">Slack requires :</h5>
            <ul>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-16"></i
                ></span>
                New Slack Workspace for communication
              </li>
              <li class="mb-2 d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Slack API to interact with Slack
              </li>
              <li class="d-flex align-items-center">
                <span class="avatar avatar-xs rounded-circle bg-success border-0 me-2"
                  ><i class="ti ti-check fs-14"></i
                ></span>
                Implement OAuth 2.0 for authorization
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <form @submit.prevent="submitForm" class="w-100">
            <div class="d-flex align-items-center mb-3">
              <input type="text" class="form-control flex-fill" />
              <a
                class="border rounded d-flex align-items-center justify-content-center p-2 ms-3"
                ><i class="ti ti-copy"></i
              ></a>
            </div>
            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-light me-3 flex-fill">Cancel</button>
              <button
                type="submit"
                class="btn btn-primary flex-fill"
                data-bs-dismiss="modal"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect App -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/settings/connected-apps");
    },
  },
};
</script>
