"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MapPin, Award, GraduationCap, Calendar } from "lucide-react";
import EventImageDialog from "@/components/EventImageDialog";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const introTexts = [
    { text: "Hey, I'm Tj" },
    { text: "IT Professional in progress" },
    { text: "I turn ideas into digital realities" },
  ];

  useEffect(() => {
    if (currentStep < introTexts.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 400);

      // Show main content
      const showTimer = setTimeout(() => {
        setShowMain(true);
      }, 1200);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(showTimer);
      };
    }
  }, [currentStep, introTexts.length]);

  const getAnimationClass = (index: number) => {
    if (currentStep === index) {
      return "translate-y-0";
    } else if (currentStep > index) {
      return "-translate-y-full";
    } else {
      return "translate-y-full";
    }
  };

  // Data for all sections
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

  const experienceTimeline = [
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

  const educationFull = [
    {
      school: "Batangas State University – TNEU Lipa",
      location: "Lipa, Batangas",
      degree: "Bachelor of Science in Information Technology",
      gwa: "1.26",
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

  const tools = {
    Languages: [
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "TypeScript", icon: "/icons/js.svg" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "HTML/CSS", icon: "/icons/html5.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "Dart", icon: "/icons/dart.png" },
      { name: "Java", icon: "/icons/java.png" },
    ],
    Frameworks: [
      { name: "Node.js", icon: "/icons/node.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "Bootstrap", icon: "/icons/bootstrap.png" },
      { name: "Flutter", icon: "/icons/flutter.png" },
    ],
    Tools: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
      { name: "VS Code", icon: "/icons/vs-code.png" },
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Postman", icon: "/icons/postman.png" },
      { name: "JetBrains", icon: "/icons/jet-brains.png" },
      { name: "Copilot", icon: "/icons/copilot.png" },
      { name: "Gemini", icon: "/icons/gemini.png" },
      { name: "Adobe Illustrator", icon: "/icons/adobe illustrator.png" },
    ],
    Databases: [
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgres.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "Firebase", icon: "/icons/firebase.png" },
    ],
  };

  const events = [
    {
      title: "Philippine Innovation Conference 2025",
      location: "Batangas City",
      date: "November 2025",
      description:
        "Attended the Philippine Innovation Conference 2025 in Batangas City, where I gained valuable insights from various speakers and innovators during the two-day event focused on emerging technologies and innovation.",
      images: [
        "/events/Philippine Innovation Conference 2025 - 1.jpg",
        "/events/Philippine Innovation Conference 2025 - 2.jpg",
        "/events/Philippine Innovation Conference 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Group Manila – DEVFEST 2025",
      location: "BGC, Manila",
      date: "November 2025",
      description:
        "Explored new advancements in technology and Firebase integration through Google I/O sessions, and learned about various Google technologies such as Flutter and the Gemini CLI.",
      images: [
        "/events/Google Developer Group Manila – DEVFEST 2025 - 1.jpg",
        "/events/Google Developer Group Manila – DEVFEST 2025 - 2.jpg",
        "/events/Google Developer Group Manila – DEVFEST 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Group Manila – Google I/O Extended Manila 2025",
      location: "BGC, Manila",
      date: "July 2025",
      description:
        "Explored new advancements in technology and Firebase integration through Google I/O sessions.",
      images: [
        "/events/Google Developer Group Manila – Google IO Extended Manila 2025 - 1.jpg",
        "/events/Google Developer Group Manila – Google IO Extended Manila 2025 - 2.jpg",
        "/events/Google Developer Group Manila – Google IO Extended Manila 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Cloud Manila – Cloud Next Extended Manila 2025",
      location: "Quezon City",
      date: "July 2025",
      description:
        "Attended discussions on emerging tech trends and best practices in using Firebase. Engaged with IT peers and developers to exchange insights on cloud innovation.",
      images: [
        "/events/Google Developer Cloud Manila – Cloud Next Extended Manila 2025 - 1.jpg",
        "/events/Google Developer Cloud Manila – Cloud Next Extended Manila 2025 - 2.jpg",
        "/events/Google Developer Cloud Manila – Cloud Next Extended Manila 2025 - 3.jpg",
      ],
    },
    {
      title: "Google Developer Group Manila – Build with AI Manila 2025",
      location: "Makati City",
      date: "May 2025",
      description:
        "Participated in sessions exploring the latest AI technologies from Google. Joined a hands-on workshop to create an AI agent and networked with professionals in the IT industry.",
      images: [
        "/events/Google Developer Group Manila – Build with AI Manila 2025 - 1.jpg",
        "/events/Google Developer Group Manila – Build with AI Manila 2025 - 2.jpg",
        "/events/Google Developer Group Manila – Build with AI Manila 2025 - 3.jpg",
      ],
    },
  ];

  if (!showMain) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-background z-[9999] transition-opacity duration-700 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center relative w-full h-32 px-8 overflow-hidden">
          {introTexts.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out ${getAnimationClass(
                index
              )}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent animate-gradient-slow">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-12">
        {/* About Section */}
        <section id="about" className="scroll-mt-20 space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">About Me</h2>
          <Card className="p-4 sm:p-6 border border-border bg-card">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hi there!
            </p>
            <p className="text-base text-foreground font-medium">
              I'm Tammy Jane M. Magpantay
            </p>
          </Card>

          <Card className="p-4 sm:p-6 border border-border bg-card">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm a curious developer, designer, and IT enthusiast currently
              studying at Batangas State University TNEU – Lipa Campus. I build
              user-focused web experiences—from clean front-end interfaces to
              functional back-end systems. I don't just code; I design, iterate,
              and debug with intention. I enjoy exploring new technologies,
              continuously learning, and widening my horizons through deep
              curiosity.
            </p>
          </Card>

          <Card className="p-4 sm:p-6 border border-border bg-card">
            <h3 className="text-sm text-muted-foreground leading-relaxed">
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-4 sm:pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground/50" />
                  {index < education.length - 1 && (
                    <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+1rem)] bg-border" />
                  )}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-normal text-foreground mb-1">
                        {edu.degree}
                      </h4>
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

          <Card className="p-4 sm:p-6 border border-border bg-card">
            <h3 className="text-sm text-muted-foreground leading-relaxed">
              Experience
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {experienceTimeline.map((exp, index) => (
                <div key={index} className="relative pl-4 sm:pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground/50" />
                  {index < experienceTimeline.length - 1 && (
                    <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+1rem)] bg-border" />
                  )}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground sm:whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20 space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
          {educationFull.map((edu, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 border border-border bg-card"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.degree}
                  </p>
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
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20 space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-3 right-4 sm:right-6 z-10">
                <div className="bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
                  {project.pillLabel}
                </div>
              </div>

              <Card className="p-6 sm:p-8 border border-border bg-card rounded-2xl hover:border-muted-foreground/30 transition-all">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {project.category}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-base text-muted-foreground font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-80 lg:flex-shrink-0">
                    <div className="relative w-full aspect-video lg:aspect-square rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="scroll-mt-20 space-y-4 sm:space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Experience
          </h2>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 border border-border bg-card"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role}
                </h3>
                <Badge variant="secondary" className="text-xs w-fit">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company}
              </p>
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
        </section>

        {/* Tools Section */}
        <section id="tools" className="scroll-mt-20 space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(tools).map(([category, items]) => (
              <Card
                key={category}
                className="p-4 sm:p-6 border border-border bg-card"
              >
                <h3 className="text-base font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 px-3 py-2 bg-accent/50 text-accent-foreground rounded-md"
                    >
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Credentials Section */}
        <section
          id="credentials"
          className="scroll-mt-20 space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Micro Credentials
          </h2>

          {/* Certifications & Licenses */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Certifications & Licenses
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional certifications and official licenses
              </p>
            </div>
            <div className="space-y-3">
              {[
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
                  badge:
                    "/badges/Google Project Management Professional Certificate (v2).png",
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
                  badge:
                    "/badges/Google UX Design Professional Certificate.png",
                  link: "https://www.credly.com/badges/d0c01501-ef3d-4af7-afef-58e815f3fdf6",
                },
                {
                  name: "Google Digital Marketing & E-Commerce Professional Certificate",
                  issuer: "Google (via Coursera)",
                  date: "June 2025",
                  focus: "Digital Marketing, E-Commerce, Analytics",
                  badge:
                    "/badges/Google Digital Marketing and E-Commerce Professional Certificate.png",
                  link: "https://www.credly.com/badges/0493c842-dd42-4d67-9819-cd81eebb4728",
                },
              ].map((credential, index) => (
                <a
                  key={index}
                  href={credential.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-4 sm:p-6 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden">
                        <Image
                          src={credential.badge}
                          alt={credential.name}
                          width={96}
                          height={96}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="text-base font-semibold text-foreground leading-tight">
                          {credential.name}
                        </h4>
                        {credential.title && (
                          <p className="text-sm text-muted-foreground">
                            {credential.title}
                          </p>
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
              ))}
            </div>
          </div>

          {/* AI & Cloud */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                AI & Cloud Technologies
              </h3>
              <p className="text-sm text-muted-foreground">
                Artificial Intelligence and Cloud Computing credentials
              </p>
            </div>
            <div className="space-y-3">
              {[
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
                  badge:
                    "/badges/AWS Cloud Quest Cloud Practitioner - Training Badge.png",
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
              ].map((credential, index) => (
                <a
                  key={index}
                  href={credential.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-4 sm:p-6 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden">
                        <Image
                          src={credential.badge}
                          alt={credential.name}
                          width={96}
                          height={96}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="text-base font-semibold text-foreground leading-tight">
                          {credential.name}
                        </h4>
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
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="scroll-mt-20 space-y-4 sm:space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Events</h2>
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer"
              onClick={() =>
                setSelectedEvent({ title: event.title, images: event.images })
              }
            >
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                  {event.title}
                </h3>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </section>
      </div>

      {selectedEvent && (
        <EventImageDialog
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          eventTitle={selectedEvent.title}
          images={selectedEvent.images}
        />
      )}
    </>
  );
}
