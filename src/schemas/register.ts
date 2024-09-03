import { z } from 'zod';

const registerSchema = z.object({
    username: z.string()
    .nonempty({message: "Field is required"}).min(5, {message: "Name must be 5-60 characters"})
    .max(60, {message: "Name must be 5-60 characters"})
    .regex(/^[a-zA-Z\s]+$/, {message: "Enter a valid name"}),

    email: z.string().email().nonempty({message: "Field is required"})
    .max(255, {message: "Enter a valid name"}).min(5, {message: "Enter a valid email"}),

    password: z.string().nonempty({message: "Field is required"})
    .min(8, {message: "Password must be 8-12 characters"}).max(12, {message: "Password must be 8-12 characters"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/, {message: "Mix upper, lower and numbers."}),

    confirmPassword: z.string().nonempty({message: "Field is required"})

}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['password'],
});

export default registerSchema;