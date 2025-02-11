<template>
  <div
      class="letter-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="letter"
  >

    <div class="click-area">
      <div
          class="envelope"
          :class="{ 'is-open': isContentVisible }"
          @click="toggleContent"
      >
        <!-- 편지 봉투 -->
        <div class="flap">
          <div class="flap-content" v-if="!isContentVisible">
            <span class="flap-text">신랑&신부에게 편지보내기</span>
          </div>
        </div>
        <div class="letter">
          <div class="letter-box">
            <div class="letter-header" >개인편지 전달하기</div>
            <div class="letter-body">
              <input type="text" @click.stop placeholder="보내는분 성함을 적어주세요" v-model="userName"/>

              <!-- textarea에 이벤트 차단 -->
              <textarea
                  rows="5"
                  placeholder="여기에 편지를 작성하세요."
                  v-model="userLetter"
                  @click.stop
              ></textarea>
            </div>
            <div v-if="!btnFlag" class="letter-footer" @click="sendLetter($event)">보내기</div>
            <div v-else class="letter-footer none">보내기</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import emailjs from "emailjs-com";

export default {
  name: "letterDefault",
  data() {
    return {
      btnFlag: false,
      userName: '',
      userLetter: '',
      isContentVisible: false, // 편지가 열리는 상태
      isVisible: false, // 애니메이션 트리거
      isEditing: false,
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
        { threshold: 0.4 }
    );

    observer.observe(this.$refs.letter);
  },

  methods: {
    sendLetter(event){
      event.stopPropagation();

      if (this.userName === '') {
        alert('보내는 분의 성함을 적어주세요');
        return false;
      }

      if (this.userLetter === '') {
        alert('편지내용을 적어주세요')
        return false;
      }

      this.btnFlag = true;
      if (this.btnFlag) {
        // 개인으로 사용하실 거면 이메일JS 가입 후 별도 SDK 부탁드립니다!
        emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY);
        emailjs
            .send("service_portfolio", "template_5lovp15", {
              to_name: this.userName,
              from_name: 'chungrimi.com',
              message: this.userLetter,
            })
            .then(() => {
              this.userName = '';
              this.userLetter = '';
              this.btnFlag = false;
              alert("신랑신부에게 편지가 전달됐습니다.");
            })
            .catch(() => {
              alert("API 통신에러");
            });
      }
    },
    toggleContent() {
      this.isContentVisible = !this.isContentVisible; // 열고 닫기 토글
    },
  },
};
</script>
<style scoped>
.letter-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  width: 100%;

  /* 클릭 시 나오는 영역 */
  .click-area {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

    /* 봉투 전체 */
    .envelope {
      width: 100%;
      height: 260px;
      position: relative;
      perspective: 1000px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    /* 봉투 윗면 (플랩) */
    .flap {
      width: 100%;
      height: 100%;
      border: 0.6px solid #b0b0b0;
      background: #fff;
      position: absolute;
      justify-content: center;
      align-items: center;
      display: flex;
      top: 0;
      left: 0;
      transform-origin: left; /* 봉투가 왼쪽에서 열리도록 설정 */
      transform: translateX(0); /* 초기 상태: 왼쪽으로 숨겨짐 */
      transition: transform 0.5s ease-in-out;
      z-index: 2;

      /* 종이 질감 효과 */
      background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(240, 240, 240, 1) 100%
      ),
      linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          rgba(255, 255, 255, 0.4) 50%,
          rgba(255, 255, 255, 0.2) 75%
      );
      background-blend-mode: multiply;
      filter: brightness(0.98) contrast(1.02);
    }

    /* 플랩 내용 */
    .flap-content {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
    }

    .flap-text {
      display: inline-block;
      background: #ff91a4;
      padding: 6px 12px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      animation: pulse 2s infinite;
    }
    .flap-text:hover {
      background: #ff7086;
    }

    /* 봉투 펼쳐지는 애니메이션 */
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    /* 봉투 펼쳐졌을 때 */
    .envelope.is-open .flap {
      transform: translateX(-100%);
    }

    /* 편지 속지 */
    .letter {
      width: 100%;
      height: 100%;
      background: #fff;
      border: 0.6px solid #b0b0b0;
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      opacity: 0;
      transform: translateX(20px); /* 오른쪽에서 살짝 들어오는 효과 */
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

      background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(240, 240, 240, 1) 100%
      ),
      linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          rgba(255, 255, 255, 0.4) 50%,
          rgba(255, 255, 255, 0.2) 75%
      );
      background-blend-mode: multiply;
      filter: brightness(0.98) contrast(1.02);
    }

    /* 편지 내용 스타일 */
    .letter-box {
      line-height: 1.6;
    }

    .letter-header {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
      color: black;
    }

    .letter-body input {
      width: 100%;
      background: #fff;
      border: 0.6px solid #b0b0b0;
      border-radius: 5px;
      padding: 10px;
      resize: none;
      font-size: 14px;
    }

    .letter-body textarea {
      width: 100%;
      height: 80px;
      background: #fff;
      border: 0.6px solid #b0b0b0;
      border-radius: 5px;
      padding: 10px;
      resize: none;
      font-size: 14px;
    }
    .letter-body input:hover,
    .letter-body textarea:hover {
      border: 0.6px solid #ff91a4;
    }


    .letter-body input:focus-within,
    .letter-body textarea:focus-within {
      background: #FFF4F4;
      border: 0.6px solid #ff91a4;
    }

    .letter-footer {
      margin-top: 20px;
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

    .none {
      opacity: 0.5;
    }

    .letter-footer:hover{
      background: #ff7086;
    }

    /* 펼쳐졌을 때 편지 내용 */
    .envelope.is-open .letter {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
.letter-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>