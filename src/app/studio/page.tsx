"use client";

import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { StudioGenerator } from "@/components/sections/StudioGenerator";
import { StudioPreview } from "@/components/sections/StudioPreview";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { mockCampaignGenerator } from "@/lib/ai/mockCampaignGenerator";
import { trackEvent } from "@/lib/analytics/events";
import type { CampaignInput, GeneratedCampaign } from "@/types/campaign";

const defaultInput: CampaignInput = {
  campaignType: "free-evaluation",
  audience: "new-futures-traders",
  tone: "premium",
  offer: "free-eval",
  cta: "start-free-evaluation",
};

export default function StudioPage() {
  const [input, setInput] = useState<CampaignInput>(defaultInput);
  const [generated, setGenerated] = useState<GeneratedCampaign | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    trackEvent("studio_generate_click", { ...input });

    try {
      const response = await fetch("/api/campaign/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: GeneratedCampaign = await response.json();
      setGenerated(data);
      trackEvent("studio_generate_success");
    } catch (error) {
      trackEvent("studio_generate_error", {
        message: error instanceof Error ? error.message : "unknown",
      });
      setGenerated(mockCampaignGenerator(input));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section">
      <PageShell>
        <FadeIn>
          <div className="max-w-2xl">
            <Badge variant="gold">Simulated / Demo Only</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-5xl">
              AI Campaign Studio
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              A mock internal tool showing how MyFundedFutures could generate
              campaign copy and sections with AI. Not affiliated with
              MyFundedFutures.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <StudioGenerator
              value={input}
              onChange={setInput}
              onGenerate={handleGenerate}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:col-span-3">
            <StudioPreview generated={generated} isLoading={isLoading} />
          </div>
        </div>
      </PageShell>
    </div>
  );
}
