import { FC } from "react";
import { useForm } from "react-hook-form";
import { InputFieldController } from "../../../../components/Form/InputField/InputController";

interface FormData {
    firstName: string;
    lastName: string;
}

const MyForm: FC = () => {
    const { control, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputFieldController
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                placeholder="First Name"
            />
            <InputFieldController
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                placeholder="Last Name"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
