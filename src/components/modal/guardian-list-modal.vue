<template>
  <!-- Add Guardian -->
  <div class="modal fade" id="add_guardian">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Add Guardian</h4>
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
                    <input type="text" class="form-control" placeholder="Enter Name" />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div class="mb-0">
                    <label class="col-form-label">Child</label>
                    <vue-select :options="GiffSel" id="giffsel" placeholder="Janet" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Guardian</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Guardian -->

  <!-- Edit Guardian -->
  <div class="modal fade" id="edit_guardian">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Edit Guardian</h4>
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
                    <!-- <select class="select" multiple>
                      <option selected>Janet</option>
                      <option selected>Joann</option>
                      <option>Kathleen</option>
                      <option>Gifford</option>
                    </select> -->
                    <vue-select
                      :options="EditGiffSel"
                      id="editgiffsel"
                      placeholder="Janet"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Guardian -->

  <!-- View Details -->
  <div class="modal fade" id="view_details">
    <div class="modal-dialog modal-dialog-centered custom-modal modal-lg">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">View Details</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <div class="modal-card">
            <div class="parent-wrap">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="parent-info">
                    <span class="parent-img">
                      <img src="@/assets/img/guardians/guardian-01.jpg" alt="img" />
                    </span>
                    <div class="parent-name">
                      <h5>William</h5>
                      <p>Added on 25 Mar 2024</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="info-list">
                    <li>
                      <p>Email</p>
                      <h6>wil@example.com</h6>
                    </li>
                    <li>
                      <p>Phone</p>
                      <h6>+1 82392 37359</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h5 class="mb-3">Children Details</h5>
            <div class="child-wrap">
              <div class="child-head">
                <span class="admission-no">AD9892434</span>
                <span class="badge badge-soft-success badge-md"
                  ><i class="ti ti-circle-filled me-2"></i>Active</span
                >
              </div>
              <div class="child-body">
                <div class="child-info">
                  <img src="@/assets/img/students/student-01.jpg" alt="img" />
                  <div class="child-name">
                    <h6>Janet</h6>
                    <p>III, A</p>
                  </div>
                </div>
                <ul class="info-list">
                  <li>
                    <p>Roll No</p>
                    <h6>35010</h6>
                  </li>
                  <li>
                    <p>Gender</p>
                    <h6>Female</h6>
                  </li>
                  <li>
                    <p>Date of Joined</p>
                    <h6>22 Mar 2018</h6>
                  </li>
                </ul>
                <div class="btn-item">
                  <a href="javascript:void(0);" class="btn btn-light">Add Fees</a>
                  <a href="/students/student-details" class="btn btn-primary"
                    >View Details</a
                  >
                </div>
              </div>
            </div>
            <div class="child-wrap">
              <div class="child-head">
                <span class="admission-no">AD9892433</span>
                <span class="badge badge-soft-success badge-md"
                  ><i class="ti ti-circle-filled me-2"></i>Active</span
                >
              </div>
              <div class="child-body">
                <div class="child-info">
                  <img src="@/assets/img/students/student-02.jpg" alt="img" />
                  <div class="child-name">
                    <h6>Joann</h6>
                    <p>IV, B</p>
                  </div>
                </div>
                <ul class="info-list">
                  <li>
                    <p>Roll No</p>
                    <h6>35012</h6>
                  </li>
                  <li>
                    <p>Gender</p>
                    <h6>Male</h6>
                  </li>
                  <li>
                    <p>Date of Joined</p>
                    <h6>18 Mar 2018</h6>
                  </li>
                </ul>
                <div class="btn-item">
                  <a href="javascript:void(0);" class="btn btn-light">Add Fees</a>
                  <a href="/students/student-details" class="btn btn-primary"
                    >View Details</a
                  >
                </div>
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
    <div class="modal-dialog modal-dialog-centered custom-modal promote-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <form @submit.prevent="submitForm">
            <div class="promote-modal-body text-center">
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
                <button
                  type="submit"
                  class="btn btn-danger"
                  id="toprightToastBtn"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      GiffSel: ["Janet", "Joann", "Kathleen", "Gifford"],
      EditGiffSel: ["Janet", "Joann", "Kathleen", "Gifford"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/guardians/guardian-list");
    },
  },
};
</script>
