<template>
  <!-- Files Toogle Slide -->
  <div class="toggle-sidebar">
    <div class="d-flex align-items-center justify-content-between head">
      <h4>File Preview</h4>
      <div class="d-flex align-items-center">
        <a href="javascript:void(0);" class="me-2 d-flex align-items-center"
          ><i class="fa fa-star"></i
        ></a>
        <a href="javascript:void(0);" class="me-2 d-flex align-items-center"
          ><i data-feather="trash-2" class="feather-16 text-center text-danger"></i
        ></a>
        <a
          href="javascript:void(0);"
          class="sidebar-closes d-flex align-items-center"
          aria-hidden="true"
          ><i data-feather="x-circle" class="feather-26 color-primary"></i
        ></a>
      </div>
    </div>
    <div class="text-center">
      <a href="javascript:void(0);"
        ><img src="@/assets/img/file-manager/folder-lg.png" alt="Folder"
      /></a>
      <h5>Website Backup for the Design team</h5>
      <p>File Size : 616 MB</p>
    </div>

    <div
      class="nav nav-tabs d-flex align-items-center justify-content-between py-4 mb-4"
      id="nav-tab"
      role="tablist"
    >
      <a
        class="nav-link flex-fill active btn btn-light me-2 text-center"
        id="nav-home-tab"
        data-bs-toggle="tab"
        href="#nav-home"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
        ><i data-feather="list" class="feather-16 me-2 text-center"></i>Details</a
      >
      <a
        class="nav-link flex-fill btn btn-light"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        href="#nav-profile"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
        ><i data-feather="clock" class="feather-16 me-2"></i>Activity</a
      >
    </div>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <h5 class="mb-4 d-flex align-items-center">
          <i data-feather="edit" class="feather-20 me-2"></i>Properties
        </h5>
        <ul class="seprator-lg">
          <li class="mb-4">
            <h6>File Name</h6>
            <p>Website Backup for the Designteam</p>
          </li>
          <li class="mb-4">
            <h6>File Type</h6>
            <p>Folder</p>
          </li>
          <li class="mb-4">
            <h6>Size</h6>
            <p>616 MB</p>
          </li>
          <li class="mb-4">
            <h6>Created</h6>
            <p>22 July 2023, 08:30 PM</p>
          </li>
          <li class="mb-4">
            <h6>Location</h6>
            <p class="location d-inline-flex align-items-center">
              <i data-feather="hard-drive" class="feather-16 me-1"></i>Drive
            </p>
          </li>
          <li class="mb-4">
            <h6>File Name</h6>
            <p>23 July 2023, 08:30 PM</p>
          </li>
          <li class="mb-4">
            <h6>Opened On</h6>
            <p>28 July 2023, 06:40 PM</p>
          </li>
          <li>
            <div class="row">
              <!-- Editor -->
              <div class="col-lg-12">
                <div class="input-blocks summer-description-box transfer">
                  <label>Description</label>
                  <div id="summernote3">
                    <ckeditor
                      :editor="editor"
                      v-model="editorData"
                      :config="editorConfig"
                    ></ckeditor>
                  </div>
                  <p>Maximum 60 Characters</p>
                </div>
              </div>
              <!-- /Editor -->
            </div>
          </li>
        </ul>
        <h5 class="mb-4 d-flex align-items-center">
          <i data-feather="user" class="feather-20 me-2"></i>Who has access
        </h5>
        <div class="d-flex align-items-center justify-content-between avatar-wrap">
          <div class="avatar-access d-flex align-items-center mb-4">
            <span>
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Member 1"
                data-bs-original-title="Member 1"
                ><img
                  src="@/assets/img/profiles/avatar-01.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
            </span>
            <span>
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Member 2"
                data-bs-original-title="Member 2"
                ><img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
            </span>
            <span>
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Member 3"
                data-bs-original-title="Member 3"
                ><img
                  src="@/assets/img/profiles/avatar-03.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
            </span>
            <span>
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Member 4"
                data-bs-original-title="Member 4"
                ><img
                  src="@/assets/img/profiles/avatar-04.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
            </span>
            <span>
              <a
                href="javascript:void(0);"
                class="avatar-md add d-flex align-items-center justify-content-center"
                ><i data-feather="plus" class="feather-16 me-1"></i
              ></a>
            </span>
          </div>
        </div>
        <p>Owned by Andrew. Shared with James, Fin, Davis</p>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <h5 class="mb-4 d-flex align-items-center">
          <i data-feather="calendar" class="feather-20 me-2"></i>This Week
        </h5>
        <ul class="mb-4">
          <li class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-01.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <p>Andrew commented on 1 items <br />3:39 PM Jul 19</p>
            </div>
            <p class="d-flex align-items-center location border-0">
              <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />Website
              Backup for the Design team
            </p>
          </li>
          <li class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <p>Drake shared an item<br />3:39 PM Jul 19</p>
            </div>
            <p class="d-flex align-items-center location border-0">
              <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />Website
              Backup for the Design team
            </p>
          </li>
          <li class="mb-2">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-03.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <div>
                <p class="mb-0 text-secondary">Melvin</p>
                <p class="mb-0">Commentor</p>
              </div>
            </div>
          </li>
          <li class="mb-2">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-04.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <div>
                <p class="mb-0 text-secondary">Drake</p>
                <p class="mb-0">Editor</p>
              </div>
            </div>
          </li>
        </ul>
        <h5 class="mb-4 d-flex align-items-center">
          <i data-feather="calendar" class="feather-20 me-2"></i>Last Month
        </h5>
        <ul class="mb-4">
          <li class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-01.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <p>Andrew commented on 1 items <br />3:39 PM Jul 19</p>
            </div>
            <p class="d-flex align-items-center location border-0">
              <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />Website
              Backup for the Design team
            </p>
          </li>
          <li class="mb-4">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <p>Drake shared an item<br />3:39 PM Jul 19</p>
            </div>
            <p class="d-flex align-items-center location border-0">
              <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />Website
              Backup for the Design team
            </p>
          </li>
          <li class="mb-2">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-03.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <div>
                <p class="mb-0 text-secondary">Melvin</p>
                <p class="mb-0">Commentor</p>
              </div>
            </div>
          </li>
          <li class="mb-2">
            <div class="d-flex align-items-center mb-2">
              <a href="javascript:void(0);" class="me-3"
                ><img
                  src="@/assets/img/profiles/avatar-04.jpg"
                  alt="Avatar"
                  class="avatar-md"
              /></a>
              <div>
                <p class="mb-0 text-secondary">Drake</p>
                <p class="mb-0">Editor</p>
              </div>
            </div>
          </li>
        </ul>
        <a href="javascript:void(0);" class="text-primary show-all"
          ><i data-feather="plus-circle" class="feather-20 me-2"></i>Show All</a
        >
      </div>
    </div>
  </div>
  <!-- Files Toogle Slide -->

  <!-- Upload File -->
  <div
    class="modal fade modal-default pos-modal upload-modal"
    id="upload-file"
    aria-labelledby="upload-file"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header p-4">
          <h5>Upload File</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <div class="drag-drop text-center mb-4">
            <div class="upload">
              <a href="javascript:void(0);"
                ><img src="@/assets/img/icons/drag-drop.svg" alt="Img"
              /></a>
              <p>Drag and drop a <a href="javascript:void(0);">file to upload</a></p>
            </div>
            <input type="file" multiple="" />
          </div>

          <div class="d-flex align-items-center justify-content-between">
            <p>3 of 1 files Uploaded</p>
            <span>70%</span>
          </div>
          <div class="progress mt-2 mb-4">
            <div
              class="progress-bar progress-bar bg-success"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <ul>
            <li class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center w-85">
                <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />
                <div class="flex-fill">
                  <h6>
                    <a href="javascript:void(0);"
                      >latest-version.zip<i
                        data-feather="check-circle"
                        class="ms-2 feather-16"
                      ></i
                    ></a>
                  </h6>
                  <span>616 MB</span>
                </div>
              </div>
              <a href="javascript:void(0);" class="text-danger text-right"
                ><i data-feather="trash-2" class="feather-16"></i
              ></a>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center w-85">
                <img src="@/assets/img/icons/xls.svg" alt="Folder" class="me-2" />
                <div class="flex-fill">
                  <h6>
                    <a href="javascript:void(0);">Update work history.xls</a>
                  </h6>
                  <span>616 MB</span>
                  <div class="progress mt-2">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style="width: 75%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="text-danger me-2 d-flex align-items-center"
                  ><i data-feather="trash-2" class="feather-16"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="text-default d-flex align-items-center"
                  ><i data-feather="pause-circle" class="feather-16"></i
                ></a>
              </div>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center w-85">
                <img src="@/assets/img/icons/zip.svg" alt="Folder" class="me-2" />
                <div class="flex-fill">
                  <h6><a href="javascript:void(0);">Updated Project.zip</a></h6>
                  <span>616 MB</span>
                  <div class="progress mt-2">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="text-danger me-2 d-flex align-items-center"
                  ><i data-feather="trash-2" class="feather-16"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="text-default d-flex align-items-center"
                  ><i data-feather="play-circle" class="feather-16"></i
                ></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- /Upload File -->

  <!-- Upload Folder -->
  <div
    class="modal fade modal-default pos-modal upload-modal"
    id="upload-folder"
    aria-labelledby="upload-folder"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header p-4">
          <h5>Upload File</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <div class="drag-drop text-center mb-4">
            <div class="upload">
              <a href="javascript:void(0);"
                ><img src="@/assets/img/icons/drag-drop.svg" alt="Img"
              /></a>
              <p>Drag and drop a <a href="javascript:void(0);">file to upload</a></p>
            </div>
            <input type="file" multiple="" />
          </div>

          <div class="d-flex align-items-center justify-content-between">
            <p>3 of 3 files Uploaded</p>
            <span>100%</span>
          </div>
          <div class="progress mt-2 mb-4">
            <div
              class="progress-bar progress-bar bg-success"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <ul>
            <li class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center w-85">
                <img src="@/assets/img/icons/folder.svg" alt="Folder" class="me-2" />
                <div class="flex-fill">
                  <h6>
                    <a href="javascript:void(0);"
                      >latest-version<i
                        data-feather="check-circle"
                        class="ms-2 feather-16"
                      ></i
                    ></a>
                  </h6>
                  <span>616 MB</span>
                </div>
              </div>
              <a href="javascript:void(0);" class="text-danger text-right"
                ><i data-feather="trash-2" class="feather-16"></i
              ></a>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center w-85">
                <img src="@/assets/img/icons/xls.svg" alt="Folder" class="me-2" />
                <div class="flex-fill">
                  <h6>
                    <a href="javascript:void(0);"
                      >Update work history.xls<i
                        data-feather="trash-2"
                        class="feather-16"
                      ></i
                    ></a>
                  </h6>
                  <span>16 MB</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="text-danger me-2"
                  ><i data-feather="trash-2" class="feather-16"></i
                ></a>
                <a href="javascript:void(0);" class="text-default"
                  ><i data-feather="pause-circle" class="feather-16"></i
                ></a>
              </div>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center w-85">
                <img src="@/assets/img/icons/zip.svg" alt="Folder" class="me-2" />
                <div class="flex-fill">
                  <h6>
                    <a href="javascript:void(0);"
                      >updated project.zip<i data-feather="trash-2" class="feather-16"></i
                    ></a>
                  </h6>
                  <span>14 MB</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="text-danger me-2"
                  ><i data-feather="trash-2" class="feather-16"></i
                ></a>
                <a href="javascript:void(0);" class="text-default"
                  ><i data-feather="play-circle" class="feather-16"></i
                ></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer d-sm-flex justify-content-end">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Clear
          </button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Upload Folder -->

  <!-- Upload Folder -->
  <div
    class="modal fade modal-default pos-modal upload-message"
    id="upload-message"
    aria-labelledby="upload-message"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header p-4">
          <h5>Upload File</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <div class="d-flex align-items-center justify-content-between">
            <p>3 of 3 files Uploaded</p>
            <span>100%</span>
          </div>
          <div class="progress mt-2 mb-4">
            <div
              class="progress-bar progress-bar bg-success"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="modal-footer d-sm-flex justify-content-end">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Clear
          </button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Upload Folder -->

  <!-- Create Folder -->
  <div
    class="modal fade modal-default pos-modal"
    id="create-folder"
    aria-labelledby="create-folder"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header p-4">
          <h5>Create Folder</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <div class="row">
            <div class="col-12">
              <label class="form-label">Folder Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-sm-flex justify-content-end">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary">Create Folder</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Create Folder -->
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
    };
  },
};
</script>
