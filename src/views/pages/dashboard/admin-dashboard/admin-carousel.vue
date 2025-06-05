<template>
  <div class="col-xxl-7 col-xl-12 d-flex">
    <div class="card flex-fill">
      <div
        class="card-header d-flex align-items-center justify-content-between"
      >
        <h4 class="card-title">Fees <span class="d-block">Collection</span></h4>
        <div class="d-md-flex align-items-center d-none">
          <span class="me-3"
            ><i class="ti ti-square-rotated-filled text-light me-1"></i>Total
            Fee</span
          >
          <span class="me-3"
            ><i class="ti ti-square-rotated-filled text-primary me-1"></i
            >Collected Fee</span
          >
        </div>
        <div class="d-flex align-items-center">
          <a href="javascript:void(0);" class="me-3"
            ><i class="ti ti-download"></i
          ></a>
          <div class="card-dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-calendar"></i>Last 8 Quater
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <ul>
                <li>
                  <a href="javascript:void(0);">This Month</a>
                </li>
                <li>
                  <a href="javascript:void(0);">This Year</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Last 12 Quater</a>
                </li>
                <li>
                  <a href="javascript:void(0);">Last 16 Quater</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div id="fees-chart"></div>
      </div>
    </div>
  </div>

  <div class="col-xxl-2 col-xl-6 d-flex">
    <div class="mb-4 flex-fill">
      <div class="card flex-fill mb-2">
        <div class="card-body">
          <h4 class="mb-1">$25,000,02</h4>
          <p class="fs-12">Total Fees Collected</p>
        </div>
      </div>
      <div class="card flex-fill mb-2">
        <div class="card-body">
          <h4 class="mb-1">$4,56,64</h4>
          <p class="fs-12">Fine Collected till date</p>
        </div>
      </div>
      <div class="card flex-fill mb-2">
        <div class="card-body">
          <h4 class="mb-1">545</h4>
          <p class="fs-12 mb-0s">Student Not Paid</p>
          <a
            href="javascript:void(0);"
            class="link-primary fs-12s fw-semibold mt-3"
            ><i class="ti ti-bell-check me-1"></i>Remind All</a
          >
        </div>
      </div>
      <div class="card flex-fill mb-0">
        <div class="card-body">
          <h4 class="mb-1">$6,545,454</h4>
          <p class="fs-12">Total Outstanding</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Leave Requests -->
  <div class="col-xxl-3 col-xl-6 d-flex">
    <div class="card flex-fill">
      <div
        class="card-header d-flex align-items-center justify-content-between"
      >
        <h4 class="card-title">Leave Requests</h4>
      </div>
      <div class="card-body">
        <div class="list-tab mb-3">
          <ul class="nav">
            <li class="me-2">
              <a
                href="javascript:void(0);"
                class="active"
                data-bs-toggle="tab"
                data-bs-target="#students"
                >Students</a
              >
            </li>
            <li>
              <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#teacher"
                >Teachers & Staffs</a
              >
            </li>
          </ul>
        </div>
        <div class="tab-content request-scroll">
          <div class="tab-pane fade active show" id="students">
            <div class="card mb-1">
              <div class="card-body p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <div class="d-flex align-items-center overflow-hidden me-2">
                    <span class="avatar avatar-lg flex-shrink-0 me-2">
                      <img
                        src="@/assets/img/students/student-12.jpg"
                        alt="student"
                      />
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="mb-1 text-truncate fs-15">
                        Richard<span class="badge badge-soft-danger ms-1"
                          >Emergency</span
                        >
                      </h6>
                      <p class="text-truncate">VII - B</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-xs p-0 btn btn-success me-1"
                      ><i class="ti ti-checks"></i
                    ></a>
                    <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3"
                >
                  <p class="mb-0">Leave : 12 -13 May</p>
                  <p>Apply on : 12 May</p>
                </div>
              </div>
            </div>
            <div class="card mb-1">
              <div class="card-body p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <div class="d-flex align-items-center overflow-hidden me-2">
                    <span class="avatar avatar-lg flex-shrink-0 me-2">
                      <img
                        src="@/assets/img/students/student-11.jpg"
                        alt="student"
                      />
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="mb-1 text-truncate fs-15">
                        Veronica<span class="badge badge-soft-warning ms-1"
                          >Casual</span
                        >
                      </h6>
                      <p class="text-truncate">IX - A</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-xs p-0 btn btn-success me-1"
                      ><i class="ti ti-checks"></i
                    ></a>
                    <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3"
                >
                  <p class="mb-0">Leave : 12 -13 May</p>
                  <p>Apply on : 11 May</p>
                </div>
              </div>
            </div>
            <div class="card mb-0">
              <div class="card-body p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <div class="d-flex align-items-center overflow-hidden me-2">
                    <span class="avatar avatar-lg flex-shrink-0 me-2">
                      <img
                        src="@/assets/img/students/student-09.jpg"
                        alt="student"
                      />
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="mb-1 text-truncate fs-15">
                        Susan<span class="badge badge-soft-warning ms-1"
                          >Casual</span
                        >
                      </h6>
                      <p class="text-truncate">X11 - A</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-xs p-0 btn btn-success me-1"
                      ><i class="ti ti-checks"></i
                    ></a>
                    <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3"
                >
                  <p class="mb-0">Leave : 13 -14 May</p>
                  <p>Apply on : 13 May</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="teacher">
            <div class="card mb-1">
              <div class="card-body p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <div class="d-flex align-items-center overflow-hidden me-2">
                    <span class="avatar avatar-lg flex-shrink-0 me-2">
                      <img
                        src="@/assets/img/profiles/avatar-14.jpg"
                        alt="student"
                      />
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="mb-1 text-truncate fs-15">
                        James<span class="badge badge-soft-danger ms-1"
                          >Emergency</span
                        >
                      </h6>
                      <p class="text-truncate">Physics Teacher</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-xs p-0 btn btn-success me-1"
                      ><i class="ti ti-checks"></i
                    ></a>
                    <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3"
                >
                  <p class="mb-0">Leave : 12 -13 May</p>
                  <p>Apply on : 12 May</p>
                </div>
              </div>
            </div>
            <div class="card mb-1">
              <div class="card-body p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <div class="d-flex align-items-center overflow-hidden me-2">
                    <span class="avatar avatar-lg flex-shrink-0 me-2">
                      <img
                        src="@/assets/img/profiles/avatar-19.jpg"
                        alt="student"
                      />
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="mb-1 text-truncate fs-15">
                        Ramien<span class="badge badge-soft-warning ms-1"
                          >Casual</span
                        >
                      </h6>
                      <p class="text-truncate">Accountant</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-xs p-0 btn btn-success me-1"
                      ><i class="ti ti-checks"></i
                    ></a>
                    <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3"
                >
                  <p class="mb-0">Leave : 12 -13 May</p>
                  <p>Apply on : 11 May</p>
                </div>
              </div>
            </div>
            <div class="card mb-0">
              <div class="card-body p-3">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <div class="d-flex align-items-center overflow-hidden me-2">
                    <span class="avatar avatar-lg flex-shrink-0 me-2">
                      <img
                        src="@/assets/img/profiles/avatar-17.jpg"
                        alt="student"
                      />
                    </span>
                    <div class="overflow-hidden">
                      <h6 class="mb-1 text-truncate fs-15">
                        Hendrita<span class="badge badge-soft-success ms-1"
                          >Medical</span
                        >
                      </h6>
                      <p class="text-truncate">Maths Teacher</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-xs p-0 btn btn-success me-1"
                      ><i class="ti ti-checks"></i
                    ></a>
                    <a href="javascript:void(0);" class="avatar avatar-xs p-0 btn btn-danger"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3"
                >
                  <p class="mb-0">Leave : 17 -18 May</p>
                  <p>Apply on : 12 May</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Leave Requests -->
</template>