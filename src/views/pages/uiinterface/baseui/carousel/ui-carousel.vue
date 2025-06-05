<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <div class="page-header">
        <div class="content-page-header">
          <h5>Carousel</h5>
        </div>
      </div>
      <carousel-one></carousel-one>
      <!-- end row -->

      <carousel-two></carousel-two>
      <!-- end row -->

      <carousel-three></carousel-three>
      <!-- end row -->
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Carousel",
    };
  },
};
</script>
