<template>
  <!-- Add Expenses -->
  <div class="modal fade" id="add_expenses">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Expense</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Expense Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Expense Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue-select :options="CategSel" id="categsel" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date</label>
                  <input type="text" class="form-control" placeholder="Enter Date" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Amount</label>
                  <input type="text" class="form-control" placeholder="Enter Amount" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Invoice No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Invoice No"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Payment Method</label>
                  <vue-select :options="MethSel" id="methsel" placeholder="Select" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea rows="4" class="form-control" placeholder="text"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Expense</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Expenses -->

  <!-- Edit Expenses -->
  <div class="modal fade" id="edit_expenses">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Expense</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Expense Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Expense Name"
                    value="Monthly Electricity"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue-select
                    :options="EditCategSel"
                    id="editcategsel"
                    placeholder="Utilities"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Date"
                    value="25 Apr 2024"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Amount</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Amount"
                    value="$1000"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Invoice No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Invoice No"
                    value="INV681537"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Payment Method</label>
                  <vue-select
                    :options="EditMethSel"
                    id="editmethsel"
                    placeholder="Cash"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea rows="4" class="form-control" placeholder="text">
Electricity of April month</textarea
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Expenses -->

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
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      CategSel: ["Select", "Utilities", "Maintenance", "Sports"],
      MethSel: ["Select", "Cash", "Credit"],
      EditCategSel: ["Select", "Utilities", "Maintenance", "Sports"],
      EditMethSel: ["Select", "Cash", "Credit"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/accounts/expenses-list");
    },
  },
};
</script>
