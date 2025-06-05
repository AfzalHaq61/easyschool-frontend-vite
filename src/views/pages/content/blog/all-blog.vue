<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content content-two">
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
          <div class="dropdown me-2 mb-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-light fw-medium d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-file-export me-2"></i>Export
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_blog"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Blog</a
            >
          </div>
        </div>
      </div>
      <blog-filter></blog-filter>
      <!-- /Table Filter -->

      <div class="row">
        <div class="col-md-12">
          <!-- Blog List -->
          <div class="card">
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="blog-content d-flex align-items-center mb-3 me-3 w-40">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xxl rounded flex-shrink-0 me-3"
                  >
                    <img src="@/assets/img/blogs/blog-01.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                      <li class="pe-2 me-2 border-right">
                        <i class="ti ti-calendar me-1"></i>July 2024
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-1"
                          ><img
                            src="@/assets/img/profiles/avatar-27.jpg"
                            alt="img" /></span
                        >Jordan
                      </li>
                    </ul>
                    <h5 class="text-truncate my-2">
                      <a href="javascript:void(0);"
                        >Personal development and self-improvement</a
                      >
                    </h5>
                    <span class="badge badge-soft-primary fs-12">Education</span>
                  </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">3000</h6>
                    <p class="fs-12 text-gray">Likes</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">454</h6>
                    <p class="fs-12 text-gray">Comments</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">102</h6>
                    <p class="fs-12 text-gray">Share</p>
                  </div>
                  <div class="p-0 mb-3">
                    <h6 class="fw-normal">350</h6>
                    <p class="fs-12 text-gray">Reviews</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="badge badge-soft-success d-inline-flex align-items-center me-2"
                    ><i class="ti ti-circle-filled fs-6 me-1"></i>Active</span
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_blog"
                          ><i class="ti ti-edit-circle me-2"></i>Edit</a
                        >
                      </li>

                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                          ><i class="ti ti-trash-x me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog List -->

          <!-- Blog List -->
          <div class="card">
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="blog-content d-flex align-items-center mb-3 me-3 w-40">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xxl rounded flex-shrink-0 me-3"
                  >
                    <img src="@/assets/img/blogs/blog-02.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                      <li class="pe-2 me-2 border-right">
                        <i class="ti ti-calendar me-1"></i>12 July 2024
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-1"
                          ><img
                            src="@/assets/img/profiles/avatar-24.jpg"
                            alt="img" /></span
                        >Rubiaana
                      </li>
                    </ul>
                    <h5 class="text-truncate my-2">
                      <a href="javascript:void(0);"
                        >5 Effective Strategies to Boost Your Productivity</a
                      >
                    </h5>
                    <span class="badge badge-soft-primary fs-12">Clear Goals</span>
                  </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">1200</h6>
                    <p class="fs-12 text-gray">Likes</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">12</h6>
                    <p class="fs-12 text-gray">Comments</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">89</h6>
                    <p class="fs-12 text-gray">Share</p>
                  </div>
                  <div class="p-0 mb-3">
                    <h6 class="fw-normal">56</h6>
                    <p class="fs-12 text-gray">Reviews</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="badge badge-soft-success d-inline-flex align-items-center me-2"
                    ><i class="ti ti-circle-filled fs-6 me-1"></i>Active</span
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_blog"
                          ><i class="ti ti-edit-circle me-2"></i>Edit</a
                        >
                      </li>

                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                          ><i class="ti ti-trash-x me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog List -->

          <!-- Blog List -->
          <div class="card">
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="blog-content d-flex align-items-center mb-3 me-3 w-40">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xxl rounded flex-shrink-0 me-3"
                  >
                    <img src="@/assets/img/blogs/blog-03.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                      <li class="pe-2 me-2 border-right">
                        <i class="ti ti-calendar me-1"></i>10 July 2024
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-1"
                          ><img
                            src="@/assets/img/profiles/avatar-15.jpg"
                            alt="img" /></span
                        >Daniel
                      </li>
                    </ul>
                    <h5 class="text-truncate my-2">
                      <a href="javascript:void(0);">Prioritize Your Tasks</a>
                    </h5>
                    <span class="badge badge-soft-primary fs-12">Education</span>
                  </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">5000</h6>
                    <p class="fs-12 text-gray">Likes</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">535</h6>
                    <p class="fs-12 text-gray">Comments</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">24</h6>
                    <p class="fs-12 text-gray">Share</p>
                  </div>
                  <div class="p-0 mb-3">
                    <h6 class="fw-normal">78</h6>
                    <p class="fs-12 text-gray">Reviews</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="badge badge-soft-danger d-inline-flex align-items-center me-2"
                    ><i class="ti ti-circle-filled fs-6 me-1"></i>Inactive</span
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_blog"
                          ><i class="ti ti-edit-circle me-2"></i>Edit</a
                        >
                      </li>

                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                          ><i class="ti ti-trash-x me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog List -->

          <!-- Blog List -->
          <div class="card">
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="blog-content d-flex align-items-center mb-3 me-3 w-40">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xxl rounded flex-shrink-0 me-3"
                  >
                    <img src="@/assets/img/blogs/blog-04.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                      <li class="pe-2 me-2 border-right">
                        <i class="ti ti-calendar me-1"></i>10 July 2024
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-1"
                          ><img
                            src="@/assets/img/profiles/avatar-15.jpg"
                            alt="img" /></span
                        >Daniel
                      </li>
                    </ul>
                    <h5 class="text-truncate my-2">
                      <a href="javascript:void(0);"
                        >How to eliminate Eliminate Distractions</a
                      >
                    </h5>
                    <span class="badge badge-soft-primary fs-12">Advice</span>
                  </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">2345</h6>
                    <p class="fs-12 text-gray">Likes</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">135</h6>
                    <p class="fs-12 text-gray">Comments</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">32</h6>
                    <p class="fs-12 text-gray">Share</p>
                  </div>
                  <div class="p-0 mb-3">
                    <h6 class="fw-normal">154</h6>
                    <p class="fs-12 text-gray">Reviews</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="badge badge-soft-danger d-inline-flex align-items-center me-2"
                    ><i class="ti ti-circle-filled fs-6 me-1"></i>Inactive</span
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_blog"
                          ><i class="ti ti-edit-circle me-2"></i>Edit</a
                        >
                      </li>

                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                          ><i class="ti ti-trash-x me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog List -->

          <!-- Blog List -->
          <div class="card">
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="blog-content d-flex align-items-center mb-3 me-3 w-40">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xxl rounded flex-shrink-0 me-3"
                  >
                    <img src="@/assets/img/blogs/blog-05.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                      <li class="pe-2 me-2 border-right">
                        <i class="ti ti-calendar me-1"></i>18 July 2024
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-1"
                          ><img
                            src="@/assets/img/profiles/avatar-01.jpg"
                            alt="img" /></span
                        >Henrita
                      </li>
                    </ul>
                    <h5 class="text-truncate my-2">
                      <a href="javascript:void(0);"
                        >Steps to Take Regular Breaks before learning</a
                      >
                    </h5>
                    <span class="badge badge-soft-primary fs-12">Advice</span>
                  </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">2454</h6>
                    <p class="fs-12 text-gray">Likes</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">165</h6>
                    <p class="fs-12 text-gray">Comments</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">22</h6>
                    <p class="fs-12 text-gray">Share</p>
                  </div>
                  <div class="p-0 mb-3">
                    <h6 class="fw-normal">164</h6>
                    <p class="fs-12 text-gray">Reviews</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="badge badge-soft-success d-inline-flex align-items-center me-2"
                    ><i class="ti ti-circle-filled fs-6 me-1"></i>Active</span
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_blog"
                          ><i class="ti ti-edit-circle me-2"></i>Edit</a
                        >
                      </li>

                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                          ><i class="ti ti-trash-x me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog List -->

          <!-- Blog List -->
          <div class="card">
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="blog-content d-flex align-items-center mb-3 me-3 w-40">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xxl rounded flex-shrink-0 me-3"
                  >
                    <img src="@/assets/img/blogs/blog-06.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <ul class="d-flex align-items-center flex-wrap row-gap-2">
                      <li class="pe-2 me-2 border-right">
                        <i class="ti ti-calendar me-1"></i>18 July 2024
                      </li>
                      <li class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-1"
                          ><img
                            src="@/assets/img/profiles/avatar-02.jpg"
                            alt="img" /></span
                        >Zlatan
                      </li>
                    </ul>
                    <h5 class="text-truncate my-2">
                      <a href="javascript:void(0);">Using Time Management Techniques</a>
                    </h5>
                    <span class="badge badge-soft-primary fs-12">Clear Goals</span>
                  </div>
                </div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">4343</h6>
                    <p class="fs-12 text-gray">Likes</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">233</h6>
                    <p class="fs-12 text-gray">Comments</p>
                  </div>
                  <div class="pe-4 me-4 mb-3 border-right">
                    <h6 class="fw-normal">11</h6>
                    <p class="fs-12 text-gray">Share</p>
                  </div>
                  <div class="p-0 mb-3">
                    <h6 class="fw-normal">454</h6>
                    <p class="fs-12 text-gray">Reviews</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="badge badge-soft-success d-inline-flex align-items-center me-2"
                    ><i class="ti ti-circle-filled fs-6 me-1"></i>Active</span
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical fs-14"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right p-3">
                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_blog"
                          ><i class="ti ti-edit-circle me-2"></i>Edit</a
                        >
                      </li>

                      <li>
                        <a
                          class="dropdown-item rounded-1"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-modal"
                          ><i class="ti ti-trash-x me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Blog List -->
          <div class="load-more text-center">
            <a href="javascript:void(0);" class="btn btn-primary"
              ><i class="ti ti-loader-3"></i>Load More</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <blog-modal></blog-modal>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Blogs",
      text: "Dashboard",
      text1: "Pages",
      text2: "Blogs",
    };
  },
};
</script>
