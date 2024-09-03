"use client";

import Register from "../interfaces/register";
import registerSchema from "@/schemas/register";
import useFormData from "@/utilites/useFormData";

import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import Link from "next/link";

const regiterPage = () => {
    const { register,
        errors,
        onSubmitForm,
        PasswordVisible,
        setPasswordVisible,
        statusCode } = useFormData<Register>(registerSchema);

    return (
        <section className="h-screen w-full flex justify-start flex-col items-center">

            <div className="w-full relative flex justify-between items-center px-3 font-bold text-2xl text-white top-0 h-9 border-b border-zinc-900 bg-zinc-950">
                <p>Cinext</p>
                <p>Cinext</p>
            </div>

            <form onSubmit={onSubmitForm} className="border border-zinc-950 w-64 mt-3 p-3 rounded-3xl">
                <h1 className="w-full text-white text-2xl font-bold">Register</h1>

                <div className="w-full mt-4 flex flex-col">
                    <input
                        type="text"
                        placeholder="Username"
                        className="text-sm placeholder:text-zinc-600 outline-none text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 h-6 bg-zinc-950"
                        {...register("username")}
                    />
                    <p className="text-red-600 text-[10px] mt-[2px]">{errors?.username?.message}</p>
                </div>

                <div className="w-full mt-1 flex flex-col">
                    <input
                        type="text"
                        placeholder="Email address"
                        className="text-sm placeholder:text-zinc-600 text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 outline-none h-6 bg-zinc-950"
                        {...register("email")}
                    />
                    <p className="text-red-600 text-[10px] mt-[2px]">{statusCode === 409 ? "Email already registerd" : errors.email?.message}</p>
                </div>

                <div className="w-full mt-1 flex relative flex-col">
                    <input
                        type={!PasswordVisible.password ? "password" : "text"}
                        placeholder="Password"
                        className="text-sm placeholder:text-zinc-600 text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 outline-none h-6 bg-zinc-950"
                        {...register("password")}
                    />
                    <span 
                    onClick={() => setPasswordVisible({ ...PasswordVisible, password: !PasswordVisible.password })}
                    className="absolute top-1 text-zinc-700 text-sm right-2">
                        {!PasswordVisible.password ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                    <p className="text-red-600 text-[10px] mt-[2px]">{errors.password?.message}</p>
                </div>

                <div className="w-full mt-1 flex relative flex-col">
                    <input
                        type={!PasswordVisible.confirmPassword ? "password" : "text"}
                        placeholder="Confirm password"
                        className="text-sm placeholder:text-zinc-600 text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 outline-none h-6 bg-zinc-950"
                        {...register("confirmPassword")}
                    />
                    <span 
                    onClick={() => setPasswordVisible({ ...PasswordVisible, confirmPassword: !PasswordVisible.confirmPassword })}
                    className="absolute top-1 text-zinc-700 text-sm right-2">
                        {!PasswordVisible.confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                    <p className="text-red-600 text-[10px] mt-[2px]">{errors.confirmPassword?.message}</p>
                </div>

                <button className="w-full h-7 font-bold rounded-3xl mt-3 bg-zinc-950 font-bold text-center text-white border-zinc-900 hover:bg-opacity-50 hover:border">
                    Register
                </button>
                <p className="text-center text-zinc-600 text-[10px] mt-1">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>

            </form>
        </section>
    )
}

export default regiterPage;