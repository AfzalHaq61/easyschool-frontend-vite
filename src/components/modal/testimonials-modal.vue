<template>
  <!-- Add Testimonials -->
  <div class="modal fade" id="add_testimonials">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Testimonial</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Author</label>
                  <vue-select :options="ThomSele" id="thomsele" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Role</label>
                  <vue-select :options="SeleStud" id="selestud" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date Added</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdate"
                      placeholder=""
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                  </div>
                </div>
                <div class="mb-0">
                  <label class="form-label">Content</label>
                  <textarea
                    placeholder="Add Comment"
                    class="form-control"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Testimoial</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Testimonials -->

  <!-- Edit Testimonials -->
  <div class="modal fade" id="edit_testimonials">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Testimonial</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Author</label>
                  <vue-select
                    :options="EditThomSele"
                    id="editthomsele"
                    placeholder="Thomas"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Role</label>
                  <vue-select
                    :options="EditSeleStud"
                    id="editselestud"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date Added</label>
                  <div class="date-pic">
                    <date-picker
                      v-model="startdateOne"
                      placeholder=""
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="cal-icon"><i class="ti ti-calendar"></i></span>
                  </div>
                </div>
                <div class="mb-0">
                  <label class="form-label">Content</label>
                  <textarea
                    placeholder="Add Comment"
                    class="form-control"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Testimonials -->

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
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      ThomSele: ["Select", "Thomas", "Claudia", "Robert", "Michael"],
      SeleStud: ["Select", "Parent", "Teacher", "Students", "Admin"],
      EditThomSele: ["Select", "Thomas", "Claudia", "Robert", "Michael"],
      EditSeleStud: ["Select", "Parent", "Teacher", "Students", "Admin"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/content/testimonials-list");
    },
  },
};
</script>
