"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Award,
  GraduationCap,
  Calendar,
  Share2,
  Mail,
  Facebook,
  Linkedin,
  MessageSquare,
  Github,
  Check,
} from "lucide-react";
import EventImageDialog from "@/components/EventImageDialog";
import ProjectDetailsDialog, {
  type Project,
} from "@/components/ProjectDetailsDialog";

export default function Home() {
  const [isExiting, setIsExiting] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    images: string[];
  } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [showCopied, setShowCopied] = useState(false);

  const [isVideoFading, setIsVideoFading] = useState(false);

  const handleVideoEnd = () => {
    // Stage 1: Fade out the video to black background
    setIsVideoFading(true);
    
    // Stage 2: After video fades, fade out the black background wrapper
    setTimeout(() => {
      setIsExiting(true);
      
      // Stage 3: After wrapper fades, show main content
      setTimeout(() => {
        setShowMain(true);
      }, 600);
    }, 600);
  };

  useEffect(() => {
    // Safety fallback: transition out after 9 seconds if video does not end or load
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 9000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  const getCarouselTrackStyle = (activeIndex: number) => ({
    transform: `translateX(calc(10% - ${activeIndex * 80}%))`,
  });

  const getCarouselDotClass = (index: number, activeIndex: number) =>
    `h-2 rounded-full transition-all duration-300 ${
      index === activeIndex ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/40"
    }`;

  // Data for all sections
  const education = [
    {
      degree:
        "Bachelor of Science in Information Technology Major in Service Management",
      institution: "Batangas State University TNEU – Lipa Campus",
      period: "2022 - 2026",
    },
    {
      degree: "TVL-IT - Mobile App and Web Development",
      institution: "STI College Batangas",
      period: "2020 - 2022",
    },
  ];

  const experienceTimeline = [
    {
      role: "DevOps Intern",
      company: "Internship",
      tags: [
        "Google Workspace Applications",
        "ZOHO CRM",
        "App Script",
        "Deluge",
      ],
      period: "Feb 2026 - May 2026",
    },
    {
      role: "Fullstack Developer",
      company: "Freelance",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Flutter",
        "Python",
        "SQL",
        "React",
        "React Native",
        "Node.js",
        "Tailwind CSS",
        "C++",
      ],
      period: "Jan 2025 - Present",
    },
    {
      role: "Associate Project Manager for Product and Innovation",
      company: "Tech Executive Labs",
      tags: ["Figma", "Blue", "Trello", "Adobe Illustrator"],
      period: "Feb 2025 - Dec 2025",
    },
  ];

  const educationFull = [
    {
      school: "Batangas State University TNEU – Lipa Campus",
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
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tammy-jane-magpantay-013777285/",
    },
    { name: "GitHub", icon: Github, href: "https://github.com/tjmagpantay" },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/tatamidesu/",
    },
    {
      name: "Discord",
      icon: MessageSquare,
      href: "https://discord.com/users/768389342162190356",
    },
  ];

  const projects = [
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
      tags: ["Jun 2025 – Aug 2025", "Flutter", "PHP", "REST API"],
      pillLabel: "Project",
      image: "/projects-img/3.png",
    },
    {
      category: "Reservation System",
      title: "Elnimo Reservation System",
      subtitle: "Elnimo's Resort Reservation System",
      description:
        "Developed core system functionalities, including the landing page, user registration and management, reservation processing, administrative booking management, and inventory tracking for resort operations.",
      tags: ["2026", "PHP, Bootstrap, MySQL, AppScript"],
      pillLabel: "Freelance",
      image: "/projects-img/1.png",
    },
    {
      category: "Compliance System",
      title: "COMET",
      subtitle: "Compliance Monitoring and Evaluation Tool",
      description:
        "Developed a full-stack web application for managing organizational compliance reports and document submissions, streamlining the monitoring and evaluation process for clients and administrators.",
      tags: ["2026", "PHP, Tailwind, MySQL, AppScript"],
      pillLabel: "Freelance",
      image: "/projects-img/8.png",
    },
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
      role: "DevOps Intern",
      company: "Internship",
      location: "McKinley, Taguig City",
      period: "February 2026 -  May 2026",
      description:
        "Developed and deployed 3 Google Workspace automation projects using Google App Script. Programmed CRM automations using Zoho Deluge, improving workflow efficiency and data management for the organization. Developed an After-Sales Workflow Blueprint in Zoho CRM that automated post-sales service tracking.",
      tools: [
        "Google Workspace Applications",
        "ZOHO CRM",
        "App Script",
        "Deluge",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Freelance",
      location: "San Jose, Batangas",
      period: "June 2025 – Present",
      description:
        "Developed and deployed 10+ full-stack web, mobile, and desktop applications tailored to client requirements using React, React Native, Flutter, Node.js, PHP, Python, SQL, Tailwind CSS, and C++, handling end-to-end development from system design and database integration to deployment",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Flutter",
        "Python",
        "SQL",
        "React",
        "React Native",
        "Node.js",
        "Tailwind CSS",
        "C++",
      ],
    },
    {
      role: "Associate Project Manager for Product and Innovation",
      company: "Tech Executive Labs",
      location: "Lipa City",
      period: "February 2025 - Present",
      description:
        "Led a team responsible for designing organizational products and ensuring alignment across departments.Designed user-centric prototypes and UI/UX flows using Figma, improving design clarity and development efficiency. Supported innovation initiatives through product ideation and market research. Collaborated with various departments, particularly the technology team, to initiate and propose solutions and interfaces that enhance products and support the organization’s mission.",
      tools: ["Figma", "Adobe Illustrator", "Canva", "Blue"],
    },
  ];

  const tools = {
    Languages: [
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "TypeScript", icon: "/icons/Typescript.svg.png" },
      { name: "AppScript", icon: "/icons/Google_Apps_Script.svg" },
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
      { name: "Claude", icon: "/icons/claude-icon-logo.png" },
      { name: "ZOHO CRM", icon: "/icons/Zoho_CRM_(application).svg" },
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
      title: "Build with AI 2026: Next-Gen Builders!",
      location: "GT-Toyota Asian Center, Katipunan Avenue, Quezon City",
      date: "April 2026",
      description:
        "Attended the final event of the Build with AI Manila 2026 Series, continuing to explore Google's AI and Cloud technologies through hands-on activities and technical sessions. Participated in a mini hackathon where attendees were challenged to develop an application within a limited timeframe. Beyond the technical learning, the event provided valuable networking opportunities and meaningful connections with fellow developers and technology enthusiasts.",
      images: [
        "/events/Build with AI 2026 Next-Gen Builders!_1.jpg",
        "/events/Build with AI 2026 Next-Gen Builders!_2.jpg",
        "/events/Build with AI 2026 Next-Gen Builders!_3.jpg",
      ],
    },
    {
      title: "Build with AI Manila 2026: Beyond the Prompt",
      location: "Accenture People Hub, 2 11th Drive, Taguig",
      date: "April 2026",
      description:
        "Attended the second Build with AI Manila 2026 event, where I participated in interactive codelabs focused on Retrieval-Augmented Generation (RAG), API integrations, and cloud deployment. The experience strengthened my understanding of modern AI development workflows and cloud-based application deployment.",
      images: [
        "/events/Build with AI Manila 2026 Beyond the Prompt_1.jpg",
        "/events/Build with AI Manila 2026 Beyond the Prompt_2.jpg",
        "/events/Build with AI Manila 2026 Beyond the Prompt_3.jpg",
      ],
    },
    {
      title: "Build with AI 2026: Break the Pattern",
      location: "Accenture People Hub, 2 11th Drive, Taguig",
      date: "March 2026",
      description:
        "Attended one of the Build with AI Manila 2026 events celebrating International Women's Day. Participated in hands-on codelabs and gained practical experience with Google's latest AI and Cloud technologies, including Gemini CLI, Antigravity, and Stitch. The event provided valuable insights into emerging AI tools and their real-world applications.",
      images: [
        "/events/Build with AI 2026 Break the Pattern_1.jpg",
        "/events/Build with AI 2026 Break the Pattern_2.jpg",
        "/events/Build with AI 2026 Break the Pattern_3.jpg",
      ],
    },
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
    {
      title:
        "Data Biz Lipa - Building A Connected Tomorrow - IOT Innovations and Beyond",
      location: "Lipa City",
      date: "April 2025",
      description:
        "Attended all sessions discussing IoT deployment in business and smart city initiatives. Gained insights from industry experts on leveraging IoT for innovation and efficiency.",
      images: [
        "/events/Data Biz Lipa - Building A Connected Tomorrow - IOT Innovations and Beyond - 1.jpg",
        "/events/Data Biz Lipa - Building A Connected Tomorrow - IOT Innovations and Beyond - 2.jpg",
        "/events/Data Biz Lipa - Building A Connected Tomorrow - IOT Innovations and Beyond - 3.jpg",
      ],
    },
  ];

  if (!showMain) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[#000000] z-[9999] transition-opacity duration-1000 ${
          isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-full max-w-2xl px-4 flex items-center justify-center">
          <video
            src="/video/cat-loadingv2.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className={`w-full h-auto object-contain transition-opacity duration-700 ${
              isVideoFading ? "opacity-0" : "opacity-100"
            }`}
            style={{
              width: "clamp(200px, 15vw, 1080px)", // Mobile-friendly, shrinks on very small screens but keeps aspect
              height: "auto",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-12">
        {/* About Section */}
        <section id="about" className="scroll-mt-20 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <Card className="p-0 border border-border bg-card md:col-span-1 overflow-hidden">
              <div className="relative w-full aspect-square bg-muted">
                <Image
                  src="/icons/profile.jpg"
                  alt="TJ Magpantay"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>

            {/* Right: Profile Content (3/4) */}
            <Card className="p-4 sm:p-6 border border-border bg-card md:col-span-3 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    Tammy Jane M. Magpantay
                  </p>
                  <p className="text-xs text-muted-foreground">
                    BSIT • Developer & Designer
                  </p>
                </div>
                {/* Action Icons */}
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: "TJ Magpantay Portfolio",
                          text: "Check out my portfolio!",
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="w-8 h-8 border border-secondary-accent bg-card hover:bg-secondary-accent/15 transition-colors rounded-lg flex items-center justify-center shrink-0"
                    aria-label="Share portfolio"
                  >
                    <Share2 className="h-3.5 w-3.5 text-foreground" />
                  </button>
                  <a
                    href="mailto:your.email@example.com"
                    className="w-8 h-8 border border-secondary-accent bg-card hover:bg-secondary-accent/15 transition-colors rounded-lg flex items-center justify-center shrink-0"
                    aria-label="Send email"
                  >
                    <Mail className="h-3.5 w-3.5 text-foreground" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm a curious developer, designer, and IT enthusiast. I build
                user-focused applications and system experiences from clean
                front-end interfaces to functional back-end systems. I don’t
                just code; I design, iterate, and debug with intention.
              </p>
            </Card>
          </div>

          <Card className="p-4 sm:p-6 border border-border bg-card">
            <h3 className="text-sm text-muted-foreground leading-relaxed">
              Experience
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {experienceTimeline.map((exp, index) => (
                <div key={index} className="relative pl-4 sm:pl-6 pr-20">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary-accent" />
                  {index < experienceTimeline.length - 1 && (
                    <div className="absolute left-0.75 top-4 w-0.5 h-[calc(100%+1rem)] bg-border" />
                  )}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {exp.company}
                    </p>
                    <span className="absolute right-0 top-0 text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="text-xs text-muted-foreground px-2.5 py-0.5 border border-secondary-accent bg-transparent"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border border-border bg-card">
            <h3 className="text-sm text-muted-foreground leading-relaxed">
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-4 sm:pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary-accent" />
                  {index < education.length - 1 && (
                    <div className="absolute left-0.75 top-4 w-0.5 h-[calc(100%+1rem)] bg-border" />
                  )}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-normal text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-muted-foreground">
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

          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* Email */}
              <Card className="p-4 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer relative">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("tjmagpantay23@gmail.com");
                    setShowCopied(true);
                    setTimeout(() => setShowCopied(false), 2000);
                  }}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">Email</span>
                </button>
                {showCopied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <Check className="h-3 w-3" />
                    Copied
                  </div>
                )}
              </Card>

              {/* Social Links */}
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Card
                    key={social.name}
                    className="p-4 border border-border bg-card hover:border-muted-foreground/30 transition-colors"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{social.name}</span>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
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
              className="relative p-4 sm:p-6 border border-border bg-card"
            >
              <Badge
                variant="secondary"
                className="text-xs w-fit absolute right-4 top-4 sm:right-6 sm:top-6"
              >
                {exp.period}
              </Badge>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-3 pr-20">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company}
              </p>
              {exp.location && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <MapPin className="h-3 w-3" />
                  <span>{exp.location}</span>
                </div>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              {exp.tools && exp.tools.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 mt-2">
                  {exp.tools.map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      className="text-xs text-muted-foreground px-3 py-1 border border-secondary-accent bg-transparent"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
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
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                {String(activeProjectIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveProjectIndex(
                      (prev) => (prev - 1 + projects.length) % projects.length,
                    )
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveProjectIndex(
                      (prev) => (prev + 1) % projects.length,
                    )
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-2 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={getCarouselTrackStyle(activeProjectIndex)}
              >
                {projects.map((project, index) => {
                  const isActive = index === activeProjectIndex;
                  return (
                    <div
                      key={project.title}
                      className={`min-w-[80%] w-[80%] px-1 sm:px-3 transition-all duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100 blur-none"
                          : "scale-[0.95] opacity-50 blur-[2px]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="block w-full text-left"
                      >
                        <Card className="h-88 sm:h-96 border border-white/10 bg-card/80 backdrop-blur-xl p-4 sm:p-6 transition-colors hover:border-muted-foreground/30">
                          <div className="flex h-full flex-col gap-4 sm:flex-row sm:items-stretch">
                            <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-muted sm:h-full sm:w-2/5">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="min-w-0 flex-1 space-y-4">
                              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                                <span>{project.category}</span>
                                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                                <span>{project.pillLabel}</span>
                              </div>
                              <div className="space-y-1">
                                <h3 className="text-xl font-semibold text-foreground leading-tight">
                                  {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {project.subtitle}
                                </p>
                              </div>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    className="border border-secondary-accent bg-transparent text-xs text-muted-foreground"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Tap the card to view project details.
                              </p>
                            </div>
                          </div>
                        </Card>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveProjectIndex(index)}
                  className={getCarouselDotClass(index, activeProjectIndex)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
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

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Certifications & Licenses
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional certifications and official licenses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  name: "PHILNITS Passer – 2025 (A)",
                  title: "IT Passport Examination",
                  issuer: "PHILNITS / IPA Philippines",
                  date: "2025",
                  badge: "/badges/PHILNITS.jpg",
                  link: "https://www.itpec.org/statsandresults/all-passers.html",
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
                  className="block h-full"
                >
                  <Card className="h-full p-4 sm:p-5 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer">
                    <div className="flex flex-row items-start gap-4">
                      <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden">
                        <Image
                          src={credential.badge}
                          alt={credential.name}
                          width={64}
                          height={64}
                          className="object-contain max-h-full max-w-full p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                          {credential.name}
                        </h4>
                        {credential.title && (
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {credential.title}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
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
                          <p className="text-[11px] text-muted-foreground pt-0.5">
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

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                AI & Cloud Technologies
              </h3>
              <p className="text-sm text-muted-foreground">
                Artificial Intelligence and Cloud Computing credentials
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  className="block h-full"
                >
                  <Card className="h-full p-4 sm:p-5 border border-border bg-card hover:border-muted-foreground/30 transition-colors cursor-pointer">
                    <div className="flex flex-row items-start gap-4">
                      <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-lg border border-border/50 flex items-center justify-center overflow-hidden">
                        <Image
                          src={credential.badge}
                          alt={credential.name}
                          width={64}
                          height={64}
                          className="object-contain max-h-full max-w-full p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                          {credential.name}
                        </h4>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
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
                          <p className="text-[11px] text-muted-foreground pt-0.5">
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
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                {String(activeEventIndex + 1).padStart(2, "0")} /{" "}
                {String(events.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveEventIndex(
                      (prev) => (prev - 1 + events.length) % events.length,
                    )
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
                  aria-label="Previous event"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveEventIndex((prev) => (prev + 1) % events.length)
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
                  aria-label="Next event"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-2 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={getCarouselTrackStyle(activeEventIndex)}
              >
                {events.map((event, index) => {
                  const isActive = index === activeEventIndex;
                  return (
                    <div
                      key={event.title}
                      className={`min-w-[80%] w-[80%] px-1 sm:px-3 transition-all duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100 blur-none"
                          : "scale-[0.95] opacity-50 blur-[2px]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedEvent({
                            title: event.title,
                            images: event.images,
                          })
                        }
                        className="block w-full text-left"
                      >
                        <Card className="h-96 sm:h-104 border border-white/10 bg-card/80 backdrop-blur-xl p-4 sm:p-6 transition-colors hover:border-muted-foreground/30">
                          <div className="flex h-full flex-col justify-between gap-4">
                            <div className="space-y-3">
                              <h3 className="text-xl font-semibold text-foreground leading-tight">
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

                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {event.description}
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              {event.images.slice(0, 3).map((image) => (
                                <div
                                  key={image}
                                  className="relative aspect-square overflow-hidden rounded-xl bg-muted"
                                >
                                  <Image
                                    src={image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {events.map((event, index) => (
                <button
                  key={event.title}
                  type="button"
                  onClick={() => setActiveEventIndex(index)}
                  className={getCarouselDotClass(index, activeEventIndex)}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {selectedProject && (
        <ProjectDetailsDialog
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}

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
