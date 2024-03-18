import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./FormErrorMessage.module.scss";

export type FormErrorMessageProps = {
    className?: string;
    children: ReactNode;
};

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
    children,
    className,
}) => (
    <p className={classNames(styles["error-message"], className)}>{children}</p>
);
