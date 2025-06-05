<template>
  <div class="modal fade" id="connect_payment">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Paypal</h4>
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
                  <label class="form-label">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">API Key</label>
                  <input type="text" class="form-control" placeholder="Enter API Key" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Secret Key</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Secret Key"
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
                    <input type="checkbox" id="user16" class="check" checked="" />
                    <label for="user16" class="checktoggle"> </label>
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
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/financial-settings/payment-gateways");
    },
  },
};
</script>
