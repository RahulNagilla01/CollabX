package com.cx.backend.controller;

import com.cx.backend.model.User;
import com.cx.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/signup")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User signup(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
