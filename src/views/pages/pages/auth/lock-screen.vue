<template>
  <div class="error-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5 p-4">
            <form @submit.prevent="submitForm">
              <div class="d-flex flex-column justify-content-between vh-100">
                <div class="mx-auto p-4 text-center">
                  <img
                    src="@/assets/img/authentication/authentication-logo.svg"
                    class="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div class="card">
                  <div class="card-body pb-0 p-3">
                    <div class="mb-4 text-center">
                      <h2 class="mb-2">Welcome back!</h2>
                      <img
                        src="@/assets/img/profiles/avatar-27.jpg"
                        alt="img"
                        class="img-fluid avatar avatar-xxl rounded-pill my-3"
                      />
                      <h6 class="text-dark">Adrian Davies</h6>
                    </div>
                    <div class="mb-3">
                      <div class="pass-group">
                        <input
                          type="password"
                          class="pass-input form-control"
                          placeholder="Enter Your Password"
                        />
                        <span class="ti toggle-password ti-eye-off"></span>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 pt-0">
                    <div class="mb-0">
                      <button type="submit" class="btn btn-primary w-100">Login</button>
                    </div>
                  </div>
                </div>
                <div class="p-4 text-center">
                  <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="me-3 text-default">Terms & Condition</a>
                    <a href="javascript:void(0);" class="me-3 text-default">Privacy</a>
                    <a href="javascript:void(0);" class="me-3 text-default">Help</a>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle text-default"
                        data-bs-toggle="dropdown"
                        >English</a
                      >
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="text-default">American</a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="text-default">British</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="p-2 text-center">
                    <p class="mb-0">Copyright &copy; {{ new Date().getFullYear() }} - EasySchool</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/");
    },
  },
};
</script>
