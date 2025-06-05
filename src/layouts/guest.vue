<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="login-wrapper w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div class="row">
          <!-- Sidebar Component -->
          <div class="col-lg-6">
            <Sidebar />
          </div>

          <!-- Main Content -->
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/auth/sidebar.vue";
</script>

<style scoped>
/* Add any layout-specific styles here if needed */
</style>
  