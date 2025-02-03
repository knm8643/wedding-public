<template>
  <div class="banner-wrap">
    <div class="content-main-font" :class="{ 'animate-text': isTextVisible }">
      <p>우리의 이야기<br />지금부터 시작됩니다</p>
    </div>
    <div class="image-wrap" :class="{ 'animate-image': isImageVisible }">
      <img class="content-image" src="../../../assets/images/09.jpg" alt="섹션 이미지" />
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
    this.isImageVisible = true;

    setTimeout(() => {
      this.isTextVisible = true;
    }, 400);
  },
};
</script>

<style lang="scss" scoped>
.banner-wrap {
  position: relative;
  padding: 0 0 4px;

  .content-main-font {
    position: absolute;
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
      position: relative;
      z-index: 10;
      width: 100%;
      height: 94px;
      top: 217px;
      font-family: 'Love Ya Like A Sister', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 145.74%;
      color: #ffffff;
      -webkit-text-stroke: 1px #FFC0CB;
    }
  }

  .image-wrap {
    position: relative;
    z-index: 5;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1.2s ease, transform 1.2s ease;
    overflow: hidden;

    &.animate-image {
      opacity: 1;
      transform: translateY(0);
    }

    .content-image {
      box-sizing: border-box;
      border: 1px solid #FFC0CB;
      max-height: 507px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .dim {
    position: absolute;
    z-index: 7;
    width: 100%;
    height: 105px;
    left: 0;
    top: 428px;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #ffffff 100%);
  }
}
</style>