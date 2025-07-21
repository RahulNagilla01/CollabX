package com.cx.backend.controller;

import com.cx.backend.model.Task;
import com.cx.backend.model.User;
import com.cx.backend.Repository.TaskRepository;
import com.cx.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tasks")
public class    TaskController {

    @Autowired private TaskRepository taskRepo;
    @Autowired private UserRepository userRepo;


    @GetMapping
    public List<Task> getTasks(@RequestParam String user) {
        return taskRepo.findByUserUsername(user);
    }


    @PostMapping
    public Task createTask(@RequestBody Map<String, String> body) {
        String title    = body.get("title");
        String status   = body.get("status");
        String username = body.get("username");
        User u = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Task t = new Task(title, status, u);
        return taskRepo.save(t);
    }

    /** Update only the status of an existing task **/
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Map<String, String> body) {
        Task t = taskRepo.findById(id).orElseThrow();
        t.setStatus(body.get("status"));
        return taskRepo.save(t);
    }

    /** Delete a task **/
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepo.deleteById(id);
    }
}
