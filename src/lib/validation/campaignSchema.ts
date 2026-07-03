import { z } from "zod";

export const campaignSchema = z.object({
  campaignType: z.enum([
    "free-evaluation",
    "builder-plan",
    "payout-promo",
    "trader-education",
    "holiday-campaign",
  ]),
  audience: z.enum([
    "new-futures-traders",
    "experienced-futures-traders",
    "failed-prior-evaluations",
    "payout-focused-traders",
  ]),
  tone: z.enum(["premium", "direct", "urgent", "educational", "institutional"]),
  offer: z.enum([
    "free-eval",
    "limited-time-discount",
    "fast-track-evaluation",
    "payout-readiness",
  ]),
  cta: z.enum([
    "start-free-evaluation",
    "launch-evaluation",
    "view-account-paths",
    "learn-the-rules",
  ]),
});

export type CampaignFormInput = z.infer<typeof campaignSchema>;
