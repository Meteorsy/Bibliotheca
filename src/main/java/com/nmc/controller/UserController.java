package com.nmc.controller;

import com.nmc.dao.entity.User;
import com.nmc.service.UserService;
import com.nmc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public User doLogin(@RequestBody String request) {
        String userId = StringUtils.getParameter(request, 0);
        String password = StringUtils.getParameter(request, 1);

        return this.userService.doLogin(userId, password);
    }
}