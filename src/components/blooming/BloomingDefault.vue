<template>
  <div class="fullpage-container">
    <div class="section-wrapper">
      <canvas ref="canvas" class="sakura-canvas"></canvas>
      <section
          v-for="(item, index) in sections"
          :key="index"
          class="section"
          :class="{ 'animate-slide': showSection === index }"
      >
        <!-- 컴포넌트들이 각 섹션에 맞게 나타남 -->
        <component :is="item.component" />
      </section>
    </div>
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
import cherry from "@/assets/svg/cherryBlossoms.svg";
import { markRaw } from 'vue';

export default {
  name: "BloomingDefault",
  data() {
    return {
      sections: [
        { title: 'Big Banner', description: 'This is the big banner section.', component: markRaw(BigBannerDefault) },
        { title: 'Intro', description: 'This is the intro section.', component: markRaw(IntroDefault) },
        { title: 'Photo Gallery', description: 'This is the photo gallery section.', component: markRaw(PhotoDefault) },
        { title: 'Calendar', description: 'This is the calendar section.', component: markRaw(CalenderDefault) },
        { title: 'Address', description: 'This is the address section.', component: markRaw(AddressDefault) },
        { title: 'Gift Info', description: 'This is the gift info section.', component: markRaw(GiftDefaultInfo) },
        { title: 'Letter', description: 'This is the letter section.', component: markRaw(LetterDefault) }
      ],
      showSection: 0,
      touchStartY: 0,
      touchEndY: 0
    };
  },
  mounted() {
    this.startSakuraEffect();

    window.addEventListener('wheel', this.handleScroll);
    this.setBodyOverflow();

    // 모바일 터치 이벤트
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('touchend', this.handleTouchEnd, { passive: false });
  },

  destroyed() {
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleTouchEnd);
  },

  methods: {
    handleScroll(event) {
      event.preventDefault(); // 🚀 추가
      if (event.deltaY > 0 && this.showSection < this.sections.length - 1) {
        this.showSection++;
      } else if (event.deltaY < 0 && this.showSection > 0) {
        this.showSection--;
      }
    },
    handleTouchStart(event) {
      event.preventDefault(); // 🚀 추가
      this.touchStartY = event.touches[0].clientY;
    },
    handleTouchMove(event) {
      event.preventDefault(); // 🚀 추가
      this.touchEndY = event.touches[0].clientY;
    },
    handleTouchEnd() {
      if (this.touchStartY - this.touchEndY > 60 && this.showSection < this.sections.length - 1) {
        this.showSection++;
      } else if (this.touchEndY - this.touchStartY > 60 && this.showSection > 0) {
        this.showSection--;
      }
    },
    setBodyOverflow() {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    },
    startSakuraEffect() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      // ------------------------------------
      // ----- 커스텀시 화면에 맞게 설정해주세요
      // ------------------------------------
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

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
        for (let i = 0; i < 15; i++) {
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
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

      });
    },

  }
};
</script>

<style scoped>
.sakura-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 15;
}

.fullpage-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

}

.section-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.section {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #F7F7F7;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section *{
  font-family: 'LINESeedKR', sans-serif!important;
}

.section .content {
  text-align: center;
}

.animate-slide {
  opacity: 1;
  transform: translateY(0);
}

body {
  margin: 0;
  padding: 0;
}
</style>