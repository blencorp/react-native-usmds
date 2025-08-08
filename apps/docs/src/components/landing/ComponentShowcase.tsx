'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComponentShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Popular Components
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Badge Preview */}
          <Link href="/docs/components/badge" className="group">
            <Card className="hover:border-blue-500 transition">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600">Badge</CardTitle>
              </CardHeader>
              <CardContent className="space-x-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge className="bg-blue-500 text-white">Custom</Badge>
                <p className="text-blue-600 font-medium mt-4">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Button Preview */}
          <Link href="/docs/components/button" className="group">
            <Card className="hover:border-blue-500 transition">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600">Button</CardTitle>
              </CardHeader>
              <CardContent className="space-x-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <p className="text-blue-600 font-medium mt-4">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Card Preview */}
          <Link href="/docs/components/card" className="group">
            <Card className="hover:border-blue-500 transition">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600">Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A flexible container to group related content and actions.
                </p>
                <p className="text-blue-600 font-medium mt-4">View component →</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* View All Components CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/docs/components">View All Components</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
