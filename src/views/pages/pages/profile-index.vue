<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <icon-button icon="ti ti-refresh" tooltip="Refresh" :reload="true" />
          </div>
        </div>
      </div>

      <alert v-if="notificationStore.notification"
        :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
        :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
        :message="notificationStore.notification.message" @update:message="notificationStore.clearNotification()" />

      <div class="d-md-flex d-block mt-3">
        <div class="settings-right-sidebar me-md-3 border-0" style="min-width: 300px;">
          <div class="card">
            <div class="card-header">
              <h5>Personal Information</h5>
            </div>
            <div class="card-body">
              <div class="settings-profile-upload">
                <span class="profile-pic">
                  <img :src="profilePicUrl" alt="Profile" />
                </span>
                <div class="title-upload">
                  <h5>Edit Your Photo</h5>
                  <a href="javascript:void(0);" class="me-2" @click="confirmDeleteAvatar">Delete </a>
                  <a href="javascript:void(0);" class="text-primary" @click="triggerUpload">Update</a>
                </div>
              </div>
              <div class="profile-uploader profile-uploader-two mb-0" @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false" @drop.prevent="handleDrop" :class="{ 'bg-light': isDragging }">
                <span class="upload-icon"><i class="ti ti-upload"></i></span>
                <div class="drag-upload-btn bg-transparent me-0 border-0">
                  <p class="upload-btn"><span>Click to Upload</span> or drag and drop</p>
                  <h6>JPG or PNG</h6>
                  <h6>(Max 450 x 450 px)</h6>
                </div>
                <input type="file" ref="fileInput" class="form-control" @change="handleFileChange" accept="image/*"
                  id="image_sign" style="display: none;" />
                <div id="frames"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-fill ps-0 border-0">
          <form @submit.prevent="submitProfile">
            <div class="d-md-flex">
              <div class="flex-fill">
                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center bg-light">
                    <h5><i class="ti ti-user-circle me-2"></i>Personal Information</h5>
                    <button type="submit" class="btn btn-primary btn-sm" :disabled="profileStore.loading">
                      <i class="ti ti-device-floppy me-2"></i>Save Changes
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">First Name</label>
                        <input v-model="form.first_name" type="text" class="form-control"
                          placeholder="Enter First Name" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Last Name</label>
                        <input v-model="form.last_name" type="text" class="form-control"
                          placeholder="Enter Last Name" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Email Address</label>
                        <input v-model="form.email" type="email" class="form-control" placeholder="Enter Email" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Phone Number</label>
                        <input v-model="form.phone" type="text" class="form-control" placeholder="Enter Phone Number" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Father Name</label>
                        <input v-model="form.father_name" type="text" class="form-control"
                          placeholder="Enter Father Name" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Mother Name</label>
                        <input v-model="form.mother_name" type="text" class="form-control"
                          placeholder="Enter Mother Name" />
                      </div>
                      <div class="col-md-3 mb-3">
                        <label class="form-label">Gender</label>
                        <select v-model="form.gender" class="form-select">
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label class="form-label">Date of Birth</label>
                        <input v-model="form.date_of_birth" type="date" class="form-control" />
                      </div>
                      <div class="col-md-3 mb-3">
                        <label class="form-label">Blood Group</label>
                        <select v-model="form.blood_group" class="form-select">
                          <option value="">Select</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label class="form-label">Marital Status</label>
                        <select v-model="form.marital_status" class="form-select">
                          <option value="">Select</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header bg-light border-bottom">
                    <h5><i class="ti ti-briefcase me-2"></i>Professional Information</h5>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Bio</label>
                      <textarea v-model="form.bio" class="form-control" rows="3"
                        placeholder="Tell us about yourself..."></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Qualification</label>
                        <input v-model="form.qualification" type="text" class="form-control"
                          placeholder="Highest Qualification" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Work Experience</label>
                        <input v-model="form.work_experience" type="text" class="form-control"
                          placeholder="Years of Experience" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Languages Known</label>
                        <vue3-tags-input v-model:tags="languagesTags" class="input-tags form-control"
                          placeholder="Type language and press Enter" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">PAN Number</label>
                        <input v-model="form.pan_number" type="text" class="form-control"
                          placeholder="Enter PAN Number" />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Notes</label>
                      <textarea v-model="form.notes" class="form-control" rows="2"
                        placeholder="Any additional notes..."></textarea>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header bg-light border-bottom">
                    <h5><i class="ti ti-school me-2"></i>Previous Education Information</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Previous School Name</label>
                        <input v-model="form.previous_school_name" type="text" class="form-control"
                          placeholder="Enter School Name" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Previous School Phone</label>
                        <input v-model="form.previous_school_phone" type="text" class="form-control"
                          placeholder="Enter School Phone" />
                      </div>
                      <div class="col-md-12 mb-3">
                        <label class="form-label">Previous School Address</label>
                        <textarea v-model="form.previous_school_address" class="form-control" rows="2"
                          placeholder="Enter School Address"></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header bg-light border-bottom">
                    <h5><i class="ti ti-map-pin me-2"></i>Address Information</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Current Address</label>
                        <textarea v-model="form.address" class="form-control" rows="2"
                          placeholder="Enter Current Address"></textarea>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Permanent Address</label>
                        <textarea v-model="form.permanent_address" class="form-control" rows="2"
                          placeholder="Enter Permanent Address"></textarea>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Country</label>
                        <select v-model="form.country_id" class="form-select">
                          <option value="">Select Country</option>
                          <option v-for="country in countryStore.countries" :key="country.id" :value="country.id">
                            {{ country.name }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">State / Province</label>
                        <input v-model="form.state" type="text" class="form-control" placeholder="Enter State" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">City</label>
                        <input v-model="form.city" type="text" class="form-control" placeholder="City" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Postal Code</label>
                        <input v-model="form.postal_code" type="text" class="form-control"
                          placeholder="Enter Postal Code" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center bg-light border-bottom">
                    <h5><i class="ti ti-lock me-2"></i>Security</h5>
                  </div>
                  <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <h6>Password</h6>
                        <p class="text-muted mb-0">Change your password frequently to keep your account secure</p>
                      </div>
                      <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal"
                        data-bs-target="#change_password">
                        <i class="ti ti-edit me-1"></i>Change Password
                      </button>
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
  <password-modal id="change_password" @success="handlePasswordSuccess"></password-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';
import { useCountryStore } from '@/stores/country';
import { useNotificationStore } from '@/stores/notification';

const authStore = useAuthStore();
const profileStore = useProfileStore();
const countryStore = useCountryStore();
const notificationStore = useNotificationStore();

const title = "Profile";
const text = "Dashboard";
const text1 = "Settings";
const text2 = "Profile";

const fileInput = ref(null);
const isDragging = ref(false);

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  father_name: '',
  mother_name: '',
  gender: '',
  date_of_birth: '',
  blood_group: '',
  marital_status: '',
  bio: '',
  qualification: '',
  work_experience: '',
  languages_known: '',
  previous_school_name: '',
  previous_school_address: '',
  previous_school_phone: '',
  pan_number: '',
  notes: '',
  address: '',
  permanent_address: '',
  country_id: '',
  state: '',
  city: '',
  postal_code: ''
});

