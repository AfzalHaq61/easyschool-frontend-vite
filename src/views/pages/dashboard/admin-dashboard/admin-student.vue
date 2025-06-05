<template>
  <!-- Total Students -->
  <div class="col-xxl-3 col-sm-6 d-flex">
    <div class="card flex-fill animate-card border-0">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-xl bg-danger-transparent me-2 p-1">
            <img src="@/assets/img/icons/student.svg" alt="img" />
          </div>
          <div class="overflow-hidden flex-fill">
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="counter">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="10"
                  :delay="3"
                  :endAmount="3654"
                  :duration="5"
                  separator=""
                  :autoinit="true"
                />
              </h2>
              <span class="badge bg-danger">1.2%</span>
            </div>
            <p>Total Students</p>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-between border-top mt-3 pt-3"
        >
          <p class="mb-0">Active : <span class="text-dark fw-semibold">3643</span></p>
          <span class="text-light">|</span>
          <p>Inactive : <span class="text-dark fw-semibold">11</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Total Students -->

  <!-- Total Teachers -->
  <div class="col-xxl-3 col-sm-6 d-flex">
    <div class="card flex-fill animate-card border-0">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-xl me-2 bg-secondary-transparent p-1">
            <img src="@/assets/img/icons/teacher.svg" alt="img" />
          </div>
          <div class="overflow-hidden flex-fill">
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="counter">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="10"
                  :delay="3"
                  :endAmount="284"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <span class="badge bg-pending">1.2%</span>
            </div>
            <p>Total Teachers</p>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-between border-top mt-3 pt-3"
        >
          <p class="mb-0">Active : <span class="text-dark fw-semibold">254</span></p>
          <span class="text-light">|</span>
          <p>Inactive : <span class="text-dark fw-semibold">30</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Total Teachers -->

  <!-- Total Staff -->
  <div class="col-xxl-3 col-sm-6 d-flex">
    <div class="card flex-fill animate-card border-0">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-xl me-2 bg-warning-transparent p-1">
            <img src="@/assets/img/icons/staff.svg" alt="img" />
          </div>
          <div class="overflow-hidden flex-fill">
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="counter">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="10"
                  :delay="3"
                  :endAmount="162"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <span class="badge bg-warning">1.2%</span>
            </div>
            <p>Total Staff</p>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-between border-top mt-3 pt-3"
        >
          <p class="mb-0">Active : <span class="text-dark fw-semibold">161</span></p>
          <span class="text-light">|</span>
          <p>Inactive : <span class="text-dark fw-semibold">02</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Total Staff -->

  <!-- Total Subjects -->
  <div class="col-xxl-3 col-sm-6 d-flex">
    <div class="card flex-fill animate-card border-0">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-xl me-2 bg-success-transparent p-1">
            <img src="@/assets/img/icons/subject.svg" alt="img" />
          </div>
          <div class="overflow-hidden flex-fill">
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="counter">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="10"
                  :delay="3"
                  :endAmount="82"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <span class="badge bg-success">1.2%</span>
            </div>
            <p>Total Subjects</p>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-between border-top mt-3 pt-3"
        >
          <p class="mb-0">Active : <span class="text-dark fw-semibold">81</span></p>
          <span class="text-light">|</span>
          <p>Inactive : <span class="text-dark fw-semibold">01</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Total Subjects -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
