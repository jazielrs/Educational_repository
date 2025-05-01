package com.jazielrojas.educationalrepository.handler;

import org.springframework.stereotype.Service;
import com.jazielrojas.educationalrepository.jpa.entities.UserEntity;
import com.jazielrojas.educationalrepository.jpa.repositories.UserRepository;
import com.jazielrojas.educationalrepository.models.AuthUserRequest;

import java.util.Optional;

@Service
public class AuthUserHandler {

    private final UserRepository userRepository;

    public AuthUserHandler(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<UserEntity> authenticate(AuthUserRequest request) {
        return userRepository.findByUsername(request.getUsername())
                .filter(user -> user.getPassword().equals(request.getPassword()));
    }

}
