package com.itg.examp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class LoginSystemExampleApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(LoginSystemExampleApplication.class, args);
	}

}
