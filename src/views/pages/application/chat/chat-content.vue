<template>
  <div class="chat chat-messages" id="middle">
    <div class="slimscroll">
      <perfect-scrollbar
        class="scroll-area-two"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div class="chat-header">
          <div class="user-details">
            <div class="d-lg-none">
              <ul class="list-inline mt-2 me-2">
                <li class="list-inline-item">
                  <a
                    class="text-muted px-0 left_sides"
                    href="javascript:void(0);"
                    data-chat="open"
                  >
                    <i class="fas fa-arrow-left"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="avatar avatar-lg me-2">
              <img
                src="@/assets/img/profiles/avatar-02.jpg"
                class="rounded-circle"
                alt="image"
              />
            </div>
            <div>
              <h6>Mark Villiams</h6>
              <small class="last-seen"> Last Seen at 07:15 PM </small>
            </div>
          </div>
          <div class="chat-options">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a
                  href="javascript:void(0)"
                  @click="showChat"
                  class="btn btn-outline-light chat-search-btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Search"
                >
                  <i class="bx bx-search"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <router-link
                  to="/call/video-call"
                  class="btn btn-outline-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Video Call"
                >
                  <i class="bx bx-video"></i>
                </router-link>
              </li>
              <li class="list-inline-item">
                <router-link
                  to="/application/call"
                  class="btn btn-outline-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Voice Call"
                >
                  <i class="bx bx-phone"></i>
                </router-link>
              </li>
              <li class="list-inline-item dream_profile_menu" @click="toggleSidebar">
                <a href="javascript:void(0)" class="btn btn-outline-light not-chat-user">
                  <i class="bx bx-info-circle"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn btn-outline-light no-bg"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i class="bx bx-dots-vertical-rounded"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-x"></i></span>Close Chat
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-volume-mute"></i></span>Mute Notification</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-time-five"></i></span>Disappearing Message</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-brush-alt"></i></span>Clear Message</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-trash-alt"></i></span>Delete Chat</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-dislike"></i></span>Report</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i class="bx bx-block"></i></span>Block</a
                  >
                </div>
              </li>
            </ul>
          </div>
          <!-- Chat Search -->
          <div class="chat-search" :class="{ 'visible-chat': chatVisible }">
            <form>
              <span class="form-control-feedback"><i class="bx bx-search"></i></span>
              <input
                type="text"
                name="chat-search"
                placeholder="Search Chats"
                class="form-control"
              />
              <div class="close-btn-chat" @click="hideChat">
                <i class="fa fa-close"></i>
              </div>
            </form>
          </div>
          <!-- /Chat Search -->
        </div>
        <div class="chat-body">
          <div class="messages">
            <div class="chats">
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
              <div class="chat-content">
                <div class="chat-profile-name">
                  <h6>Mark Villiams<span>8:16 PM</span></h6>
                  <div class="chat-action-btns ms-3">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-star"></i></span>Star Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content">
                  Hello <a href="javascript:void(0);">@Alex</a> Thank you for the
                  beautiful web design ahead schedule.
                  <div class="emoj-group">
                    <ul>
                      <li class="emoj-action">
                        <a href="javascript:void(0);"><i class="bx bx-smile"></i></a>
                        <div class="emoj-group-list">
                          <ul>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-01.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-02.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-03.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-04.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-05.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li class="add-emoj">
                              <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#forward-message"
                          ><i class="bx bx-share"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-line">
              <span class="chat-date">Today, July 24</span>
            </div>
            <div class="chats chats-right">
              <div class="chat-content">
                <div class="chat-profile-name text-end">
                  <h6>Alex Smith<span>8:16 PM</span></h6>
                  <div class="chat-action-btns ms-3">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-star"></i></span>Star Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content">
                  <div class="emoj-group rig-emoji-group">
                    <ul>
                      <li class="emoj-action">
                        <a href="javascript:void(0);"><i class="bx bx-smile"></i></a>
                        <div class="emoj-group-list">
                          <ul>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-01.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-02.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-03.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-04.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-05.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li class="add-emoj">
                              <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#forward-message"
                          ><i class="bx bx-share"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div class="chat-voice-group">
                    <ul>
                      <li>
                        <a href="javascript:void(0);"
                          ><span
                            ><img
                              src="@/assets/img/icons/play-01.svg"
                              alt="image" /></span
                        ></a>
                      </li>
                      <li><img src="@/assets/img/icons/voice.svg" alt="image" /></li>
                      <li>0:05</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-10.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
            </div>
            <div class="chats">
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
              <div class="chat-content">
                <div class="chat-profile-name">
                  <h6>
                    Mark Villiams<span>8:16 PM</span
                    ><span class="check-star"><i class="bx bxs-star"></i></span>
                  </h6>
                  <div class="chat-action-btns ms-2">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bxs-star"></i></span>Unstar Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content award-link chat-award-link">
                  <a href="javascript:void(0);" class="mb-1"
                    >https://www.youtube.com/watch?v=GCmL3mS0Psk</a
                  >
                  <img src="@/assets/img/sending-img.png" alt="img" />
                  <div class="emoj-group">
                    <ul>
                      <li class="emoj-action">
                        <a href="javascript:void(0);"><i class="bx bx-smile"></i></a>
                        <div class="emoj-group-list">
                          <ul>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-01.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-02.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-03.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-04.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-05.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li class="add-emoj">
                              <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);"><i class="bx bx-share"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="chats chats-right">
              <div class="chat-content">
                <div class="chat-profile-name justify-content-end">
                  <h6>Alex Smith<span>8:16 PM</span></h6>
                  <div class="chat-action-btns ms-3">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-star"></i></span>Star Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content fancy-msg-box">
                  <div class="emoj-group wrap-emoji-group">
                    <ul>
                      <li class="emoj-action">
                        <a href="javascript:void(0);"><i class="bx bx-smile"></i></a>
                        <div class="emoj-group-list">
                          <ul>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-01.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-02.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-03.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-04.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-05.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li class="add-emoj">
                              <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);"><i class="bx bx-share"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div class="download-col">
                    <chat-images></chat-images>
                  </div>
                </div>
              </div>
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-10.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
            </div>

            <div class="chats">
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
              <div class="chat-content">
                <div class="chat-profile-name">
                  <h6>Mark Villiams<span>8:16 PM</span></h6>
                  <div class="chat-action-btns ms-3">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-star"></i></span>Star Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content review-files">
                  <p class="d-flex align-items-center">
                    Please check and review the files<span class="ms-1 d-flex"
                      ><img src="@/assets/img/icons/smile-chat.svg" alt="Icon"
                    /></span>
                  </p>
                  <div class="file-download d-flex align-items-center mb-0">
                    <div
                      class="file-type d-flex align-items-center justify-content-center me-2"
                    >
                      <i class="bx bxs-file-doc"></i>
                    </div>
                    <div class="file-details">
                      <span class="file-name">Landing_page_V1.doc</span>
                      <ul>
                        <li>80 Bytes</li>
                        <li><a href="javascript:void(0);">Download</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="emoj-group">
                    <ul>
                      <li class="emoj-action">
                        <a href="javascript:void(0);"><i class="bx bx-smile"></i></a>
                        <div class="emoj-group-list">
                          <ul>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-01.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-02.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-03.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-04.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-05.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li class="add-emoj">
                              <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);"><i class="bx bx-share"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="like-chat-grp">
                  <ul>
                    <li class="like-chat">
                      <a href="javascript:void(0);"
                        >2<img src="@/assets/img/icons/like.svg" alt="Icon"
                      /></a>
                    </li>
                    <li class="comment-chat">
                      <a href="javascript:void(0);"
                        >2<img src="@/assets/img/icons/heart.svg" alt="Icon"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="chats">
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
              <div class="chat-content">
                <div class="chat-profile-name">
                  <h6>Mark Villiams<span>8:16 PM</span></h6>
                  <div class="chat-action-btns ms-3">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-star"></i></span>Star Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content">
                  Thank you for your support
                  <div class="emoj-group">
                    <ul>
                      <li class="emoj-action">
                        <a href="javascript:void(0);"><i class="bx bx-smile"></i></a>
                        <div class="emoj-group-list">
                          <ul>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-01.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-02.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-03.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-04.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li>
                              <a href="javascript:void(0);"
                                ><img
                                  src="@/assets/img/icons/emoj-icon-05.svg"
                                  alt="Icon"
                              /></a>
                            </li>
                            <li class="add-emoj">
                              <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);"><i class="bx bx-share"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="chats">
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
              <div class="chat-content chat-cont-type">
                <div class="chat-profile-name chat-type-wrapper">
                  <p>Mark Villiams Typing...</p>
                </div>
              </div>
            </div>

            <div class="chats forward-chat-msg">
              <div class="chat-avatar">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  class="rounded-circle dreams_chat"
                  alt="image"
                />
              </div>
              <div class="chat-content">
                <div class="chat-profile-name">
                  <h6>Mark Villiams<span>8:16 PM</span></h6>
                  <div class="chat-action-btns ms-3">
                    <div class="chat-action-col">
                      <a class="#" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div class="dropdown-menu chat-drop-menu dropdown-menu-end">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item message-info-left"
                          ><span><i class="bx bx-info-circle"></i></span>Message Info
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-share"></i></span>Reply</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-smile"></i></span>React</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-reply"></i></span>Forward</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-star"></i></span>Star Message</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-dislike"></i></span>Report</a
                        >
                        <a href="javascript:void(0);" class="dropdown-item"
                          ><span><i class="bx bx-trash"></i></span>Delete</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="message-content">Thank you for your support</div>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </div>
    <div class="chat-footer">
      <form>
        <div class="smile-foot">
          <div class="chat-action-btns">
            <div class="chat-action-col">
              <a
                class="action-circle"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <i class="bx bx-dots-vertical-rounded"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a href="javascript:void(0);" class="dropdown-item"
                  ><span><i class="bx bx-file"></i></span>Document</a
                >
                <a href="javascript:void(0);" class="dropdown-item"
                  ><span><i class="bx bx-camera"></i></span>Camera</a
                >
                <a href="javascript:void(0);" class="dropdown-item"
                  ><span><i class="bx bx-image"></i></span>Gallery</a
                >
                <a href="javascript:void(0);" class="dropdown-item"
                  ><span><i class="bx bx-volume-full"></i></span>Audio</a
                >
                <a href="javascript:void(0);" class="dropdown-item"
                  ><span><i class="bx bx-map"></i></span>Location</a
                >
                <a href="javascript:void(0);" class="dropdown-item"
                  ><span><i class="bx bx-user-pin"></i></span>Contact</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="smile-foot emoj-action-foot">
          <a href="javascript:void(0);" class="action-circle"
            ><i class="bx bx-smile"></i
          ></a>
          <div class="emoj-group-list-foot down-emoji-circle">
            <ul>
              <li>
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/emoj-icon-01.svg" alt="Icon"
                /></a>
              </li>
              <li>
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/emoj-icon-02.svg" alt="Icon"
                /></a>
              </li>
              <li>
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/emoj-icon-03.svg" alt="Icon"
                /></a>
              </li>
              <li>
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/emoj-icon-04.svg" alt="Icon"
                /></a>
              </li>
              <li>
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/emoj-icon-05.svg" alt="Icon"
                /></a>
              </li>
              <li class="add-emoj">
                <a href="javascript:void(0);"><i class="bx bx-plus"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="smile-foot">
          <a href="javascript:void(0);" class="action-circle"
            ><i class="bx bx-microphone-off"></i
          ></a>
        </div>
        <input
          type="text"
          class="form-control chat_form"
          placeholder="Type your message here..."
        />
        <div class="form-buttons">
          <button class="btn send-btn" type="submit">
            <i class="bx bx-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Right sidebar -->
  <div
    class="right-sidebar right_sidebar_profile right-side-contact"
    id="middle1"
    :class="{ 'show-right-sidebar': showSidebar, 'hide-right-sidebar': !showSidebar }"
  >
    <div class="right-sidebar-wrap active">
      <div class="slimscroll">
        <perfect-scrollbar
          class="scroll-area"
          :settings="settings"
          @ps-scroll-y="scrollHanle"
        >
          <div
            class="left-chat-title d-flex justify-content-between align-items-center border-bottom-0"
          >
            <div class="fav-title mb-0">
              <h6>Contact Info</h6>
            </div>
            <div class="contact-close_call text-end">
              <a href="javascript:void(0);" class="close_profile close-star">
                <i class="bx bxs-star"></i>
              </a>
              <a
                href="javascript:void(0);"
                class="close_profile close-trash"
                @click="handleClick"
              >
                <i class="bx bx-trash"></i>
              </a>
            </div>
          </div>
          <div class="sidebar-body">
            <div class="mt-0 right_sidebar_logo">
              <div class="text-center right-sidebar-profile">
                <figure class="avatar avatar-xl mb-3">
                  <img
                    src="@/assets/img/profiles/avatar-02.jpg"
                    class="rounded-circle"
                    alt="image"
                  />
                </figure>
                <h5 class="profile-name">Mark Villiams</h5>
                <div class="last-seen-profile">
                  <span>last seen at 07:15 PM</span>
                </div>
                <div class="chat-options chat-option-profile">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <router-link
                        to="/application/call"
                        class="btn btn-outline-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Voice Call"
                      >
                        <i class="bx bx-phone"></i>
                      </router-link>
                    </li>
                    <li class="list-inline-item">
                      <router-link
                        to="/call/video-call"
                        class="btn btn-outline-light profile-open"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Video Call"
                      >
                        <i class="bx bx-video"></i>
                      </router-link>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-outline-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Chat"
                      >
                        <i class="bx bx-message-square-dots"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="chat-member-details">
                <div class="member-details">
                  <ul>
                    <li>
                      <h5>Bio</h5>
                    </li>
                    <li>
                      <h6>Phone</h6>
                      <span>555-555-21541</span>
                    </li>
                    <li>
                      <h6>Email Address</h6>
                      <span>info@example.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="right-sidebar-head share-media">
            <div class="share-media-blk">
              <h5>Shared Media</h5>
              <a href="javascript:void(0);">View All</a>
            </div>
            <div class="about-media-tabs">
              <nav>
                <div class="nav nav-tabs" id="nav-tab">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    href="#info"
                    >Photos</a
                  >
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab1"
                    data-bs-toggle="tab"
                    href="#Participants"
                    >Videos</a
                  >
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab2"
                    data-bs-toggle="tab"
                    href="#media"
                    >File</a
                  >
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab3"
                    data-bs-toggle="tab"
                    href="#link"
                    >Link</a
                  >
                </div>
              </nav>
              <div class="tab-content pt-0" id="nav-tabContent">
                <div class="tab-pane fade show active" id="info">
                  <chat-right-image></chat-right-image>
                </div>
                <div class="tab-pane fade" id="Participants">
                  <chat-right-video></chat-right-video>
                </div>
                <div class="tab-pane fade" id="media">
                  <div class="media-file">
                    <div class="media-doc-blk">
                      <span><i class="bx bxs-file-doc"></i></span>
                      <div class="document-detail">
                        <h6>Landing_page_V1.doc</h6>
                        <ul>
                          <li>12 Mar 2023</li>
                          <li>246.3 KB</li>
                        </ul>
                      </div>
                    </div>
                    <div class="media-download">
                      <a href="javascript:void(0);"><i class="bx bx-download"></i></a>
                    </div>
                  </div>
                  <div class="media-file">
                    <div class="media-doc-blk">
                      <span><i class="bx bxs-file-pdf"></i></span>
                      <div class="document-detail">
                        <h6>Design Guideless.pdf</h6>
                        <ul>
                          <li>12 Mar 2023</li>
                          <li>246.3 KB</li>
                        </ul>
                      </div>
                    </div>
                    <div class="media-download">
                      <a href="javascript:void(0);"><i class="bx bx-download"></i></a>
                    </div>
                  </div>
                  <div class="media-file">
                    <div class="media-doc-blk">
                      <span><i class="bx bxs-file"></i></span>
                      <div class="document-detail">
                        <h6>sample site.txt</h6>
                        <ul>
                          <li>12 Mar 2023</li>
                          <li>246.3 KB</li>
                        </ul>
                      </div>
                    </div>
                    <div class="media-download">
                      <a href="javascript:void(0);"><i class="bx bx-download"></i></a>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="link">
                  <div class="media-link-grp">
                    <div class="link-img">
                      <a href="javascript:void(0);"
                        ><img src="@/assets/img/media/media-link-01.jpg" alt="Img"
                      /></a>
                    </div>
                    <div class="media-link-detail">
                      <h6><a href="javascript:void(0);">Digital Marketing Guide</a></h6>
                      <span
                        ><a href="javascript:void(0);"
                          >https://elements.envato.com/all-items/blog</a
                        ></span
                      >
                    </div>
                  </div>
                  <div class="media-link-grp mb-0">
                    <div class="link-img">
                      <a href="javascript:void(0);"
                        ><img src="@/assets/img/media/media-link-02.jpg" alt="Img"
                      /></a>
                    </div>
                    <div class="media-link-detail">
                      <h6><a href="javascript:void(0);">Blog Post</a></h6>
                      <span
                        ><a href="javascript:void(0);"
                          >https://elements.envato.com/blog-post-TXQ5FB8</a
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-message-grp">
            <ul>
              <li>
                <a href="javascript:void(0);" class="star-message-left">
                  <div class="stared-group">
                    <span class="star-message"> <i class="bx bx-star"></i></span>
                    <h6>Starred Messages</h6>
                  </div>
                  <div class="count-group">
                    <span>10</span>
                    <i class="bx bx-chevron-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#mute-notification"
                >
                  <div class="stared-group">
                    <span class="mute-message">
                      <i class="bx bx-microphone-off"></i
                    ></span>
                    <h6>Mute Notifications</h6>
                  </div>
                  <div class="count-group">
                    <i class="bx bx-chevron-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#block-user"
                >
                  <div class="stared-group">
                    <span class="block-message"> <i class="bx bx-x-circle"></i></span>
                    <h6>Block User</h6>
                  </div>
                  <div class="count-group">
                    <i class="bx bx-chevron-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#report-user"
                >
                  <div class="stared-group">
                    <span class="report-message"> <i class="bx bx-user-x"></i></span>
                    <h6>Report User</h6>
                  </div>
                  <div class="count-group">
                    <i class="bx bx-chevron-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-user"
                >
                  <div class="stared-group">
                    <span class="delete-message"> <i class="bx bx-trash-alt"></i></span>
                    <h6>Delete Chat</h6>
                  </div>
                  <div class="count-group">
                    <i class="bx bx-chevron-right"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
  <!-- Right sidebar -->
</template>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import 'vue3-perfect-scrollbar/style.css';
import { myClickHandler } from "@/views/pages/application/chat/myFunctions.js";

export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      showSidebar: false,
      chatVisible: false,
      settings: {
        suppressScrollX: true,
      },
    };
  },
  methods: {
    scrollHanle() {},
    handleClick() {
      myClickHandler();
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    showChat() {
      this.chatVisible = true;
    },
    hideChat() {
      this.chatVisible = false;
    },
  },
};
</script>
