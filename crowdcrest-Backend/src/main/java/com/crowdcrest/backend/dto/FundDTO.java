package com.crowdcrest.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FundDTO {
    private Long donationId;
    private String fundName;
    private Double target;
    private LocalDate deadline;
    private Double amountReceived;
    private Long backers;
}
