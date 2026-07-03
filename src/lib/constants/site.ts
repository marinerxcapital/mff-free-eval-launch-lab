import { DISCLAIMER } from "@/data/disclaimers";
import type { SiteMeta } from "@/types/site";

export const SITE: SiteMeta = {
  name: "MFF Free Eval Launch Lab",
  tagline: "A premium campaign concept for MyFundedFutures",
  description:
    "An unofficial proof-of-work campaign concept demonstrating premium, AI-assisted landing page design for MyFundedFutures free evaluations.",
  disclaimer: DISCLAIMER,
};

export const SITE_NAME = SITE.name;
export const DISCLAIMER_TEXT = SITE.disclaimer;
