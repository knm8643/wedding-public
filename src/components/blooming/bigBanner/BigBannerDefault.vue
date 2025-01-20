<template>
  <div
      class="banner-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="banner"
  >
    <div class="content-main-font">
      <p>2025. 02. 08</p>
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

    <div class="image-wrap">
      <img class="content-image" src="../../../assets/images/01.jpg" alt="섹션 이미지" />
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
.banner-wrap{
  border-radius: 4px;
  padding: 64px 0 4px;

  .content-main-font{
    font-family: 'Playfair Display', serif;
    margin: 0 auto;
    padding-bottom: 16px;
    text-align: center;

    p{
      color: #191c21;
      font-weight: 700;
      font-size: 18px;
      white-space: nowrap;
      padding: 0 12px;
    }
  }

  .image-wrap{
    padding: 24px 0 52px;
    overflow: hidden;
    margin: 0 12px;

    .content-image {
      border: 1px solid #666;
      outline: double 0.6px #666;
      outline-offset: -5px;
      border-radius: 4px;
      max-height: 475px;
      width: 100%;
      object-fit: cover;
    }
  }

  .content-description {
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 8px;
    font-size: 16px;
    color: #333;
    text-align: center;

    .description-header{
      gap: 9px;
      justify-content: center;
      display: flex;
      align-items: flex-end;
      padding-bottom: 46px;
      h2{
        font-weight: 500;
        font-size: 24px;
        color: #191c21;
      }
      p{
        color: #b0b0b0;
      }
    }

    .description-info {
      color: #191c21;
      line-height: 1.6;
      font-size: 14px;
      font-weight: 300;
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