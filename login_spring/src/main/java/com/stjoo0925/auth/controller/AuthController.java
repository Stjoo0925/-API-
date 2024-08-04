package com.stjoo0925.auth.controller;

import com.stjoo0925.auth.model.OAuth2LoginRequest;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/login")
public class AuthController {

    @PostMapping("/google")
    public ResponseEntity<?> loginWithGoogle(@RequestBody OAuth2LoginRequest request) {
        // Google 로그인 로직 처리
        return ResponseEntity.ok().body("Google 로그인 성공");
    }

    @PostMapping("/github")
    public ResponseEntity<?> loginWithGithub(@RequestBody OAuth2LoginRequest request) {
        // GitHub 로그인 로직 처리
        return ResponseEntity.ok().body("GitHub 로그인 성공");
    }

    @PostMapping("/kakao")
    public ResponseEntity<?> loginWithKakao(@RequestBody OAuth2LoginRequest request) {
        // 카카오 로그인 로직 처리
        return ResponseEntity.ok().body("Kakao 로그인 성공");
    }

    @PostMapping("/naver")
    public ResponseEntity<?> loginWithNaver(@RequestBody OAuth2LoginRequest request) {
        // 네이버 로그인 로직 처리
        return ResponseEntity.ok().body("Naver 로그인 성공");
    }
}
