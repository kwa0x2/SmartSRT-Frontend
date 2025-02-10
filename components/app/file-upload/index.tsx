"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { SubtitleForm } from "./subtitle-form";

export function FileUploadDemo() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (file: File | null) => {
    setFile(file);
  };

  return (
    <div className="w-full space-y-4 md:space-y-6 px-4 md:px-0">
      <div className="w-full max-w-4xl mx-auto min-h-[300px] md:min-h-96 border border-dashed border-black rounded-lg p-4 md:p-6">
        <FileUpload onChange={handleFileUpload} />
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <SubtitleForm file={file} />
      </div>
    </div>
  );
}
