<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Text Editor</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Editor -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Editor</h5>
            </div>
            <div class="card-body">
              <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
            </div>
          </div>
        </div>
        <!-- /Editor -->
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
    };
  },
};
</script>
