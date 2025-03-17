"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import srt from "@/public/images/files/srt.png";
import Image from "next/image";
import { type File } from "@/components/app/history";

const ListFileCard = ({ files }: { files: File[] }) => {
  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-auto no-scrollbar p-6">
      <Table>
        <TableHeader className="bg-background sticky top-0">
          <TableRow>
            <TableHead className="w-[50%] font-semibold">File Name</TableHead>
            <TableHead className="w-[20%] whitespace-nowrap">Duration</TableHead>
            <TableHead className="w-[20%] whitespace-nowrap">Upload Date</TableHead>
            <TableHead className="w-[10%] text-end">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {files.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-muted"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      alt="SRT file"
                      className="h-full w-full object-cover"
                      src={srt}
                    />
                  </div>
                  <span className="text-sm text-card-foreground truncate">
                    {item?.heading}
                  </span>
                </div>
              </TableCell>

              <TableCell className="whitespace-nowrap">
                {item?.duration}
              </TableCell>
              
              <TableCell className="whitespace-nowrap">
                {item?.date}
              </TableCell>

              <TableCell>
                <div className="flex justify-end">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7"
                    onClick={() => window.open(item.downloadUrl, '_blank')}
                  >
                    <Icon
                      icon="heroicons:arrow-down-tray"
                      className="h-4 w-4"
                    />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListFileCard;
