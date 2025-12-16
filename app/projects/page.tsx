import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      category: "Web Development",
      title: "Portfolio Website",
      subtitle: "Personal Brand & Showcase",
      description:
        "A modern, responsive portfolio website built with Next.js and shadcn/ui. Designed with a clean UI, smooth navigation, and optimized performance to effectively showcase projects, skills, and professional experience.",
      tags: ["2025", "Next.js", "TypeScript"],
      pillLabel: "Project",
      image: "/projects-img/1.png",
    },
    {
      category: "Web Platform",
      title: "SIKAP",
      subtitle: "Employment Platform",
      description:
        "Led a team in developing a web-based employment platform for PESO Rosario, Batangas. The system features machine learning–based job recommendations to match jobseekers with suitable opportunities.",
      tags: [
        "Jan 2025 – Dec 2025",
        "PHP",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      pillLabel: "Project",
      image: "/projects-img/2.png",
    },
    {
      category: "Mobile App",
      title: "SIKAP Mobile App",
      subtitle: "Employment Platform (Mobile)",
      description:
        "Developed the mobile version of the SIKAP employment platform, showcasing core features such as job browsing, saving jobs, profile viewing, and job recommendations.",
      tags: ["Jun 2025 – Aug 2025", "Flutter", "PHP"],
      pillLabel: "Project",
      image: "/projects-img/3.png",
    },
    {
      category: "E-commerce",
      title: "OrgReserve Space",
      subtitle: "E-commerce / Reservation System",
      description:
        "Led a team in developing a PHP and Bootstrap-based web application that streamlines student apparel and merchandise reservations for university organizations.",
      tags: ["Aug 2024 – Dec 2024", "PHP", "Bootstrap"],
      pillLabel: "Project",
      image: "/projects-img/4.png",
    },
    {
      category: "Game Development",
      title: "Spartan Odyssey: The Programming Realm",
      subtitle: "Adventure & Edutainment Game",
      description:
        "An educational adventure game designed to enhance programming skills through interactive gameplay. The game focuses on SQL concepts, combining learning and entertainment across multiple levels with corresponding learning modules.",
      tags: ["Jan 2024 – Apr 2024", "Game Dev", "Godot Engine"],
      pillLabel: "Project",
      image: "/projects-img/5.png",
    },
    {
      category: "Web Development",
      title: "Spartan Odyssey: The Programming Realm Website",
      subtitle: "Game Companion & Player Dashboard",
      description:
        "A companion web application that serves as a guide for players of Spartan Odyssey. The website provides game instructions, tutorials, and documentation, and is integrated with player accounts. Logged-in users can view their game progress, including completed levels, achievements, and other in-game details through a connected dashboard.",
      tags: ["Jan 2024 – Apr 2024", "Web Dev", "PHP", "SQLite"],
      pillLabel: "Project",
      image: "/projects-img/6.png",
    },

    {
      category: "AI / Chatbot",
      title: "Mechamaru: Chatbot Companion",
      subtitle: "Chatbot Application",
      description:
        "Built a simple Python-based chatbot that allows users to interact and ask questions related to technology topics.",
      tags: ["2024", "Python"],
      pillLabel: "Project",
      image: "/projects-img/7.png",
    },
    {
      category: "Education",
      title: "BSU – Learning Management System (LMS)",
      subtitle: "Learning Management System",
      description:
        "Developed a basic LMS that allows users to add subjects, enroll in courses, and manage lessons, tests, and practice quizzes.",
      tags: ["Sep 2023 – Oct 2023", "Java"],
      pillLabel: "Project",
      image: "/projects-img/8.png",
    },
    {
      category: "Console App",
      title: "ICT Student Management System",
      subtitle: "Console Application",
      description:
        "Created a simple console-based system for managing student information, including basic CRUD functionalities.",
      tags: ["2023", "C++"],
      pillLabel: "Project",
      image: "/projects-img/9.png",
    },
    {
      category: "Game Development",
      title: "FallenVenture",
      subtitle: "Platformer Game",
      description:
        "A simple platformer game inspired by classic titles like Super Mario. Designed to help users improve critical thinking skills by navigating obstacles and completing levels.",
      tags: ["Jan 2022 – Apr 2022", "C#"],
      pillLabel: "Project",
      image: "/projects-img/10.png",
    },
    {
      category: "Desktop App",
      title: "Airline Reservation Management System",
      subtitle: "Desktop Application",
      description:
        "Developed a GUI-based system for managing airline passengers and flight ticket reservations.",
      tags: ["Jan 2021 – Apr 2021", "Java"],
      pillLabel: "Project",
      image: "/projects-img/11.png",
    },
    {
      category: "Mobile App",
      title: "Appointment Mobile App",
      subtitle: "Healthcare Application",
      description:
        "Developed a mobile application that allows clients to schedule appointments for clinic services.",
      tags: ["2024", "React Native"],
      pillLabel: "Freelance",
      image: "/projects-img/12.png",
    },
    {
      category: "Software App",
      title: "VOR Navigation System",
      subtitle: "Aviation Software Application",
      description:
        "Developed a software application for an aviation client, integrating software and hardware components. The system focuses on binding controls, where gauges and controllers are operated using a game controller.",
      tags: ["2024", "Python"],
      pillLabel: "Freelance",
      image: "/projects-img/13.png",
    },
    {
      category: "Management System",
      title: "Gym Management System",
      subtitle: "Management System",
      description:
        "Developed a basic management system for handling gym operations and member records.",
      tags: ["2023", "C++"],
      pillLabel: "Freelance",
      image: "/projects-img/14.png",
    },
    {
      category: "Point of Sale",
      title: "Coffee POS System",
      subtitle: "Point of Sale System",
      description:
        "Built a simple POS system for coffee shops to manage orders and transactions.",
      tags: ["2023", "C++"],
      pillLabel: "Freelance",
      image: "/projects-img/15.png",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="relative">
          {/* Floating Pill Button */}
          <div className="absolute -top-3 right-4 sm:right-6 z-10">
            <div className="bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
              {project.pillLabel}
            </div>
          </div>

          {/* Main Project Card */}
          <Card className="p-6 sm:p-8 border border-border bg-card rounded-2xl hover:border-muted-foreground/30 transition-all">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left Content Area */}
              <div className="flex-1 space-y-4">
                {/* Category Label */}
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {project.category}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-base text-muted-foreground font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Bottom Tag/Badge */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-accent/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Right Visual Space (Optional) */}
              <div className="hidden lg:block lg:w-48 xl:w-64 flex-shrink-0">
                <div className="w-full h-full min-h-[200px] bg-card rounded-xl border border-border overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={256}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
