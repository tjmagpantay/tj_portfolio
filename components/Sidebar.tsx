"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
      id: "education",
      label: "Education",
      icon: GraduationCap,
      path: "#education",
    },
    { id: "projects", label: "Projects", icon: FileText, path: "#projects" },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      path: "#experience",
    },
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
      <div className="fixed top-0 left-0 right-0 z-[60] lg:hidden bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="h-10 w-10 rounded-sm overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src="/badges/tj-logo.png"
                alt="TJ Magpantay"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-foreground">
              TJ Magpantay
            </span>
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

      {/* Sidebar */}
      <div
        className={`fixed lg:fixed right-0 lg:right-auto lg:left-8 xl:left-64 top-10 lg:top-8 bottom-0 lg:bottom-8 w-72 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <Card className="h-full border border-border bg-card rounded-none lg:rounded-lg shadow-sm flex flex-col">
          {/* Profile Section - Hidden on mobile, visible on desktop */}
          <div
            className="hidden lg:flex p-6 items-center gap-4 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="h-12 w-12 rounded-sm overflow-hidden bg-muted flex items-center justify-center">
              <Image
                src="/badges/tj-logo.png"
                alt="TJ Magpantay"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">
                TJ Magpantay
              </h2>
              <p className="text-sm text-muted-foreground">IT Student</p>
            </div>
          </div>

          <Separator className="hidden lg:block bg-border" />

          {/* Navigation Menu */}
          <nav className="flex-1 py-4 px-3 overflow-y-auto pt-6 lg:pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "secondary" : "ghost"}
                    className={`w-full justify-start gap-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                    onClick={() => handleNavigation(item.path, item.id)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </nav>

          <Separator className="bg-border" />

          {/* Socials Section */}
          <div className="p-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Socials
            </h3>
            <div className="flex flex-col gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
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
