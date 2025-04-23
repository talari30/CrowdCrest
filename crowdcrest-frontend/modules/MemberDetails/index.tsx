'use client';
import { JSX } from "react";
import styles from "./MemberDetails.module.css";

interface Member {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: string;
  phoneNumber: string;
}

interface Props {
  member: Member;
}

const MemberDetails = ({ member }: Props): JSX.Element => {
  return (
    <div className={styles.card}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {member.firstName} {member.lastName}</p>
      <p><strong>Email:</strong> {member.email}</p>
      <p><strong>Age:</strong> {member.age}</p>
      <p><strong>Address:</strong> {member.address}</p>
      <p><strong>Phone:</strong> {member.phoneNumber}</p>
    </div>
  );
};

export default MemberDetails;
