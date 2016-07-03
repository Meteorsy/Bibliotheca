package com.nmc.service;

import com.nmc.dao.entity.Docs;
import com.nmc.dao.repositorys.DocsRepository;
import com.nmc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.util.List;

@Service
public class DocsService {
    @Autowired
    private DocsRepository docsRepository;

    public Docs doSave(String input, HttpSession session){
        String keyword = StringUtils.getParameter(input, 0);
        Docs docs = new Docs();

        docs.setId((int)this.docsRepository.count() + 1);
        docs.setKeywords(keyword);
        docs.setRequester(session.getAttribute("userId").toString());
        docs.setDate(new Date(System.currentTimeMillis()));
        docs.setState("申请中");

        return this.docsRepository.save(docs);
    }

    public List<Docs> doList(HttpSession session) {
        return this.docsRepository.findAll(session.getAttribute("userId").toString());
    }

    public int doModify(String input) {
        String id = StringUtils.getParameter(input, 0);
        String state = StringUtils.getParameter(input, 1);
        return this.docsRepository.update(state, id);
    }

    public List<Docs> doListAll() {
        return this.docsRepository.findAll();
    }
}