package com.jazielrojas.educationalrepository.handler;

import org.springframework.stereotype.Service;
import com.jazielrojas.educationalrepository.jpa.entities.UserEntity;
import com.jazielrojas.educationalrepository.jpa.repositories.UserRepository;
import com.jazielrojas.educationalrepository.models.CreateUserRequest;

@Service
public class CreateUserHandler {

    private final UserRepository userRepository;

    public CreateUserHandler(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(CreateUserRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new IllegalArgumentException("El usuario ya existe");
        }
        UserEntity user = new UserEntity(request.getUsername(), request.getPassword(), request.getEmail());
        userRepository.save(user);
    }
}
