<template>
  <div
      class="introPlus-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="introList"
  >
    <div class="address-main-font">
      <p>wellcome</p>
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
        <button>
          <span>신랑 & 신부에게 연락하기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPlusFont",
  data() {
    return {
      isVisible: false,
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

    observer.observe(this.$refs.introList);
  },

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
        font-weight: 700;
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
}

.introPlus-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>