<template>
  <div class="invitation-wrapper">
    <!-- Confetti 애니메이션을 담을 canvas -->
    <canvas ref="confettiCanvas" class="confetti-canvas"></canvas>

    <!-- 청첩장 내용 -->
    <div class="invitation-content">
ㅁㄴㅇㄴㅁ
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti';

export default {
  name: 'ConfettiInvitation',
  mounted() {
    this.startConfetti();
  },
  methods: {
    startConfetti() {
      // canvas-confetti 애니메이션을 위한 설정
      const canvas = this.$refs.confettiCanvas;
      const confettiInstance = confetti.create(canvas, {
        resize: true,  // 화면 크기 변경 시 confetti 크기도 자동으로 조정
        useWorker: false,  // Web Worker를 사용하지 않음
      });

      // 눈이 내리는 효과처럼 confetti 애니메이션 시작
      confettiInstance({
        particleCount: 200,  // 생성할 confetti의 개수 (적당한 수로 설정)
        spread: 70,  // confetti가 퍼지지 않고 수직으로 떨어짐
        angle: 90,  // 수직으로 떨어짐 (y축으로 떨어지게 설정)
        origin: { x: 0.5, y: 1 },  // 화면 상단 중앙에서 떨어짐
        gravity: 0.9,  // 낮은 중력값으로 천천히 떨어지게 설정
        drift: 0,  // 수평으로 밀리지 않도록 설정
        decay: 0.9,  // confetti가 천천히 사라지도록 설정 (0~1 사이의 값)decay: 0.3,  // confetti가 천천히 사라지도록 설정 (0~1 사이의 값)
      });
    }
  },
};
</script>

<style scoped>
.invitation-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.confetti-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Confetti 애니메이션이 버튼이나 다른 요소를 방해하지 않도록 설정 */
}

.invitation-content {
  position: absolute;
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #e91e63;
}

p {
  font-size: 1.25rem;
  margin-bottom: 5px;
}
</style>