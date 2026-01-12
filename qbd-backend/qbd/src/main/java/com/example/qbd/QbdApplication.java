package com.example.qbd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class QbdApplication {

	public static void main(String[] args) {
		SpringApplication.run(QbdApplication.class, args);
		MongoClientConnection.connect();
	}
}
