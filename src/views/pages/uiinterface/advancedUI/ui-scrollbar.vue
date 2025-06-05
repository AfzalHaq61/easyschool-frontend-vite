<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Scroll Bar</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Horizontal Scroll</h5>
            </div>
            <div class="card-body">
              <div class="scroll-bar-wrap">
                <div class="horizontal-scroll scroll-demo">
                  <div class="horz-scroll-content">
                    <perfect-scrollbar
                      class="scroll-area-2"
                      :settings="settings"
                      @ps-scroll-y="scrollHanle"
                    >
                      <div class="row">
                        <div class="col-sm-3">
                          <p>
                            {{ para1 }}
                          </p>
                        </div>
                        <div class="col-sm-3">
                          <p>
                            {{ para2 }}
                          </p>
                        </div>
                        <div class="col-sm-3">
                          <p>
                            {{ para3 }}
                          </p>
                        </div>
                        <div class="col-sm-3">
                          <p>
                            {{ para4 }}
                          </p>
                        </div>
                      </div>
                    </perfect-scrollbar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Vertical Scroll</h5>
            </div>
            <div class="card-body">
              <div class="vertical-scroll scroll-demo">
                <perfect-scrollbar
                  class="scroll-area-1"
                  :settings="settings"
                  @ps-scroll-y="scrollHanle"
                >
                  <p>
                    {{ para1 }}
                  </p>
                  <p>
                    {{ para2 }}
                  </p>
                  <p>
                    {{ para3 }}
                  </p>
                  <p>
                    {{ para4 }}
                  </p>
                  <p>
                    {{ para5 }}
                  </p>
                </perfect-scrollbar>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Small Size Scroll</h5>
            </div>
            <div class="card-body">
              <div class="scrollbar-margins large-margin scroll-demo">
                <perfect-scrollbar
                  class="scroll-area-1"
                  :settings="settings"
                  @ps-scroll-y="scrollHanle"
                >
                  <p>
                    {{ para1 }}
                  </p>
                  <p>
                    {{ para2 }}
                  </p>
                  <p>
                    {{ para3 }}
                  </p>
                  <p>
                    {{ para4 }}
                  </p>
                  <p>
                    {{ para5 }}
                  </p>
                </perfect-scrollbar>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Visible Scroll</h5>
            </div>
            <div class="card-body">
              <div class="scroll-bar-wrap">
                <div class="visible-scroll always-visible scroll-demo">
                  <div class="horz-scroll-content">
                    <perfect-scrollbar
                      class="scroll-area-1"
                      :settings="settings"
                      @ps-scroll-y="scrollHanle"
                    >
                      <div class="row">
                        <div class="col-sm-3">
                          <p>{{ para1 }}</p>
                          <p>{{ para2 }}</p>
                          <p>{{ para3 }}</p>
                        </div>
                        <div class="col-sm-3">
                          <p>{{ para3 }}</p>
                          <p>{{ para4 }}</p>
                          <p>{{ para5 }}</p>
                        </div>
                        <div class="col-sm-3">
                          <p>{{ para1 }}</p>
                          <p>{{ para2 }}</p>
                          <p>{{ para3 }}</p>
                        </div>
                        <div class="col-sm-3">
                          <p>{{ para3 }}</p>
                          <p>{{ para4 }}</p>
                          <p>{{ para5 }}</p>
                        </div>
                      </div>
                    </perfect-scrollbar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->
      </div>
    </div>
  </div>
</template>
<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import 'vue3-perfect-scrollbar/style.css';
export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      settings: [],
      para1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      para2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus pageMaker including versions of Lorem Ipsum.",
      para3:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      para4:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      para5:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    };
  },
  methods: {
    scrollHanle() {},
  },
};
</script>
<style>
.scroll-area-1 {
  position: relative;
  margin: auto;
  height: 250px;
  background-color: transparent !important;
}
.scroll-area-2 {
  position: relative;
  margin: auto;
  height: 250px;
  width: 100%;
  background-color: transparent !important;
}
</style>
