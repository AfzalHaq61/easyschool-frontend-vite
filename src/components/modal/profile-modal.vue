<template>
  <!-- Edit Profile -->
  <div class="modal fade" id="edit_personal_information">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Personal Information</h4>
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
                  <label class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" placeholder="Enter Last Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">User Name</label>
                  <input type="text" class="form-control" placeholder="Enter User Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="text" class="form-control" placeholder="Enter Email" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Bio</label>
                  <input type="text" class="form-control" placeholder="Enter Bio" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Profile -->

  <!-- Edit Profile -->
  <div class="modal fade" id="edit_address_information">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Address Information</h4>
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
                  <label class="form-label">Address</label>
                  <input type="text" class="form-control" placeholder="Enter Address" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Country</label>
                  <input type="text" class="form-control" placeholder="Enter Country" />
                </div>
                <div class="mb-3">
                  <label class="form-label">State/Province</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter State/Province"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">City</label>
                  <input type="text" class="form-control" placeholder="Enter City" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Postal Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Postal Code"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Profile -->

  <!-- Change Password -->
  <div class="modal fade" id="change_password">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Change Password</h4>
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
                  <label class="form-label">Current Password</label>
                  <div class="pass-group d-flex">
                    <input type="password" class="pass-input form-control" />
                    <span class="ti toggle-password ti-eye-off"></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">New Password</label>
                  <div class="pass-group d-flex">
                    <input type="password" class="pass-inputs form-control" />
                    <span class="ti toggle-passwords ti-eye-off"></span>
                  </div>
                </div>
                <div class="mb-0">
                  <label class="form-label">Confirm Password</label>
                  <div class="pass-group d-flex">
                    <input type="password" class="pass-inputa form-control" />
                    <span class="ti toggle-passworda ti-eye-off"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Change Password -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/pages/profile");
    },
  },
};
</script>
