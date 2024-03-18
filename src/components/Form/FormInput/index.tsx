/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import classNames from "classnames";
import styles from "./FormInput.module.scss";
import { UseFormRegister, RegisterOptions, FieldErrors } from "react-hook-form";
import { InputField } from "../InputField";
import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "../FormErrorMessage";

interface FormInputProps {
    name: string;
    label?: string;
    type?: "text" | "checkbox" | "radio" | "textarea";
    placeholder?: string;
    errors?: FieldErrors<any>;
    rules?: RegisterOptions;
    register?: UseFormRegister<any>;
    className?: string;
}

export const FormInput: FC<FormInputProps> = ({
    name,
    label,
    errors,
    type = "text",
    placeholder,
    rules,
    register,
    className,
    ...props
}) => {
    const errorMessages = errors && errors[name];
    const hasError = !!errorMessages;

    return (
        <div
            className={classNames(styles["input-wrapper"], className)}
            aria-live="polite"
        >
            <label htmlFor={name}>{label}</label>
            <InputField
                name={name}
                type={type}
                placeholder={placeholder}
                hasError={hasError}
                className={classNames(
                    {
                        [styles["input-error"]]: hasError,
                    },
                    className
                )}
                {...props}
                rules={rules}
                register={register}
            />
            {hasError && (
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({ message }) => (
                        <FormErrorMessage className="mt-1">
                            {message}
                        </FormErrorMessage>
                    )}
                />
            )}
        </div>
    );
};
