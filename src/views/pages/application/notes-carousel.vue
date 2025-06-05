<template>
  <div class="notes-slider owl-carousel">
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in NotesCarousel" :key="item.id">
        <div class="card rounded-3 mb-0">
          <div class="card-body p-4">
            <div class="d-flex align-items-center justify-content-between">
              <span class="badge bg-outline-warning d-inline-flex align-items-center"
                ><i class="fas fa-circle fs-6 me-1"></i>{{ item.Badge }}</span
              >
              <div>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu notes-menu dropdown-menu-end">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-note-units"
                    ><span><i data-feather="edit"></i></span>Edit</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-modal"
                    ><span><i data-feather="trash-2"></i></span>Delete</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><span><i data-feather="star"></i></span>Not Important</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#view-note-units"
                    ><span><i data-feather="eye"></i></span>View</a
                  >
                </div>
              </div>
            </div>
            <div class="my-3">
              <h5 class="text-truncate mb-1">
                <a href="javascript:void(0);">{{ item.Title }}</a>
              </h5>
              <p class="mb-3 d-flex align-items-center text-dark">
                <i class="ti ti-calendar me-1"></i>20 Jan 2024
              </p>
              <p class="text-truncate line-clamb-2 text-wrap">
                {{ item.Content }}
              </p>
            </div>
            <div
              class="d-flex align-items-center justify-content-between border-top pt-3"
            >
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="require(`@/assets/img/profiles/${item.Image}`)"
                    alt="Profile"
                    class="img-fluid rounded-circle"
                  />
                </a>
                <span class="text-info d-flex align-items-center"
                  ><i class="fas fa-square square-rotate fs-10 me-1"></i
                  >{{ item.Role }}</span
                >
              </div>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2">
                  <span><i class="fas fa-star text-warning"></i></span>
                </a>
                <a href="javascript:void(0);">
                  <span><i class="ti ti-trash text-danger"></i></span>
                </a>
              </div>
            </div>
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
import NotesCarousel from "@/assets/json/notes-carousel.json";
export default {
  data() {
    return {
      NotesCarousel: NotesCarousel,
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
