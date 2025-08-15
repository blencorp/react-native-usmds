import { notFound } from "next/navigation";

export default async function Page() {
  // Temporarily disable docs pages to fix build
  notFound();

  // This code will be restored once we have proper MDX components
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Documentation
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Documentation pages are temporarily disabled while we update the system.
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata() {
  return {
    title: "Documentation",
    description: "USMDS Documentation",
  };
}
