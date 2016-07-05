package com.nmc.controller;

import com.nmc.dao.entity.SelfDB;
import com.nmc.service.SelfDBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/selfDb")
public class SelfDBController {
    @Autowired
    private SelfDBService selfDBService;

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public SelfDB doSave(@RequestBody String request) {
        return this.selfDBService.doSave(request);
    }

    @RequestMapping(value = "cn", method = RequestMethod.POST)
    public List<SelfDB> doLoadCN() {
        return this.selfDBService.doLoad(0);
    }

    @RequestMapping(value = "en", method = RequestMethod.POST)
    public List<SelfDB> doLoadEN() {
        return this.selfDBService.doLoad(1);
    }

    @RequestMapping(value = "mit", method = RequestMethod.POST)
    public List<SelfDB> doLoadMIT() {
        return this.selfDBService.doLoad(2);
    }

    @RequestMapping(value = "self", method = RequestMethod.POST)
    public List<SelfDB> doLoadSelf() {
        return this.selfDBService.doLoad(3);
    }

    @RequestMapping(value = "beStow", method = RequestMethod.POST)
    public List<SelfDB> doLoadBestow() {
        return this.selfDBService.doLoad(4);
    }

    @RequestMapping(value = "spread", method = RequestMethod.POST)
    public List<SelfDB> doLoadSpread() {
        return this.selfDBService.doLoad(5);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST)
    public boolean doDelete(@RequestBody String request) {
        return this.selfDBService.doDelete(request);
    }

    @RequestMapping(value = "modify", method = RequestMethod.POST)
    public int doModify(@RequestBody String request) {
        return this.selfDBService.doModify(request);
    }
}