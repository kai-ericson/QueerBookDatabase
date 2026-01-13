package com.example.qbd.controllers;

import com.example.qbd.enteties.Book;
import com.example.qbd.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {
    @Autowired
    public final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.getBooks();
    }
    /*
     * TODO: Make into BookDTO format
     */
}
