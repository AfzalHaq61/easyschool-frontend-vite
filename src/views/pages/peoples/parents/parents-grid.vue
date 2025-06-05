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
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_parent"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Parent</a
            >
          </div>
        </div>
      </div>

      <parents-filter></parents-filter>

      <div class="row">
        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >P124556</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-01.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Thomas</a
                      >
                    </h6>
                    <p>Added on 25 Mar 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">tom@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-01.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Janet</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >P124555</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-02.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Marquita</a
                      >
                    </h6>
                    <p>Added on 18 Mar 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">mar@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-02.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Joann</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >P124554</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-03.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Johnson</a
                      >
                    </h6>
                    <p>Added on 14 Mar 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">joh@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-03.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Kathleen</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >P124552</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-05.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Arthur</a
                      >
                    </h6>
                    <p>Added on 11 Feb 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">art@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-04.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Gifford</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >P124551</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-06.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Colleen</a
                      >
                    </h6>
                    <p>Added on 24 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">col@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-05.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Lisa</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124550</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-07.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Robert</a
                      >
                    </h6>
                    <p>Added on 19 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">rob@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-06.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Ralph</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124548</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-09.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Michael</a
                      >
                    </h6>
                    <p>Added on 22 Dec 2023</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">mic@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-07.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Julie</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124547</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-10.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Mary</a
                      >
                    </h6>
                    <p>Added on 15 Dec 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">mar@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-08.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Ryan</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124546</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-11.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Edwin</a
                      >
                    </h6>
                    <p>Added on 10 Dec 2023</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">edw@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-09.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Susan</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124553</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-04.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Claudia</a
                      >
                    </h6>
                    <p>Added on 27 Feb 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">tom@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-09.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Richard</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124549</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-08.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Jessie</a
                      >
                    </h6>
                    <p>Added on 08 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">tom@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-03.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Kathleen</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <!-- Parent Grid -->
        <div class="col-xl-4 col-md-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0);"
                class="link-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
              >
                P124545</a
              >
              <div class="d-flex align-items-center">
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
                        data-bs-target="#edit_parent"
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
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#view_details"
                    class="avatar avatar-lg flex-shrink-0"
                    ><img
                      src="@/assets/img/parents/parent-14.jpg"
                      class="img-fluid rounded-circle"
                      alt="img"
                  /></a>
                  <div class="ms-2">
                    <h6 class="text-dark text-truncate mb-0">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_details"
                        >Avila</a
                      >
                    </h6>
                    <p>Added on 01 Dec 2023</p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between gx-2">
                <div>
                  <p class="mb-0">Email</p>
                  <p class="text-dark">avi@example.com</p>
                </div>
                <div>
                  <p class="mb-0">Phone</p>
                  <p class="text-dark">+1 65738 58937</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <router-link
                    to="/students/student-details"
                    class="avatar avatar-md flex-shrink-0 p-0 me-2"
                  >
                    <img
                      src="@/assets/img/students/student-04.jpg"
                      alt="img"
                      class="img-fluid rounded-circle"
                    />
                  </router-link>
                  <p class="text-dark">Gifford</p>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#view_details"
                >View Details</a
              >
            </div>
          </div>
        </div>
        <!-- /Parent Grid -->

        <div class="col-md-12">
          <div class="load-more text-center">
            <a href="javascript:void(0);" class="btn btn-primary"
              ><i class="ti ti-loader-3"></i>Load More</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <parents-list-modal></parents-list-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Parents",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Parents",
    };
  },
};
</script>
