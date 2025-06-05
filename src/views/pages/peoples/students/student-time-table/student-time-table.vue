<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="page-header">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="action-wrap">
              <div class="page-btn">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light login-detail-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#login_detail"
                  ><i class="ti ti-lock me-2"></i>Login Details</a
                >
                <router-link to="/students/edit-student" class="btn btn-primary"
                  ><i class="ti ti-edit-circle me-2"></i>Edit Student</router-link
                >
              </div>
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
                      class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
                    >
                      <h4 class="mb-3">Exams & Results</h4>
                      <div class="d-flex align-items-center flex-wrap">
                        <div class="dropdown mb-3">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-outline-light border-white bg-white dropdown-toggle shadow-md"
                            data-bs-toggle="dropdown"
                            ><i class="ti ti-calendar-due me-2"></i>This Year</a
                          >
                          <ul class="dropdown-menu p-3">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item rounded-1"
                              >
                                This Year
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item rounded-1"
                              >
                                This Month
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item rounded-1"
                              >
                                This Week
                              </a>
                            </li>
                          </ul>
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-07.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-02.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-05.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-06.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-01.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-01.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-06.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-07.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-02.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-05.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-02.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-05.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-07.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-06.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-01.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-01.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-02.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-05.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-06.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-07.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-01.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-06.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-07.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-02.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-05.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-03.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-01.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-06.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-07.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-02.jpg"
                                    alt="Img"
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
                                  ><img
                                    src="@/assets/img/teachers/teacher-05.jpg"
                                    alt="Img"
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
                              <span class="bg-primary badge badge-sm mb-2"
                                >Morning Break</span
                              >
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
                              <span class="bg-info badge badge-sm mb-2"
                                >Evening Break</span
                              >
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
