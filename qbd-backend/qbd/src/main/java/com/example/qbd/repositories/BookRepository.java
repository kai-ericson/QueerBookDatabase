package com.example.qbd.repositories;

import com.example.qbd.enteties.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, String> {

    @Query("{ 'tags.title':  { $all:  ?0 } }")
    List<Book> findByTags(List<String> tagTitles);

}
