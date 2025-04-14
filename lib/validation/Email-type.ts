import { isValidPhoneNumber } from "libphonenumber-js/min";
import { z } from "zod";

const phoneRegex = /^\+?[1-9]\d{6,14}$/;

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine((val) => isValidPhoneNumber(val), {
    message: "Valid phone number is required",
  }),
  company: z.string().min(2, "Company name is required").optional(),
  message: z.string().optional(),
});
