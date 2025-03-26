import LoginProps from "@/modules/logincard";
import {Pageheader} from "@/modules/Pageheader";
import styles from "./contactus.module.css";
import {Text} from "@/elements/Text";
import phoneImg from "@/assets/Phoneimg.png";
import mailImg from "@/assets/Mailimg.png";
import Image from "next/image";



export const CContactus = () => {
        return (
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
        );
      };
export default CContactus;