import { z } from "zod";

export const paymentSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    cardNumber: z.string()
      .transform(val => val.replace(/\s/g, '').toUpperCase())
      .pipe(
        z.string()
          .min(14, { message: "Card number must be at least 14 characters" })
          .max(19, { message: "Card number must be at most 19 characters" })
          .regex(/^[A-Z0-9]+$/, { message: "Only letters and numbers are allowed" })
      ),
    expDate: z.string()
      .regex(/^(0[1-9]|1[0-2])\s*\/\s*([0-9]{2})$/, { message: "Please enter in MM/YY format" })
      .refine((val) => {
        const [month, year] = val.split('/').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;
        
        if (year < currentYear) return false;
        if (year === currentYear && month < currentMonth) return false;
        return true;
      }, { message: "Card has expired" }),
    cvc: z.string()
      .min(3, { message: "CVC must be at least 3 digits" })
      .max(4, { message: "CVC must be at most 4 digits" })
      .regex(/^[0-9]+$/, { message: "Only numbers are allowed" }),
    name: z.string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(50, { message: "Name is too long" })
      .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\\s]+$/, { message: "Only letters are allowed" }),
    country: z.string({
      required_error: "Please select a country",
    }).min(1, { message: "Please select a country" }),
    zip: z.string()
      .min(4, { message: "ZIP code must be at least 4 digits" })
      .max(10, { message: "ZIP code is too long" })
      .regex(/^[0-9]+$/, { message: "Only numbers are allowed" }),
  });
  
export type PaymentFormData = z.infer<typeof paymentSchema>;
  