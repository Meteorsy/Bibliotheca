package com.nmc.service;

import com.nmc.dao.entity.Nav;
import com.nmc.dao.repositorys.NavRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NavService {
    @Autowired
    private NavRepository navRepository;

    public List<Nav> loadInitNav(Integer rights){
        return this.navRepository.findAll();
    }
}