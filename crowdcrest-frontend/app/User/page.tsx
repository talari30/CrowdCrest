'use client'
import { Heading } from "@/elements/Heading";
import {Button} from  "@/elements/Button";
import styles from "./User.module.css";
import { Text } from "@/elements/Text";
import { Pageheader } from "@/modules/Pageheader";
import { JSX } from "react";
import { Jwt_Validation } from "@/Helper/JWTValidation";
import {useRouter} from "next/navigation";

export const AAboutus = (): JSX.Element => {
    const router=useRouter();
    const handler=()=>{
        localStorage.removeItem("token");
      router.push("/login");
      return;
    }

  return (
    <>
    <Jwt_Validation/>
      <Pageheader />
      <div className={styles.head}>
        <Heading>Information</Heading>
        </div>
        <div className={styles.button1}>
          <Button id={"124"} className={styles.Logout} onClickAction={handler}> Logout</Button>
        </div>
     
    </>
  );
};

export default AAboutus;
