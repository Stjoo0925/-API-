import { defineStore } from "pinia";
import axios from "axios";

export const useAPIStore = defineStore("useAPIStore", {
  state: () => ({
    googleAuth: null,
    githubAuth: null,
    kakaoAuth: null,
    naverAuth: null,
    error: null,
  }),
  actions: {
    async loginWithGoogle() {
      try {
        const response = await axios.post("/api/login/google");
        this.googleAuth = response.data;
      } catch (error) {
        this.error = "Google 로그인 실패: " + error.message;
      }
    },
    async loginWithGithub() {
      try {
        const response = await axios.post("/api/login/github");
        this.githubAuth = response.data;
      } catch (error) {
        this.error = "GitHub 로그인 실패: " + error.message;
      }
    },
    async loginWithKakao() {
      try {
        const response = await axios.post("/api/login/kakao");
        this.kakaoAuth = response.data;
      } catch (error) {
        this.error = "Kakao 로그인 실패: " + error.message;
      }
    },
    async loginWithNaver() {
      try {
        const response = await axios.post("/api/login/naver");
        this.naverAuth = response.data;
      } catch (error) {
        this.error = "Naver 로그인 실패: " + error.message;
      }
    },
  },
});
