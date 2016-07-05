package com.nmc.service;

import com.nmc.dao.entity.Book;
import com.nmc.dao.repositorys.BookRepository;
import com.nmc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book doSave(String input) {
        Book book = new Book();

        String bookId = StringUtils.getParameter(input, 0);
        String bookName = StringUtils.getParameter(input, 1);

        book.setBookId(bookId);
        book.setBookName(bookName);
        book.setBorrowTime(new Date(System.currentTimeMillis()));
        book.setOwnerId("0");
        book.setStates("在库");

        return this.bookRepository.save(book);
    }

    public List<Book> doList() {
        return this.bookRepository.findAllBooks("在库");
    }

    public List<Book> doListBorrow(HttpSession httpSession) {
        return this.bookRepository.findAllBorrowBooks(httpSession.getAttribute("userId").toString());
    }

    public List<Book> doListCheck() {
        return this.bookRepository.findAllBooks("待审核");
    }

    public List<Book> doShow() {
        return this.bookRepository.findAll();
    }

    public int doModify(String input) {
        String id = StringUtils.getParameter(input, 0);
        String state = StringUtils.getParameter(input, 1);
        String ownerId = this.bookRepository.findOne(id).getOwnerId();

        if (state.equals("已归还")) {
            ownerId = "";
            state = "在库";
        }

        return this.bookRepository.update(state, ownerId, id);
    }

    public int doChange(String input, HttpSession session) {
        String id = StringUtils.getParameter(input, 0);

        return this.bookRepository.update("待审核", session.getAttribute("userId").toString(), id);
    }

    public boolean doDelete(String input) {
        String id = StringUtils.getParameter(input, 0);

        this.bookRepository.delete(id);

        return !this.bookRepository.exists(id);
    }

    public int doModified(String input) {
        String id = StringUtils.getParameter(input, 0);
        String name = StringUtils.getParameter(input, 1);

        return this.bookRepository.updated(name, id);
    }
}