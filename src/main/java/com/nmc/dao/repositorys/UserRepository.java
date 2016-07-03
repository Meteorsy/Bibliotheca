package com.nmc.dao.repositorys;

import com.nmc.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, String> {
    @Query("SELECT user FROM User user WHERE user.userId = :userId AND user.password = :password")
    User validateLogin(@Param("userId") String userId, @Param("password") String password);

    @Modifying
    @Query("UPDATE User user SET user.username=:username, user.password=:password, user.phone=:mobile, user.email=:email WHERE user.userId=:userId")
    int update(
            @Param("username") String username,
            @Param("password") String password,
            @Param("mobile") String mobile,
            @Param("email") String email,
            @Param("userId") String userId);
}