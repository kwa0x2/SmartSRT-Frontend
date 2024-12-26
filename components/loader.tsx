"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import AutoSRTLogo from "./autosrt-logo";
import { useMounted } from "@/hooks/use-mounted";
import Image from "next/image";

const Loader = () => {
  const mounted = useMounted();
  return mounted ? null : (
    <div className=" h-screen flex items-center justify-center flex-col space-y-2">
      <div className="flex gap-2 items-center ">
        <Image
          src="/images/logo/black.png"
          alt=""
          width={200}
          height={100}
          className="w-36"
        />{" "}
      </div>
      <span className=" inline-flex gap-1  items-center">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </span>
    </div>
  );
};

export default Loader;
