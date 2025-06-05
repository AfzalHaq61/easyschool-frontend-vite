<template>
  <!-- Login Details -->
  <div class="modal fade" id="login_detail">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Login Details</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="student-detail-info">
            <span class="student-img"
              ><img src="@/assets/img/teachers/teacher-01.jpg" alt="img"
            /></span>
            <div class="name-info">
              <h6>Teresa <span>III, A</span></h6>
            </div>
          </div>
          <div class="table-responsive custom-table no-datatable_length">
            <table class="table datanew">
              <thead class="thead-light">
                <tr>
                  <th>User Type</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Teacher</td>
                  <td>teacher20</td>
                  <td>teacher@53</td>
                </tr>
                <tr>
                  <td>Parent</td>
                  <td>parent53</td>
                  <td>parent@53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Login Details -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-body text-center">
            <span class="delete-icon">
              <i class="ti ti-trash-x"></i>
            </span>
            <h4>Confirm Deletion</h4>
            <p>
              You want to delete all the marked items, this cant be undone once you
              delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">
                Yes, Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/pages/profile");
    },
  },
};
</script>
