<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
          <div class="pe-1 mb-2">
            <button
              type="button"
              class="btn btn-outline-light bg-white btn-icon me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Print"
              data-bs-original-title="Print"
            >
              <i class="ti ti-printer"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="mb-3">
            <label class="form-label">Addon Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <form @submit.prevent="submitForm">
            <div class="card card-gray mb-4">
              <div class="card-header">
                <h5>Addon Settings</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Students & Teachers</label>
                      <div class="d-flex align-items-center mb-3">
                        <div class="w-100 me-3">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkebox-1"
                        />
                        <label class="form-check-label" for="checkebox-1">
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Classes & Sections</label>
                      <div class="d-flex align-items-center mb-3">
                        <div class="w-100 me-3">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkebox-2"
                        />
                        <label class="form-check-label" for="checkebox-2">
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subjects & Exams</label>
                      <div class="d-flex align-items-center mb-3">
                        <div class="w-100 me-3">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkebox-3"
                        />
                        <label class="form-check-label" for="checkebox-3">
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Departments</label>
                      <div class="d-flex align-items-center mb-3">
                        <div class="w-100 me-3">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkebox-4"
                        />
                        <label class="form-check-label" for="checkebox-4">
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Designations</label>
                      <div class="d-flex align-items-center mb-3">
                        <div class="w-100 me-3">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkebox-5"
                        />
                        <label class="form-check-label" for="checkebox-5">
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Library & Transport</label>
                      <div class="d-flex align-items-center mb-3">
                        <div class="w-100 me-3">
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" />
                        </div>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkebox-6"
                        />
                        <label class="form-check-label" for="checkebox-6">
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
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
      title: "Membership Addons",
      text: "Dashboard",
      text1: "Membership",
      text2: "Membership Addons",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/membership/membership-addons");
    },
  },
};
</script>
