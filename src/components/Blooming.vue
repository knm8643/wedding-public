<template>
  <div class="blooming-wrap">
    <!-- 빅배너 -->
    <BigBannerDefault />
    <!-- 소개말 -->
    <introDefault />
    <!-- 사진첩 -->
    <photoDefault />
    <!-- 달력 -->
    <calenderDefault/>
    <!-- 오시는 길(맵) -->
    <addressDefault/>
    <!-- 축의금 -->
    <giftDefaultInfo/>
    <!-- 편지보내기 -->
    <letterDefault/>
  </div>
</template>

<script>
import BigBannerDefault from "@/components/blooming/bigBanner/BigBannerDefault.vue";
import IntroDefault from "@/components/blooming/intro/IntroDefault.vue";
import PhotoDefault from "@/components/blooming/photo/PhotoDefault.vue";
import CalenderDefault from "@/components/blooming/calender/CalenderDefault.vue";
import AddressDefault from "@/components/blooming/address/AddressDefault.vue";
import GiftDefaultInfo from "@/components/blooming/gift/GiftDefaultInfo.vue";
import LetterDefault from "@/components/blooming/letter/LetterDefault.vue";

export default {
  name:"Blooming",
  components: {
    LetterDefault,
    GiftDefaultInfo, AddressDefault, CalenderDefault, PhotoDefault, IntroDefault, BigBannerDefault},
  mounted() {
    this.addSnowEffect();
  },
  methods:{
    addSnowEffect() {
      // mobile-content-wrap 요소 선택
      const snowContainer = document.querySelector('.blooming-wrap');

      // snow를 추가할 갯수 설정
      const snowCount = 100;

      // 눈 생성
      for (let i = 0; i < snowCount; i++) {
        const snowElement = document.createElement('div');
        snowElement.classList.add('snow');  // 눈에 대한 CSS 클래스 추가
        snowContainer.appendChild(snowElement);
      }
      // 생성된 눈에 랜덤 색 적용
      var snowElements = document.getElementsByClassName('snow');
      for (var j = 0; j < snowElements.length; j++) {
        var snowElement2 = snowElements[j];
        snowElement2.style.setProperty('--snow-color', getRandomColor());
      }

      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    },
  }
}
</script>
<style lang="scss">
@use 'sass:math';

/* ------------------------------------------------ */
/* -------------------- POPUP --------------------- */
/* ------------------------------------------------ */
.blooming-wrap {
  position: relative;
  background-color: #ffffff;
  min-height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 0 6px;

  &::-webkit-scrollbar {
    display: none;
  }
}

/* ------------------------------------------------ */
/* ------------------ ANIMATION ------------------- */
/* ------------------------------------------------ */
:root {
  --snow-color: white;
}

@function random_range($min, $max) {
  $rand: math.random();
  $random_range: $min + math.floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 100;
  position: absolute;
  top: -10px;
  width: 6px;
  height: 6px;
  background: var(--snow-color);
  border-radius: 50%;
  filter: drop-shadow(0 0 1.6px var(--snow-color)) blur(3px);

  @for $i from 1 through $total {
    $random-x: math.random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + math.div($random-offset, 2);
    $random-yoyo-time: math.div(random_range(30000, 80000), 100000);
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: math.random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: math.random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: math.random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{math.percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>