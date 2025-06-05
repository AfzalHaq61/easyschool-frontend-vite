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
            <!-- Personal Information -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-info-square-rounded fs-16"></i>
                  </span>
                  <h4 class="text-dark">Personal Information</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                      <div
                        class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                      >
                        <i class="ti ti-photo-plus fs-16"></i>
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
                <div class="row row-cols-xxl-5 row-cols-md-6">
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Teacher ID</label>
                      <input type="text" class="form-control" value="T849126" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" value="Teresa" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Class</label>
                      <vue-select
                        :options="EditTeaClassSel"
                        id="editteaclasssel"
                        placeholder="III A"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <vue-select
                        :options="EditTeaSubSel"
                        id="editteasubsel"
                        placeholder="Physics"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Gender</label>
                      <vue-select
                        :options="EditTeaGenSel"
                        id="editteagensel"
                        placeholder="Female"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Primary Contact Number</label>
                      <input type="text" class="form-control" value="+1 46548 84498" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control" value="jan@example.com" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Blood Group</label>
                      <vue-select
                        :options="EditTeaBloodSel"
                        id="editteabllodsel"
                        placeholder="O +ve"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Joining</label>
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
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Father’s Name</label>
                      <input type="text" class="form-control" value="Francis Saviour" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Mother’s Name</label>
                      <input type="text" class="form-control" value="Stella Bruce" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Birth</label>
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
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Marital Status</label>
                      <vue-select
                        :options="EditTeaMarSel"
                        id="editteamarsel"
                        placeholder="Single"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Language Known</label>
                      <vue3-tags-input
                          class="input-tags form-control"
                          type="text"
                          id="inputBox"
                          data-role="tagsinput"
                          name="Label"
                          value="English, Spanish"
                          :tags="tags"
                        />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Qualification</label>
                      <input type="text" class="form-control" value="MBA" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Experience</label>
                      <input type="text" class="form-control" value="2  Years" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Previous School if Any</label>
                      <input
                        type="text"
                        class="form-control"
                        value="Oxford Matriculation, USA"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Previous School Address</label>
                      <input
                        type="text"
                        class="form-control"
                        value="1852 Barnes Avenue, Cincinnati, OH 45202"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Previous School Phone No</label>
                      <input type="text" class="form-control" value="+1 35676 45556" />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        value="3495 Red Hawk Road, Buffalo Lake, MN 55314"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Permanent Address</label>
                      <input
                        type="text"
                        class="form-control"
                        value="3495 Red Hawk Road, Buffalo Lake, MN 55314"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">PAN Number / ID Number</label>
                      <input type="text" class="form-control" value="343445954908" />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <vue-select
                        :options="EditStaTeaSel"
                        id="editteasel"
                        placeholder="Active"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-12 col-xl-12">
                    <div class="mb-3">
                      <label class="form-label">Notes</label>
                      <textarea
                        class="form-control"
                        placeholder="Other Information"
                        rows="4"
                      >
