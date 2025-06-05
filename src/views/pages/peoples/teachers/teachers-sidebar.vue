<template>
  <div class="stickysidebar">
    <div class="card border-white">
      <div class="card-header">
        <div class="d-flex align-items-center flex-wrap row-gap-3">
          <div
            class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
          >
            <img src="@/assets/img/teachers/teacher-01.jpg" class="img-fluid" alt="img" />
          </div>
          <div>
            <h5 class="mb-1">Teresa</h5>
            <p class="text-primary mb-1">T849126</p>
            <p>Joined : 25 May 24</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="mb-3">Basic Information</h5>
        <dl class="row mb-0">
          <dt class="col-6 fw-normal mb-3">Class & Section</dt>
          <dd class="col-6 text-dark mb-3">III, A</dd>
          <dt class="col-6 fw-normal mb-3">Subject</dt>
          <dd class="col-6 text-dark mb-3">Physics</dd>
          <dt class="col-6 fw-normal mb-3">Gender</dt>
          <dd class="col-6 text-dark mb-3">Female</dd>
          <dt class="col-6 fw-normal mb-3">Blood Group</dt>
          <dd class="col-6 text-dark mb-3">O +ve</dd>
          <dt class="col-6 fw-normal mb-3">House</dt>
          <dd class="col-6 text-dark mb-3">Red</dd>
          <dt class="col-6 fw-normal mb-3">Language Known</dt>
          <dd class="col-6 text-dark mb-3">English</dd>
          <dt class="col-6 fw-normal mb-0">Language</dt>
          <dd class="col-6 text-dark mb-0">
            <span class="badge badge-light text-dark me-2">English</span
            ><span class="badge badge-light text-dark">Spanish</span>
          </dd>
        </dl>
      </div>
    </div>
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
    <div class="card border-white">
      <div class="card-body pb-1">
        <h5 class="mb-3">PAN Number / ID Number</h5>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center mb-3">
            <span
              class="avatar avatar-md bg-light-300 rounded me-2 flex-shrink-0 text-default"
              ><i class="ti ti-id"></i
            ></span>
            <div>
              <p class="text-dark">343445954908</p>
            </div>
          </div>
          <a class="btn btn-primary btn-icon btn-sm mb-3">
            <i class="ti ti-copy"></i>
          </a>
        </div>
      </div>
    </div>
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
  </div>
</template>
