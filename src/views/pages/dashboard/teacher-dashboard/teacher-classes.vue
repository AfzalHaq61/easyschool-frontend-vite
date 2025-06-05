<template>
  <div class="card-body">
    <div class="owl-carousel owl-theme task-slider">
      <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="item in Teacher_Classes" :key="item.id">
          <div class="item">
            <div class="bg-light-400 rounded p-3">
              <span :class="item.Class"
                ><i class="ti ti-clock me-1"></i>{{ item.Time }}</span
              >
              <p class="text-dark">{{ item.Section }}</p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Teacher_Classes from "@/assets/json/teacher-classes.json";
export default {
  data() {
    return {
      Teacher_Classes: Teacher_Classes,
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
          itemsToShow: 3,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
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
