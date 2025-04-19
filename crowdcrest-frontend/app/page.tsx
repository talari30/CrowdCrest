'use client';
import { redirect } from "next/navigation";
import{Jwt_Validation_homer} from "@/Helper/JWTValidation"

export default function Home() {
  // Immediately redirect to /login on the server side
  return <Jwt_Validation_homer />;
}



