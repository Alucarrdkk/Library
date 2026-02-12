package com.library.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.library.dataAccess.entity.Book;
import com.library.dataAccess.repository.BookRepository;

@Service
public class BookService {

    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    public Book createBook(Book book){
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public List<Book> searchBooks(String title){
        return bookRepository.findByTitleContainingIgnoringCase(title);
    }

    
}
