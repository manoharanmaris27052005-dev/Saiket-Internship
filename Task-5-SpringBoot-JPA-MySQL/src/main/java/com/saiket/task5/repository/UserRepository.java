package com.saiket.task5.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saiket.task5.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}