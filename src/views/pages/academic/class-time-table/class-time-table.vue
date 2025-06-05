<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
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
              data-bs-target="#add_time_table"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Time Table</a
            >
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
        >
          <h4 class="mb-3">Time Table</h4>
          <div class="d-flex align-items-center flex-wrap">
            <div class="dropdown mb-3 me-2">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
                ><i class="ti ti-filter me-2"></i>Filter</a
              >
              <div class="dropdown-menu drop-width">
                <form @submit.prevent="submitForm">
                  <div class="d-flex align-items-center border-bottom p-3">
                    <h4>Filter</h4>
                  </div>
                  <div class="p-3 pb-0 border-bottom">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">Class</label>
                          <vue-select
                            :options="ClassTimeTable"
                            id="classtimetable"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">Section</label>
                          <vue-select
                            :options="SectClassTime"
                            id="sectclasstime"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="d-flex flex-nowrap overflow-auto">
            <div class="d-flex flex-column me-4 flex-fill">
              <div class="mb-3">
                <h6>Monday</h6>
              </div>
              <div class="bg-transparent-danger rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:00 - 09:45 AM
                </p>
                <p class="text-dark">Subject : Maths</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-07.jpg" alt="Img"
                    /></span>
                    Jacquelin
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-primary rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:45 - 10:30 AM
                </p>
                <p class="text-dark">Subject : English</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Hellana
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-success rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>10:45 - 11:30 AM
                </p>
                <p class="text-dark">Subject : Computer</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-02.jpg" alt="Img"
                    /></span>
                    Daniel
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-pending rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>11:30 - 12:15 PM
                </p>
                <p class="text-dark">Subject : Spanish</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Erickson
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-info rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>01:30 - 02:15 PM
                </p>
                <p class="text-dark">Subject : Science</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-05.jpg" alt="Img"
                    /></span>
                    Morgan
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-light rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>02:15 - 03:00 PM
                </p>
                <p class="text-dark">Subject : Chemistry</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-06.jpg" alt="Img"
                    /></span>
                    Aaron
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-warning rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>03:15 - 04:00 PM
                </p>
                <p class="text-dark">Subject : Physics</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-01.jpg" alt="Img"
                    /></span>
                    Teresa
                  </router-link>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column me-4 flex-fill">
              <div class="mb-3">
                <h6>Tuesday</h6>
              </div>
              <div class="bg-transparent-pending rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:00 - 09:45 AM
                </p>
                <p class="text-dark">Subject : Spanish</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Erickson
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-warning rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:45 - 10:30 AM
                </p>
                <p class="text-dark">Subject : Physics</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-01.jpg" alt="Img"
                    /></span>
                    Teresa
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-light rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>10:45 - 11:30 AM
                </p>
                <p class="text-dark">Subject : Chemistry</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-06.jpg" alt="Img"
                    /></span>
                    Aaron
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-danger rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>11:30 - 12:15 PM
                </p>
                <p class="text-dark">Subject : Maths</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-07.jpg" alt="Img"
                    /></span>
                    Jacquelin
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-success rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>01:30 - 02:15 PM
                </p>
                <p class="text-dark">Subject : Computer</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-02.jpg" alt="Img"
                    /></span>
                    Daniel
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-primary rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>02:15 - 03:00 PM
                </p>
                <p class="text-dark">Subject : English</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Hellana
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-info rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>03:15 - 04:00 PM
                </p>
                <p class="text-dark">Subject : Science</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-05.jpg" alt="Img"
                    /></span>
                    Morgan
                  </router-link>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column me-4 flex-fill">
              <div class="mb-3">
                <h6>Wednesday</h6>
              </div>
              <div class="bg-transparent-success rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:00 - 09:45 AM
                </p>
                <p class="text-dark">Subject : Computer</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-02.jpg" alt="Img"
                    /></span>
                    Daniel
                  </router-link>
                </div>
              </div>

              <div class="bg-transparent-info rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:45 - 10:30 AM
                </p>
                <p class="text-dark">Subject : Science</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-05.jpg" alt="Img"
                    /></span>
                    Morgan
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-danger rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>10:45 - 11:30 AM
                </p>
                <p class="text-dark">Subject : Maths</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-07.jpg" alt="Img"
                    /></span>
                    Jacquelin
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-light rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>11:30 - 12:15 PM
                </p>
                <p class="text-dark">Subject : Chemistry</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-06.jpg" alt="Img"
                    /></span>
                    Aaron
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-warning rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>01:30 - 02:15 PM
                </p>
                <p class="text-dark">Subject : Physics</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-01.jpg" alt="Img"
                    /></span>
                    Teresa
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-primary rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>02:15 - 03:00 PM
                </p>
                <p class="text-dark">Subject : English</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Hellana
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-pending rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>03:15 - 04:00 PM
                </p>
                <p class="text-dark">Subject : Spanish</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Erickson
                  </router-link>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column me-4 flex-fill">
              <div class="mb-3">
                <h6>Thursday</h6>
              </div>
              <div class="bg-transparent-warning rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:00 - 09:45 AM
                </p>
                <p class="text-dark">Subject : Physics</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-01.jpg" alt="Img"
                    /></span>
                    Teresa
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-success rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:45 - 10:30 AM
                </p>
                <p class="text-dark">Subject : Computer</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-02.jpg" alt="Img"
                    /></span>
                    Daniel
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-primary rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>10:45 - 11:30 AM
                </p>
                <p class="text-dark">Subject : English</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Hellana
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-info rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>11:30 - 12:15 PM
                </p>
                <p class="text-dark">Subject : Science</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-05.jpg" alt="Img"
                    /></span>
                    Morgan
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-pending rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>01:30 - 02:15 PM
                </p>
                <p class="text-dark">Subject : Spanish</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Erickson
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-light rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>02:15 - 03:00 PM
                </p>
                <p class="text-dark">Subject : Chemistry</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-06.jpg" alt="Img"
                    /></span>
                    Aaron
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-danger rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>03:15 - 04:00 PM
                </p>
                <p class="text-dark">Subject : Maths</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-07.jpg" alt="Img"
                    /></span>
                    Jacquelin
                  </router-link>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column me-4 flex-fill">
              <div class="mb-3">
                <h6>Friday</h6>
              </div>
              <div class="bg-transparent-primary rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:00 - 09:45 AM
                </p>
                <p class="text-dark">Subject : English</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Hellana
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-pending rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:45 - 10:30 AM
                </p>
                <p class="text-dark">Subject : Spanish</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Erickson
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-warning rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>10:45 - 11:30 AM
                </p>
                <p class="text-dark">Subject : Physics</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-01.jpg" alt="Img"
                    /></span>
                    Teresa
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-light rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>11:30 - 12:15 PM
                </p>
                <p class="text-dark">Subject : Chemistry</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-06.jpg" alt="Img"
                    /></span>
                    Aaron
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-danger rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>01:30 - 02:15 PM
                </p>
                <p class="text-dark">Subject : Maths</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-07.jpg" alt="Img"
                    /></span>
                    Jacquelin
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-success rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>02:15 - 3:00 PM
                </p>
                <p class="text-dark">Subject : Computer</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-02.jpg" alt="Img"
                    /></span>
                    Daniel
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-info rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>03:15 - 04:00 PM
                </p>
                <p class="text-dark">Subject : Science</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-05.jpg" alt="Img"
                    /></span>
                    Morgan
                  </router-link>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column flex-fill">
              <div class="mb-3">
                <h6>Saturday</h6>
              </div>
              <div class="bg-transparent-primary rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:00 - 09:45 AM
                </p>
                <p class="text-dark">Subject : English</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Hellana
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-pending rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>09:45 - 10:30 AM
                </p>
                <p class="text-dark">Subject : Spanish</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-03.jpg" alt="Img"
                    /></span>
                    Erickson
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-warning rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>10:45 - 11:30 AM
                </p>
                <p class="text-dark">Subject : Physics</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-01.jpg" alt="Img"
                    /></span>
                    Teresa
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-light rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>11:30 - 12:15 PM
                </p>
                <p class="text-dark">Subject : Chemistry</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-06.jpg" alt="Img"
                    /></span>
                    Aaron
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-danger rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>01:30 - 02:15 PM
                </p>
                <p class="text-dark">Subject : Maths</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-07.jpg" alt="Img"
                    /></span>
                    Jacquelin
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-success rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>02:15 - 3:00 PM
                </p>
                <p class="text-dark">Subject : Computer</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-02.jpg" alt="Img"
                    /></span>
                    Daniel
                  </router-link>
                </div>
              </div>
              <div class="bg-transparent-info rounded p-3 mb-4">
                <p class="d-flex align-items-center text-nowrap mb-1">
                  <i class="ti ti-clock me-1"></i>03:15 - 04:00 PM
                </p>
                <p class="text-dark">Subject : Science</p>
                <div class="bg-white rounded p-1 mt-3">
                  <router-link
                    to="/teachers/teacher-details"
                    class="text-muted d-flex align-items-center"
                  >
                    <span class="avatar avatar-sm me-2"
                      ><img src="@/assets/img/teachers/teacher-05.jpg" alt="Img"
                    /></span>
                    Morgan
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer border-0 pb-0">
          <div class="row">
            <div class="col-lg-4 col-xxl-4 col-xl-4 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <span class="bg-primary badge badge-sm mb-2">Morning Break</span>
                  <p class="text-dark">
                    <i class="ti ti-clock me-1"></i>10:30 to 10 :45 AM
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <span class="bg-warning badge badge-sm mb-2">Lunch</span>
                  <p class="text-dark">
                    <i class="ti ti-clock me-1"></i>10:30 to 10 :45 AM
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <span class="bg-info badge badge-sm mb-2">Evening Break</span>
                  <p class="text-dark">
                    <i class="ti ti-clock me-1"></i>03:30 PM to 03:45 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <class-time-modal></class-time-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Time Table",
      text: "Dashboard",
      text1: "Academic",
      text2: "Time Table",
      ClassTimeTable: ["Select", "I", "II", "III"],
      SectClassTime: ["Select", "A", "B", "C"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/academic/class-time-table");
    },
  },
};
</script>
