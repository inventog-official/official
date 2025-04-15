import { isValidPhoneNumber } from "libphonenumber-js/min";
import { z } from "zod";

const phoneRegex = /^\+?[1-9]\d{6,14}$/;

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required").optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"), // keep it simple
  company: z.string().min(2, "Company name is required").optional(),
  message: z.string().optional(),
});
