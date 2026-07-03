import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AccountPathCards } from "@/components/sections/AccountPathCards";
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline";
import { RuleClaritySection } from "@/components/sections/RuleClaritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "MFF Free Eval Launch Lab — Premium Evaluation Campaign Concept",
  description:
    "An unofficial proof-of-work campaign concept for MyFundedFutures free futures evaluations.",
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AccountPathCards />
      <HowItWorksTimeline />
      <RuleClaritySection />
      <FinalCTASection />
    </>
  );
}
