package com.saiket.task6.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saiket.task6.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}