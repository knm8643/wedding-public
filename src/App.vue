<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const textColor = isDarkMode ? '#FFFFFF' : '#000000';
    console.log(
        `
%c
 /\\__ /\\
( o   o )
(   '   )  ~♥
( \\     \\
(_____)___)  ~♥

%c
해당 사이트는 개인이 만든 서비스로 누구나 \n자유롭게 이용이 가능한 공간입니다.
%c
※ 문의 knm8643@nate.com
%c
Copyright (c) knm8643 All rights reserved.
`,
        'font-size: 14px; color: #FFB6C1; font-weight: bold;',
        `font-size: 14px; color: ${textColor}; font-weight: 500;`,
        `font-size: 12px; color: ${textColor}; font-weight: 500;`,
        `font-size: 12px; color: ${textColor}; font-style: italic;`
    );
  }
}
</script>
<style>
#app{
  background-color: #f0f0f0;
}
</style>


