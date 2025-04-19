package com.crowdcrest.backend.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data

public class NewTransaction {
    private Long member_id;
    private Long donation_id;
    private Integer amount;
    private LocalDateTime transaction_time;

}
