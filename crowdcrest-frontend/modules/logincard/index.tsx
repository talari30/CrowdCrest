import {Heading} from "@/elements/Heading";
import {Text} from "@/elements/Text";
import {Input} from "@/elements/Input";
import {Button} from "@/elements/Button";
import {Hlink} from "@/elements/link";
import { JSX, ReactNode } from "react";
import styles from "@/modules/logincard/logincard.module.css";
interface LoginProps {
    placeholder_uid: string;
    placeholder_password: string;
    
  }
const Login = (props: LoginProps): JSX.Element => {
    const { placeholder_uid, placeholder_password } = props;
  
    return (
      <div className={styles.login}>
        <div className={styles.loginH}><Heading size={3} >Login</Heading></div>
        <div >
          <Text>Username</Text>
          <Input type="email" placeholder={placeholder_uid} id={"1"} name={"user"} />
          <Text>Password</Text>
          <Input type="password" placeholder={placeholder_password} id={"2"} name={"user2"} />
          <Text>Not a user? <Hlink linker="https://example.com">create</Hlink></Text>
        </div>
      </div>
    );
  };

  
  export default Login ;