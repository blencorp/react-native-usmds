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
        "Works seamlessly on both iOS and Android platforms with consistent behavior.",
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
        "Easily adapt components to your specific requirements while maintaining design consistency.",
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
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-muted py-10"
    >
      <div className="container px-4 md:px-8">
        <h2 id="features-heading" className="sr-only">
          Key features
        </h2>

        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <li key={index}>
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                    {feature.certified && (
                      <Badge className="bg-[var(--usa-color-blue-60v,#005ea2)] text-[var(--usa-base-lightest,#ffffff)]">
                        Certified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