Depending on the specific needs of your organization or system, additional information may be collected or tracked. It's important to ensure that any data collected complies with privacy regulations and policies to protect students' sensitive information.</textarea
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Personal Information -->

            <!-- Payroll -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-user-shield fs-16"></i>
                  </span>
                  <h4 class="text-dark">Payroll</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">EPF No</label>
                      <input type="text" class="form-control" value="34234345" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Basic Salary</label>
                      <input type="text" class="form-control" value="150000" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Contract Type</label>
                      <vue-select
                        :options="EditSelectContract"
                        id="editselectcontra"
                        placeholder="Permanent"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Shift</label>
                      <vue-select
                        :options="EditWorkSelT"
                        id="editworkselt"
                        placeholder="Morning"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Location</label>
                      <input type="text" class="form-control" value="2nd Floor" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Leaving</label>
                      <div class="input-icon position-relative">
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                        <date-picker
                          v-model="startdateTwo"
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
            <!-- /Payroll -->

            <!-- Leaves -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-users fs-16"></i>
                  </span>
                  <h4 class="text-dark">Leaves</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Medical Leaves</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Casual Leaves</label>
                      <input type="text" class="form-control" value="02" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Maternity Leaves</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Sick Leaves</label>
                      <input type="text" class="form-control" value="02" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Leaves -->

            <!-- Bank Details -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-map fs-16"></i>
                  </span>
                  <h4 class="text-dark">Bank Account Detail</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Account Name</label>
                      <input type="text" class="form-control" value="Teresa" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Account Number</label>
                      <input type="text" class="form-control" value="0126784900" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Bank Name</label>
                      <input type="text" class="form-control" value="Bank of America" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">IFSC Code</label>
                      <input type="text" class="form-control" value="BOA83209832" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Branch Name</label>
                      <input type="text" class="form-control" value="Cincinnati" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Bank Details -->

            <!-- Transport Information -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-bus-stop fs-16"></i>
                  </span>
                  <h4 class="text-dark">Transport Information</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Route</label>
                      <vue-select
                        :options="EditTeaRouSel"
                        id="edittearousel"
                        placeholder="Newyork"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle Number</label>
                      <vue-select
                        :options="EditVecSel"
                        id="editvecsel"
                        placeholder="AM 54548"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Pickup Point</label>
                      <vue-select
                        :options="EditPicSel"
                        id="editpickselect"
                        placeholder="Cincinatti"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Transport Information -->

            <!-- Hostel Information -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building-fortress fs-16"></i>
                  </span>
                  <h4 class="text-dark">Hostel Information</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Hostel</label>
                      <vue-select
                        :options="EditHosTeaSel"
                        id="edithosteasel"
                        placeholder="HI-Hostel, Floor"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Room No</label>
                      <vue-select
                        :options="EditSelRoomTea"
                        id="editselrotea"
                        placeholder="20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Hostel Information -->

            <!-- Social Media Links -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building fs-16"></i>
                  </span>
                  <h4 class="text-dark">Social Media Links</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row rows-cols-xxl-5">
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" class="form-control" value="www.facebook.com" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="text" class="form-control" value="www.twitter.com" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linked In</label>
                      <input type="text" class="form-control" value="www.Linkedin.com" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Youtube</label>
                      <input type="text" class="form-control" value="www.youtube.com" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter URL</label>
                      <input type="text" class="form-control" value="www.instagram.com" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Social Media Links -->

            <!-- Documents -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-file fs-16"></i>
                  </span>
                  <h4 class="text-dark">Documents</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label class="form-label">Upload Resume</label>
                        <p>Upload image size of 4MB, Accepted Format PDF</p>
                      </div>
                      <div class="d-flex align-items-center flex-wrap">
                        <div class="btn btn-primary drag-upload-btn mb-2 me-2">
                          <i class="ti ti-file-upload me-1"></i>Change
                          <input
                            type="file"
                            class="form-control image_sign"
                            multiple=""
                          />
                        </div>
                        <p class="mb-2">Resume.pdf</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label class="form-label">Upload Joining Letter</label>
                        <p>Upload image size of 4MB, Accepted Format PDF</p>
                      </div>
                      <div class="d-flex align-items-center flex-wrap">
                        <div class="btn btn-primary drag-upload-btn mb-2 me-2">
                          <i class="ti ti-file-upload me-1"></i>Upload Document
                          <input
                            type="file"
                            class="form-control image_sign"
                            multiple=""
                          />
                        </div>
                        <p class="mb-2">Resume.pdf</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Documents -->

            <!-- Password -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-file fs-16"></i>
                  </span>
                  <h4 class="text-dark">Password</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">New Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Confirm Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Password -->

            <div class="text-end">
              <button type="button" class="btn btn-light me-3">Cancel</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Edit Teacher</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Vue3TagsInput from "vue3-tags-input";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      dateFormat: "dd-MM-yyyy",
      title: "Edit Teacher",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Edit Teacher",
      EditTeaClassSel: ["Select", "III A", "II (A)", "VI (A)", "VIII"],
      EditTeaSubSel: ["Select", "Physics", "Computer", "English", "Spanish"],
      EditTeaGenSel: ["Select", "Male", "Female"],
      EditTeaBloodSel: ["Select", "O +ve", "B +ve", "B -ve"],
      EditTeaMarSel: ["Select", "Single", "Married"],
      EditStaTeaSel: ["Select", "Active", "Inactive"],
      EditSelectContract: ["Select", "Yes", "No"],
      EditWorkSelT: ["Select", "Day Shift", "Night Shift"],
      EditTeaRouSel: ["Select", "Newyork", "Denver", "Chicago"],
      EditVecSel: ["Select", "AM 54548", "AM 64528", "AM 123548"],
      EditPicSel: ["Select", "Cincinatti", "Illinois", "Morgan"],
      EditHosTeaSel: ["Select", "HI-Hostel, Floor", "HI-Hostel, 2nd Floor"],
      EditSelRoomTea: ["Select", "20", "22", "24", "26"],
      tags: ["English", "Spanish"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/teachers/teacher-list");
    },
  },
};
</script>
