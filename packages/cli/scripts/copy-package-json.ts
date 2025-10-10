import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));

const distPackageJson = {
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  type: packageJson.type,
  license: packageJson.license,
  bin: packageJson.bin,
  repository: packageJson.repository,
  dependencies: packageJson.dependencies,
  keywords: packageJson.keywords,
  author: packageJson.author,
};

writeFileSync(
  join("dist", "package.json"),
  JSON.stringify(distPackageJson, null, 2) + "\n"
);

console.log("✅ Copied package.json to dist/");
