<template>
  <div class="modern-wrapper">

    <!-- 로딩 화면 -->
    <div class="loader" id="loader">
      <div class="loader-text">LOADING</div>
    </div>

    <!-- 플로팅 요소들 -->
    <div class="floating-element floating-dot" style="left: 10%; animation-delay: 0s;"></div>
    <div class="floating-element floating-dot" style="left: 30%; animation-delay: 2s;"></div>
    <div class="floating-element floating-dot" style="left: 50%; animation-delay: 4s;"></div>
    <div class="floating-element floating-dot" style="left: 70%; animation-delay: 6s;"></div>
    <div class="floating-element floating-dot" style="right: 10%; animation-delay: 1s;"></div>

    <!-- 헤로 섹션 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-date">2026.12.20</div>
        <h1 class="hero-names">YuRim<br>&<br>ChungJae</h1>
        <div class="hero-subtitle">WEDDING</div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <div class="scroll-text">SCROLL</div>
      </div>
    </section>

    <!-- 인사말 섹션 -->
    <section class="section greeting">
      <h2 class="section-title">Invitation</h2>
      <div class="greeting-text">
        <p>저희 두 사람이 사랑과 믿음으로<br>
          하나가 되어 새로운 인생을 시작하려 합니다.</p>

        <p>부족한 저희를 아껴주시고 사랑해주신<br>
          모든 분들을 모시고 결혼식을 올리고자 하니<br>
          바쁘시더라도 참석하시어 축복해 주시면<br>
          더없는 기쁨으로 간직하겠습니다.</p>

        <div class="signature">YuRim & ChungJae</div>
      </div>
    </section>

    <!-- 커플 섹션 -->
    <section class="section couple">
      <h2 class="section-title">Couple</h2>
      <div class="couple-container">
        <div class="person">
          <img src="../../assets/images/05.jpg" alt="신랑" class="person-photo">
          <div class="person-name">충디딥</div>
          <div class="person-info">이해원 · 문미순의 장남</div>
        </div>
        <div class="person">
          <img src="../../assets/images/02.jpg" alt="신부" class="person-photo">
          <div class="person-name">유디딥</div>
          <div class="person-info">이경희의 삼녀</div>
        </div>
      </div>
    </section>

    <!-- 갤러리 섹션 -->
    <section class="section gallery">
      <h2 class="section-title">Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="../../assets/images/06.jpg" alt="갤러리 1">
        </div>
        <div class="gallery-item">
          <img src="../../assets/images/07.jpg" alt="갤러리 2">
        </div>
        <div class="gallery-item">
          <img src="../../assets/images/08.jpg" alt="갤러리 3">
        </div>
        <div class="gallery-item">
          <img src="../../assets/images/09.jpg" alt="갤러리 4">
        </div>
      </div>
    </section>

    <!-- 이벤트 정보 -->
    <section class="section event">
      <h2 class="section-title">Wedding Day</h2>
      <div class="event-info">
        <div class="event-date">12.20</div>
        <div class="event-time">PM 12:00</div>
        <div class="event-location">AW웨딩컨벤션</div>
        <div class="event-address">경기도 안산시 단원구 광덕1로 171</div>
        <div class="event-buttons">
          <a href="#" class="btn">길찾기</a>
          <button class="btn btn-filled">캘린더 추가</button>
        </div>
      </div>
    </section>

    <!-- 지도 섹션 -->
    <section class="section map">
      <h2 class="section-title">Location</h2>
      <div class="map-container">
        <div class="map-placeholder">
          <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">📍</div>
          <div>지도가 여기에 표시됩니다</div>
        </div>
      </div>
    </section>

    <!-- 메시지 섹션 -->
    <section class="section message">
      <h2 class="section-title">Message</h2>
      <form class="message-form">
        <div class="form-group">
          <input type="text" class="form-input" placeholder="성함을 입력해주세요" required>
        </div>
        <div class="form-group">
          <textarea class="form-textarea" placeholder="축하 메시지를 남겨주세요" required></textarea>
        </div>
        <div style="text-align: center;">
          <button type="submit" class="btn btn-filled">메시지 전송</button>
        </div>
      </form>
    </section>

    <!-- 계좌 정보 -->
    <section class="section account">
      <h2 class="section-title">Account</h2>
      <div class="account-list">
        <div class="account-item">
          <div class="account-name">신랑측</div>
          <div class="account-number">신한은행 110-123-456789</div>
          <div class="account-holder">충디딥</div>
          <button class="btn" onclick="copyAccount('110-123-456789')">복사</button>
        </div>
        <div class="account-item">
          <div class="account-name">신부측</div>
          <div class="account-number">국민은행 987-654-321098</div>
          <div class="account-holder">유디딥</div>
          <button class="btn" onclick="copyAccount('987-654-321098')">복사</button>
        </div>
      </div>
    </section>

    <!-- 마무리 -->
    <section class="section closing">
      <div class="closing-text">
        <p>소중한 시간 내어 참석해 주시는<br>
          모든 분들께 진심으로 감사드립니다.</p>
        <br>
        <p>평생 서로 아끼고 사랑하며<br>
          행복한 가정을 이루겠습니다.</p>

        <div class="final-signature">YuRim ♥ ChungJae</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'modernView',
  mounted() {
    // 로딩 화면
    function hideLoader() {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
    }
    // Safari 등에서 window.onload가 트리거되지 않는 경우 대비
    window.addEventListener('load', hideLoader);
    // fallback: 3초 뒤 강제로 로딩 화면 제거
    setTimeout(hideLoader, 3000);

    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (entry.target.classList.contains('gallery-grid')) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 200);
            });
          }

          if (entry.target.classList.contains('account-list')) {
            const items = entry.target.querySelectorAll('.account-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 300);
            });
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-title, .greeting-text, .person, .event-info, .map-container, .message-form, .closing-text, .gallery-grid, .account-list').forEach(el => {
      observer.observe(el);
    });

    // 패럴랙스 효과
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      const hero = document.querySelector('.hero');
      if (hero) {
        const heroOffset = scrolled * 0.5;
        hero.style.transform = `translateY(${heroOffset}px)`;
      }
    });

    // 스크롤 인디케이터 숨기기
    window.addEventListener('scroll', () => {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (window.pageYOffset > 100) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '0.6';
      }
    });

    // 계좌 복사 버튼 이벤트 연결
    document.querySelectorAll('.account-item .btn').forEach(btn => {
      btn.addEventListener('click', (event) => {
        const accountNumber = btn.getAttribute('onclick').match(/\('(.*)'\)/)[1];
        navigator.clipboard.writeText(accountNumber).then(() => {
          const originalText = btn.textContent;
          btn.textContent = '복사됨';
          btn.style.background = '#000';
          btn.style.color = '#fff';

          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'transparent';
            btn.style.color = '#000';
          }, 2000);
        });
      });
    });

    // 폼 제출
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
      messageForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = '전송 중...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = '전송 완료';
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.reset();
          }, 2000);
        }, 1000);
      });
    }

    // 갤러리 클릭 효과
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });

    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // 터치 제스처
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function (e) {
      touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function (e) {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          console.log('다음 섹션으로');
        } else {
          console.log('이전 섹션으로');
        }
      }
    }

    // 키보드 네비게이션
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        window.scrollBy(0, window.innerHeight);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy(0, -window.innerHeight);
      }
    });

    const app = document.getElementById('app');
    const popup = document.querySelector('.mobile-popup');

    // 원래 스타일 백업
    this._originalAppStyle = {
      fontFamily: app.style.fontFamily,
      background: app.style.background,
      color: app.style.color
    };

    this._originalPopupStyle = {
      backdropFilter: popup?.style.backdropFilter
    };

    // 스타일 적용
    app.style.fontFamily = "'Inter', sans-serif";
    app.style.background = "#000";
    app.style.color = "#fff";

    if (popup) {
      popup.style.backdropFilter = 'blur(0px)';
    }
  },
  beforeDestroy() {
    const app = document.getElementById('app');

    // 스타일 복구
    if (this._originalAppStyle) {
      app.style.fontFamily = this._originalAppStyle.fontFamily;
      app.style.background = this._originalAppStyle.background;
      app.style.color = this._originalAppStyle.color;
    }

    if (this._originalPopupStyle) {
      popup.style.backdropFilter = this._originalPopupStyle.backdropFilter;
    }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

#app{
  font-family: 'Inter', sans-serif;
  background: #000;
  color: #fff;
}

