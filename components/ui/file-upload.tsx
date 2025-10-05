"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload, IconTrash } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useUser } from "@/hooks/use-user";
import { useTranslations } from "next-intl";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const MAX_FILE_SIZE_MB = 24;
const MAX_DURATION_SECONDS = 30;
const MAX_DURATION_SECONDS_PRO = 300;

export const FileUpload = ({
                             onChange,
                           }: {
  onChange?: (file: File | null) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { session } = useUser();
  const isPro = session?.user?.plan === 'pro';
  const t = useTranslations("App.fileUpload");

  const handleFileChange = async (newFiles: File[]) => {
    if (newFiles.length > 0) {
      const videoFile = newFiles[0];

      if (videoFile.type === 'audio/wav' && !isPro) {
        toast.error(t("errors.upgradeForWav"));
        return;
      }

      if (videoFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast.error(t("errors.fileSizeExceeds"));
        return;
      }

      const isAudio = videoFile.type.startsWith('audio');
      const mediaEl = document.createElement(isAudio ? 'audio' : 'video');
      mediaEl.preload = 'metadata';
      const objectUrl = URL.createObjectURL(videoFile);
      mediaEl.src = objectUrl;
      mediaEl.onloadedmetadata = () => {
        try {
          const mediaDuration = (mediaEl as HTMLMediaElement).duration;
          const maxDuration = isPro ? MAX_DURATION_SECONDS_PRO : MAX_DURATION_SECONDS;
          if (mediaDuration > maxDuration) {
            toast.error(t("errors.durationExceeds", { maxDuration }));
            return;
          }
          setDuration(mediaDuration);
          setFile(videoFile);
          onChange && onChange(videoFile);
        } finally {
          URL.revokeObjectURL(objectUrl);
        }
      };
      mediaEl.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        toast.error(t("errors.metadataFailed"));
      };
    }
  };

  const handleDelete = () => {
    setFile(null);
    setDuration(0);
    onChange && onChange(null);
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    accept: {
      'video/mp4': ['.mp4'],
      'audio/mpeg': ['.mp3'],
      ...(isPro ? { 'audio/wav': ['.wav'] } : {})
    },
    onDrop: handleFileChange,
    onDropRejected: (fileRejections) => {
      const file = fileRejections[0]?.file;
      if (!file) return;
      const isWav = file.type === 'audio/wav' || file.name.endsWith('.wav');
      const isMp4 = file.type === 'video/mp4' || file.name.endsWith('.mp4');
      const isMp3 = file.type === 'audio/mpeg' || file.name.endsWith('.mp3');
      if (isWav && !isPro) {
        toast.error(t("errors.upgradeForWav"));
      } else if (!isMp4 && !isMp3 && !isWav) {
        toast.error(t("errors.fileTypeNotSupported"));
      } else {
        toast.error(t("errors.genericError"));
      }
    },
  });

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
      <div className="w-full" {...getRootProps()}>
        <motion.div
            whileHover="animate"
            className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
        >
          <input
              ref={fileInputRef}
              id="file-upload-handle"
              type="file"
              onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
              className="hidden"
              accept={isPro ? '.mp4,.mp3,.wav' : '.mp4,.mp3'}
          />
          <div className="flex flex-col items-center justify-center">
            <p className="relative z-20 font-sans font-bold text-black text-base md:text-xl">
              {t("title")}
            </p>
            <p className="relative z-20 font-sans font-normal text-black text-sm md:text-lg mt-2 text-center">
              {session?.user?.plan === 'pro'
                  ? t("dragDropPro")
                  : t("dragDropFree")}
            </p>
            <div className="relative w-full mt-10 max-w-xl mx-auto">
              {file ? (
                  <motion.div
                      layoutId="file-upload"
                      className={cn(
                          "relative overflow-hidden z-40 bg-black flex flex-col items-start justify-start p-3 md:p-4 mt-4 w-full mx-auto rounded-md",
                          "shadow-sm"
                      )}
                  >
                    <div className="flex justify-between w-full items-center gap-2">
                      <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="text-sm md:text-base text-white truncate max-w-[180px] md:max-w-xs"
                      >
                        {file.name}
                      </motion.p>
                      <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete();
                          }}
                          className="text-white hover:text-red-500 transition-colors flex-shrink-0"
                      >
                        <IconTrash size={18} className="md:w-5 md:h-5" />
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center w-full mt-2 md:mt-3 space-y-2 md:space-y-0 md:justify-between text-white">
                      <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="text-xs md:text-sm px-1.5 py-0.5 rounded-md bg-black/50"
                      >
                        {t("duration")}: {formatDuration(duration)}
                      </motion.p>
                      <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="text-xs md:text-sm rounded-lg px-2 py-1 w-fit flex-shrink-0 bg-black/50 text-white shadow-input"
                      >
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </motion.p>
                    </div>
                  </motion.div>
              ) : (
                  <>
                    <motion.div
                        layoutId="file-upload"
                        variants={mainVariant}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className={cn(
                            "relative group-hover/file:shadow-2xl z-40 bg-black flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md cursor-pointer",
                            "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                        )}
                        onClick={() => fileInputRef.current?.click()}
                    >
                      {isDragActive ? (
                          <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-white flex flex-col items-center"
                          >
                            {t("dropIt")}
                            <IconUpload className="h-4 w-4 text-white" />
                          </motion.p>
                      ) : (
                          <motion.div className="text-white flex flex-col items-center gap-2">
                            <IconUpload className="h-4 w-4 text-white" />
                            <span className="text-xs text-center">{t("clickOrDrag")}</span>
                          </motion.div>
                      )}
                    </motion.div>

                    <motion.div
                        variants={secondaryVariant}
                        className="absolute opacity-0 border border-dashed border-black inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
                    ></motion.div>
                  </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
      <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
        {Array.from({ length: rows }).map((_, row) =>
            Array.from({ length: columns }).map((_, col) => {
              const index = row * columns + col;
              return (
                  <div
                      key={`${col}-${row}`}
                      className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                          index % 2 === 0
                              ? "bg-gray-50 dark:bg-neutral-950"
                              : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                      }`}
                  />
              );
            })
        )}
      </div>
  );
}
