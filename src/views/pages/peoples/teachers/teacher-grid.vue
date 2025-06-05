<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content content-two">
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
            <router-link
              to="/teachers/add-teacher"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Teacher</router-link
            >
          </div>
        </div>
      </div>

      <teacher-grid-filter></teacher-grid-filter>

      <div class="row">
        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849127</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-01.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Teresa</router-link>
                    </h6>
                    <p>III A</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">teresa@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 82392 37359</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Physics</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849126</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-02.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Daniel</router-link>
                    </h6>
                    <p>II (A)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Daniel@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 56752 86742</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Computer</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849125</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-03.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Hellana</router-link>
                    </h6>
                    <p>VI (A)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Hellana@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 23566 52683</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">English</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849124</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-04.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Erickson</router-link>
                    </h6>
                    <p>VI (B) , V (A)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Erickson@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 14259 85573</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Spanish</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849123</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-05.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Morgan</router-link>
                    </h6>
                    <p>VIII</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Morgan@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 63204 35730</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Env Science</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849122</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-danger d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Inactive</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-06.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Aaron</router-link>
                    </h6>
                    <p>I (A)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Aaron@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 26267 80542</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Chemistry</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849121</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-07.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Jacquelin</router-link>
                    </h6>
                    <p>IV</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Jacquelin@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 77502 54845</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Maths</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849120</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-08.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Raul</router-link>
                    </h6>
                    <p>IV</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Raul@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 67845 78784</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Biology</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849119</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-09.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Elizabeth</router-link>
                    </h6>
                    <p>VII</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Elizabeth@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 23566 52683</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Finance</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849118</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-10.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Edward</router-link>
                    </h6>
                    <p>IX (C) , X (C)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Edward@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 14259 85573</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Economics</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849117</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-07.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Maria</router-link>
                    </h6>
                    <p>IX (C) , X (C)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Maria@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 97846 84518</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">Spanish</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <!-- Teacher Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/teachers/teacher-details" class="link-primary"
                >T849116</router-link
              >
              <div class="d-flex align-items-center">
                <span
                  class="badge badge-soft-success d-inline-flex align-items-center me-1"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
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
                      <a class="dropdown-item rounded-1" to="/teachers/edit-teacher"
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
            <div class="card-body">
              <div class="bg-light-300 rounded-2 p-3 mb-3">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/teachers/teacher-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/teachers/teacher-07.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/teachers/teacher-details">Jacky</router-link>
                    </h6>
                    <p>VI (A)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <p class="mb-0">Email</p>
                  <p class="text-dark">Jacky@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 98392 37378</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <span class="badge badge-soft-danger">English</span>
              <router-link to="/teachers/teacher-details" class="btn btn-light btn-sm"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
        <!-- /Teacher Grid -->

        <div class="text-center">
          <a
            href="javascript:void(0);"
            class="btn btn-primary d-inline-flex align-items-center"
            ><i class="ti ti-loader-3 me-2"></i>Load More</a
          >
        </div>
      </div>
    </div>
  </div>
  <teachers-modal></teachers-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Teachers",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Teachers",
    };
  },
};
</script>
