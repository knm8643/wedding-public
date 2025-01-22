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
              소스 코드 바로 확인하기
            </a>
          </li>
          <li>
            <a href="https://pf.kakao.com/_xjmCjn/chat" target="_blank">
              개발자에게 맞춤 제작 의뢰하기
            </a>
          </li>
          <li>
            <a href="https://torch-knave-705.notion.site/15b6b12f8d3580a395c5ea297195a434?pvs=74" target="_blank">
              개발자 정보 알아보기
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
              누구나 쉽게 이용할 수 있는 <br/>
              무료 모바일청첩장 <em>충리미</em>입니다
            </div>
            <div class="title-footer">
              <img src="@/assets/svg/scroll.svg" alt="Scroll Icon" class="scroll-icon" />
            </div>
          </div>
        </section>
        <section class="list" :class="{ 'menu-open': isMenuOpen }">
          <div class="list-wrap">
            <div class="list-font">
              원하는 스타일의 <br/>
              초대장을 찾아보세요 다양한<br/>
              <em>초대장</em>을 만나보세요
            </div>
            <div class="list-container">
              <ul class="box">
                <li v-for="(item, index) in items" :key="index" class="box-content" :style="{ background: item.background }">
                  <div class="box-font">
                    <button class="header-btn" :style="{ background: item.buttonBackground }">
                      <span>{{ item.buttonText }}</span>
                    </button>
                    <p v-html="item.text"></p>
                    <div class="btn-info">
                      <button @click="openMoblie(index)">
                        <span>확인하기</span>
                      </button>
                      <button @click="copyLink(index)">
                        <span>URL복사</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
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
      current: 0,
      isPopupVisible: false,
      isMenuOpen: false,
      items: [
        { text: '제작자의 초기<br/> 제작 템플릿1', background: '#CDC1FF', buttonBackground: '#A594F9', buttonText: '심플' },
        { text: '제작자의 초기<br/> 제작 템플릿2', background: '#FFCDC1', buttonBackground: '#F9A594', buttonText: '모던' },
        { text: '제작중', background: '#A294F9', buttonBackground: '#CDC1FF', buttonText: '디지털' },
        { text: '제작중', background: '#D8C4B6', buttonBackground: '#F9A594', buttonText: '화려' },
        { text: '제작중', background: '#3E5879', buttonBackground: '#F9A5F1', buttonText: '클래식' },
        { text: '제작중', background: '#DCC1FF', buttonBackground: '#F9DCA5', buttonText: '럭셔리' },
        { text: '제작중', background: '#CDC1FF', buttonBackground: '#A5F9D9', buttonText: '심플' },
        { text: '제작중', background: '#213555', buttonBackground: '#A594F9', buttonText: '독특' },
      ]
    };
  },
  mounted() {
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
  },

  methods: {
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
      if (index >= 2) {
        return alert('제작중입니다.');
      }
      this.current = index;
      this.isPopupVisible = true;
    },

    copyLink(index) {
      if (index >= 2) {
        return alert('제작중입니다.');
      }

      const urlToCopy = location.href + '?current=' + index + '&infoKey=%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A0%84%EC%9A%A9';
      navigator.clipboard.writeText(urlToCopy)
          .then(() => {
            alert('URL이 클립보드에 복사되었습니다!');
          })
          .catch(err => {
            alert('URL 복사에 실패했습니다.');
            console.error('Error copying text: ', err);
          });
    },

    sendUrlGit() {
      window.open('https://github.com/knm8643/wedding-public', '_blank');
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
  }
};
</script>
<style scoped lang="scss">
.main {
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
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

      /* 부모와 동일한 max-width와 margin 설정 */
      max-width: 475px;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%); /* 완벽하게 중앙 정렬 */

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

    /* 메뉴탭 스타일 */
    .menu-tab {
      position: fixed;
      top: -100%;
      left: 50%;
      width: 100%;
      max-width: 475px; /* 부모 크기에 맞춤 */
      margin: 0 auto;
      transform: translateX(-50%); /* 부모 중앙 정렬 */
      background-color: #f8f9fa;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      transition: top 0.4s ease-in-out;
      z-index: 9;

      &.open {
        top: 56px; /* 헤더 바로 아래 */
      }

      ul {
        list-style: none;
        padding: 16px;
        margin: 0;

        li {
          padding: 12px 8px;
          font-size: 16px;
          border-bottom: 0.6px solid #ddd;

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    /* 메인 컨테이너 */
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
            width: 100%; /* 부모 너비 */

            .title-img{
              transition-delay: .65s;
              transition-duration: .8s;
              transition-timing-function: ease-in-out;
              opacity: 0;

              img{
                width: 95px;
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

              /* 애니메이션 효과 (상하로 움직이거나 깜빡이는 효과) */
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
            padding: 0 24px;
            width: 100%;

            .list-font {
              margin-top: 20px;
              font-weight: 700;
              color: #0b0d0f;
              word-break: keep-all;
              position: relative;
              font-size: 26px;
              line-height: 1.8;

              em {
                font-style: normal;
                color: #9B7EBD;
              }
            }
          }
          .list-container {
            margin-top: 30px;
            width: 100%; /* 부모 너비 */

            .box {
              display: flex;
              width: 100%;
              gap: 24px;
              overflow-x: auto;
              padding: 16px 0 56px;

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
                width: 100%;
                max-width: 305px; /* 최대 너비 제한 */

                .box-font{
                  font-weight: 700;
                  color: #ffffff;
                  word-break: keep-all;
                  position: relative;
                  line-height: 1.6;
                  .header-btn {
                    font-size: 14px;
                    border-radius: 999px;
                    background: #A594F9;
                    padding: 2px 12px;
                  }
                  p{
                    margin-top: 12px;
                    font-size: 24px;
                    word-break: keep-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                  }
                  .btn-info {
                    margin-top: 16px;
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;

                    button {
                      padding: 8px 16px;
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
                        background-color: #007bff;

                        &:hover {
                          background-color: #0056b3;
                          transform: translateY(-2px);
                        }
                      }
                      &:active {
                        transform: translateY(1px);
                      }
                    }
                  }
                }
                &:hover {
                  transform: translateY(-10px);
                }
              }
            }
          }
        }

        /* 딤 효과 레이어 */
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

        /* 메뉴탭이 열렸을 때 딤 효과 활성화 */
        &.menu-open::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>