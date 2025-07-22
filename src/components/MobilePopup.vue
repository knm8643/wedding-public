<template>
  <div class="mobile-popup">
    <div class="popup-content">
      <!-- 벚꽃형식 -->
      <Blooming v-if="dynamicCurrent === 0"/>
      <BloomingOrigin v-if="dynamicCurrent === 2"/>
      <BloomingPlus v-if="dynamicCurrent === 1"/>

      <!-- 블랙앤 화이트 -->
      <ModernView v-if="dynamicCurrent === 3"/>
    </div>
  </div>
</template>

<script>
import Blooming from "@/components/blooming/BloomingDefault.vue";
import BloomingOrigin from "@/components/blooming/BloomingOrigin.vue";
import BloomingPlus from "@/components/blooming/BloomingPlus.vue";
import ModernView from "@/components/modern/ModernView.vue";

export default {
  components: {Blooming,BloomingOrigin,BloomingPlus, ModernView},
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

      // ------------------
      // --- 경로 URL 제거
      // ------------------
      const queryString = window.location.search;
      const newUrl = `${window.location.origin}${queryString}`;
      window.history.replaceState(null, '', newUrl);
    }
  }
}
</script>

<style scoped lang="scss">
// ------------------
// --- 팝업창 전용
// ------------------
.mobile-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(100px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup-content {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    max-width: 475px;
    position: relative;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
