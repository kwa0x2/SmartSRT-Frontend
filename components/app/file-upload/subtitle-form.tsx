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
import { LoadingButton } from "@/components/ui/loading-button";
import { Info } from "lucide-react";
import {
  subtitleFormSchema,
  SubtitleFormValues,
} from "@/schemas/file-upload.schema";
import { generateSRT } from "@/app/api/services/srt.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ERROR_TYPES } from "@/types";
import { useTranslations } from "next-intl";

const LoadingDots = () => {
  const t = useTranslations("App.subtitleForm");
  return (
    <span className="inline-flex items-center">
      {t("generating")}
      <span className="animate-[loading_1.4s_ease-in-out_infinite] ml-1">
        .
      </span>
      <span className="animate-[loading_1.4s_ease-in-out_infinite] ml-[2px] animate-delay-[0.2s]">
        .
      </span>
      <span className="animate-[loading_1.4s_ease-in-out_infinite] ml-[2px] animate-delay-[0.4s]">
        .
      </span>
    </span>
  );
};

interface SubtitleFormProps {
  file: File | null;
}

export function SubtitleForm({ file }: SubtitleFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations("App.subtitleForm");

  const form = useForm<SubtitleFormValues>({
    resolver: zodResolver(subtitleFormSchema),
    defaultValues: {
      words_per_line: 3,
      punctuation: true,
      consider_punctuation: true,
    },
  });

  const watchPunctuation = form.watch("punctuation");

  const onSubmit = async (data: SubtitleFormValues) => {
    if (!file || isLoading) return;

    try {
      setIsLoading(true);
      const response = await generateSRT(
        file,
        data.words_per_line,
        data.punctuation,
        data.consider_punctuation
      );

      const payload = (response as any)?.body ?? response;
      const message = payload?.message ?? t("srtSuccess");
      const srtUrl = payload?.srt_url as string | undefined;
      if (response.status_code == 200) {
        toast.success(message);
        if (srtUrl) {
          router.push(srtUrl);
        } else {
          toast.error(
            response.body.message
          );
        }
      } else if (response.status_code == 202) {
        toast.success(response.body.message);
      }

    } catch (error: any) {
      if (error.response?.data?.body?.message === ERROR_TYPES.USAGE_LIMIT_REACHED) {
        toast.error(t("usageLimitReached"));
      } else {
        toast.error(error.response?.data?.body?.message || t("error"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        if (isLoading) {
          e.preventDefault();
          return;
        }
        form.handleSubmit(onSubmit)(e);
      }}
      className="space-y-4 md:space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
        <div className="w-full md:w-auto">
          <Select
            value={String(form.watch("words_per_line"))}
            onValueChange={(value) =>
              form.setValue("words_per_line", Number(value))
            }
          >
            <SelectTrigger className="w-full md:w-[180px] border-2">
              <SelectValue placeholder={t("wordsPerLine")} />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {t("wordsPerLineOption", { count: num })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={watchPunctuation}
                onCheckedChange={(checked) => {
                  form.setValue("punctuation", checked as boolean);
                  if (!checked) {
                    form.setValue("consider_punctuation", false);
                  }
                }}
                className="border-2 border-gray-300 data-[state=checked]:border-none"
              />
              <label className="text-sm">{t("includePunctuation")}</label>
            </div>
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger type="button" className="flex items-center">
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    {t("punctuationTooltip")}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={form.watch("consider_punctuation")}
                onCheckedChange={(checked) =>
                  form.setValue("consider_punctuation", checked as boolean)
                }
                className="border-2 border-gray-300 data-[state=checked]:border-none"
                disabled={!watchPunctuation}
              />
              <label className="text-sm">
                {t("considerPunctuation")}
              </label>
            </div>
            <TooltipProvider delayDuration={250}>
              <Tooltip>
                <TooltipTrigger type="button" className="flex items-center">
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    {t("considerPunctuationTooltip")}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <LoadingButton
        type="submit"
        className="w-full mt-6 md:mt-8 bg-black uppercase hover:bg-black/90 h-9 md:h-11 text-sm md:text-base"
        disabled={!file}
        loading={isLoading}
        loadingText={t("generatingButton")}
      >
        {t("generateButton")}
      </LoadingButton>
    </form>
  );
}
