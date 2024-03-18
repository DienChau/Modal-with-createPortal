/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, SelectHTMLAttributes } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import styles from "./SelectInput.module.scss";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    register: UseFormRegister<any>;
    name: string;
    errors?: Record<string, any>;
    rules?: RegisterOptions;
}

export const FormSelect: FC<FormSelectProps> = ({
    label,
    options,
    register,
    name,
    rules,
    className,
    errors,
    ...rest
}) => {
    return (
        <div className={classNames(styles["formSelect"], className)}>
            <label htmlFor={name} className={styles["form-label"]}>
                {label}
            </label>
            <select {...rest} {...register(name, rules)}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && errors[name] && (
                <span className={styles["error-message"]}>
                    {errors[name].message}
                </span>
            )}
        </div>
    );
};
