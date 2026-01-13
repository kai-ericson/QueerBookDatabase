package com.example.qbd.service;

import com.example.qbd.BookDTO;
import com.example.qbd.Tag;
import com.example.qbd.TagType;
import com.example.qbd.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookDTO> getBooks() {
        return bookRepository.findAll().stream()
                .map(book -> new BookDTO(book.getId(), book.getTitle(), book.getAuthor(), book.getSynopsis(),
                        makeTagList(book.getGenre(), book.getRepresentation()), stringToDate(book.getPublicationDate()),
                        book.getLanguage(), book.getSeries())).toList();
    }

    public List<Tag> makeTagList(String genre, String representation) {
        String[] genreList = genre.split(",");
        String[] representationList = representation.split(",");
        List<Tag> tagList = new ArrayList<>();
        for (String g : genreList){
            tagList.add(stringToTag(g, genre));
        }
        for(String r : representationList){
            tagList.add(stringToTag(r, genre));
        }
       return tagList;
    }

    public Tag stringToTag(String tag, String type) {
        TagType tagType = null;
        if(type.equals("representation")){
            tagType = TagType.Representation;
        }else if(type.equals("genre")){
            tagType = TagType.Genre;
        }
        if(tagType==null){
            throw new NullPointerException("TagType is null");
        }
        return new Tag(tag, tagType);
    }

    public LocalDate stringToDate(String date){
        DateTimeFormatter formatter
                = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(date, formatter);
    }

}
