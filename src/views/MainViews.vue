<template>
  <!-- Slider -->
  <div class="slider">
    <!-- Previous Button -->
    <button class="slider--btn slider--btn__prev" @click="goToPreviousSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>

    <!-- Slides Wrapper -->
    <div class="slides__wrapper">
      <div class="slides" @click="openMoblie">
        <!-- Slides -->
        <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slide"
            :style="getSlideStyle(index)"
            :data-current="slides.length > 1 &&  currentSlide === index ? true : undefined"
            :data-next="slides.length > 1 &&  currentSlide === (index - 1 + slides.length) % slides.length ? true : undefined"
            :data-previous="slides.length > 1 &&  currentSlide === (index + 1) %  slides.length ? true : undefined"
        >
          <div class="slide__inner">
            <div class="slide--image__wrapper">
              <img class="slide--image" :src="slide.image" :alt="slide.title"/>
            </div>
          </div>
        </div>

        <!-- Backgrounds -->
        <div
            v-for="(slide, index) in slides"
            :key="'bg-' + index"
            class="slide__bg"
            :style="{
              '--bg': `url(${slide.image})`,
              '--dir': getBackgroundDirection(index),
            }"
            :data-current="currentSlide === index ? true : undefined"
            :data-next="currentSlide === (index - 1 + slides.length) % slides.length ? true : undefined"
            :data-previous="currentSlide === (index + 1) % slides.length ? true : undefined"
        ></div>
      </div>

      <!-- Slide Info -->
      <div class="slides--infos">
        <div
            v-for="(slide, index) in slides"
            :key="'info-' + index"
            class="slide-info"
            :data-current="currentSlide === index ? true : undefined"
            :data-next="currentSlide === (index - 1 + slides.length) % slides.length ? true : undefined"
            :data-previous="currentSlide === (index + 1) % slides.length ? true : undefined"
        >
          <div class="slide-info__inner">
            <div class="slide-info--text__wrapper">
              <div data-title class="slide-info--text">
                <span>{{ slide.title }}</span>
              </div>
              <div data-subtitle class="slide-info--text">
                <span>{{ slide.subtitle }}</span>
              </div>
              <div data-description class="slide-info--text">
                <span>{{ slide.description }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button class="slider--btn slider--btn__next" @click="goToNextSlide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
  </div>

  <!-- Loader -->
  <div class="loader" v-if="!imagesLoaded">
    <span class="loader__text">{{ loadingProgress }}%</span>
  </div>

  <!-- Support Links -->
  <div class="support">
    <a href="https://torch-knave-705.notion.site/15b6b12f8d3580a395c5ea297195a434?pvs=74" target="_blank">
      <svg width="26" height="26" stroke-width="1" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier" stroke-width="2">
          <path stroke-width="1" d="M16.5749 7.25003C16.6367 7.59473 16.5568 7.93086 16.2367 7.96109L15.7054 8.05698L15.4846 16.374C15.0168 16.6242 14.5911 16.7615 14.2397 16.7493C13.673 16.7296 13.5363 16.5344 13.1293 15.9535L9.82408 10.0074L9.6745 15.6431L10.7624 15.9474C10.7624 15.9474 10.7444 16.6282 9.8619 16.5975L7.42244 16.6648C7.35563 16.5103 7.43656 16.1329 7.68674 16.0686L8.32658 15.9004L8.52431 8.45081L7.64386 8.34411C7.5821 7.99941 7.77252 7.51503 8.26605 7.49448L10.8834 7.39512L14.328 13.4217L14.4666 8.20066L13.5514 8.05443C13.4916 7.63739 13.7802 7.34321 14.1354 7.32029L16.5749 7.25003Z" fill="#fff"/>
          <path stroke-width="1" fill-rule="evenodd" clip-rule="evenodd" d="M17.2583 2.83306C13.7917 2.44562 10.2083 2.44562 6.74177 2.83306C4.72971 3.05794 3.10538 4.64295 2.86883 6.66548C2.45429 10.2098 2.45429 13.7903 2.86883 17.3346C3.10538 19.3571 4.72971 20.9422 6.74177 21.167C10.2083 21.5545 13.7917 21.5545 17.2583 21.167C19.2703 20.9422 20.8946 19.3571 21.1312 17.3346C21.5457 13.7903 21.5457 10.2098 21.1312 6.66548C20.8946 4.64295 19.2703 3.05794 17.2583 2.83306ZM6.90838 4.32378C10.2642 3.94871 13.7358 3.94871 17.0916 4.32378C18.4218 4.47244 19.4872 5.52205 19.6414 6.83973C20.0424 10.2683 20.0424 13.7318 19.6414 17.1604C19.4872 18.478 18.4218 19.5277 17.0916 19.6763C13.7358 20.0514 10.2642 20.0514 6.90838 19.6763C5.57827 19.5277 4.51278 18.478 4.35867 17.1604C3.95767 13.7318 3.95767 10.2683 4.35867 6.83973C4.51278 5.52205 5.57827 4.47244 6.90838 4.32378Z" fill="#fff"/>
        </g>
      </svg>
    </a>

    <a @click="sendUrlGit">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    </a>

    <a href="https://pf.kakao.com/_xjmCjn/chat" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C6.5 2 2 6.03 2 10.93c0 2.73 1.67 5.14 4.2 6.61-.2.8-.52 2.03-.75 2.92-.14.56.39.56.67.41 1.2-.65 2.57-1.67 3.1-2 .98.2 2.02.32 3.08.32 5.5 0 10-4.03 10-8.93C22 6.03 17.5 2 12 2z"/>
      </svg>
    </a>

  </div>

  <!-- popUp -->
  <transition name="popup-fade">
  <MobilePopup v-if="isPopupVisible" :current="currentSlide">
    <div class="main-pop-wrap">
      <div class="close-btn" @click="closePopup">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <div class="main-pop-font">
        <h2>{{ slides[currentSlide].subtitle }}</h2>
        <p>{{ slides[currentSlide].description }}</p>
      </div>

      <!-- 공통 아이콘 -->
      <div class="main-pop-icon">
        <!-- 모바일 사이즈 보기 -->
        <a @click="onMobile" class="icon-link">
          <span>모바일 전용</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18"></line>
          </svg>
        </a>
        <!-- 링크복사하기 -->
        <a @click="copyLink" class="icon-link">
          <span>링크 복사하기</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </a>
      </div>
    </div>
  </MobilePopup>
  </transition>

</template>

<script>
import imagesLoaded from "imagesloaded";
import MobilePopup from '@/components/MobilePopup.vue';

import img1 from "@/assets/images/01.jpg";
import img2 from "@/assets/images/02.jpg";
import img3 from "@/assets/images/03.jpg";
import EasterEgg from "@/components/easterEgg/easterEgg.vue";

export default {
  components: {MobilePopup},
  data() {
    return {
      slides: [
        {
          title: "봄처럼 피어나는 사랑",
          subtitle: "세련된 우아함",
          description: "사랑의 기쁨을 생동감 넘치는 디자인으로 축하해요.",
          image: img1,
        },
        {
          title: "영원히 기억될 순간",
          subtitle: "품격 있는 우아함",
          description: "특별한 날을 변함없이 아름답게 기념해요.",
          image: img2,
        },
        {
          title: "빛나는 시작",
          subtitle: "모던하고 세련된",
          description: "새로운 여정을 우아한 터치로 시작해요.",
          image: img3,
        },
      ],
      currentSlide: 0,
      imagesLoaded: false,
      loadingProgress: 0,
      isPopupVisible: false,
      currentFlag: ''
    };
  },
  methods: {
    goToNextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.currentFlag = 'next';
    },
    goToPreviousSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.currentFlag = 'previous';
    },
    getSlideStyle(index) {
      let zIndex = 0;
      if (this.currentSlide === index) {
        zIndex = 20;
      } else if (index === (this.currentSlide + 1) % this.slides.length) {
        zIndex = this.currentFlag === 'next' ? 10 : 30;
      } else if (index === (this.currentSlide - 1 + this.slides.length) % this.slides.length) {
        zIndex = this.currentFlag === 'next' ? 30 : 10;
      }
      return {zIndex: zIndex};
    },
    getBackgroundDirection(index) {
      if (index === this.currentSlide) return "current";
      if (index === (this.currentSlide + 1) % this.slides.length) return "next";
      if (index === (this.currentSlide - 1 + this.slides.length) % this.slides.length) return "previous";
      return null;
    },
    loadImages() {
      const images = this.slides.map((slide) => slide.image);
      let loadedCount = 0;

      images.forEach((src) => {
        imagesLoaded({src}, () => {
          loadedCount++;
          this.loadingProgress = Math.round((loadedCount / images.length) * 100);
          if (loadedCount === images.length) {
            this.imagesLoaded = true;
          }
        });
      });
    },
    onMobile() {
      window.open(location.href + '?current='+ this.currentSlide +'&infoKey=%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A0%84%EC%9A%A9', '_blank');
    },
    copyLink() {
      const urlToCopy = location.href + '?current=' + this.currentSlide + '&infoKey=%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A0%84%EC%9A%A9';
      navigator.clipboard.writeText(urlToCopy)
          .then(() => {
            alert('URL이 클립보드에 복사되었습니다!');
          })
          .catch(err => {
            alert('URL 복사에 실패했습니다.');
            console.error('Error copying text: ', err);
          });
    },
    sendUrlGit() {
      window.open('https://github.com/knm8643/wedding-public', '_blank');
    },
    openMoblie() {
      if(this.currentSlide ===2) {
        alert('해당 템플릿은 제작중입니다.')
        return;
      }

      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    }
  },
  mounted() {
    const current = this.$route.query.current;
    const infoKey = this.$route.query.infoKey;
    if(current !== undefined) {
      if(current === '이스터에그'){
        this.$router.push({
          name: 'EasterEgg',
          query: {
            current,
            infoKey
          }
        });
      } else {
        this.$router.push({
          name: 'MobilePopup',
          query: {
            current,
            infoKey
          }
        });
      }
    } else {
      this.loadImages();
    }
  },
};
</script>
<style lang="scss">
@import url("https://api.fontshare.com/v2/css?f[]=archivo@100,200,300,400,500,600,700,800,900&f[]=clash-display@200,300,400,500,600,700&display=swap");

