'use client'
import {Pageheader} from "@/modules/Pageheader";
import styles from "./Home.module.css";
import {Ocard} from "@/modules/Organization_card";
import { useEffect, useState } from "react";
import axios from "axios";
import {Button} from "@/elements/Button"
import { useRouter } from "next/navigation";
import { Jwt_Validation } from "@/Helper/JWTValidation";

interface Donation {
      donationId: number;
      fundName: string;
      target: number;
      deadline: string;
      info: string;
      about:string;
      organizerName: string;
      backers: number;
      amountReceived: number;

    }


export const Hhome = () => {
     
      const router= useRouter();
      const [donations, setDonations] = useState<Donation[]>([]);
      useEffect(() => {
            
            axios.get("http://localhost:8080/auth/home")
              .then(response => {
                setDonations(response.data);
                console.log("API response", response.data);
              })
              .catch(error => {
                console.error("Error fetching donations", error);
              });
          }, []);
          const newPageopener=async ()=>{
            router.push("/Newfund");
          }

        return (
            <>
            <Jwt_Validation/>
            <div>
              <Pageheader />
              
            </div>
            <div className={styles.addnew}>
            <Button id="Add New" type="button" onClickAction={newPageopener}> + Add New</Button>
          </div>
          <div className={styles.card}>
          {donations.map((donation) => (
          <Ocard
            key={donation.donationId}
            donationId={donation.donationId}
            name_of_organization={donation.fundName}
            name_of_organizer={donation.organizerName}
            members={donation.backers}
            Target={donation.target}
            Amount_recieved={donation.amountReceived} // You can replace this with actual data if available
            Amount_left={donation.target-donation.amountReceived} // Or calculate based on received
            deadline={donation.deadline}
            info={donation.info}
            about={donation.about}

          >
               
          </Ocard>
          ))}
          </div>
          
          
          </>
        );
      };
export default Hhome;