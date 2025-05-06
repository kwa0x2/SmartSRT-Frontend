import * as z from "zod";

export const paymentFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    cardNumber: z
      .string()
      .min(14, {
        message: "Card number must be at least 12 digits",
      })
      .max(23, {
        message: "Card number must be at most 19 digits",
      }),
    expiryDate: z
      .string()
      .min(7, {
        message: "Expiry date must be in MM/YYYY format",
      })
      .max(7, {
        message: "Expiry date must be in MM/YYYY format",
      })
      .refine(
        (value) => {
          const [month, year] = value.split("/");
          if (!month || !year) return false;
          
          const currentDate = new Date();
          const currentYear = currentDate.getFullYear();
          const currentMonth = currentDate.getMonth() + 1;
          
          const expYear = parseInt(year);
          const expMonth = parseInt(month);
          
          if (expYear < currentYear) return false;
          if (expYear === currentYear && expMonth < currentMonth) return false;
          if (expMonth < 1 || expMonth > 12) return false;
          
          return true;
        },
        {
          message: "Invalid expiry date",
        }
      ),
    cvv: z
      .string()
      .min(3, {
        message: "CVV must be 3 digits",
      })
      .max(3, {
        message: "CVV must be 3 digits",
      }),
    name: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters",
      })
      .max(50, {
        message: "Name must be at most 50 characters",
      }),
    country: z
      .string()
      .min(1, {
        message: "Please select a country",
      }),
  });
  
export type PaymentFormData = z.infer<typeof paymentFormSchema>;
  