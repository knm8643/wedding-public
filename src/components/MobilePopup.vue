<template>
  <div class="mobile-popup">
    <div class="popup-content">
      <slot />
      <Blooming v-if="current === 0"/>
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
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .popup-content {
    width: 100%;
    max-width: 475px;
    background: #222;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }
}
</style>
