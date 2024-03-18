import { FC } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import classNames from "classnames";
import styles from "./InputField.module.scss";

interface InputFieldProps {
    name: string;
    hasError?: boolean;
    rules?: RegisterOptions;
    className?: string;
    type?: "text" | "checkbox" | "radio";
    placeholder?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
}

export const InputField: FC<InputFieldProps> = ({
    name,
    hasError,
    rules,
    type,
    placeholder,
    register,
    className,
    ...props
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            aria-invalid={hasError}
            className={classNames(
                styles.input,
                {
                    [styles["input-error"]]: hasError,
                },
                className
            )}
            {...props}
            {...(rules && register && register(name, rules))}
        />
    );
};
