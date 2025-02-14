<template>
  <div class="photo-wrap" ref="photo">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div
            v-for="(image, index) in imagePath"
            :key="index"
            class="swiper-slide"
        >
          <img :src="image" class="image-item" />
        </div>
      </div>

      <div class="scroll-instruction big_02">
        <svg class="scroll-arrow" width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- 원 -->
          <circle cx="25" cy="25" r="24" stroke="black" stroke-width="2" fill="none"/>
          <!-- 오른쪽 화살표 -->
          <g transform="translate(12, 15)"> <!-- 화살표를 원의 중앙으로 이동 -->
            <path d="M10 0L20 10L10 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
        <p>좌측으로 이미지를 넘겨서 확인하세요</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import img2 from "@/assets/images/02.jpg";
import img3 from "@/assets/images/03.jpg";
import img4 from "@/assets/images/04.jpg";
import img5 from "@/assets/images/05.jpg";
import img6 from "@/assets/images/06.jpg";
import img7 from "@/assets/images/07.jpg";
import img8 from "@/assets/images/08.jpg";
import img9 from "@/assets/images/09.jpg";
import img10 from "@/assets/images/10.jpg";
import img11 from "@/assets/images/11.jpg";
import img12 from "@/assets/images/12.jpg";

export default {
  name: "photoDefault",
  data() {
    return {
      imagePath: [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
      swiper: null
    };
  },
  mounted() {
    this.initializeSwiper();
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper(this.$refs.swiperContainer, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.photo-wrap {
  margin-bottom: 5rem;
  width: 100%;
  position: relative;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-item {
    width: 100%;
    height: 65vh;
    object-fit: cover;
  }

  .scroll-instruction {
    text-align: center;
    width: 100%;
    padding: 2.1rem 24px;


    .scroll-arrow {
      animation: moveLeftRight 1.5s infinite alternate ease-in-out;
    }

    p {
      padding-top: 1.6rem;
    }
  }

  @keyframes moveLeftRight {
    0% {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(-15px) scale(1.05);
    }
    100% {
      transform: translateX(15px) scale(1);
    }
  }
}
</style>