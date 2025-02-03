<template>
  <div class="test">
    <div class="test1">
      <div
          v-for="(image, index) in images"
          :key="index"
      >
        <img :src="image.src" :alt="image.alt" />
        <p>{{ image.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import img10 from "@/assets/images/10.jpg";
import img11 from "@/assets/images/11.jpg";
import img12 from "@/assets/images/12.jpg";

export default {
  name: "PhotoPlusList",
  data() {
    return {
      images: [
        { src: img10, alt: "첫번째 이미지", text: "첫번째 이미지" },
        { src: img11, alt: "두번째 이미지", text: "두번째 이미지" },
        { src: img12, alt: "세번째 이미지", text: "세번째 이미지" },
      ],
    };
  },
};
</script>

<style scoped>
.test{
  text-align: center;
}
img {
  height: 375px;
  width: 245px;
}
</style>