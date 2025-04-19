'use client'
import Signup from "@/modules/Signupcard";
import {Pageheader} from "@/modules/Pageheader";
import styles from "./Signup.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import{Jwt_Validation_signer} from "@/Helper/JWTValidation";

export const SSignup=  ()=>{
        const router = useRouter();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPass, setConfirmPass] = useState("");

        const handleSignup = async () => {
        if (password !== confirmPass) {
        alert("Passwords do not match");
        return;
        }
        try {   
                
                const response = await fetch("http://localhost:8080/auth/signup", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    firstName: "John",
                    lastName: "Doe",
                    age: 30,
                    address: "123 Main Street",
                    phoneNumber: "555-1234",
                    email,
                    password,
                  }),
                });
          
                if (response.ok) {
                 
                  const data = await response.json();
                  localStorage.setItem("token", data.token);
                  localStorage.setItem("memberId", data.memberId);
                  alert("Account created successfully!");
                  router.push("/Home");
                } else {
                  const errorMsg = await response.text();
                  alert(`Signup failed: ${errorMsg}`);
                }
              } catch (err) {
                console.error("Error:", err);
                alert("An error occurred during signup.");
              }
            };
          
        return (
            <div className={styles.container}>
              <Jwt_Validation_signer/>
        <><div>
                        <Pageheader />
                </div><div className={styles.SSignup}>
                                <Signup 
                                email={email}
                                password={password}
                                confirmPassword={confirmPass}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setConfirmPassword={setConfirmPass}
                                onSignup={handleSignup}
                                />
                        </div></>
                        </div>
        );

}
export default SSignup;