<template>
  <!-- Main Wrapper -->

  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <div class="page-header">
        <div class="content-page-header">
          <h5>Sweetalerts</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <!-- Basic Examples -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Basic Examples</h4>
            </div>
            <div class="card-body card-buttons">
              <p>
                SweetAlert automatically centers itself on the page and looks great no
                matter if you're using a desktop computer, mobile or tablet. It's even
                highly customizable, as you can see below!
              </p>
              <b-button variant="outline-primary me-1 mb-1" @click="basicAlert">
                Basic
              </b-button>
              <b-button variant="outline-primary me-1 mb-1" @click="withTitle">
                With Title
              </b-button>
              <b-button variant="outline-primary me-1 mb-1" @click="footerAlert">
                With Footer
              </b-button>
            </div>
          </div>
          <!-- /Basic Examples -->

          <!-- Position -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Position</h4>
            </div>
            <div class="card-body card-buttons">
              <p>
                You can specify position of your alert with
                <code
                  >position : { top-start | top-end | bottom-start | bottom-end }</code
                >
                in js.
              </p>
              <b-button variant="outline-success me-1 mb-1" @click="positionTopstart">
                Top Start
              </b-button>
              <b-button variant="outline-success me-1 mb-1" @click="positionTopend">
                Top End
              </b-button>
              <b-button variant="outline-success me-1 mb-1" @click="positionBottomstart">
                Bottom Starts
              </b-button>
              <b-button variant="outline-success me-1 mb-1" @click="positionBottomend">
                Bottom End
              </b-button>
            </div>
          </div>
          <!-- \Position -->

          <!-- Types -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Types</h4>
            </div>
            <div class="card-body card-buttons">
              <p>
                The type of the modal. SweetAlert comes with 4 built-in types which will
                show a corresponding icon animation: "warning", "error", "success" and
                "info". You can also set it as "input" to get a prompt modal. It can
                either be put in the object under the key "icon" or passed as the third
                parameter of the function.
              </p>
              <b-button variant="outline-success me-1 mb-1" @click="typeSuccess">
                Success
              </b-button>
              <b-button variant="outline-info me-1 mb-1" @click="typeInfo">
                Info
              </b-button>
              <b-button variant="outline-warning me-1 mb-1" @click="typeWarning">
                Warning
              </b-button>
              <b-button variant="outline-danger me-1 mb-1" @click="typeError">
                Error
              </b-button>
            </div>
          </div>
          <!-- \Types -->

          <!-- Options -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Options</h4>
            </div>
            <div class="card-body">
              <b-button
                id="auto-close"
                variant="outline-primary me-1 mb-1"
                @click="autoClose"
              >
                Auto Close
              </b-button>
              <b-button variant="outline-primary mr-1 mb-1" @click="clickOutside">
                Click Outside
              </b-button>
              <button
                type="button"
                class="btn btn-outline-primary mr-1 mb-1 ms-1"
                @click="openSweetAlert"
              >
                Question
              </button>
            </div>
          </div>
          <!-- \Options -->

          <!-- Confirm Options -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Confirm Options</h4>
            </div>
            <div class="card-body">
              <h5>Confirm Button Text</h5>
              <p>
                Use <code>confirmButtonText: "Your text here!"</code> option to change the
                text of the "Confirm" button.
              </p>
              <b-button variant="outline-primary mb-3" @click="confirmText"
                >Confirm Text</b-button
              >

              <h5>Confirm Button Color</h5>
              <p>
                Use <code>confirmButtonClass: "btn btn-{colorName}"</code> option to
                change the color of the "Confirm" button.
              </p>
              <b-button variant="outline-primary mb-2" @click="confirmColor"
                >Confirm Button Color</b-button
              >
            </div>
          </div>
          <!-- \Confirm Options -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <!-- /Main Wrapper -->
</template>
<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      title: "Sweet Alerts",
    };
  },
  methods: {
    basicAlert() {
      this.$swal("Any fool can use a computer");
    },
    withTitle() {
      this.$swal({
        title: "The Internet?,",
        text: "That thing is still around?",
      });
    },
    footerAlert() {
      this.$swal({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    },
    positionTopstart() {
      this.$swal({
        position: "top-start",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    positionTopend() {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    positionBottomstart() {
      this.$swal({
        position: "bottom-start",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    positionBottomend() {
      this.$swal({
        position: "bottom-end",
        type: "success",
        title: "Your work has been saved",
        timer: 1500,
        showConfirmButton: !1,
      });
    },
    typeSuccess() {
      this.$swal({
        title: "Good job!",
        text: "You clicked the button!",
        type: "success",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    typeInfo() {
      this.$swal({
        title: "Info!",
        text: "You clicked the button!",
        type: "info",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    typeWarning() {
      this.$swal({
        title: "Warning!",
        text: " You clicked the button!",
        type: "warning",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    typeError() {
      this.$swal({
        title: "Error!",
        text: " You clicked the button!",
        type: "error",
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
      });
    },
    autoClose() {
      let timerInterval;
      const swalContent = this.$refs.swalContent;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <strong></strong> seconds.",
        timer: 2000,
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: false,
        onBeforeOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            this.$set(swalContent, "textContent", Swal.getTimerLeft());
          }, 100);
        },
        onClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        // eslint-disable-next-line no-unused-vars
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    },

    clickOutside() {
      Swal.fire({
        title: "Click outside to close!",
        text: "This is a cool message!",
        allowOutsideClick: true,
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: false,
      });
    },

    openSweetAlert() {
      let result1, result2, result3;
      // eslint-disable-next-line no-unused-vars
      Swal.mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        progressSteps: ["1", "2", "3"],
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: false,
        cancelButtonClass: "btn btn-danger ml-1",
      })
        .fire({
          title: "Question 1",
          text: "Chaining swal2 modals is easy",
        })
        .then((result) => {
          if (result.value) {
            result1 = result.value;
            return Swal.fire({
              title: "Question 2",
              input: "text",
              confirmButtonText: "Next &rarr;",
            });
          }
          return null;
        })
        .then((result) => {
          if (result && result.value) {
            result2 = result.value;
            // eslint-disable-next-line no-unused-vars
            return Swal.fire({
              title: "Question 3",
              input: "text",
              confirmButtonText: "Next &rarr;",
            });
          }
          return null;
        })
        .then((result) => {
          if (result && result.value) {
            result3 = result.value;
            // Handle the final result
            Swal.fire({
              title: "All done!",
              html:
                "Your answers: <pre><code>" +
                JSON.stringify([result1, result2, result3]) +
                "</code></pre>",
              confirmButtonText: "Lovely!",
            });
          }
        });
    },
    confirmText() {
      // eslint-disable-next-line no-unused-vars
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          // eslint-disable-next-line no-unused-vars
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            confirmButtonClass: "btn btn-success",
          });
        }
      });
    },
    confirmColor() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          // eslint-disable-next-line no-unused-vars
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            confirmButtonClass: "btn btn-success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // eslint-disable-next-line no-unused-vars
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            confirmButtonClass: "btn btn-success",
          });
        }
      });
    },
  },
};
</script>
