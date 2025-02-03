<template>
  <div
      class="intro-wrap"
      :class="{ 'animate-visible': isVisible }"
  >
    <div class="content-title">
      25.11.21
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPlus",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 900);
  },
};
</script>
<style scoped>
.intro-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding: 156px 68px;

  .content-title {
    padding: 42px 0;
    min-width: 233px;
    font-family: 'Love Ya Like A Sister', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 145.74%;
    text-align: center;
    color: #FF69B4;
    border-top: 2px solid #FF69B4;
    border-bottom: 2px solid #FF69B4;
  }
}

.intro-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>