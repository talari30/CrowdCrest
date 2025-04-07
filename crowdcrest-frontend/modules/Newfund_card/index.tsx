import {Heading} from "@/elements/Heading";
import {Text} from "@/elements/Text";
import {Input} from "@/elements/Input";
import {Button} from "@/elements/Button";
import {Hlink} from "@/elements/link";
import { JSX, ReactNode } from "react";
import styles from "@/modules/Newfund_card/Newfund_card.module.css";
type NewProps = {
  fund_name: string;
  target:number;
  deadline:Date;
  info:string;
  about:string;
  
  setfund_name: (val: string) => void;
  setTarget: (val: number) => void;
  setdeadline: (val: string) => void;
  setinfo: (val: string) => void;
  setabout: (val: string) => void;
  
  onADD: () => void; 
};
const Nnew = ({
    fund_name,
    target,
    deadline,
    info,
    about,
    setfund_name,
    setTarget,
    setdeadline,
    setinfo,
    setabout,
  onADD
}
: NewProps)=> {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We just call the parent method
    onADD();
  };
  
    return (
      <form onSubmit={handleSubmit}  className={styles.login}>
        <div className={styles.loginH}><Heading size={3} >Login</Heading></div>
        <div >
            <div>
            <Text>Fundname:</Text>
            <Input type="text" placeholder={"Fund name"} id={"1"} name={"fund_name"} onChangeAction={(e) => setfund_name(e.target.value)}/>
          </div>
          <div>
          <Text>Target:</Text>
          <Input type="number" placeholder={"target"} id={"2"} name={"target"} onChangeAction={(e) =>  setTarget(Number(e.target.value))}/>
          </div>
          <div>
          <Text>deadline:</Text>
          <Input type="date" placeholder={"deadline"} id={"3"} name={"deadline"} onChangeAction={(e) => setdeadline(e.target.value)}/>
          </div>
          <div>
          <Text>info:</Text>
          <Input type="text" placeholder={"info"} id={"4"} name={"target"} onChangeAction={(e) => setinfo(e.target.value)}/>
          </div>
          <div>
          <Text>about:</Text>
          <Input type="text" placeholder={"about"} id={"4"} name={"about"} onChangeAction={(e) => setabout(e.target.value)}/>
          </div>
          <div className={styles.button_login}>
            <Button id="Login" type="submit"> Start</Button>
            </div>
        
        </div>
      </form>
    );
  };

  
  export default Nnew ;