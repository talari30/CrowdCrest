package com.crowdcrest.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "donations")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donationId;

    private String fundName;
    private Double target;
    private LocalDate deadline;
    private String about;

    @ManyToOne
    @JoinColumn(name = "organizer_id", referencedColumnName = "id")
    private Member organizer;
}
