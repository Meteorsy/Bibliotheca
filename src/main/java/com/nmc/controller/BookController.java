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

    @RequestMapping(name = "add", method = RequestMethod.POST)
    public Book doSave(@RequestBody String request) {
        return this.bookService.doSave(request);
    }

    @RequestMapping(name = "list", method = RequestMethod.POST)
    public List<Book> doList() {
        return this.bookService.doList();
    }

    @RequestMapping(name = "borrow", method = RequestMethod.POST)
    public List<Book> doListBorrow(HttpSession session) {
        return this.bookService.doListBorrow(session);
    }

    @RequestMapping(name = "check", method = RequestMethod.POST)
    public List<Book> doListCheck() {
        return this.bookService.doListCheck();
    }

    @RequestMapping(name = "modify", method = RequestMethod.POST)
    public int doModify(@RequestBody String request) {
        return this.bookService.doModify(request);
    }

    @RequestMapping(name = "change", method = RequestMethod.POST)
    public int doChange(@RequestBody String request, HttpSession session) {
        return this.bookService.doChange(request, session);
    }
}