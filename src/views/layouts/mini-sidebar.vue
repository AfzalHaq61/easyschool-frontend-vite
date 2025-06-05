<template>
  <div class="sidebar" id="sidebar">
    <perfect-scrollbar
      class="scroll-area"
      :settings="settings"
      @ps-scroll-y="scrollHanle"
    >
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li>
              <a
                href="javascript:void(0);"
                class="d-flex align-items-center border bg-white rounded p-2 mb-4"
              >
                <img
                  src="@/assets/img/icons/global-img.svg"
                  class="avatar avatar-md img-fluid rounded"
                  alt="Profile"
                />
                <span class="text-dark ms-2 fw-normal">Global International</span>
              </a>
            </li>
          </ul>
          <vertical-sidebar></vertical-sidebar>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      settings: {
        suppressScrollX: true,
      },
    };
  },
  methods: {
    scrollHanle() {},
  },
};
</script>
