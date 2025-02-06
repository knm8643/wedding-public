<template>
  <div class="game-container" v-if="!gameOver">
    <pre class="scene-text">
      <span v-for="(char, index) in visibleText" :key="index">{{ char }}</span>
    </pre>
    <div v-if="showChoices" class="choices" :class="{ show: showChoices }">
      <button v-for="(choice, index) in currentScene.choices" :key="index" @click="makeChoice(choice)">{{ choice.text }}</button>
    </div>
  </div>
  <div class="game-container" v-else>
    <pre class="scene-text">
      <span v-for="(char, index) in visibleText" :key="index">{{ char }}</span>
    </pre>
    <div v-if="showChoices" class="choices" :class="{ show: showChoices }">
      <button @click="restartGame">처음으로 돌아가기</button>
      <button @click="goBack" v-if="previousScenes.length">바로 전으로 돌아가기</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      scenes: [
        {
          id: 1,
          description: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /\\__/\\
       ( o   o)   모험을 시작하자!
       (  -   )
       (   U   )

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

우연히 이곳에 오게 된 당신. 그러나 이곳은… 도대체 어떤 곳일까요?

이 수상한 분위기 속에서, 무언가 숨겨진 진실이 있을지도 모릅니다.
          `,
          choices: [
            {text: "주변을 더 자세히 살펴본다", nextScene: 2},
            {text: "이곳에서 나가볼 방법을 찾아본다", nextScene: 3}
          ]
        },
        {
          id: 2,
          description: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    |\\__/,|   (\`\\
  _.|o o  |_   ) )
-(((---(((--------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

당신은 화면을 보며 잠시 멈칫합니다.

작은 웹 페이지 안에서 무언가가 적혀지고 있는 중입니다.

글자는 하나씩 채워져 가고, 그가 이 코드를 작성하고 있다는 사실이 흥미롭습니다.

그렇다면, 이 사람은 누구일까요?

퍼블리셔일까요? 백엔드 개발자일까요? 아니면 프론트엔드 개발자일까요?
`,
          choices: [
            {text: "더 많은 정보를 찾아본다", nextScene: 4},
            {text: "지금 당장은 지나치고, 나아간다", nextScene: 5}
          ]
        },
        {
          id: 3,
          description: `

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ___ _ __ _ __ ___  _ __
 / _ \\ '__| '__/ _ \\| '__|
|  __/ |  | | | (_) | |
 \\___|_|  |_|  \\___/|_|


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

작은 웹 페이지에서 벗어나려 했으나, 그리 쉽지 않았습니다.

코드가 끊임없이 나타나고, 수정할 부분들이 눈앞에 펼쳐집니다.

그때, 알림이 떠오릅니다...

“오류 발생.”

코드에 오류가 일어난 것 같습니다. 뒤로 가야 할지도 모릅니다.

탈출은, 시간이 더 필요할 것 같습니다.
    `,
          choices: [
            {text: "코드를 수정해본다", nextScene: 6},
            {text: "서둘러 처음으로 돌아간다", nextScene: 1},
          ]
        },
        {
          id: 4,
          description: `
당신은 웹 페이지 속에서 더 많은 정보를 찾아보기로 결심합니다.

코드 속에서 눈에 띄는 구문이 있습니다. 그의 작업 로그, 디버깅 코드들, 그리고 메시지들이 그를 추적하는 듯한 느낌을 줍니다.

그는 분명히 이 웹 페이지 안에서 중요한 작업을 진행하고 있습니다. 그가 남긴 흔적을 더 찾아보면, 그의 정체가 조금씩 드러날지도 모르겠군요.
  `,
          choices: [
            {text: "로그 파일을 열어본다", nextScene: 999},
            {text: "자세히 조사하지 않고, 바로 나아간다", nextScene: 999}
          ]
        },
        {
          id: 5,
          description: `
그는 그저 웹 페이지 속의 또 다른 개발자가 아닐까요?

당신은 지금 그를 계속 추적할 이유가 없다고 생각하며, 그 일을 잠시 잊고 앞으로 나아가기로 합니다.

그러나 그 선택이 잘못된 걸까…?

한참을 지나, 머리속에서 그 개발자가 여전히 떠오릅니다.
그는 분명 어떤 비밀을 숨기고 있을지도 모릅니다. 하지만 이제는 그냥 지나치기로 합니다.

어쩌면, 이 웹 페이지는 단순한 작업 공간이 아닐지도 모른다는 생각이 듭니다. 이곳에서 더 많은 진실이 기다리고 있을지도…
  `,
          choices: [
            {text: "이제 나아간다", nextScene: 999},
            {text: "잠시 돌아가 다른 방법을 모색한다", nextScene: 999}
          ]
        },
        {
          id: 6,
          description: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

┏┯┯┯┯┯┯┓
┃││∧ ∧│┃  살려줘!!
┃│(≧Д≦)┃
┃││ф ф│┃
┗┷┷┷┷┷┷┛

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

코드를 수정하려 애썼지만, 오히려 상황은 더 꼬여만 갑니다.

한 줄씩 수정할 때마다 새로운 오류가 쏟아지고, 결국 화면은 멈춰버립니다.

“무언가 잘못된 걸까?”

그때, 화면이 깜빡이며 오류 메시지가 떠오릅니다.

“오류 발생. 수정 실패.”

여기서 벗어나기엔 너무 늦어버린 걸까요? 이제 선택의 여지가 없어 보입니다...
  `,
        },
        {
          id: 999,
          description: `스토리 제작 중 입니다.`,
          choices: []
        },
      ],
      currentScene: {},
      previousScenes: [],
      gameOver: false,
      visibleText: "",
      textIndex: 0,
      showChoices: false
    };
  },
  methods: {
    startGame() {
      this.currentScene = this.scenes[0];
      this.previousScenes = [];
      this.gameOver = false;
      this.visibleText = "";
      this.textIndex = 0;
      this.showChoices = false;
      this.typeWriterEffect();
    },
    typeWriterEffect() {
      const text = this.currentScene.description;
      const interval = setInterval(() => {
        this.visibleText += text[this.textIndex];
        this.textIndex++;
        if (this.textIndex === text.length) {
          clearInterval(interval);
          this.showChoices = true;
        }
      }, 10);
    },
    makeChoice(choice) {
      const nextScene = this.scenes.find(scene => scene.id === choice.nextScene);
      if (nextScene.id === 999 || nextScene.id === 6) {
        this.gameOver = true;
      }

      if (nextScene) {
        this.previousScenes.push(this.currentScene);
        this.currentScene = nextScene;
        this.visibleText = "";
        this.textIndex = 0;
        this.showChoices = false;
        this.typeWriterEffect();
      } else {
        this.gameOver = true;
      }
    },
    restartGame() {
      this.startGame();
    },
    goBack() {
      if (this.previousScenes.length) {
        this.currentScene = this.previousScenes.pop();
        this.gameOver = false;
        this.visibleText = "";
        this.textIndex = 0;
        this.showChoices = false;
        this.typeWriterEffect();
      }
    }
  },
  mounted() {
    this.startGame();
  }
};
</script>

<style scoped lang="scss">
.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: 100vh;
  background: black;
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;

  .scene-text {
    position: relative;
    max-width: 475px;
    min-width: 320px;
    width: 100%;
  }

  .choices {
    position: relative;
    max-width: 475px;
    min-width: 320px;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;

    &.show {
      opacity: 1;
      transform: translateY(0);
    }

    button {
      width: 100%;
    }
  }
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 600px;
}

button {
  background: black;
  color: white;
  border: 1px solid white;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
}

button:active {
  background: white;
  color: black;
}
</style>