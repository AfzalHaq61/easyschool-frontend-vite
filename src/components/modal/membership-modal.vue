<template>
  <!-- Add Plan -->
  <div class="modal fade" id="add_membership">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Plan</h4>
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
          <div class="modal-body mb-2">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Plan Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Type</label>
                  <vue-select
                    :options="StarterSel"
                    id="startersel"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Plan Price</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <h5 class="mb-3">Plan Settings</h5>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Students & Teachers</label>
                  <div class="d-flex align-items-center mb-3">
                    <div class="w-100 me-3">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="plan" class="check" />
                      <label for="plan" class="checktoggle"> </label>
                    </div>
                  </div>
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>Unlimited
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Classes & Sections</label>
                  <div class="d-flex align-items-center mb-3">
                    <div class="w-100 me-3">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="plan1" class="check" />
                      <label for="plan1" class="checktoggle"> </label>
                    </div>
                  </div>
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>Unlimited
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Subjects & Exams</label>
                  <div class="d-flex align-items-center mb-3">
                    <div class="w-100 me-3">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="plan2" class="check" />
                      <label for="plan2" class="checktoggle"> </label>
                    </div>
                  </div>
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>Unlimited
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Departments</label>
                  <div class="d-flex align-items-center mb-3">
                    <div class="w-100 me-3">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="plan3" class="check" />
                      <label for="plan3" class="checktoggle"> </label>
                    </div>
                  </div>
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>Unlimited
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Designations</label>
                  <div class="d-flex align-items-center mb-3">
                    <div class="w-100 me-3">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="plan4" class="check" />
                      <label for="plan4" class="checktoggle"> </label>
                    </div>
                  </div>
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>Unlimited
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Library & Transport</label>
                  <div class="d-flex align-items-center mb-3">
                    <div class="w-100 me-3">
                      <input type="text" class="form-control" />
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="plan5" class="check" />
                      <label for="plan5" class="checktoggle"> </label>
                    </div>
                  </div>
                  <label class="checkboxs">
                    <input type="checkbox" />
                    <span class="checkmarks"></span>Unlimited
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Plan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Plan -->

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
      StarterSel: ["Select", "Starter Pack", "Enterprise", "Premium Pack"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/membership/membership-plans");
    },
  },
};
</script>
