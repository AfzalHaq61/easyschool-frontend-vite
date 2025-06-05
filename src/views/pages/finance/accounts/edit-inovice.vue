<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content content-two">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-12">
          <form @submit.prevent="submitForm">
            <div class="card">
              <div class="card-body pb-0">
                <!-- Customer Logo -->
                <div class="card">
                  <div class="card-header bg-light">
                    <div class="d-flex align-items-center">
                      <span
                        class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0"
                      >
                        <i class="ti ti-user-check fs-16"></i>
                      </span>
                      <h4 class="text-dark">Company Logo</h4>
                    </div>
                  </div>
                  <div class="card-body pb-1">
                    <div class="profile-wrap mb-3">
                      <div class="frames bg-white">
                        <i class="ti ti-photo-plus"></i>
                      </div>
                      <div class="profile-upload">
                        <div class="profile-uploader d-flex align-items-center">
                          <div class="drag-upload-btn mb-3">
                            Upload
                            <input
                              type="file"
                              class="form-control image-sign"
                              multiple=""
                            />
                          </div>
                          <a href="javascript:void(0);" class="btn btn-primary mb-3"
                            >Remove</a
                          >
                        </div>
                        <p class="fs-12">Upload image size 4MB, Format JPG, PNG, SVG</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Customer Information -->
                <div class="card">
                  <div class="card-header bg-light">
                    <div class="d-flex align-items-center">
                      <span
                        class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0"
                      >
                        <i class="ti ti-user-check fs-16"></i>
                      </span>
                      <h4 class="text-dark">Customer Information</h4>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                    <div class="info-section">
                      <div class="row">
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Customer Name</label>
                            <vue-select
                              :options="EditMariaSel"
                              id="editcsselect"
                              placeholder="Ralph Claudia"
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Invoice Number</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Invoice Number"
                              value="INV681537"
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Invoice Date</label>
                            <div class="input-icon position-relative">
                              <span class="input-icon-addon">
                                <i class="ti ti-calendar"></i>
                              </span>
                              <date-picker
                                v-model="startdate"
                                placeholder=""
                                class="datetimepicker form-control"
                                :editable="true"
                                :clearable="false"
                                :input-format="dateFormat"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Due Date</label>
                            <div class="input-icon position-relative">
                              <span class="input-icon-addon">
                                <i class="ti ti-calendar"></i>
                              </span>
                              <date-picker
                                v-model="startdateOne"
                                placeholder=""
                                class="datetimepicker form-control"
                                :editable="true"
                                :clearable="false"
                                :input-format="dateFormat"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- /Customer Information -->

                <!-- Product Information -->
                <div class="card">
                  <div class="card-header bg-light">
                    <div class="d-flex align-items-center">
                      <span
                        class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0"
                      >
                        <i class="ti ti-shopping-cart-copy fs-16"></i>
                      </span>
                      <h4 class="text-dark">Product Information</h4>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                    <div class="info-section">
                      <div class="row align-items-end">
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Product Name</label>
                            <vue-select
                              :options="EditProgrSel"
                              id="editprogresel"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Quantity</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Enter Quantity"
                              value="2"
                            />
                          </div>
                        </div>
                        <div class="col-lg-2">
                          <div class="mb-3">
                            <a href="javascript:void(0);" class="btn btn-primary"
                              ><i class="ti ti-plus me-2"></i>Add to Bill</a
                            >
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="invoice-product-table">
                            <div class="table-responsive invoice-table">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Discount</th>
                                    <th>Net Amount</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Uniform</td>
                                    <td>
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="0"
                                        value="100"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="0"
                                        value="500"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="%"
                                        value="5"
                                      />
                                    </td>
                                    <td>$450</td>
                                    <td>
                                      <a
                                        href="javascript:void(0);"
                                        class="delete-invoive-list"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete-modal"
                                        ><i class="ti ti-trash"></i
                                      ></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Description</td>
                                    <td>
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="1"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="50"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="4%"
                                      />
                                    </td>
                                    <td>$300</td>
                                    <td>
                                      <a
                                        href="javascript:void(0);"
                                        class="delete-invoive-list"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete-modal"
                                        ><i class="ti ti-trash"></i
                                      ></a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- /Product Information -->

                <div class="invoice-info">
                  <div class="row">
                    <div class="col-xxl-9 col-lg-8">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Notes</label>
                            <div class="summernote">
                              <ckeditor
                                :editor="editor"
                                v-model="editorData"
                                :config="editorConfig"
                              ></ckeditor>
                            </div>
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Notes</label>
                            <div class="summernote">
                              <ckeditor
                                :editor="editor"
                                v-model="editorDataOne"
                                :config="editorConfigOne"
                              ></ckeditor>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3 col-lg-4">
                      <div class="card invoice-amount-details">
                        <ul>
                          <li>
                            <span>Subtotal</span>
                            <h6>$500</h6>
                          </li>
                          <li>
                            <span>Discount</span>
                            <h6>$50</h6>
                          </li>
                          <li>
                            <span>Tax</span>
                            <h6>$10</h6>
                          </li>
                          <li>
                            <h5>Total</h5>
                            <h5>$460</h5>
                          </li>
                        </ul>
                        <div class="mb-3">
                          <label class="form-label">Signature Name</label>
                          <input type="text" class="form-control" value="" />
                        </div>
                        <div class="input-block service-upload service-upload-info mb-0">
                          <span><i class="ti ti-upload me-2"></i>Upload Signature</span>
                          <input type="file" multiple="" id="image_sign" />
                          <div id="frames"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-end">
              <button type="button" class="btn btn-light me-3">Cancel</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitFormOne">
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
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      editorDataOne: "Description",
      editorConfigOne: {},
      title: "Add Invoice",
      text: "Dashboard",
      text1: "Finance & Accounts",
      text2: "Add Invoice",
      EditMariaSel: ["Select", "Ralph Claudia", "Julie Scott", "Maria"],
      EditInvoiSel: ["Select", "25 Apr 2024", "29 Apr 2024", "11 May 2024"],
      EditProgrSel: ["Select", "STEM Program Grant"],
      EditDueSele: ["Select", "30 Apr 2024", "05 May 2024", "16 May 2024"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/accounts/accounts-invoices");
    },
    submitFormOne() {
      this.$router.push("/accounts/edit-invoice");
    },
  },
};
</script>
