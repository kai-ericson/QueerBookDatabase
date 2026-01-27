package com.example.qbd.enteties;

import com.example.qbd.TagType;

public class Tag {
    String title;
    TagType type;

    public Tag(String title, TagType type) {
        this.title = title;
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public TagType getType() {
        return type;
    }
}
