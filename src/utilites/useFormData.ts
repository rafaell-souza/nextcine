import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useFormData = <T extends FieldValues>(schema: z.ZodType<T>) => {
    const [statusCode, setStatusCode] = useState<number>(0);
    const [PasswordVisible, setPasswordVisible] = useState({
        password: false,
        confirmPassword: false,
    });

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(schema),
        mode: "onTouched",
    });

    const onSubmitForm = handleSubmit(async (data) => {
        try {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            
            const responseData = await response.json();
            localStorage.setItem("token", responseData.token);
            setStatusCode(response.status);
            router.push("/");
        }
        catch (error) {
            error instanceof Response ? console.log(error.status, error.statusText) : console.error(error);
        }
    });
    return { register, errors, onSubmitForm, PasswordVisible, setPasswordVisible, statusCode };
};

export default useFormData;