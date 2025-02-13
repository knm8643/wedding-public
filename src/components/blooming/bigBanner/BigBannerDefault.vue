<template>
  <div
      class="banner-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="banner"
  >

    <div class="image-wrap">
      <img class="content-image" src="../../../assets/images/08.jpg" alt="섹션 이미지" />
    </div>

    <div class="content-main-font">
      <p class="text_02">2025. 02. 08</p>
    </div>

    <div class="content-description">
      <div class="description-header text_03">
        <h2>충디딥</h2>
        <p>·</p>
        <h2>유디딥</h2>
      </div>
      <div class="description-info text_02">
        <span>서울 용산구 이태원로 29</span>
        <p>로얄파크컨벤션(홀) 1층 13시 00분</p>
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

  .content-main-font{
    margin: 0 auto;
    padding: 2rem 5rem 2rem;
    text-align: center;
    p{
      padding: 0.75rem 0;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      color: #191c21;
      letter-spacing: -0.5px;

      white-space: nowrap;
    }
  }

  .image-wrap{
    background-color: #ddd;
    padding-top: 20rem;
    position: relative;
    width: 100%;

    .content-image {
      outline: double 0.6px #666;
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0;
      color: transparent;
      display: block;
      object-fit: cover;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: inherit;
        mix-blend-mode: multiply;
      }
    }
  }

  .content-description {
    margin-top: 8px;
    font-size: 16px;
    color: #333;
    text-align: center;

    .description-header{
      gap: 9px;
      justify-content: center;
      display: flex;
      align-items: flex-end;
      padding-bottom: 26px;
      h2{
        font-weight: 500;
        font-size: 24px;
        color: #191c21;
      }

    }

    .description-info {
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