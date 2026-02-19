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

    public void deleteById(Integer  id){
        bookRepository.deleteById(id);
    }

    public Book updateBook(Integer id, Book book){
        Book existingBook = bookRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Book not found"));

        existingBook.setIsbn(book.getIsbn());
        existingBook.setTitle(book.getTitle());
        existingBook.setAuthor(book.getAuthor());
        existingBook.setDescription(book.getDescription());
        existingBook.setPrice(book.getPrice());

    return bookRepository.save(existingBook);
}

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public List<Book> searchBooks(String title){
        return bookRepository.findByTitleContainingIgnoringCase(title);
    }

    
}
