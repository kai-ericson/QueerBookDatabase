package com.example.qbd;

import java.time.LocalDate;
import java.util.List;

public record BookDTO(String id, String title, String author, String description, List<Tag> tags, LocalDate publicationDate, String language, String series) {
    @Override
    public String id() {
        return id;
    }

    @Override
    public String title() {
        return title;
    }

    @Override
    public String author() {
        return author;
    }

    @Override
    public String description() {
        return description;
    }

    @Override
    public List<Tag> tags() {
        return tags;
    }

    @Override
    public LocalDate publicationDate() {
        return publicationDate;
    }

    @Override
    public String language() {
        return language;
    }

    @Override
    public String series() {
        return series;
    }
}
