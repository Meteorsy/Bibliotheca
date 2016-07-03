package com.nmc.service;

import com.nmc.dao.entity.User;
import com.nmc.dao.repositorys.UserRepository;
import com.nmc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User doLogin(String input, HttpSession session) {
        User user = new User();

        String username = StringUtils.getParameter(input, 0);
        String password = StringUtils.getParameter(input, 1);

        if (this.userRepository.validateLogin(username, password) != null) {
            user = this.userRepository.findOne(username);
            session.setAttribute("username", user.getUsername());
            session.setAttribute("userId", user.getUserId());
            session.setAttribute("rights", user.getRights());
        }

        return user;
    }

    public User doSave(String input) {
        User user = new User();

        user.setUserId(StringUtils.getParameter(input, 0));
        user.setPassword(StringUtils.getParameter(input, 1));
        user.setUsername(StringUtils.getParameter(input, 3));
        user.setPhone(StringUtils.getParameter(input, 4));
        user.setEmail(StringUtils.getParameter(input, 5));
        user.setIcon("#");
        user.setRights(1);

        if (StringUtils.getParameter(input, 1).equals(StringUtils.getParameter(input, 2)) && !this.userRepository.exists(user.getUserId())) {
            return this.userRepository.save(user);
        }

        return null;
    }

    public List<User> doList() {
        return this.userRepository.findAll();
    }

    public boolean doDelete(String input) {
        String userId = StringUtils.getParameter(input, 0);
        this.userRepository.delete(userId);

        return !this.userRepository.exists(userId);
    }

    public int doModify(String input) {
        String userId = StringUtils.getParameter(input, 0);
        String password = StringUtils.getParameter(input, 1);
        String rePassword = StringUtils.getParameter(input, 2);
        String username = StringUtils.getParameter(input, 3);
        String phone = StringUtils.getParameter(input, 4);
        String email = StringUtils.getParameter(input, 5);

        if (password.equals(rePassword)) {
            return this.userRepository.update(username, password, phone, email, userId);
        }

        return 0;
    }
}