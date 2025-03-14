"use client";

import Layout from "@/components/home/layout";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Contact from "@/components/home/contact";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import { toast } from "sonner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check-auth");
        const data = await response.json();
        setAuthStatus(data.isAuthenticated);
      } catch (error) {
        toast.error(
          "An error occurred. Please try again later or contact support."
        );
        setAuthStatus(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout isAuthenticated={authStatus}>
      <Hero isAuthenticated={authStatus} />
      <Features isAuthenticated={authStatus} />
      <Pricing/>
      <Contact />
    </Layout>
  );
}
