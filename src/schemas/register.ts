import { z } from 'zod';

const registerSchema = z.object({
    username: z.string()
    .nonempty({message: "Pleaase, enter your name."}).min(5, {message: "Name must be 5-60 characters"})
    .max(60, {message: "Name must be 5-60 characters"})
    .regex(/^[a-zA-Z\s]+$/, {message: "Enter a valid name."}),

    email: z.string().email({message: "Enter a valid email address."})
    .max(255, {message: "Enter a valid email address."}).min(5, {message: "Enter a valid email adress."}),

    password: z.string().nonempty({message: "Create a password is required."})
    .min(8, {message: "Password must be 8-12 characters"}).max(12, {message: "Password must be 8-12 characters."})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/, {message: "Mix upper, lowercase letters and numbers."}),

    confirmPassword: z.string().nonempty({message: "Confirm password is required."})

}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['password'],
});

export default registerSchema;