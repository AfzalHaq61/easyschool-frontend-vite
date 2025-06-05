<template>
  <div class="owl-carousel folders-carousel owl-theme">
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in FilesCarousel" :key="item.id">
        <div class="border rounded-3 bg-white p-3">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img
                :src="require(`@/assets/img/icons/${item.Image}`)"
                alt="Folder"
                class="me-2"
              />
              <h5 class="text-nowrap">
                <a href="javascript:void(0);">{{ item.Title }}</a>
              </h5>
            </div>
            <div class="d-flex align-items-center">
              <a href="javascript:void(0);"><i class="fa fa-star me-2"></i></a>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="dropset"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                  <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                  <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                  <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item">Download</a>
                  </li>
                  <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item">Archeived</a>
                  </li>
                  <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-start mt-3">
            <p class="text-primary mb-0 me-2">{{ item.Day }}</p>
            <span class="d-flex align-items-center fw-semibold me-2"
              ><i class="ti ti-circle-filled fs-5 me-2"></i>{{ item.MB }}</span
            >
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import FilesCarousel from "@/assets/json/files-carousel.json";
export default {
  data() {
    return {
      FilesCarousel: FilesCarousel,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        loop: true,
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>
