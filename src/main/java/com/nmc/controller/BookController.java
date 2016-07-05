package com.nmc.controller;

import com.nmc.dao.entity.Book;
import com.nmc.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public Book doSave(@RequestBody String request) {
        return this.bookService.doSave(request);
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    public List<Book> doList() {
        return this.bookService.doList();
    }

    @RequestMapping(value = "borrow", method = RequestMethod.POST)
    public List<Book> doListBorrow(HttpSession session) {
        return this.bookService.doListBorrow(session);
    }

    @RequestMapping(value = "check", method = RequestMethod.POST)
    public List<Book> doListCheck() {
        return this.bookService.doListCheck();
    }

    @RequestMapping(value = "modify", method = RequestMethod.POST)
    public int doModify(@RequestBody String request) {
        return this.bookService.doModify(request);
    }

    @RequestMapping(value = "change", method = RequestMethod.POST)
    public int doChange(@RequestBody String request, HttpSession session) {
        return this.bookService.doChange(request, session);
    }

    @RequestMapping(value = "show", method = RequestMethod.POST)
    public List<Book> doShow() {
        return this.bookService.doShow();
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST)
    public boolean doDelete(@RequestBody String request) {
        return this.bookService.doDelete(request);
    }

    @RequestMapping(value = "modified", method = RequestMethod.POST)
    public int doModified(@RequestBody String request) {
        return this.bookService.doModified(request);
    }
}