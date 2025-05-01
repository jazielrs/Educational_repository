package com.jazielrojas.educationalrepository.models;

import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;

@Service
public class AuthUserRequest {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    public AuthUserRequest() {}

    public AuthUserRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
