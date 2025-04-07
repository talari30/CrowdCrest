'use client'
import Login from "@/modules/logincard";
import {Pageheader} from "@/modules/Pageheader";
import styles from "./login.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export const login=  ()=>{
        const router = useRouter();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handleSignup = async () => {
                try {
                  const response = await fetch("http://localhost:8080/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email,
                      password,
                    }),
                  });
              
                  if (response.ok) {
                        const data = await response.json();
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("memberId", data.memberId);
                        alert("Login Successful");
                        router.push("/Home");
                      }
                       else {
                    const errorMsg = await response.text();
                    alert(`Login failed: ${errorMsg}`);
                  }
                } catch (err) {
                  console.error("Error:", err);
                  alert("An error occurred during Login.");
                }
              };
              
        return (
            <div className={styles.container}>
        <><div>
                        <Pageheader />
                </div><div className={styles.login1}>
                                <Login 
                                 email={email}
                                 password={password}
                                 setEmail={setEmail}
                                 setPassword={setPassword}
                                 onLogin={handleSignup}
                                />
                        </div></>
                        </div>
        );

}
export default login;
