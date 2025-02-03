<template>
  <div
      class="photo-wrap"
  >
    <div class="image-wrap first-image" ref="photo" :class="{ 'animate-visible': isVisible }">
      <img class="content-image" src="../../../assets/images/02.jpg" alt="섹션 이미지" />
      <p>충디딥</p>
    </div>
    <div
        class="image-wrap second-image"
        :class="{ 'animate-visible-second': isSecondImageVisible }"
    >
      <p>유디딥</p>
      <img class="content-image" src="../../../assets/images/03.jpg" alt="섹션 이미지" />
    </div>

    <div class="image-wrap-font" :class="{'animate-visible-font' : isFontVisible}">
      <h2>Gallery</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoPlus",
  data() {
    return {
      isVisible: false,
      isSecondImageVisible: false,
      isFontVisible:false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            setTimeout(() => {
              this.isSecondImageVisible = true;
              setTimeout(() => {
                this.isFontVisible = true;
              }, 500);
            }, 1000);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
    );
    observer.observe(this.$refs.photo);
  },
};
</script>

<style scoped>
.photo-wrap {
  opacity: 1;
}

.image-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .content-image {
    max-width: 252px;
    object-fit: cover;
  }

  p {
    font-family: 'Love Ya Like A Sister', sans-serif;
    font-size: 24px;
    color: #FF69B4;
    z-index: 10;
    width: 100%;
    text-align: center;
  }
}

.image-wrap-font{
  padding: 120px 0 155px;
  font-size: 32px;
  font-weight: 400;
  color: #FFC0CB;
  text-align: center;
  line-height: 1.6;
  -webkit-text-stroke: 1px #FF69B4;
  transform: translateY(-25px);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.image-wrap-font.animate-visible-font {
  opacity: 1;
  transform: translateY(0);
}

.first-image {
  opacity: 0;
  transform: translateY(-25px);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.first-image.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.second-image {
  transform: translateY(-25px);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.second-image.animate-visible-second {
  opacity: 1;
  transform: translateY(0);
}
</style>