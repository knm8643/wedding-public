<template>
  <div
      class="calender-wrap"
      ref="calender"
  >
    <div class="calender-main-wrap">
      <calenderTemplate
        :days="'2025.11.21'"
      />
    </div>
  </div>
</template>

<script>
import CalenderTemplate from "@/components/blooming/calender/CalenderTemplate.vue";

export default {
  name: "calenderDefault",
  components: {CalenderTemplate},
};
</script>
<style scoped>
.calender-wrap {
  justify-self: center;
  padding: 52px 0;
  width: 100%;
  .calender-main-wrap {
    margin: 0 32px;
    padding-bottom: 12px;
    border-radius: 4px;
  }
}
</style>