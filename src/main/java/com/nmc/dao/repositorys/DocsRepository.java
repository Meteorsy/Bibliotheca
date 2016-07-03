package com.nmc.dao.repositorys;

import com.nmc.dao.entity.Docs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public interface DocsRepository extends JpaRepository<Docs, Integer> {
    @Query("SELECT docs FROM Docs docs WHERE docs.doc_requester=:requester")
    List<Docs> findAll(@Param("requester") String requester);

    @Modifying
    @Query("UPDATE Docs docs SET docs.doc_state = :state WHERE docs.id = :id")
    int update(@Param("state") String state, @Param("id") String id);
}