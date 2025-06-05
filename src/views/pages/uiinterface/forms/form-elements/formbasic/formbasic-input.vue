<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">Basic Inputs</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-lg-12">
          <input-size />
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Input Sizes</h5>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="form-group row">
                  <label class="col-form-label col-md-2">Large Input</label>
                  <div class="col-md-10">
                    <b-form-input
                      type="text"
                      class="form-control form-control-lg mb-3"
                      placeholder=".form-control-lg"
                    ></b-form-input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-form-label col-md-2">Default Input</label>
                  <div class="col-md-10">
                    <b-form-input
                      type="text"
                      class="form-control mb-3"
                      placeholder=".form-control"
                    ></b-form-input>
                  </div>
                </div>
                <div class="form-group mb-0 row">
                  <label class="col-form-label col-md-2">Small Input</label>
                  <div class="col-md-10">
                    <b-form-input
                      type="text"
                      class="form-control form-control-sm mb-3"
                      placeholder=".form-control-sm"
                    ></b-form-input>
                  </div>
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
