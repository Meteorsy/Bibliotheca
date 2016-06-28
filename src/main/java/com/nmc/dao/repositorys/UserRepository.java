package com.nmc.dao.repositorys;

import com.nmc.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, String> {
    @Query("SELECT user FROM User user WHERE userId = :userId AND password = :password")
    User validateLogin(@Param("userId") String userId, @Param("password") String password);
}