:root {
  --slide-width: min(25vw, 210px);
  --slide-aspect: 2 / 3;

  --slide-transition-duration: 800ms;
  --slide-transition-easing: ease;

  --font-archivo: "Archivo", sans-serif;
  --font-clash-display: "Clash Display", sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.787);
}

button {
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
}

/* ------------------------------------------------ */
/* -------------------- SLIDER -------------------- */
/* ------------------------------------------------ */

.slider {
  width: calc(3 * var(--slide-width));
  height: calc(2 * var(--slide-height));
  display: flex;
  align-items: center;
}

.slider--btn {
  --size: 40px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 999;

  & svg {
    width: var(--size);
    height: var(--size);
    stroke: white;
  }

  &:hover {
    opacity: 1;
  }
}

.slides__wrapper {
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  & > * {
    grid-area: 1 / -1;
  }
}

.slides,
.slides--infos {
  width: 100%;
  height: 100%;

  pointer-events: none;

  display: grid;
  place-items: center;

  & > * {
    grid-area: 1 / -1;
  }
}

/* ------------------------------------------------ */
/* -------------------- SLIDE --------------------- */
/* ------------------------------------------------ */

.slide {
  --slide-tx: 0px;
  --slide-ty: 0vh;
  --padding: 0px;
  --offset: 0;
  z-index: -1;

  width: var(--slide-width);
  height: auto;
  aspect-ratio: var(--slide-aspect);
  user-select: none;
  perspective: 800px;

  transform: perspective(1000px) translate3d(var(--slide-tx), var(--slide-ty), var(--slide-tz, 0)) rotateY(var(--slide-rotY)) scale(var(--slide-scale));
  transition: transform var(--slide-transition-duration) var(--slide-transition-easing);
}

