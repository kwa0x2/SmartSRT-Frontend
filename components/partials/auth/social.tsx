import { signIn } from "@/lib/auth";
import Image from "next/image";

const Social = ({ locale, status }: { locale: string, status: string }) => {
  const actionText = status === "up" ? "Sign up" : "Sign in";

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Google Sign-In or Sign-Up */}
      <button className="flex items-center gap-4 bg-gray-100 p-2 px-6 rounded-lg shadow-sm">
        <Image
          width={40}
          height={40}
          className="w-8 h-8"
          src="/images/icon/google.svg"
          alt="Google Logo"
        />
        <span className="text-sm font-medium text-gray-700 hover:underline">
          {actionText} with Google
        </span>
      </button>

      {/* GitHub Sign-In or Sign-Up */}
      <button className="flex items-center gap-4 bg-gray-100 p-2 px-6 rounded-lg shadow-sm">
        <Image
          width={40}
          height={40}
          className="w-8 h-8"
          src="/images/icon/github.svg"
          alt="GitHub Logo"
        />
        <span className="text-sm font-medium text-gray-700 hover:underline">
          {actionText} with GitHub
        </span>
      </button>
    </div>
  );
};

export default Social;
