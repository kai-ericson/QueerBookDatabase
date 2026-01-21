package com.example.qbd.controllers;

import com.example.qbd.BookDTO;
import com.example.qbd.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
            @RequestParam(required=false) List<String> tags,
            @PageableDefault(size=10) Pageable pageable) {
        return bookService.getBooks(tags, pageable);
    }

    @GetMapping("/books/{id}")
    public BookDTO getBook(@PathVariable String id) {
        System.out.println("BY ID endpoint hit with id: " + id);
        return bookService.getBookById(id);
    }

}
