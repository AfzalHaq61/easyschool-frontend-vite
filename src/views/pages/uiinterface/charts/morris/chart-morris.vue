<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <div class="row">

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="barchartjs.morrisbar"
                :series="barchartjs.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Stacked Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="barstacked.morrisbar2"
                :series="barstacked.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Line Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="linechart.morrisbar3"
                :series="linechart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Area Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="350"
                :options="areachart.morrisbar4"
                :series="areachart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Line Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="linechart3.morrisbar6"
                :series="linechart3.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Donut Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="350"
                :options="linechart2.morrisbar5"
                :series="linechart2.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import {
  barchartjs,
  barstacked,
  linechart,
  areachart,
  linechart2,
  linechart3,
} from "./data";

export default {
  data() {
    return {
      barchartjs: barchartjs,
      barstacked: barstacked,
      linechart: linechart,
      areachart: areachart,
      linechart2: linechart2,
      linechart3: linechart3,
    };
  },
  components: {},
  mounted() {},
  name: "chart-morris",
};
</script>
