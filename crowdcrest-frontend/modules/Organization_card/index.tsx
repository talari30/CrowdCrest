import {Text} from "@/elements/Text";
import {Heading} from "@/elements/Heading";
import { Children, JSX, ReactNode } from "react";
import styles from "./Organization_card.module.css"
interface Ocardpropy{
    name_of_organization: string;
    name_of_organizer: string;
    members:number;
    Target: number;
    deadline:string;
    children: ReactNode;
    
}
export const Ocard=(props: Ocardpropy): JSX.Element=>{
    const{name_of_organization,name_of_organizer,members,Target, deadline,children}=props;

    return (
        <div className={styles.Ocardbox}>
            <div >
                <div className={styles.Icardbox}>
                    <div>
                    <Heading>Organization:{name_of_organization}</Heading>
                    <Text>Organizer: {name_of_organizer}</Text>
                   </div>
                   <div className={styles.members}>
                   <Text>Target: {Target}</Text>
                   </div>
                   <div className={styles.members}>
                   <Text>Deadline: {deadline}</Text>
                   </div>
                   <div className={styles.members}>
                   <Text>Number of backers: {members}</Text>
                   </div>
                </div>
                <div>

                    

                </div>



            </div>
            <div className={styles.content}>
             <Text> {children} </Text> 
            </div>



        </div>




    );
}
export default Ocard;