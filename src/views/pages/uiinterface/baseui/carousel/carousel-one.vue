<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body card-buttons">
          <h4 class="header-title">Slides only</h4>
          <p class="sub-header">
            Here’s a carousel with slides only. Note the presence of the
            <code>.d-block</code> and <code>.img-fluid</code> on carousel images to
            prevent browser default image alignment.
          </p>

          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-1.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-3.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-4.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card mb-0">
        <div class="card-body card-buttons">
          <h4 class="header-title">With controls</h4>
          <p class="sub-header">Adding in the previous and next controls:</p>

          <!-- START carousel-->
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-1.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-3.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-4.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
      <!-- END carousel-->
    </div>
  </div>
</template>
