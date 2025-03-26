import { redirect } from "next/navigation";

export default function Home() {
  // Immediately redirect to /login on the server side
  redirect("/Contactus");
}



