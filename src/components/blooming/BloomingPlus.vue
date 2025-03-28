<template>
  <div class="blooming-wrap">
    <!-- 벚꽃 내리는효과 -->
    <canvas ref="canvas" class="sakura-canvas"></canvas>
    <!-- 빅배너 -->
    <BigBannerPlus />
    <!-- 소개말 -->
    <IntroPlus/>
    <!-- 사진첩 -->
    <PhotoPlus/>
    <PhotoPlusList/>
    <!-- 오시는 길(맵) -->
    <IntroPlusFont/>
    <!-- 달력 -->
    <CalenderPlus/>
    <!-- 맵 -->
    <AddressPlus/>
  </div>
</template>

<script>
import cherry from "@/assets/svg/cherryBlossoms.svg";
import BigBannerPlus from "@/components/blooming/bigBanner/BigBannerPlus.vue";
import IntroPlus from "@/components/blooming/intro/IntroPlus.vue";
import PhotoPlus from "@/components/blooming/photo/PhotoPlus.vue";
import PhotoPlusList from "@/components/blooming/photo/PhotoPlusList.vue";
import CalenderPlus from "@/components/blooming/calender/CalenderPlus.vue";
import GiftDefaultInfo from "@/components/blooming/gift/GiftDefaultInfo.vue";
import LetterDefault from "@/components/blooming/letter/LetterDefault.vue";
import AddressPlus from "@/components/blooming/address/AddressPlus.vue";
import IntroPlusFont from "@/components/blooming/intro/IntroPlusFont.vue";

export default {
  name:"BloomingPlus",
  components: {
    IntroPlusFont,
    AddressPlus,
    LetterDefault,
    GiftDefaultInfo, CalenderPlus, PhotoPlusList,PhotoPlus, IntroPlus, BigBannerPlus},
  mounted() {
    // 벚꽃내리는 효과
    this.startSakuraEffect();
  },
  methods:{
    startSakuraEffect() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      // ------------------------------------
      // ----- 커스텀시 화면에 맞게 설정해주세요
      // ------------------------------------
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      canvas.width = 375;
      canvas.height = 3550;

      const petals = [];
      const cherryImage = new Image();
      cherryImage.src = cherry;

      class Petal {
        constructor() {
          this.x = Math.random() * canvas.width; // 시작 위치 X
          this.y = Math.random() * canvas.height - canvas.height; // 시작 위치 Y
          this.size = Math.random() * 2 + 15; // 벚꽃 크기
          this.speedX = Math.random() * 0.9 - 0.5; // 좌우 이동


          let speedY;

          const userAgent = navigator.userAgent;
          if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
            speedY = Math.random() * 0.9 + 0.1;
          } else if (/iPhone|iPad|iPod|/.test(userAgent)) {
            speedY = Math.random() * 1.2 + 0.6;
          } else {
            speedY = Math.random() * 0.9 + 0.2;
          }
          this.speedY = speedY; // 낙하속도
          this.angle = Math.random() * Math.PI * 2; // 회전 각도
          this.angularSpeed = Math.random() * 0.02 - 0.01; // 회전 속도
        }

        draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle); // 회전
          ctx.drawImage(cherryImage, -this.size / 2, -this.size / 2, this.size, this.size);
          ctx.restore();
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.angle += this.angularSpeed;

          // 화면 아래로 벗어나면 다시 위에서 시작
          if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
          }

          // 화면 좌우로 벗어나면 반대편에서 등장
          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
        }
      }

      function createPetals() {
        for (let i = 0; i < 80; i++) {
          petals.push(new Petal());
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 그림 지우기

        petals.forEach((petal) => {
          petal.update();
          petal.draw();
        });

        requestAnimationFrame(animate); // 다음 프레임 요청
      }

      cherryImage.onload = () => {
        createPetals(); // 이미지 로드 후 벚꽃 생성
        animate(); // 애니메이션 시작
      };

      // 리사이즈 이벤트 처리
      window.addEventListener("resize", () => {
        // ------------------------------------
        // ----- 커스텀시 화면에 맞게 설정해주세요
        // ------------------------------------
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        canvas.width = 375;
        canvas.height = 3550;
      });
    },
  }
}
</script>
<style lang="scss" scoped>
// ------------------------------------
// --- Blooming 벚꽃효과
// ------------------------------------
.blooming-wrap * {
  font-family: 'ownglyph', sans-serif !important;
}
.blooming-wrap {
  position: relative;
  background-color: #F7F7F7;
  min-height: 100%;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 0 6px;

  .sakura-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 15;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>