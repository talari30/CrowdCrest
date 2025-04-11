import {Heading} from "@/elements/Heading";
import {Text} from "@/elements/Text";
import {Input} from "@/elements/Input";
import {Button} from "@/elements/Button";
import {Hlink} from "@/elements/link";
import { JSX, ReactNode } from "react";
import styles from "@/modules/bankdet_card/bankdet_card.module.css";
type BankProps = {
  Bank_name: string;
  Routing_Number:number;
  Account_Number:number;
  Billing_Address:string;
  
  setBank_name: (val: string) => void;
  setRouting_Number: (val: number) => void;
  setAccount_Number: (val: number) => void;
  setBilling_Address: (val: string) => void;
  
  onADD: () => void; 
};
const BBank = ({
    Bank_name,
    Routing_Number,
    Account_Number,
    Billing_Address,
    setBank_name,
    setRouting_Number,
    setAccount_Number,
    setBilling_Address,
  onADD
}
: BankProps)=> {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We just call the parent method
    onADD();
  };
  
    return (
      <form onSubmit={handleSubmit}  className={styles.Bank}>
        <div className={styles.fundH}><Heading size={3} >Account details</Heading></div>
        <div >
            <div>
            <Text>Bank Name:</Text>
            <Input type="text" placeholder={"Bank name"} id={"1"} name={"Bank_name"} onChangeAction={(e) => setBank_name(e.target.value)}/>
          </div>
          <div>
          <Text>Routing Number:</Text>
          <Input type="number" placeholder={"Routing Number"} id={"2"} name={"Routing_Number"} onChangeAction={(e) =>  setRouting_Number(Number(e.target.value))}/>
          </div>
          <div>
          <Text>Account Number:</Text>
          <Input type="number" placeholder={"Account Number Number"} id={"2"} name={"Account_Number"} onChangeAction={(e) =>  setAccount_Number(Number(e.target.value))}/>
          </div>
          <div>
          <Text>Billing Address:</Text>
          <Input type="text" inputClassName={styles.customInput} placeholder={"Billing_Address"} id={"4"} name={"Billing_Address"} onChangeAction={(e) => setBilling_Address(e.target.value)}/>
          </div>
        
        </div>
      </form>
    );
  };

  
  export default BBank ;