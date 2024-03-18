import { FC } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "../../../../components/Form/FormInput";
import { FormSelect } from "../../../../components/Form/SelectInput";
import styles from "./LoginForm.module.scss";

export type RegistrationFormFields = {
    firstName: string;
    lastName: string;
    countryName: string;
};

interface CountryOption {
    value: string;
    label: string;
}

export const RegistrationForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegistrationFormFields>();

    const onSubmit = handleSubmit((data) => {
        console.log("submitting...", data);
        reset();
    });

    const countries: CountryOption[] = [
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
    ];

    return (
        <form onSubmit={onSubmit}>
            <FormInput
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                className="mb-2"
                register={register}
                rules={{ required: "You must enter your first name." }}
                errors={errors}
            />

            <FormInput
                type="radio"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                className=""
                register={register}
                rules={{ required: "You must enter your last name." }}
                errors={errors}
            />

            <FormSelect
                id="countrySelect"
                name="countryName"
                label="Select Country"
                options={countries}
                register={register}
                className=""
                rules={{ required: "Please select a country" }}
                errors={errors}
            />

            <button className={styles.submitButton} type="submit">
                Submit
            </button>
        </form>
    );
};
