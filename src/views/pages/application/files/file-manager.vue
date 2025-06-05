<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div
    class="page-wrapper notes-page-wrapper"
    :class="{ 'notes-tag-left': isNotesTagLeft }"
  >
    <div class="content pb-4">
      <div
        class="d-md-flex d-block align-items-center justify-content-between mb-3 pb-3 border-bottom position-relative"
      >
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
        </div>
        <a
          id="toggle_btn2"
          class="notes-tog position-absolute start-0 avatar avatar-sm rounded-circle bg-primary text-white"
          href="javascript:void(0);"
          @click="toggleNotes"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
      </div>

      <div class="row">
        <div
          class="col-lg-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget"
        >
          <div class="stickysidebar">
            <aside class="border bg-white rounded-3 p-4 mb-3 mt-4">
              <h5 class="d-flex align-items-center border-bottom mb-3 pb-3">
                <span class="me-2 d-flex align-items-center0"
                  ><i class="ti ti-folder fs-20"></i></span
                >Files
              </h5>
              <a
                href="javascript:void(0);"
                class="d-flex align-items-center justify-content-center btn btn-primary mb-3 btn-icon w-100"
              >
                <i class="ti ti-square-rounded-plus me-2"></i> New
              </a>
              <div class="d-flex flex-column active-dark-btn mb-3">
                <router-link
                  to="/application/file-manager"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 active mb-1"
                  ><i class="ti ti-file-text me-2"></i>My Files</router-link
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-star me-2"></i>Google Drive</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-send me-2"></i>Dropbox</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-file-alert me-2"></i>Shared With Me</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-file-analytics me-2"></i>Document</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-clock me-2"></i>Recent</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-stars me-2"></i>Favourites</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-shield me-2"></i>Archived</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-trash me-2"></i>Deleted</a
                >
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 d-flex align-items-center fw-semibold fs-15 mb-1"
                  ><i class="ti ti-settings me-2"></i>Settings</a
                >
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <h6>Storage</h6>
                </div>
                <span>70%</span>
              </div>
              <div class="progress progress-sm my-2">
                <div
                  class="progress-bar bg-danger rounded"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>78.5 GB of 1 TB Free Used</span>
            </aside>
          </div>
        </div>

        <div
          class="col-lg-9 budget-role-notes"
          :class="{ 'budgeted-role-notes': isBudgetedRoleNotes }"
        >
          <div class="row">
            <div class="col-12">
              <div class="section-bulk-wrap">
                <div
                  class="bg-white rounded-3 d-flex align-items-center justify-content-between flex-wrap my-4 p-3 pb-0"
                >
                  <div class="d-flex align-items-center mb-3">
                    <div class="me-3">
                      <vue-select
                        :options="ActionsFiles"
                        id="actionfiles"
                        placeholder="Bulk Actions"
                      />
                    </div>
                    <a href="javascript:void(0);" class="btn btn-light">Apply</a>
                  </div>
                  <div class="form-sort mb-3">
                    <i class="ti ti-filter feather-filter info-img ms-0"></i>
                    <vue-select
                      :options="Modified"
                      id="lastmodifile"
                      placeholder="Recent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- /Overview -->
          <div class="d-block">
            <h4 class="mb-3">Overview</h4>
            <div class="row g-3">
              <div class="col-sm-6 col-md-3">
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="d-flex align-items-center justify-content-center bg-light-orange p-3 rounded-top"
                  >
                    <span class="d-flex align-items-center justify-content-center p-4"
                      ><img src="@/assets/img/icons/folder.svg" alt="Folder"
                    /></span>
                  </a>
                  <div
                    class="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom"
                  >
                    <h5><a href="javascript:void(0);">Folders</a></h5>
                    <span class="text-muted">300 Files</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="d-flex align-items-center justify-content-center bg-light-red p-3 rounded-top"
                  >
                    <span class="d-flex align-items-center justify-content-center p-4"
                      ><img src="@/assets/img/icons/pdf-02.svg" alt="Folder"
                    /></span>
                  </a>
                  <div
                    class="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom"
                  >
                    <h6><a href="javascript:void(0);">PDF</a></h6>
                    <span>50 Files</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="d-flex align-items-center justify-content-center bg-light-green p-3 rounded-top"
                  >
                    <span class="d-flex align-items-center justify-content-center p-4"
                      ><img src="@/assets/img/icons/image.svg" alt="Folder"
                    /></span>
                  </a>
                  <div
                    class="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom"
                  >
                    <h6><a href="javascript:void(0);">Images</a></h6>
                    <span>240 Files</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="d-flex align-items-center justify-content-center bg-light-red p-3 rounded-top"
                  >
                    <span class="d-flex align-items-center justify-content-center p-4"
                      ><img src="@/assets/img/icons/video.svg" alt="Folder"
                    /></span>
                  </a>
                  <div
                    class="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom"
                  >
                    <h6><a href="javascript:void(0);">Videos</a></h6>
                    <span>30 Files</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="mb-3">
                  <a
                    href="javascript:void(0);"
                    class="d-flex align-items-center justify-content-center bg-light-orange p-3 rounded-top"
                  >
                    <span class="d-flex align-items-center justify-content-center p-4"
                      ><img src="@/assets/img/icons/audio.svg" alt="Folder"
                    /></span>
                  </a>
                  <div
                    class="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom"
                  >
                    <h6><a href="javascript:void(0);">Audios</a></h6>
                    <span>100 Files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Overview -->

          <!-- Filemanager Items -->
          <div class="d-block">
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex align-items-center mb-3">
                <h4>Folders</h4>
                <div class="owl-nav slide-nav6 text-end nav-control ms-3"></div>
              </div>
              <folder-carousel></folder-carousel>
            </div>
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex align-items-center mb-3">
                <h4>Files</h4>
                <div class="owl-nav slide-nav7 text-end nav-control ms-3"></div>
              </div>
              <files-carousel></files-carousel>
            </div>
            <div class="mb-4 pb-4 border-bottom">
              <div class="d-flex align-items-center mb-3">
                <h4>Videos</h4>
                <div class="owl-nav slide-nav8 text-end nav-control ms-3"></div>
              </div>
              <div class="owl-carousel video-section">
                <Carousel
                  :wrap-around="true"
                  :settings="settings"
                  :breakpoints="breakpoints"
                >
                  <Slide v-for="item in DemoDw" :key="item.id">
                    <div class="item">
                      <div>
                        <video
                          width="100"
                          height="100"
                          class="js-player"
                          crossorigin
                          playsinline
                          :poster="require(`@/assets/img/file-manager/${item.Image}`)"
                        >
                          <source
                            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>

                      <div class="bg-white p-3 rounded-bottom">
                        <div class="d-flex align-items-center justify-content-between">
                          <h6>
                            <a href="javascript:void(0);">{{ item.Title }}</a>
                          </h6>
                          <div class="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              class="d-flex align-items-center"
                              ><i data-feather="star" class="feather-16 me-2"></i
                            ></a>
                            <div class="dropdown">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                class="dropset"
                              >
                                <i class="fa fa-ellipsis-v"></i>
                              </a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Details</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Share</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Copy</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Move</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Download</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Rename</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Archeived</a
                                  >
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item"
                                    >Delete</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-start mt-3">
                          <p class="text-primary mb-0 me-2">{{ item.Day }}</p>
                          <span class="d-flex align-items-center fw-semibold me-2"
                            ><i class="ti ti-circle-filled fs-5 me-2"></i
                            >{{ item.Size }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
              </div>
            </div>
          </div>
          <!-- /Filemanager Items -->

          <!-- /Filemanager List -->
          <div class="card">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
            >
              <h4 class="mb-3">All Files</h4>
              <div class="d-flex align-items-center flex-wrap">
                <div class="input-icon-start mb-3 me-2 position-relative">
                  <span class="icon-addon">
                    <i class="ti ti-calendar"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control date-range bookingrange"
                    placeholder="Select"
                    value="Academic Year : 2024 / 2025"
                    ref="dateRangeInput"
                  />
                </div>
                <div class="dropdown mb-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
                  </a>
                  <ul class="dropdown-menu p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Ascending
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Descending
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Recently Viewed
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1">
                        Recently Added
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body p-0 py-3">
              <!-- Student List -->
              <div class="custom-datatable-filter table-responsive">
                <file-table></file-table>
              </div>
              <!-- /Student List -->
            </div>
          </div>
          <!-- /Filemanager List -->
        </div>
      </div>
    </div>
    <!-- /Content -->
  </div>

  <!-- <file-manager-modal></file-manager-modal> -->
</template>

<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import DemoDw from "@/assets/json/demo_dw.json";
export default {
  data() {
    return {
      title: "File Manager",
      text: "Dashboard",
      text1: "Application",
      text2: "File Manager",
      isSectionNotesDashboard: false,
      isBudgetedRoleNotes: false,
      isNotesTagLeft: false,
      DemoDw: DemoDw,
      Owned: ["Owned By Me", "Owned by Anyone", "Not Owned by Me"],
      Relevance: [
        "Sort by Date",
        "Sort By Relevance",
        "Sort By Size",
        "Order Ascending",
        "Order Descending",
        "Upload Time",
      ],
      ActionsFiles: ["Bulk Actions", "Delete Marked", "Unmark All", "Mark All"],
      RecentOne: ["Recent", "Last Week", "Last Month"],
      Types: ["All File types", "Folders", "PDF", "Images", "Videos", "Audios", "Excel"],
      Modified: ["Last Modified", "Last Modified by Me", "Last Opened by Me"],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        loop: true,
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    toggleCollapse() {
      const collapseHeader = this.$refs.collapseHeader;

      if (collapseHeader) {
        collapseHeader.classList.toggle("active");
        document.body.classList.toggle("header-collapse");
      }
    },
    toggleNotes() {
      this.isSectionNotesDashboard = !this.isSectionNotesDashboard;
      this.isBudgetedRoleNotes = !this.isBudgetedRoleNotes;
      this.isNotesTagLeft = !this.isNotesTagLeft;
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
