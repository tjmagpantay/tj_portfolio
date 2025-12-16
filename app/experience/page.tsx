import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Freelance",
      period: "June 2025 – Present",
      description:
        "Developed fullstack applications including web-based, mobile, and software applications tailored to client needs and requirements.",
    },
    {
      role: "Associate Project Manager for Product and Innovation",
      company: "Tech Executive Labs",
      period: "February 2025 - Present",
      description:
        "Designed user-centric prototypes and UI/UX flows using Figma, improving design clarity and development efficiency. Supported innovation initiatives by contributing to product ideation, market research, and validation strategies.",
      tools: "Figma, Adobe Illustrator, Canva",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="p-4 sm:p-6 border border-border bg-card">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <h3 className="text-base font-semibold text-foreground">
              {exp.role}
            </h3>
            <Badge variant="secondary" className="text-xs w-fit">
              {exp.period}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
          {exp.tools && (
            <p className="text-xs text-muted-foreground mt-3">
              <span className="font-medium">Tools:</span> {exp.tools}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