const languagesTags = ref([]);

const profilePicUrl = computed(() => {
  return profileStore.user?.attributes?.profile_photo_url || authStore.defaultAvatar;
});

onMounted(async () => {
  await Promise.all([
    profileStore.fetchProfile(),
    countryStore.fetchCountries()
  ]);
  syncForm();
});

const syncForm = () => {
  const user = profileStore.user;
  if (user && user.attributes) {
    const attr = user.attributes;
    const profile = attr.profile || {};

    form.value = {
      first_name: profile.first_name || attr.first_name || '',
      last_name: profile.last_name || attr.last_name || '',
      email: attr.email || '',
      phone: profile.phone || attr.phone || '',
      father_name: profile.father_name || '',
      mother_name: profile.mother_name || '',
      gender: profile.gender || '',
      date_of_birth: profile.date_of_birth || '',
      blood_group: profile.blood_group || '',
      marital_status: profile.marital_status || '',
      bio: profile.bio || '',
      qualification: profile.qualification || '',
      work_experience: profile.work_experience || '',
      languages_known: profile.languages_known || '',
      previous_school_name: profile.previous_school_name || '',
      previous_school_address: profile.previous_school_address || '',
      previous_school_phone: profile.previous_school_phone || '',
      pan_number: profile.pan_number || '',
      notes: profile.notes || '',
      address: profile.address || attr.address || '',
      permanent_address: profile.permanent_address || '',
      country_id: profile.country_id || '',
      state: profile.state || '',
      city: profile.city || '',
      postal_code: profile.postal_code || ''
    };

    // Sync tags
    if (form.value.languages_known) {
      languagesTags.value = form.value.languages_known.split(',').map(lang => lang.trim()).filter(lang => lang !== '');
    } else {
      languagesTags.value = [];
    }
  }
};

const triggerUpload = () => {
  fileInput.value.click();
};

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    await profileStore.uploadAvatar(file);
  }
};

const handleDrop = async (event) => {
  isDragging.value = false;
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    await profileStore.uploadAvatar(file);
  }
};

const confirmDeleteAvatar = async () => {
  if (confirm('Are you sure you want to remove your profile picture?')) {
    await profileStore.deleteAvatar();
  }
};

const submitProfile = async () => {
  // Update languages_known from tags
  form.value.languages_known = languagesTags.value.join(', ');
  await profileStore.updateProfile(form.value);
};

const handlePasswordSuccess = () => {
  // Modal automatically closes, notification shown by store
};
</script>
