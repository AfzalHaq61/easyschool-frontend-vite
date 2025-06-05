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
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Profile Settings</h5>
                  <p>Upload your photo & personal details here</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex d-block">
                <div class="flex-fill">
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>Personal Information</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="d-block d-xl-flex">
                        <div class="mb-3 flex-fill me-xl-3 me-0">
                          <label class="form-label">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div class="mb-3 flex-fill">
                          <label class="form-label">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div class="d-block d-xl-flex">
                        <div class="mb-3 flex-fill me-xl-3 me-0">
                          <label class="form-label">User Name</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter User Name"
                          />
                        </div>
                        <div class="mb-3 flex-fill">
                          <label class="form-label">Phone Number</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>Address Information</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Address"
                        />
                      </div>
                      <div class="d-block d-xl-flex">
                        <div class="mb-3 flex-fill me-xl-3 me-0">
                          <label class="form-label">Country</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Country"
                          />
                        </div>
                        <div class="mb-3 flex-fill">
                          <label class="form-label">State / Province</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter State"
                          />
                        </div>
                      </div>
                      <div class="d-block d-xl-flex">
                        <div class="mb-3 flex-fill me-xl-3 me-0">
                          <label class="form-label">City</label>
                          <input type="email" class="form-control" placeholder="City" />
                        </div>
                        <div class="mb-3 flex-fill">
                          <label class="form-label">Postal Code</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter Postal Code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="settings-right-sidebar ms-md-3">
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>Personal Information</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="settings-profile-upload">
                        <span class="profile-pic">
                          <img src="@/assets/img/profiles/avatar-27.jpg" alt="Profile" />
                        </span>
                        <div class="title-upload">
                          <h5>Edit Your Photo</h5>
                          <a href="javascript:void(0);" class="me-2">Delete </a>
                          <a href="javascript:void(0);" class="text-primary">Update</a>
                        </div>
                      </div>
                      <div class="profile-uploader profile-uploader-two">
                        <span class="upload-icon"><i class="ti ti-upload"></i></span>
                        <div class="drag-upload-btn mb-0 border-0 pb-0 bg-transparent">
                          <p class="upload-btn">
                            <span>Click to Upload</span> or drag and drop
                          </p>
                          <h6>JPG or PNG</h6>
                          <h6>(Max 450 x 450 px)</h6>
                        </div>
                        <input
                          type="file"
                          class="form-control"
                          multiple=""
                          id="image_sign"
                        />
                        <div id="frames"></div>
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
      title: "General Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "General Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/settings/profile-settings");
    },
  },
};
</script>
