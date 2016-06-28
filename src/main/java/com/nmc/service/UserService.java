package com.nmc.service;

import com.nmc.dao.entity.User;
import com.nmc.dao.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User doLogin(String username, String password) {
        User user = new User();

        if (this.userRepository.validateLogin(username, password) != null) {
            user.setUserId(username);
        }

        return user;
    }
}