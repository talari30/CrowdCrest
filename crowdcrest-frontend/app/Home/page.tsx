
import {Pageheader} from "@/modules/Pageheader";
import styles from "./Home.module.css";

import {Ocard} from "@/modules/Organization_card";



export const Hhome = () => {
        return (
                <>
          <div >
         
                <Pageheader />
              
         
          </div>
          <div className={styles.card}>
          <Ocard name_of_organization="Cancer fund"  name_of_organizer="Rahul" Target={200000} Amount_recieved={100000} Amount_left={100000} deadline="06/02/2025" members={10000}>
                Please Donate for cancer patients.
          </Ocard>
          </div>
          </>
        );
      };
export default Hhome;