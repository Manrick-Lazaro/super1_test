"use client";

import { Banner } from "@/components/banner";
import { ClientSection } from "@/components/clientSection";
import { DepartamentBanner } from "@/components/departamentBanner";

export default function Home() {
  return (
    <div className="flex justify-center mt-[30px]">
      <section className="wrapper flex justify-center items-center flex-col">
        <div className="w-full mb-[40px]">
          <Banner />
        </div>

        <DepartamentBanner />

        <ClientSection />
      </section>
    </div>
  );
}
