import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useFormData = <T extends FieldValues>(schema: z.ZodType<T>, url: string) => {
    const [statusCode, setStatusCode] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
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
        mode: "onSubmit",
    });

    const onSubmitForm = handleSubmit(async (data) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();

            if (response.ok) {
                localStorage.setItem("token", responseData.token);
                router.push("/");
            }
            
            setLoading(false);
            setStatusCode(response.status);
        }
        catch (error) {
            setLoading(false);
            console.error(error);
        }
    });

    return { register, errors, onSubmitForm, PasswordVisible, setPasswordVisible, statusCode, loading };
};

export default useFormData;