"use client";

import Layout from "@/components/home/layout";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Contact from "@/components/home/contact";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";

export default function Home() {
  const { isLoading, isAuthenticated } = useCheckAuth();

  if (isLoading) {
    return <Loader />;
  }


  return (
    <Layout isAuthenticated={isAuthenticated}>
      <Hero isAuthenticated={isAuthenticated} />
      <Features isAuthenticated={isAuthenticated} />
      <Pricing/>
      <Contact />
    </Layout>
  );
}
