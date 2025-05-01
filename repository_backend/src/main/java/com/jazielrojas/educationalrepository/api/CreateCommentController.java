package com.jazielrojas.educationalrepository.api;

import com.jazielrojas.educationalrepository.handler.CreateCommentHandler;
import com.jazielrojas.educationalrepository.jpa.entities.CommentEntity;
import com.jazielrojas.educationalrepository.models.CreateCommentRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/comments")
public class CreateCommentController {

    private final CreateCommentHandler createCommentHandler;

    public CreateCommentController(CreateCommentHandler createCommentHandler) {
        this.createCommentHandler = createCommentHandler;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    public ResponseEntity<String> createComment(@Valid @RequestBody CreateCommentRequest request) {
        createCommentHandler.createComment(request);
        return ResponseEntity.ok("Comentario creado exitosamente");
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/getcomments")
    public ResponseEntity<List<CommentEntity>> getComments() {
        List<CommentEntity> comments = createCommentHandler.getComments();
        return ResponseEntity.ok(comments);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable UUID id, @RequestHeader("userId") UUID userId) {
        boolean deleted = createCommentHandler.deleteCommentIfOwner(id, userId);
        if (!deleted) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No tienes permiso para eliminar este comentario");
        }
        return ResponseEntity.ok("Comentario eliminado");
    }


}

