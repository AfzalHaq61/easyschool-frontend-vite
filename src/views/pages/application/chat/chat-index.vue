<template>
  <div class="main-chat-blk">
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>

      <div class="page-wrapper chat-page-wrapper">
        <div class="content">
          <!-- sidebar group -->
          <div class="sidebar-group left-sidebar chat_sidebar">
            <!-- Chats sidebar -->
            <div id="chats" class="left-sidebar-wrap sidebar active slimscroll">
              <perfect-scrollbar
                class="scroll-area-one"
                :settings="settings"
                @ps-scroll-y="scrollHanle"
              >
                <div class="slimscroll-active-sidebar">
                  <!-- Left Chat Title -->
                  <div
                    class="left-chat-title all-chats d-flex justify-content-between align-items-center"
                  >
                    <div class="setting-title-head">
                      <h4>All Chats</h4>
                    </div>
                    <div class="add-section">
                      <ul>
                        <li>
                          <a href="javascript:void(0);" class="user-chat-search-btn"
                            ><i class="bx bx-search"></i
                          ></a>
                        </li>
                        <li>
                          <div class="chat-action-btns">
                            <div class="chat-action-col">
                              <a
                                class="#"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#new-chat"
                                  ><span><i class="bx bx-message-rounded-add"></i></span
                                  >New Chat
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#new-group"
                                  ><span><i class="bx bx-user-circle"></i></span>Create
                                  Group</a
                                >
                                <a
                                  href="javascript:void(0);"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#invite-other"
                                  ><span><i class="bx bx-user-plus"></i></span>Invite
                                  Others</a
                                >
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- Chat Search -->
                      <div class="user-chat-search">
                        <form>
                          <span class="form-control-feedback"
                            ><i class="bx bx-search"></i
                          ></span>
                          <input
                            type="text"
                            name="chat-search"
                            placeholder="Search"
                            class="form-control"
                          />
                          <div class="user-close-btn-chat">
                            <i class="fa fa-close"></i>
                          </div>
                        </form>
                      </div>
                      <!-- /Chat Search -->
                    </div>
                  </div>
                  <!-- /Left Chat Title -->

                  <!-- Top Online Contacts -->
                  <div class="top-online-contacts p-4 pb-0">
                    <div class="fav-title">
                      <h5>Online Now</h5>
                      <a href="javascript:void(0);">View All</a>
                    </div>
                    <div class="swiper-container">
                      <div
                        class="swiper-wrapper d-flex align-items-center justify-content-between"
                      >
                        <div class="swiper-slide">
                          <div class="avatar avatar-lg avatar-online">
                            <img
                              src="@/assets/img/profiles/avatar-02.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="avatar avatar-lg avatar-online">
                            <img
                              src="@/assets/img/profiles/avatar-01.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="avatar avatar-lg avatar-online">
                            <img
                              src="@/assets/img/profiles/avatar-07.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="avatar avatar-lg avatar-online">
                            <img
                              src="@/assets/img/profiles/avatar-05.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="avatar avatar-lg avatar-online">
                            <img
                              src="@/assets/img/profiles/avatar-03.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="avatar avatar-lg avatar-online">
                            <img
                              src="@/assets/img/profiles/avatar-02.jpg"
                              class="rounded-circle"
                              alt="Img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Top Online Contacts -->

                  <div class="sidebar-body chat-body" id="chatsidebar">
                    <!-- Left Chat Title -->
                    <h5 class="mb-3">Pinned Chat</h5>
                    <!-- /Left Chat Title -->

                    <ul class="mb-3">
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="avatar avatar-lg avatar-online me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/img/profiles/avatar-02.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Mark Villiams</h6>
                              <p class="text-truncate">Have you called them?</p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">10:20 PM</small>
                              <div class="chat-pin">
                                <i class="bx bx-pin me-2"></i>
                                <i class="bx bx-check-double"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg me-2 flex-shrink-0">
                              <img
                                src="@/assets/img/profiles/avatar-01.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Elizabeth Sosa</h6>
                              <p class="text-truncate">
                                <span class="animate-typing-col"
                                  >Typing
                                  <span class="dot"></span>
                                  <span class="dot"></span>
                                  <span class="dot"></span>
                                </span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">Yesterday</small>
                              <div class="chat-pin">
                                <i class="bx bx-pin me-2"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="avatar avatar-lg avatar-online me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/img/profiles/avatar-05.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Michael Howard</h6>
                              <p class="text-truncate">Thank you</p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">10:20 PM</small>
                              <div>
                                <i class="bx bx-pin me-2"></i>
                                <i class="bx bx-check-double"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <!-- Left Chat Title -->
                    <h5 class="mb-3">Recent Chat</h5>
                    <!-- /Left Chat Title -->
                    <ul class="user-list">
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="avatar avatar-lg avatar-online me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/img/profiles/avatar-03.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Horace Keene</h6>
                              <p class="text-truncate">Have you called them?</p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">Just Now</small>
                              <div>
                                <span class="badge bg-primary rounded-circle p-1 fs-8"
                                  >11</span
                                >
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="avatar avatar-lg avatar-online me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/img/profiles/avatar-04.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Hollis Tran</h6>
                              <p class="text-truncate">
                                <i class="bx bx-video me-1"></i>Video
                              </p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">Yesterday</small>
                              <div>
                                <i class="bx bx-check-double"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="avatar avatar-lg avatar-online me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/img/profiles/avatar-15.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">James Albert</h6>
                              <p class="text-truncate">Project Tools.doc</p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">10:20 PM</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="avatar avatar-lg avatar-online me-2 flex-shrink-0"
                            >
                              <img
                                src="@/assets/img/profiles/avatar-09.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Debra Jones</h6>
                              <p class="text-truncate">
                                <i class="bx bx-microphone me-1"></i>Audio
                              </p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">12:30 PM</small>
                              <div>
                                <i class="bx bx-check-double text-success"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg me-2 flex-shrink-0">
                              <img
                                src="@/assets/img/profiles/avatar-07.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Dina Brown</h6>
                              <p class="text-truncate">Have you called them?</p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">Yesterday</small>
                              <div>
                                <i class="bx bx-microphone-off"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg me-2 flex-shrink-0">
                              <img
                                src="@/assets/img/profiles/avatar-08.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Judy Mercer</h6>
                              <p class="text-truncate text-danger">
                                <i class="bx bx-phone-incoming me-1"></i>Missed Call
                              </p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">25/July/23</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="user-list-item">
                        <a
                          href="javascript:void(0);"
                          class="p-2 border rounded d-block mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg me-2 flex-shrink-0">
                              <img
                                src="@/assets/img/profiles/avatar-06.jpg"
                                class="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="mb-1 text-truncate">Richard Ohare</h6>
                              <p class="text-truncate">
                                <i class="bx bx-image-alt me-1"></i>Photo
                              </p>
                            </div>
                            <div class="flex-shrink-0 align-self-start text-end">
                              <small class="text-muted">27/06/24</small>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </perfect-scrollbar>
            </div>
            <!-- / Chats sidebar -->
          </div>
          <!-- /Sidebar group -->

          <!-- Chat -->
          <chat-content></chat-content>
          <!-- /Chat -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import 'vue3-perfect-scrollbar/style.css';
export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      settings: {
        suppressScrollX: true,
      },
    };
  },
  methods: {
    scrollHanle() {},
  },
};
</script>
