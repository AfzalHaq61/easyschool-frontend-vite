<template>
  <div class="col-xxl-3 col-xl-4 theiaStickySidebar">
    <div class="card border-white">
      <div class="card-header">
        <div class="d-flex align-items-center flex-wrap row-gap-3">
          <div
            class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
          >
            <img src="@/assets/img/students/student-01.jpg" class="img-fluid" alt="img" />
          </div>
          <div class="overflow-hidden">
            <span class="badge badge-soft-success d-inline-flex align-items-center mb-1"
              ><i class="ti ti-circle-filled fs-5 me-1"></i>Active</span
            >
            <h5 class="mb-1 text-truncate">Janet Daniel</h5>
            <p class="text-primary">AD1256589</p>
          </div>
        </div>
      </div>

      <!-- Basic Information -->
      <div class="card-body">
        <h5 class="mb-3">Basic Information</h5>
        <dl class="row mb-0">
          <dt class="col-6 fw-normal mb-3">Roll No</dt>
          <dd class="col-6 text-dark mb-3">35013</dd>
          <dt class="col-6 fw-normal mb-3">Gender</dt>
          <dd class="col-6 text-dark mb-3">Female</dd>
          <dt class="col-6 fw-normal mb-3">Date Of Birth</dt>
          <dd class="col-6 text-dark mb-3">25 Jan 2008</dd>
          <dt class="col-6 fw-normal mb-3">Blood Group</dt>
          <dd class="col-6 text-dark mb-3">O +ve</dd>
          <dt class="col-6 fw-normal mb-3">Blood Group</dt>
          <dd class="col-6 text-dark mb-3">Red</dd>
          <dt class="col-6 fw-normal mb-3">Reigion</dt>
          <dd class="col-6 text-dark mb-3">Christianity</dd>
          <dt class="col-6 fw-normal mb-3">Caste</dt>
          <dd class="col-6 text-dark mb-3">Catholic</dd>
          <dt class="col-6 fw-normal mb-3">Category</dt>
          <dd class="col-6 text-dark mb-3">OBC</dd>
          <dt class="col-6 fw-normal mb-3">Mother tongue</dt>
          <dd class="col-6 text-dark mb-3">English</dd>
          <dt class="col-6 fw-normal mb-3">Language</dt>
          <dd class="col-6 text-dark mb-3">
            <span class="badge badge-light text-dark me-2">English</span
            ><span class="badge badge-light text-dark">Spanish</span>
          </dd>
        </dl>
        <a
          href="javascript:void(0);"
          data-bs-toggle="modal"
          data-bs-target="#add_fees_collect"
          class="btn btn-primary btn-sm w-100"
          >Add Fees</a
        >
      </div>
      <!-- /Basic Information -->
    </div>

    <!-- Primary Contact Info -->
    <div class="card border-white">
      <div class="card-body">
        <h5 class="mb-3">Primary Contact Info</h5>
        <div class="d-flex align-items-center mb-3">
          <span
            class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
            ><i class="ti ti-phone"></i
          ></span>
          <div>
            <span class="fs-12 mb-1">Phone Number</span>
            <p class="text-dark">+1 46548 84498</p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <span
            class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
            ><i class="ti ti-mail"></i
          ></span>
          <div>
            <span class="fs-12 mb-1">Email Address</span>
            <p class="text-dark">jan@example.com</p>
          </div>
        </div>
      </div>
    </div>
    <!-- /Primary Contact Info -->

    <!-- Sibiling Information -->
    <div class="card border-white">
      <div class="card-body">
        <h5 class="mb-3">Sibiling Information</h5>
        <div class="d-flex align-items-center bg-light-300 rounded p-3 mb-3">
          <span class="avatar avatar-lg">
            <img
              src="@/assets/img/students/student-06.jpg"
              class="img-fluid rounded"
              alt="img"
            />
          </span>
          <div class="ms-2">
            <h5>Ralph Claudia</h5>
            <p>III, B</p>
          </div>
        </div>
        <div class="d-flex align-items-center bg-light-300 rounded p-3">
          <span class="avatar avatar-lg">
            <img
              src="@/assets/img/students/student-07.jpg"
              class="img-fluid rounded"
              alt="img"
            />
          </span>
          <div class="ms-2">
            <h5>Julie Scott</h5>
            <p>V, A</p>
          </div>
        </div>
      </div>
    </div>
    <!-- /Sibiling Information -->

    <!-- Transport Information -->
    <div class="card border-white">
      <div class="card-body pb-1">
        <ul class="nav nav-tabs nav-tabs-bottom mb-3">
          <li class="nav-item">
            <a class="nav-link active" href="#hostel" data-bs-toggle="tab">Hostel</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#transport" data-bs-toggle="tab">Transportation</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="hostel">
            <div class="d-flex align-items-center mb-3">
              <span
                class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
                ><i class="ti ti-building-fortress fs-16"></i
              ></span>
              <div>
                <h6 class="mb-1">HI-Hostel, Floor</h6>
                <p class="text-primary">Room No : 25</p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="transport">
            <div class="d-flex align-items-center mb-3">
              <span
                class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
                ><i class="ti ti-bus fs-16"></i
              ></span>
              <div>
                <span class="fs-12 mb-1">Route</span>
                <p class="text-dark">Newyork</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <span class="fs-12 mb-1">Bus Number</span>
                  <p class="text-dark">AM 54548</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <span class="fs-12 mb-1">Pickup Point</span>
                  <p class="text-dark">Cincinatti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Transport Information -->
  </div>
</template>
