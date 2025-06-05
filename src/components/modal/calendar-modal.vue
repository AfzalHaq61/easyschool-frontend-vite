<template>
  <!-- Add Event Modal -->
  <div id="add_event" class="modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Event</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="input-blocks">
              <label>Event Name <span class="text-danger">*</span></label>
              <input class="form-control" type="text" />
            </div>
            <div class="input-blocks">
              <label>Event Date <span class="text-danger">*</span></label>
              <div class="cal-icon">
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="submit-section">
              <button
                type="submit"
                class="btn btn-primary submit-btn"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Event Modal -->

  <!-- Add Category Modal -->
  <div class="modal fade" id="add_new_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Category</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-hidden="true"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label class="form-label">Category Name</label>
              <input
                class="form-control form-white"
                placeholder="Enter name"
                type="text"
                name="category-name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Choose Category Color</label>
              <vue-select
                :options="Category"
                id="categorysuccess"
                placeholder="Success"
              />
            </div>
            <div class="submit-section">
              <button
                type="submit"
                class="btn btn-primary save-category submit-btn"
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Category Modal -->
</template>

<script>
export default {
  data() {
    return {
      Category: ["Success", "Danger", "Info", "Primary", "Warning", "Inverse"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/application/calendar");
    },
  },
};
</script>
