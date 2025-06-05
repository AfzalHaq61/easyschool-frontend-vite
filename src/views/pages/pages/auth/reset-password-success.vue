<template>
  <div class="col-md-8 mx-auto p-4">
    <div class="mx-auto mb-5 text-center">
      <img
        src="@/assets/img/authentication/authentication-logo.svg"
        class="img-fluid"
        alt="Logo"
      />
    </div>
    <div class="card">
      <div class="card-body text-center">
        <span class="avatar avatar-lg rounded-circle bg-success mb-3"
          ><i class="ti ti-check fs-24"></i
        ></span>
        <h3 class="mb-2">Success</h3>
        <p>Your Password Reset Successfully</p>
        <router-link to="/login" class="btn btn-primary w-100"
          >Back to Login</router-link
        >
      </div>
    </div>
    <div class="mt-5 text-center">
      <p class="mb-0">Copyright &copy; {{ new Date().getFullYear() }} - EasySchool</p>
    </div>
  </div>
</template>
