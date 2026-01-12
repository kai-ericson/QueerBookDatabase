package com.example.qbd;

import java.time.LocalDate;

public record BookDTO(String title, String author, String description, TagType[] tags, LocalDate publicationDate, String language) {
}
