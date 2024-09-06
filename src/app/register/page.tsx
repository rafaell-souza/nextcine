"use client";

import Register from "../interfaces/register";
import registerSchema from "@/schemas/register";
import useFormData from "@/utilites/useFormData";

import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { LiaSpinnerSolid } from "react-icons/lia";

import Link from "next/link";

const url = "http://localhost:3000/api/register";

const regiterPage = () => {
    const { register,
        errors,
        onSubmitForm,
        PasswordVisible,
        setPasswordVisible,
        loading,
        statusCode } = useFormData<Register>(registerSchema, url);

    return (
        <>
            <section className="h-screen w-full flex justify-center flex-col items-center">
                <form onSubmit={onSubmitForm} className="w-64 p-2 rounded-3xl">
                    <h1 className="w-full text-white px-1 text-2xl font-bold">Sign up</h1>

                    <div className="w-full mt-4 flex flex-col">
                        <input
                            type="text"
                            placeholder="Username"
                            className={`text-sm px-1 placeholder:text-zinc-600 outline-none text-white placeholder:text-[10px] bg-opacity-50 border-b ${errors.username ? "placeholder:text-red-800 border-red-800" : "border-zinc-800"} h-6 bg-zinc-950`}
                            {...register("username")}
                        />
                        <p className="text-red-600 text-[10px] mt-[2px] flex items-center gap-x-1">
                            {errors?.username?.message && (<><MdError /> {errors.username.message}</>)}
                        </p>
                    </div>

                    <div className="w-full mt-1 flex flex-col">
                        <input
                            type="text"
                            placeholder="Email"
                            className={`text-sm px-1 placeholder:text-zinc-600 text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 outline-none h-6 bg-zinc-950 ${errors.username || statusCode === 409 ? "placeholder:text-red-800 border-red-800" : "border-zinc-800"}`}
                            {...register("email")}
                        />
                        <p className="text-red-600 text-[10px] mt-[2px] gap-x-1 flex items-center">
                            {
                                statusCode === 409 ? (
                                    <>
                                        <MdError /> Email already in use.
                                    </>
                                ) : (
                                    errors?.email?.message && (<><MdError /> {errors.email.message}</>)
                                )
                            }
                        </p>
                    </div>

                    <div className="w-full mt-1 flex relative flex-col">
                        <input
                            type={!PasswordVisible.password ? "password" : "text"}
                            placeholder="Password"
                            className={`text-sm pl-1 pr-6 placeholder:text-zinc-600 text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 outline-none h-6 bg-zinc-950 ${errors.username ? "placeholder:text-red-800 border-red-800" : "border-zinc-800"}`}
                            {...register("password")}
                        />
                        <span
                            onClick={() => setPasswordVisible({ ...PasswordVisible, password: !PasswordVisible.password })}
                            className="absolute top-1 text-zinc-700 text-sm right-2">
                            {!PasswordVisible.password ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                        <p className="text-red-600 text-[10px] mt-[2px] flex items-center gap-x-1">
                            {errors?.password?.message && (<><MdError /> {errors.password.message}</>)}
                        </p>
                    </div>

                    <div className="w-full mt-1 flex relative flex-col">
                        <input
                            type={!PasswordVisible.confirmPassword ? "password" : "text"}
                            placeholder="Confirm password"
                            className={`text-sm pl-1 pr-6 placeholder:text-zinc-600 text-white placeholder:text-[10px] bg-opacity-50 border-b border-zinc-800 outline-none h-6 bg-zinc-950 ${errors.username ? "placeholder:text-red-800 border-red-800" : "border-zinc-800"}`}
                            {...register("confirmPassword")}
                        />
                        <span
                            onClick={() => setPasswordVisible({ ...PasswordVisible, confirmPassword: !PasswordVisible.confirmPassword })}
                            className="absolute top-1 text-zinc-700 text-sm right-2">
                            {!PasswordVisible.confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                        <p className="text-red-600 text-[10px] mt-[2px] flex items-center gap-x-1">
                            {errors?.confirmPassword?.message && (<><MdError /> {errors.confirmPassword?.message}</>)}
                        </p>
                    </div>

                    <button className="w-full h-7 font-bold rounded-3xl mt-3 bg-zinc-950 font-bold text-center text-white border-zinc-900 hover:bg-opacity-50 flex justify-center items-center hover:border">
                        {
                            loading ? (
                                <span className="animate-spin"><LiaSpinnerSolid /></span>
                            ) : "SIGN UP"
                        }
                    </button>
                    <p className="text-center text-zinc-600 text-[10px] mt-1">Already have an account? <Link href="/login" className="text-blue-500">Sign in</Link></p>

                </form>
            </section>
        </>
    )
}

export default regiterPage;