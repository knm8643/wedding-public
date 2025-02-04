<template>
  <div class="banner-wrap">
    <div class="image-wrap">
      <img class="content-image" :class="{ 'animate-image': isImageVisible }" src="../../../assets/images/09.jpg" alt="섹션 이미지" />
      <div class="content-main-font" :class="{ 'animate-text': isTextVisible }">
        <p>우리의 이야기<br />지금부터 시작됩니다</p>
      </div>
    </div>
    <div class="dim"></div>
  </div>
</template>

<script>
export default {
  name: "BigBannerPlus",
  data() {
    return {
      isImageVisible: false,
      isTextVisible: false,
    };
  },
  mounted() {
    // 이미지 먼저 표시
    setTimeout(() => {
      this.isImageVisible = true;
      setTimeout(() => {
        this.isTextVisible = true;
      }, 400);
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
.banner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  .image-wrap {
    position: relative;
    width: 100%;
    z-index: 1;
    overflow: hidden;

    .content-image {
      aspect-ratio: 16 / 9;
      height: 75vh;
      width: 100%;
      object-fit: cover;
      transform: translateY(-20px);
      opacity: 0;
      transition: opacity 1.2s ease, transform 1.2s ease;
      &.animate-image {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .content-main-font {
      position: absolute;
      top: 40%;
      z-index: 10;
      width: 100%;
      text-align: center;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1.2s ease, transform 1.2s ease;

      &.animate-text {
        opacity: 1;
        transform: translateY(0);
      }

      p {
        font-family: 'GamjaFlower-Regular', sans-serif!important;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 1.6;
        color: #ffffff;
        -webkit-text-stroke: 1px #FFC0CB;
        margin: 0;
      }
    }
  }

  .dim {
    position: absolute;
    z-index: 7;
    width: 100%;
    height: 200px;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #ffffff 100%);
  }
}
</style>