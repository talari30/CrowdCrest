import {Text} from "@/elements/Text";
import {Hlink} from "@/elements/link";
import { JSX } from "react";
import styles from "./pageheader.module.css";

export const Pageheader = (): JSX.Element => {
    return (
      <div className={styles.Pageheader}>
        <div className={styles.left}>
          <Text>CrowdCrest</Text>
        </div>
        <div className={styles.right}>
        <Hlink linker="">Home</Hlink>
          <Hlink linker="http://localhost:3000/Aboutus">About Us</Hlink>
          <Hlink linker="http://localhost:3000/Contactus">Contact Us</Hlink>
          <Hlink linker="">User</Hlink>
        </div>
      </div>
    );
  };