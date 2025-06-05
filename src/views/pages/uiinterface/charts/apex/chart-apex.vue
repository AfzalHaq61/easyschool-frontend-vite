<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Charts</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Apex Simple</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="basicAreaChart.sline"
                :series="basicAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Area Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="350"
                :options="splineAreaChart.slinearea"
                :series="splineAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Column Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="scolAreaChart.scol"
                :series="scolAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Column Stacked Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="scolstackedAreaChart.scolstacked"
                :series="scolstackedAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Bar Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="sbarAreaChart.sbar"
                :series="sbarAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Mixed Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="mixedchartAreaChart.mixedchart"
                :series="mixedchartAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Donut Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="350"
                :options="donutAreaChart.donutchart"
                :series="donutAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Radial Chart</h5>
            </div>
            <div class="card-body">
              <apexchart
                type="radialBar"
                height="350"
                :options="radialAreaChart.radialchart"
                :series="radialAreaChart.series"
              ></apexchart>
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
  basicAreaChart,
  splineAreaChart,
  scolAreaChart,
  scolstackedAreaChart,
  sbarAreaChart,
  mixedchartAreaChart,
  donutAreaChart,
  radialAreaChart,
} from "./data";
export default {
  data() {
    return {
      basicAreaChart: basicAreaChart,
      splineAreaChart: splineAreaChart,
      scolAreaChart: scolAreaChart,
      scolstackedAreaChart: scolstackedAreaChart,
      sbarAreaChart: sbarAreaChart,
      mixedchartAreaChart: mixedchartAreaChart,
      donutAreaChart: donutAreaChart,
      radialAreaChart: radialAreaChart,
    };
  },
};
</script>
