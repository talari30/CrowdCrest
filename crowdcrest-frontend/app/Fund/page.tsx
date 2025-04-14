'use client'

import { useSearchParams } from "next/navigation";
import { Pageheader } from "@/modules/Pageheader";
import styles from "./Fund.module.css";
import { Button } from "@/elements/Button";
import { Text } from "@/elements/Text";
import { Heading } from "@/elements/Heading";

export default function Ffund() {
  const searchParams = useSearchParams();

  const fundName = searchParams.get("fundName") || "";
  const organizerName = searchParams.get("organizer") || "";
  const target = searchParams.get("target") || "0";
  const about = searchParams.get("about") || "";
  const deadline = searchParams.get("deadline") || "";
  const backers = searchParams.get("backers") || "";
  const Amount_recieved = searchParams.get("Amount_recieved") || "";

  return (
    <div >
      <Pageheader />
      <div className={styles.container}>
        <Heading>{fundName}</Heading>
        <Text><strong>Organizer:</strong> {organizerName}</Text>

        <div className={styles.funder}>
          <div className={styles.about}>
            <Text><strong>About:</strong> {about}</Text>
          </div>
          <div>
            <Text><strong>Target:</strong> {target}</Text>
            <Text><strong>Backers:</strong> {backers}</Text>
            <Text><strong>Deadline:</strong> {deadline}</Text>
            <Text><strong>Amount Received:</strong> {Amount_recieved}</Text>
            <Text><strong>Amount Left:</strong> {target}</Text>
          </div>
        </div>

        <div className={styles.button}>
          <Button id="helpus" type="button">Help Us!</Button>
        </div>
      </div>
    </div>
  );
}
