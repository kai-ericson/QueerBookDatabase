package com.example.qbd.service;

import com.example.qbd.BookDTO;
import com.example.qbd.Tag;
import com.example.qbd.TagType;
import com.example.qbd.enteties.Book;
import com.example.qbd.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    public Page<BookDTO> getBooks(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return bookRepository.findAll(pageable).map(this::toDto);
    }

    public BookDTO getBookById(String id) {
        return bookRepository.findById(id)
                .map(this::toDto)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Book not found"
                        )
                );
    }

    public List<Tag> makeTagList(String genre, String representation) {
        String[] genreList = genre.split(",");
        String[] representationList = representation.split(",");
        List<Tag> tagList = new ArrayList<>();
        for (String g : genreList){
            tagList.add(stringToTag(g, "Genre"));
        }
        for(String r : representationList){
            tagList.add(stringToTag(r, "Representation"));
        }
       return tagList;
    }

    public Tag stringToTag(String tag, String type) {
        TagType tagType = null;
        String tagCapitalized = tag.substring(0, 1).toUpperCase() + tag.substring(1).toLowerCase();
        if(type.equals("Representation")){
            tagType = TagType.Representation;
        }else if(type.equals("Genre")){
            tagType = TagType.Genre;
        }
        if(tagType==null){
            throw new NullPointerException("TagType is null");
        }
        return new Tag(tagCapitalized, tagType);
    }

    public LocalDate stringToDate(String date){
        DateTimeFormatter formatter
                = DateTimeFormatter.ofPattern("yyyyMMdd");
        return LocalDate.parse(date, formatter);
    }

    private BookDTO toDto(Book book){
        return new BookDTO(book.getId(), book.getTitle(), book.getAuthor(), book.getSynopsis(),
                makeTagList(book.getGenre(), book.getRepresentation()), stringToDate(book.getPublicationDate()),
                book.getLanguage(), book.getSeries());

    }

}
