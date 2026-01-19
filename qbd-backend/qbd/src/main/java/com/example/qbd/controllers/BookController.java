package com.example.qbd.controllers;

import com.example.qbd.BookDTO;
import com.example.qbd.enteties.Book;
import com.example.qbd.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BookController {
    @Autowired
    public final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/books")
    public Page<BookDTO> getAllBooks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return bookService.getBooks(page, size);
    }

    @GetMapping("/{id}")
    public BookDTO getBook(@PathVariable String id) {
        return bookService.getBookById(id);
    }

}
