'use client'
import { Heading } from "@/elements/Heading";
import { Button } from "@/elements/Button";
import styles from "./Newfund.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX, useState } from "react";
import Nnew from "@/modules/Newfund_card";
import Bbank from "@/modules/bankdet_card";
import { useRouter } from "next/navigation";

export const Nnewfund = (): JSX.Element => {
    const router = useRouter();
    const [fund_name, setfund_name] = useState("");
    const [target, setTarget] = useState("");
    const [deadline, setdeadline] = useState("");
    const [info, setinfo] = useState("");
    const [about, setabout] = useState("");
    const [Bank_name, setBank_name] = useState("");
    const [Routing_Number, setRouting_Number] = useState("");
    const [Account_Number, setAccount_Number] = useState("");
    const [Billing_Address, setBilling_Address] = useState("");
    const handler= async (e: React.FormEvent) => {
      e.preventDefault();
      alert(fund_name  );
        try {   
            
            const token = localStorage.getItem("token");           
            const response = await fetch("http://localhost:8080/auth/newFund", {
              method: "POST",
              headers: { "Content-Type": "application/json" ,
              "Authorization": `Bearer ${token}`,
            },
              body: JSON.stringify({
                fundName: fund_name,
                target: Number(target),
                deadline, // assuming it's in yyyy-MM-dd format
                info,
                about,
                organizerId: Number(localStorage.getItem("memberId")),
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
      <div >
        <Nnew
                  fund_name={fund_name}
                  target={Number(target)}
                  deadline={deadline}
                  info={info}
                  about={about} 
                  setfund_name={setfund_name} 
                  setTarget={setTarget}
                  setdeadline={setdeadline}
                  setinfo={setinfo}
                  setabout={setabout}
                  ></Nnew>
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
      <div className={styles.button_start}>
            <Button id="Login" type="submit"> Start</Button>
        </div>
    </form>
  );
};

export default Nnewfund;
