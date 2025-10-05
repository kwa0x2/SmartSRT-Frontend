"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface SocialProps {
    status: string;
}

const Social = ({ status }: SocialProps) => {
    const t = useTranslations("Auth.social");
    const tLogin = useTranslations("Auth.login");
    const tRegister = useTranslations("Auth.register");
    const actionText = status === "up" ? tRegister("title") : tLogin("title");

    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
    };

    const handleGithubLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/github/login`;
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-4 px-6 py-2 rounded-lg"
            >
                <Image
                    width={40}
                    height={40}
                    className="w-8 h-8"
                    src="/images/icon/google.svg"
                    alt="Google Logo"
                />
                <span className="text-sm font-medium hover:underline">
          {t("withGoogle", { action: actionText })}
        </span>
            </button>

            <button
                onClick={handleGithubLogin}
                className="flex items-center gap-4 px-6 py-2 rounded-lg"
            >
                <Image
                    width={40}
                    height={40}
                    className="w-8 h-8"
                    src="/images/icon/github.svg"
                    alt="GitHub Logo"
                />
                <span className="text-sm font-medium hover:underline">
          {t("withGithub", { action: actionText })}
        </span>
            </button>
        </div>
    );
};

export default Social;
