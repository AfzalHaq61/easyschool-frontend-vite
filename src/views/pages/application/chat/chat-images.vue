<template>
  <ul class="nav mb-0">
    <li v-for="(image, index) in galleryImages" :key="index" @click="() => show(index)">
      <div class="image-download-col me-1">
        <a href="javascript:;" data-fancybox="gallery" class="fancybox group-img-chat">
          <img :src="require(`@/assets/img/media/${image.src}`)" alt="" />
        </a>
      </div>
    </li>

    <li
      v-for="(image1, index1) in galleryImages1"
      :key="index1"
      @click="() => show(index1)"
    >
      <div class="image-download-col image-not-download">
        <a href="javascript:;" data-fancybox="gallery" class="fancybox group-img-chat">
          <img :src="require(`@/assets/img/media/${image1.src}`)" alt="" />
          <span>10+</span>
        </a>
      </div>
    </li>
  </ul>

  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="
      galleryImages.map((image) => ({ src: require(`@/assets/img/media/${image.src}`) }))
    "
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  ></vue-easy-lightbox>

  <vue-easy-lightbox
    :visible1="visible1"
    :index1="index1"
    :imgs1="
      galleryImages1.map((image1) => ({
        src: require(`@/assets/img/media/${image1.src}`),
      }))
    "
    @hide="visible1 = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  ></vue-easy-lightbox>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      index: 2,
      galleryImages: [
        {
          id: 1,
          src: "media-02.jpg",
        },
        {
          id: 2,
          src: "media-03.jpg",
        },
      ],
      visible1: false,
      index1: 1,
      galleryImages1: [
        {
          id: 1,
          src: "media-01.jpg",
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handlePrev() {},
    handleNext() {},
  },
};
</script>
