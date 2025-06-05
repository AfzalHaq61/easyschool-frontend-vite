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
              data-bs-target="#add_ticket"
              class="btn btn-primary"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add New Ticket</a
            >
          </div>
        </div>
      </div>

      <ticket-filter></ticket-filter>

      <div class="row">
        <!-- Tickets -->
        <div class="col-xl-8 col-xxl-9">
          <!-- Ticket List -->
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap p-3 pb-0"
            >
              <h5 class="text-primary mb-3">IT Support</h5>
              <div class="d-flex align-items-center mb-1">
                <span
                  class="badge badge-danger d-inline-flex align-items-center mb-2 me-4"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>High</span
                >
                <div class="mb-2">
                  <vue-select
                    :options="PublicMark"
                    id="publicmark"
                    placeholder="Mark as Private"
                  />
                </div>
              </div>
            </div>
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center flex-wrap">
                  <span class="avatar avatar-xxl me-2 mb-3">
                    <img src="@/assets/img/students/student-11.jpg" alt="img" />
                  </span>
                  <div class="mb-3">
                    <span class="badge bg-pending rounded-pill mb-1">#TK0003</span>
                    <div class="d-flex align-items-center mb-2">
                      <h5 class="fw-semibold me-2">
                        <router-link to="/support/ticket-details"
                          >Laptop Issue</router-link
                        >
                      </h5>
                      <span class="badge bg-outline-danger d-flex align-items-center ms-1"
                        ><i class="ti ti-circle-filled fs-5 me-1"></i>Open</span
                      >
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <p class="text-gray d-flex align-items-center me-2 mb-1">
                        <img
                          src="@/assets/img/teachers/teacher-02.jpg"
                          class="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Assigned to <span class="text-dark ms-1"> Daniel</span>
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1 me-2">
                        <i class="ti ti-calendar-bolt me-1"></i>Updated 22 hours ago
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1">
                        <i class="ti ti-message-share me-1"></i>9 Comments
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-danger d-flex align-items-center lh-1"
                    ><i class="ti ti-trash-x me-1"></i>Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Ticket List -->

          <!-- Ticket List -->
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap p-3 pb-0"
            >
              <h5 class="text-primary mb-3">Maintenance</h5>
              <div class="d-flex align-items-center mb-1">
                <span
                  class="badge badge-success d-inline-flex align-items-center mb-2 me-4"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Low</span
                >
                <div class="mb-2">
                  <vue-select
                    :options="OnePublicMark"
                    id="onepublicmark"
                    placeholder="Mark as Public"
                  />
                </div>
              </div>
            </div>
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center flex-wrap">
                  <span class="avatar avatar-xxl me-2 mb-3">
                    <img src="@/assets/img/students/student-01.jpg" alt="img" />
                  </span>
                  <div class="mb-3">
                    <span class="badge bg-pending rounded-pill mb-1">#TK0004</span>
                    <div class="d-flex align-items-center mb-2">
                      <h5 class="fw-semibold me-2">
                        <router-link to="/support/ticket-details"
                          >Air Conditioning Problem in Classroom</router-link
                        >
                      </h5>
                      <span
                        class="badge bg-outline-warning d-flex align-items-center ms-1"
                        ><i class="ti ti-circle-filled fs-5 me-1"></i>InProgress</span
                      >
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <p class="text-gray d-flex align-items-center me-2 mb-1">
                        <img
                          src="@/assets/img/teachers/teacher-01.jpg"
                          class="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Assigned to <span class="text-dark ms-1"> Teresa</span>
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1 me-2">
                        <i class="ti ti-calendar-bolt me-1"></i>Updated 20 hours ago
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1">
                        <i class="ti ti-message-share me-1"></i>15 Comments
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-danger d-flex align-items-center lh-1"
                    ><i class="ti ti-trash-x me-1"></i>Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Ticket List -->

          <!-- Ticket List -->
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap p-3 pb-0"
            >
              <h5 class="text-primary mb-3">Transportation Issue</h5>
              <div class="d-flex align-items-center mb-1">
                <span
                  class="badge badge-warning d-inline-flex align-items-center mb-2 me-4"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Medium
                </span>
                <div class="mb-2">
                  <vue-select
                    :options="TwoPublicMark"
                    id="twopublicmark"
                    placeholder="Mark as Private"
                  />
                </div>
              </div>
            </div>
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center flex-wrap">
                  <span class="avatar avatar-xxl me-2 mb-3">
                    <img src="@/assets/img/students/student-05.jpg" alt="img" />
                  </span>
                  <div class="mb-3">
                    <span class="badge bg-pending rounded-pill mb-1">#TK0003</span>
                    <div class="d-flex align-items-center mb-2">
                      <h5 class="fw-semibold me-2">
                        <router-link to="/support/ticket-details"
                          >School Bus Route Issue</router-link
                        >
                      </h5>
                      <span
                        class="badge bg-outline-success d-flex align-items-center ms-1"
                        ><i class="ti ti-circle-filled fs-5 me-1"></i>Closed</span
                      >
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <p class="text-gray d-flex align-items-center me-2 mb-1">
                        <img
                          src="@/assets/img/teachers/teacher-06.jpg"
                          class="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Assigned to <span class="text-dark ms-1"> James</span>
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1 me-2">
                        <i class="ti ti-calendar-bolt me-1"></i>Updated 15 hours ago
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1">
                        <i class="ti ti-message-share me-1"></i>12 Comments
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-danger d-flex align-items-center lh-1"
                    ><i class="ti ti-trash-x me-1"></i>Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Ticket List -->

          <!-- Ticket List -->
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap p-3 pb-0"
            >
              <h5 class="text-primary mb-3">Library</h5>
              <div class="d-flex align-items-center mb-1">
                <span
                  class="badge badge-warning d-inline-flex align-items-center mb-2 me-4"
                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Medium
                </span>
                <div class="mb-2">
                  <vue-select
                    :options="ThreePublicMark"
                    id="threepublicmark"
                    placeholder="Mark as Private"
                  />
                </div>
              </div>
            </div>
            <div class="card-body p-3 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center flex-wrap">
                  <span class="avatar avatar-xxl me-2 mb-3">
                    <img src="@/assets/img/students/student-09.jpg" alt="img" />
                  </span>
                  <div class="mb-3">
                    <span class="badge bg-pending rounded-pill mb-1">#TK0002</span>
                    <div class="d-flex align-items-center mb-2">
                      <h5 class="fw-semibold me-2">
                        <router-link to="/support/ticket-details"
                          >Library Book Request</router-link
                        >
                      </h5>
                      <span class="badge bg-outline-info d-flex align-items-center ms-1"
                        ><i class="ti ti-circle-filled fs-5 me-1"></i>Reopened</span
                      >
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <p class="text-gray d-flex align-items-center me-2 mb-1">
                        <img
                          src="@/assets/img/teachers/teacher-09.jpg"
                          class="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Assigned to <span class="text-dark ms-1"> Reopened</span>
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1 me-2">
                        <i class="ti ti-calendar-bolt me-1"></i>Updated 05 hours ago
                      </p>
                      <p class="text-gray d-flex align-items-center mb-1">
                        <i class="ti ti-message-share me-1"></i>13 Comments
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-danger d-flex align-items-center lh-1"
                    ><i class="ti ti-trash-x me-1"></i>Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Ticket List -->

          <div class="text-center mb-xl-0 mb-4">
            <a href="javascript:void(0);" class="btn btn-primary"
              ><i class="ti ti-loader-3 me-2"></i>Load More</a
            >
          </div>
        </div>
        <!-- /Tickets -->

        <!-- Categories List -->
        <div class="col-xl-4 col-xxl-3 theiaStickySidebar">
          <div class="card">
            <div class="card-header p-3">
              <h4>Ticket Categories</h4>
            </div>
            <div class="card-body p-0">
              <div class="d-flex flex-column">
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <a href="javascript:void(0);">Internet Issue</a>
                  <div class="d-flex align-items-center">
                    <span class="badge badge-soft-danger me-2">2</span>
                    <span class="badge bg-primary-transparent">0</span>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <a href="javascript:void(0);">Computer</a>
                  <div class="d-flex align-items-center">
                    <span class="badge badge-soft-danger me-2">2</span>
                    <span class="badge bg-primary-transparent">1</span>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <a href="javascript:void(0);">Redistribute</a>
                  <div class="d-flex align-items-center">
                    <span class="badge bg-primary-transparent">1</span>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <a href="javascript:void(0);">Payment</a>
                  <div class="d-flex align-items-center">
                    <span class="badge bg-primary-transparent">2</span>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3">
                  <a href="javascript:void(0);">Complaint</a>
                  <div class="d-flex align-items-center">
                    <span class="badge badge-soft-danger me-2">3</span>
                    <span class="badge bg-primary-transparent">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-0">
            <div class="card-header p-3">
              <h4>Support Agents</h4>
            </div>
            <div class="card-body p-0">
              <div class="d-flex flex-column">
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <span class="d-flex align-items-center">
                    <img
                      src="@/assets/img/teachers/teacher-03.jpg"
                      class="avatar avatar-xs rounded-circle me-2"
                      alt="img"
                    />Hellana
                  </span>
                  <div class="d-flex align-items-center">
                    <span class="badge badge-soft-danger me-2">2</span>
                    <span class="badge bg-primary-transparent">0</span>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <span class="d-flex align-items-center">
                    <img
                      src="@/assets/img/teachers/teacher-01.jpg"
                      class="avatar avatar-xs rounded-circle me-2"
                      alt="img"
                    />Teresa
                  </span>
                  <div class="d-flex align-items-center">
                    <span class="badge badge-soft-danger me-2">2</span>
                    <span class="badge bg-primary-transparent">1</span>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-bottom p-3"
                >
                  <span class="d-flex align-items-center">
                    <img
                      src="@/assets/img/teachers/teacher-02.jpg"
                      class="avatar avatar-xs rounded-circle me-2"
                      alt="img"
                    />Daniel
                  </span>
                  <div class="d-flex align-items-center">
                    <span class="badge bg-primary-transparent">1</span>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3">
                  <span class="d-flex align-items-center">
                    <img
                      src="@/assets/img/teachers/teacher-07.jpg"
                      class="avatar avatar-xs rounded-circle me-2"
                      alt="img"
                    />Willie
                  </span>
                  <div class="d-flex align-items-center">
                    <span class="badge bg-primary-transparent">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Categories List -->
      </div>
    </div>
  </div>
  <ticket-modal></ticket-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Tickets",
      text: "Dashboard",
      text1: "Support",
      text2: "Tickets",
      PublicMark: ["Mark as Public", "Mark as Private"],
      OnePublicMark: ["Mark as Public", "Mark as Private"],
      TwoPublicMark: ["Mark as Public", "Mark as Private"],
      ThreePublicMark: ["Mark as Public", "Mark as Private"],
    };
  },
};
</script>
