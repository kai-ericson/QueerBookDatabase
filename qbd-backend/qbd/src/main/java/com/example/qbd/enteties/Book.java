package com.example.qbd.enteties;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="books")
public class Book {
    @Id
    String id;
    @Field("Title")
    String title;
    @Field("Author")
    String author;
    @Field("Synopsis")
    String synopsis;
    @Field("Genre")
    String genre;
    @Field("Representation")
    String representation;
    @Field("Series")
    String series;
    @Field("Language")
    String language;
    @Field("Publication date")
    String publicationDate;

    public Book() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getRepresentation() {
        return representation;
    }

    public void setRepresentation(String representation) {
        this.representation = representation;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(String publicationDate) {
        this.publicationDate = publicationDate;
    }
}
