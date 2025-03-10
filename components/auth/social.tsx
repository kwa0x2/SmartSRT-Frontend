"use client";
import Image from "next/image";

const Social = ({ locale, status }: { locale: string; status: string }) => {
  const actionText = status === "up" ? "Register" : "Login";

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-4  p-2 px-6 rounded-lg"
      >
        <Image
          width={40}
          height={40}
          className="w-8 h-8"
          src="/images/icon/google.svg"
          alt="Google Logo"
        />
        <span className="text-sm font-medium hover:underline">
          {actionText} with Google
        </span>
      </button>

      <button
        onClick={handleGithubLogin}
        className="flex items-center gap-4 p-2 px-6 rounded-lg"
      >
        <Image
          width={40}
          height={40}
          className="w-8 h-8"
          src="/images/icon/github.svg"
          alt="GitHub Logo"
        />
        <span className="text-sm font-medium hover:underline">
          {actionText} with GitHub
        </span>
      </button>
    </div>
  );
};

export default Social;
