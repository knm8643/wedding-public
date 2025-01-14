<template>
  <div
      class="gift-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="gift"
  >
    <div class="gift-title">
      <h3>마음 전달하기</h3>
    </div>

    <div class="gift-info-wrap">
      <div class="font-wrap">
        <h3>&lt;신부측&gt;</h3>
        <p>
          신부측 : 0111-212312213-21
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-21')"></i>
        </p>
      </div>
      <div class="font-wrap">
        <h3>&lt;신랑측&gt;</h3>
        <p>
          신랑측 : 0111-212312213-21
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-21')"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "giftDefaultInfo",
  data() {
    return {
      isVisible: false, // 애니메이션 트리거
      isEditing: false,
      editedSection: {}, // 수정된 데이터
    };
  },
  props: {
    section: {
      type: [Array, Object],
      default: () => ([]),
    },
    update:{
      type: Boolean,
    },
    index:{
      type: Number
    }
  },
  mounted() {
    this.editedSection = JSON.parse(JSON.stringify(this.section)); // 데이터 복사
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true; // 애니메이션 활성화
            observer.disconnect(); // 중복 실행 방지
          }
        },
        { threshold: 0.4 } // 10%가 보이면 트리거
    );

    observer.observe(this.$refs.gift);
  },

  methods: {
    copyToClipboard(number) {
      // 새로운 텍스트 영역을 생성
      const textArea = document.createElement('textarea');
      textArea.value = number;  // 복사할 전화번호
      document.body.appendChild(textArea);
      textArea.select();  // 텍스트 선택
      document.execCommand('copy');  // 복사 명령 실행
      document.body.removeChild(textArea);  // 텍스트 영역 제거
      alert("복사되었습니다.")
    },
  },
};
</script>
<style scoped>
/* 애니메이션 */
.gift-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding: 0 0 12px;
  width: 100%;

  .gift-title {
    text-align: center;
    color:  #191c21;
    font-size: 21px;
    font-weight: 700;
  }

  .gift-info-wrap{
    padding: 24px 0 12px;
    margin: 12px 24px 24px;
    border-top: 0.6px solid #b0b0b0;
    .font-wrap {
      font-size: 18px;
      padding: 12px 0;
      h3 {
        color: black;

        font-weight: 700;
        padding-bottom: 12px;
        white-space: nowrap;
      }
      p{
        font-size: 21px;
        font-weight: 500;
        color: #757575;
        white-space: nowrap;
      }

      .copy-icon {
        cursor: pointer;
        margin-left: 10px;
        color: #fa8ea8;
        transition: color 0.3s;
      }

      .copy-icon:hover {
        color: #E57373;
      }
    }
  }

  .content-update{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    button {
      border: 1px solid black;
      padding: 2px 12px;
      font-size: 18px;
      font-weight: 500;
    }
    button:hover {
      background: #ff7086;
      font-weight: 700;
      color: #FFFFFF;
      border: 1px solid #ff7086;
    }
  }
}
.gift-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>