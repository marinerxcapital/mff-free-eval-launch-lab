import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    project: "MFF Free Eval Launch Lab",
  });
}
