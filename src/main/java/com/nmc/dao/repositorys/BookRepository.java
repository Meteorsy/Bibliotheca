package com.nmc.dao.repositorys;

import com.nmc.dao.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public interface BookRepository extends JpaRepository<Book, String> {
    @Query("SELECT book FROM Book book WHERE book.state = :states")
    List<Book> findAllBooks(@Param("states") String states);

    @Query("SELECT book FROM Book book WHERE book.ownerId = :ownerId")
    List<Book> findAllBorrowBooks(@Param("ownerId") String ownerId);

    @Modifying
    @Query("UPDATE Book book SET book.state=:states, book.ownerId=:ownerId WHERE book.bookId=:bookId")
    int update(
            @Param("states") String states,
            @Param("ownerId") String ownerId,
            @Param("bookId") String bookId
    );

    @Modifying
    @Query("UPDATE Book book SET book.bookName = :bookName WHERE book.bookId = :bookId")
    int updated(
            @Param("bookName") String bookName,
            @Param("bookId") String bookId
    );
}