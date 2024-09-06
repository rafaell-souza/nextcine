"use client";

import useFormData from "@/utilites/useFormData";
import loginSchema from "@/schemas/login";
import Link from "next/link";

import { MdError } from "react-icons/md";
import { LiaSpinnerSolid } from "react-icons/lia";

const url = "http://localhost:3000/api/login";

type Login = { email: string, password: string };

const LoginPage = () => {
    const { register,
        errors,
        onSubmitForm,
        statusCode,
        loading
    } = useFormData<Login>(loginSchema, url);

    return (
        <>
            <section className="h-screen w-full flex justify-center flex-col items-center">
                <form onSubmit={onSubmitForm} className="w-64 p-2 rounded-3xl">
                    <h1 className="w-full text-white mb-5 px-1 text-2xl font-bold">Sign in</h1>

                    <div className="w-full mt-1 flex flex-col">
                        <input
                            type="text"
                            placeholder="Email: example@gmail.com"
                            className={`text-sm placeholder:text-zinc-600 px-1 text-white placeholder:text-[10px] bg-opacity-50 border-b outline-none h-6 bg-zinc-950 ${errors.email || statusCode === 403 ? "placeholder:text-red-800 border-red-800" : "border-zinc-800"} `}
                            {...register("email")}
                        />
                    </div>

                    <div className="w-full mt-1 flex relative flex-col">
                        <input
                            type="password"
                            placeholder="Password"
                            className={`text-sm placeholder:text-zinc-600 px-1 text-white placeholder:text-[10px] bg-opacity-50 border-b outline-none h-6 bg-zinc-950 ${errors.email || statusCode === 403 ? "placeholder:text-red-800 border-red-800" : "border-zinc-800"}`}
                            {...register("password")}
                        />
                        <p className="text-red-600 text-[10px] mt-[2px] flex items-center gap-x-1">
                            {
                                (statusCode === 401 || errors?.email?.message || errors?.password?.message) && (
                                    <>
                                        <MdError /> Email or password is incorrect.
                                    </>
                                )
                            }
                        </p>
                    </div>

                    <button className="w-full h-7 font-bold rounded-3xl mt-3 bg-zinc-950 font-bold text-center text-white border-zinc-900 flex justify-center items-center hover:bg-opacity-50 hover:border">
                        {
                            loading ? (
                                <span className="animate-spin"><LiaSpinnerSolid /></span>
                            ) : "SIGN IN"
                        }
                    </button>
                    <p className="text-center text-zinc-600 text-[10px] mt-1">Don't have an account? <Link href="/register" className="text-blue-500">Sign up</Link></p>

                </form>
            </ section>
        </>
    )
}

export default LoginPage;