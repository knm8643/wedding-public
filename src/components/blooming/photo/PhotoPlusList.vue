<template>
  <div class="plus-wrap">
    <div class="plus-wrap-box">
      <div
          v-for="(image, index) in images.slice(0, 3)"
          :key="index"
          :ref="el => imageRefs[index] = el"
          :class="['image-item', index % 2 === 0 ? 'left' : 'right', { 'animate-visible': isVisible[index] }]"
      >
        <img :src="image.src" :alt="image.alt" @click="openImageModal(image, $event)" />
        <p v-html="image.text"></p>
      </div>
    </div>
    <div class="plus-wrap-font"
         ref="moreButtonRef"
         :class="{ 'animate-visible': isButtonVisible }"
    >
      <button @click="openGridModal">
        <p class="more-btn">추가 사진 보기</p>
      </button>
    </div>

    <!-- 확대 이미지 팝업 -->
    <teleport to="body">
      <div v-if="isImageModalOpen" class="image-modal" @click="closeImageModal">
        <img :src="selectedImage.src" alt="확대 이미지" class="modal-image" />
      </div>
    </teleport>

    <!-- 그리드 형식 팝업 -->
    <teleport to="body">
      <div v-if="isGridModalOpen" class="grid-modal" @click="closeGridModal">
        <div class="grid-content">
          <!-- 헤더 영역 -->
          <header class="grid-header">
            <h2>갤러리</h2>
            <p>아무데나 터치하면 닫혀요!</p>
          </header>

          <!-- 그리드 이미지 컨테이너 -->
          <div class="grid-container">
            <div v-for="(image, index) in images.slice(4, images.length)" :key="index" class="grid-item" @click="openImageModal(image, $event)">
              <img :src="image.src" :alt="image.alt" />
            </div>
          </div>
        </div>
      </div>
    </teleport>
<!--    <div class="line"></div>-->
  </div>
</template>


<script>
import img1 from "@/assets/images/01.jpg";
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
  name: "PhotoPlusList",
  data() {
    return {
      isButtonVisible: false,
      isVisible: Array(3).fill(false),
      imageRefs: [],
      isImageModalOpen: false,
      isGridModalOpen: false,
      selectedImage: null,
      images: [
        { src: img5, alt: "첫번째 이미지", text: "사진을<br/> 클릭해보세요" },
        { src: img10, alt: "두번째 이미지", text: "저희<br/> 결혼합니다!" },
        { src: img8, alt: "세번째 이미지", text: "함께<br/>해주세요!" },
        { src: img2, alt: "네번째 이미지", text: "" },
        { src: img1, alt: "첫번째 이미지", text: "" },
        { src: img2, alt: "두번째 이미지", text: "" },
        { src: img3, alt: "세번째 이미지", text: "" },
        { src: img4, alt: "네번째 이미지", text: "" },
        { src: img5, alt: "다섯번째 이미지", text: "" },
        { src: img6, alt: "여섯번째 이미지", text: "" },
        { src: img7, alt: "일곱번째 이미지", text: "" },
        { src: img8, alt: "여덟번째 이미지", text: "" },
        { src: img9, alt: "아홉번째 이미지", text: "" },
        { src: img10, alt: "열번째 이미지", text: "" },
        { src: img11, alt: "열한번째 이미지", text: "" },
        { src: img12, alt: "열두번째 이미지", text: "" },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = this.imageRefs.indexOf(entry.target);
              if (index !== -1) {
                setTimeout(() => {
                  this.isVisible[index] = true;
                }, index * 300);
                observer.unobserve(entry.target);
              } else if (entry.target === this.$refs.moreButtonRef) {
                setTimeout(() => {
                  this.isButtonVisible = true;
                }, this.images.slice(0, 3).length * 300);
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
    );

    this.imageRefs.forEach(item => observer.observe(item));
    observer.observe(this.$refs.moreButtonRef);
  },
  methods: {
    openImageModal(image,event) {
      event.stopPropagation();
      this.selectedImage = image;
      this.isImageModalOpen = true;
    },
    closeImageModal() {
      this.isImageModalOpen = false;
    },
    openGridModal() {
      this.isGridModalOpen = true;
    },
    closeGridModal() {
      this.isGridModalOpen = false;
    }
  }
};
</script>


<style scoped lang="scss">
.plus-wrap {
  text-align: center;
  padding: 0 0 156px;

  @media (min-width: 450px) {
      padding: 0 46px 156px;
  }
}


.plus-wrap-box {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  z-index: 8;
}

.image-item {
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(20px) rotate(-5deg);
  transition: opacity 0.8s ease, transform 0.8s ease;

  img {
    width: 80%;
    min-width: 235px;
    object-fit: cover;
    border-radius: 6px;

    &:hover{
      cursor: pointer;
    }
  }

  p {
    width: 100%;
    font-family: 'ownglyph', sans-serif!important;
    font-size: 18px;
    color: #FF69B4;
    border-radius: 999px;
    line-height: 1.8;
    padding: 10px 20px;
    //background-color: rgba(255, 105, 180, 0.1);
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
  }

}
.image-item.animate-visible {
  opacity: 1;
  transform: translateY(0) rotate(0deg);
}


.plus-wrap-font{
  z-index: 8;
  position: relative;
  color: #FF69B4;
  margin-top: 68px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  button{
    border: 1px solid #FF69B4;
    border-radius: 999px;
    padding: 6px 24px;
    p {
      font-family: 'ownglyph', sans-serif!important;
      font-weight: 700;
      font-size: 18px;
    }
  }
}
.plus-wrap-font.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.line {
  //border: 1px solid #FF69B4;
  position: absolute;
  z-index: 7;
  width: calc(100% - 50px);
  height: 1350px;
  left: 25px;
  bottom: 80px;
}

.left {
  flex-direction: row;
  justify-content: flex-start;
  p{
    transform: translateX(-10px)  rotate(-20deg) translateY(-20px);
  }
}

.right {
  flex-direction: row-reverse;
  justify-content: flex-end;
  p{
    transform: translateX(10px)  rotate(20deg) translateY(20px);
  }
}

// ------------- 모달관련 -------------
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.grid-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 9998;
  padding: 40px 25px;
}

.grid-content {
  background: white;
  padding: 24px 18px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
  max-height: 80vh; /* 고정된 컨텐츠 높이 */
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s ease;
  animation: fadeInScale 0.4s ease forwards;
}

.grid-header {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'ownglyph', sans-serif !important;
}

.grid-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #FF69B4;
  margin: 0 0 8px;
}

.grid-header p {
  font-size: 18px;
  letter-spacing: 1px;
  color: #df8585;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  height: 100%;
  overflow-y: auto;
  flex: 1;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
}

.grid-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>