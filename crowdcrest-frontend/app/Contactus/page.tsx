'use client'
import LoginProps from "@/modules/logincard";
import {Pageheader} from "@/modules/Pageheader";
import styles from "./contactus.module.css";
import {Text} from "@/elements/Text";
import phoneImg from "@/assets/Phoneimg.png";
import mailImg from "@/assets/Mailimg.png";
import Image from "next/image";
import {Ocard} from "@/modules/Organization_card";
import { useEffect } from "react";
import {useRouter} from "next/navigation";
import { Jwt_Validation } from "@/Helper/JWTValidation";


export const CContactus = () => {
  
        return (
                <>
                <Jwt_Validation/>
          <div >
         
              <div>
                <Pageheader />
              </div>
              <div className={styles.info}>
                <div className={styles.infoRow}>
                  <Image
                    src={phoneImg.src}
                    alt="Phone"
                    width={120}
                    height={120}
                    priority
                  />
                  <div>
                  <Text> Ph No. - (XXX)- XXX XXXX</Text>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <Image
                    src={mailImg.src}
                    alt="Mail"
                    width={120}
                    height={120}
                    priority
                  />
                  
                  <Text> Email: XXXXX@gmail.com</Text>
                </div>
              </div>
         
          </div>
          
          </>
        );
      };
export default CContactus;