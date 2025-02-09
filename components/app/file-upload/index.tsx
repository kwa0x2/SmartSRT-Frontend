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
    <>
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed border-black rounded-lg p-6">
        <FileUpload onChange={handleFileUpload} />
      </div>
      <SubtitleForm file={file} />
    </>
  );
}
