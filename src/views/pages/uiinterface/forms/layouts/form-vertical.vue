<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">Vertical Form</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic Form</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Repeat Password</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Address Form</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="mb-3">
                  <label class="form-label">Address Line 1</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Address Line 2</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">City</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">State</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Country</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Postal Code</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Two Column Vertical Form</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <h5 class="card-title">Personal Information</h5>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Blood Group</label>
                      <vue-select
                        :options="Verticalblood"
                        id="verticalblood"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="d-block">Gender:</label>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_male"
                          value="option1"
                        />
                        <label class="form-check-label" for="gender_male">Male</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_female"
                          value="option2"
                        />
                        <label class="form-check-label" for="gender_female">Female</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Username</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Repeat Password</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <h5 class="card-title">Postal Address</h5>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Address Line 1</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Address Line 2</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">State</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">City</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Country</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Postal Code</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Two Column Vertical Form</h5>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="row">
                  <div class="col-md-6">
                    <h5 class="card-title">Personal details</h5>
                    <div class="mb-3">
                      <label class="form-label">Name:</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Password:</label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">State:</label>
                      <vue-select
                        :options="SelectState"
                        id="selectstate"
                        placeholder="Select State"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Your Message:</label>
                      <textarea
                        rows="5"
                        cols="5"
                        class="form-control"
                        placeholder="Enter message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title">Personal details</h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">First Name:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Last Name:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Email:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Phone:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">Address line:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Country:</label>
                          <vue-select
                            :options="SelectCountry"
                            id="selectcountry"
                            placeholder="Select Country"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label>State/Province:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">ZIP code:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">City:</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Vertical Forms with icon</div>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="form-text1" class="form-label fs-14">Enter name</label>
                <div class="input-group">
                  <div class="input-group-text"><i class="feather-user"></i></div>
                  <input
                    type="text"
                    class="form-control"
                    id="form-text1"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="form-password1" class="form-label fs-14"
                  >Enter Password</label
                >
                <div class="input-group">
                  <div class="input-group-text"><i class="feather-lock"></i></div>
                  <input
                    type="password"
                    class="form-control"
                    id="form-password1"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="form-password1" class="form-label fs-14"
                  >Enter Repeat Password</label
                >
                <div class="input-group">
                  <div class="input-group-text"><i class="feather-lock"></i></div>
                  <input
                    type="password"
                    class="form-control"
                    id="form-password1"
                    placeholder=""
                  />
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Horizontal form label sizing</div>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="colFormLabelSm" class="col-form-label col-form-label-sm"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="col-form-label-sm"
                />
              </div>
              <div class="mb-3">
                <label for="colFormLabel" class="col-form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="colFormLabel"
                  placeholder="col-form-label"
                />
              </div>
              <div>
                <label for="colFormLabelLg" class="col-form-label col-form-label-lg"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="col-form-label-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Verticalblood: ["Select", "A+", "O+", "B+", "AB+"],
      SelectState: ["California", "Texas", "Florida"],
      SelectCountry: ["Select Country", "USA", "France", "India", "Spain"],
    };
  },
};
</script>
