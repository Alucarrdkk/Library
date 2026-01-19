package com.library.dataAccess.repository;

import org.springframework.stereotype.Repository;
import com.library.dataAccess.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
    
}
