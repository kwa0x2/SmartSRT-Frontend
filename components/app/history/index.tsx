"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, LayoutGrid, List } from "lucide-react";
import React, { useEffect, useState } from "react";
import SingleFileCard from "./single-file-card";
import ListFileCard from "./list-file-card";
import { findHistories, SRTHistory } from "@/app/api/services/srt.service";
import { format } from "date-fns";
import { toast } from "sonner";

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

  const formatDuration = (seconds: number): string => {
    if (seconds < 60) {
      return `${Math.round(seconds)} seconds`;
    }
    const minutes = (seconds / 60).toFixed(2);
    return `${minutes} minutes`;
  };

useEffect(() => {
    const fetchHistories = async () => {
      try {
        const histories = await findHistories();
        const formattedFiles = histories.map((history) => ({
          id: history.ID,
          heading: history.FileName,
          date: format(new Date(history.CreatedAt), "d MMM yyyy"),
          duration: formatDuration(history.Duration),
          durationRaw: history.Duration,
          downloadUrl: history.S3URL,
        }));
        setFiles(formattedFiles);
      } catch (error) {
        toast.error(`An error occurred while retrieving SRT file history. Please try again or contact support.`);
      }
    };
    fetchHistories();
  }, []);

  const totalFiles = files.length;
  const totalMinutes = files.reduce((acc, file) => acc + file.durationRaw, 0) / 60;

  const filteredFiles = files.filter((file) =>
    file.heading.toLowerCase().includes(searchQuery.toLowerCase())
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
        {fileView === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFiles?.map((item, i) => (
              <SingleFileCard item={item} key={i} />
            ))}
          </div>
        )}
        {fileView === "list" && <ListFileCard files={filteredFiles} />}
      </CardContent>
    </Card>
  );
};

export default HistoryFileList;