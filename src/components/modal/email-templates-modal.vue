<template>
  <!-- Add Email Template -->
  <div class="modal fade" id="add_email_template">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Email Template</h4>
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
                  <label class="form-label">Title</label>
                  <input type="text" class="form-control" placeholder="Enter Title" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Subject</label>
                  <input type="text" class="form-control" placeholder="Enter Subject" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Template Content</label>
                  <div class="input-blocks summer-description-box notes-summernote">
                    <label class="form-label">Descriptions</label>
                    <div id="summernote">
                      <ckeditor
                        :editor="editor"
                        v-model="editorData"
                        :config="editorConfig"
                      ></ckeditor>
                    </div>
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
                    <input type="checkbox" id="user4" class="check" checked="" />
                    <label for="user4" class="checktoggle"> </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Email Template -->

  <!-- Edit Email Template -->
  <div class="modal fade" id="edit_email_template">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Email Template</h4>
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
                  <label class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Title"
                    value="Email Verification"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Subject"
                    value="English"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Template Content</label>
                  <div class="input-blocks summer-description-box notes-summernote">
                    <label class="form-label">Descriptions</label>
                    <div id="summernote2">
                      <ckeditor
                        :editor="editor"
                        v-model="editorDataOne"
                        :config="editorConfigOne"
                      ></ckeditor>
                    </div>
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
                    <input type="checkbox" id="user5" class="check" checked="" />
                    <label for="user5" class="checktoggle"> </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Email Template -->

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
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">
                Yes, Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      editorDataOne:
        "Hi [User's Name], Welcome to EasySchool ! We're thrilled to have you on board. Get ready to experience a seamless and efficient way. To get started, Click here If you have any questions or need assistance, feel free to reach out to our support team at [support@example.com].",
      editorConfigOne: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/system-settings/email-templates");
    },
  },
};
</script>
