import classNames from "classnames";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import styles from "./InputField.module.scss";

export interface InputFieldProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<Record<string, any>>;
    name: string;
    label?: string;
    className?: string;
}

export const InputFieldController: FC<InputFieldProps> = ({
    control,
    name,
    label,
    className,
}) => {
    return (
        <div className={classNames(styles.inputWrapper, className)}>
            {label && <label htmlFor={name}>{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <input
                        {...field}
                        className={classNames(styles.input, {
                            [styles.inputError]: fieldState.invalid,
                        })}
                    />
                )}
            />
        </div>
    );
};
