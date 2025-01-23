<template>
  <div
      class="banner-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="banner"
  >
    <div class="content-main-font">
      <p>25.02.08</p>
    </div>

    <div class="image-wrap">
      <img class="content-image" src="../../../assets/images/01.jpg" alt="섹션 이미지" />
    </div>

    <div class="content-description">
      <div class="description-header">
        <h2>충디딥</h2>
        <p>그리고</p>
        <h2>유디딥</h2>
      </div>
      <div class="description-info">
        <span>서울 용산구 이태원로 29</span>
        <p>로얄파크컨벤션(홀) 1층 13시 00분</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigBannerOrigin",
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
.banner-wrap{
  border-radius: 4px;
  padding: 84px 0 64px;

  .content-main-font{
    width: 140px;
    margin: 0 auto;
    padding-bottom: 4px;
    border-bottom: 0.6px solid #b0b0b0;
    text-align: center;

    p{
      color: #191c21;
      font-weight: 700;
      font-size: 21px;
      white-space: nowrap;
      padding: 0 12px;
    }
  }

  .image-wrap{
    padding: 54px 0;
    overflow: hidden;

    .content-image {
      border-radius: 4px;
      max-height: 475px;
      width: 100%;
      object-fit: cover;
    }
  }

  .content-description {
    margin-top: 8px;
    font-size: 16px;
    color: #333;
    text-align: center;

    .description-header{
      gap: 14px;
      justify-content: center;
      display: flex;
      align-items: flex-end;
      font-weight: 500;
      padding-bottom: 26px;
      h2{
        font-weight: 700;
        font-size: 26px;
        color: #191c21;
      }
      p{
        color: #b0b0b0;
      }
    }

    .description-info {
      color: #191c21;
      line-height: 1.6;
      p{
        padding-bottom: 4px;
      }
    }
  }
}

/* 애니메이션 */
.banner-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.banner-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>