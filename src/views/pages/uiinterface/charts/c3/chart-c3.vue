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
            <h3 class="page-title">C3 Chart</h3>
          </div>
        </div>
      </div>

      <!-- /Page Header -->

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
                height="300"
                :options="barc3Chart.barc3"
                :series="barc3Chart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Multiple Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="300"
                :options="multic3Chart.multibarc3"
                :series="multic3Chart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Horizontal Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="300"
                horizontal="true"
                :options="horizontalc3Chart.horizontalbarc3"
                :series="horizontalc3Chart.series"
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
                type="area"
                height="300"
                :options="linec3Chart.linebarc3"
                :series="linec3Chart.series"
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
                height="300"
                :options="line2c3Chart.line2barc3"
                :series="line2c3Chart.series"
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
                type="area"
                height="300"
                :options="line3c3Chart.line3barc3"
                :series="line3c3Chart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Pie Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="pie"
                height="300"
                :options="piec3Chart.piec3"
                :series="piec3Chart.series"
              ></apexchart>
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
                height="300"
                :options="donutc3Chart.donutc3"
                :series="donutc3Chart.series"
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
  barc3Chart,
  multic3Chart,
  horizontalc3Chart,
  linec3Chart,
  line2c3Chart,
  line3c3Chart,
  piec3Chart,
  donutc3Chart,
} from "./data";
export default {
  data() {
    return {
      barc3Chart: barc3Chart,
      multic3Chart: multic3Chart,
      horizontalc3Chart: horizontalc3Chart,
      linec3Chart: linec3Chart,
      line2c3Chart: line2c3Chart,
      line3c3Chart: line3c3Chart,
      piec3Chart: piec3Chart,
      donutc3Chart: donutc3Chart,
    };
  },
};
</script>
