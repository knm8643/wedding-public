<template>
  <main class="main">
    <div class="main-wrap">
      <!-- 헤더 영역 -->
      <header class="main-header">
        <div class="logo">CHUNGRIMI</div>
        <button class="menu-btn" @click="toggleMenu">알아보기</button>
      </header>

      <!-- 메뉴탭 영역 -->
      <div class="menu-tab" :class="{ open: isMenuOpen }">
        <ul :style="{ height: isMenuOpen ? '100vh' : 'auto' }">
          <li>
            <a @click="sendUrlGit">
              소스코드 바로 확인하기
            </a>
          </li>
          <li>
            <a href="https://torch-knave-705.notion.site/15b6b12f8d3580a395c5ea297195a434?pvs=74" target="_blank">
              경력 기술서 자세히 보기
            </a>
          </li>
          <li>
            <a @click="goPush">
              제작자 이력서 확인하기
            </a>
          </li>
          <li>
            <a href="https://pf.kakao.com/_xjmCjn/chat" target="_blank">
              맞춤 제작 의뢰하기
            </a>
          </li>
        </ul>
      </div>

      <!-- 메인 컨테이너 -->
      <div class="main-container">
        <section class="intro" :class="{ 'menu-open': isMenuOpen }">
          <div class="title">
            <div class="title-img">
              <img src="@/assets/images/favicon.png" alt="Scroll Icon" class="" />
            </div>
            <div class="title-font">
              손쉽게 만드는<br/>
              나만의 무료 모바일 초대장<br/>
              <em>충리미</em>와 함께하세요
            </div>
            <div class="title-footer">
              <img src="@/assets/svg/scroll.svg" alt="Scroll Icon" class="scroll-icon" />
            </div>
          </div>
        </section>
        <section class="list" :class="{ 'menu-open': isMenuOpen }">
          <div class="list-wrap">
            <div class="list-header">
              둘러보세요
            </div>
            <div class="list-font">
              원하는 스타일의 <br/>
              초대장을 클릭하면 <em>템플릿</em> <br/>
              정보를 볼 수 있어요
            </div>
            <div class="list-container">
              <ul class="box">
                <li v-for="(item, index) in items"
                    @click="openMoblie(index)"
                    :key="index" class="box-content" :style="{ background: item.background }">
                  <div class="box-font">
                    <button @click="copyLink(index, $event)" class="header-btn" :style="{ background: item.buttonBackground }">
                      <span>{{ item.buttonText }}</span>
                    </button>
                    <p v-html="item.text"></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="toast" v-if="showToast">{{ toastMessage }}</div>
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
      items: [
        { text: '신부만의<br/> 디자인 감각이 더한<br/>세련된 초대장', background: '#3E5879', buttonBackground: '#A594F9', buttonText: '공유하기' },
        { text: '기본이지만<br/> 충분히 예쁜 초대장', background: '#CDC1FF', buttonBackground: '#A594F9', buttonText: '공유하기' },
        { text: '세상에서 제일로<br/> 간단한 초대장', background: '#DCC1FF', buttonBackground: '#A594F9', buttonText: '공유하기' },
        { text: '잠시 기다려주세요<br/> 곧 오픈합니다!', background: '#A294F9', buttonBackground: '#CDC1FF', buttonText: '공사중' },
      ]
    };
  },
  mounted() {
    this.appCheck();
    this.urlCheck();

    const observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const sections = document.querySelectorAll('.main-container section');
    sections.forEach(section => {
      observer.observe(section);
    });

    this.animationCheck();
  },

  methods: {
    animationCheck() {
      const box = document.querySelector('.box');
      const items = document.querySelectorAll('.box-content');
      let currentIndex = 0;
      let scrollTimer = null;

      // 특정 li 태그를 중앙으로 이동하는 함수
      const scrollToItem = (index) => {
        const item = items[index];
        const boxWidth = box.clientWidth;
        const itemLeft = item.offsetLeft;

        // 스크롤 애니메이션
        box.scrollTo({
          left: itemLeft - boxWidth / 2 + item.clientWidth / 2,
          behavior: 'smooth',
        });
      };

      // 순차적으로 li 태그 이동
      const scrollToNextItem = () => {
        scrollToItem(currentIndex); // 현재 인덱스의 li 태그로 스크롤
        currentIndex = (currentIndex + 1) % items.length; // 마지막 인덱스일 경우 0으로 초기화
      };

      // 초기 실행
      scrollToItem(currentIndex);

      // 3초마다 다음 li 태그로 이동
      scrollTimer = setInterval(scrollToNextItem, 3000);

      // 클릭 시 스크롤 애니메이션 일시 중지
      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          clearInterval(scrollTimer); // 스크롤 중단
          scrollToItem(index); // 클릭한 항목으로 이동
          setTimeout(() => {
            scrollTimer = setInterval(scrollToNextItem, 3000); // 3초 후 다시 시작
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

      if(current !== undefined) {
        if(current === '이스터에그'){
          this.$router.push({
            name: 'EasterEgg',
            query: {
              current,
              infoKey
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
.main {
  margin: 0 auto;
  font-family: "-apple-system", "BlinkMacSystemFont", "Apple SD Gothic Neo", "Noto Sans KR", "Roboto", "Helvetica Neue", "Arial", sans-serif;
  position: relative;
  max-width: 475px;
  min-width: 320px;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .main-wrap {
    position: relative;
    width: 100%;
    height: 100%;

    /* 헤더 스타일 */
    .main-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 56px;
      border-bottom: 0.6px solid #b0b0b0;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      max-width: 475px;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);

      .logo {
        font-size: 18px;
        font-weight: bold;
      }

      .menu-btn {
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .menu-tab {
      position: fixed;
      top: -100%;
      left: 50%;
      width: 100%;
      max-width: 475px;
      margin: 0 auto;
      transform: translateX(-50%);
      background-color: #f8f9fa;
      transition: top 0.4s ease-in-out;
      z-index: 9;

      &.open {
        top: 56px;
      }

      ul {
        list-style: none;
        padding: 16px;
        margin: 0;

        li {
          line-height: 1.8;
          padding: 12px 0 6px;
          font-size: 16px;
          border-bottom: 0.6px solid #ddd;
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    .main-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;
      transition: background-color 0.2s ease;

      &::-webkit-scrollbar {
        display: none;
      }

      section {
        width: 100%;
        height: 100vh;
        scroll-snap-type: y mandatory;
        scroll-snap-align: start;
        display: flex;
        align-items: center;
        justify-content: center;

        &.intro {
          background-color: #F5EFFF;
          .title {
            padding: 0 24px;;
            text-align: center;
            width: 100%;

            .title-img{
              transition-delay: .65s;
              transition-duration: .8s;
              transition-timing-function: ease-in-out;
              opacity: 0;

              img{
                width: 75px;
              }


              &.fade-in {
                opacity: 1;
              }
            }

            .title-font {
              margin-top: 20px;
              font-weight: 700;
              color: #0b0d0f;
              word-break: keep-all;
              position: relative;
              font-size: 26px;
              line-height: 1.8;
              transition-delay: 1.1s;
              transition-duration: .8s;
              transition-timing-function: ease-in-out;
              opacity: 0;

              em{
                font-style: normal;
                color: #9B7EBD;
              }

              &.fade-in {
                opacity: 1;
              }
            }

            .title-footer {
              margin-top: 52px;
              transition-delay: 1.6s;
              transition-duration: .8s;
              transition-timing-function: ease-in-out;
              opacity: 0;

              .scroll-icon {
                display: block;
                margin: 20px auto;
                width: 36px;
                opacity: 1;
                animation: bounce 1.5s infinite;
              }

              @keyframes bounce {
                0% {
                  transform: translateY(0);
                  opacity: 1;
                }
                50% {
                  transform: translateY(10px);
                  opacity: 0.5;
                }
                100% {
                  transform: translateY(0);
                  opacity: 1;
                }
              }

              &.fade-in {
                opacity: 1;
              }
            }
          }
        }

        &.list {
          background-color: #f9f9f9;

          .list-wrap {
            text-align: center;
            padding: 54px 24px 0;
            min-height: 100vh;
            width: 100%;
            flex-direction: column;
            display: flex;
            justify-content: flex-start;
            padding-bottom: env(safe-area-inset-bottom);

            .list-header{
              font-size: 17px;
              line-height: 2;
              font-weight: 700;
              text-align: center;
              color: #9B7EBD;
              margin: 62px 0 10px;

            }

            .list-font {
              font-weight: 700;
              color: #0b0d0f;
              word-break: keep-all;
              position: relative;
              font-size: 26px;
              line-height: 1.6;

              em {
                font-style: normal;
                color: #9B7EBD;
              }
            }
            .list-container {
              margin-top: 20px;
              width: 100%;

              .box {
                display: flex;
                width: 100%;
                gap: 24px;
                overflow-x: auto;
                padding: 21px 0;

                -ms-overflow-style: auto;
                scrollbar-width: auto;

                &.hide-scroll {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }

                &.hide-scroll::-webkit-scrollbar {
                  display: none;
                }

                .box-content {
                  font-size: 18px;
                  min-width: 265px;
                  height: 275px;
                  background: #CDC1FF;
                  border-radius: 26px;
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                  padding: 16px;
                  transition: transform 0.3s ease;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: calc(30%);
                  max-width: 305px;

                  .box-font{
                    font-weight: 700;
                    color: #ffffff;
                    word-break: keep-all;
                    position: relative;
                    line-height: 1.4;
                    .header-btn {
                      font-size: 14px;
                      border-radius: 999px;
                      background: #A594F9;
                      padding: 2px 12px;
                    }
                    p{
                      margin: 16px 0 24px;
                      font-size: 24px;
                      word-break: keep-all;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    }
                    .btn-info {
                      margin-top: 16px;

                      button {
                        padding: 4px 16px;
                        font-size: 14px;
                        border: none;
                        border-radius: 20px;
                        cursor: pointer;
                        transition: background-color 0.3s ease, transform 0.2s ease;

                        span {
                          color: white;
                        }
                        &:first-child {
                          background-color: #4caf50;
                          &:hover {
                            background-color: #45a049;
                            transform: translateY(-2px);
                          }
                        }
                        &:last-child {
                          background-color: #9b7cf7;

                          &:hover {
                            background-color: #9b7cf7;
                            transform: translateY(-2px);
                          }
                        }
                        &:active {
                          transform: translateY(1px);
                        }
                      }
                    }
                  }
                  &:last-child {
                    opacity: 0.3;
                    pointer-events: none;
                  }
                  &:hover {
                    cursor: pointer;
                    transform: translateY(-10px);
                  }
                }
                .box-content.clicked {
                  transform: translateY(-10px);
                }
              }
            }
          }
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1000%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          z-index: 2;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        &.menu-open::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>