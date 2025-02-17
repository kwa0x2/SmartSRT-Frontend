"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { UploadCloud, Search, LayoutGrid, List } from "lucide-react";
import React from "react";
import { Label } from "@/components/ui/label";
import SingleFileCard from "./single-file-card";
import ListFileCard from "./list-file-card";

const files = [
    {
      id: "1",
      heading: "Interview_Transcript.srt",
      date: "6 Jan 2024",
      duration: "5.2", 
    },
    {
      id: "2",
      heading: "Meeting_Notes.srt",
      date: "6 Jan 2024",
      duration: "12.5",
    },
    {
      id: "3",
      heading: "Presentation_Subtitles.srt",
      date: "6 Jan 2024",
      duration: "8.3",
    },
    {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      {
        id: "1",
        heading: "Interview_Transcript.srt",
        date: "6 Jan 2024",
        duration: "5.2", 
      },
      {
        id: "2",
        heading: "Meeting_Notes.srt",
        date: "6 Jan 2024",
        duration: "12.5",
      },
      {
        id: "3",
        heading: "Presentation_Subtitles.srt",
        date: "6 Jan 2024",
        duration: "8.3",
      },
      
  ];
  
  export type File = {
    id: string;
    heading: string;
    date: string;
    duration: string;
  };

const HistoryFileList = () => {
    const [fileView, setFileView] = React.useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = React.useState("");

    const totalFiles = files.length;
    const totalMinutes = 32.5;
  
    const filteredFiles = files.filter((file) =>
      file.heading.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <Card className="">
        <CardHeader className="mb-4 border-none">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex-1">
              <div className="text-lg font-medium text-default-900 whitespace-nowrap">
                SRT Files History
              </div> 
              <div className="text-xs lg:text-sm font-medium text-default-600 whitespace-nowrap">
                {totalFiles} files, {totalMinutes} minutes total
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