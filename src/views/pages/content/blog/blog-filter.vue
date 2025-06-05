<template>
  <div class="d-flex justify-content-between flex-wrap">
    <div class="dropdown mb-3 me-2">
      <a
        href="javascript:void(0);"
        class="btn btn-outline-light bg-white dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        ><i class="ti ti-filter me-2"></i>Filter</a
      >
      <div class="dropdown-menu drop-width">
        <form @submit.prevent="submitForm">
          <div class="d-flex align-items-center border-bottom p-3">
            <h4>Filter</h4>
          </div>
          <div class="p-3 border-bottom">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue-select
                    :options="CategorSelec"
                    id="categorselec"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Author</label>
                  <vue-select
                    :options="AuthoSelec"
                    id="authoselec"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue-select
                    :options="StatSelecOne"
                    id="statselecone"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label">Added Date</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 d-flex align-items-center justify-content-end">
            <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
          </div>
        </form>
      </div>
    </div>
    <div class="dropdown mb-3">
      <a
        href="javascript:void(0);"
        class="btn btn-outline-light bg-white dropdown-toggle"
        data-bs-toggle="dropdown"
        ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
      </a>
      <ul class="dropdown-menu p-3">
        <li>
          <a href="javascript:void(0);" class="dropdown-item rounded-1"> Ascending </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="dropdown-item rounded-1"> Descending </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="dropdown-item rounded-1">
            Recently Viewed
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class="dropdown-item rounded-1">
            Recently Added
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      CategorSelec: ["Select", "Education", "Clear Goals", "Advice"],
      AuthoSelec: ["Select", "Jordan", "Rubiaana", "Daniel"],
      StatSelecOne: ["Select", "Active", "Inactive"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/blogs/blog");
    },
  },
};
</script>
