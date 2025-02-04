<template>
  <div class="plus-wrap" ref="photoList" :class="{ 'animate-visible': isVisible }">
    <div class="plus-wrap-box">
      <div
          v-for="(image, index) in images.slice(0, 3)"
          :key="index"
          :class="['image-item', index % 2 === 0 ? 'left' : 'right']"
      >
        <img :src="image.src" :alt="image.alt"
             @click="openImageModal(image, $event)"
        />
        <p>{{ image.text }}</p>
      </div>
    </div>
    <div class="plus-wrap-font">
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
        <div class="grid-container">
          <div v-for="(image, index) in images.slice(4, images.length) " :key="index" class="grid-item" @click="openImageModal(image, $event)">
            <img :src="image.src" :alt="image.alt" />
          </div>
        </div>
      </div>
    </teleport>
    <div class="line"></div>
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
      isVisible: false,
      isImageModalOpen: false,
      isGridModalOpen: false,
      selectedImage: null,
      images: [
        { src: img5, alt: "첫번째 이미지", text: "" },
        { src: img10, alt: "두번째 이미지", text: "" },
        { src: img8, alt: "세번째 이미지", text: "" },
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
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
    );
    observer.observe(this.$refs.photoList);
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
  opacity: 0;
  transform: translateY(-25px);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.plus-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}


.plus-wrap-box {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 46px;
  z-index: 8;
}

.image-item {
  display: flex;
  align-items: center;

  img {
    width: 100%;
    max-width: 305px;
    object-fit: cover;
    border-radius: 4px;

    &:hover{
      cursor: pointer;
    }
  }


  p {
    width: 100%;
    font-family: 'GamjaFlower-Regular', sans-serif!important;
    font-size: 18px;
    margin-left: 12px;
    color: #333;
  }
}

.plus-wrap-font{
  z-index: 8;
  position: relative;
  color: #FF69B4;
  margin-top: 68px;

  button{
    border: 1.6px solid #FF69B4;
    border-radius: 999px;
    padding: 2px 24px;
    p {
      font-family: 'GamjaFlower-Regular', sans-serif!important;
      font-weight: 400;
      font-size: 18px;
    }
  }
}


.line {
  border: 1px solid #FF69B4;
  position: absolute;
  z-index: 7;
  width: calc(100% - 50px);
  height: 1730px;
  left: 25px;
  bottom: 60px;
}

.left {
  flex-direction: row;
  justify-content: flex-start;
}

.right {
  flex-direction: row-reverse;
  justify-content: flex-end;
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
  align-items: center;
  z-index: 9998;
  padding: 25px;
  overflow: auto;
}

.grid-container {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
  max-height: 90vh; /* 최대 높이를 설정 */
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 항상 3열 */
  gap: 12px;
}

.grid-item {
  height: 160px; /* 고정된 높이로 3줄 유지 */
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
</style>