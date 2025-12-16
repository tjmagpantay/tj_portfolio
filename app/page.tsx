"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const router = useRouter();

  const introTexts = [
    "Hey, I'm Tj",
    "IT Professional in progress",
    "I turn ideas into digital realities",
  ];

  useEffect(() => {
    if (currentStep < introTexts.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 500);

      // Redirect to about page
      const redirectTimer = setTimeout(() => {
        router.push("/about");
      }, 1500);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(redirectTimer);
      };
    }
  }, [currentStep, introTexts.length, router]);

  if (!showMain) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-background z-[9999] transition-opacity duration-1000 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          {introTexts.map((text, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                currentStep === index
                  ? "opacity-100 scale-100"
                  : currentStep > index
                  ? "opacity-0 scale-95"
                  : "opacity-0 scale-105"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent animate-gradient px-8">
                {text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
