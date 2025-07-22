<template>
  <main>
    <!-- 사업설명 -->
    <header class="header">
      <h1 class="site-title text_01">모바일청첩장 제작하기</h1>
      <p class="site-description text_02">
        결혼준비에 필요한 모바일청첩장을 직접<br/>
        만들어 보시고 사용하세요
      </p>

    </header>

    <ins class="kakao_ad_area" style="display:none;"
         data-ad-unit = "DAN-sTUDpUwdWGann1rV"
         data-ad-width = "320"
         data-ad-height = "100"></ins>
    <!--    <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>-->

    <!-- 광고 배너 -->
    <!--    <section class="ad-banner">-->
    <!--      <a href="https://github.com/knm8643/wedding-public" target="_blank" class="ad-link placeholder-banner">-->
    <!--        소스가 궁금하세요?<br>누구든지 볼수 있게 오픈했습니다.-->
    <!--      </a>-->
    <!--    </section>-->

    <!-- 이용방법 -->
    <section class="hero">
      <div class="hero_wrap">
        <h2 class="text_03">
          이용방법
        </h2>
        <label for="steps-toggle" class="steps-label text_04">확인하기
        </label>
      </div>

      <input type="checkbox" id="steps-toggle" class="steps-toggle">
      <ul class="steps">
        <li>
          <div class="li-wrap">
            <h2 class="text_05">디자인 선택</h2>
          </div>
          <div class="li-font">
            <p class="text_02">
              원하는 타이틀을 선택하고 디자인을 확인하세요.
            </p>
          </div>
        </li>
        <li>
          <div class="li-wrap">
            <h2 class="text_05">커스텀</h2>
          </div>
          <div class="li-font">
            <p class="text_02">
              하단 깃 로고를 눌러 소스를 받아 직접 수정하세요.
            </p>
          </div>
        </li>
        <li>
          <div class="li-wrap">
            <h2 class="text_05">제작문의
            </h2>
          </div>
          <div class="li-font">
            <p class="text_02">
              직접 수정이 어렵다면 하단 카카오톡 문의하기를 클릭하세요.
              맞춤 제작 및 배포 도와드립니다.
            </p>
          </div>
        </li>
      </ul>
    </section>

    <!-- 초대장 리스트 -->
    <section class="template-list">
      <div class="template-cards">
        <div class="template-card" v-for="(template, index) in templates" :key="template.id"
             @click="openMoblie(index)"
        >
          <div v-if="template.image" class="img-wrap">
            <img :src="template.image" alt="Template Image" class="template-image">
          </div>
          <div class="img-font-wrap" :style="template.image ? { padding: '2rem 0 2rem' } : {}">
            <p class="template-name text_05">{{ template.name }}</p>
            <span class="text_02">{{ template.description }}</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </section>

    <!-- 제작자 및 정보 -->
    <footer class="footer">
      <ul class="footer-container">
        <li>
          <a href="https://pf.kakao.com/_xjmCjn/chat" target="_blank" class="contact-link text_02">
            카카오톡 문의하기
          </a>
        </li>
        <li>
          <p class="text_02">Crafted by knm8643, 2025</p>
          <a href="https://github.com/knm8643/wedding-public" class="contact-link">
            <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 496 512">
              <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  </main>

  <!-- 초대장 세부정보 -->
  <transition name="popup-fade">
    <MobilePopup v-if="isPopupVisible" :current="current">
    </MobilePopup>
  </transition>
