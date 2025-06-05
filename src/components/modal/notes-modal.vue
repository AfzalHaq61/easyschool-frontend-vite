<template>
  <!-- Note Unit -->
  <div class="modal fade" id="note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add New Note</h4>
              </div>
              <button
                type="button"
                class="close"
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
                      <label class="form-label">Note Title</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">User</label>
                      <vue-select :options="User" id="adduser" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Tag</label>
                      <vue-select :options="Tag" id="notestag" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Priority</label>
                      <vue-select
                        :options="Priority"
                        id="notespriority"
                        placeholder="Select"
                      />
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
  <!-- /Note Unit -->

  <!-- Note Unit -->
  <div class="modal fade" id="edit-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Note</h4>
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
                    <div class="mb-3">
                      <label>Note Title</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Meet Lisa to discuss project details"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Assignee</label>
                      <vue-select
                        :options="Assigne"
                        id="notesassigne"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Tag</label>
                      <vue-select :options="Tags" id="onholdtag" placeholder="Onhold" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Priority</label>
                      <vue-select
                        :options="Prioritys"
                        id="onholdhhigh"
                        placeholder="Low"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box notes-summernote">
                      <label class="form-label">Descriptions</label>
                      <div id="summernote2">
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
  <!-- /Note Unit -->

  <!-- Delete Unit -->
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
  <!-- /Delete Unit -->

  <!-- View Unit -->
  <div class="modal fade" id="view-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title edit-page-title">
                <h4>Notes</h4>
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
                    <div class="edit-head-view">
                      <h6>Take a hike at a local park</h6>
                      <p>
                        Hiking is a long, vigorous walk, usually on trails or footpaths in
                        the countryside. Walking for pleasure developed in Europe during
                        the eighteenth century. Religious pilgrimages have existed much
                        longer but they involve walking long distances for a spiritual
                        purpose associated with specific religions and also we achieve
                        inner peace while we hike at a local park.
                      </p>

                      <p class="badged low"><i class="fas fa-circle"></i> Low</p>
                    </div>
                    <div class="modal-footer-btn edit-footer-menu">
                      <button
                        type="button"
                        class="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Unit -->
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      editorDataOne: "Description",
      editorConfigOne: {},
      User: ["Choose", "Recent1", "Recent2"],
      Tag: ["Select", "Recent1", "Recent2"],
      Priority: ["Select", "Recent1", "Recent2"],
      Assigne: ["Choose", "Recent1", "Recent2"],
      Tags: ["Onhold", "Onhold", "Onhold"],
      Prioritys: ["High", "Medium", "Low"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/application/notes");
    },
  },
};
</script>
