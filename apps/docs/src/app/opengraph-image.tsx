import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = {
  width: 3600,
  height: 1890,
};

export const contentType = "image/png";

export const runtime = "nodejs";

const ogImagePath = path.join(process.cwd(), "images/og.png");
let cachedImage: Buffer | null = null;

async function loadImage() {
  if (!cachedImage) {
    cachedImage = await readFile(ogImagePath);
  }

  return cachedImage;
}

export default async function OpenGraphImage() {
  const imageBuffer = await loadImage();

  return new NextResponse(imageBuffer, {
    headers: {
      "Content-Type": contentType,
    },
  });
}
