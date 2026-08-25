package com.saiket.task6.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saiket.task6.model.User;
import com.saiket.task6.service.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {

        this.userService = userService;
    }


    // Create User
    @PostMapping
    public User createUser(@RequestBody User user) {

        return userService.createUser(user);
    }


    // Get All Users
    @GetMapping
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }


    // Get User By ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {

        return userService.getUserById(id);
    }


    // Update User
    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable int id,
            @RequestBody User user) {

        return userService.updateUser(id, user);
    }


    // Delete User
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {

        boolean deleted = userService.deleteUser(id);

        if (deleted) {
            return "User deleted successfully";
        }

        return "User not found";
    }
}