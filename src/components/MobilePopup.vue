<template>
  <div class="mobile-popup">
    <div class="popup-content">
      <Blooming v-if="dynamicCurrent === 0"/>
      <BloomingOrigin v-if="dynamicCurrent === 1"/>
      <BloomingPlus v-if="dynamicCurrent === 2"/>
    </div>
  </div>
</template>

<script>
import Blooming from "@/components/blooming/BloomingDefault.vue";
import BloomingOrigin from "@/components/blooming/BloomingOrigin.vue";
import BloomingPlus from "@/components/blooming/BloomingPlus.vue";

export default {
  components: {Blooming,BloomingOrigin,BloomingPlus},
  name:"MobilePopup",
  props:{
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dynamicCurrent: this.current
    };
  },
  created() {
    const currentFromQuery = this.$route.query.current;
    if (currentFromQuery !==  undefined) {
      this.dynamicCurrent = Number(currentFromQuery);

      // 경로 URL 제거
      const queryString = window.location.search;
      const newUrl = `${window.location.origin}${queryString}`;
      window.history.replaceState(null, '', newUrl);
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .popup-content {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    max-width: 475px;
    border-radius: 8px;
    position: relative;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
