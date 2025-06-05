<template>
  <!-- Add Blog -->
  <div class="modal fade" id="add_blog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">New Blogs</h4>
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
                  <label class="form-label">Blog Title</label>
                  <input type="text" class="form-control" placeholder="Enter Title" />
                </div>
                <label class="form-label">Featured Image</label>
                <div
                  class="d-flex align-items-center upload-pic flex-wrap row-gap-3 mb-3"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <i class="ti ti-photo-plus fs-16"></i>
                  </div>
                  <div class="profile-upload">
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn mb-3">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-primary mb-3"
                        >Remove</a
                      >
                    </div>
                    <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue-select
                    :options="EduCateSel"
                    id="educatesel"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags</label>
                  <vue-select :options="GuideTag" id="gudidetag" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select :options="InacSta" id="inacsta" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <div class="summernote">
                    <ckeditor
                      :editor="editor"
                      v-model="editorData"
                      :config="editorConfig"
                    ></ckeditor>
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
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Blog -->

  <!-- Edit Blog -->
  <div class="modal fade" id="edit_blog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Blogs</h4>
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
                  <label class="form-label">Blog Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Title"
                    value="Personal development and self-improvement"
                  />
                </div>
                <label class="form-label">Featured Image</label>
                <div
                  class="d-flex align-items-center upload-pic flex-wrap row-gap-3 mb-3"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <i class="ti ti-photo-plus fs-16"></i>
                  </div>
                  <div class="profile-upload">
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn mb-3">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-primary mb-3"
                        >Remove</a
                      >
                    </div>
                    <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue-select
                    :options="EditEduCateSel"
                    id="editeducatesel"
                    placeholder="Advice"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags</label>
                  <vue-select
                    :options="EditGuideTag"
                    id="editgudidetag"
                    placeholder="Development"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select
                    :options="EditInacSta"
                    id="editinacsta"
                    placeholder="Active"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label">Description</label>
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
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Blog -->

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
      content: "Type your message",
      EduCateSel: ["Select", "Education", "Advice", "Academic", "Clear Goals"],
      GuideTag: ["Select", "Guide", "Development", "Education", "Sports"],
      InacSta: ["Select", "Active", "Inactive"],
      EditEduCateSel: ["Select", "Education", "Advice", "Academic", "Clear Goals"],
      EditGuideTag: ["Select", "Guide", "Development", "Education", "Sports"],
      EditInacSta: ["Select", "Active", "Inactive"],
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      editorDataOne:
        "Introduction: Are you struggling to stay focused and get things done?  you find yourself procrastinating or feeling overwhelmed by your workload? You're not alone. In today's fast-paced world, maintaining productivity can be a challenge. But fear not! In this article, we'll share five proven strategies to help you boost your productivity and reclaim control of your time. 1. Set Clear Goals: One of the mosteffective ways to increase productivity is to set clear, achievablegoals. Start by defining what you want to accomplish, and break downyour goals into smaller, manageable tasks. This will help you stayfocused and motivated as you work towards achieving your objectives.2. Prioritize Your Tasks: Not all tasks are created equal. To maximizeyour productivity, it's essential to prioritize your tasks based ontheir importance and urgency. Identify the most critical tasks thatalign with your goals and focus your time and energy on completingthem first. This will prevent you from getting bogged down by lessimportant tasks and ensure that you're making progress towards yourobjectives. 3. Eliminate Distractions: Distractions can derail yourproductivity and prevent you from staying focused on your work.Identify common distractions in your environment, such as social  media, email notifications, or noisy surroundings, and take steps tominimize or eliminate them. This could involve turning off notifications, setting designated work hours, or creating a  distraction-free workspace where you can concentrate without interruption. 4. Use Time Management Techniques: Effective time management is key to enhancing productivity. Experiment with different time management techniques, such as the Pomodoro Technique, time blocking, or the Eisenhower Matrix, to find a system that works best for you. By allocating your time wisely and staying organized, you can maximize your efficiency and accomplish more in less time. 5. Take Regular Breaks: Contrary to popular belief, taking regular breaks can actually improve productivity. Research has shown that short breaks can help refresh your mind, prevent burnout, and enhance focus and concentration. Incorporate short breaks into your workday, and use them to rest, recharge, and rejuvenate. Whether it's going for a walk, practicing mindfulness, or simply taking a few deep breaths, find activities that help you relax and unwind before diving back into your work. Conclusion: Boosting productivity is not an overnight process, but with dedication and consistent effort, you can develop habits and strategies that will help you work smarter, not harder. By setting clear goals, prioritizing tasks, eliminating distractions, managing your time effectively, and taking regular breaks, you can unlock your full potential and achieve greater success in both your personal and professional life.",
      editorConfigOne: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/blogs/blog");
    },
  },
};
</script>
