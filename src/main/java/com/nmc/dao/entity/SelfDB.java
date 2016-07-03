package com.nmc.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "selfdb")
public class SelfDB {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "db_name")
    private String db_name;

    @Column(name = "db_link")
    private String db_link;

    @Column(name = "db_type")
    private Integer db_type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDb_name() {
        return db_name;
    }

    public void setDb_name(String db_name) {
        this.db_name = db_name;
    }

    public String getDb_link() {
        return db_link;
    }

    public void setDb_link(String db_link) {
        this.db_link = db_link;
    }

    public Integer getDb_type() {
        return db_type;
    }

    public void setDb_type(Integer db_type) {
        this.db_type = db_type;
    }
}