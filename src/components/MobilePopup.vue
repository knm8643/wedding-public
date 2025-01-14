<template>
  <div class="mobile-popup">
    <div class="popup-content">
      <slot />
      <!-- type 0 -->
      <Blooming v-if="dynamicCurrent === 0"/>
    </div>
  </div>
</template>

<script>
import Blooming from "@/components/Blooming.vue";

export default {
  components: {Blooming},
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

      // MobilePopup 제거
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
    overflow-y: auto;
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
