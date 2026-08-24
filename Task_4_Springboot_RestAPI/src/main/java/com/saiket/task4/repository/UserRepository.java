package com.saiket.task4.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.saiket.task4.model.User;

@Repository
public class UserRepository {

    private final List<User> users = new ArrayList<>();


    public List<User> findAll() {
        return users;
    }


    public User findById(int id) {

        return users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElse(null);
    }


    public User save(User user) {

        users.add(user);

        return user;
    }


    public boolean deleteById(int id) {

        return users.removeIf(
                user -> user.getId() == id
        );
    }
}