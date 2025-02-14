<template>
  <div class="banner-wrap" :class="{ 'animate-visible': isVisible }" ref="banner">
    <div class="image-wrap">
      <img class="content-image" src="../../../assets/images/05.jpg" alt="섹션 이미지" />
    </div>

    <div class="content-description">
      <div class="description-header big_01">
        <h2>충디딥</h2>
        <p>·</p>
        <h2>유디딥</h2>
      </div>
      <div class="description-info text_02">
        <span class="location">
          2025년 11월 21일 토요일 오후 2시 00분
        </span>
        <p class="animated-underline">서울 로얄파크컨벤션 1층 일반 홀</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bigBannerDefault",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
    );
    observer.observe(this.$refs.banner);
  },
  methods: {
  },
};
</script>

<style scoped>
.banner-wrap{
  border-radius: 4px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.2s ease, transform 1.2s ease;
  width: 100%;

  .image-wrap {
    position: relative;
    width: 100%;
    height: 50vh;
    aspect-ratio: 16 / 9;
    background-color: transparent;
    overflow: hidden;

    .content-image {
      outline: double 0.6px #666;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      -webkit-mask-image: radial-gradient(ellipse 80% 100% at 50% 0, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
      mask-image: radial-gradient(ellipse 80% 100% at 50% 0, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    }
  }

  .content-description {
    margin-top: 4rem;
    font-size: 16px;
    color: #333;
    text-align: center;

    .description-header{
      gap: 9px;
      justify-content: center;
      display: flex;
      align-items: flex-end;
      padding-bottom: 26px;
    }

    .description-info {
      line-height: 2.4rem;
      p{
        padding-bottom: 4px;
      }
    }
  }
}

.banner-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>