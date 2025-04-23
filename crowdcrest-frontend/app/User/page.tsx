'use client'
import { Heading } from "@/elements/Heading";
import {Button} from  "@/elements/Button";
import styles from "./User.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX, useEffect, useState } from "react";
import { Jwt_Validation } from "@/Helper/JWTValidation";
import {useRouter} from "next/navigation";
import FundTable from "@/modules/Fund_table";
import DonationsTable from "@/modules/Donations_table";


interface Fund {
    donationId: number;
    fundName: string;
    target: number;
    deadline: string;
    amountReceived: number;
    backers: number;
  }
  interface Donations {
    transactionId: number;
    organizerId: number;
    organizerFirstName: string;
    organizerLastName: string;
    fundName: string;
    target: number;
    transactionTime: Date;
    amount: number;
    backers: number;
  }

export const AAboutus = (): JSX.Element => {
    const router=useRouter();
    const handler=()=>{
        localStorage.removeItem("token");
      router.push("/login");
      return;
    }

    const [createdFunds, setCreatedFunds] = useState<Fund[]>([]);
    const [madeDonations, setMadeDonations] = useState<Donations[]>([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        const memberId = localStorage.getItem("memberId");
      
        if (memberId && token) {
          fetch(`http://localhost:8080/auth/member/${memberId}/donations`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => {
            setCreatedFunds(data.startedFunds);
            setMadeDonations(data.donationsMade);
            console.log("Funds Started", data.startedFunds);
            console.log("Donations Made", data.donationsMade);
          })
          .catch(err => console.error("Error fetching member data", err));
        }
      }, []);
      

  return (
    <>
    <Jwt_Validation/>
      <Pageheader />
      <div className={styles.page}>
      <div className={styles.head}>
        <FundTable funds={createdFunds} />
        </div>
        <div className={styles.head}>
        <DonationsTable donations={madeDonations}/>
        </div>
        <div className={styles.button1}>
          <Button id={"124"} className={styles.Logout} onClickAction={handler}> Logout</Button>
        </div>
        </div>
    </>
  );
};

export default AAboutus;
