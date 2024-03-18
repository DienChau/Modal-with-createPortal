import { FC } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import classNames from "classnames";
import styles from "./InputField.module.scss";

interface InputFieldProps {
    name: string;
    hasError?: boolean;
    rules?: RegisterOptions;
    className?: string;
    type?: "text" | "checkbox" | "radio" | "textarea";
    placeholder?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
}

export const InputField: FC<InputFieldProps> = ({
    name,
    hasError,
    rules,
    type = "text",
    placeholder,
    register,
    className,
    ...props
}) => {
    const inputProps = {
        name,
        placeholder,
        "aria-invalid": hasError,
        className: classNames(
            styles.input,
            {
                [styles["input-error"]]: hasError,
            },
            className
        ),
        ...props,
    };
    const renderField = () => {
        switch (type) {
            case "textarea":
                return (
                    <textarea
                        {...inputProps}
                        {...(rules && register && register(name, rules))}
                    />
                );
            case "checkbox":
                return (
                    <input
                        {...inputProps}
                        {...(rules && register && register(name, rules))}
                    />
                );
            case "radio":
                return (
                    <input
                        {...inputProps}
                        {...(rules && register && register(name, rules))}
                    />
                );
            default:
                return (
                    <input
                        {...inputProps}
                        {...(rules && register && register(name, rules))}
                    />
                );
        }
    };

    return renderField();
};
