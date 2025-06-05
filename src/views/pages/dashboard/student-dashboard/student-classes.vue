<template>
  <div class="row">
    <!-- Class Faculties -->
    <div class="col-xl-12">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Class Faculties</h4>
          <div class="owl-nav slide-nav text-end nav-control"></div>
        </div>
        <div class="card-body">
          <div class="teachers-profile-slider owl-carousel">
            <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="item in Student_Classes" :key="item.id">
                <div class="card bg-light-100 mb-0 text-start">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <router-link
                        to="/teachers/teacher-details"
                        class="avatar avatar-lg rounded me-2"
                      >
                        <img
                          :src="require(`@/assets/img/teachers/${item.Image}`)"
                          alt="Teacher"
                        />
                      </router-link>
                      <div class="overflow-hidden">
                        <h6 class="mb-1 text-truncate">
                          <router-link to="/teachers/teacher-details">{{
                            item.Name
                          }}</router-link>
                        </h6>
                        <p>{{ item.Subject }}</p>
                      </div>
                    </div>
                    <div class="row gx-2">
                      <div class="col-6">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                          ><i class="ti ti-mail me-2"></i>Email</a
                        >
                      </div>
                      <div class="col-6">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                          ><i class="ti ti-message-chatbot me-2"></i>Chat</a
                        >
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
        </div>
      </div>
    </div>
    <!-- /Class Faculties -->
  </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Student_Classes from "@/assets/json/student-classes.json";
export default {
  data() {
    return {
      Student_Classes: Student_Classes,
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
          itemsToShow: 4,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
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
