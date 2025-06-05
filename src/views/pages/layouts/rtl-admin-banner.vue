<template>
  <div class="col-md-12">
    <div class="alert-message">
      <div
        class="alert alert-success rounded-pill d-flex align-items-center justify-content-between border-success mb-4"
        role="alert"
      >
        <div class="d-flex align-items-center">
          <span class="ms-1 avatar avatar-sm flex-shrink-0"
            ><img
              src="@/assets/img/profiles/avatar-27.jpg"
              alt="Img"
              class="img-fluid rounded-circle"
          /></span>
          <p>Fahed III,C has paid Fees for the <strong class="mx-1">“Term1”</strong></p>
        </div>
        <button
          type="button"
          class="btn-close p-0"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <span><i class="ti ti-x"></i></span>
        </button>
      </div>
    </div>

    <!-- Dashboard Content -->
    <div class="card bg-dark">
      <div class="overlay-img">
        <img src="@/assets/img/bg/shape-04.png" alt="img" class="img-fluid shape-01" />
        <img src="@/assets/img/bg/shape-01.png" alt="img" class="img-fluid shape-02" />
        <img src="@/assets/img/bg/shape-02.png" alt="img" class="img-fluid shape-03" />
        <img src="@/assets/img/bg/shape-03.png" alt="img" class="img-fluid shape-04" />
      </div>
      <div class="card-body">
        <div
          class="d-flex align-items-xl-center justify-content-xl-between flex-xl-row flex-column"
        >
          <div class="mb-3 mb-xl-0">
            <div class="d-flex align-items-center flex-wrap mb-2">
              <h1 class="text-white ms-2">Welcome Back, Mr. Herald</h1>
              <router-link
                to="/pages/profile"
                class="avatar avatar-sm img-rounded bg-gray-800 dark-hover"
                ><i class="ti ti-edit text-white"></i
              ></router-link>
            </div>
            <p class="text-white">Have a Good day at work</p>
          </div>
          <p class="text-white">
            <i class="ti ti-refresh ms-1"></i>Updated Recently on 15 Jun 2024
          </p>
        </div>
      </div>
    </div>
    <!-- /Dashboard Content -->
  </div>
</template>
