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
              to="/students/add-student"
              class="btn btn-primary d-flex align-items-center"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Student</router-link
            >
          </div>
        </div>
      </div>

      <!-- Filter -->
      <student-grid-filter></student-grid-filter>
      <!-- /Filter -->

      <div class="row">
        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892434</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-01.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h5 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Janet Daniel</router-link
                      >
                    </h5>
                    <p>III, A</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35013</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Female</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">10 Jan 2015</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892433</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-02.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Joann Michael</router-link
                      >
                    </h6>
                    <p>IV, B</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35012</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Male</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">19 Aug 2014</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892432</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-03.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Kathleen Dison</router-link
                      >
                    </h6>
                    <p>III, A</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35011</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Female</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">5 Dec 2017</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892431</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-04.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Lisa Gourley
                      </router-link>
                    </h6>
                    <p>II, B</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35010</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Female</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">13 May 2017</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892430</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-05.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Ralph Claudia</router-link
                      >
                    </h6>
                    <p>II, B</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35009</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Male</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">20 Jun 20215</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892429</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-06.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Ralph Claudia</router-link
                      >
                    </h6>
                    <p>II, B</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35008</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Male</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">20 Jun 20215</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892428</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-06.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Julie Scott</router-link
                      >
                    </h6>
                    <p>V, A</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35007</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Female</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">18 Jan 2023</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892427</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-09.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Susan Boswell</router-link
                      >
                    </h6>
                    <p>VIII, B</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35006</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Female</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">26 May 2020</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892426</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-08.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Richard Mayes</router-link
                      >
                    </h6>
                    <p>V, A</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35005</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Male</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">6 Oct 2022</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892425</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-12.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Richard Mayes</router-link
                      >
                    </h6>
                    <p>VII, B</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35004</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Male</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">6 Oct 2022</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->
        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892424</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-11.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Veronica Randle</router-link
                      >
                    </h6>
                    <p>IX, A</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35003</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Female</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">27 Dec 2009</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <!-- Student Grid -->
        <div class="col-xxl-3 col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <router-link to="/students/student-details" class="link-primary"
                >AD9892423</router-link
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
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-details"
                        ><i class="ti ti-menu me-2"></i>View Student</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/edit-student"
                        ><i class="ti ti-edit-circle me-2"></i>Edit</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item rounded-1"
                        to="/students/student-promotion"
                        ><i class="ti ti-arrow-ramp-right-2 me-2"></i>Promote
                        Student</router-link
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
                    to="/students/student-details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/students/student-10.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></router-link>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <router-link to="/students/student-details"
                        >Thomas Hunt</router-link
                      >
                    </h6>
                    <p>X, A</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Roll No</p>
                  <p class="text-dark">35002</p>
                </div>
                <div>
                  <p class="mb-0">Gender</p>
                  <p class="text-dark">Male</p>
                </div>
                <div>
                  <p class="mb-0">Joined On</p>
                  <p class="text-dark">11 Aug 2008</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-brand-hipchat"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                  ><i class="ti ti-phone"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                  ><i class="ti ti-mail"></i
                ></a>
              </div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#add_fees_collect"
                class="btn btn-light btn-sm fw-semibold"
                >Add Fees</a
              >
            </div>
          </div>
        </div>
        <!-- /Student Grid -->

        <div class="col-md-12 text-center">
          <a href="javascript:void(0);" class="btn btn-primary"
            ><i class="ti ti-loader-3 me-2"></i>Load More</a
          >
        </div>
      </div>
    </div>
  </div>
  <students-list-modal></students-list-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Students",
      text: "Dashboard",
      text1: "Students",
      text2: "Students Grid",
    };
  },
};
</script>
