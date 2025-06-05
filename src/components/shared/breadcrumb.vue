<template>
  <div class="my-auto mb-2">
    <h3 class="page-title mb-1">{{ title }}</h3>
    <nav>
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <router-link to="/dashboard/">{{ text }}</router-link>
        </li>
        <li class="breadcrumb-item">{{ text1 }}</li>
        <li class="breadcrumb-item active" aria-current="page">{{ text2 }}</li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
    text2: {
      type: String,
      default: "",
    },
  },
};
</script>
