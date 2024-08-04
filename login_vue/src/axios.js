// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8002/api", // 백엔드 API의 기본 URL
  withCredentials: true, // 쿠키와 같은 자격 증명을 포함하려면 필요
});

export default instance;
