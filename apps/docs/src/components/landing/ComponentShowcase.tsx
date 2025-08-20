"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComponentShowcase() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-muted py-16">
      <div className="container px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Popular Components
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-stretch auto-rows-fr">
          {/* Badge */}
          <Link
            href="/docs/components/badge"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full flex flex-col min-h-[16rem] bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader className="min-h-14">
                <CardTitle className="group-hover:text-primary">
                  Badge
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-x-2 mb-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Custom
                  </Badge>
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Button */}
          <Link
            href="/docs/components/button"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full flex flex-col min-h-[16rem] bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader className="min-h-14">
                <CardTitle className="group-hover:text-primary">
                  Button
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-x-2 mb-3">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>

          {/* Card */}
          <Link
            href="/docs/components/card"
            className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Card className="h-full flex flex-col min-h-[16rem] bg-card text-card-foreground border-border hover:border-primary transition">
              <CardHeader className="min-h-14">
                <CardTitle className="group-hover:text-primary">Card</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground mb-3">
                  A flexible container to group related content and actions.
                </p>
                <p className="text-primary font-medium">View component →</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/docs/components">View All Components</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
