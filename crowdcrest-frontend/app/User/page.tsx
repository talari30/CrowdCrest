'use client'
import { Heading } from "@/elements/Heading";
import {Button} from  "@/elements/Button";
import styles from "./User.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX, useEffect } from "react";
import { Jwt_Validation } from "@/Helper/JWTValidation";
import {useRouter} from "next/navigation";

export const AAboutus = (): JSX.Element => {
    const router=useRouter();
    const handler=()=>{
        localStorage.removeItem("token");
      router.push("/login");
      return;
    }
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
      <div className={styles.head}>
        <Heading>Fundrisers Started by you:</Heading>
        </div>
        <div className={styles.head}>
        <Heading>Donations you made:</Heading>
        </div>
        <div className={styles.button1}>
          <Button id={"124"} className={styles.Logout} onClickAction={handler}> Logout</Button>
        </div>
     
    </>
  );
};

export default AAboutus;
