<script setup>
import axios from "@/axios";

const loginWithGoogle = async () => {
  try {
    const response = await axios.post("/login/google");
    console.log("Google 로그인 성공:", response.data);
  } catch (error) {
    console.error("Google 로그인 실패:", error);
  }
};

const loginWithGithub = async () => {
  try {
    const response = await axios.post("/login/github");
    console.log("GitHub 로그인 성공:", response.data);
  } catch (error) {
    console.error("GitHub 로그인 실패:", error);
  }
};

const loginWithKakao = async () => {
  try {
    const response = await axios.post("/login/kakao");
    console.log("Kakao 로그인 성공:", response.data);
  } catch (error) {
    console.error("Kakao 로그인 실패:", error);
  }
};

const loginWithNaver = async () => {
  try {
    const response = await axios.post("/login/naver");
    console.log("Naver 로그인 성공:", response.data);
  } catch (error) {
    console.error("Naver 로그인 실패:", error);
  }
};
</script>

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
            @click="loginWithGoogle"
          />
        </div>
      </div>
      <div class="flex justify-between mb-3 items-center">
        <div>깃허브 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/github-login.png"
            class="w-40"
            @click="loginWithGithub"
          />
        </div>
      </div>
      <div class="flex justify-between mb-3 items-center">
        <div>카카오 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/kakao-login.png"
            class="w-40"
            @click="loginWithKakao"
          />
        </div>
      </div>
      <div class="flex justify-between mb-3 items-center">
        <div>네이버 로그인</div>
        <div class="cursor-pointer">
          <img
            src="@/assets/images/naver-login.png"
            class="w-40"
            @click="loginWithNaver"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
