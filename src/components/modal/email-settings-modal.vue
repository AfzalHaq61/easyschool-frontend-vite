<template>
  <!-- Connect Php -->
  <div class="modal fade" id="connect_php">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">PHP Mailer</h4>
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
                  <label class="form-label">From Email Address</label>
                  <input type="email" class="form-control" placeholder="Enter Email" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">From Email Name</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Email Name"
                  />
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
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Connect Php -->

  <!-- Connect Smtp -->
  <div class="modal fade" id="connect_smtp">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">SMTP</h4>
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
                  <label class="form-label">From Email Address</label>
                  <input type="email" class="form-control" placeholder="Enter Email" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Host</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Email Host"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Port</label>
                  <input type="password" class="form-control" placeholder="Enter Port" />
                </div>
                <div
                  class="modal-satus-toggle d-flex align-items-center justify-content-between"
                >
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="status-toggle modal-status">
                    <input type="checkbox" id="user5" class="check" checked="" />
                    <label for="user5" class="checktoggle"> </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Connect Smtp -->

  <!-- Connect Test Mail -->
  <div class="modal fade" id="connect_test_mail">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Google</h4>
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
                <div class="mb-0">
                  <label class="form-label">From Email Address</label>
                  <input type="email" class="form-control" placeholder="Enter Email" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Connect Test Mail -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/hrm/departments-list");
    },
  },
};
</script>
