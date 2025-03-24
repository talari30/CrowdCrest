import React, { Children } from "react";
import {Text} from "@/elements/Text";
import {JSX, ReactNode} from "react";
import styles from "@/elements/link/link.module.css";

interface Hlink{
    linker: string;
    children?: ReactNode;

}

export const Hlink=({ linker, children }: Hlink): JSX.Element=>{
    
    return (
        <a href={linker} className={styles.Hlink} target="_blank" rel="noopener noreferrer">
         {children}
        </a>
      );
    
};