<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content bg-white">
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
        <website-sidebar></website-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Prefixes</h5>
                  <p>Personalize your path and settings of your website</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex d-block">
                <div class="flex-fill">
                  <div class="card">
                    <div class="card-body p-3 pb-0">
                      <div class="row">
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Students</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Teachers</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Parents</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Guardians</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Subjects</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Class</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Sections</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Home Work</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Department</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Designation</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Notice Board</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Attendance</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Time Table</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Sports</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Syllabus</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Class Room</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
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
      title: "Website Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Website Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/website-settings/prefixes");
    },
  },
};
</script>
