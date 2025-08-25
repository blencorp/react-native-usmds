"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon"; 

export function ComponentShowcase() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-muted py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Popular Components
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Badge Preview */}
          <Link
            href="/docs/components/badge"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Badge</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-x-2 mb-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge className="bg-primary text-primary-foreground">Custom</Badge>
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Button Preview */}
          <Link
            href="/docs/components/button"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Button</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-x-2 mb-4">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Card Preview */}
          <Link
            href="/docs/components/card"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Card</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <Card className="bg-muted p-2 mb-4 border border-border rounded">
                  <p className="text-sm text-muted-foreground">Mini Card Preview</p>
                </Card>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Checkbox Preview */}
          <Link
            href="/docs/components/checkbox"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Checkbox</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mb-4">
                  <Checkbox id="checkbox-1" />
                  <Checkbox id="checkbox-2" defaultChecked />
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Checkbox Tile Preview */}
          <Link
            href="/docs/components/checkbox-tile"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Checkbox Tile</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex space-x-2 mb-4">
                  <Card className="flex-1 p-2 text-center border border-border rounded">Tile 1</Card>
                  <Card className="flex-1 p-2 text-center border border-border rounded">Tile 2</Card>
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Icon Preview */}
          <Link
            href="/docs/components/icon"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">Icon</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex space-x-2 mb-4">
                  <Icon name="check" />
                  <Icon name="close" />
                  <Icon name="info" />
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/docs/components">View All Components</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
