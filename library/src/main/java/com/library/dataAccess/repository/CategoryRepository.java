package com.library.dataAccess.repository;

import com.library.dataAccess.entity.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{

    List<Category> findByParentIsNull();
    
}
