import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .min(1, "Email is required")
    .max(100, "Email must be less than 100 characters long")
    .email("Invalid email format"),
  message: z.string().min(1, "Message is required"),
});

export default formSchema;
