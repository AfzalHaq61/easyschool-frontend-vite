<template>
  <div class="owl-carousel teacher-slider h-100">
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="record in StarStudents" :key="record.id">
        <div class="item h-100">
          <div class="d-flex justify-content-between flex-column h-100">
            <div>
              <h5 class="mb-3 text-white">{{ record.Title }}</h5>
              <h4 class="mb-1 text-white">{{ record.Name }}</h4>
              <p class="text-light">{{ record.Section }}</p>
            </div>
            <img :src="require(`@/assets/img/performer/${record.Image}`)" alt="img" />
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
import StarStudents from "@/assets/json/admin-star-students.json";
export default {
  data() {
    return {
      StarStudents: StarStudents,
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 1,
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