</template>
<script>
import MobilePopup from "@/components/MobilePopup.vue";
export default {
  components: {MobilePopup},
  data() {
    return {
      current: 0,
      isPopupVisible: false,
      templates: [
        { id: 1, name: '봄날의 청첩장', description: '최소한의 디자인 속에 봄날을 담은 청첩장', image: null },
        { id: 2, name: '핑크빛 청첩장', description: '봄날의 설렘을 담아보고자 했던 청첩장', image: null },
        { id: 3, name: '클래식 청첩장', description: '대중적으로 볼 수 있는 디자인의 청첩장', image: null },
        { id: 4, name: '모던한 청첩장', description: '블랙앤 화이트 톤으로 아름다움을 준 청접장', image: null },
      ],
    };
  },
  mounted() {
    const s = document.createElement('script');
    s.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    s.async = true;
    document.body.appendChild(s);

    this.urlCheck();
  },

  methods: {
    urlCheck() {
      // -------------------------
      // --- URL 오픈
      // -------------------------
      const current = this.$route.query.current;
      if (current !== undefined) {
        this.current = parseInt(current);
        this.isPopupVisible = true;
      }
    },
    openMoblie(index) {
      // -------------------------
      // --- 팝업창 직접오픈
      // -------------------------
      const redirectUrl = location.href + '?current=' + index + '&infoKey=%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A0%84%EC%9A%A9';
      window.location.href = redirectUrl;
    },
  },
};
</script>
<style scoped lang="scss">
// ------------------
// --- 메인
// ------------------
main {
  background-color: #fff;
  font-family: 'LINESeedKR', sans-serif !important;
  margin: 0 auto;
  position: relative;
  max-width: 475px;
  min-width: 320px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 2rem 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

// ------------------
// --- 소개
// ------------------
.header {
  text-align: left;
  margin: 2rem 0 1rem;
  font-family: 'LINESeedKR', sans-serif !important;
  .site-description {
    margin-top: 1rem;
  }
}

// ------------------
// --- 광고 배너
// ------------------
.ad-banner {
  margin: 1rem 0 2rem;
  text-align: center;

  .ad-link {
    display: inline-block;
    width: 100%;
    max-width: 440px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-4px);
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .placeholder-banner {
    background: repeating-linear-gradient(
            45deg,
            #f2f2f2,
            #f2f2f2 10px,
            #e0e0e0 10px,
            #e0e0e0 20px
    );
    color: #666;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    padding: 1.6rem 1rem;
  }
}

// ------------------
// --- 이용방법
// ------------------
.hero {
  font-family: 'LINESeedKR', sans-serif !important;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  margin-bottom: 2rem;
  text-align: center;
  transition: padding 0.3s ease;

  .steps-toggle {
    display: none;
  }

  .hero_wrap{
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .steps-label {
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .steps-label:active{
      text-decoration: underline;
    }
  }


  .steps {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    li {
      font-size: 1.1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      opacity: 0;
      transition: opacity 0.5s ease-out;
      line-height: 1.6;

      .li-wrap{
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .li-font{
        margin-top: 0.3rem;
        text-align: left;
      }
    }

    li:first-child {
      border-top: 1px solid #ddd;
      padding-top: 2rem;
      margin-top: 1rem;
    }
    li:last-child {
      margin-bottom: 1rem;
    }
  }


  .steps-toggle:checked ~ .steps {
    max-height: 500px;
  }

  .steps-toggle:checked ~ .steps li {
    opacity: 1;
  }
}

// ------------------
// --- 아이템 리스트
// ------------------
.template-list {
  max-height: 100%;
  padding-bottom: 2.5rem;
  margin: 0 0 2rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  font-family: 'LINESeedKR', sans-serif !important;

  .template-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2.1rem;
  }

  .template-card {
    border-radius: 0.5rem;
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
    }

    &:hover{
      cursor: pointer;
    }

    .template-image {
      width: 80%;
      height: auto;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .template-name {
      margin: 0.5rem 0;
    }

    .img-wrap {
      padding-top: 52.1921%;
      width: 100%;
      position: relative;
      background-color: #ddd;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: inherit;
        mix-blend-mode: multiply;
      }
      img {
        position: absolute;
        height: 100%;
        width: 100%;
        inset: 0;
        color: transparent;
        display: block;
        object-fit: cover;
      }
    }

    .img-font-wrap{
      width: 100%;
      text-align: left;
    }
  }
}

// ------------------
// --- 제작자 정보
// ------------------
.footer {
  font-family: 'LINESeedKR', sans-serif !important;
  padding: 1rem 0;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .footer-container {
    li:last-child {
      margin-top: 2px;
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 6px;
    }

    li {
      font-size: 1rem;
      display: flex;
      gap: 0.3rem;
      justify-content: left;
      color: #666;
    }

    .contact-link {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 0.2rem;
      transition: color 0.3s;

      .footer-icon {
        fill: #666;
        transition: fill 0.3s;
        &:hover {
          fill: rgb(37 99 235);
        }
      }

      &:hover {
        color: #007bff;
        text-decoration: underline;
      }
    }
  }
}
</style>