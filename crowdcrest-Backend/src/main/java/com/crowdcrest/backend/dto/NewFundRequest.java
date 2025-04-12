package com.crowdcrest.backend.dto;

import com.crowdcrest.backend.entity.Member;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.time.LocalDate;

@Data
public class NewFundRequest {
    private String fundName;
    private Double target;
    private LocalDate deadline;
    private Long organizerId;
    private Member organizer;
    private String info;
    private String about;
    private String bankName;
    private String routingNumber;
    private String accountNumber;
    private String billingAddress;

}