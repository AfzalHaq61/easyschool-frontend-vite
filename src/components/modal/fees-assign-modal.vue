<template>
  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-body text-center">
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
              <button type="submit" class="btn btn-danger">Yes, Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->

  <!-- Add Fees Assign -->
  <div class="modal fade" id="add_fees_assign">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Assign New Fees</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- Table Filter -->
          <div class="table-filter-head">
            <div class="filter-head-left">
              <h5>Search Criteria</h5>
              <div class="dropdown mb-3 me-2">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  ><i class="ti ti-filter me-2"></i>Filter</a
                >
                <div class="dropdown-menu drop-width">
                  <form @submit.prevent="submitForm">
                    <div class="d-flex align-items-center border-bottom p-3">
                      <h4>Filter</h4>
                    </div>
                    <div class="p-3 pb-0 border-bottom">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Fees Group</label>
                            <vue-select
                              :options="AdmisFee"
                              id="admisfee"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Fees Type</label>
                            <vue-select
                              :options="TutiFees"
                              id="tutifees"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Class</label>
                            <vue-select
                              :options="Kathleen"
                              id="kathleen"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select
                              :options="FemaleMal"
                              id="femalemal"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Student Category</label>
                            <vue-select
                              :options="StudCateg"
                              id="studcateg"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-3 d-flex align-items-center justify-content-end">
                      <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
                      <button type="submit" class="btn btn-primary">Apply</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /Table Filter -->
          </div>
          <!-- /Filter Section -->
          <div class="modal-card-table">
            <div class="modal-table-head">
              <h4>List of Fees type</h4>
            </div>
            <div class="table-responsive custom-table no-datatable_length">
              <table class="table datanew">
                <thead class="thead-light">
                  <tr>
                    <th class="no-sort"></th>
                    <th class="no-sort">Fees Type</th>
                    <th class="no-sort">Fees Type</th>
                    <th class="no-sort">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>Admission Fees</td>
                    <td>Admission-Fees</td>
                    <td>5000</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>Apr-Mar</td>
                    <td>Apr-Mar</td>
                    <td>666</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>Bus Fees</td>
                    <td>Bus Fees</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>1st Installment Fees</td>
                    <td>1st Installment Fees</td>
                    <td>2645</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>2nd Installment Fees</td>
                    <td>2nd Installment Fees</td>
                    <td>7898</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>3rd Installment Fees</td>
                    <td>3rd Installment Fees</td>
                    <td>4785</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-card-table">
            <div class="modal-table-head">
              <h4>Student Details</h4>
            </div>
            <div class="table-responsive custom-table no-datatable_length">
              <table class="table datanew">
                <thead class="thead-light">
                  <tr>
                    <th class="no-sort">
                      <label class="checkboxs"
                        ><input type="checkbox" id="select-all2" /><span
                          class="checkmarks"
                        ></span
                      ></label>
                    </th>
                    <th class="no-sort">Admission Number</th>
                    <th class="no-sort">Student</th>
                    <th class="no-sort">Class</th>
                    <th class="no-sort">Section</th>
                    <th class="no-sort">Gender</th>
                    <th class="no-sort">Student Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892430</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-01.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Janet</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>II</td>
                    <td>B</td>
                    <td>Female</td>
                    <td>MBC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892429</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-06.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Ralph</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>III</td>
                    <td>B</td>
                    <td>Male</td>
                    <td>BC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892428</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-07.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Julie</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>V</td>
                    <td>A</td>
                    <td>Female</td>
                    <td>BC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892427</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-08.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details">Ryan</router-link>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>VI</td>
                    <td>A</td>
                    <td>Male</td>
                    <td>MBC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892426</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-09.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Susan</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>VIII</td>
                    <td>B</td>
                    <td>Female</td>
                    <td>BC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892425</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-12.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Richard</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>VII</td>
                    <td>B</td>
                    <td>Male</td>
                    <td>MBC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892424</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-11.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Veronica</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>IX</td>
                    <td>A</td>
                    <td>Female</td>
                    <td>BC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="student-pomote-note d-flex mb-0">
            <span class="info-icon"><i class="ti ti-info-circle"></i></span>
            <p>Selected 50 Fees Group, 350 Students</p>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
          <router-link to="/fees/fees-assign" class="btn btn-primary"
            >Add Fees</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Add Fees Assign -->

  <!-- Edit Fees Assign -->
  <div class="modal fade" id="edit_fees_assign">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Fees</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- Table Filter -->
          <div class="table-filter-head">
            <div class="filter-head-left">
              <h5>Search Criteria</h5>
              <div class="dropdown mb-3 me-2">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  ><i class="ti ti-filter me-2"></i>Filter</a
                >
                <div class="dropdown-menu drop-width">
                  <form @submit.prevent="submitForm">
                    <div class="d-flex align-items-center border-bottom p-3">
                      <h4>Filter</h4>
                    </div>
                    <div class="p-3 pb-0 border-bottom">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Fees Group</label>
                            <vue-select
                              :options="EditAdmisFee"
                              id="editadmisfee"
                              placeholder="Admission-Fees"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Fees Type</label>
                            <vue-select
                              :options="EditTutiFees"
                              id="edittutifees"
                              placeholder="Tuition Fees"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Class</label>
                            <vue-select
                              :options="EditKathleen"
                              id="editkathleen"
                              placeholder="I"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select
                              :options="EditFemaleMal"
                              id="editfemalemal"
                              placeholder="Male"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Student Category</label>
                            <vue-select
                              :options="EditStudCateg"
                              id="editstudcateg"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-3 d-flex align-items-center justify-content-end">
                      <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
                      <button type="submit" class="btn btn-primary">Apply</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /Table Filter -->
          </div>
          <!-- /Filter Section -->
          <div class="modal-card-table">
            <div class="modal-table-head">
              <h4>List of Fees type</h4>
            </div>
            <div class="table-responsive custom-table no-datatable_length">
              <table class="table datanew">
                <thead class="thead-light">
                  <tr>
                    <th class="no-sort"></th>
                    <th class="no-sort">Fees Type</th>
                    <th class="no-sort">Fees Type</th>
                    <th class="no-sort">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>Admission Fees</td>
                    <td>Admission-Fees</td>
                    <td>5000</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>Apr-Mar</td>
                    <td>Apr-Mar</td>
                    <td>666</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>Bus Fees</td>
                    <td>Bus Fees</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" checked />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>1st Installment Fees</td>
                    <td>1st Installment Fees</td>
                    <td>2645</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" checked />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>2nd Installment Fees</td>
                    <td>2nd Installment Fees</td>
                    <td>7898</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>3rd Installment Fees</td>
                    <td>3rd Installment Fees</td>
                    <td>4785</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-card-table">
            <div class="modal-table-head">
              <h4>Student Details</h4>
            </div>
            <div class="table-responsive custom-table no-datatable_length">
              <table class="table datanew">
                <thead class="thead-light">
                  <tr>
                    <th class="no-sort">
                      <label class="checkboxs"
                        ><input type="checkbox" id="select-all3" /><span
                          class="checkmarks"
                        ></span
                      ></label>
                    </th>
                    <th class="no-sort">Admission Number</th>
                    <th class="no-sort">Student</th>
                    <th class="no-sort">Class</th>
                    <th class="no-sort">Section</th>
                    <th class="no-sort">Gender</th>
                    <th class="no-sort">Student Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892430</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-01.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Janet</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>II</td>
                    <td>B</td>
                    <td>Female</td>
                    <td>MBC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892429</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-06.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Ralph</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>III</td>
                    <td>B</td>
                    <td>Male</td>
                    <td>BC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892428</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-07.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Julie</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>V</td>
                    <td>A</td>
                    <td>Female</td>
                    <td>BC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892427</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-08.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details">Ryan</router-link>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>VI</td>
                    <td>A</td>
                    <td>Male</td>
                    <td>MBC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892426</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-09.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Susan</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>VIII</td>
                    <td>B</td>
                    <td>Female</td>
                    <td>BC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892425</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-12.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Richard</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>VII</td>
                    <td>B</td>
                    <td>Male</td>
                    <td>MBC</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td><a href="javascript:void(0);" class="text-primary">AD9892424</a></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/students/student-details"
                          class="avatar avatar-md"
                          ><img
                            src="@/assets/img/students/student-11.jpg"
                            class="img-fluid rounded-circle"
                            alt="img"
                        /></router-link>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <router-link to="/students/student-details"
                              >Veronica</router-link
                            >
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>IX</td>
                    <td>A</td>
                    <td>Female</td>
                    <td>BC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="student-pomote-note d-flex mb-0">
            <span class="info-icon"><i class="ti ti-info-circle"></i></span>
            <p>Selected 50 Fees Group, 350 Students</p>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
          <router-link to="/fees/fees-assign" class="btn btn-primary"
            >Save Changes</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Edit Fees Assign -->
</template>
<script>
export default {
  data() {
    return {
      AdmisFee: ["Select", "Admission-Fees", "Class 1 General", "Monthly Fees"],
      TutiFees: ["Select", "Tuition Fees", "Monthly Fees", "Admission Fees"],
      Kathleen: ["Select", "I", "III", "Kathleen"],
      FemaleMal: ["Select", "Male", "Female"],
      StudCateg: ["Select", "BC", "MBC", "FC", "BC"],
      EditAdmisFee: ["Select", "Admission-Fees", "Class 1 General", "Monthly Fees"],
      EditTutiFees: ["Select", "Tuition Fees", "Monthly Fees", "Admission Fees"],
      EditKathleen: ["Select", "I", "III", "Kathleen"],
      EditFemaleMal: ["Select", "Male", "Female"],
      EditStudCateg: ["Select", "BC", "MBC", "FC", "BC"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/fees/fees-assign");
    },
  },
};
</script>
