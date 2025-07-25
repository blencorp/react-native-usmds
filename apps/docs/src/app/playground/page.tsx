"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "./ErrorBoundary";
import { fetchComponentMetadata } from "../../lib/source";

// Lazy-load the live preview (client-side only)
const LivePreview = dynamic(() => import("./livePreview"), { ssr: false });

// Sample JSX to render components from components-web
const initialCode = `// ✨ Welcome to the USMDS Playground!
// Start typing your JSX code here...

// Example usage:
<>
  <Alert
    variant="info"
    alertStyle="default"
    title="Heads up!"
    description={{ body: "This is an alert with a link.", link: "https://usmds.gov" }}
  />

  <Card>
    <p>This is a card component.</p>
  </Card>

  <Input
    value="Hello"
    onChange={() => {}}
    placeholder="Type here..."
  />

  <Button onClick={() => alert("Clicked!")}>Click Me</Button>

  <Badge label="New" color="green" />
</>
`.trim();

export default function PlaygroundPage() {
  const [code, setCode] = useState(initialCode);
  const [metadata, setMetadata] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchComponentMetadata()
      .then((data) => setMetadata(data))
      .finally(() => setLoading(false));
  }, []);

  const resetCode = () => setCode(initialCode);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 min-h-[500px]">
      <section className="flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Code Editor</h2>
        <textarea
          className="flex-grow font-mono p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={resetCode}
          className="mt-3 self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Reset Code
        </button>
      </section>

      <section className="flex flex-col border rounded p-4 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
        {loading && <p>Loading metadata...</p>}
        {!loading && metadata && (
          <ErrorBoundary>
            {code.trim().length === 0 || code.trim().startsWith("//") ? (
              <div className="text-gray-500 italic text-sm flex items-start gap-2">
                ✨
                <span>
                  Start typing JSX code in the editor to see it live here.
                  <br />
                  Example: <code className="text-gray-600">&lt;h1&gt;Hello World&lt;/h1&gt;</code>
                </span>
              </div>
            ) : (
              <LivePreview code={code} />
            )}
          </ErrorBoundary>
        )}
      </section>
    </div>
  );
}
