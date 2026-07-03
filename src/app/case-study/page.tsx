import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/sections/CaseStudyHero";
import { CaseStudyBreakdown } from "@/components/sections/CaseStudyBreakdown";
import { BuildStackSection } from "@/components/sections/BuildStackSection";

export const metadata: Metadata = {
  title: "Case Study — MFF Free Eval Launch Lab",
  description:
    "Why this unofficial proof-of-work concept was built, what it demonstrates, and what comes next.",
};

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudyHero />
      <CaseStudyBreakdown />
      <BuildStackSection />
    </>
  );
}
