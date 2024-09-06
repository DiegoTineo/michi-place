import { z } from "zod";

// SCHEMA
export const userSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
    name: z.string(),
});

// TYPE
export type UserType = z.infer<typeof userSchema>;