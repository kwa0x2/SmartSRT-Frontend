"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  subtitleFormSchema,
  SubtitleFormValues,
} from "@/schemas/file-upload.schema";

interface SubtitleFormProps {
  file: File | null;
}

export function SubtitleForm({ file }: SubtitleFormProps) {
  const form = useForm<SubtitleFormValues>({
    resolver: zodResolver(subtitleFormSchema),
    defaultValues: {
      words_per_line: 3,
      punctuation: true,
      consider_punctuation: true,
    },
  });

  const onSubmit = (data: SubtitleFormValues) => {
    console.log("File:", file);
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
        <div className="w-full md:w-auto">
          <Select
            value={String(form.watch("words_per_line"))}
            onValueChange={(value) =>
              form.setValue("words_per_line", Number(value))
            }
          >
            <SelectTrigger className="w-full md:w-[180px] border-2">
              <SelectValue placeholder="Words per line" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num} words per line
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={form.watch("punctuation")}
              onCheckedChange={(checked) =>
                form.setValue("punctuation", checked as boolean)
              }
              className="border-2 border-gray-300 data-[state=checked]:border-none"
            />
            <label className="text-sm">Include punctuation</label>
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    When enabled, punctuation marks (.,!?) will be included in
                    the generated SRT file.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={form.watch("consider_punctuation")}
              onCheckedChange={(checked) =>
                form.setValue("consider_punctuation", checked as boolean)
              }
              className="border-2 border-gray-300 data-[state=checked]:border-none"
            />
            <label className="text-sm">Consider punctuation in line breaks</label>
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    When enabled, punctuation marks will be considered when
                    breaking lines. This helps maintain natural reading flow and
                    proper sentence structure.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full mt-6 md:mt-8 bg-black uppercase hover:bg-black/90 h-9 md:h-11 text-sm md:text-base"
        disabled={!file}
      >
        Generate SRT File
      </Button>
    </form>
  );
}
