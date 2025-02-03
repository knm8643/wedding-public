<template>
  <div class="hello">
    <header class="profil">
      <!-- 피시전용 -->
      <article v-if="isMobile" class="description">
        <section>
          <h1>
            안녕하세요<br />
            개발자 이충재입니다<em>.</em>
          </h1>
        </section>
        <div>
          <p>
            저는 다양한 백/프론트 기술을 활용할줄 알고 편리하고 직관적인 사용자
            중심의 UI/UX 개발을 할줄 아는 함께하고 일하고 싶은 개발자
            이충재입니다 😀
          </p>
        </div>
      </article>
      <!-- 모바일전용 -->
      <article v-else-if="!isMobile" class="description">
        <section>
          <h1>
            안녕하세요<br />
            개발자 이충재입니다<em>.</em>
          </h1>
        </section>
        <div>
          <p>
            저는 다양한 백/프론트 기술을 활용할줄 알고 편리하고 직관적인 사용자
            중심의 UI/UX 개발을 할줄 아는 함께하고 일하고 싶은 개발자
            이충재입니다 😀
          </p>
        </div>
      </article>
    </header>
    <article class="experience">
      <h1>경력사항<em>.</em></h1>
      <section>
        <div class="row-left">
          <h2>굿소프트<em>.</em></h2>
          <p>2024.03 - 재직 중</p>
          <p>SI사업팀</p>
        </div>
        <div class="row-right">
          <h3>GS칼텍스 백오피스 개발 [3개월]</h3>
          <ul>
            <li>
              JAVA, Spring Boot, JSP, MSSQL 를 활용한 GS칼텍스 임직원전용
              백오피스 제작
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>트라이씨클<em>LF.</em></h2>
          <p>2022.04 - 2023.05(1년)</p>
          <p>IT개발본부 서비스플랫폼팀</p>
        </div>
        <div class="row-right">
          <h4>트라이씨클 백오피스 기능개발</h4>
          <ul>
            <li>
              Vue2, Spring Boot, JSP, JAVA, MYSQL 를 이용한 백오피스내
              신규컨텐츠 영역개발
            </li>
          </ul>
          <h4>신규 상품전시구좌 / 리뉴얼 페이지 기능개발</h4>
          <ul>
            <li>Angular2 를 이용한 페이지내 프론트기능 추가</li>
          </ul>
          <h4>자사몰 매출 데이터집계 기능개발</h4>
          <ul>
            <li>구글애널리틱스를 활용하여 자사 디비에 데이터 별도집계 처리</li>
          </ul>
          <h4>자사몰내 오류수집 집계 기능개발</h4>
          <ul>
            <li>Sentry 템플릿을 이용한 사이트로그 기록추적</li>
          </ul>
          <h4>차세대 프레임워크 전환진행</h4>
          <ul>
            <li>
              기존 Angular 프레임워크에서 Vue3로 전환을 하기 위한 리팩토링
              작업진행
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>정보교육원<em>KH.</em></h2>
          <p>2021.09 - 2022.02(6개월)</p>
          <p>웹개발자 교육</p>
        </div>
        <div class="row-right">
          <h3>웹개발 전문 교육 과정이수</h3>
          <ul>
            <li>
              Java, Tomcat, Spring, Oracle, JSP, CSS, Git 등과 기초적인 IT 지식
              교육
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-left">
          <h2>서울특별시사회복지협의회<em>.</em></h2>
          <p>2019.03 - 2021.08(2년 6개월)</p>
          <p>대외협력사업부</p>
        </div>
        <div class="row-right">
          <h3>기업사회공헌 활동담당</h3>
          <ul>
            <li>
              희망마차(이마트), 이동푸드마켓(BC카드), 1동 1푸드마켓 등 기업과
              연계된 사회봉사활동 주도
            </li>
            <li>
              피코크 봉사단, 싱싱봉사단 등 대규모 임직원, 시민자원봉사단 운영
            </li>
          </ul>
        </div>
      </section>
    </article>
    <!-- 기술 및 이력서 -->
    <article class="skills">
      <h1>기술 및 자격증<em>.</em></h1>
      <section>
        <div class="row-center">
          <h2>사용가능 스킬<em>.</em></h2>
          <ul>
            <li>
              <h4>JAVA, Spring Boot, Oracle, MSSQL, MYSQL</h4>
            </li>
            <li>
              <h4>JSP, Nuxt, Vue, Angular, JavaScript, TypeScript</h4>
            </li>
            <li>
              <h4>CSS, SCSS, Vuetify, BootStrap, Figma, Zeplin</h4>
            </li>
            <li>
              <h4>GitHub, GitLab, bitBucket, Redmine</h4>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="row-center">
          <h2>자격사항<em>.</em></h2>
          <ul>
            <li><h4>2024년 3회 정보처리기사 필기 합격</h4></li>
            <li><h4>2018년 컴퓨터활용능력 2급</h4></li>
            <li><h4>2018년 사회복지사 2급</h4></li>
            <li><h4>2018년 대형면허 1종</h4></li>
          </ul>
        </div>
      </section>
    </article>
    <article class="contact">
      <h1>통신보안<em>.</em></h1>
      <section>
        <h2>연락망 <em> : </em> 010. 5696. 1909</h2>
        <h2>언제든 당신을 기다립니다 주저하지말고 연락주세요 감사합니다.</h2>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name:"EasterEgg",
  data() {
    return {
      isMobile: ''
    }
  },
  mounted() {
    document.body.style.overflow = "visible";
    if (location.href.includes("reset")) {
      this.$router.push("/pacman");
    } else {
      this.checkIfMobile();
      window.addEventListener("resize", this.checkIfMobile);
    }
  },
  created() {
    const currentFromQuery = this.$route.query.current;
    if (currentFromQuery !==  undefined) {
      const queryString = window.location.search;
      const newUrl = `${window.location.origin}${queryString}`;
      window.history.replaceState(null, '', newUrl);
    }
  },
  methods: {
    checkIfMobile() {
      if (window.innerWidth >= 414) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
$mobile-width: 414px;
@font-face {
  font-family: "TTWanjunuricheR";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/TTWanjunuricheR.woff2")
  format("woff2");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "TTWanjudaedunsancheB";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2")
  format("woff2");
  font-weight: 700;
  font-style: normal;
}

.profil {
  animation: fadein 2s ease-in-out;
  padding: 0 2rem 2rem;
  @media (max-width: $mobile-width) {
    padding: 0 2rem 2rem;
  }

  .description {
    margin: 6rem auto;
    color: #000;
    section {
      display: flex;
      h1 {
        font-family: "TTWanjudaedunsancheB";
        font-size: 5rem;
        //width: 62%;
        text-align: left;
        margin: 1rem 0 1rem;
        @media (max-width: $mobile-width) {
          font-size: 2.2rem;
          //width: 100%;
        }
        em {
          color: #00d2ff;
          font-style: normal;
        }
      }
    }
    div {
      font-family: "TTWanjunuricheR";
      text-align: left;
      line-height: 1.5;
      font-size: 1.8rem;
      @media (max-width: $mobile-width) {
        font-size: 1.5rem;
      }
      p {
        margin-top: 2rem;
      }
    }
  }
}
.experience {
  animation: fadein 3s ease-in-out;
  padding: 2.5rem 2rem;
  font-family: "TTWanjunuricheR";
  h1 {
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: #00d2ff;
    font-size: 3rem;
    @media (max-width: $mobile-width) {
      font-size: 2rem;
    }
    em {
      color: #4e56e8;
      font-style: normal;
    }
  }
  section {
    display: flex;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(224, 226, 231);
    .row-left {
      width: 300px;
      h2 {
        padding-bottom: 1rem;
        font-size: 1.4rem;
        margin: 0;
        em {
          font-style: normal;
          color: #4e56e8;
        }
      }
      p {
        padding-bottom: 0.5rem;
        color: #7e7979;
        margin: 0;
        @media (max-width: $mobile-width) {
          font-size: 0.8rem;
        }
      }
    }
    .row-right {
      h3 {
        padding-bottom: 1rem;
        font-size: 1.4rem;
        margin: 0;
      }
      ul {
        margin: 0;
        padding: 0 1rem;
        li {
          padding: 0 0 1rem 0;
          &::marker {
            list-style: disc;
            color: #4e56e8;
          }
        }
      }
    }
  }
}
.skills {
  animation: fadein 3s ease-in-out;
  padding: 2.5rem 2rem;
  font-family: "TTWanjunuricheR";
  h1 {
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: #00d2ff;
    font-size: 3rem;
    @media (max-width: $mobile-width) {
      font-size: 2rem;
    }
    em {
      color: #4e56e8;
      font-style: normal;
    }
  }
  section {
    padding: 2rem 0;
    border-bottom: 1px solid rgb(224, 226, 231);
    h2 {
      line-height: 0.3;
      border-bottom: 6px solid #00d2ff52;
      display: inline-block;
      font-size: 2rem;
      margin: 0;
      em {
        color: #4e56e8;
        font-style: normal;
      }
    }
    ul {
      padding: 0 1rem;
      margin: 0;
      li {
        margin: 0;
        &::marker {
          list-style: disc;
          color: #4e56e8;
        }
        h4 {
          margin-bottom: 1rem;
        }
        p {
          line-height: 1.5;
          padding-bottom: 0.5rem;
          color: #7e7979;
        }
      }
    }
  }
}
.portfolio {
  padding: 2rem 2rem;
  font-family: "TTWanjunuricheR";
  h1 {
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: #00d2ff;
    font-size: 3rem;
    @media (max-width: $mobile-width) {
      font-size: 2rem;
    }
    em {
      color: #4e56e8;
      font-style: normal;
    }
  }
  .probox {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(224, 226, 231);
    @media (max-width: $mobile-width) {
      display: block;
      padding: 3rem 0;
    }
    .row-left {
      width: 350px;
      h2 {
        line-height: 0.3;
        border-bottom: 6px solid rgba(0, 210, 255, 0.3215686275);
        display: inline-block;
        font-size: 2rem;
      }
    }
    .portfolio-link {
      text-decoration: none;
      font-family: "TTWanjunuricheR";
      color: #000;
      font-weight: bold;
      //margin-left: 20px;
      padding-bottom: 2rem;
      @media (max-width: $mobile-width) {
        color: #4e56e8;
        text-decoration: underline;
        text-underline-offset: 5px;
      }
      &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
        color: #4e56e8;
      }
      .portfolio-box {
        width: 360px;
        height: 250px;
        transition: transform 0.3s ease-in-out;
        @media (max-width: $mobile-width) {
          width: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .overlay {
          font-size: 1.125rem;
          line-height: 2em;
          text-align: center;
          &:after {
            margin-left: 0.15em;
            font-weight: 400;
            content: "↗️";
          }
        }
        &:hover{
          transform: scale(0.95);
        }
      }
    }
  }
}
.contact {
  animation: fadein 3s ease-in-out;
  padding: 2rem 2rem;
  font-family: "TTWanjunuricheR";
  h1 {
    display: inline-block;
    padding: 0.2rem 1rem;
    background-color: #00d2ff;
    font-size: 3rem;
    @media (max-width: $mobile-width) {
      font-size: 2rem;
    }
    em {
      color: #4e56e8;
      font-style: normal;
    }
  }
  section {
    padding: 2rem 0;
    border-bottom: 1px solid rgb(224, 226, 231);
    p {
      font-family: "TTWanjunuricheR";
      text-align: left;
      line-height: 1.5;
      font-size: 1.8rem;
      em {
        color: #4e56e8;
        font-style: normal;
      }
    }
    ul {
      padding: 0 1rem 0 0;
      margin: 0;
      li {
        margin: 0;
        &::marker {
          list-style: disc;
          color: #4e56e8;
        }
        h4 {
          margin: 0;
          font-size: 3rem;
        }
        p {
          line-height: 1.5;
          padding-bottom: 0.5rem;
          color: #4e56e8;
          a {
            text-decoration: none;
            color: #4e56e8;
            &:after {
              margin-left: 0.15em;
              font-weight: 400;
              content: "↗️";
            }
            &:hover {
              text-decoration: underline;
              text-underline-offset: 5px;
            }
          }
        }
      }
    }
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
