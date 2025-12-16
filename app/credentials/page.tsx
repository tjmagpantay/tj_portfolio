import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import Image from "next/image";

export default function CredentialsPage() {
  const credentials = {
    certifications: [
      {
        name: "PHILNITS Passer – 2025 (A)",
        title: "IT Passport Examination",
        issuer: "PHILNITS / IPA Philippines",
        date: "2025",
        badge: "/badges/PHILNITS.jpg",
        link: "https://philnits.org/passers-ip/?fbclid=IwY2xjawOt4aBleHRuA2FlbQIxMABicmlkETFkY3Z1MVdkZ0hXV1JrM0Zzc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHntLJpIq4m_AlToeV2oFGseuhF6L2cjJsHf6-mef4vRv1OVc8xrBLN52F2jN_aem_DzkbM6Eswt4IW_LMd3im0w",
      },
      {
        name: "Google Project Management Professional Certificate (v2)",
        issuer: "Google (via Coursera)",
        date: "April 2025",
        focus: "Project Planning, Agile, Stakeholder Management",
        badge: "/badges/Google Project Management Professional Certificate (v2).png",
        link: "https://www.credly.com/badges/2457cf63-b649-4455-92e9-a68787df998a",
      },
      {
        name: "Google AI Essentials",
        issuer: "Google (via Coursera)",
        date: "April 2025",
        focus: "Augment tasks with AI, Use AI responsibly",
        badge: "/badges/Google AI Essentials V1.png",
        link: "https://www.credly.com/badges/c4d19142-b174-4856-9109-3c52f7183de1",
      },
      {
        name: "Google UX Design Professional Certificate",
        issuer: "Google (via Coursera)",
        date: "March 2025",
        focus: "UX Research, Wireframing, Prototyping",
        badge: "/badges/Google UX Design Professional Certificate.png",
        link: "https://www.credly.com/badges/d0c01501-ef3d-4af7-afef-58e815f3fdf6",
      },
      {
        name: "Google Digital Marketing & E-Commerce Professional Certificate",
        issuer: "Google (via Coursera)",
        date: "June 2025",
        focus: "Digital Marketing, E-Commerce, Analytics",
        badge: "/badges/Google Digital Marketing and E-Commerce Professional Certificate.png",
        link: "https://www.credly.com/badges/0493c842-dd42-4d67-9819-cd81eebb4728",
      },
    ],
    aiCloud: [
      {
        name: "AI Fundamentals with IBM SkillsBuild",
        issuer: "IBM",
        date: "June 2025",
        focus: "Artificial Intelligence Fundamentals, AI Concepts",
        badge: "/badges/AI Fundamentals with IBM SkillsBuild.png",
        link: "https://www.credly.com/badges/ca93c55d-264b-4d5e-8087-69cd5c389535",
      },
      {
        name: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        date: "June 2025",
        focus: "AI Basics, Data, Ethical AI",
        badge: "/badges/Artificial Intelligence Fundamentals.png",
        link: "https://www.credly.com/badges/fc06709c-9099-4c46-8c06-5ac64e22b92f",
      },
      {
        name: "AWS Cloud Quest: Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        date: "March 2025",
        focus: "Cloud Fundamentals, AWS Services",
        badge: "/badges/AWS Cloud Quest Cloud Practitioner - Training Badge.png",
        link: "https://www.credly.com/badges/0cbb3e33-4870-4e19-a16b-ae55a81f67f2",
      },
      {
        name: "Best of Next '25",
        issuer: "Google Cloud Asia Pacific",
        date: "May 2025",
        focus: "Cloud Technologies, Google Cloud Innovations",
        badge: "/badges/Best of Next.png",
        link: "https://www.credential.net/07670e6b-1079-4c64-a9d9-429ac44f40dd",
      },
      {
        name: "IBM Z Day 2025 SE – AI & Data",
        issuer: "IBM",
        date: "April 2025",
        focus: "Enterprise AI, Data & Analytics",
        badge: "/badges/IBM Z Day 2025 SE - AI & Data.png",
        link: "https://www.credly.com/badges/6cdbd622-537a-4702-ac9f-9c104fc1545d",
      },
      {
        name: "IBM Z Day 2025 SE – Security",
        issuer: "IBM",
        date: "April 2025",
        focus: "Cybersecurity, Enterprise Security",
        badge: "/badges/IBM Z Day 2025 SE - Security.png",
        link: "https://www.credly.com/badges/877c56ce-c43b-4f02-8f71-2fac7c618325",
      },
      {
        name: "IBM Z Xplore – Concepts",
        issuer: "IBM",
        date: "April 2025",
        focus: "Mainframe Concepts, Enterprise Computing",
        badge: "/badges/IBM Z Xplore - Concepts.png",
        link: "https://www.credly.com/badges/dd2ea2f1-d464-44ef-8908-4fc18b876337",
      },
    ],
  };

  const renderCredentialCard = (credential: any, index: number) => (
    <a
      key={index}
      href={credential.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="p-4 sm:p-6 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Badge Image */}
          <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden">
            <Image
              src={credential.badge}
              alt={credential.name}
              width={96}
              height={96}
              className="object-contain w-full h-full"
            />
          </div>

        {/* Credential Info */}
        <div className="flex-1 space-y-2">
          <h3 className="text-base font-semibold text-foreground leading-tight">
            {credential.name}
          </h3>
          {credential.title && (
            <p className="text-sm text-muted-foreground">{credential.title}</p>
          )}
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Award className="h-3.5 w-3.5" />
              {credential.issuer}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {credential.date}
            </span>
          </div>
          {credential.focus && (
            <p className="text-xs text-muted-foreground pt-1">
              Focus: {credential.focus}
            </p>
          )}
        </div>
      </div>
    </Card>
    </a>
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Certifications & Licenses */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">
            Certifications & Licenses
          </h2>
          <p className="text-sm text-muted-foreground">
            Professional certifications and official licenses
          </p>
        </div>
        <div className="space-y-3">
          {credentials.certifications.map(renderCredentialCard)}
        </div>
      </div>

      {/* AI & Cloud */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">
            AI & Cloud Technologies
          </h2>
          <p className="text-sm text-muted-foreground">
            Artificial Intelligence and Cloud Computing credentials
          </p>
        </div>
        <div className="space-y-3">
          {credentials.aiCloud.map(renderCredentialCard)}
        </div>
      </div>
    </div>
  );
}
