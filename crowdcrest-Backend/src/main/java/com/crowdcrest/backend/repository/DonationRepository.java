package com.crowdcrest.backend.repository;

import com.crowdcrest.backend.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
}
