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
                      <h4 class="mb-3">Fees</h4>
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
                    <div class="card-body p-0 py-3">
                      <!-- Fees List -->
                      <div class="custom-datatable-filter table-responsive">
                        <table class="table datatable">
                          <thead class="thead-light">
                            <tr>
                              <th>Fees Group</th>
                              <th>Fees Code</th>
                              <th>Due Date</th>
                              <th>Amount $</th>
                              <th>Status</th>
                              <th>Ref ID</th>
                              <th>Mode</th>
                              <th>Date Paid</th>
                              <th>Discount ($)</th>
                              <th>Fine ($)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p class="text-primary fees-group">
                                  Class 1 General<span class="d-block"
                                    >(Admission Fees)</span
                                  >
                                </p>
                              </td>
                              <td>admission-fees</td>
                              <td>25 Mar 2024</td>
                              <td>2000</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435454</td>
                              <td>Cash</td>
                              <td>25 Jan 2024</td>
                              <td>10%</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block"> (Mar month fees)</span>
                                </p>
                              </td>
                              <td>mar-month-fees</td>
                              <td>10 Apr 2024</td>
                              <td>2500</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435453</td>
                              <td>Cash</td>
                              <td>03 Apr 2024</td>
                              <td>10%</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block">(Apr month Fees)</span>
                                </p>
                              </td>
                              <td>apr-month-fees</td>
                              <td>10 May 2024</td>
                              <td>2500</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435453</td>
                              <td>Cash</td>
                              <td>03 Apr 2024</td>
                              <td>10%</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block">(May month Fees)</span>
                                </p>
                              </td>
                              <td>may-month-fees</td>
                              <td>10 Jun 2024</td>
                              <td>2500</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435451</td>
                              <td>Cash</td>
                              <td>02 Jun 2024</td>
                              <td>10%</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block">(Jun month Fees)</span>
                                </p>
                              </td>
                              <td>jun-month-fees</td>
                              <td>10 Jul 2024</td>
                              <td>2500</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435450</td>
                              <td>Cash</td>
                              <td>05 Jul 2024</td>
                              <td>10%</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block"> (Jul month Fees)</span>
                                </p>
                              </td>
                              <td>jul-month-fees</td>
                              <td>10 Aug 2024</td>
                              <td>2500</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435449</td>
                              <td>Cash</td>
                              <td>01 Aug 2024</td>
                              <td>10%</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block"> (Dec month Fees)</span>
                                </p>
                              </td>
                              <td>dec-month-fees</td>
                              <td>10 Jan 2024</td>
                              <td>2500</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435443</td>
                              <td>Cash</td>
                              <td>05 Jan 2024</td>
                              <td>10%</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="text-primary">
                                  Class 1 General
                                  <span class="d-block"> (Jan month Fees)</span>
                                </p>
                              </td>
                              <td>jan-month-fees</td>
                              <td>10 Feb 2024</td>
                              <td>2000</td>
                              <td>
                                <span
                                  class="badge badge-soft-success d-inline-flex align-items-center"
                                  ><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span
                                >
                              </td>
                              <td>#435443</td>
                              <td>Cash</td>
                              <td>01 Feb 2024</td>
                              <td>10%</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td class="bg-dark">-</td>
                              <td class="bg-dark"></td>
                              <td class="bg-dark"></td>
                              <td class="bg-dark text-white">2000</td>
                              <td class="bg-dark"></td>
                              <td class="bg-dark"></td>
                              <td class="bg-dark"></td>
                              <td class="bg-dark"></td>
                              <td class="bg-dark text-white">200</td>
                              <td class="bg-dark text-white">200</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- /Fees List -->
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
