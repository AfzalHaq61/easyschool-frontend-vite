<template>
  <!-- Main Wrapper -->

  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Clipboard</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Drag Card -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Copy from input</h5>
            </div>
            <div class="card-body">
              <div class="clipboard">
                <form class="form-horizontal">
                  <input
                    type="text"
                    class="form-control mb-4"
                    id="message1"
                    v-model="message1"
                  />
                  <b-button @click="doCopy5" class="mb-1 btn clip-btn btn-primary">
                    <i class="far fa-copy"></i> Copy from Input
                  </b-button>
                  <b-button @click="doCut5" class="mb-1 btn clip-btn btn-dark ms-1">
                    <i class="fas fa-cut"></i> Cut from Input
                  </b-button>
                </form>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Copy from Text Area</h5>
            </div>
            <div class="card-body">
              <div class="clipboard">
                <form class="form-horizontal">
                  <b-form-textarea
                    class="form-control mb-4"
                    v-model="message2"
                    rows="3"
                    id="paragraph-copy3"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                  >
                  </b-form-textarea>
                  <b-button
                    type="button"
                    @click="doCopy4"
                    class="mb-1 btn me-1 clip-btn btn-primary"
                  >
                    <i class="far fa-copy"></i> Copy from Input
                  </b-button>
                  <b-button
                    type="button"
                    @click="doCut4"
                    class="mb-1 btn clip-btn btn-dark"
                  >
                    <i class="fas fa-cut"></i> Cut from Input
                  </b-button>
                </form>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Copy Text from Paragraph</h5>
            </div>
            <div class="card-body">
              <div class="clipboard copy-txt">
                <p class="otp-pass">
                  Here is your OTP <span id="paragraph-copy1">22991</span>.
                </p>
                <p class="mb-4">Please do not share it to anyone</p>
                <b-button
                  type="button"
                  @click="doCopy2"
                  class="mb-1 btn clip-btn btn-primary"
                >
                  <i class="far fa-copy"></i> Copy from Input
                </b-button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Copy Hidden Text (Advanced)</h5>
            </div>
            <div class="card-body">
              <div class="clipboard copy-txt">
                <p class="mb-4">
                  Link -&gt;
                  <span id="advanced-paragraph">http://www.example.com/example</span>
                </p>
                <b-button
                  type="button"
                  @click="doCopy3"
                  class="mb-1 btn me-1 clip-btn btn-primary"
                >
                  <i class="far fa-copy"></i> Copy Link
                </b-button>
                <b-button
                  type="button"
                  @click="doCut1"
                  class="mb-1 btn clip-btn btn-warning"
                >
                  <i class="far fa-copy"></i> Copy Hidden Code
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Drag Card -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      message1: "http://www.admin-dashboard.com",
      message2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    };
  },
  components: {},
  mounted() {},
  methods: {
    doCopy1: function () {
      this.$copyText(this.message1).then(
        function (e) {
          console.log(e);
        },
        function (e) {
          alert("Can not copy");
          console.log(e);
        }
      );
    },

    doCut1: function () {
      document.getElementById("advanced-paragraph").style.display = "none";
    },
    doCopy3: function () {
      document.getElementById("advanced-paragraph").style.backgroundColor = "#007bff";
      document.getElementById("advanced-paragraph").style.color = "#fff";
    },

    doCopy2: function () {
      document.getElementById("paragraph-copy1").style.backgroundColor = "#007bff";
      document.getElementById("paragraph-copy1").style.color = "#fff";
    },
    doCut4: function () {
      document.getElementById("paragraph-copy3").style.display = "none";
    },
    doCopy4: function () {
      document.getElementById("paragraph-copy3").style.backgroundColor = "#007bff";
      document.getElementById("paragraph-copy3").style.color = "#fff";
    },
    doCut5: function () {
      document.getElementById("message1").style.display = "none";
    },
    doCopy5: function () {
      document.getElementById("message1").style.backgroundColor = "#007bff";
      document.getElementById("message1").style.color = "#fff";
    },
  },
};
</script>
