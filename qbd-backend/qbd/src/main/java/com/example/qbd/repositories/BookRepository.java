package com.example.qbd.repositories;

import com.example.qbd.enteties.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository<Book, String> {
}
