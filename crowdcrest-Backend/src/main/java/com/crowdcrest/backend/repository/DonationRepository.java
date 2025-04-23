package com.crowdcrest.backend.repository;

import com.crowdcrest.backend.entity.Donation;
import com.crowdcrest.backend.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    Donation findByDonationId(Long donationId);
    List<Donation> findByOrganizer(Member organizer);

}
