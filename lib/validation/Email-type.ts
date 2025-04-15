import { z } from "zod";


export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required").optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"), // keep it simple
  company: z.string().min(2, "Company name is required").optional(),
  message: z.string().optional(),
});
