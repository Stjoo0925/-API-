package com.stjoo0925.user.model.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class SignUpDTO {
    private String userId;
    private String userName;
    private String userPass;
    private String role;
}
