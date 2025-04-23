package com.crowdcrest.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DonationDTO {
    private Long transactionId;
    private Long organizerId;
    private String organizerFirstName;
    private String organizerLastName;
    private String fundName;
    private Double target;
    private LocalDateTime transactionTime;
    private Integer amount;
    private Long backers;
}
