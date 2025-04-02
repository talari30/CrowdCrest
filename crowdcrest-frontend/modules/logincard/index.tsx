import {Heading} from "@/elements/Heading";
import {Text} from "@/elements/Text";
import {Input} from "@/elements/Input";
import {Button} from "@/elements/Button";
import {Hlink} from "@/elements/link";
import { JSX, ReactNode } from "react";
import styles from "@/modules/logincard/logincard.module.css";
type LoginProps = {
  email: string;
  password: string;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  onLogin: () => void; 
};
const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  onLogin
}
: LoginProps)=> {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We just call the parent method
    onLogin();
  };
  
    return (
      <form onSubmit={handleSubmit}  className={styles.login}>
        <div className={styles.loginH}><Heading size={3} >Login</Heading></div>
        <div >
          <Text>Username</Text>
          <Input type="email" placeholder={"email"} id={"1"} name={"user"} onChangeAction={(e) => setEmail(e.target.value)}/>
          <Text>Password</Text>
          <Input type="password" placeholder={"password"} id={"2"} name={"user2"} onChangeAction={(e) => setPassword(e.target.value)}/>
          <div className={styles.button_login}>
            <Button id="Login" type="submit"> Login</Button>
            </div>
          <Text>Not a user? <Hlink linker="http://localhost:3000/Signup">create</Hlink></Text>
        </div>
      </form>
    );
  };

  
  export default Login ;