<template>
  <div class="owl-carousel folders-carousel owl-theme">
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in FolderCarousel" :key="item.id">
        <div class="p-3 border p-3 bg-white rounded">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />
              <h5 class="text-nowrap">
                <a href="javascript:void(0);">Project Details</a>
              </h5>
            </div>
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
                <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-start my-3">
            <p class="text-primary mb-0 me-2 pe-1">Project plan</p>
            <span class="d-flex align-items-center fw-semibold me-2"
              ><i class="ti ti-circle-filled fs-5 me-2"></i>27 MB</span
            >
            <span class="d-flex align-items-center fw-semibold"
              ><i class="ti ti-circle-filled fs-5 me-2"></i>208 Files</span
            >
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="avatar-list-stacked avatar-group-sm">
              <span class="avatar border-0">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  aria-label="Member 1"
                  data-bs-original-title="Member 1"
                  ><img
                    :src="require(`@/assets/img/profiles/${item.Image}`)"
                    class="rounded-circle"
                    alt="Avatar"
                /></a>
              </span>
              <span class="avatar border-0">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  aria-label="Member 2"
                  data-bs-original-title="Member 2"
                  ><img
                    :src="require(`@/assets/img/profiles/${item.Image_Two}`)"
                    class="rounded-circle"
                    alt="Avatar"
                /></a>
              </span>
              <span class="fw-semibold mt-2">
                <a class="text-success ms-3" href="javascript:void(0);">{{
                  item.Member
                }}</a>
              </span>
            </div>
            <a href="javascript:void(0);"><i class="ti ti-star fs-16"></i></a>
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
import FolderCarousel from "@/assets/json/folder-carousel.json";
export default {
  data() {
    return {
      FolderCarousel: FolderCarousel,
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
