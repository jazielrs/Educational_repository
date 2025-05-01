package com.jazielrojas.educationalrepository.jpa.repositories;

import com.jazielrojas.educationalrepository.jpa.entities.CommentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, UUID> {
}

