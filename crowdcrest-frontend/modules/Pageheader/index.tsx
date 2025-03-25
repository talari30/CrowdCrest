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
          <Hlink linker="">Aboutus</Hlink>
          <Hlink linker="">Contactus</Hlink>
          <Hlink linker="">User</Hlink>
        </div>
      </div>
    );
  };