import LoginProps from "@/modules/logincard";
import {Pageheader} from "@/modules/Pageheader";
import styles from "./login.module.css";


export const login=  ()=>{
        return (
            <div className={styles.container}>
        <><div>
                        <Pageheader />
                </div><div className={styles.login1}>
                                <LoginProps placeholder_uid="username" placeholder_password="password" />
                        </div></>
                        </div>
        );

}
export default login;
