package com.nmc.dao.utils;

import com.jolbox.bonecp.BoneCPDataSource;
import com.nmc.Bibliotheca;
import org.hibernate.cfg.Environment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackageClasses = Bibliotheca.class)
public class JPAConfig {
    @Value("${spring.datasource.driver-class-name}")
    private String driver;
    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.username}")
    private String username;
    @Value("${spring.datasource.password}")
    private String password;
    @Value("${spring.datasource.max-idle}")
    private int maxIdle;
    @Value("${spring.datasource.min-idle}")
    private int minIdle;
    @Value("${spring.datasource.initial-size}")
    private int initSize;
    @Value("${spring.jpa.properties.hibernate.dialect}")
    private String dialect;
    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String hbm2ddlAuto;
    @Value("${spring.jpa.show-sql}")
    private boolean showSql;

    @Bean
    public DataSource configureDataSource() {
        BoneCPDataSource dataSource = new BoneCPDataSource();

        dataSource.setDriverClass(this.driver);
        dataSource.setJdbcUrl(this.url);
        dataSource.setUsername(this.username);
        dataSource.setPassword(this.password);
        dataSource.setPartitionCount(3);
        dataSource.setMinConnectionsPerPartition(this.minIdle);
        dataSource.setMaxConnectionsPerPartition(this.maxIdle);
        dataSource.setAcquireIncrement(this.initSize);

        return dataSource;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();

        entityManagerFactoryBean.setDataSource(configureDataSource());
        entityManagerFactoryBean.setPackagesToScan("com.nmc.dao.entity");
        entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());

        Properties jpaProperties = new Properties();

        jpaProperties.put(Environment.DIALECT, this.dialect);
        jpaProperties.put(Environment.HBM2DDL_AUTO, this.hbm2ddlAuto);
        jpaProperties.put(Environment.SHOW_SQL, this.showSql);
        entityManagerFactoryBean.setJpaProperties(jpaProperties);

        return entityManagerFactoryBean;
    }

    @Bean(name = "transactionManager")
    public PlatformTransactionManager annotationDrivenTransactionManager() {
        return new JpaTransactionManager();
    }
}