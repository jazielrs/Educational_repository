package com.jazielrojas.educationalrepository.handler;

import com.jazielrojas.educationalrepository.jpa.entities.CommentEntity;
import com.jazielrojas.educationalrepository.jpa.repositories.CommentRepository;
import com.jazielrojas.educationalrepository.models.CreateCommentRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class CreateCommentHandler {

    private final CommentRepository commentRepository;

    public CreateCommentHandler(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void createComment(CreateCommentRequest request) {
        CommentEntity comment = new CommentEntity();
        comment.setId(UUID.randomUUID());
        comment.setComment(request.getComment());
        comment.setDatetime(LocalDateTime.now());
        comment.setUserId(request.getUserId());
        comment.setUsername(request.getUsername());
        commentRepository.save(comment);
    }


    public List<CommentEntity> getComments() {
        return commentRepository.findAll();
    }

    public void deleteComment(UUID commentId) {
        CommentEntity comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("Comentario no encontrado"));
        comment.setState(false);
        commentRepository.save(comment);
    }

    public boolean deleteCommentIfOwner(UUID commentId, UUID userId) {
        return commentRepository.findById(commentId)
                .filter(comment -> comment.getUserId().equals(userId))
                .map(comment -> {
                    commentRepository.delete(comment);
                    return true;
                })
                .orElse(false); // Si no se cumple el filtro, o el comentario no existe, retorna false
    }


}


