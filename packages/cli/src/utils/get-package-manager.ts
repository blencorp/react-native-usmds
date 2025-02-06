import { detect } from "@antfu/ni";

export async function getPackageManager(targetDir: string): Promise<"yarn" | "npm"> {
  // We'll support just yarn and npm initially
  const packageManager = await detect({ programmatic: true, cwd: targetDir });
  return packageManager === "yarn@berry" ? "yarn" : "npm";
} 