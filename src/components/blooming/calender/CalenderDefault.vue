<template>
  <div
      class="calender-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="calender"
  >

    <div class="scroll-line" :class="{ 'line-visible': isVisible }"></div>

    <div class="calender-main-font">
      <p>2025년 02월 08일 토요일</p>
      <span>오후 01시 30분 예식이 시작됩니다.</span>
    </div>

    <div class="calender-main-wrap">
      <calenderTemplate
        :days="'2025.02.08'"
      />
    </div>
  </div>
</template>

<script>
import CalenderTemplate from "@/components/blooming/calender/CalenderTemplate.vue";

export default {
  name: "calenderDefault",
  components: {CalenderTemplate},
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
    width: 0.6px;
    height: 0;
    background: #b0b0b0;
    border-radius: 2px;
    transition: height 1.5s ease;
  }

  .scroll-line.line-visible {
    height: 52px;
  }

  .calender-main-font{
    text-align: center;
    padding: 42px 0 24px;
    font-size: 18px;
    font-weight: 400;
    span{
      color: #6a6a6a;
    }

    p{
      padding-bottom: 12px;
      color:  #191c21;
      font-weight: 500;
    }
  }

  .calender-main-wrap {
    margin: 24px 44px;
    padding-bottom: 12px;
    border-radius: 4px;
    border-top: 0.6px solid #b0b0b0;
    border-bottom: 0.6px solid #b0b0b0;
  }
}

.calender-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

</style>