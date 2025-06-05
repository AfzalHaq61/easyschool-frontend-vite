<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <!-- Page Header -->
        <div class="col-md-12">
          <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
            <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#login_detail"
                ><i class="ti ti-lock me-2"></i>Login Details</a
              >
              <router-link
                to="/students/edit-student"
                class="btn btn-primary d-flex align-items-center mb-2"
                ><i class="ti ti-edit-circle me-2"></i>Edit Student</router-link
              >
            </div>
          </div>
          <div class="row">
            <students-sidebar></students-sidebar>
            <div class="col-xxl-9 col-xl-8">
              <div class="row">
                <div class="col-md-12">
                  <details-tabs></details-tabs>
                  <div class="card">
                    <div
                      class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
                    >
                      <h4 class="mb-3">Exams & Results</h4>
                      <div class="d-flex align-items-center flex-wrap">
                        <div class="dropdown mb-3 me-2">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-outline-light bg-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            ><i class="ti ti-calendar-due me-2"></i>Year : 2024 / 2025</a
                          >
                          <ul class="dropdown-menu p-3">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item rounded-1"
                              >
                                Year : 2024 / 2025
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item rounded-1"
                              >
                                Year : 2023 / 2024
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item rounded-1"
                              >
                                Year : 2022 / 2023
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="accordions-items-seperate" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span class="avatar avatar-sm bg-success me-2"
                                ><i class="ti ti-checks"></i
                              ></span>
                              Monthly Test (May)
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <!-- Exam Result List -->
                              <div class="table-responsive">
                                <table class="table">
                                  <thead class="thead-light">
                                    <tr>
                                      <th>Subject</th>
                                      <th>Max Marks</th>
                                      <th>Min Marks</th>
                                      <th>Marks Obtained</th>
                                      <th class="text-end">Result</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>English (150)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>65</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Mathematics (214)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>73</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Physics (120)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>55</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Chemistry (110)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>90</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Spanish (140)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>88</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="bg-dark text-white">Rank : 30</td>
                                      <td class="bg-dark text-white">Total : 500</td>
                                      <td class="bg-dark text-white" colspan="2">
                                        Marks Obtained : 395
                                      </td>
                                      <td class="bg-dark text-white text-end">
                                        <div
                                          class="d-flex align-items-center justify-content-end"
                                        >
                                          <span class="me-2">Percentage : 79.50</span>
                                          <h6 class="fw-normal text-white">
                                            Result :
                                            <span class="text-success"> Pass </span>
                                          </h6>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- /Exam Resul List -->
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <span class="avatar avatar-sm bg-success me-2"
                                ><i class="ti ti-checks"></i
                              ></span>
                              Monthly Test (Apr)
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <!-- Exam Result List -->
                              <div class="table-responsive">
                                <table class="table">
                                  <thead class="thead-light">
                                    <tr>
                                      <th>Subject</th>
                                      <th>Max Marks</th>
                                      <th>Min Marks</th>
                                      <th>Marks Obtained</th>
                                      <th class="text-end">Result</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>English (150)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>59</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Mathematics (214)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>69</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Physics (120)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>79</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Chemistry (110)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>89</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Spanish (140)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>99</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="bg-dark text-white">Rank : 30</td>
                                      <td class="bg-dark text-white">Total : 500</td>
                                      <td class="bg-dark text-white" colspan="2">
                                        Marks Obtained : 400
                                      </td>
                                      <td class="bg-dark text-white text-end">
                                        <div
                                          class="d-flex align-items-center justify-content-end"
                                        >
                                          <span class="me-2">Percentage : 80.50</span>
                                          <h6 class="fw-normal text-white">
                                            Result :
                                            <span class="text-success"> Pass </span>
                                          </h6>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- /Exam Resul List -->
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <span class="avatar avatar-sm bg-success me-2"
                                ><i class="ti ti-checks"></i
                              ></span>
                              Monthly Test (Mar)
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <!-- Exam Result List -->
                              <div class="table-responsive">
                                <table class="table">
                                  <thead class="thead-light">
                                    <tr>
                                      <th>Subject</th>
                                      <th>Max Marks</th>
                                      <th>Min Marks</th>
                                      <th>Marks Obtained</th>
                                      <th class="text-end">Result</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>English (150)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>40</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Mathematics (214)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>45</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Physics (120)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>30</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Chemistry (110)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>28</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Spanish (140)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>50</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="bg-dark text-white">Rank : 30</td>
                                      <td class="bg-dark text-white">Total : 500</td>
                                      <td class="bg-dark text-white" colspan="2">
                                        Marks Obtained : 250
                                      </td>
                                      <td class="bg-dark text-white text-end">
                                        <div
                                          class="d-flex align-items-center justify-content-end"
                                        >
                                          <span class="me-2">Percentage : 50</span>
                                          <h6 class="text-white fw-normal">
                                            Result :
                                            <span class="text-danger"> Fail </span>
                                          </h6>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- /Exam Resul List -->
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <span class="avatar avatar-sm bg-success me-2"
                                ><i class="ti ti-checks"></i
                              ></span>
                              Monthly Test (Feb)
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <!-- Exam Result List -->
                              <div class="table-responsive">
                                <table class="table">
                                  <thead class="thead-light">
                                    <tr>
                                      <th>Subject</th>
                                      <th>Max Marks</th>
                                      <th>Min Marks</th>
                                      <th>Marks Obtained</th>
                                      <th class="text-end">Result</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>English (150)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>40</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Mathematics (214)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>45</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Physics (120)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>30</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-danger d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Fail</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Chemistry (110)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>28</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-danger d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Fail</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Spanish (140)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>50</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="bg-dark text-white">Rank : 30</td>
                                      <td class="bg-dark text-white">Total : 500</td>
                                      <td class="bg-dark text-white" colspan="2">
                                        Marks Obtained : 250
                                      </td>
                                      <td class="bg-dark text-white text-end">
                                        <div
                                          class="d-flex align-items-center justify-content-end"
                                        >
                                          <span class="me-2">Percentage : 50</span>
                                          <h6 class="text-white">
                                            Result :
                                            <span class="text-danger"> Fail </span>
                                          </h6>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- /Exam Resul List -->
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              <span class="avatar avatar-sm bg-success me-2"
                                ><i class="ti ti-checks"></i
                              ></span>
                              Monthly Test (Jan)
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <!-- Exam Result List -->
                              <div class="table-responsive">
                                <table class="table">
                                  <thead class="thead-light">
                                    <tr>
                                      <th>Subject</th>
                                      <th>Max Marks</th>
                                      <th>Min Marks</th>
                                      <th>Marks Obtained</th>
                                      <th class="text-end">Result</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>English (150)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>59</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Mathematics (214)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>69</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Physics (120)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>79</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Chemistry (110)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>89</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Spanish (140)</td>
                                      <td>100</td>
                                      <td>35</td>
                                      <td>99</td>
                                      <td class="text-end">
                                        <span
                                          class="badge badge-soft-success d-inline-flex align-items-center"
                                          ><i class="ti ti-circle-filled fs-5 me-1"></i
                                          >Pass</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="bg-dark text-white">Rank : 30</td>
                                      <td class="bg-dark text-white">Total : 500</td>
                                      <td class="bg-dark text-white" colspan="2">
                                        Marks Obtained : 400
                                      </td>
                                      <td class="bg-dark text-white text-end">
                                        <div
                                          class="d-flex align-items-center justify-content-end"
                                        >
                                          <span class="me-2">Percentage : 80.50</span>
                                          <h6 class="fw-normal text-white">
                                            Result :
                                            <span class="text-success"> Pass </span>
                                          </h6>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- /Exam Resul List -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <student-details-modal></student-details-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Student Details",
      text: "Dashboard",
      text1: "Students",
      text2: "Student Details",
    };
  },
};
</script>
