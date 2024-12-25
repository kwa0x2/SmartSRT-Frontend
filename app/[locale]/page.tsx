"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/en/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleRedirect}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Login
      </button>
    </div>
  );
}
