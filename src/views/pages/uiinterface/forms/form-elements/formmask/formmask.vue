<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Form Mask</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Form Mask</h5>
              <p class="sub-header">
                Input masks can be used to force the user to enter data conform a specific
                format. Unlike validation, the user can't enter any other key than the
                ones specified by the mask.
              </p>
            </div>
            <div class="card-body">
              <b-form action="#">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Phone</label>
                    <MaskedInput
                      v-model="phone"
                      class="form-control"
                      :mask="'(999) 999-9999'"
                    />
                    <span class="form-text text-muted">(999) 999-9999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Date</label>
                    <MaskedInput
                      v-model="date"
                      class="form-control"
                      :mask="'99 / 99 / 9999'"
                    />
                    <span class="form-text text-muted">dd/mm/yyyy</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">SSN field 1</label>
                    <MaskedInput
                      v-model="ssn"
                      class="form-control"
                      :mask="'999-99-9999'"
                    />
                    <span class="form-text text-muted">e.g "999-99-9999"</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Phone field + ext.</label>
                    <MaskedInput
                      v-model="phoneExt"
                      class="form-control"
                      :mask="'(999) 999-9999? x99999'"
                    />
                    <span class="form-text text-muted">+40 999 999 999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Product Key</label>
                    <MaskedInput
                      v-model="product"
                      class="form-control"
                      :mask="'a*-999-a999'"
                    />
                    <span class="form-text text-muted">e.g a*-999-a999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Currency</label>
                    <MaskedInput
                      v-model="currency"
                      class="form-control"
                      :mask="'999,999,999.99'"
                    />
                    <span class="form-text text-muted">$ 999,999,999.99</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Eye Script</label>
                    <MaskedInput
                      v-model="eyescript"
                      class="form-control"
                      :mask="'~9.99 ~9.99 999'"
                    />
                    <span class="form-text text-muted">~9.99 ~9.99 999</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Percent</label>
                    <MaskedInput v-model="pct" class="form-control" :mask="'99%'" />
                    <span class="form-text text-muted">e.g "99%"</span>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Credit Card Number</label>
                    <MaskedInput
                      v-model="ccn"
                      class="form-control"
                      :mask="'9999 9999 9999 9999'"
                    />
                    <span class="form-text text-muted">e.g "999.999.999.9999"</span>
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
import MaskedInput from "./MaskedInput.vue";

export default {
  components: {
    MaskedInput,
  },
  name: "app",
  data: () => ({
    date: "",
    userMask: "aa-aa-AAAA",
    userField: "",
    rawVal: "",
    phone: "",
    ssn: "",
    phoneExt: "",
    product: "",
    currency: "",
    eyescript: "",
    pct: "",
    ccn: "",
  }),
};
</script>

<style>
masked-input {
  height: 40px;
}
</style>
