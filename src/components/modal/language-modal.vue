<template>
  <!-- Add Language -->
  <div class="modal fade" id="add_language">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Add Language</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="col-form-label">Language Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Language Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Code</label>
                    <input type="text" class="form-control" placeholder="Enter Code" />
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between mb-3"
                  >
                    <div class="status-title">
                      <h5>RTL</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user5" class="check" />
                      <label for="user5" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between"
                  >
                    <div class="status-title">
                      <h5>Status</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user6" class="check" />
                      <label for="user6" class="checktoggle"> </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Add Language
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Language -->

  <!-- Edit Language -->
  <div class="modal fade" id="edit_language">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Edit Language</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="col-form-label">Language Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Language Name"
                      value="English"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Code</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Code"
                      value="en"
                    />
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between mb-3"
                  >
                    <div class="status-title">
                      <h5>RTL</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user7" class="check" checked />
                      <label for="user7" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between"
                  >
                    <div class="status-title">
                      <h5>Status</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user8" class="check" checked />
                      <label for="user8" class="checktoggle"> </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Language -->

  <!-- Language Setup -->
  <div class="modal fade" id="language_setup">
    <div class="modal-dialog modal-dialog-centered custom-modal modal-xl">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Language Setup</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <!-- Table Filter -->
              <div class="table-filter-head attendance-report-head">
                <div class="filter-head-left">
                  <h5>Search Criteria</h5>
                  <div
                    :class="{
                      'form-filter dropdown': true,
                      'table-filter-show': isDropdownVisible,
                    }"
                    @click="toggleDropdown"
                  >
                    <a href="javascript:void(0);" class="dropdown-toggle"
                      ><i class="ti ti-book me-2"></i>Academics</a
                    >
                    <div
                      class="filter-dropdown-menu filter-drop-items"
                      v-if="isDropdownVisible"
                    >
                      <form @submit.prevent="submitForm">
                        <div class="filter-head-title">
                          <h4>Select Language</h4>
                        </div>
                        <div class="form-wrap icon-form">
                          <span class="form-icon"><i class="ti ti-search"></i></span>
                          <input type="text" class="form-control" placeholder="Search" />
                        </div>
                        <div class="access-wrap">
                          <ul>
                            <li class="select-people-checkbox">
                              <label class="checkboxs">
                                <input type="checkbox" />
                                <span class="checkmarks"></span>
                                <span class="name-id"> English </span>
                              </label>
                            </li>
                            <li class="select-people-checkbox">
                              <label class="checkboxs">
                                <input type="checkbox" />
                                <span class="checkmarks"></span>
                                <span class="name-id"> Arabic </span>
                              </label>
                            </li>
                            <li class="select-people-checkbox">
                              <label class="checkboxs">
                                <input type="checkbox" checked />
                                <span class="checkmarks"></span>
                                <span class="name-id"> Chinese </span>
                              </label>
                            </li>
                            <li class="select-people-checkbox">
                              <label class="checkboxs">
                                <input type="checkbox" />
                                <span class="checkmarks"></span>
                                <span class="name-id"> Hindi </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div class="d-flex drop-filter-btn">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-outline-primary flex-fill"
                            data-bs-dismiss="modal"
                            >Reset</a
                          >
                          <button
                            type="submit"
                            class="btn btn-primary flex-fill ms-3"
                            data-bs-dismiss="modal"
                          >
                            Apply
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="search-filter-btn">
                    <a href="javascript:void(0);" class="btn btn-primary"
                      >Search Filter</a
                    >
                  </div>
                </div>
                <div class="sort-filter">
                  <div class="sort-dropdown drop-down">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
                    </a>
                    <div class="dropdown-menu">
                      <ul>
                        <li>
                          <a href="javascript:void(0);"> Ascending </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"> Descending </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"> Recently Viewed </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"> Recently Added </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Table Filter -->

              <div class="table-responsive">
                <div class="custom-table language-setup-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Default Phrases</th>
                        <th>Change Phrases</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <input type="text" class="form-control" value="Text" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Language Setup -->

  <!-- Import File -->
  <div class="modal fade" id="import_file">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Import Files</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form @submit.prevent="submitForm">
            <div class="modal-card">
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="col-form-label">Module Name</label>
                    <vue-select
                      :options="StudModue"
                      id="studmodue"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Language</label>
                    <vue-select :options="ChinSel" id="chinsel" placeholder="Select" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-btn text-end">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Import
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Import File -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered custom-modal promote-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <form @submit.prevent="submitForm">
            <div class="promote-modal-body text-center">
              <span class="delete-icon">
                <i class="ti ti-trash-x"></i>
              </span>
              <h4>Confirm Deletion</h4>
              <p>
                You want to delete all the marked items, this cant be undone once you
                delete.
              </p>
              <div class="d-flex justify-content-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  >Cancel</a
                >
                <button
                  type="submit"
                  class="btn btn-danger"
                  id="toprightToastBtn"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
      StudModue: ["Select", "Students", "Parents", "Teachers"],
      ChinSel: ["Select", "English", "Arabic", "Chinese", "Hindi"],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    submitForm() {
      this.$router.push("/website-settings/language");
    },
  },
};
</script>
