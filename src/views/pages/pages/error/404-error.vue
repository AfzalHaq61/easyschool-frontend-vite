<template>
  <div class="error-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-6 col-xl-7 col-md-6">
            <div class="d-flex flex-column justify-content-between vh-100">
              <div class="text-center p-4">
                <img src="@/assets/img/logo.svg" alt="img" class="img-fluid" />
              </div>
              <div
                class="d-flex flex-column justify-content-center align-items-center mb-4"
              >
                <div class="mb-4">
                  <img
                    src="@/assets/img/authentication/error-404.svg"
                    class="error-img img-fluid"
                    alt="Img"
                  />
                </div>
                <h3 class="h2 mb-3">Oops, something went wrong</h3>
                <p class="text-center">
                  Error 404 Page not found. Sorry the page you looking for doesn’t exist
                  or has been moved
                </p>
                <router-link to="/" class="btn btn-primary d-flex align-items-center"
                  ><i class="ti ti-arrow-left me-2"></i>Back to Dashboard</router-link
                >
              </div>
              <div class="text-center p-4">
                <p>Copyright &copy; {{ new Date().getFullYear() }} - EasySchool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
