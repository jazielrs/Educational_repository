package com.jazielrojas.educationalrepository.api;

import com.jazielrojas.educationalrepository.jpa.entities.UserEntity;
import com.jazielrojas.educationalrepository.models.AuthUserRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.jazielrojas.educationalrepository.handler.AuthUserHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthUserHandler authUserHandler;

    public AuthController(AuthUserHandler authUserHandler) {
        this.authUserHandler = authUserHandler;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@Valid @RequestBody AuthUserRequest request) {
        Optional<UserEntity> user = authUserHandler.authenticate(request);
        if (user.isPresent()) {
            Map<String, String> response = new HashMap<>();
            response.put("userId", user.get().getId().toString());
            response.put("username", user.get().getUsername());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body(Map.of("message", "Credenciales inválidas"));
        }
    }

}
