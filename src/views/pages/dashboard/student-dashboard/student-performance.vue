<template>
  <div class="row">
    <!-- Performance -->
    <div class="col-xxl-7 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-title">Performance</h4>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-calendar me-2"></i>2024 - 2025
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  2024 - 2025
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  2023 - 2024
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  2022 - 2023
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body pb-0">
          <div id="performance_chart">
            <apexchart
              type="area"
              height="355"
              :options="performanceChart.Performance"
              :series="performanceChart.series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- /Performance -->

    <!-- Home Works -->
    <div class="col-xxl-5 d-flex">
      <div class="card flex-fill">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="card-titile">Home Works</h4>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="bg-white dropdown-toggle"
              data-bs-toggle="dropdown"
              ><i class="ti ti-book-2 me-2"></i>All Subject
            </a>
            <ul class="dropdown-menu mt-2 p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Physics
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">
                  Chemistry
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"> Maths </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body py-1">
          <ul class="list-group list-group-flush">
            <li class="list-group-item py-3 px-0 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center overflow-hidden mb-3">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xl flex-shrink-0 me-2"
                  >
                    <img src="@/assets/img/home-work/home-work-01.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <p class="d-flex align-items-center text-info mb-1">
                      <i class="ti ti-tag me-2"></i>Physics
                    </p>
                    <h6 class="text-truncate mb-1">
                      <router-link to="/academic/class-home-work">Write about Theory of Pendulum</router-link>
                    </h6>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="d-flex align-items-center border-end me-1 pe-1">
                        <router-link to="/teachers/teacher-details"
                          class="avatar avatar-xs flex-shrink-0 me-2"
                        >
                          <img
                            src="@/assets/img/teachers/teacher-01.jpg"
                            class="rounded-circle"
                            alt="teacher"
                          />
                      </router-link>
                        <p class="text-dark">Aaron</p>
                      </div>
                      <p>Due by : 16 Jun 2024</p>
                    </div>
                  </div>
                </div>
                <div class="circle-progress mb-3" data-value="80">
                  <span class="progress-left">
                    <span class="progress-bar border-success"></span>
                  </span>
                  <span class="progress-right">
                    <span class="progress-bar border-success"></span>
                  </span>
                  <div class="progress-value">90%</div>
                </div>
              </div>
            </li>
            <li class="list-group-item py-3 px-0 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center overflow-hidden mb-3">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xl flex-shrink-0 me-2"
                  >
                    <img src="@/assets/img/home-work/home-work-02.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <p class="d-flex align-items-center text-success mb-1">
                      <i class="ti ti-tag me-2"></i>Chemistry
                    </p>
                    <h6 class="text-truncate mb-1">
                      <router-link to="/academic/class-home-work">Chemistry - Change of Elements</router-link>
                    </h6>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="d-flex align-items-center border-end me-1 pe-1">
                        <router-link to="/teachers/teacher-details"
                          class="avatar avatar-xs flex-shrink-0 me-2"
                        >
                          <img
                            src="@/assets/img/teachers/teacher-01.jpg"
                            class="rounded-circle"
                            alt="teacher"
                          />
                        </router-link>
                        <p class="text-dark">Hellana</p>
                      </div>
                      <p>Due by : 16 Jun 2024</p>
                    </div>
                  </div>
                </div>
                <div class="circle-progress mb-3" data-value="65">
                  <span class="progress-left">
                    <span class="progress-bar border-info"></span>
                  </span>
                  <span class="progress-right">
                    <span class="progress-bar border-info"></span>
                  </span>
                  <div class="progress-value">65%</div>
                </div>
              </div>
            </li>
            <li class="list-group-item py-3 px-0 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center overflow-hidden mb-3">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xl flex-shrink-0 me-2"
                  >
                    <img src="@/assets/img/home-work/home-work-03.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <p class="d-flex align-items-center text-danger mb-1">
                      <i class="ti ti-tag me-2"></i>Maths
                    </p>
                    <h6 class="text-truncate mb-1">
                      <router-link to="/academic/class-home-work">Maths - Problems to Solve Page 21</router-link>
                    </h6>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="d-flex align-items-center border-end me-1 pe-1">
                        <router-link to="/teachers/teacher-details"
                          class="avatar avatar-xs flex-shrink-0 me-2"
                        >
                          <img
                            src="@/assets/img/teachers/teacher-01.jpg"
                            class="rounded-circle"
                            alt="teacher"
                          />
                        </router-link>
                        <p class="text-dark">Morgan</p>
                      </div>
                      <p>Due by : 21 Jun 2024</p>
                    </div>
                  </div>
                </div>
                <div class="circle-progress mb-3" data-value="30">
                  <span class="progress-left">
                    <span class="progress-bar border-warning"></span>
                  </span>
                  <span class="progress-right">
                    <span class="progress-bar border-warning"></span>
                  </span>
                  <div class="progress-value">30%</div>
                </div>
              </div>
            </li>
            <li class="list-group-item py-3 px-0 pb-0">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="d-flex align-items-center overflow-hidden mb-3">
                  <a
                    href="javascript:void(0);"
                    class="avatar avatar-xl flex-shrink-0 me-2"
                  >
                    <img src="@/assets/img/home-work/home-work-04.jpg" alt="img" />
                  </a>
                  <div class="overflow-hidden">
                    <p class="d-flex align-items-center text-skyblue mb-1">
                      <i class="ti ti-tag me-2"></i>Engish
                    </p>
                    <h6 class="text-truncate mb-1">
                      <router-link to="/academic/class-home-work">English - Vocabulary Introduction</router-link>
                    </h6>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="d-flex align-items-center border-end me-1 pe-1">
                        <router-link to="/teachers/teacher-details"
                          class="avatar avatar-xs flex-shrink-0 me-2"
                        >
                          <img
                            src="@/assets/img/teachers/teacher-01.jpg"
                            class="rounded-circle"
                            alt="teacher"
                          />
                        </router-link>
                        <p class="text-dark">Daniel Josua</p>
                      </div>
                      <p>Due by : 21 Jun 2024</p>
                    </div>
                  </div>
                </div>
                <div class="circle-progress mb-3" data-value="10">
                  <span class="progress-left">
                    <span class="progress-bar border-danger"></span>
                  </span>
                  <span class="progress-right">
                    <span class="progress-bar border-danger"></span>
                  </span>
                  <div class="progress-value">10%</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Home Works -->
  </div>
</template>
<script>
import { performanceChart } from "./data";
export default {
  data() {
    return {
      performanceChart: performanceChart,
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
};
</script>
