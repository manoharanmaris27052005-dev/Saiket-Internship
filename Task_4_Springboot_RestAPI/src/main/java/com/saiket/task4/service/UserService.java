package com.saiket.task4.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.saiket.task4.model.User;
import com.saiket.task4.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    // Create User
    public User createUser(User user) {

        return userRepository.save(user);
    }


    // Get All Users
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }


    // Get User By ID
    public User getUserById(int id) {

        return userRepository.findById(id);
    }


    // Delete User
    public boolean deleteUser(int id) {

        return userRepository.deleteById(id);
    }

//Update User
public User updateUser(int id, User updatedUser) {

 User existingUser = userRepository.findById(id);

 if (existingUser == null) {
     return null;
 }

 existingUser.setName(updatedUser.getName());
 existingUser.setEmail(updatedUser.getEmail());
 existingUser.setAge(updatedUser.getAge());

 return existingUser;
}}