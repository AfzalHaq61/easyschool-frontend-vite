<template>
  <div class="time-tables-main">
    <div class="row align-items-center">
      <div class="col-xxl-1 col-md-2 col-sm-3 col-4">
        <div class="time-table-day">
          <h6>Tuesday</h6>
          <span class="time-period"
            >09:00 AM <br />
            to <br />
            04:00 PM</span
          >
        </div>
      </div>
      <div class="col-xxl-11 col-md-10 col-sm-9 col-8">
        <div class="time-table-slider owl-carousel">
          <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="record in Thursday_Time" :key="record.id">
              <div :class="record.Status">
                <span class="period-time"
                  ><i class="ti ti-clock"></i>{{ record.Period_Time }}</span
                >
                <span class="subject">Subject : {{ record.Subject }}</span>
                <div class="subject-teacher">
                  <router-link to="/teachers/teacher-details" class="teacher-img"
                    ><img
                      :src="require(`@/assets/img/teachers/${record.Img}`)"
                      alt=""
                    />{{ record.Name }}</router-link
                  >
                </div>
              </div>
            </Slide>
            <template #addons> </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Thursday_Time from "@/assets/json/thursday-time.json";
export default {
  data() {
    return {
      Thursday_Time: Thursday_Time,
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
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 6,
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
