<template>
  <!-- Add Parent -->
  <div class="modal fade" id="add_parent">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Parent</h4>
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
                <div
                  class="d-flex align-items-center upload-pic flex-wrap row-gap-3 mb-3"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <i class="ti ti-photo-plus fs-16"></i>
                  </div>
                  <div class="profile-upload">
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn mb-3">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-primary mb-3"
                        >Remove</a
                      >
                    </div>
                    <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" placeholder="Enter Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Child</label>
                  <vue-select
                    :options="ChildModelList"
                    id="childmodellist"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Parent</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Parent -->

  <!-- Edit Parent -->
  <div class="modal fade" id="edit_parent">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Parent</h4>
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
                <div
                  class="d-flex align-items-center upload-pic flex-wrap row-gap-3 mb-3"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <i class="ti ti-photo-plus fs-16"></i>
                  </div>
                  <div class="profile-upload">
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn mb-3">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-primary mb-3"
                        >Remove</a
                      >
                    </div>
                    <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                    value="Thomas"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                    value="+1 65738 58937"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email Address"
                    value="thomas@example.com"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Child</label>
                  <vue-select
                    :options="EditChildModelList"
                    id="editchildmodellist"
                    placeholder="Select"
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
  <!-- /Edit Parent -->

  <!-- View Details -->
  <div class="modal fade" id="view_details">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">View Details</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body mb-0">
          <div class="parent-wrap">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="d-flex align-items-center mb-3">
                  <span class="avatar avatar-xl me-2">
                    <img src="@/assets/img/parents/parent-01.jpg" alt="img" />
                  </span>
                  <div class="parent-name">
                    <h5 class="mb-1">Thomas</h5>
                    <p>Added on 25 Mar 2024</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <ul class="d-flex align-items-center">
                  <li class="mb-3 me-5">
                    <p class="mb-1">Email</p>
                    <h6 class="fw-normal">tom@example.com</h6>
                  </li>
                  <li class="mb-3">
                    <p class="mb-1">Phone</p>
                    <h6 class="fw-normal">+1 65738 58937</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h5 class="mb-3">Children Details</h5>
          <div class="border rounded p-4 pb-1 mb-3">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-3 border-bottom"
            >
              <span class="link-primary mb-2">AD9892434</span>
              <span class="badge badge-soft-success badge-md mb-2"
                ><i class="ti ti-circle-filled me-2"></i>Active</span
              >
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="d-flex align-items-center mb-3">
                <router-link to="/students/student-details" class="avatar"
                  ><img
                    src="@/assets/img/students/student-01.jpg"
                    class="img-fluid rounded-circle"
                    alt="img"
                /></router-link>
                <div class="ms-2">
                  <p class="mb-0">
                    <router-link to="/students/student-details">Janet</router-link>
                  </p>
                  <span>III, A</span>
                </div>
              </div>
              <ul class="d-flex align-items-center flex-wrap">
                <li class="mb-3 me-4">
                  <p class="mb-1">Roll No</p>
                  <h6 class="fw-normal">35010</h6>
                </li>
                <li class="mb-3 me-4">
                  <p class="mb-1">Gender</p>
                  <h6 class="fw-normal">Female</h6>
                </li>
                <li class="mb-3">
                  <p class="mb-1">Date of Joined</p>
                  <h6 class="fw-normal">22 Mar 2018</h6>
                </li>
              </ul>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="btn btn-light mb-3 me-3">Add Fees</a>
                <router-link to="/students/student-details" class="btn btn-primary mb-3"
                  >View Details</router-link
                >
              </div>
            </div>
          </div>
          <div class="border rounded p-4 pb-1 mb-3">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-3 border-bottom"
            >
              <span class="link-primary mb-2">AD9892433</span>
              <span class="badge badge-soft-success badge-md mb-2"
                ><i class="ti ti-circle-filled me-2"></i>Active</span
              >
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <div class="d-flex align-items-center mb-3">
                <router-link to="/students/student-details" class="avatar"
                  ><img
                    src="@/assets/img/students/student-02.jpg"
                    class="img-fluid rounded-circle"
                    alt="img"
                /></router-link>
                <div class="ms-2">
                  <p class="mb-0">
                    <router-link to="/students/student-details">Joann</router-link>
                  </p>
                  <span>IV, B</span>
                </div>
              </div>
              <ul class="d-flex align-items-center flex-wrap">
                <li class="mb-3 me-4">
                  <p class="mb-1">Roll No</p>
                  <h6 class="fw-normal">35012</h6>
                </li>
                <li class="mb-3 me-4">
                  <p class="mb-1">Gender</p>
                  <h6 class="fw-normal">Male</h6>
                </li>
                <li class="mb-3">
                  <p class="mb-1">Date of Joined</p>
                  <h6 class="fw-normal">18 Mar 2018</h6>
                </li>
              </ul>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="btn btn-light mb-3 me-3">Add Fees</a>
                <router-link to="/students/student-details" class="btn btn-primary mb-3"
                  >View Details</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Details -->

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
      ChildModelList: ["Janet", "Joann", "Gifford"],
      EditChildModelList: ["Janet", "Joann", "Gifford"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/parents/parents");
    },
  },
};
</script>
