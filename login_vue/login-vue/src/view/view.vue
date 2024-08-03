<script setup></script>

<template>
  <div
    class="flex flex-col justify-center items-center h-screen w-screen bg-sky-100"
  >
    <div class="text-3xl items-center mb-8 text-purple-500">Login-Test</div>
    <div class="text-lg items-center mb-6 text-purple-900">
      로그인 테스트용 샘플페이지 입니다!
    </div>
    <div class="flex flex-col justify-between h-auto w-1/2 items-stretch">
      <div class="flex justify-between mb-3 items-center">
        <div>구글 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/google-login.png"
            class="w-40"
            @click="loginToGoogle"
          />
        </div>
      </div>
      <div class="flex justify-between mb-3 items-center">
        <div>깃허브 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/github-login.png"
            class="w-40"
            @click="loginToGithub"
          />
        </div>
      </div>
      <div class="flex justify-between mb-3 items-center">
        <div>카카오 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/kakao-login.png"
            class="w-40"
            @click="loginToKakao"
          />
        </div>
      </div>
      <div class="flex justify-between mb-3 items-center">
        <div>네이버 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/naver-login.png"
            class="w-40"
            @click="loginToNaver"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
