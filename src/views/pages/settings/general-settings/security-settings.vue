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
          <div class="border-start ps-3 flex-fill">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap border-bottom mb-3 pt-3"
            >
              <div class="mb-3">
                <h5>Security Settings</h5>
                <p>Upload your photo & personal details here</p>
              </div>
            </div>
            <div class="d-block">
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Password</h6>
                  <p>Set a unique password to protect the account</p>
                </div>
                <div class="mb-3">
                  <a href="javascript:void(0);" class="btn btn-outline-primary">Change Pasword</a>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Two Factor</h6>
                  <p>Receive codes via SMS or email every time you login</p>
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
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Google Authentication</h6>
                  <p>Connect to Google</p>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span class="badge badge-soft-success me-3"
                    ><i class="ti ti-circle-filled fs-5 me-1"></i>Connected</span
                  >
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm2"
                    />
                  </div>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Phone Number Verification</h6>
                  <p>The Phone Number associated with the account</p>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <p class="mb-3 me-3">+1 73649 72648</p>
                  <span class="badge badge-soft-success me-3 mb-3"
                    ><i class="ti ti-checks me-1"></i>Verified</span
                  >
                  <a href="javascript:void(0);" class="btn btn-light mb-3"
                    ><i class="ti ti-edit me-2"></i>Edit</a
                  >
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Email Address</h6>
                  <p>The email address associated with the account</p>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <p class="mb-3 me-3">admin@example.com</p>
                  <span class="badge badge-soft-success me-3 mb-3"
                    ><i class="ti ti-checks me-1"></i>Verified</span
                  >
                  <a href="javascript:void(0);" class="btn btn-light mb-3"
                    ><i class="ti ti-edit me-2"></i>Edit</a
                  >
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Device Management</h6>
                  <p>The devices associated with the account</p>
                </div>
                <div class="mb-3">
                  <a href="javascript:void(0);" class="btn btn-outline-primary">Manage</a>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Account Activity</h6>
                  <p>The activities of the account</p>
                </div>
                <div class="mb-3">
                  <a href="javascript:void(0);" class="btn btn-outline-primary">View</a>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Deactivate Account</h6>
                  <p>
                    This will shutdown your account. Your account will be reactive when
                    you sign in again
                  </p>
                </div>
                <div class="mb-3">
                  <a href="javascript:void(0);" class="btn btn-outline-primary">Deactivate</a>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center rounded flex-wrap bg-white border rounded p-3 pb-0 mb-3"
              >
                <div class="mb-3">
                  <h6>Delete Account</h6>
                  <p>Your account will be permanently deleted</p>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    >Delete</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-body text-center">
            <span class="delete-icon">
              <i class="ti ti-trash-x"></i>
            </span>
            <h4>Confirm Deletion</h4>
            <p>
              You want to delete all the marked items, this cant be undone once you
              delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
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
  methods: {
    submitForm() {
      this.$router.push("/settings/security-settings");
    },
  },
};
</script>
