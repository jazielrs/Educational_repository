package com.jazielrojas.educationalrepository.api;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.jazielrojas.educationalrepository.handler.CreateUserHandler;
import com.jazielrojas.educationalrepository.models.CreateUserRequest;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final CreateUserHandler handler;

    public UserController(CreateUserHandler handler) {
        this.handler = handler;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    public ResponseEntity<String> createUser(@Valid @RequestBody CreateUserRequest request) {
        handler.createUser(request);
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }
}