package com.example.qbd.repositories;

import com.example.qbd.enteties.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, String> {

   // @Query("{ 'tags.title':  { $all:  ?0 } }")
    //Page<Book> findByTags(List<String> tagTitles, Pageable pageable);

}
