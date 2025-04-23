package com.crowdcrest.backend.dto;

import com.crowdcrest.backend.entity.Member;
import lombok.Data;

@Data
public class MemberDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private String address;
    private String phoneNumber;

    public MemberDTO(Member member) {
        this.id = member.getId();
        this.firstName = member.getFirstName();
        this.lastName = member.getLastName();
        this.email = member.getEmail();
        this.age = member.getAge();
        this.address = member.getAddress();
        this.phoneNumber = member.getPhoneNumber();
    }
}
