'use client'
import {  useEffect } from "react";
import {useRouter} from "next/navigation";

export const Jwt_Validation=() => {
    const router=useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("http://localhost:8080/auth/validate", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
      
      } else {
        localStorage.removeItem("token");
        router.push("/login"); 
        return;
      }
    })
    .catch(() => {
      localStorage.removeItem("token");
      router.push("/login");
      return;
    });

  }, []);
  return null;
};
export const Jwt_Validation_homer=() => {
    const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("http://localhost:8080/auth/validate", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
        router.push("/Home"); 
      } else {
        localStorage.removeItem("token");
        router.push("/login"); 
      }
    })
    .catch(() => {
      localStorage.removeItem("token");
      router.push("/login");
    });

  }, []);
  return null;
};

export const Jwt_Validation_signer=() => {
    const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/auth/validate", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
        router.push("/Home"); 
      } 
    })
    

  }, []);
  return null;
};
