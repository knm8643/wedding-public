<template>

  <main>
    <!-- Header -->
    <header class="header">
      <h1 class="site-title text_01">초대장 사용하기</h1>
      <p class="site-description text_02">
        결혼준비에 필요한 모바일청첩장을 직접<br/>
        만들어 보시고 사용하세요
      </p>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero_wrap">
        <h2 class="text_03">이용방법</h2>
        <label for="steps-toggle" class="steps-label text_04">확인하기</label>
      </div>

      <input type="checkbox" id="steps-toggle" class="steps-toggle">
      <ul class="steps">
        <li>
          <span class="step-number">1</span>
          <p></p>

          템플릿 선택
        - 직접 선택뒤 뭐시기뭐시기~</li>
        <li><span class="step-number">2</span> 내용 작성</li>
        <li><span class="step-number">3</span> 공유하기</li>
      </ul>
    </section>

    <!-- Template List Section -->
    <section class="template-list">
      <div class="template-cards">
        <div class="template-card" v-for="template in templates" :key="template.id">
          <img v-if="template.image" :src="template.image" alt="Template Image" class="template-image">
          <p class="template-name text_03">{{ template.name }}</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <ul class="footer-container">
        <li>
          문의하기
        </li>
        <li>
          <p>Developed by knm8643 in 2025</p>
          <a href="mailto:knm8643@nate.com" class="contact-link">
            <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 496 512">
              <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  </main>
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
      showToast: false,
      toastMessage: '',
      current: 0,
      isPopupVisible: false,
      isMenuOpen: false,
      templates: [
        {id: 1, name: '모던 초대장', description: '', image: null},
        {id: 2, name: '심플 초대장', description: '', image: null},
        {id: 3, name: '클래식 초대장', description : '', image: null},
      ],
    };
  },
  mounted() {
    // this.appCheck();
    // this.urlCheck();
    //
    // const observer = new IntersectionObserver(this.handleIntersection, {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.5,
    // });
    //
    // const sections = document.querySelectorAll('.main-container section');
    // sections.forEach(section => {
    //   observer.observe(section);
    // });
    //
    // this.animationCheck();
  },

  methods: {
    animationCheck() {
      const box = document.querySelector('.box');
      const items = document.querySelectorAll('.box-content');
      let currentIndex = 0;
      let scrollTimer = null;

      const scrollToItem = (index) => {
        const item = items[index];
        if (item !== undefined) {
          const boxWidth = box.clientWidth;
          const itemLeft = item.offsetLeft;

          box.scrollTo({
            left: itemLeft - boxWidth / 2 + item.clientWidth / 2,
            behavior: 'smooth',
          });
        }
      };

      const calculateCurrentIndex = () => {
        const boxWidth = box.clientWidth;
        const scrollLeft = box.scrollLeft;
        return Math.round(scrollLeft / boxWidth);
      };

      const scrollToNextItem = () => {
        currentIndex = calculateCurrentIndex();
        currentIndex = (currentIndex + 1) % items.length;
        scrollToItem(currentIndex);
      };

      scrollToItem(currentIndex);
      scrollTimer = setInterval(scrollToNextItem, 3000);

      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          clearInterval(scrollTimer);
          currentIndex = calculateCurrentIndex();
          scrollToItem(index);
          setTimeout(() => {
            scrollTimer = setInterval(scrollToNextItem, 3000);
          }, 3000);
        });
      });
    },
    appCheck() {
      const isMobileApp = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // 간단한 모바일 앱 환경 감지 (수정 가능)
        return /android|iphone|ipad|ipod/i.test(userAgent) && window.matchMedia('(display-mode: standalone)').matches;
      };

      // 앱 환경에서는 스크롤 숨김 클래스 추가
      if (isMobileApp()) {
        document.querySelector('.box').classList.add('hide-scroll');
      }
    },
    urlCheck() {
      const current = this.$route.query.current;
      const infoKey = this.$route.query.infoKey;

      if (current !== undefined) {
        if (current === '이스터에그') {
          this.$router.push({
            name: 'EasterEgg',
            query: {
              current,
              infoKey
            }
          });
        } else if (current === '게임') {
          this.$router.push({
            name: 'EasterGame',
            query: {
              current,
            }
          });
        } else {
          this.$router.push({
            name: 'MobilePopup',
            query: {
              current,
              infoKey
            }
          });
        }
      }
    },
    openMoblie(index) {
      if (index >= 3) {
        return alert('제작중입니다.');
      }
      const target = document.querySelectorAll('.box-content')[index];
      this.triggerClickEffect(target);

      setTimeout(() => {
        const redirectUrl = location.href + '?current=' + index + '&infoKey=%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A0%84%EC%9A%A9';
        window.location.href = redirectUrl;
      }, 300);
    },

    copyLink(index, event) {
      event.stopPropagation();
      const target = document.querySelectorAll('.box-content')[index];
      this.triggerClickEffect(target);

      setTimeout(() => {
        const urlToCopy = location.href + '?current=' + index + '&infoKey=%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A0%84%EC%9A%A9';
        navigator.clipboard.writeText(urlToCopy)
            .then(() => {
              alert('URL이 클립보드에 복사되었습니다!');
            })
            .catch(() => {
              alert('URL 복사에 실패했습니다.');
            });
      }, 300);
    },

    triggerClickEffect(target) {
      if (!target) return;
      target.classList.add('clicked');

      setTimeout(() => {
        target.classList.remove('clicked');
      }, 500);
    },

    sendUrlGit() {
      window.open('https://github.com/knm8643/wedding-public', '_blank');
    },
    goEaster() {
      const current = '게임';
      this.$router.push({
        name: 'EasterGame',
        query: {
          current,
        }
      });
    },
    goPush() {
      const current = '이스터에그';
      const infoKey = '';

      // 사용자 에이전트를 통해 PC인지 체크
      const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isPC) {
        this.$router.push({
          name: 'EasterEgg',
          query: {
            current,
            infoKey
          }
        });
      } else {
        alert('PC 환경에서 확인해 주세요');
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      const menuBtn = document.querySelector('.menu-btn');
      if (this.isMenuOpen) {
        menuBtn.classList.add('open');
      } else {
        menuBtn.classList.remove('open');
      }
    },

    handleIntersection(entries) {
      entries.forEach(entry => {
        const footer = entry.target.querySelector('.title .title-footer');
        const title = entry.target.querySelector('.title .title-font');
        const img = entry.target.querySelector('.title .title-img');

        if (entry.isIntersecting) {
          this.addFadeIn(footer, title, img);
        } else {
          this.removeFadeIn(footer, title, img);
        }
      });
    },

    addFadeIn(footer, title, img) {
      if (img && !img.classList.contains('fade-in')) {
        img.classList.add('fade-in');
      }
      if (title && !title.classList.contains('fade-in')) {
        title.classList.add('fade-in');
      }
      if (footer && !footer.classList.contains('fade-in')) {
        footer.classList.add('fade-in');
      }
    },

    removeFadeIn(footer, title, img) {
      if (footer && footer.classList.contains('fade-in')) {
        footer.classList.remove('fade-in');
      }
      if (title && title.classList.contains('fade-in')) {
        title.classList.remove('fade-in');
      }
      if (img && img.classList.contains('fade-in')) {
        img.classList.remove('fade-in');
      }
    },
  },
};
</script>
<style scoped lang="scss">
main {
  margin: 0 auto;
  position: relative;
  max-width: 475px;
  min-width: 320px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.header {
  text-align: left;
  margin: 2.5rem 0;

  .site-description {
    margin-top: 1rem;
  }
}

.hero {
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
    .steps-label:hover{
      text-decoration: underline;
    }
  }


  .steps {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;

    li {
      font-size: 1.1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      opacity: 0;
      transition: opacity 0.5s ease-out;
      line-height: 1.6;
      padding: 1rem;

      .step-number {
        background: #A594F9;
        color: white;
        font-size: 2rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* 설명 텍스트 스타일 */
      span {
        font-weight: 600;
        color: #555;
      }

      /* 부가설명 추가 스타일 */
      p {
        font-size: 1rem;
        color: #777;
        margin-top: 0.5rem;
        text-align: center;
        line-height: 1.5;
      }
    }
  }


  .steps-toggle:checked ~ .steps {
    max-height: 500px;
  }

  .steps-toggle:checked ~ .steps li {
    opacity: 1;
  }
}

.template-list {
  margin: 2rem 0;
  .template-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .template-card {
    border: 1px solid #ddd;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    .template-image {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .url-wrap{
      display: flex;
      padding: 0.6rem 0 0;
      border-top: 1px solid #ddd;
    }
  }
}

.footer {
  padding: 1rem 0;
  text-align: right;
  margin-bottom: 1rem;

  .footer-container {
    li:last-child{
      font-style: italic;
      margin-top: 0.6rem;
      display: flex;
      justify-content: right;
      align-items: flex-end;
      gap: 6px;
    }

    li {
      font-size: 0.9rem;
      color: #666;
    }

    .contact-link {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 0.2rem;

      .footer-icon {
        fill: #666;
        transition: fill 0.3s;
        &:hover {
          fill: #007bff;
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>