<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Drag &amp; Drop</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-xl-6" id="draggable-left">
          <div class="card custom-card card-bg-primary">
            <a href="javascript:void(0);" class="card-anchor"></a>
            <div class="card-body">
              <blockquote class="blockquote mb-0 text-center">
                <h6 class="text-fixed-white">
                  The best and most beautiful things in the world cannot be seen or even
                  touched — they must be felt with the heart..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
                  Someone famous as <cite title="Source Title">-Helen Keller</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Card With Fullscreen Button</div>
              <a href="javascript:void(0);" data-bs-toggle="card-fullscreen">
                <vue-feather type="maximize" class="zap"></vue-feather>
              </a>
            </div>
            <div class="card-body">
              <h6 class="card-text fw-semibold">FullScreen Card</h6>
              <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words
              </p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Read More</button>
            </div>
          </div>
          <div class="card custom-card overlay-card text-fixed-white">
            <img src="@/assets/img/media/media-35.jpg" class="card-img" alt="..." />
            <div class="card-img-overlay d-flex flex-column p-0">
              <div class="card-header text-fixed-white">
                <div class="card-title">Image Overlays Are Awesome!</div>
              </div>
              <div class="card-body overflow-hidden text-fixed-white">
                <div class="card-text mb-2">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even.
                </div>
                <div class="card-text">Last updated 3 mins ago</div>
              </div>
            </div>
          </div>
          <div class="card custom-card">
            <a href="javascript:void(0);" class="card-anchor"></a>
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <span class="avatar avatar-md">
                    <img src="@/assets/img/profiles/avatar-01.jpg" alt="img" />
                  </span>
                </div>
                <div>
                  <p class="card-text mb-0 fs-14 fw-semibold">Atharva Simon.</p>
                  <div class="card-title text-muted fs-12 mb-0">
                    Correspondent Professor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card custom-card border border-info">
            <a href="javascript:void(0);" class="card-anchor"></a>
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <span class="avatar avatar-xl">
                    <img src="@/assets/img/profiles/avatar-10.jpg" alt="img" />
                  </span>
                </div>
                <div>
                  <p class="card-text text-info mb-1 fs-14 fw-semibold">Alicia Keys.</p>
                  <div class="card-title fs-12 mb-1">Department Of Commerce</div>
                  <div class="card-title text-muted fs-11 mb-0">24 Years, Female</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6" id="draggable-right">
          <div class="card custom-card overlay-card">
            <img src="@/assets/img/media/media-36.jpg" class="card-img" alt="..." />
            <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
              <div class="card-body text-fixed-white">
                <div class="card-text">Image Overlays Are Awesome!</div>
                <div class="card-text mb-2">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even.
                </div>
                <div class="card-text">Last updated 3 mins ago</div>
              </div>
              <div class="card-footer text-fixed-white">Last updated 3 mins ago</div>
            </div>
          </div>
          <div class="card custom-card card-bg-success">
            <div class="card-body">
              <div class="d-flex align-items-center w-100">
                <div class="me-2">
                  <span class="avatar avatar-rounded">
                    <img src="@/assets/img/profiles/avatar-11.jpg" alt="img" />
                  </span>
                </div>
                <div class="">
                  <div class="fs-15 fw-semibold">Samantha sid</div>
                  <p class="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card custom-card">
            <div class="card-header border-bottom-0 justify-content-between">
              <div class="card-title">Card With Collapse Button</div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <vue-feather
                  type="chevron-down"
                  class="fs-18 collapse-open"
                ></vue-feather>
                <vue-feather type="chevron-up" class="collapse-close fs-18"></vue-feather>
              </a>
            </div>
            <div class="collapse show border-top" id="collapseExample">
              <div class="card-body">
                <h6 class="card-text fw-semibold">Collapsible Card</h6>
                <p class="card-text mb-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words
                </p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Card With Close Button</div>
              <a
                href="javascript:void(0);"
                data-bs-toggle="card-remove"
                @click="removeCard"
              >
                <vue-feather type="x" class="fs-18"></vue-feather>
              </a>
            </div>
            <div class="card-body">
              <h6 class="card-text fw-semibold">Closed Card</h6>
              <p class="card-text mb-0">
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words
              </p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dragula from "dragula";
export default {
  data() {
    return {};
  },
  mounted() {
    const leftContainer = document.getElementById("draggable-left");
    const rightContainer = document.getElementById("draggable-right");

    dragula([leftContainer, rightContainer]);
  },
  methods: {
    removeCard(event) {
      event.preventDefault();
      let $this = event.target;
      let card = this.findClosest($this, ".card");

      card.remove();
    },
    findClosest(element, selector) {
      while (element && !element.matches(selector)) {
        element = element.parentNode;
      }
      return element;
    },
  },
};
</script>
