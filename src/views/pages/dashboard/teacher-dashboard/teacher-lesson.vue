<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Syllabus / Lesson Plan</h4>
          <router-link to="/academic/class-syllabus" class="link-primary fw-medium"
            >View All</router-link
          >
        </div>
        <div class="card-body">
          <div class="owl-carousel owl-theme lesson">
            <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="item in Teacher_Lesson" :key="item.id">
                <div class="item text-start">
                  <div class="card mb-0">
                    <div class="card-body">
                      <div :class="item.SecClass">
                        {{ item.Section }}
                      </div>
                      <div class="border-bottom mb-3">
                        <h5 class="mb-3">{{ item.Title }}</h5>
                        <div class="progress progress-xs mb-3">
                          <div
                            :class="item.ProgressClass"
                            role="progressbar"
                            :style="item.Style"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <router-link to="/classes/schedule-classes" class="fw-medium"
                          ><i class="ti ti-edit me-1"></i>Reschedule</router-link
                        >
                        <a href="javascript:void(0);" class="link-primary"
                          ><i class="ti ti-share-3 me-1"></i>Share</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons> </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Teacher_Lesson from "@/assets/json/teacher-lesson.json";
export default {
  data() {
    return {
      Teacher_Lesson: Teacher_Lesson,
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
          itemsToShow: 2,
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
  },
};
</script>
