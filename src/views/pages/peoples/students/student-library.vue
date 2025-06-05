<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <!-- Page Header -->
        <div class="col-md-12">
          <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#login_detail"
                ><i class="ti ti-lock me-2"></i>Login Details</a
              >
              <router-link
                to="/students/edit-student"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Student</router-link
              >
            </div>
          </div>
          <div class="row">
            <students-sidebar></students-sidebar>
            <div class="col-xxl-9 col-xl-8">
              <div class="row">
                <div class="col-md-12">
                  <details-tabs></details-tabs>
                  <div class="card">
                    <div
                      class="card-header d-flex align-items-center justify-content-between"
                    >
                      <h5>Library</h5>
                      <div class="dropdown">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-outline-light border-white bg-white dropdown-toggle shadow-md"
                          data-bs-toggle="dropdown"
                          ><i class="ti ti-calendar-due me-2"></i>This Year</a
                        >
                        <ul class="dropdown-menu p-3">
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">
                              This Year
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">
                              This Week
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card-body pb-1">
                      <div class="row">
                        <!-- Book List -->
                        <div class="col-xxl-4 col-md-6 d-flex">
                          <div class="card mb-3 flex-fill">
                            <div class="card-body pb-1">
                              <span class="avatar avatar-xl mb-3">
                                <img
                                  src="@/assets/img/books/book-01.jpg"
                                  class="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 class="mb-3">The Small-Town Library</h6>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Book taken on </span>
                                    <p class="text-dark">25 Jan 2024</p>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Last Date</span>
                                    <p class="text-dark">25 Jan 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- /Book List -->

                        <!-- Book List -->
                        <div class="col-xxl-4 col-md-6 d-flex">
                          <div class="card mb-3 flex-fill">
                            <div class="card-body pb-1">
                              <span class="avatar avatar-xl mb-3">
                                <img
                                  src="@/assets/img/books/book-02.jpg"
                                  class="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 class="mb-3">Apex Time</h6>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Book taken on </span>
                                    <p class="text-dark">22 Jan 2024</p>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Last Date</span>
                                    <p class="text-dark">25 Jan 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- /Book List -->

                        <!-- Book List -->
                        <div class="col-xxl-4 col-md-6 d-flex">
                          <div class="card mb-3 flex-fill">
                            <div class="card-body pb-1">
                              <span class="avatar avatar-xl mb-3">
                                <img
                                  src="@/assets/img/books/book-03.jpg"
                                  class="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 class="mb-3">The Cobalt Guitar</h6>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Book taken on </span>
                                    <p class="text-dark">30 Jan 2024</p>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Last Date</span>
                                    <p class="text-dark">10 Feb 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- /Book List -->

                        <!-- Book List -->
                        <div class="col-xxl-4 col-md-6 d-flex">
                          <div class="card mb-3 flex-fill">
                            <div class="card-body pb-1">
                              <span class="avatar avatar-xl mb-3">
                                <img
                                  src="@/assets/img/books/book-04.jpg"
                                  class="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 class="mb-3">Shard and the Tomb</h6>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Book taken on </span>
                                    <p class="text-dark">10 Feb 2024</p>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Last Date</span>
                                    <p class="text-dark">20 Feb 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- /Book List -->

                        <!-- Book List -->
                        <div class="col-xxl-4 col-md-6 d-flex">
                          <div class="card mb-3 flex-fill">
                            <div class="card-body pb-1">
                              <span class="avatar avatar-xl mb-3">
                                <img
                                  src="@/assets/img/books/book-05.jpg"
                                  class="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 class="mb-3">Shard and the Tomb 2</h6>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Book taken on </span>
                                    <p class="text-dark">12 Feb 2024</p>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Last Date</span>
                                    <p class="text-dark">22 Feb 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- /Book List -->

                        <!-- Book List -->
                        <div class="col-xxl-4 col-md-6 d-flex">
                          <div class="card mb-3 flex-fill">
                            <div class="card-body pb-1">
                              <span class="avatar avatar-xl mb-3">
                                <img
                                  src="@/assets/img/books/book-06.jpg"
                                  class="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 class="mb-3">Plague of Fear</h6>
                              <div class="row">
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Book taken on </span>
                                    <p class="text-dark">15 Feb 2024</p>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="mb-3">
                                    <span class="fs-12 mb-1">Last Date</span>
                                    <p class="text-dark">25 Feb 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- /Book List -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <student-details-modal></student-details-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Student Details",
      text: "Dashboard",
      text1: "Students",
      text2: "Student Details",
    };
  },
};
</script>
