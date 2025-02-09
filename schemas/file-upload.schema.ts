import { z } from "zod";

export const subtitleFormSchema = z.object({
  words_per_line: z.number().min(1).max(5),
  punctuation: z.boolean(),
  consider_punctuation: z.boolean(),
});

export type SubtitleFormValues = z.infer<typeof subtitleFormSchema>;
