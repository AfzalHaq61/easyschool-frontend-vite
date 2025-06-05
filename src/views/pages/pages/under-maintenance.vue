<template>
  <div class="error-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-5 col-md-6">
            <div class="d-flex flex-column justify-content-between vh-100">
              <div class="text-center p-4">
                <img src="@/assets/img/logo.svg" alt="img" class="img-fluid" />
              </div>
              <div
                class="d-flex flex-column align-items-center justify-content-center mb-4"
              >
                <div class="mb-4">
                  <img
                    src="@/assets/img/authentication/under-maintanence.png"
                    class="img-fluid"
                    alt="Img"
                  />
                </div>
                <h3 class="h1 mb-3">We are Under Maintenance</h3>
                <p class="text-center">
                  Please check back later, We are working hard to get <br />
                  everything just right.
                </p>
                <router-link
                  to="/dashboard"
                  class="btn btn-primary d-flex align-items-center"
                  ><i class="ti ti-arrow-left me-2"></i>Back to Dashboard</router-link
                >
              </div>
              <div class="text-center p-3">
                <p> Copyright &copy; {{ new Date().getFullYear() }} - EasySchool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
