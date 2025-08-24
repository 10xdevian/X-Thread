import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(13).max(120)
});

// Infer TS type
export type User = z.infer<typeof userSchema>;
