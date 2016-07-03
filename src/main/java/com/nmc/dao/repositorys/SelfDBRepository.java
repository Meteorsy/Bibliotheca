package com.nmc.dao.repositorys;

import com.nmc.dao.entity.SelfDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public interface SelfDBRepository extends JpaRepository<SelfDB, Integer> {
    @Query("SELECT selfdb FROM SelfDB selfdb WHERE selfdb.db_type=:db_type")
    List<SelfDB> findByType(@Param("db_type") int type);
}