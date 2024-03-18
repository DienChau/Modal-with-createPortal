import { FC, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email";

export type InputProps = {
    id: string;
    name: string;
    label: string;
    type?: InputType;
    size?: InputSize;
    className?: string;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size"
>;

const sizeMap: { [key in InputSize]: string } = {
    medium: styles.medium,
    large: styles.large,
};

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            label,
            type = "text",
            size = "medium",
            className = "",
            placeholder,
            ...props
        },
        ref
    ) => {
        return (
            <input
                id={id}
                ref={ref}
                name={name}
                type={type}
                aria-label={label}
                placeholder={placeholder}
                className={classNames(styles.input, sizeMap[size], className)}
                {...props}
            />
        );
    }
);
