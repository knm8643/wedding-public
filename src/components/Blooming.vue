<template>
  <div class="blooming-wrap">
    <div class="blooming-wrap-font">
      <p>2024년 05월 12일(토) 13:00</p>
      <h2>저희 둘 결혼합니다.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name:"Blooming",
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
/* ------------------------------------------------ */
/* -------------------- POPUP --------------------- */
/* ------------------------------------------------ */
.blooming-wrap {
  position: relative;
  background-color: hsl(358.64deg 73.33% 88.24%);
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  /* ------------------------------------------------ */
  /* ----------------- POPUP FONT ------------------- */
  /* ------------------------------------------------ */
  .blooming-wrap-font {
  }
}
/* ------------------------------------------------ */
/* ------------------ ANIMATION ------------------- */
/* ------------------------------------------------ */
:root {
  --snow-color: white;
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 100;
  position: absolute;
  top:-15px;
  width: 6px;
  height: 6px;
  background: var(--snow-color);
  border-radius: 50%;
  filter: drop-shadow(0 0 1.6px var(--snow-color))blur(3px);
  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + ($random-offset / 2);
    $random-yoyo-time: random_range(30000, 80000) / 100000;
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>