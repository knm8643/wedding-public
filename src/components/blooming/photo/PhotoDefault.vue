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

      <div class="scroll-instruction text_02">
        <svg class="scroll-arrow" width="24" height="24" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10H45M45 10L38 4M45 10L38 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>좌측으로 이미지를 넘겨서 확인하세요</div>
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

<style scoped>
.photo-wrap {
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
}

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
  max-width: 100%;
  height: 80%;
  object-fit: cover;
}

.scroll-instruction {
  text-align: center;
  width: 100%;
  padding: 24px ;
}
.scroll-instruction {
  align-items: center;
  gap: 8px;
}

.scroll-arrow {
  animation: moveLeftRight 1s infinite alternate ease-in-out;
}

@keyframes moveLeftRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10px);
  }
}

</style>