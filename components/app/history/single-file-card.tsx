"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import srt from "@/public/images/files/srt.png";
import { Icon } from "@iconify/react";
import { type File } from "@/components/app/history";

const SingleFileCard = ({ item }: { item: File }) => {
  return (
    <div className="relative min-h-[164px] shadow-sm dark:border rounded">
      <div className="p-6">
        <div className="bg-card p-2.5 h-16 w-16 rounded mx-auto block">
          <Image
            alt="SRT file"
            className="h-full w-full object-cover"
            src={srt}
          />
        </div>

        <div className="text-center mt-3">
          <p className="text-base font-medium text-default-800 dark:text-primary-foreground truncate">
            {item?.heading}
          </p>
          <p className="text-sm font-normal text-default-600 dark:text-primary-foreground">
            <span>{item?.date}</span> / <span>{item?.duration} minutes</span>
          </p>
        </div>

        <div className="absolute top-3 right-3">
          <Button size="icon" variant="outline" className="h-6 w-6">
            <Icon icon="heroicons:arrow-down-tray" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleFileCard;
