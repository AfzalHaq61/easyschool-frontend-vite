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
                  ><i class="ti ti-file-type-pdf me-2"></i>Export as PDF</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-xls me-2"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_membership"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Membership</a
            >
          </div>
        </div>
      </div>

      <div class="card border-0">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <h5>Monthly</h5>
            <div class="form-check form-check-md form-switch mx-3">
              <input class="form-check-input" type="checkbox" role="switch" />
            </div>
            <h5>Yearly</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Membership -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="border-bottom mb-3">
                <span class="badge bg-info mb-3">Starter Pack</span>
                <h3 class="mb-3">
                  Essential tools for small and growing schools to streamline operations.
                </h3>
              </div>
              <div>
                <div class="bg-light-300 p-3 rounded-1 text-center mb-3">
                  <h2>$99<span class="text-gray-7 fs-14 fw-normal"> /month</span></h2>
                </div>
                <ul class="list-unstyled gap-3">
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">5 Students & Teachers</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">
                        <div class="flex-grow-1">15 Classes & Sections</div>
                      </div>
                    </div>
                  </li>

                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">
                        <div class="flex-grow-1">5 Subjects & Exams</div>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">
                        <div class="flex-grow-1">5 Departments</div>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">
                        <div class="flex-grow-1">5 Designations</div>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-danger me-2">
                        <i class="ti ti-circle-x-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Library & Transport</div>
                    </div>
                  </li>
                </ul>
                <a href="javascript:void(0);" class="btn btn-primary w-100"
                  >Choose Plan</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Membership -->

        <!-- Membership -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="border-bottom mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="badge bg-info mb-3">Enterprise Pack</span>
                  <span class="badge badge-soft-warning mb-3">Recommended</span>
                </div>
                <h3 class="mb-3">
                  Comprehensive features for mid-sized schools to enhance efficiency and
                  communication.
                </h3>
              </div>
              <div>
                <div class="bg-light-300 p-3 rounded-1 text-center mb-3">
                  <h2>$149<span class="text-gray-7 fs-14 fw-normal"> /month</span></h2>
                </div>
                <ul class="list-unstyled gap-3">
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">10 Students & Teachers</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">20 Classes & Sections</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">10 Subjects & Exams</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">10 Departments</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">10 Designations</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-danger me-2">
                        <i class="ti ti-circle-x-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Library & Transport</div>
                    </div>
                  </li>
                </ul>
                <a href="javascript:void(0);" class="btn btn-primary w-100"
                  >Choose Plan</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Membership -->

        <!-- Membership -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="border-bottom mb-3">
                <span class="badge bg-info mb-3">Premium Pack</span>
                <h3 class="mb-3">
                  Robust solutions for large schools to optimize management and
                  engagement.
                </h3>
              </div>
              <div>
                <div class="bg-light-300 p-3 rounded-1 text-center mb-3">
                  <h2>$199<span class="text-gray-7 fs-14 fw-normal"> /month</span></h2>
                </div>
                <ul class="list-unstyled gap-3">
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Unlimited Students & Teachers</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Unlimited Classes & Sections</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Unlimited Subjects & Exams</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Unlimited Departments</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-check-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Unlimited Designations</div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <div class="d-flex align-items-center">
                      <span class="flex-shrink-0 text-success me-2">
                        <i class="ti ti-circle-x-filled fs-15 align-middle"></i>
                      </span>
                      <div class="flex-grow-1">Library & Transport</div>
                    </div>
                  </li>
                </ul>
                <a href="javascript:void(0);" class="btn btn-primary w-100"
                  >Choose Plan</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Membership -->
      </div>
    </div>
  </div>
  <membership-modal></membership-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Membership Plans",
      text: "Dashboard",
      text1: "Membership",
      text2: "Membership Plans",
    };
  },
};
</script>
