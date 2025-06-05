<template>
  <div class="bg-light-200">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="text-center mt-4">
        <img src="@/assets/img/logo.svg" alt="img" class="img-fluid" />
      </div>
      <div class="comming-soon-pg w-100">
        <div>
          <div class="error-img m-auto">
            <img
              src="@/assets/img/authentication/coming-soon.png"
              class="img-fluid"
              alt="Img"
            />
          </div>
          <ul class="d-inline-flex align-items-center justify-content-center mb-3">
            <li class="me-sm-3 me-2">
              <div
                class="d-flex align-items-center justify-content-center flex-column border rounded bg-white px-sm-4 py-sm-3 p-2"
              >
                <span class="days text-dark fs-sm-28 fs-20">54</span>
                <h4 class="text-muted">Day</h4>
              </div>
            </li>
            <li class="text-gray fw-medium me-sm-3 me-2">:</li>
            <li class="me-sm-3 me-2">
              <div
                class="d-flex align-items-center justify-content-center flex-column border rounded bg-white px-sm-4 py-sm-3 p-2"
              >
                <span class="hours text-dark fs-sm-28 fs-20">10</span>
                <h4 class="text-muted">Hrs</h4>
              </div>
            </li>
            <li class="text-gray fw-medium me-sm-3 me-2">:</li>
            <li class="me-sm-3 me-2">
              <div
                class="d-flex align-items-center justify-content-center flex-column border rounded bg-white px-sm-4 py-sm-3 p-2"
              >
                <span class="minutes text-dark fs-sm-28 fs-20">47</span>
                <h4 class="text-muted">Min</h4>
              </div>
            </li>
            <li class="text-gray fw-medium me-sm-3 me-2">:</li>
            <li>
              <div
                class="d-flex align-items-center justify-content-center flex-column border rounded bg-white px-sm-4 py-sm-3 p-2"
              >
                <span class="seconds text-dark fs-sm-28 fs-20">00</span>
                <h4 class="text-muted">Sec</h4>
              </div>
            </li>
          </ul>
          <div class="subscribe-form">
            <div class="mb-3 position-relative">
              <label class="m-3 d-flex ms-1 form-label">Subscribe to get notified!</label>
              <div
                class="bg-white border border-2 p-1 d-flex align-items-center rounded ps-0"
              >
                <input
                  type="email"
                  class="form-control border-0"
                  placeholder="Enter Your Email"
                />
                <a href="javascript:void(0);" class="btn btn-primary">Subscribe</a>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-center align-items-center">
            <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm m-1"
              ><i class="ti ti-brand-facebook"></i
            ></a>
            <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm m-1"
              ><i class="ti ti-brand-instagram"></i
            ></a>
            <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm m-1"
              ><i class="ti ti-brand-twitter"></i
            ></a>
            <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm m-1"
              ><i class="ti ti-brand-pinterest"></i
            ></a>
            <a href="javascript:void(0);" class="btn btn-dark btn-icon btn-sm m-1"
              ><i class="ti ti-brand-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="text-center mb-5">
        <p>Copyright &copy; {{ new Date().getFullYear() }} - EasySchool</p>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
