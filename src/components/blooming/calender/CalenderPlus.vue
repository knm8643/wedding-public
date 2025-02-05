<template>
  <div
      class="calender-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="calender"
  >
    <div class="scroll-line" :class="{ 'line-visible': isVisible }"></div>

    <div class="calender-main-font">
      <p>서울 용산구 이태원로 29</p>
      <span>로얄파크컨벤션</span>
      <p>주차 가능 (발렛 서비스 제공)</p>
    </div>

    <div class="calender-main-wrap">
      <CalenderPlusTemplate
          :days="'2025.11.21'"
      />
    </div>
  </div>
</template>

<script>
import CalenderPlusTemplate from "@/components/blooming/calender/CalenderPlusTemplate.vue";

export default {
  name: "CalenderPlus",
  components: {CalenderPlusTemplate},
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
        { threshold: 0.25 }
    );

    observer.observe(this.$refs.calender);
  },

  methods: {
  },
};
</script>
<style scoped>
/* 애니메이션 */
.calender-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding: 52px 0;
  width: 100%;

  /* 스크롤 라인 */
  .scroll-line {
    margin: 0 auto;
    width: 1px;
    height: 0;
    background: #FF69B4;
    border-radius: 2px;
    transition: height 1.5s ease;
  }

  .scroll-line.line-visible {
    height: 124px;
  }

  .calender-main-font{
    text-align: center;
    padding: 142px 0 24px;
    font-size: 21px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.8;
    span{
      color: #FF69B4;
      font-size: 26px;
      font-weight: 700;
    }

    p{
      color:  #df8585;
      font-weight: 700;
    }
  }

  .calender-main-wrap {
    margin: 24px 44px;
    padding-bottom: 12px;
    border-radius: 4px;
    border-top: 0.6px solid #FF69B4;
    border-bottom: 0.6px solid #FF69B4;
  }
}

.calender-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

</style>