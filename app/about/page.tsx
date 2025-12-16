import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const education = [
    {
      degree:
        "Bachelor of Science in Information Technology Major in Service Management",
      institution: "Batangas State University TNEU – Lipa Campus",
      period: "2022 - 2026",
    },
    {
      degree: "TVL-ICT - Mobile App and Web Development",
      institution: "STI College Batangas",
      period: "2020 - 2022",
    },
  ];

  const experience = [
    {
      role: "Web/Mobile App Developer",
      company: "Freelance",
      period: "2025 - Present",
    },
    {
      role: "Associate Project Manager for Product and Innovation",
      company: "Tech Executive Labs",
      period: "Feb 2025 - Dec 2025",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Introduction Card */}
      <Card className="p-4 sm:p-6 border border-border bg-card">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Hi there!
        </p>
        <p className="text-base text-foreground font-medium">
          I'm Tammy Jane M. Magpantay
        </p>
      </Card>

      {/* About Description Card */}
      <Card className="p-4 sm:p-6 border border-border bg-card">
        <p className="text-sm text-muted-foreground leading-relaxed">
          I'm a curious developer, designer, and IT enthusiast currently
          studying at Batangas State University TNEU – Lipa Campus. I build
          user-focused web experiences—from clean front-end interfaces to
          functional back-end systems. I don't just code; I design, iterate, and
          debug with intention. I enjoy exploring new technologies, continuously
          learning, and widening my horizons through deep curiosity.
        </p>
      </Card>

      {/* Education Card */}
      <Card className="p-4 sm:p-6 border border-border bg-card">
        <h2 className="text-sm text-muted-foreground leading-relaxed">
          Education
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-4 sm:pl-6">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground/50" />
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+1rem)] bg-border" />
              )}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-normal text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground sm:whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Experience Card */}
      <Card className="p-4 sm:p-6 border border-border bg-card">
        <h2 className="text-sm text-muted-foreground leading-relaxed">
          Experience
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-4 sm:pl-6">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground/50" />
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+1rem)] bg-border" />
              )}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground sm:whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
