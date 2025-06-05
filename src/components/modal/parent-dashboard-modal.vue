<template>
  <div class="modal fade" id="edit_parent">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Edit Parent</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <div class="row">
                <div class="col-md-12">
                  <div class="profile-wrap mb-3">
                    <div class="frames">
                      <i class="ti ti-photo-plus"></i>
                    </div>
                    <div class="profile-upload">
                      <div class="profile-uploader">
                        <div class="drag-upload-btn">
                          Upload
                          <input
                            type="file"
                            class="form-control image-sign"
                            multiple=""
                          />
                        </div>
                        <a href="javascript:void(0);" class="btn btn-primary">Remove</a>
                      </div>
                      <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                      value="Thomas"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Phone Number"
                      value="+1 65738 58937"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email Address"
                      value="thomas@example.com"
                    />
                  </div>
                  <div class="mb-0">
                    <label class="col-form-label">Child</label>
                    <vue-select :options="kathSel" id="kathsel" placeholder="Janet" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      KathSel: ["Janet", "Joann", "Kathleen", "Gifford"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/peoples/parents-list");
    },
  },
};
</script>
