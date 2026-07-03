import type {
  CampaignAudience,
  CampaignCta,
  CampaignOffer,
  CampaignTone,
  CampaignType,
} from "@/types/campaign";

export const campaignTypeCopy: Record<CampaignType, string> = {
  "free-evaluation": "Free Evaluation",
  "builder-plan": "Builder Plan",
  "payout-promo": "Payout Promo",
  "trader-education": "Trader Education",
  "holiday-campaign": "Holiday Campaign",
};

export const audienceCopy: Record<CampaignAudience, string> = {
  "new-futures-traders": "new futures traders",
  "experienced-futures-traders": "experienced futures traders",
  "failed-prior-evaluations": "traders who fell short on a prior evaluation",
  "payout-focused-traders": "traders focused on reaching payout",
};

export const toneCopy: Record<CampaignTone, string> = {
  premium: "premium",
  direct: "direct",
  urgent: "urgent",
  educational: "educational",
  institutional: "institutional",
};

export const offerCopy: Record<CampaignOffer, string> = {
  "free-eval": "a free evaluation",
  "limited-time-discount": "a limited-time discount",
  "fast-track-evaluation": "a fast-track evaluation",
  "payout-readiness": "a payout readiness path",
};

export const ctaCopy: Record<CampaignCta, string> = {
  "start-free-evaluation": "Start Free Evaluation",
  "launch-evaluation": "Launch Evaluation",
  "view-account-paths": "View Account Paths",
  "learn-the-rules": "Learn the Rules",
};
