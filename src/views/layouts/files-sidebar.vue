<template>
  <div class="stickysidebar">
    <aside class="card file-manager-sidebar mb-0">
      <h5 class="d-flex align-items-center">
        <span class="me-2 d-flex align-items-center"
          ><vue-feather type="folder" class="feather-20"></vue-feather></span
        >Files
      </h5>
      <div class="dropdown">
        <a
          href="javascript:void(0);"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="dropset btn btn-primary mb-3 btn-icon"
        >
          <span class="me-3 w-auto btn-icon d-flex align-items-center"
            ><vue-feather type="plus-circle" class="feather-16"></vue-feather></span
          >New
        </a>
        <ul class="dropdown-menu">
          <li data-bs-toggle="modal" data-bs-target="#upload-file">
            <a href="javascript:void(0);" class="dropdown-item"
              ><vue-feather type="upload-cloud" class="feather-16 me-2"></vue-feather>Upload
              File</a
            >
          </li>
          <li data-bs-toggle="modal" data-bs-target="#upload-folder">
            <a href="javascript:void(0);" class="dropdown-item"
              ><vue-feather type="folder" class="feather-16 me-2"></vue-feather>Upload
              Folder</a
            >
          </li>
          <li data-bs-toggle="modal" data-bs-target="#create-folder">
            <a href="javascript:void(0);" class="dropdown-item"
              ><vue-feather type="folder-minus" class="feather-16 me-2"></vue-feather>Create
              folder</a
            >
          </li>
        </ul>
      </div>

      <ul class="mb-5">
        <li>
          <router-link to="/application/file-manager" class="active"
            ><span class="me-2 btn-icon"
              ><vue-feather type="file-text" class="feather-16"></vue-feather></span
            >My Files</router-link
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="star" class="feather-16"></vue-feather></span
            >Google Drive</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="send" class="feather-16"></vue-feather></span
            >Dropbox</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="file" class="feather-16"></vue-feather></span
            >Shared With Me</a
          >
        </li>
        <li>
          <a to="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="file" class="feather-16"></vue-feather></span
            >Document</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="clock" class="feather-16"></vue-feather></span
            >Recent</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="star" class="feather-16"></vue-feather></span
            >Favourites</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="target" class="feather-16"></vue-feather></span
            >Archived</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="trash-2" class="feather-16"></vue-feather></span
            >Deleted</a
          >
        </li>
        <li>
          <a href="javascript:void(0);"
            ><span class="me-2 btn-icon"
              ><vue-feather type="settings" class="feather-16"></vue-feather></span
            >Settings</a
          >
        </li>
      </ul>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <span class="me-2 btn-icon"
            ><vue-feather type="hard-drive" class="feather-16"></vue-feather
          ></span>
          <h6>Storage</h6>
        </div>
        <span>70%</span>
      </div>
      <div class="progress my-2">
        <div
          class="progress-bar progress-bar bg-danger"
          role="progressbar"
          style="width: 75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>78.5 GB of 1 TB Free Used</span>
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
