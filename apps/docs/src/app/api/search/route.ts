import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
import { NextRequest } from "next/server";

// Use dynamic import to avoid SWC helper issues
export async function GET(request: NextRequest) {
  const handler = await createFromSource(source);
  return handler.GET(request);
}
