<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div
        class="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3"
      >
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <website-sidebar></website-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">Localization</h5>
                  <p>Collection of settings for user environment</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex d-block">
                <div class="flex-fill">
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>Basic Information</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="d-block d-xl-flex align-items-end">
                        <div class="mb-3 flex-fill me-xl-3 me-0">
                          <label class="form-label">Language</label>
                          <vue-select
                            :options="LanLocSel"
                            id="lanlocsel"
                            placeholder="English"
                          />
                        </div>
                        <div class="mb-3 flex-fill">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="status-title">
                              <h5>Language Switcher</h5>
                              <p>To display in all pages</p>
                            </div>
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switch-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Timezone</label>
                            <vue-select
                              :options="UTCTime"
                              id="utctime"
                              placeholder="UTC 4:30"
                            />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Date Format</label>
                            <vue-select
                              :options="JanDate"
                              id="jandate"
                              placeholder="01 Jan 2024"
                            />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time Format</label>
                            <vue-select
                              :options="FormatHours"
                              id="formathours"
                              placeholder="12 Hours"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Financial Year</label>
                            <vue-select
                              :options="FinancialSel"
                              id="financialsel"
                              placeholder="2024"
                            />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Starting Month</label>
                            <vue-select
                              :options="StartingSel"
                              id="startingsel"
                              placeholder="January"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>Currency Settings</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Currency</label>
                            <vue-select
                              :options="CurrencySel"
                              id="currencysel"
                              placeholder="United States of America"
                            />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Currency Position</label>
                            <vue-select
                              :options="PositionSel"
                              id="positionsel"
                              placeholder="$"
                            />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time Format</label>
                            <vue-select
                              :options="TimeLoca"
                              id="timeloca"
                              placeholder="$100"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-4 pe-xl-0">
                          <div class="mb-3 flex-fill me-xl-3 me-0">
                            <label class="form-label">Decimal Seperator</label>
                            <vue-select
                              :options="SeperatorSel"
                              id="seperatorsel"
                              placeholder="."
                            />
                          </div>
                        </div>
                        <div class="col-xl-4 ps-xl-0">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Thousand Seperator</label>
                            <vue-select
                              :options="ThousandSele"
                              id="thousandsele"
                              placeholder=","
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>Country Settings</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="row align-items-center">
                        <div class="col-xl-8">
                          <div class="mb-3 flex-fill">
                            <h6>Country Restriction</h6>
                            <p>Select restrcted countries</p>
                          </div>
                        </div>
                        <div class="col-xl-4">
                          <div class="mb-3 flex-fill">
                            <select class="select">
                              <option>Allow All Countries</option>
                              <option>Deny All Countries</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-3">
                      <h5>File Settings</h5>
                    </div>
                    <div class="card-body p-3 pb-0">
                      <div class="row align-items-center mb-2">
                        <div class="col-xl-8">
                          <div class="mb-3 flex-fill">
                            <h6>Allowed Files</h6>
                            <p>Select allowed files</p>
                          </div>
                        </div>
                        <div class="col-xl-4">
                          <div class="mb-3 flex-fill">
                            <vue3-tags-input
                              class="input-tags form-control"
                              type="text"
                              id="inputBox"
                              data-role="tagsinput"
                              name="Label"
                              value="JPG, GIF,PNG"
                              :tags="tags"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-8">
                          <div class="mb-3 flex-fill">
                            <h6>Maximum File Size</h6>
                            <p>Select max size of files</p>
                          </div>
                        </div>
                        <div class="col-xl-4">
                          <div class="mb-3 flex-fill">
                            <select class="select">
                              <option>5000 MB</option>
                              <option>2000 MB</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      title: "Website Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "Website Settings",
      LanLocSel: ["English", "Spanish", "French"],
      UTCTime: ["UTC 4:30", "(UTC+11:00) INR"],
      JanDate: ["01 Jan 2024", "Jan 01 2024", "2024 Jan 01"],
      FormatHours: ["12 Hours", "24 Hours"],
      FinancialSel: ["2024", "2023"],
      StartingSel: ["January", "February", "March"],
      CurrencySel: ["United States of America", "India"],
      PositionSel: ["$", "₹", "€"],
      TimeLoca: ["$100", "100$"],
      SeperatorSel: [".", "."],
      ThousandSele: [",", ","],
      Allowall: ["Allow All Countries", "Deny All COuntires"],
      Mbselect: ["5000 MB", "2000 MB"],
      tags: ["JPG", "GIF", "PNG"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/website-settings/localization-settings");
    },
  },
};
</script>
