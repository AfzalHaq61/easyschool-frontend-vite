<template>
  <div class="row">
    <!-- Notice Board -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Notice Board</h4>
          <router-link to="/announcements/notice-board" class="fw-medium"
            >View All</router-link
          >
        </div>
        <div class="card-body">
          <div class="notice-widget">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex align-items-center overflow-hidden me-2">
                <span
                  class="bg-primary-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                >
                  <i class="ti ti-books fs-16"></i>
                </span>
                <div class="overflow-hidden">
                  <h6 class="text-truncate mb-1">New Syllabus Instructions</h6>
                  <p><i class="ti ti-calendar me-2"></i>Added on : 11 Mar 2024</p>
                </div>
              </div>
              <router-link to="/announcements/notice-board"
                ><i class="ti ti-chevron-right fs-16"></i
              ></router-link>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex align-items-center overflow-hidden me-2">
                <span
                  class="bg-success-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                >
                  <i class="ti ti-note fs-16"></i>
                </span>
                <div class="overflow-hidden">
                  <h6 class="text-truncate mb-1">
                    World Environment Day Program.....!!!
                  </h6>
                  <p><i class="ti ti-calendar me-2"></i>Added on : 21 Apr 2024</p>
                </div>
              </div>
              <router-link to="/announcements/notice-board"
                ><i class="ti ti-chevron-right fs-16"></i
              ></router-link>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex align-items-center overflow-hidden me-2">
                <span
                  class="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                >
                  <i class="ti ti-bell-check fs-16"></i>
                </span>
                <div class="overflow-hidden">
                  <h6 class="text-truncate mb-1">Exam Preparation Notification!</h6>
                  <p><i class="ti ti-calendar me-2"></i>Added on : 13 Mar 2024</p>
                </div>
              </div>
              <router-link to="/announcements/notice-board"
                ><i class="ti ti-chevron-right fs-16"></i
              ></router-link>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex align-items-center overflow-hidden me-2">
                <span
                  class="bg-skyblue-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                >
                  <i class="ti ti-notes fs-16"></i>
                </span>
                <div class="overflow-hidden">
                  <h6 class="text-truncate mb-1">Online Classes Preparation</h6>
                  <p><i class="ti ti-calendar me-2"></i>Added on : 24 May 2024</p>
                </div>
              </div>
              <router-link to="/announcements/notice-board"
                ><i class="ti ti-chevron-right fs-16"></i
              ></router-link>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex align-items-center overflow-hidden me-2">
                <span
                  class="bg-warning-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                >
                  <i class="ti ti-package fs-16"></i>
                </span>
                <div class="overflow-hidden">
                  <h6 class="text-truncate mb-1">Exam Time Table Release</h6>
                  <p><i class="ti ti-calendar me-2"></i>Added on : 24 May 2024</p>
                </div>
              </div>
              <router-link to="/announcements/notice-board"
                ><i class="ti ti-chevron-right fs-16"></i
              ></router-link>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-0">
              <div class="d-flex align-items-center overflow-hidden me-2">
                <span
                  class="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0"
                >
                  <i class="ti ti-bell-check fs-16"></i>
                </span>
                <div class="overflow-hidden">
                  <h6 class="text-truncate mb-1">English Exam Preparation</h6>
                  <p><i class="ti ti-calendar me-2"></i>Added on : 23 Mar 2024</p>
                </div>
              </div>
              <router-link to="/announcements/notice-board"
                ><i class="ti ti-chevron-right fs-16"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Notice Board -->

    <!-- Syllabus -->
    <div class="col-xxl-4 col-xl-6 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Syllabus</h4>
        </div>
        <div class="card-body">
          <div class="alert alert-success d-flex align-items-center mb-24" role="alert">
            <i class="ti ti-info-square-rounded me-2 fs-14"></i>
            <div class="fs-14">
              These Result are obtained from the syllabus completion on the respective
              Class
            </div>
          </div>
          <ul class="list-group">
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">Maths</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-primary rounded"
                      role="progressbar"
                      style="width: 20%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">Physics</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-secondary rounded"
                      role="progressbar"
                      style="width: 30%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">Chemistry</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-info rounded"
                      role="progressbar"
                      style="width: 40%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">Botany</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-success rounded"
                      role="progressbar"
                      style="width: 50%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">English</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-warning rounded"
                      role="progressbar"
                      style="width: 70%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">Spanish</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-danger rounded"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <p class="text-dark">Japanese</p>
                </div>
                <div class="col-sm-8">
                  <div class="progress progress-xs flex-grow-1">
                    <div
                      class="progress-bar bg-primary rounded"
                      role="progressbar"
                      style="width: 85%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Syllabus -->

    <!-- Todo -->
    <div class="col-xxl-4 col-xl-12 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Todo</h4>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-calendar me-2"></i>Today
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  This Month
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  This Year
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Last Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush todo-list">
            <li class="list-group-item py-3 px-0 pt-0">
              <div class="d-sm-flex align-items-center justify-content-between">
                <div
                  class="d-flex align-items-center overflow-hidden me-2"
                  :class="{ 'todo-strike-content': isClick }"
                  @click="toggleClick"
                >
                  <div class="form-check form-check-md me-2">
                    <input class="form-check-input" type="checkbox" checked />
                  </div>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">Send Reminder to Students</h6>
                    <p>01:00 PM</p>
                  </div>
                </div>
                <span class="badge badge-soft-success mt-2 mt-sm-0">Compeleted</span>
              </div>
            </li>
            <li class="list-group-item py-3 px-0">
              <div class="d-sm-flex align-items-center justify-content-between">
                <div
                  class="d-flex align-items-center overflow-hidden me-2"
                  :class="{ 'todo-strike-content': isClicked }"
                  @click="toggleClicked"
                >
                  <div class="form-check form-check-md me-2">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">Create Routine to new staff</h6>
                    <p>04:50 PM</p>
                  </div>
                </div>
                <span class="badge badge-soft-skyblue mt-2 mt-sm-0">Inprogress</span>
              </div>
            </li>
            <li class="list-group-item py-3 px-0">
              <div class="d-sm-flex align-items-center justify-content-between">
                <div
                  class="d-flex align-items-center overflow-hidden me-2"
                  :class="{ 'todo-strike-content': isClickedOne }"
                  @click="toggleClickedOne"
                >
                  <div class="form-check form-check-md me-2">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">Extra Class Info to Students</h6>
                    <p>04:55 PM</p>
                  </div>
                </div>
                <span class="badge badge-soft-warning mt-2 mt-sm-0">Yet to Start</span>
              </div>
            </li>
            <li class="list-group-item py-3 px-0">
              <div class="d-sm-flex align-items-center justify-content-between">
                <div
                  class="d-flex align-items-center overflow-hidden me-2"
                  :class="{ 'todo-strike-content': isClickedTwo }"
                  @click="toggleClickedTwo"
                >
                  <div class="form-check form-check-md me-2">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">Fees for Upcoming Academics</h6>
                    <p>04:55 PM</p>
                  </div>
                </div>
                <span class="badge badge-soft-warning mt-2 mt-sm-0">Yet to Start</span>
              </div>
            </li>
            <li class="list-group-item py-3 px-0 pb-0">
              <div class="d-sm-flex align-items-center justify-content-between">
                <div
                  class="d-flex align-items-center overflow-hidden me-2"
                  :class="{ 'todo-strike-content': isClickedThree }"
                  @click="toggleClickedThree"
                >
                  <div class="form-check form-check-md me-2">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                  <div class="overflow-hidden">
                    <h6 class="mb-1 text-truncate">English - Essay on Visit</h6>
                    <p>05:55 PM</p>
                  </div>
                </div>
                <span class="badge badge-soft-warning mt-2 mt-sm-0">Yet to Start</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Todo -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isClick: true,
      isClicked: false,
      isClickedOne: false,
      isClickedTwo: false,
      isClickedThree: false,
    };
  },
  methods: {
    toggleClick() {
      this.isClick = !this.isClick;
    },
    toggleClicked() {
      this.isClicked = !this.isClicked;
    },
    toggleClickedOne() {
      this.isClickedOne = !this.isClickedOne;
    },
    toggleClickedTwo() {
      this.isClickedTwo = !this.isClickedTwo;
    },
    toggleClickedThree() {
      this.isClickedThree = !this.isClickedThree;
    },
  },
};
</script>
