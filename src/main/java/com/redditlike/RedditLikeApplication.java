package com.redditlike;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.redditlike.redditor.dao")
public class RedditLikeApplication {

	public static void main(String[] args) {
		SpringApplication.run(RedditLikeApplication.class, args);
	}
}
