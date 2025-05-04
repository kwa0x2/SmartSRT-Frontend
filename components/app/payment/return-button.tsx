import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ReturnButton() {
  return (
    <div className="mb-8">
      <button className="bg-white shadow-sm hover:bg-transparent hover:text-black hover:ring-0">
        <Link href="/app" className="flex items-center text-lg gap-2">
          <ArrowLeft size={16} />
          Return to AutoSRT
        </Link>
      </button>
    </div>
  );
} 