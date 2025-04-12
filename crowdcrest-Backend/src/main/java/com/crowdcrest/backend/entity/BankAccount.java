package com.crowdcrest.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "bank_account")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bank_account_id;

    private String bankName;
    private String routingNumber;
    private String accountNumber;
    private String billingAddress;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member organizer;

    @OneToOne
    @JoinColumn(name = "donation_id")
    private Donation donation;
}
