import Signup from "@/modules/Signupcard";
import {Pageheader} from "@/modules/Pageheader";
import styles from "./Signup.module.css";


interface signup{

}

export const SSignup=  ()=>{
        return (
            <div className={styles.container}>
        <><div>
                        <Pageheader />
                </div><div className={styles.SSignup}>
                                <Signup placeholder_uid="new username" placeholder_password="new password" />
                        </div></>
                        </div>
        );

}
export default SSignup;