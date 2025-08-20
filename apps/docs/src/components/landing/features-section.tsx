"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Eye, Landmark, TabletSmartphone } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Section 508 Compliant",
      description:
        "Built with accessibility in mind. All components meet WCAG standards and are tested for screen readers.",
      icon: (
        <Eye
          aria-hidden="true"
          className="h-10 w-10 text-[var(--usa-color-green-50v,#2e8540)]"
        />
      ),
      certified: true,
    },
    {
      title: "Cross-Platform Ready",
      description:
        "Works seamlessly on both iOS and Android with consistent behavior.",
      icon: (
        <TabletSmartphone
          aria-hidden="true"
          className="h-10 w-10 text-[var(--usa-color-blue-60v,#005ea2)]"
        />
      ),
      certified: true,
    },
    {
      title: "Government Approved",
      description: "Meets federal government design and security requirements.",
      icon: (
        <Landmark
          aria-hidden="true"
          className="h-10 w-10 text-[var(--usa-color-gold-30v,#f9c642)]"
        />
      ),
      certified: true,
    },
    {
      title: "Developer Friendly",
      description:
        "Adapt components to your needs while maintaining design consistency.",
      icon: (
        <Code
          aria-hidden="true"
          className="h-10 w-10 text-[var(--usa-color-violet-60v,#54278f)]"
        />
      ),
      certified: true,
    },
  ];

  return (
    <section
      aria-labelledby="features-heading"
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-muted py-16"
    >
      <div className="container px-4 md:px-8">
        <h2
          id="features-heading"
          className="text-3xl font-bold text-center mb-10 text-foreground"
        >
          Key Features
        </h2>

        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch auto-rows-fr"
        >
          {features.map((f, i) => (
            <li key={i}>
              <Card className="h-full flex flex-col min-h-[16rem] bg-card text-card-foreground border-border">
                <CardHeader className="min-h-14 flex flex-row items-center gap-4">
                  {f.icon}
                  <div>
                    <CardTitle>{f.title}</CardTitle>
                    {f.certified && (
                      <Badge className="bg-primary text-primary-foreground mt-2">
                        Certified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
