<template>
  <div
      class="intro-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="intro"
  >

    <div class="scroll-line" :class="{ 'line-visible': isVisible }"></div>
    <!-- 타이틀 제목 -->
    <div class="content-title">
      저희 결혼합니다
    </div>


    <!-- 내용 -->
    <div class="content">
      <p>
        사랑이 깊어 결실을 맺고
      </p>
      <p style="padding-bottom: 24px">
        저희 두 사람이
      </p>
      <p>
        새로운 여정을 함께 시작하려 합니다.
      </p>
      <p>
        세상에서 가장 특별한 이 날,
      </p>
      <p style="padding-bottom: 24px">
        소중한 당신을
      </p>
      <p>
        기쁜 마음으로 초대합니다.
      </p>
      <p>
        저희의 새로운 시작을 밝혀 주시길 바랍니다.
      </p>
      <p>
        당신을 기다리겠습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "introDefault",
  data() {
    return {
      isVisible: false, // 애니메이션 트리거
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
    observer.observe(this.$refs.intro);
  },

  methods: {
  },
};
</script>
<style scoped>
.intro-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding-bottom: 32px;

  /* 스크롤 라인 */
  .scroll-line {
    margin: 0 auto;
    width: 0.6px;
    height: 0;
    background: #b0b0b0;
    border-radius: 2px;
    transition: height 1.5s ease;
  }

  .scroll-line.line-visible {
    height: 52px;
  }

  .content-title {
    font-family: 'Playfair Display', serif;
    color: #191c21;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    padding: 56px 0;
  }

  /* 컨텐츠 영역 */
  .content {
    padding: 24px 24px 0;
  }

  .content p {
    font-family: 'Noto Serif KR', serif;
    white-space: nowrap;
    color: #191c21;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 6px;
  }
}

.intro-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>