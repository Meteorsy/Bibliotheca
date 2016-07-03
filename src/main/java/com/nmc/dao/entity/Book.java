package com.nmc.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "book")
public class Book {
    @Id
    @Column(name = "bookId")
    private String bookId;

    @Column(name = "bookName")
    private String bookName;

    @Column(name = "ownerId")
    private String ownerId;

    @Column(name = "borrowTime")
    private Date borrowTime;

    @Column(name = "state")
    private String states;

    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }

    public Date getBorrowTime() {
        return borrowTime;
    }

    public void setBorrowTime(Date borrowTime) {
        this.borrowTime = borrowTime;
    }

    public String getState() {
        return states;
    }

    public void setState(String state) {
        this.states = state;
    }
}