<template>
  <div class="spring-wrap">
    <canvas ref="canvas" class="sakura-canvas"></canvas>

    <div class="fix-wrap">
      <!-- 배경 이미지 -->
      <div class="background_1">
        <img :src="backImg[0]" alt="벚꽃나무"/>
      </div>
      <!-- 첫페이지 -->
      <div class="spring-main-banner">
        <div class="banner-header">
          <p>25.02.08</p>
          <div class="header-info">
            <h2>충디딥&nbsp;</h2>
            <span>&</span>
            <h2>&nbsp;유디딥</h2>
          </div>
          <button>
            <span>로얄파크컨벤션</span>
          </button>
        </div>
      </div>
      <!-- 배경 이미지 -->
      <div class="background_2">
        <img :src="backImg[1]" alt="벚꽃나무"/>
      </div>
    </div>

    <div class="scroll-line" :class="{ 'line-visible': isVisible }"></div>

    <!-- 스크롤 부분 -->
    <div class="spring-wrap-scroll" ref="intro">
    </div>
  </div>
</template>

<script>
import cherry from "@/assets/svg/cherryBlossoms.svg";
import cherryFloral_1 from "@/assets/svg/blossomFloral_1.svg";
import cherryFloral_2 from "@/assets/svg/blossomFloral_2.svg";

export default {
  name: "SpringMain",
  data() {
    return {
      backImg: [cherryFloral_1 , cherryFloral_2],
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
    );
    observer.observe(this.$refs.intro);
    this.startSakuraEffect();
  },
  methods: {
    startSakuraEffect() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");


      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;

      canvas.width = 375;
      canvas.height = 1285;

      const petals = [];
      const cherryImage = new Image();
      cherryImage.src = cherry;

      class Petal {
        constructor() {
          this.x = Math.random() * canvas.width; // 시작 위치 X
          this.y = Math.random() * canvas.height - canvas.height; // 시작 위치 Y
          this.size = Math.random() * 2 + 15; // 벚꽃 크기
          this.speedX = Math.random() * 1 - 0.5; // 좌우 이동
          this.speedY = Math.random() * 0.5 + 0.5; // 낙하 속도
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
        for (let i = 0; i < 25; i++) {
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
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    },
  },
};
</script>

<style scoped>
.spring-wrap {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: hsl(336.52deg 95.83% 90.59%);
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 20px;

  .sakura-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .fix-wrap{
    .spring-main-banner {
      position: relative;
      z-index: 0;
      background-color: #FFFFFF;
      border: double 8px hsl(336.52deg 95.83% 90.59%);
      margin: 20px 20px 20px;
      text-align: center;
      .banner-header {
        font-family: 'Noto Serif KR', serif;
        font-weight: 900;
        padding: 62px 24px;
        p{
          font-size: 24px;
          padding-bottom: 16px;
          color: hsl(23.72deg 19.82% 42.55%);;
        }
        .header-info{
          font-size: 28px;
          color: hsl(348.52deg 100% 68.24%);;
          display: flex;
          justify-content: center;
          padding-bottom: 16px;
        }
        button {
          background-color: #ff8da3;
          border-radius: 999px;
          padding: 1px 24px;

          span{
            font-weight: 700;
            color: #FFFFFF;
          }
        }
      }
    }
    .background_1{
      position: absolute;
      z-index: 1;
      top: -10px;
      left: -10px;
      img{
        width: 100px;
        height: 100%;
      }
    }
    .background_2{
      position: absolute;
      z-index: 1;
      top: 200px;
      right: -10px;
      img{
        width: 100px;
        height: 100%;
      }
    }
  }

  .scroll-line {
    margin: 0 auto;
    width: 1px;
    height: 0;
    background: #ffffff;
    border-radius: 2px;
    transition: height 1.5s ease;
  }

  .scroll-line.line-visible {
    height: 72px;
  }

  .spring-wrap-scroll {
    top: -50%;
    z-index: 0;
    background-color: #FFFFFF;
    margin: 24px 0 0;
    padding: 20px;
    border: double 8px hsl(336.52deg 95.83% 90.59%);
    height: 100vh;
  }


  &::-webkit-scrollbar {
    display: none;
  }
}

</style>