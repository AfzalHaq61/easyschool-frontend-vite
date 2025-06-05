<template>
  <!-- Add Note -->
  <div class="modal fade" id="note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Todo</h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Todo Title</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Assignee</label>
                      <vue-select
                        :options="Assignee"
                        id="addassigne"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Tag</label>
                      <vue-select :options="Tag" id="Addtag" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Priority</label>
                      <vue-select
                        :options="Priority"
                        id="Addpriority"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-blocks todo-calendar">
                      <label class="form-label">Due Date</label>
                      <div class="input-groupicon calender-input">
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
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <vue-select :options="Status" id="addstatus" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box notes-summernote">
                      <label class="form-label">Descriptions</label>
                      <div id="summernote">
                        <ckeditor
                          :editor="editor"
                          v-model="editorData"
                          :config="editorConfig"
                        ></ckeditor>
                      </div>
                      <p>Maximum 60 Characters</p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Note -->

  <!-- Edit Note -->
  <div class="modal fade" id="edit-note-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Todo Title</h4>
              </div>
              <div class="edit-note-head d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="trash-2"></i>
                  </span>
                </a>
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="star"></i>
                  </span>
                </a>
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="eye"></i>
                  </span>
                </a>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="modal-body custom-modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-12">
                    <div class="input-blocks">
                      <label class="form-label">Note Title</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Meet Lisa to discuss project details"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-blocks">
                      <label class="form-label">Assignee</label>
                      <vue-select
                        :options="Assignee"
                        id="editassigne"
                        placeholder="Recent1"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-blocks">
                      <label class="form-label">Tag</label>
                      <vue-select :options="Tag" id="edittag" placeholder="Onhold" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-blocks">
                      <label class="form-label">Priority</label>
                      <vue-select
                        :options="Priority"
                        id="editpriority"
                        placeholder="High"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-blocks todo-calendar">
                      <label class="form-label">Due Date</label>
                      <div class="input-groupicon calender-input">
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
                  <div class="col-6">
                    <div class="input-blocks">
                      <label class="form-label">Status</label>
                      <vue-select
                        :options="Status"
                        id="editstatus"
                        placeholder="Recent1"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks summer-description-box notes-summernote">
                      <label class="form-label">Descriptions</label>
                      <div id="summernote2">
                        <ckeditor
                          :editor="editor"
                          v-model="editorDataOne"
                          :config="editorConfigOne"
                        ></ckeditor>
                      </div>
                      <p>Maximum 60 Characters</p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Note -->

  <!-- Delete Note -->
  <div class="modal fade" id="delete-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="delete-popup">
              <div class="delete-image text-center mx-auto">
                <img
                  src="@/assets/img/icons/close-circle.png"
                  alt="Img"
                  class="img-fluid"
                />
              </div>
              <div class="delete-heads">
                <h4>Are You Sure?</h4>
                <p>
                  Do you really want to delete this item, This process cannot be undone.
                </p>
              </div>
              <div class="modal-footer-btn delete-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-cancel me-2"
                  data-bs-dismiss="modal"
                  >Cancel</a
                >
                <a href="javascript:void(0);" class="btn btn-submit">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Note -->

  <!-- View Note -->
  <div class="modal fade" id="view-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title edit-page-title">
                <h4>Todo</h4>
                <p>Personal</p>
              </div>
              <div class="edit-noted-head d-flex align-items-center">
                <a href="javascript:void(0);">
                  <span>
                    <i data-feather="trash-2"></i>
                  </span>
                </a>
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="star"></i>
                  </span>
                </a>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="modal-body custom-modal-body">
              <div class="row">
                <div class="col-12">
                  <div class="edit-head-view">
                    <h6>Meet Lisa to discuss project details</h6>
                    <p>
                      Hiking is a long, vigorous walk, usually on trails or footpaths in
                      the countryside. Walking for pleasure developed in Europe during the
                      eighteenth century. Religious pilgrimages have existed much longer
                      but they involve walking long distances for a spiritual purpose
                      associated with specific religions and also we achieve inner peace
                      while we hike at a local park.
                    </p>

                    <p class="badged high"><i class="fas fa-circle"></i> High</p>
                  </div>
                  <div class="modal-footer-btn edit-footer-menu">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-cancel me-2"
                      data-bs-dismiss="modal"
                      >Close</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Note -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      editorDataOne: "Description",
      editorConfigOne: {},
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      Assignee: ["Choose", "Recent1", "Recent2"],
      Tag: ["Select", "Recent1", "Recent2"],
      Priority: ["Select", "Recent1", "Recent2"],
      Status: ["Select", "Recent1", "Recent2"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/application/todo");
    },
  },
};
</script>
