import {Heading} from "@/elements/Heading";
import {Text} from "@/elements/Text";
import {Input} from "@/elements/Input";
import {Button} from "@/elements/Button";
import {Hlink} from "@/elements/link";
import { JSX, ReactNode } from "react";
import styles from "@/modules/Signupcard/Signupcard.module.css";
import React from "react";

type SignupProps = {
  email: string;
  password: string;
  confirmPassword: string;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setConfirmPassword: (val: string) => void;
  onSignup: () => void;  // Called when "Create Account" is clicked
};
const Signup = ({
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSignup,
}: SignupProps)=>
 {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We just call the parent method
    onSignup();
  };

  
    return (
      <form onSubmit={handleSubmit} className={styles.signup}>
        <div className={styles.loginH}><Heading size={3} >Sign up</Heading></div>
        <div >
          <Text>Username</Text>
          <Input type="email" placeholder={"Email"} id={"1"} name={"user"} onChangeAction={(e) => setEmail(e.target.value)}/>
          <Text>Password</Text>
          <Input type="password" placeholder={"Password"} id={"2"} name={"user2"} onChangeAction={(e) => setPassword(e.target.value)}/>
          <Text>Retype Password</Text>
          <Input type="password" placeholder={"re-type password"} id={"2"} name={"user3"}  onChangeAction={(e) => setConfirmPassword(e.target.value)}/>
          
        </div>
        <div className={styles.button_createaccount}>
            <Button id="Signup" type="submit"> Create account</Button>
            </div>
      </form>
    );
  };
  

  
  export default Signup ;