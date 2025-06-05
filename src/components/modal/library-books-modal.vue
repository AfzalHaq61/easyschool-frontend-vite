<template>
  <!-- Add Book -->
  <div class="modal fade" id="add_library_book">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Book</h4>
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
                  <label class="form-label">Book Name</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Book No</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Rack No</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Publisher</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Author</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Subject</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Qty</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Available</label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Price</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Post Date</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Book -->

  <!-- Edit Book -->
  <div class="modal fade" id="edit_library_book">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Book</h4>
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
                  <label class="form-label">Book Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Book Name"
                    value="Echoes of Eternity"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Book No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Book No"
                        value="501"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Rack No</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Rack Name"
                        value="6550"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Publisher</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Publisher"
                    value="Aurora Press"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Author</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Author"
                    value=" Isabella Rivers"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Subject"
                    value="History"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Qty</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Qty"
                        value="150"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Available</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Available"
                        value="120"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Price"
                    value="$300"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Post Date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Post Date"
                    value="25 Apr 2024"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Book -->

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
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/library/library-books");
    },
  },
};
</script>
