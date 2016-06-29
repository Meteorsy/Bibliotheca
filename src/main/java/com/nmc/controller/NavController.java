package com.nmc.controller;

import com.nmc.dao.entity.Nav;
import com.nmc.service.NavService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/nav")
public class NavController {
    @Autowired
    private NavService navService;

    @RequestMapping(value = "load", method = RequestMethod.GET)
    public List<Nav> loadInitNav(HttpSession session){
        return this.navService.loadInitNav((Integer)session.getAttribute("rights"));
    }
}