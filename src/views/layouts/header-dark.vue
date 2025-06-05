<template>
  <div class="header">
    <!-- Logo -->
    <div class="header-left active">
      <router-link to="/dashboard" class="logo logo-normal">
        <img src="@/assets/img/logo.svg" alt="Logo" />
      </router-link>
      <router-link to="/dashboard" class="logo-small">
        <img src="@/assets/img/logo-small.svg" alt="Logo" />
      </router-link>
      <router-link to="/dashboard" class="dark-logo">
        <img src="@/assets/img/logo-dark.svg" alt="Logo" />
      </router-link>
      <a id="toggle_btn" href="javascript:void(0);" @click="toggleSidebar">
        <i class="ti ti-menu-deep"></i>
      </a>
    </div>
    <!-- /Logo -->

    <a id="mobile_btn" class="mobile_btn" href="javascript:void(0);" @click="toggleSidebar1">
      <span class="bar-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a>

    <div class="header-user">
      <div class="nav user-menu">
        <!-- Search -->
        <div class="nav-item nav-search-inputs me-auto">
          <div class="top-nav-search">
            <a href="javascript:void(0);" class="responsive-search">
              <i class="fa fa-search"></i>
            </a>
            <form action="#" class="dropdown">
              <div class="searchinputs" id="dropdownMenuClickable">
                <input type="text" placeholder="Search" />
                <div class="search-addon">
                  <button type="submit"><i class="ti ti-command"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- /Search -->

        <div class="d-flex align-items-center">
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light fw-normal bg-white d-flex align-items-center p-2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ti ti-calendar-due me-1"></i>Academic Year : 2024 / 2025
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a
                href="javascript:void(0);"
                class="dropdown-item d-flex align-items-center"
              >
                Academic Year : 2023 / 2024
              </a>
              <a
                href="javascript:void(0);"
                class="dropdown-item d-flex align-items-center"
              >
                Academic Year : 2022 / 2023
              </a>
              <a
                href="javascript:void(0);"
                class="dropdown-item d-flex align-items-center"
              >
                Academic Year : 2021 / 2022
              </a>
            </div>
          </div>
          <div class="pe-1 ms-1">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light bg-white btn-icon d-flex align-items-center me-1 p-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="@/assets/img/flags/us.png"
                  alt="Language"
                  class="img-fluid rounded-pill"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a
                  href="javascript:void(0);"
                  class="dropdown-item active d-flex align-items-center"
                >
                  <img
                    class="me-2 rounded-pill"
                    src="@/assets/img/flags/us.png"
                    alt="Img"
                    height="22"
                    width="22"
                  />
                  English
                </a>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center"
                >
                  <img
                    class="me-2 rounded-pill"
                    src="@/assets/img/flags/fr.png"
                    alt="Img"
                    height="22"
                    width="22"
                  />
                  French
                </a>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center"
                >
                  <img
                    class="me-2 rounded-pill"
                    src="@/assets/img/flags/es.png"
                    alt="Img"
                    height="22"
                    width="22"
                  />
                  Spanish
                </a>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center"
                >
                  <img
                    class="me-2 rounded-pill"
                    src="@/assets/img/flags/de.png"
                    alt="Img"
                    height="22"
                    width="22"
                  />
                  German
                </a>
              </div>
            </div>
          </div>
          <div class="pe-1">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light bg-white btn-icon me-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ti ti-square-rounded-plus"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right border shadow-sm dropdown-md">
                <div class="p-3 border-bottom">
                  <h5>Add New</h5>
                </div>
                <div class="p-3 pb-0">
                  <div class="row gx-2">
                    <div class="col-6">
                      <router-link
                        to="/students/add-student"
                        class="d-block bg-primary-transparent ronded p-2 text-center mb-3 class-hover"
                      >
                        <div class="avatar avatar-lg mb-2">
                          <span
                            class="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle"
                            ><i class="ti ti-school"></i
                          ></span>
                        </div>
                        <p class="text-dark">Students</p>
                      </router-link>
                    </div>
                    <div class="col-6">
                      <router-link
                        to="/teachers/add-teacher"
                        class="d-block bg-success-transparent ronded p-2 text-center mb-3 class-hover"
                      >
                        <div class="avatar avatar-lg mb-2">
                          <span
                            class="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle"
                            ><i class="ti ti-users"></i
                          ></span>
                        </div>
                        <p class="text-dark">Teachers</p>
                      </router-link>
                    </div>
                    <div class="col-6">
                      <router-link
                        to="/hrm/add-staff"
                        class="d-block bg-warning-transparent ronded p-2 text-center mb-3 class-hover"
                      >
                        <div class="avatar avatar-lg rounded-circle mb-2">
                          <span
                            class="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-warning rounded-circle"
                            ><i class="ti ti-users-group"></i
                          ></span>
                        </div>
                        <p class="text-dark">Staffs</p>
                      </router-link>
                    </div>
                    <div class="col-6">
                      <router-link
                        to="/accounts/add-invoice"
                        class="d-block bg-info-transparent ronded p-2 text-center mb-3 class-hover"
                      >
                        <div class="avatar avatar-lg mb-2">
                          <span
                            class="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-info rounded-circle"
                            ><i class="ti ti-license"></i
                          ></span>
                        </div>
                        <p class="text-dark">Invoice</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref="notificationItem"
            :class="notificationClass"
            @click="handleClick"
            id="notification_item"
          >
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon position-relative me-1"
              id="notification_popup"
            >
              <i class="ti ti-bell"></i>
              <span class="notification-status-dot"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-end notification-dropdown p-4">
              <div
                class="d-flex align-items-center justify-content-between border-bottom p-0 pb-3 mb-3"
              >
                <h4 class="notification-title">Notifications (2)</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="text-primary fs-15 me-3 lh-1"
                    >Mark all as read</a
                  >
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                      ><i class="ti ti-calendar-due me-1"></i>Today
                    </a>
                    <ul class="dropdown-menu mt-2 p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">
                          This Week
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">
                          Last Week
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
              </div>

              <div class="noti-content">
                <div class="d-flex flex-column">
                  <div class="border-bottom mb-3 pb-3">
                    <router-link to="/activities">
                      <div class="d-flex">
                        <span class="avatar avatar-lg me-2 flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-27.jpg" alt="Profile" />
                        </span>
                        <div class="flex-grow-1">
                          <p class="mb-1">
                            <span class="text-dark fw-semibold">Shawn</span> performance
                            in Math is below the threshold.
                          </p>
                          <span>Just Now</span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="border-bottom mb-3 pb-3">
                    <router-link to="/activities" class="pb-0">
                      <div class="d-flex">
                        <span class="avatar avatar-lg me-2 flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-23.jpg" alt="Profile" />
                        </span>
                        <div class="flex-grow-1">
                          <p class="mb-1">
                            <span class="text-dark fw-semibold">Sylvia</span> added
                            appointment on 02:00 PM
                          </p>
                          <span>10 mins ago</span>
                          <div
                            class="d-flex justify-content-start align-items-center mt-1"
                          >
                            <span class="btn btn-light btn-sm me-2">Deny</span>
                            <span class="btn btn-primary btn-sm">Approve</span>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="border-bottom mb-3 pb-3">
                    <router-link to="/activities">
                      <div class="d-flex">
                        <span class="avatar avatar-lg me-2 flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-25.jpg" alt="Profile" />
                        </span>
                        <div class="flex-grow-1">
                          <p class="mb-1">
                            New student record
                            <span class="text-dark fw-semibold"> George</span> is created
                            by
                            <span class="text-dark fw-semibold"> Teressa</span>
                          </p>
                          <span>2 hrs ago</span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="border-0 mb-3 pb-0">
                    <router-link to="/activities">
                      <div class="d-flex">
                        <span class="avatar avatar-lg me-2 flex-shrink-0">
                          <img src="@/assets/img/profiles/avatar-01.jpg" alt="Profile" />
                        </span>
                        <div class="flex-grow-1">
                          <p class="mb-1">
                            A new teacher record for
                            <span class="text-dark fw-semibold">Elisa</span>
                          </p>
                          <span>09:45 AM</span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="d-flex p-0">
                <a href="javascript:void(0);" class="btn btn-light w-100 me-2">Cancel</a>
                <router-link to="/activities" class="btn btn-primary w-100"
                  >View All</router-link
                >
              </div>
            </div>
          </div>
          <div class="pe-1">
            <router-link
              to="/application/chat"
              class="btn btn-outline-light bg-white btn-icon position-relative me-1"
            >
              <i class="ti ti-brand-hipchat"></i>
              <span class="chat-status-dot"></span>
            </router-link>
          </div>
          <div class="pe-1">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon me-1"
            >
              <i class="ti ti-chart-bar"></i>
            </a>
          </div>
          <div class="pe-1">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon me-1"
              id="btnFullscreen"
              @click="initFullScreen"
            >
              <i class="ti ti-maximize"></i>
            </a>
          </div>
          <div class="dropdown ms-1">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <span class="avatar avatar-md rounded">
                <img
                  src="@/assets/img/profiles/avatar-27.jpg"
                  alt="Img"
                  class="img-fluid"
                />
              </span>
            </a>
            <div class="dropdown-menu">
              <div class="d-block">
                <div class="d-flex align-items-center p-2">
                  <span class="avatar avatar-md me-2 online avatar-rounded">
                    <img src="@/assets/img/profiles/avatar-27.jpg" alt="img" />
                  </span>
                  <div>
                    <h6 class="">Kevin Larry</h6>
                    <p class="text-primary mb-0">Administrator</p>
                  </div>
                </div>
                <hr class="m-0" />
                <router-link
                  class="dropdown-item d-inline-flex align-items-center p-2"
                  to="/pages/profile"
                >
                  <i class="ti ti-user-circle me-2"></i>My Profile</router-link
                >
                <router-link
                  class="dropdown-item d-inline-flex align-items-center p-2"
                  to="/settings/profile-settings"
                  ><i class="ti ti-settings me-2"></i>Settings</router-link
                >
                <hr class="m-0" />
                <router-link
                  class="dropdown-item d-inline-flex align-items-center p-2"
                  to="/" @click="logout"
                  ><i class="ti ti-login me-2"></i>Logout</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="dropdown mobile-user-menu">
      <a
        href="javascript:void(0);"
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ><i class="fa fa-ellipsis-v"></i
      ></a>
      <div class="dropdown-menu dropdown-menu-end">
        <router-link class="dropdown-item" to="/pages/profile">My Profile</router-link>
        <router-link class="dropdown-item" to="/settings/profile-settings"
          >Settings</router-link
        >
        <router-link class="dropdown-item" to="/" @click="logout">Logout</router-link>
      </div>
    </div>
    <!-- /Mobile Menu -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      notificationClass: "pe-1",
    };
  },
  mounted() {
    this.initMouseoverListener();
    this.$refs.notificationItem = this.$el;
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  },
  methods: {
    handleClick(event) {
      event.stopPropagation();

      if (this.notificationClass === "pe-1 notification-item-show") {
        // If the class is already present, remove it
        this.notificationClass = "";
        document.removeEventListener("click", this.handleOutsideClick);
      } else {
        // If the class is not present, add it
        this.notificationClass = "pe-1 notification-item-show";
        document.addEventListener("click", this.handleOutsideClick);
      }
    },
    handleOutsideClick(event) {
      // Check if the click was outside the notification item
      const notificationItem = event.target.closest(".notification-item");
      if (!notificationItem) {
        this.notificationClass = "";
        // Remove the event listener
        document.removeEventListener("click", this.handleOutsideClick);
      }
    },
    toggleSidebar1() {
      const body = document.body;
      body.classList.toggle("slide-nav");
    },
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },

    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },

    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (body.classList.contains("mini-sidebar") && this.isElementVisible(toggleBtn)) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
          this.slideDownSubmenu();
        } else {
          body.classList.remove("expand-menu");
          this.slideUpSubmenu();
        }

        e.preventDefault();
      }
    },
    isElementVisible(element) {
      return element.offsetWidth > 0 || element.offsetHeight > 0;
    },
    slideDownSubmenu() {
      const subdropPlusUl = document.getElementsByClassName("subdrop");
      for (let i = 0; i < subdropPlusUl.length; i++) {
        const submenu = subdropPlusUl[i].nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
          submenu.style.display = "block";
        }
      }
    },
    slideUpSubmenu() {
      const subdropPlusUl = document.getElementsByClassName("subdrop");
      for (let i = 0; i < subdropPlusUl.length; i++) {
        const submenu = subdropPlusUl[i].nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
          submenu.style.display = "none";
        }
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
    document.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>

<script setup>
  import router from "@/router";
  import { useAuthStore } from '@/stores/auth';

  const authStore = useAuthStore();

  const logout = async () => {
    try {
      await authStore.logout();
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
</script>
