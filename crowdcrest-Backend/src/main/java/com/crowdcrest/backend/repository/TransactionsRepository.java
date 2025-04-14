package com.crowdcrest.backend.repository;

import com.crowdcrest.backend.entity.Donation;
import com.crowdcrest.backend.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionsRepository extends JpaRepository<Transaction, Long> {
    @Query("SELECT COUNT(DISTINCT t.member.id) FROM Transaction t WHERE t.donation = :donationId")
    Long countDistinctBackersByDonationId(@Param("donationId") Donation donationId);

    @Query("SELECT SUM(amount) FROM Transaction t WHERE t.donation = :donationId")
    Double sumAmountByDonationId(@Param("donationId") Donation donationId);

}