.slide:hover{
  cursor: pointer;
}

.slide[data-current] {
  --slide-scale: 1.2;
  --slide-tz: 0px;
  --slide-tx: 0px;
  --slide-rotY: 0;
  pointer-events: auto;
  z-index: 20;
}

.slide[data-next] {
  --slide-tx: calc(1 * var(--slide-width) * 1.07);
  --slide-rotY: -45deg;

}

.slide[data-previous] {
  --slide-tx: calc(-1 * var(--slide-width) * 1.07);
  --slide-rotY: 45deg;

}

.slide:not([data-current]) {
  --slide-scale: 1;
  --slide-tz: 0;
  pointer-events: none;
}

.slide[data-current] {
  & .slide--image {
    filter: brightness(0.8);
  }
}

.slide:not([data-current]) {
  & .slide--image {
    filter: brightness(0.5);
  }
}

.slide__inner {
  --rotX: 0;
  --rotY: 0;
  --bgPosX: 0%;
  --bgPosY: 0%;

  position: relative;
  left: calc(var(--padding) / 2);
  top: calc(var(--padding) / 2);
  width: calc(100% - var(--padding));
  height: calc(100% - var(--padding));
  transform-style: preserve-3d;
  transform: rotateX(var(--rotX)) rotateY(var(--rotY));
}

.slide--image__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide--image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%) scale(1.25) translate3d(var(--bgPosX), var(--bgPosY), 0);
  transition: filter var(--slide-transition-duration) var(--slide-transition-easing);
}

