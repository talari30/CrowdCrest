package com.crowdcrest.backend.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String firstName;
    private String lastName;
    private Integer age;
    private String address;
    private String phoneNumber;
    private String email;
    private String password;
}