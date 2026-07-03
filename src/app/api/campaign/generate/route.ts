import { NextRequest, NextResponse } from "next/server";
import { mockCampaignGenerator } from "@/lib/ai/mockCampaignGenerator";
import { campaignSchema } from "@/lib/validation/campaignSchema";

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = campaignSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid campaign input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const result = mockCampaignGenerator(parsed.data);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
