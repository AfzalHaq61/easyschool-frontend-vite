<template>
  <div class="card flex-fill">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h4 class="card-title">Quick Links</h4>
    </div>
    <div class="card-body pb-1">
      <div class="owl-carousel link-slider">
        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="record in Admin_Quicklinks" :key="record.id">
            <div class="item">
              <router-link to="/academic/class-time-table" :class="record.Class">
                <div :class="record.Class1">
                  <span :class="record.Class2"><i :class="record.Class3"></i></span>
                </div>
                <p class="text-dark">{{ record.Name }}</p>
              </router-link>
              <router-link to="/fees/fees-group" :class="record.Class4">
                <div :class="record.Class5">
                  <span :class="record.Class6"><i :class="record.Class7"></i></span>
                </div>
                <p class="text-dark">{{ record.Name1 }}</p>
              </router-link>
            </div>
          </Slide>
          <template #addons> </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Admin_Quicklinks from "@/assets/json/admin-quicklinks.json";
export default {
  data() {
    return {
      Admin_Quicklinks: Admin_Quicklinks,
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
  },
};
</script>
