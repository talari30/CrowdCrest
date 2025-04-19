'use client'
import { Heading } from "@/elements/Heading";
import { Input } from "@/elements/Input";
import { Button } from "@/elements/Button";
import styles from "./Donation.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX, useState } from "react";
import Nnew from "@/modules/Newfund_card";
import Bbank from "@/modules/bankdet_card";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const Donation = (): JSX.Element => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [Donation_target, setDonation_target] = useState("");
    const [Bank_name, setBank_name] = useState("");
    const [Routing_Number, setRouting_Number] = useState("");
    const [Account_Number, setAccount_Number] = useState("");
    const [Billing_Address, setBilling_Address] = useState("");
    const donationId = searchParams.get("donationId") || "";
    const handler= async (e: React.FormEvent) => {
      e.preventDefault();
      alert(Number(localStorage.getItem("memberId")));
        try {   
            
            const token = localStorage.getItem("token");           
            const response = await fetch("http://localhost:8080/auth/transactions", {
              method: "POST",
              headers: { "Content-Type": "application/json" ,
              "Authorization": `Bearer ${token}`,
            },
              body: JSON.stringify({
                amount: Number(Donation_target),
                member_id: Number(localStorage.getItem("memberId")),
                transaction_time:new Date().toISOString(),
                donation_id: donationId,
                bankName: Bank_name,
                routingNumber: Routing_Number,
                accountNumber: Account_Number,
                billingAddress: Billing_Address

              }),
            });
      
            if (response.ok) {
              alert("Registered Successful");
              router.push("/Home");
            } else {
              const errorMsg = await response.text();
              alert(`Registration failed: ${errorMsg}`);
            }
          } catch (err) {
            console.error("Error:", err);
            alert("An error occurred during registration.");
          }
    };
  return (
    <form onSubmit={handler} >
      <Pageheader />
      <div className={styles.amount}>
        <Text>Enter the amount:</Text>
        <Input id={"123"} name={"donationamount"} onChangeAction={(e) => setDonation_target(e.target.value)}/>
      </div>
      <div >
        <Bbank    
                  Bank_name={Bank_name}
                  Routing_Number={Routing_Number}
                  Account_Number={Account_Number}
                  Billing_Address={Billing_Address}
                  setBank_name={setBank_name}
                  setRouting_Number={setRouting_Number}
                  setAccount_Number={setAccount_Number}
                  setBilling_Address={setBilling_Address}
                  ></Bbank>
      </div>
      <div className={styles.button1}>
            <Button id="Login" type="submit" > Donate</Button>
        </div>
    </form>
  );
};

export default Donation;
