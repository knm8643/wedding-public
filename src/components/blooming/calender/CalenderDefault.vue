<template>
  <div
      class="calender-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="calender"
  >


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
  padding: 72px 0;
  width: 100%;

  .calender-main-wrap {
    margin: 24px 24px;
    padding-bottom: 12px;
    border-radius: 4px;
  }
}

.calender-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

</style>