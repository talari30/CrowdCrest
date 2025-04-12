package com.crowdcrest.backend.repository;

import com.crowdcrest.backend.entity.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {}

