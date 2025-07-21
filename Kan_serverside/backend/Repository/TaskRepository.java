// src/main/java/com/cx/backend/repository/TaskRepository.java
package com.cx.backend.Repository;

import com.cx.backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByUserUsername(String username);
}
