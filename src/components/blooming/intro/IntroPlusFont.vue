<template>
  <div
      class="introPlus-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="introList"
  >
    <div class="address-main-font">
      <p>Wellcome</p>
      <div class="font-wrap">
        <span>서로에게 흔들림 없는 믿음으로 <br/> 사랑을 함께 키워  <br/> 두 사람은 결실을 맺으려 합니다</span><br/>
        <span>서로에게 따뜻한 마음으로 <br/>  행복한 미래를 그리는 저희에게 응원과  <br/> 축복을 부탁드립니다</span>
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
      <div class="content-box">
        <button @click="openPopup">
          <span>신랑 & 신부에게 연락하기</span>
        </button>
      </div>
    </div>
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
export default {
  name: "IntroPlusFont",
  data() {
    return {
      isVisible: false,
      showPopup: false,
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
        { threshold: 0.5 }
    );

    observer.observe(this.$refs.introList);
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  }

}
</script>

<style scoped>
.introPlus-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  .address-main-font{
    padding: 0 0 68px;
    .font-wrap {
      text-align: center;
      padding: 106px 20px 0;
      span {
        color: #E57373;
        font-weight: 700;
        font-size: 21px;
        font-family: 'ownglyph', sans-serif !important;
        line-height: 1.8;
        margin-bottom: 6px;
        letter-spacing: 1px;
        display: block;

        &:nth-child(n+3) {
          margin-top: 16px;
        }
      }
    }

    p {
      font-size: 36px;
      font-weight: 400;
      color: #FFC0CB;
      text-align: center;
      line-height: 1.4;
      -webkit-text-stroke: 1px #FF69B4;
    }
  }
  .content-fmInfo{
    padding: 0 24px 68px;
    .fmInfo {
      display: flex;
      line-height: 1.8;
      gap: 9px;
      align-items: center;
      justify-content: center;
      padding-top: 4px;
      p{
        font-family: 'ownglyph', sans-serif !important;
        color: #FFC0CB;
        font-weight: 400;
        font-size: 28px;
        -webkit-text-stroke: 1px #FF69B4;
      }
      span {
        font-family: 'ownglyph', sans-serif !important;
        color: #b0b0b0;
        font-weight: 500;
        font-size: 21px;
        line-height: 1.8;
      }
    }
  }
  .content-box {
    z-index: 8;
    position: relative;
    color: #FF69B4;
    margin-top: 28px;

    button{
      border: 1px solid #FF69B4;
      border-radius: 999px;
      padding: 6px 24px;
      width: 100%;

      span {
        font-family: 'ownglyph', sans-serif!important;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
}

.introPlus-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 팝업관련 CSS */
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
    font-family: 'ownglyph', sans-serif !important;
    padding-bottom: 12px;
    letter-spacing: 1px;
    h3{
      font-weight: 700;
      font-size: 19px;
      padding-bottom: 12px;
      color: #FF69B4;
    }

    .pop-sub-wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      padding-bottom: 5px;

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
        font-weight: 700;
        color: #E57373;
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