"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComponentShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Popular Components
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Badge Preview */}
          <Link href="/docs/components/badge" className="group h-full">
            <Card className="hover:border-blue-800 dark:hover:border-blue-400 transition bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-800 dark:group-hover:text-blue-400 text-gray-900 dark:text-white">
                  Badge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-x-2 flex-1 flex flex-col justify-between">
                <div className="space-x-2 mb-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge className="bg-blue-800 text-white">Custom</Badge>
                </div>
                <p className="text-blue-800 dark:text-blue-400 font-medium">
                  View component →
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Button Preview */}
          <Link href="/docs/components/button" className="group h-full">
            <Card className="hover:border-blue-800 dark:hover:border-blue-400 transition bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-800 dark:group-hover:text-blue-400 text-gray-900 dark:text-white">
                  Button
                </CardTitle>
              </CardHeader>
              <CardContent className="space-x-2 flex-1 flex flex-col justify-between">
                <div className="space-x-2 space-y-2 mb-4">
                  <Button className="bg-blue-800 hover:bg-blue-900">
                    Primary
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white bg-transparent"
                  >
                    Outline
                  </Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <p className="text-blue-800 dark:text-blue-400 font-medium">
                  View component →
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Card Preview */}
          <Link href="/docs/components/card" className="group h-full">
            <Card className="hover:border-blue-800 dark:hover:border-blue-400 transition bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-800 dark:group-hover:text-blue-400 text-gray-900 dark:text-white">
                  Card
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A flexible container to group related content and actions.
                </p>
                <p className="text-blue-800 dark:text-blue-400 font-medium">
                  View component →
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* View All Components CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-800 hover:bg-blue-900 text-white"
          >
            <Link href="/docs/components">View All Components</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
