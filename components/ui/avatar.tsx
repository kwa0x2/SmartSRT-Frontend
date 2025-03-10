import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  name?: string | null;
  className?: string;
  width?: number;
  height?: number;
}

export function Avatar({ src, name, className, width = 36, height = 36 }: AvatarProps) {
  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  if (src) {
    return (
      <Image
        src={src}
        alt={name || "avatar"}
        width={width}
        height={height}
        className={cn("rounded-full", className)}
        priority={true}
      />
    );
  }

  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-full bg-black text-white font-medium",
        className
      )}
      style={{ width, height }}
    >
      {name ? getInitials(name) : "?"}
    </div>
  );
} 