<template>
    <div
      class="login-background position-relative d-lg-flex align-items-center justify-content-center d-lg-block d-none flex-wrap vh-100 overflowy-auto"
    >
      <div>
        <img src="@/assets/img/authentication/authentication-02.jpg" alt="Img" />
      </div>
      <div class="authen-overlay-item w-100 p-4">
        <h4 class="text-white mb-3">What's New on EasySchool !!!</h4>
        <div
          v-for="(news, index) in newsList"
          :key="index"
          class="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card"
        >
          <div>
            <h6>{{ news.title }}</h6>
            <p class="mb-0 text-truncate">{{ news.description }}</p>
          </div>
          <a href="javascript:void(0);">
            <i class="ti ti-chevrons-right"></i>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // News data (you can replace this with props or API data)
  const newsList = ref([
    {
      title: "Summer Vacation Holiday Homework",
      description: "The school will remain closed from April 20th to June...",
    },
    {
      title: "New Academic Session Admission Start(2024-25)",
      description: "An academic term is a portion of an academic year, the time ....",
    },
    {
      title: "Date sheet Final Exam Nursery to Sr.Kg",
      description:
        "Dear Parents, As the final examination for the session 2024-25 is ...",
    },
    {
      title: "Annual Day Function",
      description:
        "Annual functions provide a platform for students to showcase their...",
    },
  ]);
  </script>
  
  <style scoped>
  /* Add your styles specific to the sidebar here */
  </style>
  