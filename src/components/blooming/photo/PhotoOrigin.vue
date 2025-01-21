<template>
  <div
      class="photo-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="photo"
  >
    <div class="swiper-container">
      <div class="main-image-wrap">
        <img
            :src="selectedImage"
            alt="대표 이미지"
            class="main-image"
        >
      </div>

      <!-- 이미지 리스트 -->
      <div class="img-wrap">
        <img
            v-for="(image, index) in imagePath"
            :key="index"
            :src="image"
            :class="{ selected: selectedIndex === index }"
            @click="selectImage(index, $event)"
            class="photo-image"
        />
      </div>
    </div>
    <div class="content-fmInfo">
      <div class="fmInfo">
        <p>김두환 · 홍길동</p>
        <span>의 아들</span>
        <p>충디딥</p>
      </div>
      <div class="fmInfo">
        <p>이두환</p>
        <span>의 딸</span>
        <p>유디딥</p>
      </div>
    </div>

    <!-- 전화번호 영역 -->
    <div class="phone-info">
      <button @click="openPopup">연락처 확인</button>
    </div>

    <!-- 팝업 영역 -->
    <teleport to="body">
      <div v-if="showPopup" class="popup-overlay">
        <div class="popup">
          <!-- 신랑측 -->
          <div class="pop-wrap">
            <h3>&lt;신랑측&gt;</h3>
            <div class="pop-sub-wrap">
              <span>신랑에게 연락하기</span>
              <p>
                <!-- 전화 아이콘 -->
                <a :href="'tel:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-phone-alt"></i>
                </a>
                <!-- 문자 아이콘 -->
                <a :href="'sms:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-sms"></i>
                </a>
              </p>
            </div>
            <div class="pop-sub-wrap">
              <span>신랑측 혼주 아버지 연락하기</span>
              <p>
                <!-- 전화 아이콘 -->
                <a :href="'tel:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-phone-alt"></i>
                </a>
                <!-- 문자 아이콘 -->
                <a :href="'sms:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-sms"></i>
                </a>
              </p>
            </div>
            <div class="pop-sub-wrap">
              <span>신랑측 혼주 어머니 연락하기</span>
              <p>
                <!-- 전화 아이콘 -->
                <a :href="'tel:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-phone-alt"></i>
                </a>
                <!-- 문자 아이콘 -->
                <a :href="'sms:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-sms"></i>
                </a>
              </p>
            </div>
          </div>

          <!-- 신부측 -->
          <div class="pop-wrap">
            <h3>&lt;신부측&gt;</h3>
            <div class="pop-sub-wrap">
              <span>신부에게 연락하기</span>
              <p>
                <!-- 전화 아이콘 -->
                <a :href="'tel:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-phone-alt"></i>
                </a>
                <!-- 문자 아이콘 -->
                <a :href="'sms:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-sms"></i>
                </a>
              </p>
            </div>
            <div class="pop-sub-wrap">
              <span>신부측 혼주 어머니 연락하기</span>
              <p>
                <!-- 전화 아이콘 -->
                <a :href="'tel:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-phone-alt"></i>
                </a>
                <!-- 문자 아이콘 -->
                <a :href="'sms:' + '010-5696-1909'" class="contact-link">
                  <i class="fas fa-sms"></i>
                </a>
              </p>
            </div>
          </div>

          <!-- 닫기 버튼 -->
          <p class="close-popup" @click="closePopup">닫기</p>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
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
  name: "PhotoOrigin",
  data() {
    return {
      imagePath: [img2, img3,img4,img5,img6,img7,img8,img9,img10,img11,img12],
      isVisible: false,
      selectedIndex: 0,
      selectedImage: img2,
      showPopup: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            setTimeout(() => {
              observer.disconnect();
            }, 500);
          }
        },
        { threshold: 0.5 }
    );

    observer.observe(this.$refs.photo);
  },
  methods: {
    selectImage(index, event) {
      this.selectedIndex = index;
      this.selectedImage = this.imagePath[index];

      const target = event.target;
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    },
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },

  },
};
</script>
<style scoped>
/* 애니메이션 */
.photo-wrap {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;


  /* 이미지 영역 */
  .swiper-container {
    width: 100%;
    height: auto;
    margin: 16px auto 56px;

    .main-image-wrap{
      .main-image{
        border: 0.6px solid #b0b0b0;
        min-height: 475px;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        width: 100%;
      }
    }

    .img-wrap{
      display: flex;
      overflow-x: scroll;
      scroll-behavior: smooth;
      .photo-image {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        width: 32%;
        height: 150px;
        border: 2px solid transparent;
      }
      .selected {
        border-color: #ff91a4;
      }
    }
  }
  /* 이미지 영역 */
  .content-fmInfo{
    margin: 0 auto;
    .fmInfo {
      display: flex;
      line-height: 1.8;
      gap: 4px;
      justify-content: center;
      align-items: center;
      padding-top: 4px;
      p{
        color: #191c21;
        font-weight: 500;
        font-size: 21px;
        transition: font-size 0.2s ease;
      }
      span {
        color: #b0b0b0;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.8;
      }
    }
  }
}

.photo-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
/* 인풋박스 공통 */
input {
  text-align: center;
  width: 100%;
  font-size: 14px;
}
input:hover{
  border: 0.6px solid #b0b0b0;
}

/* 스와이퍼 */
::v-deep(.swiper-pagination) {
  display: block !important;
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 10;
}

::v-deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #fff;
  opacity: 0.7;
  margin: 0 5px;
}

::v-deep(.swiper-pagination-bullet-active) {
  background: #007bff;
  opacity: 1;
}

/* 팝업관련 CSS */
.phone-info {
  padding-top: 16px;
  text-align: center;

  button {
    margin-top: 16px;
    padding: 6px 16px;
    background-color: #ff91a4;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ff7086;
  }
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup {
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  .pop-wrap{
    padding-bottom: 12px;
    h3{
      font-weight: 700;
      font-size: 18px;
      padding-bottom: 12px;
    }

    .pop-sub-wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      padding-bottom: 12px;

      p{
        display: flex;
        gap: 12px;
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 10px 0;
          color: #E57373;
          font-size: 16px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #ff91a4;
        }

        .contact-link i {
          font-size: 18px;
        }
      }

      span{
        font-weight: 500;
        color: #757575;
        font-size: 16px;
      }

    }
  }
}

.close-popup {
  width: 100%;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
  background-color: #ff91a4;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.close-popup:hover {
  background-color: #E57373;
}
</style>