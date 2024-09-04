import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email().nonempty().max(255).min(5),

    password: z.string().nonempty()
        .min(8).max(12).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/)
});

export default loginSchema;