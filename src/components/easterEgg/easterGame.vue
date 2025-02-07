<template>
  <div class="game-container" v-if="!gameOver">
    <pre class="scene-text" ref="textContainer" :class="{ 'twist-effect': isTwisting }">
      <span v-for="(char, index) in visibleText" :key="index">{{ char }}</span>
    </pre>
    <div v-if="showChoices" class="choices" :class="{ show: showChoices }">
      <button v-for="(choice, index) in currentScene.choices" :key="index" @click="makeChoice(choice)">{{ choice.text }}</button>
    </div>
  </div>
  <div class="game-container" v-else>
    <pre class="scene-text" ref="textContainer">
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
            {text: "주변에 더 많은 정보를 찾아본다", nextScene: 4},
            {text: "지금 당장은 관심 없다", nextScene: 5}
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
            {text: "서둘러 처음으로 돌아간다", nextScene: 7},
          ]
        },
        {
          id: 4,
          description: `

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 ( ◔‸◔)
＿(__つ/￣￣￣/＿

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

당신은 웹 페이지 속에서 더 많은 정보를 찾아보기로 결심합니다.

코드 속에서 눈에 띄는 구문이 있습니다. 그의 작업 로그, 디버깅 코드들, 그리고 메시지들이 그를 추적하는 듯한 느낌을 줍니다.

그는 분명히 이 웹 페이지 안에서 중요한 작업을 진행하고 있습니다. 그가 남긴 흔적을 더 찾아보면, 그의 정체가 조금씩 드러날지도 모르겠군요.
  `,
          choices: [
            {text: "로그 파일을 열어본다", nextScene: 7},
            {text: "자세히 조사하지 않고, 돌아간다", nextScene: 5}
          ]
        },
        {
          id: 5,
          description: `
＿＿＿＿＿＿＿

 코드뭉텅이… Lv.???    ┌(┌＾o＾)┐
 HP ⊂＝＝＝⊃　       ┌console.log┐

￣￣￣￣￣￣￣

    /\\__/\\
   ( o   o)
   (  -   )
￣￣￣￣￣￣￣￣￣￣￣￣￣|



“그는 그저 웹 페이지 속 또 다른 개발자일 뿐일까요…?”
발걸음을 돌리지만, 머릿속에서 그의 흔적이 사라지지 않습니다.

그 순간, 화면이 뒤틀리며 코드가 폭주합니다.
당신을 공격하는 듯한 소스 코드의 소용돌이.

이곳은 단순한 공간이 아니었습니다.
결정을 내려야 합니다.
  `,
          choices: [
            { text: "코드 괴물과 맞서 싸운다", nextScene: 10 },
            { text: "이 틈을 타 빠르게 탈출한다", nextScene: 7 }
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

코드를 고칠수록 상황은 더 꼬입니다.

오류는 쏟아지고 화면은 멈춰버립니다.

“무엇이 잘못된 걸까?”

그때 깜빡이는 메시지,
“오류 발생. 수정 실패.”

여기서 벗어나기엔 너무 늦어버린 걸까요?
이제 선택의 여지가 없어 보입니다...
  `,
        },
        {
          id: 7,
          description: `
.            |
　╲　　　　　　　　　　╱
　　　　　　　　/

　　　╲　　　  　　　╱

　　╲　　    설마...　　　╱

-　-　　　제 목소리가　　-　-　-

　　╱　   들리시나요?　　╲

　╱　　
    /                .
　　╱　　　　　　　　╲
　　　　　/　|　　　
　　　　　　　.
  `,
          choices: [
            {text: "당신은 누구시죠..?", nextScene: 8},
            {text: "뭐야?! 당장 꺼져!!", nextScene: 9}
          ]
        },
        {
          id: 8,
          description: `
.            |
  　╲　　　　　　　　　    　╱

　     ╲

　　　　　　　   　/
　　　╲　　　  　　     　╱

　　╲　　 믿기 어려우시겠지만,　　　╱

-　-　　당신과 소통 할 수 있는  -　-　-

　　╱　   힘이 제게 있습니다.　　╲

    ╱　　              ╲
              /           ╲
   ╱
                        .
  　　  ╱　　　　　　　　   ╲
  　　　　  　 　|　　　
　　　　    .
  `,
          choices: [
            {text: "누구시죠? 이 상황을 설명해 주십시오", nextScene: 999},
            {text: "믿을 수 없다. 당장 응징한다", nextScene: 999}
          ]
        },
        {
          id: 9,
          description: `
    .            |
     　╲　　　　　　　　    　　╱
  　　　　　　╲　　       　/

  　　　　╲　　  　　     　    ╱

  　　╲　　
                  당신은...       ╱
  -　-       그저 친절한 방문자는
                  아니군요　　　

  -　-　           하지만 제겐 다른
               선택지가 없는 것
                  같습니다.　　

  　　╱　       우리는 이 자리에서
               끝을 봐야겠군요.　  　
                                  ╲

    　 ╱　　
         //                     .
        　 　╱　　　　　　　　    ╲
             /
        　　　　 　　|　　　
　　　　　　　.
  `,
          choices: [
            {text: "이게 끝이라니.. 당신의 비밀은?", nextScene: 999},
            {text: "하, 결국 폭력인가? 상대해 주지.", nextScene: 999}
          ]
        },
        {
          id: 10,
          description: `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 ∧＿∧  　        —̳͟͞͞⚾️
( · ·)つ   —̳͟͞͞⚾️     —̳͟͞͞⚾️
(つ　 <
｜　 _つ
\`し´

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

“당신의 공격은 적중했지만…”
코드 괴물은 스스로 재구성되며 다시 완전해집니다.

“공격은 무의미했습니다.”

그 순간, 화면 속 메시지가 떠오릅니다:
“다른 방법을 찾아야 합니다.”
  `,
          choices: [
            {text: "개발자 도대체... 어째서 이런괴물을..", nextScene: 999},
            {text: "주변을 둘러본다", nextScene: 999}
          ]
        },
        {
          id: 999,
          description: `
. ∧_∧    잠깐 아직 완성이 안됐잖아!
 (･ω･)       다음에 이용해주세요.
　｜⊃／(＿＿＿
／└-(＿＿＿_／
￣￣￣￣￣￣`,
          choices: []
        },
      ],
      currentScene: {},
      previousScenes: [],
      gameOver: false,
      visibleText: "",
      textIndex: 0,
      showChoices: false,
      isTwisting: false,
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
      this.textIndex = 0;
      this.visibleText = ""; // Reset visible text
      this.showChoices = false; // Hide choices until typing is finished

      const interval = setInterval(() => {
        this.visibleText += text[this.textIndex];
        this.textIndex++;
        if (this.textIndex === text.length) {
          clearInterval(interval);
          this.showChoices = true; // Show choices after typing is finished
        }
      }, 10);

      // 사용자 클릭 시 즉시 타이핑 멈추고 텍스트 출력
      this.$refs.textContainer.addEventListener('click', () => {
        if (this.textIndex < text.length) {
          clearInterval(interval); // 타이핑 중지
          this.visibleText = text; // 전체 텍스트 즉시 출력
          this.showChoices = true; // 선택지 표시
        }
      });
    },
    triggerTwistEffect() {
      this.isTwisting = true;
      setTimeout(() => {
        this.isTwisting = false;
      }, 1000);
    },
    makeChoice(choice) {
      const nextScene = this.scenes.find(scene => scene.id === choice.nextScene);
      if (nextScene.id === 999 || nextScene.id === 6) {
        this.gameOver = true;
      }

      if (nextScene.id === 5) {
        this.triggerTwistEffect();
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
  },
  created() {
    const currentFromQuery = this.$route.query.current;
    if (currentFromQuery !==  undefined) {
      // 경로 URL 제거
      const queryString = window.location.search;
      const newUrl = `${window.location.origin}${queryString}`;
      window.history.replaceState(null, '', newUrl);
    }
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

.twist-effect {
  animation: twist 0.6s ease-in-out;
}

@keyframes twist {
  0% {
    transform: rotate(0deg) scale(1);
  }
  45% {
    transform: rotate(30deg) scale(1.2);
  }
  75% {
    transform: rotate(-30deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>