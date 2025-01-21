<template>
  <div
      class="intro-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="intro"
  >

    <div class="scroll-line" :class="{ 'line-visible': isVisible }"></div>
    <!-- 타이틀 제목 -->
    <div class="content-title">
      저희 둘 결혼합니다.
    </div>

    <div class="content">
      <p style="font-style: italic; font-size: 12px; color: #999; text-align: center; padding: 24px">
        아름다운 세상 그대에게 보여주리 말해봐요<br />
        그대가 보고 싶은 것들을<br />
        <span style="font-weight: bold;">© Disney. All rights reserved.</span>
      </p>
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
  name: "IntroOrigin",
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
/* 애니메이션 */
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
    color: #191c21;
    font-weight: 700;
    font-size: 21px;
    text-align: center;
    padding-top: 52px;
  }

  /* 컨텐츠 영역 */
  .content {
    padding: 24px 24px 0;
  }

  .content p {
    white-space: nowrap;
    color: #191c21;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 6px;
  }

  .content p[style*="font-style: italic"] {
    font-size: 12px;
    color: #999;
  }
}

.intro-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>