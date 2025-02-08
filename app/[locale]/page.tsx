"use client";

import Layout from "@/components/home/layout";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </Layout>
  );
}
