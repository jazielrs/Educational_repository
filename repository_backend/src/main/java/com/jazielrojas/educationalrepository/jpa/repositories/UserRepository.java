package com.jazielrojas.educationalrepository.jpa.repositories;

import com.jazielrojas.educationalrepository.jpa.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    Optional<UserEntity> findByUsername(String username);
}
