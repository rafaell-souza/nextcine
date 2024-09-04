import loginSchema from "@/schemas/login";
import AuthUser from "@/auth/AuthUser";
import prisma from "../../../../prisma/client";
import { BadRequest, Unauthorized } from "@/errors/errors";
import bcrypt from "bcrypt";
import { ErrorsHandler } from "@/errors/errors";

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body as { email: string, password: string };

    try {
        const { error } = loginSchema.safeParse(body);
        if (error) throw new BadRequest(error.errors[0].message)

        const userExist = await prisma.user.findFirst({ where: { email: email.toLowerCase() } });

        if (!userExist || !(await bcrypt.compare(password, userExist.password))) {
            throw new Unauthorized("Email or password is incorrect.");
        } 

        const token = AuthUser(userExist.id)

        return new Response(JSON.stringify({ token }), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    }

    catch (error) {
        const message = error instanceof ErrorsHandler ? error.message : "Internal Server Error";
        const status = error instanceof ErrorsHandler ? error.status : 500;

        return new Response(JSON.stringify({ message }), {
            headers: { "Content-Type": "application/json" },
            status
        });
    }
}