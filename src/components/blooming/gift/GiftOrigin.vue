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
        <h3>신부측</h3>
        <p>
          신부 : 0111-212312213-21 (신한은행)
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-21')"></i>
        </p>
        <p>
          신부 어머니 : 0111-212312213-22 (신한은행)
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-22')"></i>
        </p>
      </div>
      <div class="font-wrap">
        <h3>신랑측</h3>
        <p>
          신랑 : 0111-212312213-21 (카카오뱅크)
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-21')"></i>
        </p>
        <p>
          신랑 어머니 : 0111-212312213-22 (카카오뱅크)
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-22')"></i>
        </p>
        <p>
          신랑 아버지 : 0111-212312213-23 (카카오뱅크)
          <i class="fas fa-copy copy-icon" @click="copyToClipboard('0111-212312213-23')"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GiftOrigin",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
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
      const textArea = document.createElement('textarea');
      textArea.value = number;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
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
    h3{
      text-align: center;
      color:  #191c21;
      font-size: 21px;
      font-weight: 700;
    }
  }

  .gift-info-wrap{
    padding: 24px 0 12px;
    margin: 12px 24px 24px;
    border-top: 0.6px solid #b0b0b0;
    .font-wrap {
      padding: 12px 0;

      h3 {
        white-space: nowrap;
        font-size: 18px;
        color: black;
        font-weight: 500;
        padding-bottom: 12px;
      }

      p{
        padding-bottom: 16px;
        font-weight: 500;
        font-size: 16px;
        color: #757575;
        white-space: nowrap;
      }

      .copy-icon {
        cursor: pointer;
        color: #fa8ea8;
        transition: color 0.3s;
        margin-left: 10px;

      }

      .copy-icon:hover {
        color: #E57373;
      }
    }
  }
}

.gift-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>