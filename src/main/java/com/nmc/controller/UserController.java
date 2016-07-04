package com.nmc.controller;

import com.nmc.dao.entity.User;
import com.nmc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;
import java.util.List;

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

    @RequestMapping(value = "list", method = RequestMethod.POST)
    public List<User> doList(HttpSession session) {
        return this.userService.doList(session);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST)
    public boolean doDelete(@RequestBody String request) {
        return this.userService.doDelete(request);
    }

    @RequestMapping(value = "modify", method = RequestMethod.POST)
    public int doModify(@RequestBody String request) {
        return this.userService.doModify(request, null);
    }

    @RequestMapping(value = "validate", method = RequestMethod.POST)
    public int doValidate(HttpSession session) {
        return session == null ? 3 : (Integer)session.getAttribute("rights");
    }

    @RequestMapping(value = "modified", method = RequestMethod.POST)
    public int doModified(@RequestBody String request, HttpSession session) {
        return this.userService.doModified(request, session);
    }

    @RequestMapping(value = "show", method = RequestMethod.POST)
    public User doShow(HttpSession session) {
        return this.userService.doShow(session);
    }
}