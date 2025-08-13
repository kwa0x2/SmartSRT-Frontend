"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, LayoutGrid, List } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import SingleFileCard from "./single-file-card";
import ListFileCard from "./list-file-card";
import {findHistories, SRTHistory} from "@/app/api/services/srt.service";
import { format } from "date-fns";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingButton } from "@/components/ui/loading-button";

export type File = {
  id: string;
  heading: string;
  date: string;
  duration: string;
  durationRaw: number;
  downloadUrl: string;
};

const HistoryFileList = () => {
  const [fileView, setFileView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrying, setIsRetrying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatDuration = (seconds: number): string => {
    if (seconds < 60) {
      return `${Math.round(seconds)} seconds`;
    }
    const minutes = (seconds / 60).toFixed(2);
    return `${minutes} minutes`;
  };

  const fetchHistories = async (isRetry = false) => {
    try {
      if (isRetry) {
        setIsRetrying(true);
      } else {
        setIsLoading(true);
      }
      setError(null);
      const histories = await findHistories();
      const formattedFiles = (histories || []).map((history: SRTHistory) => ({
        id: history.ID,
        heading: history.FileName,
        date: format(new Date(history.CreatedAt), "d MMM yyyy"),
        duration: formatDuration(history.Duration),
        durationRaw: history.Duration,
        downloadUrl: history.S3URL,
      }));
      setFiles(formattedFiles);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred while retrieving SRT file history. Please try again or contact support.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
      setIsRetrying(false);
    }
  };

  useEffect(() => {
    fetchHistories();
  }, []);

  const totalFiles = files.length;
  const totalMinutes = files.reduce((acc, file) => acc + file.durationRaw, 0) / 60;

  const filteredFiles = useMemo(
      () =>
          files.filter((file) =>
              file.heading.toLowerCase().includes(searchQuery.toLowerCase())
          ),
      [files, searchQuery]
  );

  return (
      <Card className="">
        <CardHeader className="mb-4 border-none">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex-1 space-y-1">
              <div className="text-xl md:text-2xl font-bold whitespace-nowrap">
                SRT Files History
              </div>
              <div className="text-sm md:text-base text-muted-foreground whitespace-nowrap">
                {totalFiles} files, {totalMinutes.toFixed(1)} minutes total
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="hidden md:flex gap-4">
                <Button
                    size="icon"
                    variant="outline"
                    className={cn("hover:bg-transparent", {
                      "hover:border-primary hover:text-primary": fileView === "grid",
                      "hover:border-muted-foreground hover:text-muted-foreground":
                          fileView !== "grid",
                    })}
                    color={fileView === "grid" ? "primary" : "secondary"}
                    onClick={() => setFileView("grid")}
                >
                  <LayoutGrid className="h-5 w-5" />
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    className={cn("hover:bg-transparent", {
                      "hover:border-primary hover:text-primary": fileView === "list",
                      "hover:border-muted-foreground hover:text-muted-foreground":
                          fileView !== "list",
                    })}
                    color={fileView === "list" ? "primary" : "secondary"}
                    onClick={() => setFileView("list")}
                >
                  <List className="h-5 w-5" />
                </Button>
              </div>

              <div className="relative">
                <Search className="w-5 h-5 absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2 text-default-400" />
                <Input
                    placeholder="Search SRT files"
                    className="ltr:pl-7 rtl:pr-8 text-sm border border-black/30 text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="h-[calc(100vh-500px)] overflow-auto">
          {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Skeleton key={idx} className="h-32 w-full" />
                ))}
              </div>
          ) : error ? (
              <div className="flex flex-col items-center justify-center h-32 space-y-4">
                <div className="text-sm text-muted-foreground">{error}</div>
                <LoadingButton
                    onClick={() => fetchHistories(true)}
                    loading={isRetrying}
                    loadingText="Retrying..."
                    variant="outline"
                    size="sm"
                >
                  Retry
                </LoadingButton>
              </div>
          ) : filteredFiles.length === 0 ? (
              <div className="text-sm text-muted-foreground">No files found</div>
          ) : fileView === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFiles.map((item) => (
                    <SingleFileCard item={item} key={item.id} />
                ))}
              </div>
          ) : (
              <ListFileCard files={filteredFiles} />
          )}
        </CardContent>
      </Card>
  );
};

export default HistoryFileList;