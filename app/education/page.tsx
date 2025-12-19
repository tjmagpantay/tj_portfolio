import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, GraduationCap } from "lucide-react";

export default function EducationPage() {
  const education = [
    {
      school: "Batangas State University – TNEU Lipa",
      location: "Lipa, Batangas",
      degree: "Bachelor of Science in Information Technology",
      gwa: "INC man daw kami sa capstone",
      period: "Expected Graduation: July 2026",
      achievement: "Dean's Lister (1st Year – Present)",
    },
    {
      school: "STI College Batangas",
      location: "Kumintang Ibaba, Batangas City",
      degree: "IT in Mobile App and Web Development",
      gwa: "95",
      period: "September 2020 - June 2022",
      achievement: "Best Work Immersion (2022)",
    },
    {
      school: "Bigain Integrated School",
      location: "Bigain South San Jose, Batangas",
      degree: "Secondary Education",
      gwa: null,
      period: "2016 - 2020",
      achievement: "Graduated with honors",
    },
    {
      school: "Bigain Elementary School",
      location: "Bigain South San Jose, Batangas",
      degree: "Primary Education",
      gwa: null,
      period: "2010 - 2016",
      achievement: "Graduated with honors",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {education.map((edu, index) => (
        <Card key={index} className="p-4 sm:p-6 border border-border bg-card">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-foreground mb-1">
                {edu.school}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{edu.degree}</p>
            </div>
            <Badge variant="secondary" className="text-xs w-fit">
              {edu.period}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{edu.location}</span>
            </div>

            {edu.gwa && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <GraduationCap className="h-3 w-3" />
                <span>GWA: {edu.gwa}</span>
              </div>
            )}

            {edu.achievement && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Award className="h-3 w-3" />
                <span>Honors: {edu.achievement}</span>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
