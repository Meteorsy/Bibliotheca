package com.nmc.controller;

import com.nmc.dao.entity.Docs;
import com.nmc.service.DocsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/query")
public class DocsController {
    @Autowired
    private DocsService docsService;

    @RequestMapping(value = "add" , method = RequestMethod.POST)
    public Docs doSave(@RequestBody String request, HttpSession session) {
        return this.docsService.doSave(request, session);
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    public List<Docs> doList(HttpSession session) {
        return this.docsService.doList(session);
    }

    @RequestMapping(value = "modify", method = RequestMethod.POST)
    public int doModify(@RequestBody String request) {
        return this.docsService.doModify(request);
    }

    @RequestMapping(value = "check", method = RequestMethod.POST)
    public List<Docs> doListAll() {
        return this.docsService.doListAll();
    }
}