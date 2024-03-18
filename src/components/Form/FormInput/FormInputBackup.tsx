import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import {
    DeepMap,
    FieldError,
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import { FormErrorMessage } from "../FormErrorMessage";
import { Input, InputProps } from "../Input";
import styles from "./FormInput.module.scss";

export type FormInputProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    rules?: RegisterOptions;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, "name">;

export const FormInputBackup = <TFormValues extends Record<string, unknown>>({
    name,
    register,
    rules,
    errors,
    className,
    ...props
}: FormInputProps<TFormValues>): JSX.Element => {
    const errorMessages = errors && errors[name];
    const hasError = !!errorMessages;

    return (
        <div
            className={(styles["input-wrapper"], className)}
            aria-live="polite"
        >
            <Input
                name={name}
                aria-invalid={hasError}
                className={classNames(
                    {
                        [styles["input-error"]]: hasError,
                    },
                    className
                )}
                {...props}
                {...(register && register(name, rules))}
            />
            {hasError && (
                <ErrorMessage
                    errors={errors}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    name={name as any}
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
