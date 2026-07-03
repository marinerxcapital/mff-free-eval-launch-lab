export type CampaignType =
  | "free-evaluation"
  | "builder-plan"
  | "payout-promo"
  | "trader-education"
  | "holiday-campaign";

export type CampaignAudience =
  | "new-futures-traders"
  | "experienced-futures-traders"
  | "failed-prior-evaluations"
  | "payout-focused-traders";

export type CampaignTone =
  | "premium"
  | "direct"
  | "urgent"
  | "educational"
  | "institutional";

export type CampaignOffer =
  | "free-eval"
  | "limited-time-discount"
  | "fast-track-evaluation"
  | "payout-readiness";

export type CampaignCta =
  | "start-free-evaluation"
  | "launch-evaluation"
  | "view-account-paths"
  | "learn-the-rules";

export interface CampaignInput {
  campaignType: CampaignType;
  audience: CampaignAudience;
  tone: CampaignTone;
  offer: CampaignOffer;
  cta: CampaignCta;
}

export interface CampaignFeature {
  title: string;
  description: string;
}

export interface CampaignFaqItem {
  question: string;
  answer: string;
}

export interface GeneratedCampaign {
  heroHeadline: string;
  subheadline: string;
  cta: string;
  features: CampaignFeature[];
  faq: CampaignFaqItem[];
  xPost: string;
  emailSubject: string;
}
