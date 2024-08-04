package com.stjoo0925.auth.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OAuth2LoginRequest {
    private String authorizationCode;
    private String redirectUri;
    private String clientId;
    private String clientSecret;
    private String grantType;
}
