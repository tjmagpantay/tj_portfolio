"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  User,
  FileText,
  Briefcase,
  Wrench,
  Award,
  Users,
  Linkedin,
  Github,
  Facebook,
  MessageSquare,
  Mail,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About Me", icon: User, path: "#about" },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      path: "#experience",
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      path: "#education",
    },
    { id: "projects", label: "Projects", icon: FileText, path: "#projects" },
    { id: "tools", label: "Tools", icon: Wrench, path: "#tools" },
    {
      id: "credentials",
      label: "Micro Credentials",
      icon: Award,
      path: "#credentials",
    },
    { id: "events", label: "Events", icon: Users, path: "#events" },
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

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string, id: string) => {
    if (pathname !== "/") {
      router.push("/" + path);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-60 lg:hidden bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo only */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src="/icons/porpol-catto.png"
                alt="TJ Magpantay"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Hamburger Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="h-10 w-10 rounded-md bg-transparent hover:bg-accent border-0 text-foreground p-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar — narrow icon-only */}
      <div
        className={`fixed lg:fixed right-0 lg:right-auto lg:left-52 xl:left-78 top-10 lg:top-8 bottom-0 lg:bottom-8 w-20 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <Card className="h-full border border-border bg-card rounded-none lg:rounded-xl shadow-sm flex flex-col items-center overflow-hidden">
          {/* Logo — desktop only */}
          <div
            className="hidden lg:flex p-4 items-center justify-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src="/icons/porpol-catto.png"
                alt="TJ Magpantay"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <Separator className="hidden lg:block bg-border w-10 mx-auto" />

          {/* Navigation — icon only in square containers */}
          <nav className="flex-1 py-3 px-2.5 pt-6 lg:pt-4">
            <div className="flex flex-col items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? "bg-secondary-accent text-white shadow-md shadow-secondary-accent/25"
                        : "text-muted-foreground hover:bg-secondary-accent/15 hover:text-foreground"
                    }`}
                    onClick={() => handleNavigation(item.path, item.id)}
                    aria-label={item.label}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </button>
                );
              })}
            </div>
          </nav>

          <Separator className="bg-border w-10 mx-auto" />

          {/* Socials — vertical layout */}
          <div className="px-2 pb-3 pt-2">
            <div className="flex flex-col items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-secondary-accent/15 hover:text-foreground"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
