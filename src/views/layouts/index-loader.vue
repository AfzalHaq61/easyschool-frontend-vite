<template>
  <div>
    <div id="global-loader" ref="globalloader">
      <div class="page-loader"></div>
    </div>
    <!-- Your other content here -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const globalloader = ref(null);

    const setupPreloader = () => {
      setTimeout(() => {
        if (globalloader.value) {
          globalloader.value.style.opacity = "0";
          setTimeout(() => {
            globalloader.value.style.display = "none";
          }, 1000);
        }
      }, 1000);
    };

    onMounted(() => {
      setupPreloader();
    });

    return {
      globalloader,
    };
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
