package com.nmc.dao.repositorys;

import com.nmc.dao.entity.Nav;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface NavRepository extends JpaRepository<Nav, Integer> {
    @Query("SELECT nav FROM Nav nav WHERE nav.rights >= :rights")
    List<Nav> findAll(@Param("rights") int rights);
}