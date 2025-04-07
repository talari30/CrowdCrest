import styles from "./Input.module.css";

import { RefObject } from "react";
import { JSX, ReactNode } from "react";

interface IInputProps {
    id: string;
    className?: string;
    name: string;
    ref?: RefObject<HTMLInputElement>;
    type?: "text" | "number" | "email" | "password" | "checkbox"| "date";
    value?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    onChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  import React, { forwardRef } from "react";

  export const Input = forwardRef<HTMLInputElement, IInputProps>(
    (props, ref): JSX.Element => {
      const {
        id,
        className,
        name = "",
        type = "text",
        value,
        placeholder = "",
        required = false,
        readOnly = false,
        onChangeAction,
      } = props;
  
      return (
        <div className={className}>
          <input
            id={id}
            name={name}
            className={styles.input}
            ref={ref}
            type={type}
            value={value}
            placeholder={type !== "checkbox" ? placeholder : ""}
            required={required}
            readOnly={readOnly}
            onChange={onChangeAction}
          />
          {type === "checkbox" && <label htmlFor={id}>{placeholder}</label>}
        </div>
      );
    },
  );