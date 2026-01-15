package com.example.qbd;

public class Tag {
    String title;
    TagType type;

    public Tag(String title, TagType type) {
        this.title = title;
        this.type = type;
    }
    @Override
    public String toString() {
        return title + " " + type.toString();
    }
}
