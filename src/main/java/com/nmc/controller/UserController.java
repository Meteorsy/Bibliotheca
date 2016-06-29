package com.nmc.controller;

import com.nmc.dao.entity.User;
import com.nmc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public User doLogin(@RequestBody String request, HttpSession session) {
        return this.userService.doLogin(request, session);
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public User doSave(@RequestBody String request) {
        return this.userService.doSave(request);
    }
}