'use client'
import { Heading } from "@/elements/Heading";
import styles from "./Newfund.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX, useState } from "react";
import Nnew from "@/modules/Newfund_card"
import { useRouter } from "next/navigation";

export const Nnewfund = (): JSX.Element => {
    const router = useRouter();
    const [fund_name, setfund_name] = useState("");
    const [target, setTarget] = useState("");
    const [deadline, setdeadline] = useState("");
    const [info, setinfo] = useState("");
    const [about, setabout] = useState("");
    const handler= async () => {
        try {   
            const token = localStorage.getItem("token");           
            const response = await fetch("http://localhost:8080/auth/newFund", {
              method: "POST",
              headers: { "Content-Type": "application/json" ,
              "Authorization": `Bearer ${token}`,
            },
              body: JSON.stringify({
                fundName: fund_name,
                target,
                deadline,
                info,
                about,
                organizerId: localStorage.getItem("memberId")

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
            alert("An error occurred during Login.");
          }
    };
  return (
    <>
      <Pageheader />
      <div >
        <Nnew
                  fund_name={fund_name}
                  target={Number(target)}
                  deadline={deadline}
                  info={info}
                  about={about} 
                  onADD={handler}
                  setfund_name={setfund_name} 
                  setTarget={setTarget}
                  setdeadline={setdeadline}
                  setinfo={setinfo}
                  setabout={setabout}
                  ></Nnew>
      </div>
    </>
  );
};

export default Nnewfund;
