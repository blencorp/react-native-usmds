'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Eye, Landmark, TabletSmartphone } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Section 508 Compliant",
      description: "Built with accessibility in mind. All components meet WCAG standards and are tested for screen readers.",
      icon: <Eye className="h-10 w-10 text-green-500" />,
      certified: true
    },
    {
      title: "Cross-Platform Ready",
      description: "Works seamlessly on both iOS and Android platforms with consistent behavior.",
      icon: <TabletSmartphone className="h-10 w-10 text-blue-500" />,
      certified: true
    },
    {
      title: "Government Approved",
      description: "Meets federal government design and security requirements.",
      icon: <Landmark className="h-10 w-10 text-yellow-500" />,
      certified: true
    },
    {
      title: "Developer Friendly",
      description: "Easily adapt components to your specific requirements while maintaining design consistency.",
      icon: <Code className="h-10 w-10 text-purple-500" />,
      certified: true
    }
  ];

  return (
    <section className="container px-4 py-10 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4 text-xl font-bold">
              {feature.icon}
              <div>
                <CardTitle>{feature.title}</CardTitle>
                {feature.certified && (
                  <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
                    Certified
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}