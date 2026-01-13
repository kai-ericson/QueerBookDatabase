package com.example.qbd.controllers;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DebugController {

    private final MongoTemplate mongoTemplate;

    public DebugController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/debug")
    public Map<String, Object> debugMongo() {
        String dbName = mongoTemplate.getDb().getName();
        List<String> collections = mongoTemplate.getDb().listCollectionNames().into(new java.util.ArrayList<>());

        return Map.of(
                "connectedDatabase", dbName,
                "collections", collections
        );
    }
}

