<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <div class="page-header">
        <div class="content-page-header">
          <h5>Lightbox</h5>
        </div>
      </div>
      <div class="row">
        <!-- Lightbox -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Single Image Lightbox</h5>
            </div>
            <lightbox-one />
          </div>
        </div>
        <!-- /Lightbox -->

        <!-- Lightbox -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Image with Description</h5>
            </div>
            <lightbox-two />
          </div>
        </div>
        <!-- /Lightbox -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Lightbox",
    };
  },
};
</script>
