package com.nmc.service;

import com.nmc.dao.entity.SelfDB;
import com.nmc.dao.repositorys.SelfDBRepository;
import com.nmc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SelfDBService {
    @Autowired
    private SelfDBRepository selfDBRepository;

    public SelfDB doSave(String input) {
        SelfDB selfDB = new SelfDB();

        String name = StringUtils.getParameter(input, 0);
        String link = StringUtils.getParameter(input, 1);
        int type = Integer.valueOf(StringUtils.getParameter(input, 2));

        selfDB.setId((int)this.selfDBRepository.count() + 1);
        selfDB.setDb_name(name);
        selfDB.setDb_link(link);
        selfDB.setDb_type(type);

        return this.selfDBRepository.save(selfDB);
    }

    public List<SelfDB> doLoad(int source) {
        return this.selfDBRepository.findByType(source);
    }
}