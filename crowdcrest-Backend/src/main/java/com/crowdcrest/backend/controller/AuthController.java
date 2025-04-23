package com.crowdcrest.backend.controller;

import com.crowdcrest.backend.Util.JwtUtil;
import com.crowdcrest.backend.dto.NewTransaction;
import com.crowdcrest.backend.dto.SignupRequest;
import com.crowdcrest.backend.dto.LoginRequest;
import com.crowdcrest.backend.dto.NewFundRequest;
import com.crowdcrest.backend.dto.FundDTO;
import com.crowdcrest.backend.dto.DonationDTO;
import com.crowdcrest.backend.entity.Donation;
import com.crowdcrest.backend.entity.BankAccount;
import com.crowdcrest.backend.entity.Member;
import com.crowdcrest.backend.entity.Transaction;
import com.crowdcrest.backend.repository.DonationRepository;
import com.crowdcrest.backend.repository.MemberRepository;
import com.crowdcrest.backend.repository.BankAccountRepository;
import com.crowdcrest.backend.repository.TransactionsRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@Log4j2
public class AuthController {

    @Autowired
    private MemberRepository memberRepository;

    // Inject a PasswordEncoder bean to hash passwords.
    @Autowired
    private PasswordEncoder passwordEncoder;
//    private static final Logger log = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private JwtUtil jwtUtil;
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }

        String token = authHeader.substring(7); // Remove "Bearer "

        if (jwtUtil.validateToken(token)) {
            return ResponseEntity.ok("Valid");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest signupRequest) {
        // Optional: check if a user with the same email already exists.

        if (memberRepository.findByEmail(signupRequest.getEmail()) != null) {
            log.info("Hello");
            return ResponseEntity.badRequest().body("Email is already in use");
        }

        // Create a new member entity and copy over the fields.
        Member newMember = new Member();
        newMember.setFirstName(signupRequest.getFirstName());
        newMember.setLastName(signupRequest.getLastName());
        newMember.setAge(signupRequest.getAge());
        newMember.setAddress(signupRequest.getAddress());
        newMember.setPhoneNumber(signupRequest.getPhoneNumber());
        newMember.setEmail(signupRequest.getEmail());
        // Hash the password before storing
        newMember.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        // Save to the database
//        log.info("Saving new user with email: {}", newMember.getEmail());
//        log.debug("Debugging info...");


        memberRepository.save(newMember);

        String token = jwtUtil.generateToken(newMember.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registration successful");
        response.put("token", token);
        response.put("memberId", newMember.getId());


        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Member member = memberRepository.findByEmail(loginRequest.getEmail());
        if (member == null) {
            return ResponseEntity.badRequest().body("No account with this Email");
        }

        boolean matches = passwordEncoder.matches(loginRequest.getPassword(), member.getPassword());
        if (!matches) {
            return ResponseEntity.badRequest().body("Wrong password");
        }

        String token = jwtUtil.generateToken(member.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("token", token);
        response.put("memberId", member.getId());

        return ResponseEntity.ok(response);
    }
    @Autowired
    private DonationRepository donationRepository;

    @GetMapping("/home")

    public ResponseEntity<?> home() {
        log.info("Fetching all donations");

        List<Donation> allDonations = donationRepository.findAll();

        List<Map<String, Object>> donationList = allDonations.stream().map(donation -> {
            Member member = memberRepository.findById(donation.getOrganizer().getId()).orElse(null);
            String name = member != null
                    ? member.getFirstName() + " " + member.getLastName()
                    : "Unknown";


            Long backers = transactionsRepository.countDistinctBackersByDonationId(donation);
            Double received = transactionsRepository.sumAmountByDonationId(donation);

            Map<String, Object> map = new HashMap<>();
            map.put("donationId", donation.getDonationId());
            map.put("fundName", donation.getFundName());
            map.put("target", donation.getTarget());
            map.put("deadline", donation.getDeadline());
            map.put("about", donation.getAbout());
            map.put("info", donation.getInfo());
            map.put("organizerName", name);
            map.put("backers", backers != null ? backers : 0);
            map.put("amountReceived", received != null ? received : 0.0);

            return map;
        }).toList();


        return ResponseEntity.ok(donationList);
    }

    @Autowired
    private BankAccountRepository bankAccountRepository;

    @Transactional
    @PostMapping("/newFund")
    public ResponseEntity<?> NewFund(@RequestBody NewFundRequest newfundrequest) {
        Member organizer = memberRepository.findById(newfundrequest.getOrganizerId())
                .orElse(null);

        if (organizer == null) {
            return ResponseEntity.badRequest().body("Invalid organizer ID");
        }

        Donation donation = new Donation();
        donation.setFundName(newfundrequest.getFundName());
        donation.setTarget(newfundrequest.getTarget());
        donation.setDeadline(newfundrequest.getDeadline());
        donation.setAbout(newfundrequest.getAbout());
        donation.setInfo(newfundrequest.getInfo());
        donation.setOrganizer(organizer);

        donationRepository.save(donation);

        BankAccount bankAccount = new BankAccount();
        bankAccount.setBankName(newfundrequest.getBankName());
        bankAccount.setRoutingNumber(newfundrequest.getRoutingNumber());
        bankAccount.setAccountNumber(newfundrequest.getAccountNumber());
        bankAccount.setBillingAddress(newfundrequest.getBillingAddress());
        bankAccount.setDonation(donation);
        bankAccount.setOrganizer(organizer);

        bankAccountRepository.save(bankAccount);

        return ResponseEntity.ok("Fund and bank details registered successfully");
    }

    @Autowired
    private TransactionsRepository transactionsRepository;


    @Transactional
    @PostMapping("/transactions")
    public ResponseEntity<?> Transactions(@RequestBody NewTransaction newTransaction) {
        Member payer = memberRepository.findById(newTransaction.getMember_id())
                .orElse(null);
        Donation don = donationRepository.findByDonationId(newTransaction.getDonation_id());

        Transaction transaction = new Transaction();
        transaction.setMember(payer);
        transaction.setDonation(don);
        transaction.setAmount(newTransaction.getAmount());
        transaction.setTransaction_time(newTransaction.getTransaction_time());

        transactionsRepository.save(transaction);


        return ResponseEntity.ok("Transaction successful");
    }
    @GetMapping("/member/{memberId}/donations")
    public ResponseEntity<?> getMemberDetails(@PathVariable Long memberId) {
        Optional<Member> memberOpt = memberRepository.findById(memberId);
        if (memberOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Member not found");
        }

        Member member = memberOpt.get();

        // Funds started by the member
        List<Donation> startedFunds = donationRepository.findByOrganizer(member);
        List<FundDTO> fundDTOs = startedFunds.stream().map(donation -> {
            FundDTO dto = new FundDTO();
            dto.setDonationId(donation.getDonationId());
            dto.setFundName(donation.getFundName());
            dto.setTarget(donation.getTarget());
            dto.setDeadline(donation.getDeadline());
            dto.setAmountReceived(transactionsRepository.sumAmountByDonationId(donation));
            dto.setBackers(transactionsRepository.countDistinctBackersByDonationId(donation));
            return dto;
        }).toList();

        // Donations made by member
        List<Transaction> donationsMade = transactionsRepository.findByMemberId(memberId);
        List<DonationDTO> donationDTOs = donationsMade.stream().map(tx -> {
            DonationDTO dto = new DonationDTO();
            dto.setTransactionId(tx.getTransaction_id());
            dto.setOrganizerId(tx.getDonation().getOrganizer().getId());
            dto.setOrganizerFirstName(tx.getDonation().getOrganizer().getFirstName());
            dto.setOrganizerLastName(tx.getDonation().getOrganizer().getLastName());
            dto.setFundName(tx.getDonation().getFundName());
            dto.setTarget(tx.getDonation().getTarget());
            dto.setTransactionTime(tx.getTransaction_time());
            dto.setAmount(tx.getAmount());
            dto.setBackers(transactionsRepository.countDistinctBackersByDonationId(tx.getDonation()));
            return dto;
        }).toList();

        Map<String, Object> response = new HashMap<>();
        response.put("startedFunds", fundDTOs);
        response.put("donationsMade", donationDTOs);

        return ResponseEntity.ok(response);
    }


}

