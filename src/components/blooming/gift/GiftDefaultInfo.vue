<template>
  <div class="blooming-default">
    <button class="call-button groom text_02" @pointerdown="callGroom">신랑에게 전화하기</button>
    <button class="call-button bride text_02" @pointerdown="callBride">신부에게 전화하기</button>
    <button class="gift-button text_02" @pointerdown="toggleGiftInfo">마음 전달하기</button>

    <div class="gift-info-wrap" :class="showGiftInfo ? 'show' : ''">
      <button class="close-btn" @pointerdown="toggleGiftInfo">×</button>
      <div class="font-wrap text_02">
        <h3>신부측</h3>
        <p>
          신부 : 0111-212312213-21 (신한은행)
          <i class="fas fa-copy copy-icon" @pointerdown="copyToClipboard('0111-212312213-21')"></i>
        </p>
        <p>
          신부 어머니 : 0111-212312213-22 (신한은행)
          <i class="fas fa-copy copy-icon" @pointerdown="copyToClipboard('0111-212312213-22')"></i>
        </p>
      </div>
      <div class="font-wrap text_02" >
        <h3>신랑측</h3>
        <p>
          신랑 : 0111-212312213-21 (카카오뱅크)
          <i class="fas fa-copy copy-icon" @pointerdown="copyToClipboard('0111-212312213-21')"></i>
        </p>
        <p>
          신랑 어머니 : 0111-212312213-22 (카카오뱅크)
          <i class="fas fa-copy copy-icon" @pointerdown="copyToClipboard('0111-212312213-22')"></i>
        </p>
        <p>
          신랑 아버지 : 0111-212312213-23 (카카오뱅크)
          <i class="fas fa-copy copy-icon" @pointerdown="copyToClipboard('0111-212312213-23')"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGiftInfo: false,
    };
  },
  methods: {
    callGroom() {
      window.location.href = 'tel:01056961909';
    },
    callBride() {
      window.location.href = 'tel:01056961909';
    },
    toggleGiftInfo() {
      this.showGiftInfo = !this.showGiftInfo;
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('계좌번호가 복사되었습니다!');
      });
    }
  }
};
</script>

<style>
.blooming-default {
  text-align: center;
  padding: 10rem 0 0;
  width: 100%;
}
.call-button, .gift-button {
  display: block;
  width: 80%;
  margin: 10px auto 2rem;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.call-button {
  padding: 0.5rem 16px;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.gift-button {
  padding: 0.5rem 16px;
  background-color: #fff1f3;
  border: 1px solid #ddd;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  gap: 6px;
}
.gift-info-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
  padding: 25px;
  text-align: left;
  transform: translateY(100%);
  transition: transform 0.4s ease-out, opacity 0.3s ease-out;
  z-index: 1000;
  border-radius: 20px 20px 0 0;
  opacity: 0;
}

.gift-info-wrap.show {
  padding-bottom: 6rem;
  transform: translateY(0);
  opacity: 1;
}

.font-wrap {
  margin-bottom: 20px;
}

.font-wrap h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.font-wrap p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.font-wrap p i {
  margin-left: 10px;
  cursor: pointer;
  color: #4A90E2;
  transition: color 0.3s ease;
}

.font-wrap p i:hover {
  color: #1D65B8;
}

.gift-info-wrap .copy-icon {
  cursor: pointer;
  color: #4A90E2;
  font-size: 1.1rem;
  margin-left: 8px;
}

.gift-info-wrap .copy-icon:hover {
  color: #1D65B8;
}

.gift-info-wrap .font-wrap:last-child {
  border-top: 1px solid #eee;
  padding-top: 15px;
  margin-top: 15px;
}

.gift-info-wrap .font-wrap p {
  font-size: 1rem;
}

.gift-info-wrap .footer {
  margin-top: 20px;
  text-align: center;
}

.gift-info-wrap .footer p {
  font-size: 0.9rem;
  color: #888;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 21px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #d9534f;
}
</style>