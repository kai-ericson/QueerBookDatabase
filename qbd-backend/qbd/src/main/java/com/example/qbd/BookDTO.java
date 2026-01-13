package com.example.qbd;

import java.time.LocalDate;
import java.util.List;

public record BookDTO(String id, String title, String author, String description, List<Tag> tags, LocalDate publicationDate, String language, String series) {
}
