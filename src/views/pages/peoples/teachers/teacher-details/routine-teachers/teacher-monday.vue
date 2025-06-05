<template>
  <div
    class="d-flex flex-nowrap overflow-auto"
  >
    <div class="d-flex flex-column me-4 flex-fill" v-for="(routine, day) in Teachers_Routine" :key="day">
      <div class="mb-3">
        <h6>{{ day }}</h6>
      </div>
      <div
        class="rounded p-3 mb-4 border"
        v-for="item in routine"
        :key="item.room"
      >
        <div class="pb-3 border-bottom">
          <span class="text-danger badge bg-transparent-danger text-nowrap"
            >Room No: {{ item.room }}</span
          >
        </div>
        <span class="text-dark d-block py-2">Class : {{ item.class }}</span>
        <span class="text-dark d-block pb-2">Subject : {{ item.subject }}</span>
        <p class="text-dark text-nowrap m-0"><i class="ti ti-clock me-1"></i>{{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Teachers_Routine from "@/assets/json/teacher-routine.json";
export default {
  data() {
    return {
      Teachers_Routine: Teachers_Routine,
    };
  },
};
</script>
