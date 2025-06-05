<template>
  <div id="app">
    <!-- Render the appropriate layout dynamically -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// Import layouts
import GuestLayout from "@/layouts/guest.vue";

// Define available layouts
const layouts = {
  GuestLayout, // Add more layouts here, e.g., AdminLayout
};

const route = useRoute();

// Compute the layout based on the current route's meta property
const layout = computed(() => layouts[route.meta.layout] || "div"); // Default to <div> if no layout is specified
</script>