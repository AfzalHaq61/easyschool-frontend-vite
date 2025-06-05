<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Popovers</h4>
        </div>
      </div>
      <div class="row">
        <!-- Default Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Default Popovers</h5>
            </div>
            <div class="card-body">
              <div class="btn-list popover-list">
                <a-popover
                  tabindex="0"
                  class="btn btn-outline-primary btn-wave me-1"
                  role="button"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  title="Popover Top"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >Popover Top
                </a-popover>
                <a-popover
                  tabindex="0"
                  class="btn btn-outline-primary btn-wave ms-1"
                  role="button"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  title="Popover Right"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >Popover Right</a-popover
                >
                <a-popover
                  tabindex="0"
                  class="btn btn-outline-primary btn-wave ms-2"
                  role="button"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  title="Popover Bottom"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >Popover Bottom</a-popover
                >
                <a-popover
                  tabindex="0"
                  class="btn btn-outline-primary btn-wave mt-2"
                  role="button"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  title="Popover Left"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >Popover Left</a-popover
                >
              </div>
            </div>
          </div>
        </div>
        <!-- /Default Popovers -->

        <!-- Basic Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic Popovers</h5>
            </div>
            <div class="card-body">
              <div class="popover-list">
                <a-popover title="Popover title" trigger="click" placement="right">
                  <template #content>
                    <span
                      >And here's some amazing content. It's very engaging. Right?</span
                    >
                  </template>
                  <b-button variant="primary">Click to toggle popover</b-button>
                </a-popover>
                <a-popover title="Popover title" trigger="click" placement="right">
                  <template #content>
                    <span
                      >And here's some amazing content. It's very engaging. Right?</span
                    >
                  </template>
                  <b-button variant="primary me-1 ms-1">Dismissible popover</b-button>
                </a-popover>
                <a-popover title="Popover title" trigger="hover" placement="top">
                  <template #content>
                    <span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span>
                  </template>
                  <b-button variant="primary me-1 mt-2">On Hover Tooltip</b-button>
                </a-popover>
              </div>
            </div>
          </div>
        </div>
        <!-- /Basic Popovers -->

        <!-- Colored Headers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Colored Headers</h5>
            </div>
            <div class="card-body">
              <div class="btn-list popover-list">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="header-primary"
                  title="Color Header"
                  data-bs-content="Popover with primary header."
                >
                  Header Primary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="header-secondary"
                  title="Color Header"
                  data-bs-content="Popover with secondary header."
                >
                  Header Secondary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-info btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-custom-class="header-info"
                  title="Color Header"
                  data-bs-content="Popover with info header."
                >
                  Header Info
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-custom-class="header-warning"
                  title="Color Header"
                  data-bs-content="Popover with warning header."
                >
                  Header Warning
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="header-success"
                  title="Color Header"
                  data-bs-content="Popover with success header."
                >
                  Header Success
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="header-danger"
                  title="Color Header"
                  data-bs-content="Popover with danger header."
                >
                  Header Danger
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Colored Headers -->

        <!-- Colored Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Colored Popovers</h5>
            </div>
            <div class="card-body">
              <div class="btn-list popover-list">
                <button
                  type="button"
                  class="btn btn-primary btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="popover-primary"
                  title="Color Background"
                  data-bs-content="Popover with primary background."
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-secondary"
                  title="Color Background"
                  data-bs-content="Popover with secondary background."
                >
                  Secondary
                </button>
                <button
                  type="button"
                  class="btn btn-info btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-custom-class="popover-info"
                  title="Color Background"
                  data-bs-content="Popover with info background."
                >
                  Info
                </button>
                <button
                  type="button"
                  class="btn btn-warning btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-custom-class="popover-warning"
                  title="Color Background"
                  data-bs-content="Popover with warning background."
                >
                  Warning
                </button>
                <button
                  type="button"
                  class="btn btn-success btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="popover-success"
                  title="Color Background"
                  data-bs-content="Popover with success background."
                >
                  Success
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-danger"
                  title="Color Background"
                  data-bs-content="Popover with danger background."
                >
                  Danger
                </button>
                <button
                  type="button"
                  class="btn btn-teal btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-custom-class="popover-teal"
                  title="Color Background"
                  data-bs-content="Popover with teal background."
                >
                  Teal
                </button>
                <button
                  type="button"
                  class="btn btn-purple btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-custom-class="popover-purple"
                  title="Color Background"
                  data-bs-content="Popover with purple background."
                >
                  Purple
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Colored Popovers -->

        <!-- Light Colored Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Light Colored Popovers</h5>
            </div>
            <div class="card-body">
              <div class="btn-list popover-list">
                <button
                  type="button"
                  class="btn btn-soft-primary btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="popover-primary-light"
                  title="Light Background"
                  data-bs-content="Popover with light primary background."
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-soft-secondary btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-secondary-light"
                  title="Light Background"
                  data-bs-content="Popover with light secondary background."
                >
                  Secondary
                </button>
                <button
                  type="button"
                  class="btn btn-soft-info btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-custom-class="popover-info-light"
                  title="Light Background"
                  data-bs-content="Popover with light info background."
                >
                  Info
                </button>
                <button
                  type="button"
                  class="btn btn-soft-warning btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-custom-class="popover-warning-light"
                  title="Light Background"
                  data-bs-content="Popover with light warning background."
                >
                  Warning
                </button>
                <button
                  type="button"
                  class="btn btn-soft-success btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-custom-class="popover-success-light"
                  title="Light Background"
                  data-bs-content="Popover with light success background."
                >
                  Success
                </button>
                <button
                  type="button"
                  class="btn btn-soft-danger btn-wave"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-danger-light"
                  title="Light Background"
                  data-bs-content="Popover with light danger background."
                >
                  Danger
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Light Colored Popovers -->

        <!-- Dismissible Popovers -->
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Dismissible Popovers</div>
            </div>
            <div class="card-body d-flex flex-wrap justify-content-between">
              <a-popover
                tabindex="0"
                class="btn btn-primary m-1"
                role="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="top"
                title="Dismissible popover"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                >Popover Dismiss
              </a-popover>
              <a-popover
                tabindex="0"
                class="btn btn-secondary m-1"
                role="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="right"
                title="Dismissible popover"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                >Popover Dismiss
              </a-popover>
              <a-popover
                tabindex="0"
                class="btn btn-info m-1"
                role="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="bottom"
                title="Dismissible popover"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                >Popover Dismiss
              </a-popover>
              <a-popover
                tabindex="0"
                class="btn btn-warning m-1"
                role="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="left"
                title="Dismissible popover"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                >Popover Dismiss
              </a-popover>
            </div>
          </div>
        </div>
        <!-- /Dismissible Popovers -->

        <!-- Disabled Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Disabled Popover</div>
            </div>
            <div class="card-body">
              <span
                class="d-inline-block"
                tabindex="0"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-content="Disabled popover"
              >
                <button class="btn btn-primary" type="button" disabled>
                  Disabled button
                </button>
              </span>
            </div>
          </div>
        </div>
        <!-- /Disabled Popovers -->

        <!-- Icon Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Icon Popovers</div>
            </div>
            <div class="card-body">
              <a-popover
                class="me-4"
                href="javascript:void(0)"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-custom-class="popover-primary only-body"
                data-bs-content="This popover is used to provide details about this icon."
              >
                <vue-feather type="alert-circle" class="text-primary"></vue-feather>
              </a-popover>
              <a-popover
                class="me-4"
                href="javascript:void(0)"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-custom-class="popover-secondary only-body"
                data-bs-content="This popover is used to provide information about this icon."
              >
                <vue-feather type="help-circle" class="text-secondary"></vue-feather>
              </a-popover>
            </div>
          </div>
        </div>
        <!-- /Icon Popovers -->
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  data() {
    return {};
  },
};
</script>
