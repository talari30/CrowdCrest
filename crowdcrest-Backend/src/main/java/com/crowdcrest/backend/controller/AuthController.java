package com.crowdcrest.backend.controller;

import com.crowdcrest.backend.dto.SignupRequest;
import com.crowdcrest.backend.entity.Member;
import com.crowdcrest.backend.repository.MemberRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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

        return ResponseEntity.ok("User registered successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody SignupRequest signupRequest) {
        // Optional: check if a user with the same email already exists.
//        log.info("hi iam rahul");
        if (memberRepository.findByEmail(signupRequest.getEmail()) == null) {

            return ResponseEntity.badRequest().body("No account with this Email");
        }

        return ResponseEntity.ok("User log in successful");
    }
}
