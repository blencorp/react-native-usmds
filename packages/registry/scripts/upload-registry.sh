#!/bin/bash
set -e

# Get the directory where the script is located and go to package root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PACKAGE_ROOT"

echo "Building registry..."
npx shadcn build ./registry/usa.json --output ./public/r/usa

echo "Uploading to GCS with cache headers..."
gsutil -m -h "Cache-Control:no-cache, max-age=0" cp -r ./public/r/usa/*.json gs://usmds-registry/r/usa/

echo "Registry uploaded successfully!"
echo "Public URL: https://storage.googleapis.com/usmds-registry/r/usa/"
