'use client'
import {Text} from "@/elements/Text";
import {Heading} from "@/elements/Heading";
import {Button} from "@/elements/Button";
import { Children, JSX, ReactNode } from "react";
import styles from "./Organization_card.module.css"
import { useRouter } from "next/navigation";

interface Ocardpropy{
    donationId: number;
    name_of_organization: string;
    name_of_organizer: string;
    members:number;
    Target: number;
    Amount_recieved:number;
    Amount_left:number;
    deadline:string;
    info:string;
    about:string;
    
    
}
export const Ocard=(props: Ocardpropy): JSX.Element=>{
    const{donationId,name_of_organization,name_of_organizer,members,Target,Amount_recieved,Amount_left, deadline,info, about}=props;
    const router = useRouter();

    const handleViewFund = () => {
        router.push(`/Fund?donationId=${donationId}&fundName=${encodeURIComponent(name_of_organization)}&organizer=${encodeURIComponent(name_of_organizer)}&target=${Target}&about=${encodeURIComponent(about)}&deadline=${deadline}`);
    };
    return (
        <div className={styles.Ocardbox}>
            <div >
                <div className={styles.Icardbox}>
                    <div>
                    <Heading>{name_of_organization}</Heading>
                    <Text>Organizer: {name_of_organizer}</Text>
                   </div>
                   <div className={styles.members}>
                   <Text>Target: {Target}</Text>
                   <Text>Amount recieved: {Amount_recieved}</Text>
                   </div>
                   <div className={styles.members}>
                   <Text>Deadline: {deadline}</Text>
                   <Text>Amount left: {Amount_left}</Text>
                   </div>
                   <div className={styles.members}>
                   <Text>Number of backers: {members}</Text>
                   
                   </div>
                </div>
                <div>

                    

                </div>



            </div>
            <div className={styles.content}>
                <div>
             <Text> {info} </Text> 
             </div>
             <div className={styles.button} >
                   <Button id="donate" type="submit" onClickAction={handleViewFund}> Help Us!</Button>
                   </ div>
            </div>



        </div>




    );
}
export default Ocard;