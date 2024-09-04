import registerSchema from "@/schemas/register";
import AuthUser from "@/auth/AuthUser";
import Register from "@/app/interfaces/register";
import prisma from "../../../../prisma/client";
import { BadRequest, Conflict } from "@/errors/errors";
import bcrypt from "bcrypt";
import { ErrorsHandler } from "@/errors/errors";

export async function POST(request: Request) {
    const body = await request.json();
    const { username, email, password } = body as Register;

    try {
        const { error } = registerSchema.safeParse(body);
        if (error) throw new BadRequest(error.errors[0].message)

        const isEmailRegistered = await prisma.user.findFirst({ where: { email: email.toLocaleLowerCase() } });
        if (isEmailRegistered) throw new Conflict("Email is already registered");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUserInsertion = await prisma.user.create({
            data: {
                username,
                email: email.toLocaleLowerCase(),
                password: hashedPassword
            }
        });

        const token = AuthUser(newUserInsertion.id);

        return new Response(JSON.stringify({ token }), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    }
    
    catch (error) {
        return new Response(JSON.stringify({
            error: error instanceof ErrorsHandler ? error.message : "Internal Server Error",
            status: error instanceof ErrorsHandler ? error.status : 500
        }), {
            headers: { "Content-Type": "application/json" },
            status: error instanceof ErrorsHandler ? error.status : 500
        });
    }
}