<template>
  <div
      class="intro-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="intro"
  >

    <!-- 타이틀 제목 -->
    <div class="content-title">
      저희 결혼합니다
    </div>


    <!-- 내용 -->
    <div class="content text_02">
      <p>
        사랑이 깊어 결실을
      </p>
      <p >
        맺고 저희 두 사람이 새로운 여정을
      </p>
      <p style="padding-bottom: 24px">
        함께 시작하려 합니다.
      </p>
      <p>
        세상에서 가장 특별한 이 날,
      </p>
      <p>
        소중한 당신을 기쁜 마음으로 초대합니다.
      </p>
      <p>
        당신을 기다리겠습니다.
      </p>
    </div>

    <div class="content-fmInfo text_03">
      <div class="fmInfo">
        <p>김두환 · 홍길동</p>
        <span>의 아들</span>
        <p>충디딥</p>
      </div>
      <div class="fmInfo">
        <p>이두환</p>
        <span>의 딸</span>
        <p>유디딥</p>
      </div>
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
  width: 100%;

  .content-title {
    color: #191c21;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    padding: 1rem 0 26px ;
  }

  .content {
    padding: 24px 24px 0;
  }

  .content p{
    white-space: nowrap;
    text-align: center;
    margin-bottom: 6px;
  }

  .content-fmInfo{
    margin: 2.5rem 2rem 2rem;
    padding: 1rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .fmInfo{
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }
  }
}

.intro-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>