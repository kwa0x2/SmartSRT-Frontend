"use client";

import Header from "@/components/home/header/header";
import Hero from "@/components/home/hero/hero";

const TestHomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default TestHomePage;
