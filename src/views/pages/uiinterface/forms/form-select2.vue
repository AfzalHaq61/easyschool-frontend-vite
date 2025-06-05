<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Form Select2</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic Select2</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectOne" id="selectone" placeholder="Selection-1" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Multiple Select</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectTwo" id="selecttwo" placeholder="" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Single Select With Placeholder</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectThree" id="selectthree" placeholder="Texas" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Multiple Select With Placeholder</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectFour" id="selectfour" placeholder="Select" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Multiple Select With Placeholder</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectFive" id="selectfive" placeholder="" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <!-- Basic -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    Use select2() function on select element to convert it to Select 2.
                  </p>
                  <vue-select :options="SelectSix" id="selectsix" placeholder="Orange" />
                </div>
              </div>
            </div>
          </div>
          <!-- /Basic -->

          <!-- Nested -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Nested</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Add options inside the optgroups to for group options.</p>
                  <select class="form-control nested">
                    <optgroup label="Group1">
                      <option selected="selected">orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </optgroup>
                    <optgroup label="Group2">
                      <option>purple</option>
                      <option>orange</option>
                      <option>white</option>
                    </optgroup>
                    <optgroup label="Group3">
                      <option>white</option>
                      <option>purple</option>
                      <option>orange</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- /Nested -->

          <!-- Placeholder -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Placeholder</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Apply Placeholder by setting option placeholder option.</p>
                  <vue-select
                    :options="SelectSeven"
                    id="selectseven"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /Placeholder -->

          <!-- Tagging with multi-value -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Tagging with multi-value select boxes</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Set tags: true to convert select 2 in Tag mode.</p>
                  <select class="form-control tagging" multiple="multiple">
                    <option>orange</option>
                    <option>white</option>
                    <option>purple</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- /Tagging with multi-value -->
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Small Select2</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Use data('select2') function to get container of select2.</p>
                  <vue-select
                    :options="SelectEight"
                    id="selecteight"
                    placeholder="Orange"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Disabling options</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Disable Select using disabled attribute.</p>
                  <vue-select
                    :options="SelectNine"
                    id="selectnine"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Limiting the number of Tagging</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    Set maximumSelectionLength: 2 with tags: true to limit selectin in Tag
                    mode.
                  </p>
                  <select class="form-control tagging" multiple="multiple">
                    <option>orange</option>
                    <option>white</option>
                    <option>purple</option>
                  </select>
                </div>
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
      SelectOne: [
        "Selection-1",
        "Selection-2",
        "Selection-3",
        "Selection-4",
        "Selection-5",
      ],
      SelectTwo: ["Multiple-1", "Multiple-2", "Multiple-3", "Multiple-4", "Multiple-5"],
      SelectThree: ["Texas", "Georgia", "California", "Washington D.C", "Virginia"],
      SelectFour: ["Apple", "Mango", "Orange", "Guava", "Pineapple"],
      SelectFive: ["Apple", "Mango", "Orange", "Guava", "Pineapple"],
      SelectSix: ["Orange", "White", "Purple"],
      SelectSeven: ["First", "Second", "Third", "Fourth", "Fifth"],
      SelectEight: ["Orange", "White", "Purple"],
      SelectNine: ["First", "Second", "Third"],
    };
  },
};
</script>
