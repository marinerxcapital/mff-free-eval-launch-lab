import type { CampaignInput, GeneratedCampaign } from "@/types/campaign";
import { ctaCopy, offerCopy } from "@/lib/ai/campaignTypes";

const headlinesByType: Record<CampaignInput["campaignType"], string[]> = {
  "free-evaluation": [
    "Your Futures Evaluation Starts Here",
    "Prove Your Edge. Start Free.",
    "The Evaluation Built for Traders Who Are Ready",
  ],
  "builder-plan": [
    "Build Your Path to Funded Capital",
    "A Builder Plan for Traders Who Play the Long Game",
    "Step Into Size, One Milestone at a Time",
  ],
  "payout-promo": [
    "Closer to Payout Than You Think",
    "This Is What Payout-Ready Looks Like",
    "Your Payout Path, Made Clear",
  ],
  "trader-education": [
    "Know the Rules Before You Risk Capital",
    "Trade Smarter With Clarity, Not Guesswork",
    "The Rules Explained Before You Need Them",
  ],
  "holiday-campaign": [
    "A Funded Start to the New Season",
    "This Season, Trade With a Plan",
    "Your Next Evaluation Starts Now",
  ],
};

const toneAdjective: Record<CampaignInput["tone"], string> = {
  premium: "refined",
  direct: "straightforward",
  urgent: "time-sensitive",
  educational: "clear",
  institutional: "disciplined",
};

const audienceLine: Record<CampaignInput["audience"], string> = {
  "new-futures-traders":
    "built for traders taking their first serious step into funded futures",
  "experienced-futures-traders":
    "built for traders who already know the charts and are ready for structure",
  "failed-prior-evaluations":
    "built for traders who fell short before and want a cleaner second attempt",
  "payout-focused-traders":
    "built for traders who care about one thing: reaching payout",
};

function pick<T>(items: T[], seed: number): T {
  return items[seed % items.length];
}

function seedFromInput(input: CampaignInput): number {
  const combined = `${input.campaignType}-${input.audience}-${input.tone}-${input.offer}-${input.cta}`;
  let hash = 0;
  for (let i = 0; i < combined.length; i += 1) {
    hash = (hash * 31 + combined.charCodeAt(i)) % 100000;
  }
  return hash;
}

export function mockCampaignGenerator(input: CampaignInput): GeneratedCampaign {
  const seed = seedFromInput(input);
  const heroHeadline = pick(headlinesByType[input.campaignType], seed);
  const ctaLabel = ctaCopy[input.cta];
  const offerLabel = offerCopy[input.offer];

  const subheadline = `A ${toneAdjective[input.tone]} campaign concept offering ${offerLabel}, ${audienceLine[input.audience]}.`;

  const features = [
    {
      title: "Clear Rules Up Front",
      description:
        "Profit targets, loss limits, and contract sizing shown before any capital is risked.",
    },
    {
      title: "Fast, Focused Path",
      description: `A campaign built around ${offerLabel} with no unnecessary steps between attention and action.`,
    },
    {
      title: "Consistent Brand Experience",
      description:
        "Every surface, from hero to footer, reflects one disciplined, institutional standard.",
    },
  ];

  const faq = [
    {
      question: "Is this an official MyFundedFutures page?",
      answer:
        "No. This is an unofficial proof-of-work concept built with simulated demo data, not a real MyFundedFutures product.",
    },
    {
      question: `What does "${offerLabel}" mean here?`,
      answer:
        "It represents the featured promotion angle for this generated campaign concept, shown for demonstration purposes only.",
    },
    {
      question: "Can I use this copy in a real campaign?",
      answer:
        "This output is a starting draft. A production campaign would pair it with verified rules and legal review.",
    },
  ];

  const xPost = `New campaign concept: "${heroHeadline}" — offering ${offerLabel}, ${audienceLine[input.audience]}. ${ctaLabel}. Built with AI-assisted design. (Simulated demo)`;

  const offerTitleCase = `${offerLabel[0].toUpperCase()}${offerLabel.slice(1)}`.replace(
    /^A(n)? /,
    "Your "
  );
  const emailSubject = `${ctaLabel}: ${offerTitleCase} Is Ready`;

  return {
    heroHeadline,
    subheadline,
    cta: ctaLabel,
    features,
    faq,
    xPost,
    emailSubject,
  };
}