.slide__bg {
  position: fixed;
  inset: -20%;
  background-image: var(--bg);
  background-size: cover;
  background-position: center center;

  z-index: -1;
  pointer-events: none;

  transition: opacity var(--slide-transition-duration) ease,
  transform var(--slide-transition-duration) ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  &::before {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
  }

  &:not([data-current]) {
    opacity: 0;
  }

  &[data-previous] {
    transform: translateX(-10%);
  }

  &[data-next] {
    transform: translateX(10%);
  }
}

/* ------------ SLIDE INFO ---------------- */

.slide-info {
  --padding: 0px;

  position: relative;
  width: var(--slide-width);
  height: 100%;
  aspect-ratio: var(--slide-aspect);
  user-select: none;
  perspective: 800px;
  z-index: 100;
}

.slide-info[data-current] {
  & .slide-info--text span {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: 250ms;
  }
}

.slide-info:not([data-current]) {
  & .slide-info--text span {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    transition-delay: 0ms;
  }
}

.slide-info__inner {
  position: relative;
  left: calc(var(--padding) / 2);
  top: calc(var(--padding) / 2);
  width: calc(100% - var(--padding));
  height: calc(100% - var(--padding));
  transform-style: preserve-3d;
  transform: rotateX(var(--rotX)) rotateY(var(--rotY));
}

.slide-info--text__wrapper {
  --z-offset: 45px;

  position: absolute;
  height: fit-content;
  left: -15%;
  bottom: 15%;
  transform: translateZ(var(--z-offset));
  z-index: 2;
  pointer-events: none;
}

.slide-info--text {
  font-family: var(--font-clash-display);
  color: #fff;
  overflow: hidden;

  & span {
    display: block;
    white-space: nowrap;
    transition: var(--slide-transition-duration) var(--slide-transition-easing);
    transition-property: opacity, transform;
  }

  &[data-title],
  &[data-subtitle] {
    font-size: min(3cqw, 1.8rem);
    font-weight: 700;
    letter-spacing: 0.3cqw;
    white-space: nowrap;
    text-transform: uppercase;
  }

  &[data-subtitle] {
    margin-left: 2cqw;
    font-size: min(2.2cqw, 1.4rem);
    font-weight: 600;
  }

  &[data-description] {
    margin-left: 1cqw;
    font-size: min(1.5cqw, 0.95rem);
    font-family: var(--font-archivo);
    font-weight: 300;
  }
}

/* ------------------------------------------------ */
/* -------------------- LOADER --------------------- */
/* ------------------------------------------------ */

.loader {
  position: fixed;
  inset: 0;

  display: grid;
  place-items: center;

  background: #000;
  z-index: 1000;

  opacity: 1;
  transition: opacity 0.5s ease-out;

  .loader__text {
    font-family: var(--font-clash-display);
    font-size: clamp(2rem, 2vw, 5rem);
    font-weight: 800;
    color: #fff;
  }
}

/* ------------------------------------------------ */
/* -------------------- POPUP --------------------- */
/* ------------------------------------------------ */

.main-pop-wrap{
  position: relative;
  background-color: #fff;
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 10px;
}

.close-btn svg {
  stroke: #333;
  transition: stroke 0.3s ease;
}

.close-btn:hover svg {
  stroke: #e74c3c;
}

.main-pop-font{
  h2{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #2c3e50;
    line-height: 1.4;
  }
  p{
    font-size: 16px;
    color: #7f8c8d;
    margin-bottom: 20px;
    line-height: 1.5;
  }
}

.main-pop-icon{
  display: flex;
  gap: 12px;
  justify-content: space-around;
  a{
    backface-visibility: hidden;
    transition: all 150ms ease;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
.icon-link {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  background-color: #f39c12;
  border-radius: 2px;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.icon-link:hover {
  background-color: #e67e22;
  transform: scale(0.9);
}

.icon-link svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .main-pop-wrap {
    width: 100%;
    padding: 25px 20px
  }

  .main-pop-font h2 {
    font-size: 20px;
  }

  .main-pop-font p {
    font-size: 14px;
  }

  .icon-link {
    padding: 8px;
  }
}
/* ------------------------------------------- */

.support {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  display: flex;

  a {
    margin: 0 10px;
    color: #fff;
    font-size: 1.8rem;
    backface-visibility: hidden;
    transition: all 150ms ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.popup-fade-enter{
  opacity: 0;
  transform: translateY(-20px);
}

.popup-fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.popup-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.popup-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.popup-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>