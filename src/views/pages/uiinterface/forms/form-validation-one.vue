<template>
  <div class="card-body">
    <div class="row">
      <div class="col-sm">
        <form ref="form" novalidate>
          <div class="form-row row">
            <div class="col-md-4 mb-3">
              <label class="form-label" for="validationCustom01">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="First name"
                v-model="firstName"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label" for="validationCustom02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Last name"
                v-model="lastName"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label" for="validationCustomUsername">Username</label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  v-model="username"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
          </div>
          <div class="form-row row">
            <div class="col-md-6 mb-3">
              <label class="form-label" for="validationCustom03">City</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                placeholder="City"
                v-model="city"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label" for="validationCustom04">State</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom04"
                placeholder="State"
                v-model="state"
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label" for="validationCustom05">Zip</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                placeholder="Zip"
                v-model="zip"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="agreed"
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck"
                >Agree to terms and conditions</label
              >
              <div class="invalid-feedback">You must agree before submitting.</div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="validateForm">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Mark",
      lastName: "Otto",
      username: "",
      city: "",
      state: "",
      zip: "",
      agreed: false,
    };
  },
  mounted() {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  methods: {
    validateForm() {
      const form = this.$refs.form;
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
      } else {
        // Handle form submission
        alert("Form submitted successfully!");
      }
    },
  },
};
</script>
