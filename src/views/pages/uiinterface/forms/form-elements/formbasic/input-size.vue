<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Basic Inputs</h5>
    </div>
    <div class="card-body">
      <b-form action="#">
        <div class="form-group row">
          <label class="col-form-label col-md-2">Text Input</label>
          <div class="col-md-10 mb-3">
            <b-form-input type="text" class="form-control"></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Password</label>
          <div class="col-md-10 mb-3">
            <b-form-input type="password" class="form-control"></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Disabled Input</label>
          <div class="col-md-10 mb-3">
            <b-form-input
              type="text"
              class="form-control"
              disabled="disabled"
            ></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Readonly Input</label>
          <div class="col-md-10 mb-3">
            <b-form-input
              type="text"
              class="form-control"
              placeholder="readonly"
            ></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Placeholder</label>
          <div class="col-md-10 mb-3">
            <b-form-input
              type="text"
              class="form-control"
              placeholder="Placeholder"
            ></b-form-input>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">File Input</label>
          <div class="col-md-10 mb-3">
            <input class="form-control" type="file" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Default Select</label>
          <div class="col-md-10 mb-3">
            <vue-select :options="Select" id="select" placeholder="-- Select --" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Radio</label>
          <div class="col-md-10 mb-3">
            <div class="radio">
              <label> <input type="radio" name="radio" /> Option 1 </label>
            </div>
            <div class="radio">
              <label> <input type="radio" name="radio" /> Option 2 </label>
            </div>
            <div class="radio">
              <label> <input type="radio" name="radio" /> Option 3 </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Checkbox</label>
          <div class="col-md-10 mb-3">
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> Option 1 </label>
            </div>
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> Option 2 </label>
            </div>
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> Option 3 </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Textarea</label>
          <div class="col-md-10 mb-3">
            <b-form-textarea
              id="textarea"
              v-model="text"
              rows="5"
              max-rows="6"
              placeholder="Enter text here"
            ></b-form-textarea>
          </div>
        </div>
        <div class="form-group mb-0 row">
          <label class="col-form-label col-md-2">Input Addons</label>
          <div class="col-md-10">
            <div class="input-group">
              <span class="input-group-text">$</span>
              <b-form-input class="form-control" type="text"></b-form-input>
              <b-button variant="primary">Button</b-button>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Select: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      text: "",
    };
  },
  mounted() {},
};
</script>