body {
  font-family: 'Inter', sans-serif;
  background: #000;
  color: #fff;
  overflow-x: hidden;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
}

/* 커스텀 스크롤바 */
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background: #111;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 3px;
}

.modern-wrapper {
  overflow: hidden;
  /* 로딩 애니메이션 */
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 1s ease;
  }

  .loader.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .loader-text {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 3px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  /* 헤로 섹션 */
  .hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(45deg, #000 0%, #111 50%, #000 100%);
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="0.3" fill="%23ffffff" opacity="0.05"/><circle cx="50" cy="10" r="0.2" fill="%23ffffff" opacity="0.08"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .hero-content {
    text-align: center;
    z-index: 2;
    transform: translateY(50px);
    opacity: 0;
    animation: heroFadeIn 2s ease 0.5s forwards;
  }

  @keyframes heroFadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .hero-date {
    font-size: 0.9rem;
    letter-spacing: 4px;
    margin-bottom: 2rem;
    opacity: 0.7;
    font-weight: 300;
  }

  .hero-names {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 1rem;
    letter-spacing: 3px;
    opacity: 0.8;
    font-weight: 300;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.6;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }

  .scroll-line {
    width: 1px;
    height: 30px;
    background: #fff;
    margin-bottom: 10px;
  }

  .scroll-text {
    font-size: 0.7rem;
    letter-spacing: 2px;
    writing-mode: vertical-rl;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 섹션 공통 */
  .section {
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
  }

  .section-title.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* 인사말 섹션 */
  .greeting {
    background: #fff;
    color: #000;
  }

  .greeting-text {
    font-size: 1.1rem;
    line-height: 2;
    text-align: center;
    max-width: 350px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease 0.3s;
  }

  .greeting-text.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .greeting-text p {
    margin-bottom: 2rem;
  }

  .signature {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 3rem;
    font-style: italic;
  }

  /* 커플 섹션 */
  .couple {
    background: #000;
    color: #fff;
  }

  .couple-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .person {
    text-align: center;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s ease;
  }

  .person:nth-child(2) {
    transform: translateX(50px);
  }

  .person.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .person-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 2rem auto;
    border: 3px solid #fff;
    transition: transform 0.5s ease;
  }

  .person-photo:hover {
    transform: scale(1.05);
  }

  .person-name {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .person-info {
    font-size: 0.9rem;
    opacity: 0.7;
    letter-spacing: 1px;
  }

  /* 갤러리 섹션 */
  .gallery {
    background: #fff;
    color: #000;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }

  .gallery-item {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 0;
    cursor: pointer;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.6s ease;
  }

  .gallery-item.visible {
    opacity: 1;
    transform: scale(1);
  }

  .gallery-item:hover {
    transform: scale(1.05);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.1);
  }

  /* 이벤트 정보 */
  .event {
    background: #000;
    color: #fff;
    text-align: center;
  }

  .event-info {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
  }

  .event-info.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .event-date {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  .event-time {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    opacity: 0.8;
    letter-spacing: 2px;
  }

  .event-location {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .event-address {
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 3rem;
  }

  .event-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: inherit;
  }

  .btn:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  // Override .btn only inside .account-item
  .account-item .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.6rem 1.4rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    transform: translateY(0);
    transition: transform 0.3s ease, background 0.3s ease;
    will-change: transform;
  }

  .account-item .btn:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  .btn-filled {
    background: #fff;
    color: #000;
  }

  .btn-filled:hover {
    background: transparent;
    color: #fff;
  }

  /* 지도 섹션 */
  .map {
    background: #fff;
    color: #000;
  }

  .map-container {
    width: 100%;
    height: 300px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .map-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .map-placeholder {
    text-align: center;
    color: #666;
  }

  /* 메시지 섹션 */
  .message {
    background: #000;
    color: #fff;
  }

  .message-form {
    max-width: 350px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .message-form.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 1rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid #333;
    color: #fff;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-bottom-color: #fff;
  }

  .form-input::placeholder, .form-textarea::placeholder {
    color: #666;
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  /* 계좌 정보 */
  .account {
    background: #fff;
    color: #000;
  }

  .account-list {
    max-width: 350px;
    margin: 0 auto;
  }

  .account-item {
    padding: 2rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .account-item.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .account-name {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .account-number {
    font-family: 'Inter', monospace;
    font-size: 1rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  .account-holder {
    font-size: 0.9rem;
    opacity: 0.7;
    margin-bottom: 1rem;
  }

  /* 마무리 */
  .closing {
    background: #000;
    color: #fff;
    text-align: center;
    min-height: 80vh;
  }

  .closing-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .closing-text.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .final-signature {
    font-size: 2rem;
    margin-top: 3rem;
    font-style: italic;
  }

  /* 플로팅 요소들 */
  .floating-element {
    position: fixed;
    pointer-events: none;
    z-index: 1;
  }

  .floating-dot {
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.3;
    animation: float 8s infinite linear;
  }

  @keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-100px) rotate(360deg); }
  }

  /* 패럴랙스 효과 */
  .parallax {
    transform: translateZ(0);
  }

  /* 반응형 */
  @media (max-width: 480px) {
    .hero-names {
      font-size: 2.8rem;
    }

    .section {
      padding: 3rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .person-photo {
      width: 150px;
      height: 150px;
    }
  }
}
</style>