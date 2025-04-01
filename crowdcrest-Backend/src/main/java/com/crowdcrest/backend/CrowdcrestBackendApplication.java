package com.crowdcrest.backend;


import com.crowdcrest.backend.controller.AuthController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@SpringBootApplication
public class CrowdcrestBackendApplication {
	private static final Logger log = LoggerFactory.getLogger(AuthController.class);


	public static void main(String[] args) {
		log.info("Hi, I am Rahul!");
		SpringApplication.run(CrowdcrestBackendApplication.class, args);
	}

}
